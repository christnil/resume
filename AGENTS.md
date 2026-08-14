# AGENTS.md

Personal résumé site (Vite / React), deployed to GitHub Pages at https://christnil.github.io/resume via `gh-pages`.

## Layout
- `content/` is the single source of truth for résumé content. Each entry is Markdown: `experience/<slug>.<lang>.md`, `education/<slug>.<lang>.md`, or `personal/personal.<lang>.md`. YAML frontmatter holds metadata (`company`/`institute`, `project`/`degree`, dates, `tags`, and `hidden`); the body holds prose and `###` role headings.
- Content is discovered automatically—Vite uses glob imports and the Node generator scans files. Do not add registration/index files. Missing translations fall back to the available language and are marked in the output.
- `src/app/` contains presentation components for personal, experience, and education. `src/i18n.js` contains static UI chrome only.
- `chriscv.sty` is the custom LaTeX class used by the PDF generator.

## PDF generation
- Install Tectonic (`brew install tectonic`) or `pdflatex` before generating PDFs. `npm run generatepdf` and `npm run generatepdf:sv` prefer Tectonic when present and write the English and Swedish PDFs to `dist/`. `create-tex.mjs` supports `--lang=en|sv`, `--only=tag1,tag2`, and `--exclude=tag1,tag2`; `hidden: true` excludes an entry everywhere.
- Tags are quiet per-entry metadata. There is no keyword scoring section or Spotify-specific variant.
- `*.tex` and `*.pdf` are gitignored, so generated artifacts never show in `git status`.
- Vite builds English at `/resume/` and Swedish at `/resume/sv/`, with cross-links and language-specific PDF links.

## Resume.pdf (untracked)
`Resume.pdf` at the repository root is gitignored and is not produced by this pipeline. Do not commit or delete it.

## Commands
`npm run start` (Vite dev server) · `npm run build` (both production pages in `dist/`) · `npm run generatepdf` / `npm run generatepdf:sv` (language-specific PDFs) · `npm run deploy` (build + both PDFs + gh-pages).
There is no lint, typecheck, or test command; there are no test files.
