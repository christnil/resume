import matter from 'gray-matter';
import { marked } from 'marked';

const splitMarkdown = (body) => {
  const description = [];
  const roles = [];
  let role;
  for (const token of marked.lexer(body)) {
    if (token.type === 'space') continue;
    if (token.type === 'heading' && token.depth === 3) {
      role = { name: token.text, paragraphs: [] };
      roles.push(role);
    } else if (token.type === 'paragraph') {
      (role ? role.paragraphs : description).push(token.raw.trim());
    }
  }
  return { description, roles };
};

export const renderMarkdown = (markdown) => marked.parseInline(markdown);

export const parseContentFile = (source, path) => {
  const { data, content } = matter(source);
  const match = path.replace(/\\/g, '/').match(/\/(experience|education|personal)\/([^/]+)\.(en|sv)\.md$/);
  if (!match) throw new Error(`Invalid content path: ${path}`);
  const [, type, slug, language] = match;
  const date = (value) => value instanceof Date ? value.toISOString().slice(0, 10) : value;
  return { ...data, from: date(data.from), to: date(data.to), ...splitMarkdown(content), type, slug, language, sourceLanguage: language, hidden: data.hidden === true, tags: data.tags ?? [] };
};

const sortEntries = (entries) => entries.sort((a, b) => {
  if (!a.to !== !b.to) return a.to ? 1 : -1;
  const latestDate = (b.to || b.from).localeCompare(a.to || a.from);
  return latestDate || a.from.localeCompare(b.from);
});

export const createResume = (files, language, filters = {}) => {
  const parsed = Object.entries(files).map(([path, source]) => parseContentFile(source, path));
  const byTypeAndSlug = new Map(parsed.map((entry) => [`${entry.type}:${entry.slug}:${entry.language}`, entry]));
  const select = (type) => [...new Set(parsed.filter((entry) => entry.type === type).map((entry) => entry.slug))]
    .map((slug) => byTypeAndSlug.get(`${type}:${slug}:${language}`) || byTypeAndSlug.get(`${type}:${slug}:${language === 'en' ? 'sv' : 'en'}`))
    .filter(Boolean)
    .map((entry) => ({ ...entry, fallback: entry.language !== language }))
    .filter((entry) => !entry.hidden)
    .filter((entry) => !filters.only?.length || entry.tags.some((tag) => filters.only.includes(tag)))
    .filter((entry) => !filters.exclude?.length || !entry.tags.some((tag) => filters.exclude.includes(tag)));
  return { personal: select('personal')[0], experience: sortEntries(select('experience')), education: sortEntries(select('education')) };
};
