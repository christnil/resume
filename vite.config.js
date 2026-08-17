import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { parseContentFile } from './src/node-content-loader.js';

const resumeContentLoader = () => ({
  name: 'resume-content-loader',
  transform(source, id) {
    if (!id.endsWith('.md')) return null;
    return `export default ${JSON.stringify(parseContentFile(source, id))};`;
  },
});

export default defineConfig({
  base: '/resume/',
  plugins: [resumeContentLoader(), react()],
  build: {
    rollupOptions: {
      input: {
        en: resolve(import.meta.dirname, 'index.html'),
        sv: resolve(import.meta.dirname, 'sv/index.html'),
      },
    },
  },
});
