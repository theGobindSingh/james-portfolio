# James Loder Portfolio - Case Studies Pages (Current Status and Build Plan)

This document reflects the real state of the repository and outlines how case-study pages should be implemented in the current stack.

---

## Current Status (As of This Repo State)

The list page is now implemented at `/work` using the existing Pages Router + Emotion setup.

Implemented:

- `src/pages/work/index.tsx`
- `src/modules/work/index.tsx`
- `src/modules/work/styles.ts`
- Structured work-page content in `src/data.ts` (`workPageData` and `WorkCaseStudy` types)

Still not present:

- `src/pages/work/[slug].tsx`
- `content/case-studies` directory
- MDX parsing utilities (`lib/mdx.ts` etc.)
- Case-study detail components like `CaseStudyHeader` and `OutcomeMetrics`

The previous version of this doc described an App Router + Tailwind + MDX setup that does not exist in this codebase.

---

## Current Architecture Constraint

This repo uses:

- Pages Router (`src/pages`)
- Emotion styling (`@emotion/react`, `@emotion/styled`)
- Theme/token usage from `src/theme.ts` and `src/styles/global.ts`

So case studies should be built using Pages Router primitives, not App Router patterns.

---

## Recommended Route Structure (Pages Router)

When implemented, use:

```txt
src/pages/work/index.tsx      // list page
src/pages/work/[slug].tsx     // detail page
```

And (optionally) a content/data source:

```txt
src/content/case-studies/*.mdx    // optional MDX path
or
src/data/case-studies.ts          // typed static data path
```

---

## Data Shape (Recommended)

Keep this schema regardless of storage backend:

```ts
export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  timeline: string;
  summary: string;
  featured: boolean;
  order: number;
  metrics?: Array<{ value: string; label: string }>;
}
```

---

## Page-Level Rendering Plan

### `/work` list page

Status: implemented.

Current behavior:

1. Renders a dedicated Work hero and process framing block.
2. Displays four case-study cards from `workPageData`.
3. Shows per-study strategic focus and metrics.
4. Provides request links via `mailto` while detail pages are in progress.

### `/work/[slug]` detail page

Responsibilities:

1. Resolve slug from route.
2. Load matching case study.
3. Render hero/header metadata (title, category, timeline, tags, summary).
4. Render study body content.
5. Optionally render metrics grid if `metrics` exists.

---

## Static Generation Pattern for Pages Router

In this stack, use `getStaticPaths` + `getStaticProps`:

```tsx
// src/pages/work/[slug].tsx
import type { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const studies = await getAllCaseStudies();
  return {
    paths: studies.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug ?? '');
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    return { notFound: true };
  }

  return {
    props: { study },
  };
};
```

Do not use `generateStaticParams` in this repository unless routing architecture is migrated to App Router.

---

## Styling Guidance for Case-Study Pages

When these pages are built, follow current style conventions:

1. Use Emotion `styled` / `css` in co-located `styles.ts` files.
2. Use theme variables (`--color-*`, `--fs-*`, `--font-*`) instead of hardcoded color/size values where possible.
3. Use `mediaQuery` helpers from `src/styles/global.ts`.
4. Reuse `CommonFullWidthWrapper` where full-width section framing is needed.

The current `/work` implementation follows this guidance and introduces a route-specific visual treatment while preserving token and breakpoint conventions.

---

## Migration Checklist (From Old Spec to Current Stack)

1. Convert App Router route examples to Pages Router files.
2. Replace Tailwind class-based snippets with Emotion styles.
3. Replace `generateStaticParams` examples with `getStaticPaths`/`getStaticProps`.
4. Keep the case-study content model, but store/read it with current project conventions.

---

## Implementation Status Snapshot

- `src/pages/index.tsx`: implemented
- `src/pages/work/index.tsx`: implemented
- `src/pages/work/[slug].tsx`: missing
- case-study content source: temporary static content in `src/data.ts`
- case-study list UI module: implemented in `src/modules/work`
- case-study detail UI components: missing

Update this file as each piece is implemented.
