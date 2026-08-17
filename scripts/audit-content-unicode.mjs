import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const contentDirectory = join(import.meta.dirname, '..', 'content');
const readMarkdownFiles = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  return entry.isDirectory() ? readMarkdownFiles(path) : entry.name.endsWith('.md') ? [path] : [];
});

const occurrences = new Map();
for (const path of readMarkdownFiles(contentDirectory)) {
  const characters = [...readFileSync(path, 'utf8')];
  for (const [index, character] of characters.entries()) {
    if (character.codePointAt(0) <= 0x7f) continue;
    const codePoint = `U+${character.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}`;
    const context = characters.slice(Math.max(0, index - 20), index + 21).join('').replace(/\n/g, '\\n');
    const entries = occurrences.get(codePoint) ?? [];
    entries.push({ path: relative(join(import.meta.dirname, '..'), path), context });
    occurrences.set(codePoint, entries);
  }
}

for (const [codePoint, entries] of [...occurrences].sort(([a], [b]) => a.localeCompare(b))) {
  console.log(`${codePoint} ${JSON.stringify(String.fromCodePoint(Number.parseInt(codePoint.slice(2), 16)))} (${entries.length})`);
  for (const { path, context } of entries) console.log(`  ${path}: ${JSON.stringify(context)}`);
}
