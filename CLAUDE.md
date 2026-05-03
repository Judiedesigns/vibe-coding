# Florence Eze — Portfolio Project Guide

## What this project is
A personal portfolio site for Florence Eze, a product designer. It displays a GitHub-style contributions calendar where each active day links to a vibe-coding project built during a 20-day AI build sprint (March–April 2026). Built with vanilla HTML, CSS, and JavaScript. Deployed on Vercel at `https://vibe-coding.vercel.app/`.

---

## Project structure

| File | Purpose |
|------|---------|
| `index.html` | Main layout — sidebar, calendar, right panel, footer |
| `styles.css` | All styles including dark mode (`body.dark`) |
| `script.js` | Calendar data, project data, panel logic, music player, theme toggle |
| `vercel.json` | Security headers (CSP, X-Frame-Options, etc.) |
| `robots.txt` | Crawler permissions |
| `sitemap.xml` | Site map for Google indexing |
| `favicon.svg` | FE monogram favicon |
| `projects/` | Media files — `.mp4` videos and `.png`/`.jpg` images per day |
| `songs/` | Music player tracks (`song-1.mp3` … `song-11.mp3`) |

---

## How to add a new project

### Main challenge projects (days 1–20)
Add an entry to the `projects` object in `script.js`:
```js
32: { title: 'Project Name', day: 20, image: 'projects/day-20.mp4', desc: 'One sentence description.', url: 'https://live-link.vercel.app', prompt: 'The prompt used to build it.' }
```
Then mark the calendar cell active in the `weeks` array: change `i32` → `a32`.

### Side / extra projects
Add an entry to `extraProjects` in `script.js`:
```js
e4: { num: 5, title: 'Project Name', desc: 'One sentence description.', image: 'projects/extra4.png', url: 'https://live-link.vercel.app' }
```
Then add `'e4'` to an empty slot in the `weeks` array (last row has spare cells).

---

## SEO rules — always follow these

### Meta tags (index.html `<head>`)
- `<title>` — keep as `Florence Eze — [descriptor]`
- `<meta name="description">` — max 155 characters, include "product designer", "startups", and a differentiator
- `<meta name="author">` — always `Florence Eze`
- `<link rel="canonical">` — always `https://vibe-coding.vercel.app/`
- Open Graph: `og:title`, `og:description`, `og:image`, `og:url` must all be present
- Twitter: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` must all be present

### JSON-LD (index.html)
Keep the `<script type="application/ld+json">` Person schema up to date. If Florence adds new social/portfolio links, add them to the `sameAs` array.

### Semantic HTML
- Her name must be in an `<h1>` with class `name`
- Job title must be in an `<h2>` with class `title`
- Never downgrade these back to `<p>` tags

### sitemap.xml
Update `<lastmod>` whenever significant content changes are deployed.

### External links
All `target="_blank"` links must include `rel="noopener noreferrer"`. Never omit this.

---

## Security rules — always follow these

`vercel.json` provides HTTP security headers for every route. Do not remove or weaken:
- `X-Frame-Options: DENY` — prevents clickjacking
- `Content-Security-Policy` — controls resource loading; update `img-src` / `media-src` if new external domains are added for images or video
- `Referrer-Policy: strict-origin-when-cross-origin`

If new external font, image, or script sources are added, update the CSP `style-src`, `img-src`, or `script-src` directives accordingly.

---

## Dark mode
Dark mode is toggled by adding `body.dark`. All dark overrides live at the bottom of `styles.css` under `/* ── Dark mode ── */`. Never use inline dark styles — always add to that section.

## Git / deploy rules
- Commit changes, then **wait for the user to say "push"** before running `git push`
- Vercel auto-deploys on push to `master`
- Never force-push or amend published commits
