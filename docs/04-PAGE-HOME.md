# James Loder Portfolio - Homepage (`/`) (Current Repo)

This file documents the homepage as currently implemented.

---

## Current Route and Entry Point

- Route: `/`
- Page file: `src/pages/index.tsx`
- Module entry: `src/modules/home/index.tsx`

Current page implementation:

```tsx
// src/pages/index.tsx
import Home from '@modules/home';

const HomePage = () => {
  return <Home />;
};

export default HomePage;
```

---

## Runtime Composition

The render tree for the homepage currently is:

```txt
HomePage
└─ Home (src/modules/home/index.tsx)
   └─ ThemeProvider(theme)
      ├─ Grainy (hidden SVG filter definition)
      └─ ReactLenis(root, duration: 1)
         ├─ Header
         ├─ HomeHero (.hero)
         ├─ BlackSection
         ├─ Expertise
         ├─ FeaturedWork
         ├─ EssaysPreview
         ├─ AboutSection (.about)
         ├─ ContactSection (.contact)
         └─ HomeFooter
```

---

## Global Dependencies for This Page

From `src/pages/_document.tsx`:

- `<body className="v2">` is always applied

From `src/pages/_app.tsx`:

- Global Emotion styles are injected via `<Global styles={globalStyles} />`
- Meta title/description and favicon are defined in `<Head>`

From `src/styles/global.ts`:

- body typography, colors, and grain overlay behavior are defined
- `--header-height` is set to `6rem` desktop and `5rem` non-desktop

---

## Section Breakdown (As Implemented)

### 1) `Header`

Files:

- `src/components/header/index.tsx`
- `src/components/header/styles.ts`

Behavior:

- Uses nav config from `src/data.ts` (`headerAndNavData`)
- Left side renders designation text
- Right side renders `Home`, `About`, `Contact` with comma separators
- Each nav item calls `scrollIntoView` for a class selector in `targetClassName`

Current `targetClassName` values:

- `hero`
- `about`
- `contact`

### 2) `HomeHero`

Files:

- `src/modules/home/hero/index.tsx`
- `src/modules/home/hero/styles.ts`

Data source:

- `homeHeroData` from `src/data.ts`

Main elements:

- Large title (`title`)
- Pencil image (`img`) and mobile variant (`imgMobile`)
- Intro text (`text`)
- CTA button (`buttonText`)
- Date block (`dateText`, `date`)
- Decorative line boxes and arrowheads

Scroll behavior:

- Uses `useLenis` callback to scale and fade the hero based on scroll position
- Transform and opacity are applied directly on the hero root element

CTA behavior:

- Button click attempts to scroll to `.${buttonTargetClassName}`

### 4) `BlackSection`

Files:

- `src/modules/home/black-section/index.tsx`
- `src/modules/home/black-section/styles.ts`

Behavior:

- Renders full-width ragged image divider (`filter: invert(1)`)
- Renders white section block below hero fold
- Includes `LiveByDesign` title block
- Includes production copy from `blackSectionData`

### 5) `Expertise`

Files:

- `src/modules/home/expertise/index.tsx`
- `src/modules/home/expertise/styles.ts`

Behavior:

- Renders a capability strip with rounded skill chips
- Uses data from `expertiseData` in `src/data.ts`

### 6) `FeaturedWork`

Files:

- `src/modules/home/featured-work/index.tsx`
- `src/modules/home/featured-work/styles.ts`

Behavior:

- Renders three featured work preview cards
- Uses `featuredWorkData` from `src/data.ts`
- Includes CTA text link that scrolls to `.contact`

### 7) `EssaysPreview`

Files:

- `src/modules/home/essays-preview/index.tsx`
- `src/modules/home/essays-preview/styles.ts`

Behavior:

- Renders three essay teaser entries
- Uses `essaysPreviewData` from `src/data.ts`

### 8) `AboutSection`

Files:

- `src/modules/home/about/index.tsx`
- `src/modules/home/about/styles.ts`

Behavior:

- Renders biography and operating principles
- Uses `homeAboutData` from `src/data.ts`
- Includes resume CTA button (`/assets/pdfs/resume.pdf`)
- Sets the `.about` class for header navigation scrolling

### 9) `ContactSection`

Files:

- `src/modules/home/contact/index.tsx`
- `src/modules/home/contact/styles.ts`

Behavior:

- Renders contact prompt and email CTA button
- Reuses social links from `headerAndNavData.bottomLinks`
- Sets the `.contact` class for header and hero CTA scrolling

### 10) `HomeFooter`

Files:

- `src/modules/home/footer/index.tsx`
- `src/modules/home/footer/styles.ts`

Behavior:

- Renders closing footer with year and positioning tagline

---

## Responsive Behavior

Responsive rules are handled through `mediaQuery.nonDesktop` (`max-width: 900px`) and custom hero overrides.

High-level behavior currently:

- Header shifts layout for non-desktop
- Hero grid changes to a narrow left image strip + right content stack
- Hero desktop image is hidden on non-desktop, mobile image is shown
- Hero decorative line box is hidden on non-desktop
- Button and text font sizes reduce using `--fs-*` tokens

---

## Implemented vs Planned

Implemented now:

- Theme provider integration
- Global grain effect
- Header/nav rendering
- Hero layout + image switching + scroll-linked visual transformation
- Black section narrative with decorative title block
- Expertise strip
- Featured work preview cards
- Essays preview cards
- About section
- Contact section
- Footer section

---

## Known Gaps (Current Code)

1. Featured work and essays entries are currently homepage previews backed by static data in `src/data.ts`; dedicated routes (`/work`, `/essays`) are still separate follow-up work.

---

## If You Add New Sections

To stay consistent with current architecture:

1. Create a module/component under `src/modules/home` or `src/components`.
2. Co-locate styles in `styles.ts` (Emotion).
3. Consume token variables (`--color-*`, `--fs-*`, `--font-*`).
4. Mount new sections inside `src/modules/home/index.tsx`.
5. If header scrolling is required, add matching class names to section wrappers.
