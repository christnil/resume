# Christoffer Nilsson's résumé

Personal résumé site built with React and Vite. It is deployed to GitHub Pages at <https://christnil.github.io/resume>.

Résumé content lives in `src/data/`; presentation components live in `src/app/`.

## Commands

- `npm install` — install dependencies.
- `npm run start` — start the Vite development server.
- `npm run build` — create a production build in `dist/`.
- `npm run generatepdf:spotify` — generate the Spotify variant's `.tex` source.
- `npm run deploy` — publish `dist/` to GitHub Pages. Its `predeploy` hook builds the site and generates the standard PDF first.

## PDF pipeline

`npm run generatepdf` generates `christoffer-nilsson-en.tex` and compiles it to PDF in `dist/`. It requires a local `pdflatex` installation. The TeX generators are native ESM Node scripts and can be run without LaTeX:

```sh
node create-tex.mjs
npm run generatepdf:spotify
```

Generated `.tex` and `.pdf` files are intentionally ignored by Git.
