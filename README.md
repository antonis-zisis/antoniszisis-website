# Antonis Zisis

[![Netlify Status](https://api.netlify.com/api/v1/badges/99607c54-38dd-4e2e-998f-06bfbd9d3cea/deploy-status)](https://app.netlify.com/sites/antoniszisis/deploys)

Documentation for the **Antonis Zisis** website.

- Domain name: <www.antoniszisis.com>
- Domain registed at: <www.papaki.gr>
- Deployed and DNS handled at: <www.netlify.com>

## Tech Stack

- TypeScript
- React: 19
- React Router: 7
- Vite: 6
- NodeJS: 22.14.0
- PNPM: 10.6.2
- Tailwind: 4

## Features

- [x] SSR and pre-rendered pages
- [x] Responsive / Mobile friendly
- [x] SEO Friendly
- [x] Light and Dark mode
- [x] Perfect Lighthouse Score

## Getting Started

Get the source code

```bash
git clone git@github.com:antonis-zisis/antoniszisis-website.git
```

Install dependencies

```bash
pnpm install
```

Run the development server

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build for production

```bash
pnpm run build
```

Start the production build

```bash
pnpm run start
```

## CI/CD

This project is setup to **automatically deploy** to production with Netlify. This will only work with commits to **main**. Simply commit and push to **main** (ideally using a PR), and that's it, Netlify will pick up the changes, build and deploy to production. Opening a PR will trigger a deploy preview generation with
Netlify and once completed a message will be posted on the PR with the deploy
preview link.

_Create and work on a different brach for changes not yet to be deployed to production._
