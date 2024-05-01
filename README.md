# Antonis Zisis

Documentation for the **Antonis Zisis** website.

- Domain name: <www.antoniszisis.com>
- Domain registed at: <www.papaki.gr>
- DNS handled at: <www.netlify.com>

## Tech Stack

- React: 18
- Remix: 2.9 with Vite
- NodeJS: 20.11.1
- PNPM

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

This project is setup to **automatically deploy** to production with Netlify. This will only work with commits to **main**. Simply commit and push to **main** (ideally using a PR), and that's it, Netlify will pick up the changes, build and deploy to production.

_Create and work on a different brach for changes not yet to be deployed to production._
