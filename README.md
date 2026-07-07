# Antonis Zisis

[![Netlify Status](https://api.netlify.com/api/v1/badges/99607c54-38dd-4e2e-998f-06bfbd9d3cea/deploy-status)](https://app.netlify.com/sites/antoniszisis/deploys)

Personal website at [www.antoniszisis.com](https://www.antoniszisis.com)

- Domain registered at: [Papaki](https://www.papaki.gr)
- Deployed and DNS handled at: [Netlify](https://www.netlify.com)
- Commits to `main` trigger an automatic production deploy.

## Tech Stack

- TypeScript
- React 19
- React Router 8
- Vite 8
- Tailwind CSS 4
- Node.js 24
- PNPM 10

## Scripts

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `pnpm dev`       | Start development server     |
| `pnpm build`     | Build for production         |
| `pnpm start`     | Start production server      |
| `pnpm lint`      | Run ESLint                   |
| `pnpm format`    | Run Prettier                 |
| `pnpm typecheck` | Run TypeScript type checking |

## Project Structure

```text
src/
├── components/   # Reusable UI components
├── contexts/     # React contexts (theme)
├── data/         # Static data (timeline, skills)
└── routes/       # Page routes (home, about, timeline, 404)
public/           # Static assets (fonts, favicon, sitemap)
```

## License

© 2026 Antonis Zisis. All rights reserved. This repository is public for reference and transparency only — no permission is granted to copy, modify, or redistribute the code.
