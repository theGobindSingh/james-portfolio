# James Loder Portfolio - Project Setup and Architecture (Current Repo)

This guide documents the current repository setup as implemented today.

---

## Tech Stack

- Next.js `16.x`
- React `19.x`
- TypeScript `6.x`
- Emotion (`@emotion/react`, `@emotion/styled`)
- Theme system: `@kami-ui/next-theme`
- UI primitives: `@kami-ui/react-components`
- Smooth scroll: `lenis`
- Package manager: `pnpm`
- Lint/format: ESLint + Prettier

This project uses the Pages Router (`src/pages`), not App Router.

---

## Install and Run

```bash
pnpm install
pnpm dev
```

Other scripts:

```bash
pnpm lint
pnpm lint:fix
pnpm build
pnpm start
```

Notes:

- `prebuild` runs `pnpm lint:fix`
- `lint` and `lint:fix` both run Prettier first, then ESLint

---

## Repository Layout

```txt
james-portfolio/
|- docs/
|- public/
|  |- assets/
|     |- fonts/
|     |- images/
|     |- pdfs/
|- src/
|  |- components/
|  |  |- common-full-width-wrapper/
|  |  |- dual-button/
|  |  |- header/
|  |  |- link-text/
|  |  |- live-by-design/
|  |  |- side-nav/
|  |- icons/
|  |  |- v2/
|  |- modules/
|  |  |- home/
|  |     |- black-section/
|  |     |- hero/
|  |     |- grainy.tsx
|  |     |- index.tsx
|  |  |- work/
|  |     |- index.tsx
|  |     |- styles.ts
|  |  |- contact/
|  |     |- index.tsx
|  |     |- styles.ts
|  |- pages/
|  |  |- _app.tsx
|  |  |- _document.tsx
|  |  |- index.tsx
|  |  |- work/
|  |  |  |- index.tsx
|  |  |- contact/
|  |  |  |- index.tsx
|  |- styles/
|  |  |- global.ts
|  |- data.ts
|  |- theme.ts
|- eslint.config.mjs
|- next.config.js
|- tsconfig.json
|- package.json
```

---

## Runtime Composition

Page entry flow:

1. `src/pages/_document.tsx`
2. `src/pages/_app.tsx`
3. `src/pages/index.tsx`
4. `src/modules/home/index.tsx`

Additional implemented routes:

- `src/pages/work/index.tsx` -> `src/modules/work/index.tsx`
- `src/pages/contact/index.tsx` -> `src/modules/contact/index.tsx`

Home module wrapper stack:

1. `ThemeProvider` (`@kami-ui/next-theme`) with `theme` from `src/theme.ts`
2. `Grainy` SVG filter definition
3. `ReactLenis` root wrapper for smooth scrolling
4. Rendered sections: `Header`, `SideNav`, `HomeHero`, `BlackSection`

---

## Styling Setup

### Global styles

`src/pages/_app.tsx` injects Emotion global CSS:

```tsx
<Global styles={globalStyles} />
```

`src/styles/global.ts` defines:

- shared breakpoints and media-query helpers
- base body typography
- `body.v2` background + grain behavior
- responsive `--header-height`

### Theme tokens

`src/theme.ts` provides:

- color scales (`primary`, `text`)
- responsive typography scale
- font-family tokens via `next/font/google`

---

## TypeScript and Aliases

`tsconfig.json`:

- extends `@tsconfig/strictest` and `@tsconfig/next`
- sets `jsxImportSource` to `@emotion/react`
- defines path aliases:
  - `@components/*`
  - `@modules/*`
  - `@pages/*`
  - `@styles/*`
  - `@icons/*`
  - `@images/*`, `@assets/*`, `@public/*`
  - `@data`
  - `@/*`

---

## Lint and Formatting

`eslint.config.mjs`:

- extends `@kami-ui/eslint-config/next`
- disables `@eslint-react/no-forward-ref` for TS/TSX files

Formatting is handled by Prettier via package scripts.

---

## Next.js Configuration

`next.config.js` currently sets:

- `reactStrictMode: true`
- image domains as an empty array (default local/static usage)

---

## Dependency Snapshot

Runtime dependencies currently in use:

- `@emotion/react`
- `@emotion/styled`
- `@kami-ui/next-theme`
- `@kami-ui/react-components`
- `@kami-ui/types`
- `lenis`
- `next`, `react`, `react-dom`
- `@mui/material`, `@mui/icons-material` (installed in repo)

Dev dependencies:

- `@kami-ui/eslint-config`
- `@tsconfig/next`
- `@tsconfig/strictest`
- `eslint`
- `prettier`
- `prettier-plugin-organize-imports`
- `typescript`

---

## Creating New UI in This Architecture

1. Add component folder under `src/components/<name>/`.
2. Keep render logic in `index.tsx`.
3. Keep Emotion styles in `styles.ts` (or `style.ts` where already used).
4. Use tokens from theme (`--color-*`, `--fs-*`, `--font-*`).
5. Import paths with configured aliases.

Example skeleton:

```tsx
// src/components/example/index.tsx
import { ExampleRoot } from '@components/example/styles';

const Example = () => {
  return <ExampleRoot>Example</ExampleRoot>;
};

export default Example;
```

```ts
// src/components/example/styles.ts
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const ExampleRoot = styled.div`
  color: var(--color-text-900);
  font-size: var(--fs-m);

  ${mediaQuery.nonDesktop} {
    font-size: var(--fs-2xs);
  }
`;
```

---

## Legacy Notes

The docs previously described a Tailwind + App Router + MDX architecture. That is not the current implementation in this repository.
