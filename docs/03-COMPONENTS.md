# James Loder Portfolio - Components (Current Repo)

This document lists components and modules that exist in the codebase today.

---

## Component Inventory

`src/components`:

- `common-full-width-wrapper`
- `dual-button`
- `header`
- `link-text`
- `live-by-design`
- `side-nav`

`src/modules/home`:

- `index.tsx` (home composition)
- `grainy.tsx`
- `hero/`
- `black-section/`

`src/icons/v2`:

- `hero-arrow.tsx`

---

## Layout Primitive

### `common-full-width-wrapper`

Files:

- `src/components/common-full-width-wrapper/index.tsx`
- `src/components/common-full-width-wrapper/styles.ts`

Purpose:

- Wraps `FullWidthWrapper` from `@kami-ui/react-components`
- Applies consistent container widths (`95%` desktop, `90%` mobile)
- Supports forwarding refs and passing through `FullWidthWrapperProps`

Usage pattern:

```tsx
<CommonFullWidthWrapper element="header" css={headerContainerStyles}>
  ...
</CommonFullWidthWrapper>
```

---

## Navigation and Text Interaction

### `header`

Files:

- `src/components/header/index.tsx`
- `src/components/header/styles.ts`

Behavior:

- Reads nav content from `headerAndNavData` in `src/data.ts`
- Left text: designation string (`middleText`)
- Right nav: `Home`, `About`, `Contact`
- Links are rendered with `LinkText` and scroll to section by class name
- Commas are rendered via CSS pseudo-element on list items

Key styles:

- Responsive alignment changes at `mediaQuery.nonDesktop`
- Uses tokenized font size/color (`--fs-*`, `--color-text-*`, `--font-mono`)

### `link-text`

Files:

- `src/components/link-text/index.tsx`
- `src/components/link-text/styles.ts`

API:

```tsx
type LinkTextProps =
  | ({ text: string } & Omit<LinkProps, 'children'> & { href: string })
  | ({ text: string } & Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      'children' | 'href'
    >);
```

Behavior:

- Supports both link and button modes
- Duplicates text in two stacked rows (`upper`/`lower`)
- Hover animates text up by one line (`translateY(-100%)`)
- Add class `no-animation` to disable motion

---

## Buttons

### `dual-button`

Files:

- `src/components/dual-button/index.tsx`
- `src/components/dual-button/style.ts`

API:

```tsx
interface DualButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
```

Behavior:

- Pill button with two stacked text rows
- On hover/active, text slides up and secondary background rises in
- Designed to inherit project typography and token colors

---

## Decorative Title Block

### `live-by-design`

Files:

- `src/components/live-by-design/index.tsx`
- `src/components/live-by-design/styles.ts`

Behavior:

- Renders two-line title: `Live by` + `design`
- Splits text into per-character containers with hover slide animation
- Uses `--font-special-one` (Bebas Neue)
- Renders four decorative dots (blue, pink, yellow, dark)
- Contains an `IntersectionObserver` scaffold (currently no active class toggling logic)

---

## Side Navigation (Placeholder)

### `side-nav`

Files:

- `src/components/side-nav/index.tsx`
- `src/components/side-nav/styles.ts` (currently empty)

Current state:

- Component renders but is hidden (`display: none`)
- No active navigation behavior yet

---

## Home Module Composition

### `src/modules/home/index.tsx`

Composition order:

1. `ThemeProvider` with `theme`
2. `Grainy` (defines SVG filter)
3. `ReactLenis` root wrapper (`duration: 1`)
4. `Header`
5. `SideNav`
6. `HomeHero`
7. `BlackSection`

### `grainy.tsx`

Purpose:

- Mounts hidden SVG filter `id="grainy"`
- Used by `body.v2::before` in global styles for grain texture

### `hero`

Files:

- `src/modules/home/hero/index.tsx`
- `src/modules/home/hero/styles.ts`

Data source:

- `homeHeroData` from `src/data.ts`

Behavior summary:

- Fixed, viewport-driven hero panel
- Desktop/mobile image swap (`img` vs `imgMobile`)
- CTA button scrolls to target class (`buttonTargetClassName`)
- `useLenis` callback scales and fades hero based on scroll progress
- Includes `HeroArrow` icon and two decorative line boxes with arrowhead images

### `black-section`

Files:

- `src/modules/home/black-section/index.tsx`
- `src/modules/home/black-section/styles.ts`

Behavior summary:

- Inserts a full-width ragged image divider (inverted)
- Renders white section background and dark text
- Places `LiveByDesign` next to a placeholder paragraph (`Lorem ipsum`)

---

## Icon

### `hero-arrow`

File:

- `src/icons/v2/hero-arrow.tsx`

Behavior:

- Styled SVG icon using `currentColor`
- Stroke-only diagonal arrow mark used in hero content

---

## Current Gaps vs Intended Product

These are notable implementation-status facts from the current repo:

- `SideNav` is intentionally not active yet.
- `BlackSection` still contains placeholder paragraph content.
- Some decorative colors are hardcoded in `live-by-design` and not tokenized.

This file should be updated as those components evolve.
