import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { EOL } from 'node:os';
import { createResume } from './src/content-normalizer.js';
import { parseContentFile } from './src/node-content-loader.js';
import { ui } from './src/i18n.js';

const contentDirectory = join(import.meta.dirname, 'content');
const readMarkdownFiles = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  return entry.isDirectory() ? readMarkdownFiles(path) : entry.name.endsWith('.md') ? [[`/${relative(import.meta.dirname, path)}`, readFileSync(path, 'utf8')]] : [];
});

const options = Object.fromEntries(process.argv.slice(2).map((argument) => {
  const [key, value] = argument.replace(/^--/, '').split('=');
  return [key, value];
}));
const language = options.lang === 'sv' ? 'sv' : 'en';
const tags = (name) => options[name]?.split(',').filter(Boolean);
const entries = readMarkdownFiles(contentDirectory).map(([path, source]) => parseContentFile(source, path));
const resume = createResume(entries, language, { only: tags('only'), exclude: tags('exclude') });
const escapeLatex = (text) => text
  .replace(/[\u200b\ufeff\u00ad]/g, '')
  .replace(/\\/g, '\\textbackslash{}')
  .replace(/([&%$#_{}])/g, '\\$1')
  .replace(/~/g, '\\textasciitilde{}')
  .replace(/\^/g, '\\textasciicircum{}')
  .replace(/“|”/g, (character) => character === '“' ? '``' : "''")
  .replace(/‘|’/g, (character) => character === '‘' ? '`' : "'")
  .replace(/–/g, '--')
  .replace(/—/g, '---')
  .replace(/…/g, '\\ldots{}')
  .replace(/\u00a0/g, '~')
  .replace(/[\u2009\u202f]/g, '\\,');
const inlineLatex = (markdown) => {
  const escaped = escapeLatex(markdown);
  return escaped.replace(/\*\*(.+?)\*\*/g, '\\textbf{$1}').replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '\\textit{$1}');
};
const paragraphs = (items) => items.map(inlineLatex).join(`${EOL}${EOL}`);
const entryTitle = (entry, title) => [entry.company || entry.institute, entry.project || entry.degree].filter(Boolean).join(' - ') || title;

const lines = [
  '\\documentclass[letterpaper,11pt]{article}', '', '\\def\\hextheme{3f51b5}', '', '\\setlength{\\parindent}{0em}', '\\setlength{\\parskip}{1em}', '', '\\usepackage{chriscv}', '', '\\begin{document}', '',
  `\\headingname{${escapeLatex(resume.personal.name)}}`,
  ...(resume.personal.title ? [`\\headingsubtitle{${escapeLatex(resume.personal.title)}}`] : []),
  '', paragraphs(resume.personal.description), '', `\\section{${ui[language].experience}}`, '',
];
for (const entry of resume.experience) {
  lines.push(`\\subsection{${escapeLatex(entryTitle(entry))}}`);
  if (entry.via) lines.push(`\\entryvia{via ${escapeLatex(entry.via)}}`);
  lines.push(`\\duration{${entry.from} - ${entry.to || ui[language].ongoing}}`, '');
  if (entry.tags.length) lines.push(`{\\small\\color{color-detail}${entry.tags.map(inlineLatex).join(' $\\cdot$ ')}}`, '');
  if (entry.description.length) lines.push(paragraphs(entry.description), '');
  for (const role of entry.roles) {
    lines.push('\\begin{mdframed}[style=project]', `\\textbf{${inlineLatex(role.name)}}`, '');
    if (role.paragraphs.length) lines.push(paragraphs(role.paragraphs));
    lines.push('\\end{mdframed}', '');
  }
}
lines.push(`\\section{${ui[language].education}}`, '');
for (const entry of resume.education) {
  lines.push(`\\subsection{${escapeLatex(entryTitle(entry))}}`, `\\duration{${entry.from} - ${entry.to || ui[language].ongoing}}`, '');
}
lines.push('\\end{document}', '');

const filename = `christoffer-nilsson-${language}.tex`;
writeFileSync(join(import.meta.dirname, filename), lines.join(EOL));
console.log(`generated ${filename}`);
