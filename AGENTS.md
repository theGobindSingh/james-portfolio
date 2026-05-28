# AGENTS.md

## Purpose

Instructions for AI coding agents working in this repository.
Use this file as the default behavior guide before making code or docs changes.

## Project Snapshot

- Stack: Next.js Pages Router + React + TypeScript + Emotion
- Styling: `@emotion/react`, `@emotion/styled`, theme via `@kami-ui/next-theme`
- Package manager: `pnpm`
- Core route status:
  - Implemented: homepage at `src/pages/index.tsx`
  - Not yet implemented: `/work` and `/work/[slug]` routes

## Commands

- Dev server: `pnpm dev`
- Build: `pnpm build`
- Start (prod): `pnpm start`
- Lint: `pnpm lint`
- Lint with fixes: `pnpm lint:fix`

Important behavior:

- `pnpm build` runs `prebuild`, which runs `pnpm lint:fix`.
- `pnpm lint` and `pnpm lint:fix` both run Prettier in write mode and can modify files.

## Architecture Boundaries

- `src/pages`: route entry files (keep thin)
- `src/modules`: page/domain composition logic
- `src/components`: reusable UI units
- `src/styles/global.ts`: global styles + breakpoints + media queries
- `src/theme.ts`: tokenized theme setup
- `src/data.ts`: static content/config values

## Naming and File Placement

- Components/modules use kebab-case directories.
- Typical component layout:
  - `index.tsx` for render/component logic
  - `styles.ts` for Emotion styles
- Existing exception: `src/components/dual-button/style.ts` (singular). Preserve existing naming in touched areas.
- Icons are under `src/icons/v2`.

## Coding Conventions

- Prefer path aliases from `tsconfig.json` (`@components/*`, `@modules/*`, `@styles/*`, `@data`, etc.).
- Keep pages simple; move section composition into modules.
- Use default exports for React component files.
- Keep static copy/config in `src/data.ts` when appropriate.
- Use `forwardRef` pattern where refs are part of existing component patterns.

## Styling Conventions

- Use Emotion only (`css` and `styled`).
- Use theme/global CSS variables (`--color-*`, `--fs-*`, `--font-*`) before hardcoded values.
- Use `mediaQuery` helpers from `src/styles/global.ts` for responsive behavior.
- Do not introduce Tailwind classes unless the stack is intentionally migrated.

## Docs and Source-of-Truth Links

- Project overview: [docs/00-OVERVIEW.md](docs/00-OVERVIEW.md)
- Design/token system: [docs/01-DESIGN-SYSTEM.md](docs/01-DESIGN-SYSTEM.md)
- Setup/architecture: [docs/02-SETUP.md](docs/02-SETUP.md)
- Components inventory: [docs/03-COMPONENTS.md](docs/03-COMPONENTS.md)
- Homepage current state: [docs/04-PAGE-HOME.md](docs/04-PAGE-HOME.md)
- Case studies status/plan: [docs/05-PAGE-CASE-STUDIES.md](docs/05-PAGE-CASE-STUDIES.md)

When docs and code differ, update docs to reflect current implementation state, then propose migrations separately.

## Guardrails

- Do not use App Router patterns (`app/`, `generateStaticParams`) in this repo.
- Do not assume case-study pages exist yet; check `src/pages/work` before implementing related changes.
- Avoid broad refactors unrelated to the requested task.
- Preserve existing public APIs and naming unless explicitly asked to change them.
