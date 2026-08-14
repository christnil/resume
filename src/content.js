import { createResume } from './content-loader';

const files = import.meta.glob('../content/**/*.md', { eager: true, query: '?raw', import: 'default' });

export const loadResume = (language) => createResume(files, language);
