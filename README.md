# shubhamkataria.com

Source for [shubhamkataria.com](https://shubhamkataria.com), the portfolio of Shubham Kataria, a backend and full-stack software engineer in Auckland, New Zealand.

It's a single-page React app (Create React App) hosted on GitHub Pages. It also holds the source for the downloadable CV.

## Structure

```
src/components/      One component and stylesheet per page section:
                     Home (hero), ServiceCrown (featured case study), Experience,
                     Projects, Skills, Education, Contact, Navbar
src/App.css          Design tokens, shared styles, focus and reduced-motion rules
public/index.html    Page metadata (SEO, Open Graph, Twitter), font and photo preloads
public/images/       Profile photo, in two sizes
cv/                  HTML source for the CV
public/Shubham_Kataria_CV.pdf   Generated CV, served at /Shubham_Kataria_CV.pdf
```

Placeholders for content that hasn't been written yet render only in development (`npm start`). Production builds leave them out.

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Dev server at http://localhost:3000 |
| `npm run build` | Production build into `build/` |
| `npm run cv` | Regenerates `public/Shubham_Kataria_CV.pdf` from `cv/Shubham_Kataria_CV.html` with headless Chrome (macOS path) |
| `npm run deploy` | Builds, then publishes `build/` to the `gh-pages` branch |

After changing the CV, check it is still two A4 pages: `pdfinfo public/Shubham_Kataria_CV.pdf`.

## Deployment

- GitHub Pages serves the `gh-pages` branch at the custom domain in `public/CNAME`.
- Pushing to `main` does **not** deploy. `npm run deploy` automatically runs `predeploy` to rebuild the checked-out source, then publishes the resulting `build/` directory to `gh-pages`.
- **Rollback:** redeploy an earlier commit. Check it out, run `npm ci`, then `npm run deploy`. Alternatively, revert the latest commit on the `gh-pages` branch.
