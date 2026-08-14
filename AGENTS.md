# AGENTS.md

Personal résumé site (Vite / React), deployed to GitHub Pages at https://christnil.github.io/resume via `gh-pages`.

## Layout
- `src/data/` is the single source of truth for résumé content — plain JS objects, not markup. Edit content here, never in components. `src/data/index.js` exposes `sv` and `en` trees (note: `sv.personal` is deliberately aliased to `personal.en`). Content has been reconciled against the May 2023 `Resume.pdf`.
- `src/data/experience/<company>/{en,sv}.js` — per-employer entries; not every company has both locales.
- `src/data/personal/spotify.js` — an alternate personal section used only by the Spotify cover-letter variant.
- `src/app/` — presentation components (`personal`, `experience`, `education`, `skills`), each with a co-located CSS file. `src/app/index.jsx` renders only the `en` tree.
- `chriscv.sty` — custom LaTeX class used by both PDF generators.

## PDF generation
- `npm run generatepdf` runs the native ESM `create-tex.mjs` generator (writing `christoffer-nilsson-en.tex` at the repository root), creates `dist/` if needed, then runs `pdflatex -output-directory dist`. It requires a local `pdflatex`.
- `npm run generatepdf:spotify` runs `create-tex-spotify.mjs` and writes `christoffer-nilsson-spotify.tex` at the repository root.
- `*.tex` and `*.pdf` are gitignored, so generated artifacts never show in `git status`.
- `src/app/index.jsx` hardcodes the PDF link path `/resume/christoffer-nilsson-en.pdf`, matching the Pages subpath in `homepage` and Vite's `/resume/` base.

## Resume.pdf (untracked)
`Resume.pdf` at the repository root is gitignored and is not produced by this pipeline. Do not commit or delete it.

## Commands
`npm run start` (Vite dev server) · `npm run build` (production output in `dist/`) · `npm run deploy` (build + generatepdf + gh-pages).
There is no lint, typecheck, or test command; there are no test files.
