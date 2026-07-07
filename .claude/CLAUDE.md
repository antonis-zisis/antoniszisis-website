# Project: antoniszisis-website

Personal website for Antonis Zisis.

## Tech Stack

- **Framework**: React Router v8 (file-based routing)
- **UI**: React 19, TypeScript, Tailwind CSS v4
- **Animations**: Framer Motion
- **Deployment**: Netlify
- **Package manager**: pnpm — always use `pnpm`, never `npm` or `yarn`
- **Node**: `>=24.0.0`

## Dev Commands

```bash
pnpm dev          # start dev server on port 3000
pnpm build        # production build
pnpm typecheck    # react-router typegen + tsc
pnpm lint         # eslint (quiet)
pnpm lint:fix     # eslint with auto-fix
pnpm format       # prettier write
pnpm format:check # prettier check
```

## Code Conventions

- Components live in `src/components/<name>/` with an `index.ts` barrel export
- Routes are in `src/routes/`
- Static data lives in `src/data/`
- Commits must follow **Conventional Commits** (enforced by commitlint + husky)

## Rules

- **Never commit unless explicitly asked by the user.**
