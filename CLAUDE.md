# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Nebin Biju's personal portfolio — a static HTML/CSS/JS site deployed to GitHub Pages at `nebinbiju.com` (see [CNAME](CNAME)). No build step, no package manager, no tests, no framework. Edit the HTML/CSS/JS and push to `main` to deploy.

## Local development

Open files directly in the browser, or serve from the repo root if you need relative paths and query params to behave normally:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Architecture

### Page layout

Six top-level pages at the repo root, each a standalone HTML file:

- [index.html](index.html) — home (`body.pg-home`)
- [projects.html](projects.html) — project listing (`body.pg-projects`)
- [project.html](project.html) — project detail, selected by `?id=N` (`body.pg-project`)
- [blogs.html](blogs.html) — blog listing (`body.pg-blogs`)
- [blog.html](blog.html) — blog detail, selected by `?id=N` (`body.pg-blog`)
- [about.html](about.html) — about (`body.pg-about`)

All pages share [styles.css](styles.css) and [favicon.js](favicon.js) (a pixel-art canvas-rendered favicon).

### `body.pg-*` is the styling backbone

Every page sets a unique `pg-*` class on `<body>`. The CSS in [styles.css](styles.css) leans heavily on these as scoping prefixes — e.g. `body.pg-blog .blog-title` and `body.pg-blogs .blog-title` style the same class differently per page. When editing styles, identify which page-scope rule applies, don't just match by class name.

### Content lives inside the HTML files, not in data files

There is no CMS, JSON, or markdown content store. To add or edit a project/blog, edit the JS object inside the corresponding detail page:

- **Projects** — the `projects` array at [project.html:50](project.html#L50) holds title/desc/tags/color, and the `projectContent` object further down (around [project.html:148](project.html#L148)) holds the per-id HTML body keyed by numeric id. The [projects.html](projects.html) listing has its own hardcoded `<a class="card">` block per project, which must be added in parallel.
- **Blogs** — the `POSTS` array at [blog.html:47](blog.html#L47) holds full post content as HTML strings. Listing cards in [blogs.html](blogs.html) are likewise hardcoded.

Adding a new project/blog requires updating **both** the listing page and the detail page's data array. Ids in the URL (`?id=N`) are array indices, so reordering changes URLs.

### Heavy slide assets are hosted on GitHub Releases, not in the repo

For image-heavy projects (Atlassian id=0, Data selection id=5), [project.html](project.html) builds image URLs pointing at `github.com/nebinbiju1/nebinbiju1.github.io/releases/download/slides-v1/NN.png` etc. The repo's [.gitignore](.gitignore) also excludes `images/PNG/` and most of `Videos/`. Don't commit large slide decks — upload them as a release asset and reference the URL.

### Password-gated projects

In [projects.html](projects.html), cards intended to be gated use `data-href` instead of `href`. The `passwords` object (around [projects.html:133](projects.html#L133)) maps `data-href` → plaintext password. A click intercept shows the modal in `#modal-overlay` and only navigates after the password matches. This is **client-side only** — it deters casual visitors, not anyone reading the source. Don't treat it as security.

### Project detail page behavior

[project.html](project.html) renders different layouts per id via `if (id === ...)` branches in the script: dummy header block, hero gradient vs. image, the report-link button on id=2, the YouTube facade on id=4 (click thumbnail → swap to embedded iframe), etc. Per-id branches are the norm here; expect to add one when introducing a new project that needs custom treatment.

## Style guide

[STYLE_GUIDE.md](STYLE_GUIDE.md) is the source of truth for colors, typography, max-widths, and responsive breakpoints. Read it before adding new components or tweaking layout. Key things worth internalizing up front:

- **Lowercase prose convention** — Titles use `text-transform: lowercase` with `::first-letter { text-transform: uppercase }`. To preserve casing inside a title (e.g. proper nouns, acronyms), wrap that span in `class="keep-case"`.
- **Three responsive breakpoints** — `≤900px`, `≤600px`, `≤380px`. Mobile work tends to iterate at the 600px and 380px breakpoints; check existing media queries near the rule you're editing before adding a new one.
- **Accent color is `#f1629c`** (pink). Used for links, tags, active nav, and hover states throughout.

## Deployment

Pushing to `main` deploys via GitHub Pages. The remote is `https://github.com/nebinbiju1/nebinbiju1.github.io.git` and the custom domain is set in [CNAME](CNAME). There is no staging environment — `main` is production.
