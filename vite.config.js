import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const hiddenContentPatterns = (directory, root) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  if (entry.isDirectory()) return hiddenContentPatterns(path, root);
  if (!entry.name.endsWith('.md') || !/^---[\s\S]*?\nhidden:\s*true\s*\n---/.test(readFileSync(path, 'utf8'))) return [];
  return [`!../${relative(root, path)}`];
});

const excludeHiddenResumeContent = (root) => ({
  name: 'exclude-hidden-resume-content',
  enforce: 'pre',
  transform(source, id) {
    if (!id.endsWith('/src/content.js')) return null;
    const patterns = ["'../content/**/*.md'", ...hiddenContentPatterns(join(root, 'content'), root).map((pattern) => `'${pattern}'`)];
    return source.replace("import.meta.glob('../content/**/*.md'", `import.meta.glob([${patterns.join(', ')}]`);
  },
});

export default defineConfig({
  base: '/resume/',
  plugins: [react(), excludeHiddenResumeContent(import.meta.dirname)],
  build: {
    rollupOptions: {
      input: {
        en: resolve(import.meta.dirname, 'index.html'),
        sv: resolve(import.meta.dirname, 'sv/index.html'),
      },
    },
  },
});
