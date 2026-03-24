---
name: vanilla-js-vite-dev
description: >
  Vanilla JS + Vite development patterns for yazilim.vip website — content editing,
  CSS custom properties, hash navigation, scroll effects, and GitHub Pages deployment.
  Use when editing content, styling, adding sections, or modifying build/deploy config.
---

# Vanilla JS + Vite Development

## Architecture

Single-page static website with hash-based navigation (`/#about`, `/#portfolio`, `/#team`, `/#contact`).

```
www/
├── index.html           # Single entry point — ALL content is inline HTML
├── assets/
│   ├── css/style.css    # All styles (CSS custom properties)
│   ├── js/main.js       # Navigation, scroll effects, animations
│   └── img/             # Static assets (logo, team photos)
vite.config.js           # Vite 8 config (root: www, outDir: ../dist)
```

## Content Editing

All content lives in `www/index.html`. There are no JS data files, no JSON, no constants — edit the HTML directly.

- **Team members**: Add/edit `<div>` blocks in the `#team` section
- **Portfolio projects**: Add/edit blocks in the `#portfolio` section
- **Sections**: Each section has an `id` attribute matching the hash route

## Styling

All styles in `www/assets/css/style.css` using CSS custom properties:

- Theme color: `--color-primary: #1c5c93` (dark blue)
- Background: `--color-bg`, `--color-bg-alt`
- Text: `--color-text`, `--color-text-light`
- Fonts: Inter (body), JetBrains Mono (code) — loaded from Google Fonts

## JavaScript Behavior

`www/assets/js/main.js` handles:
- Mobile menu toggle
- Header scroll effect (adds shadow on scroll)
- Active nav highlighting based on scroll position
- Fade-in animations on scroll (Intersection Observer)
- Back-to-top button visibility

No frameworks, no bundled JS dependencies at runtime.

## Build & Deploy

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Preview | `npm run preview` |

Deployment: GitHub Pages via GitHub Actions. Triggers on push to `main`. Build output: `dist/`.

## Key Rules

- No frameworks — vanilla JS only
- No CSS frameworks — custom CSS only
- All content inline in HTML — no data files
- Vite handles asset hashing and minification for production
- Theme color `#1c5c93` must be consistent across all elements
