# Token Strategy — Organizing Neumorphic Values Across Any Stack

---

## The Core Principle (Framework-Agnostic)

Neumorphic shadow values are not constants — they are decisions. Every shadow offset,
blur radius, and color is derived from the base surface color and the elevation level.
That derivation logic must live in one place, not be repeated in every component.

Whatever token system your project already uses, the neumorphic layer slots in as an
extension — never a replacement. The abstraction is always the same:

```md
Existing system tokens → define the surface color
Neumorphic tokens → derive from that surface color
Component styles → reference neumorphic tokens, never raw values
```

If a theme changes (light → dark, brand A → brand B), only the neumorphic token
definitions change. Every component updates automatically.

---

## The Token Set (Conceptual — Implement in Whatever System You Use)

Regardless of implementation, these are the values that need to be named and centralized:

```txt
neu-base           The background color all neu elements share
neu-shadow-light   Highlight shadow — lighter tint of the base
neu-shadow-dark    Depth shadow — darker shade of the base
neu-inset-light    Inner highlight for inset elements
neu-inset-dark     Inner depth for inset elements

neu-offset-sm      Shadow offset for small elements
neu-blur-sm        Shadow blur for small elements
neu-offset-md      Shadow offset for medium elements
neu-blur-md        Shadow blur for medium elements
neu-offset-lg      Shadow offset for large elements
neu-blur-lg        Shadow blur for large elements

neu-focus-ring     Focus ring color — must achieve 3:1 against neu-base
neu-focus-offset   Distance between element edge and focus ring
```

How you name them in your actual system is up to you. The important thing is that they
exist as named references, not as raw values scattered in component styles.

---

## Implementation by Stack

### CSS Custom Properties (Plain CSS / PostCSS / any HTML project)

The most portable approach. Works in any browser context without a build step.

```css
/* ─── Neumorphic token layer ─────────────────────────────── */
:root {
  --neu-base: /* derive from your existing surface/bg variable */;
  --neu-shadow-light: /* lighter tint of --neu-base */;
  --neu-shadow-dark: /* darker shade of --neu-base */;
  --neu-inset-light: /* same as --neu-shadow-light for standard setups */;
  --neu-inset-dark: /* same as --neu-shadow-dark for standard setups */;

  --neu-offset-sm: 4px;
  --neu-blur-sm: 8px;
  --neu-offset-md: 7px;
  --neu-blur-md: 14px;
  --neu-offset-lg: 11px;
  --neu-blur-lg: 22px;

  --neu-focus-ring: /* your brand accent, verified at 3:1 against --neu-base */;
  --neu-focus-offset: 3px;
}
```

Shadow composition:

```css
.neu-raised {
  box-shadow:
    calc(-1 * var(--neu-offset-md)) calc(-1 * var(--neu-offset-md))
      var(--neu-blur-md) var(--neu-shadow-light),
    var(--neu-offset-md) var(--neu-offset-md) var(--neu-blur-md)
      var(--neu-shadow-dark);
}

.neu-inset {
  box-shadow:
    inset calc(-1 * var(--neu-offset-md)) calc(-1 * var(--neu-offset-md))
      var(--neu-blur-md) var(--neu-inset-light),
    inset var(--neu-offset-md) var(--neu-offset-md) var(--neu-blur-md)
      var(--neu-inset-dark);
}
```

---

### SCSS / Sass

Define tokens as variables and build shadow values with functions or mixins.

```scss
// _neu-tokens.scss
$neu-base: /* your surface color */;
$neu-shadow-light: /* lighter tint */;
$neu-shadow-dark: /* darker shade */;

$neu-offset-sm: 4px;
$neu-blur-sm: 8px;
$neu-offset-md: 7px;
$neu-blur-md: 14px;
$neu-offset-lg: 11px;
$neu-blur-lg: 22px;

$neu-focus-ring: /* brand accent */;
$neu-focus-offset: 3px;

// Mixin for raised state
@mixin neu-raised($size: md) {
  $offset: map-get(
    (
      sm: $neu-offset-sm,
      md: $neu-offset-md,
      lg: $neu-offset-lg
    ),
    $size
  );
  $blur: map-get(
    (
      sm: $neu-blur-sm,
      md: $neu-blur-md,
      lg: $neu-blur-lg
    ),
    $size
  );
  box-shadow:
    #{-$offset} #{-$offset} $blur $neu-shadow-light,
    $offset $offset $blur $neu-shadow-dark;
}

@mixin neu-inset($size: md) {
  $offset: map-get(
    (
      sm: $neu-offset-sm,
      md: $neu-offset-md,
      lg: $neu-offset-lg
    ),
    $size
  );
  $blur: map-get(
    (
      sm: $neu-blur-sm,
      md: $neu-blur-md,
      lg: $neu-blur-lg
    ),
    $size
  );
  box-shadow:
    inset #{-$offset} #{-$offset} $blur $neu-shadow-light,
    inset $offset $offset $blur $neu-shadow-dark;
}
```

---

