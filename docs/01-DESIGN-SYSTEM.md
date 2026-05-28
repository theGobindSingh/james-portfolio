# James Loder Portfolio - Design System (Current Repo)

This document reflects the implementation currently in `src/`. It replaces older Tailwind/App Router guidance.

---

## Styling Stack

- Styling library: Emotion (`@emotion/react`, `@emotion/styled`)
- Theme runtime: `ThemeProvider` from `@kami-ui/next-theme`
- Global styles: injected in `src/pages/_app.tsx` via `<Global styles={globalStyles} />`
- Root body mode: `src/pages/_document.tsx` sets `body` class to `v2`

There is no Tailwind setup in this repository.

---

## Theme Source of Truth

Tokens come from `src/theme.ts`:

```ts
export const theme: ThemeObject = {
  colors: {
    primary: ['rgb(232 232 227)'],
    secondary: [],
    text: [
      'rgb(221 221 213)',
      'rgb(209 209 199)',
      'rgb(162 158 154)',
      'rgb(126 118 108)',
      'rgb(140 140 115)',
      'rgb(107 100 92)',
      'rgb(82 77 71)',
      'rgb(57 54 50)',
      'rgb(19 19 17)',
    ],
  },
  typography: {
    fontSizes: [
      {
        breakpoint: { min: '901px', max: '9999px' },
        size: [
          '0.75rem',
          '0.875rem',
          '1rem',
          '1.125rem',
          '1.25rem',
          '1.5rem',
          '1.875rem',
          '2.25rem',
          '3rem',
          '4rem',
          '5rem',
        ],
      },
      {
        breakpoint: { min: '0px', max: '900px' },
        size: [
          '0.68rem',
          '0.75rem',
          '0.875rem',
          '1rem',
          '1.125rem',
          '1.25rem',
          '1.5rem',
          '1.875rem',
          '2.25rem',
          '3rem',
          '4rem',
        ],
      },
    ],
    fontFamilies: {
      serif: 'DM Serif Display',
      sans: 'DM Sans',
      mono: 'DM Mono',
      'special-one': 'Bebas Neue',
    },
  },
};
```

The theme provider publishes CSS custom properties used throughout component `styles.ts` files.

---

## Color Tokens in Use

Current components mostly consume these variables:

- `--color-primary-100` - root page background (`body.v2`)
- `--color-text-100` - light text on dark controls
- `--color-text-300` - line art and hero frame lines
- `--color-text-500` - secondary button background, hero arrow tone
- `--color-text-600` - secondary body/copy tone
- `--color-text-700` - designation label tone
- `--color-text-800` - primary button background
- `--color-text-900` - primary text color

### Current Exception

`src/components/live-by-design/styles.ts` includes hardcoded accent dots:

- `#00bef1`
- `#e466a5`
- `#e5cd57`

These are intentional in the current implementation and are not theme-tokenized yet.

---

## Typography System

Fonts are loaded with `next/font/google` in `src/theme.ts`:

- Sans: DM Sans (`--font-sans`)
- Serif: DM Serif Display (`--font-serif`)
- Mono: DM Mono (`--font-mono`)
- Display accent: Bebas Neue (`--font-special-one`)

Responsive font scales are defined per breakpoint band in `theme.typography.fontSizes`:

- Desktop (901px+): 12px to 80px
- Phone/tablet (0px-900px): 11px to 64px

Tokens currently referenced in components include:

- `--fs-4xs`, `--fs-3xs`, `--fs-2xs`, `--fs-1xs`
- `--fs-s`, `--fs-m`
- `--fs-1xl`, `--fs-3xl`, `--fs-4xl`

---

## Breakpoints and Media Queries

Defined in `src/styles/global.ts`:

```ts
export const breakpoints = {
  phone: { min: 0, max: 640 },
  tablet: { min: 641, max: 900 },
  desktop: { min: 901, max: 9999 },
};

export const mediaQuery = {
  phone: '@media (min-width: 0px) and (max-width: 640px)',
  tablet: '@media (min-width: 641px) and (max-width: 900px)',
  desktop: '@media (min-width: 901px)',
  nonDesktop: '@media (max-width: 900px)',
};
```

Use `mediaQuery.nonDesktop` as the primary responsive override hook in component styles.

---

## Global Surface and Grain

`src/styles/global.ts` sets base UI behavior:

- `body` text defaults to `--color-text-900`
- `body.v2` background is `--color-primary-100`
- `--header-height` is `6rem` desktop, `5rem` on non-desktop
- grain overlay is rendered with `body.v2::before` using `filter: url(#grainy) opacity(20%)`

The `#grainy` SVG filter is defined by `src/modules/home/grainy.tsx` and mounted once in `Home`.

---

## Layout Primitive

Use `CommonFullWidthWrapper` for full-width sections.

Source:

- `src/components/common-full-width-wrapper/index.tsx`
- `src/components/common-full-width-wrapper/styles.ts`

Container widths:

- Desktop: `95%`
- Non-desktop: `90%`

---

## Interaction Patterns

- `LinkText`: stacked duplicate text with vertical slide on hover.
- `DualButton`: stacked text + sliding background reveal on hover/active.
- `HomeHero`: scale + opacity linked to scroll percentage via Lenis callback.

---

## Authoring Rules for This Repo

1. Add styles in co-located `styles.ts` files using Emotion `css` or `styled`.
2. Prefer existing theme variables (`--color-*`, `--fs-*`, `--font-*`) over hardcoded values.
3. Use `mediaQuery` helpers from `src/styles/global.ts` for breakpoints.
4. Keep layout sections wrapped with `CommonFullWidthWrapper` unless there is a clear reason not to.
5. Do not introduce Tailwind utility classes unless the stack is intentionally changed.
