# Pooja Donode — Portfolio

Personal portfolio site for Pooja Donode, Software Engineer.

**Live site:** https://poojadonode28.github.io/pooja-portfolio/

## Stack

React 19 + TypeScript, built with Vite. Styling is hand-written CSS with semantic
design tokens; icons come from `lucide-react` (UI) and `simple-icons` (brand marks).

## Commands

```bash
npm install     # install dependencies
npm run dev     # start the dev server
npm test        # run the Vitest suite
npm run build   # type-check and build to dist/
npm run preview # preview the production build
```

## Deployment

Every push to `main` runs the test suite and publishes `dist/` to GitHub Pages via
`.github/workflows/deploy.yml`. The Vite `base` is set to `/pooja-portfolio/` to
match the repository subpath, so asset and résumé links resolve correctly.

## Content

Résumé content (roles, projects, skills, contact details) lives in `src/content.ts`.
Editing that file is enough to update the site — the layout reads from it.
The downloadable résumé PDF is `public/pooja-donode-resume.pdf`.