### CSS-in-JS (styled-components, Emotion, vanilla-extract, etc.)

Define tokens as a theme object and consume via the theme provider.

```js
// neu-tokens.js (or extend your existing theme object)
const neuTokens = {
  base:        /* surface color string */,
  shadowLight: /* lighter tint */,
  shadowDark:  /* darker shade */,
  insetLight:  /* same as shadowLight */,
  insetDark:   /* same as shadowDark */,

  offset: { sm: '4px',  md: '7px',  lg: '11px' },
  blur:   { sm: '8px',  md: '14px', lg: '22px'  },

  focusRing:   /* brand accent */,
  focusOffset: '3px',
};

// Consuming in a styled component
const NeuCard = styled.div`
  box-shadow:
    -${p => p.theme.neu.offset.md} -${p => p.theme.neu.offset.md}
      ${p => p.theme.neu.blur.md} ${p => p.theme.neu.shadowLight},
    ${p => p.theme.neu.offset.md} ${p => p.theme.neu.offset.md}
      ${p => p.theme.neu.blur.md} ${p => p.theme.neu.shadowDark};
`;
```

The same pattern applies to any CSS-in-JS library — the key is that raw values never
appear in component definitions, only theme references.

---

### Design Token Files (Style Dictionary, Theo, W3C Design Token Format)

For systems that compile tokens to multiple output formats (CSS variables, SCSS variables,
iOS, Android, etc.), add a `neu` namespace alongside your existing tokens:

```json
{
  "neu": {
    "base": { "value": "{color.surface.default}" },
    "shadowLight": { "value": "{neu.base}" },
    "shadowDark": { "value": "{neu.base}" },
    "offset": {
      "sm": { "value": "4", "attributes": { "unit": "px" } },
      "md": { "value": "7", "attributes": { "unit": "px" } },
      "lg": { "value": "11", "attributes": { "unit": "px" } }
    },
    "blur": {
      "sm": { "value": "8", "attributes": { "unit": "px" } },
      "md": { "value": "14", "attributes": { "unit": "px" } },
      "lg": { "value": "22", "attributes": { "unit": "px" } }
    },
    "focusRing": { "value": "{color.brand.accent}" },
    "focusOffset": { "value": "3", "attributes": { "unit": "px" } }
  }
}
```

The `shadowLight` and `shadowDark` values cannot be auto-derived from `base` in most
token systems — you will need to calculate the lighter/darker tints manually and store
them as explicit values. Note them with a comment explaining they derive from `neu.base`.

---

## Dark Mode Token Swap

### The concept (applies to all stacks)

Dark mode is not an inversion. It is a second, independently calculated set of neu tokens
where:

- `neu-base` is a dark mid-tone (not black)
- `neu-shadow-light` is slightly lighter than the dark base
- `neu-shadow-dark` approaches black but does not reach it
- `neu-focus-ring` is re-verified for 3:1 contrast against the new dark base
- Offsets and blurs can remain the same or be reduced slightly (dark surfaces read crisper)

### CSS custom properties

```css
/* Light mode — default */
:root {
  --neu-base: #e0e0e0; /* example — replace */
  --neu-shadow-light: #f5f5f5;
  --neu-shadow-dark: #bebebe;
  --neu-focus-ring: /* brand accent verified at 3:1 on light base */;
}

/* System preference */
@media (prefers-color-scheme: dark) {
  :root {
    --neu-base: #1e1e1e; /* example — replace */
    --neu-shadow-light: #2a2a2a;
    --neu-shadow-dark: #111111;
    --neu-focus-ring: /* re-verified at 3:1 on dark base */;
  }
}

/* Manual class toggle (user preference override) */
[data-theme="dark"] {
  --neu-base: #1e1e1e;
  --neu-shadow-light: #2a2a2a;
  --neu-shadow-dark: #111111;
  --neu-focus-ring: /* re-verified */;
}
```

### SCSS

Use separate variable files per theme and import conditionally, or build a theme map:

```scss
$neu-themes: (
  light: (
    base: #e0e0e0,
    shadow-light: #f5f5f5,
    shadow-dark: #bebebe
  ),
  dark: (
    base: #1e1e1e,
    shadow-light: #2a2a2a,
    shadow-dark: #111111
  )
);
```

Apply the appropriate map via a theme class or mixin in your existing theming system.

### CSS-in-JS

Pass separate light and dark neu token sets through your theme provider's existing
light/dark mechanism. Do not create a separate theming layer for neu — plug into whatever
theme switching mechanism the project already uses.

---

## The Hard Rule (All Stacks)

Raw color values and raw pixel values must never appear in component styles.
Whether your component is a CSS class, a SCSS block, a styled-component, or a design
token consumer — shadow values must always come from a named token reference.

```txt
WRONG (any stack): box-shadow: -7px -7px 14px #f5f5f5, 7px 7px 14px #bebebe
CORRECT (any stack): reference your named tokens, whatever the syntax
```

If you can see a literal hex color or pixel value inside a shadow definition in component
code, it belongs in a token instead.
