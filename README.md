# Christoffer Nilsson's résumé

Personal résumé site built with React and Vite. It is deployed to GitHub Pages at <https://christnil.github.io/resume>.

Résumé content lives in `content/`; presentation components live in `src/app/`. The Vite multi-page build publishes English at `/resume/` and Swedish at `/resume/sv/`; each page links to the other. If an entry has no translation, it falls back to the available language and shows a muted language note.

## Content

Each entry is a Markdown file, discovered automatically with no registration files:

- `content/experience/<slug>.<lang>.md`
- `content/education/<slug>.<lang>.md`
- `content/personal/personal.<lang>.md`

YAML frontmatter holds metadata such as `company`/`institute`, `project`/`degree`, `from`, `to`, `tags`, and `hidden`. The Markdown body contains prose; `###` headings define experience roles. Tags are rendered as quiet per-entry metadata—there is no standalone keyword section or scoring model. Set `hidden: true` to suppress an entry from both site and PDFs.

## PDF pipeline

Install [Tectonic](https://tectonic-typesetting.github.io/) (`brew install tectonic`) or make `pdflatex` available. `npm run generatepdf` and `npm run generatepdf:sv` generate the English and Swedish TeX files and compile `dist/christoffer-nilsson-en.pdf` and `dist/christoffer-nilsson-sv.pdf`, respectively. Tectonic is preferred when present. The generator is a native ESM Node script and can run without a TeX engine:

```sh
node create-tex.mjs
node create-tex.mjs --lang=sv
node create-tex.mjs --lang=en --exclude=React,GraphQL
```

Use `--lang=en|sv` to choose the output language, `--only=tag1,tag2` to include entries matching at least one tag, or `--exclude=tag1,tag2` to omit entries matching any tag. The old Spotify-specific generator and variant have been removed.

Generated `.tex` and `.pdf` files are intentionally ignored by Git.

## Commands

- `npm install` — install dependencies.
- `npm run start` — start the Vite development server.
- `npm run build` — create the English and Swedish production pages in `dist/`.
- `npm run verify` — build, serve, and smoke-test both production pages in Chromium. Run `npx playwright install chromium` once after installing dependencies. It verifies rendered content, clean browser consoles, hidden entries, and language-specific PDF links. Run this before pushing when practical.
- `npm run generatepdf` / `npm run generatepdf:sv` — generate the language-specific PDF in `dist/`.
- `npm run deploy` — run the build and both PDF generators, then publish `dist/` to GitHub Pages; this remains the manual fallback.

## Deployment

The normal workflow is: edit the Markdown in `content/`, commit, and push to `master`. GitHub Actions installs dependencies and Tectonic, smoke-tests the production site, generates both PDFs, and publishes the complete `dist/` directory to the `gh-pages` branch. GitHub Pages serves that branch at <https://christnil.github.io/resume>. Pull requests to `master` run the same build, smoke test, and PDF checks but never publish.
