import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/resume/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        en: resolve(import.meta.dirname, 'index.html'),
        sv: resolve(import.meta.dirname, 'sv/index.html'),
      },
    },
  },
});
