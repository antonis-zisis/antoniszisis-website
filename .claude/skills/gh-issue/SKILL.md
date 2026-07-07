---
name: gh-issue
description: Work a GitHub issue end-to-end — fetch, branch, implement, test. Handles bugs, features, chores. Invoke with /gh-issue <number>.
disable-model-invocation: true
argument-hint: <issue-number>
---

## Steps

1. Fetch the issue:

   ```bash
   gh issue view $ARGUMENTS
   ```

   Read the title, description, comments, and any linked PRs to understand intent. Note the issue type (bug, feature, chore) — it shapes the commit type and branch prefix.

2. If not already on a feature branch, create one. Pick a prefix that matches intent (`fix/`, `feat/`, `chore/`, `refactor/`, `docs/`):

   ```bash
   git checkout -b <prefix>/issue-$ARGUMENTS-<short-slug>
   ```

3. Explore the relevant code before changing anything. Project conventions (`.claude/CLAUDE.md`) are already in context — follow them; don't re-derive. Components live in `src/components/<name>/` with an `index.ts` barrel export, routes are in `src/routes/`, and static data lives in `src/data/`.

4. Implement the change.

5. For frontend changes, verify in a browser using the `verify` skill rather than starting the dev server inline.

6. Validate:

   ```bash
   pnpm typecheck
   pnpm lint
   ```

7. Summarise what changed and why. Do not commit or open a PR unless the user asks. When asked to open a PR, include `Closes #$ARGUMENTS` in the body and use the Conventional Commit type that matches the issue (`feat:`, `fix:`, `chore:`, etc.).
