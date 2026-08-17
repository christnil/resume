import { marked } from 'marked';

export const renderMarkdown = (markdown) => marked.parseInline(markdown);
