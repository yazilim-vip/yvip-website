# yazilim.vip Website

Static website for yazilim.vip — single-page with hash-based navigation, vanilla JavaScript, custom CSS, and Vite build pipeline. Deployed to GitHub Pages.

## IMPORTANT: Read skills FIRST

Before making ANY changes, you MUST read the relevant `.skills/` files. They contain the project's conventions, patterns, and capabilities. Do not guess or improvise — the answers are there.

- `.skills/vanilla-js-vite-dev/` — content editing, styling, navigation patterns, build and deployment

## Skills

- Skills: `.skills/` — on-demand agent capabilities and project knowledge following [agentskills.io](https://agentskills.io/specification)

## Tech Stack

- Vanilla JavaScript (no framework — no Vue, no React, no jQuery)
- Custom CSS (no Bootstrap or CSS framework)
- Vite 8 build pipeline (builds from `www/` to `dist/`)
- Google Fonts: Inter (body) + JetBrains Mono (code)
- GitHub Pages deployment at `www.yazilim.vip`

## Project Structure

```
www/
├── index.html                 # Single entry point (all content inline)
├── favicon.ico
├── assets/
│   ├── css/
│   │   └── style.css          # All styles (custom CSS, CSS variables)
│   ├── js/
│   │   └── main.js            # Navigation, scroll effects, animations
│   └── img/
│       ├── logo.svg           # Site logo
│       └── team/              # Team member photos
vite.config.js                 # Vite config (root: www, outDir: ../dist)
package.json                   # Build scripts
```

## Build & Run

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Preview | `npm run preview` |

## Code Style

- All content is hardcoded in HTML — no JS data files or constants
- Edit `index.html` directly for content changes (team, projects, sections)
- Edit `style.css` for styling (uses CSS custom properties, e.g., `--color-primary: #1c5c93`)
- Edit `main.js` for behavior changes
- No external dependencies at runtime

## Deployment

- GitHub Pages via GitHub Actions (`peaceiris/actions-gh-pages@v4`)
- Custom domain: `www.yazilim.vip` (CNAME injected during CI)
- Triggers on push to `main`
- Build output: `dist/` directory
