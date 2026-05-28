# AGENTS.md

## Purpose

Instructions for AI coding agents working in this repository.
Use this file as the default behavior guide before making code or docs changes.

## Mandatory Skill Bootstrap

Before any response, clarification, plan, or code edit, agents must load and follow the using-superpowers skill first.

Required first skill:

- Primary path (from lock): `skills/using-superpowers/SKILL.md`
- Installed workspace path: `.agents/skills/using-superpowers/SKILL.md`

If these paths differ in a future setup, prefer the path defined in `skills-lock.json`.

Skill order policy:

1. Always run using-superpowers first.
2. If the task involves creating/changing behavior, features, UI, architecture, or implementation details, run brainstorming next before implementation.
3. If the task is frontend/UI implementation, run frontend-design after brainstorming approval.
4. Do not skip this order because a task seems simple.

Current skill inventory:

- `skills/using-superpowers/SKILL.md` (process gate for skill usage)
- `skills/brainstorming/SKILL.md` (required before creative/implementation work)
- `skills/frontend-design/SKILL.md` (required for frontend/UI design execution)

Subagent note:

- If a subagent task explicitly says to skip using-superpowers, follow the subagent stop rule in that skill.

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

## Execution Workflow

1. Use subagents first for discovery and analysis whenever possible.
2. Read relevant docs and matching code before editing.
3. Make the smallest change set that satisfies the request.
4. Keep docs synchronized with implementation when behavior/architecture changes.
5. Prefer updating existing files and patterns over introducing parallel patterns.
6. Validate with targeted checks before finalizing.

## Subagent-First Policy

Prefer subagents extensively and by default.

- Use subagents for first-pass exploration, repository scanning, pattern discovery, and documentation audits.
- Use subagents for independent investigations (bugs, tests, architecture questions, and impact analysis) before implementing changes.
- Use subagents in parallel whenever tasks are independent.
- For non-trivial work, split the problem into focused subagent tasks and synthesize results.
- Keep each subagent prompt narrow, explicit, and outcome-driven.

Only skip subagents when the task is truly trivial and deterministic (for example: one obvious small edit in one known file).

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
