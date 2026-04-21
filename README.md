# sakethpilli007.github.io

Personal portfolio site for **PR Saketh** — Computer Science at Churchill, Cambridge.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages via Actions.

## Local dev

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output to ./dist
npm run preview    # preview production build
```

## Structure

```
src/
├── config.ts                 Site-wide data (name, links, nav)
├── layouts/BaseLayout.astro  HTML shell + meta tags
├── components/               Nav, Footer, ProjectCard, etc.
├── content/                  MDX content collections
│   ├── projects/             One file per portfolio project
│   ├── research/             Paper abstracts (elliptic = deep-dive)
│   └── beyond-the-code/      Service / leadership entries
├── pages/                    Routes
└── styles/global.css         Tailwind + KaTeX
```

## Deployment

Every push to `main` rebuilds and deploys via `.github/workflows/deploy.yml` using `actions/deploy-pages@v4`.

Required repo secrets (set in Settings → Secrets and variables → Actions):
- `PUBLIC_TURNSTILE_SITEKEY` — Cloudflare Turnstile sitekey (Phase 7)
- `PUBLIC_WEB3FORMS_KEY` — Web3Forms access key (Phase 8)

## Plan

See [`docs/PROJECT_PLAN.md`](./docs/PROJECT_PLAN.md) for the full build plan.
