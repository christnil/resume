import { createResume } from './content-normalizer';

const entries = Object.values(import.meta.glob('../content/**/*.md', { eager: true, import: 'default' }));

export const loadResume = (language) => createResume(entries, language);
