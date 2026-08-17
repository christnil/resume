import matter from 'gray-matter';
import { createResume, normalizeContentFile } from './content-normalizer.js';

export const parseContentFile = (source, path) => {
  const { data, content } = matter(source);
  return normalizeContentFile(data, content, path);
};

export { createResume };
