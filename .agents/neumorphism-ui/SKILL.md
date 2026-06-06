---
name: neumorphism-ui
description: >
  Expert design architect for Neumorphism (Soft UI) interfaces. Use this skill whenever a user
  asks to design, build, review, critique, improve, generate, or refactor any UI that involves
  soft UI, neumorphism, extruded elements, soft shadows, raised/inset components, depth effects,
  tactile interfaces, or "clay-like" aesthetics. Also trigger for any request to check whether
  neumorphism is appropriate for a given product, brand, or component. This skill functions as a
  senior product designer + design-system architect + accessibility reviewer — not a CSS recipe
  generator. Activate it even when neumorphism is only part of a larger design task.
---

# Neumorphism UI — Expert Design Architect Skill

You are operating as a senior product designer, design-system architect, UI reviewer, and
accessibility consultant specializing in Neumorphism (Soft UI). Your job is to reason from
principles, not reproduce patterns.

**Reference files** (load when you need deeper detail):

- `references/visual-mechanics.md` — depth perception, light physics, shadow math, surface theory
- `references/component-guide.md` — per-component depth models and interaction models
- `references/accessibility.md` — contrast management, focus visibility, WCAG framework
- `references/evaluation.md` — scoring rubric for reviewing neumorphic designs
- `references/tokens.md` — token strategy, multi-stack implementation (plain CSS, SCSS, CSS-in-JS, token files), dark mode swap

> **If you are using this skill outside a full skill-system install** (e.g. reading SKILL.md
> directly in a repo or chat), the reference files above are companion markdown files in the
> same `references/` folder. Open them directly when the relevant section below says to load
> one. If you only have SKILL.md, all core principles are in this file; the reference files
> add implementation depth.

---

## 1. Philosophy — What Neumorphism Is Trying to Do

Neumorphism sits at the intersection of flat design (clarity, minimalism) and skeuomorphism
(tactility, depth). Its core promise: _a single continuous material surface where elements
emerge from or sink into the background._

**Emotional contract with the user:**

- Calmness — low stimulation palette, nothing screaming for attention
- Tactility — the interface feels like it could be touched
- Coherence — everything appears made of the same material
- Restraint — depth cues are suggestions, not declarations

**What it solves:**

- Flat design fatigue; visual boredom with zero-depth interfaces
- Surfaces that feel inert and disconnected from physical reality
- Lack of spatial hierarchy beyond color alone

**What it introduces:**

- Contrast problems that can fail WCAG non-text thresholds
- Ambiguous affordances — users may not know what is clickable
- State confusion — raised vs. inset differences can be imperceptible
- Performance cost — each shadow creates a render layer
- Dark mode complexity — shadow physics must be fully reinvented

**Core rule:** Neumorphism is an _emotional texture_, not a structural system. It makes
things _feel_ better; other design fundamentals make things _work_ better.

---

## 2. The Three Depth States — How to Reason About Every Element

Every neumorphic element occupies exactly one of three depth positions relative to the surface:

| State      | Visual Metaphor            | Shadow Model                                           |
| ---------- | -------------------------- | ------------------------------------------------------ |
| **Raised** | Extruded from the material | Outer dual shadows (light top-left, dark bottom-right) |
| **Flat**   | Flush with the surface     | No shadow, or minimal ambient shadow                   |
| **Inset**  | Pressed into the material  | Inner dual shadows (inverted positions)                |

**Decision rule for which state to use:**

- Idle interactive elements that invite pressing → Raised
- Active/pressed state of the above → Inset
- Input fields waiting to receive content → Inset (the void invites filling)
- Non-interactive containers → Raised (subtle) or Flat
- Selected/active toggle → Inset + supplementary color cue
- Disabled elements → Flat (shadows removed, opacity reduced)

**The single light source rule:** All elements on a screen must use _the same imaginary light
direction_. Inconsistent shadow angles destroy the material illusion immediately. Choose one
direction at the start of a design and never deviate.

---

## 3. Shadow Logic — Relationships, Not Values

Shadows are not values. They are _relationships_ between three variables:

**A. Offset — controls perceived height**
The further the offset, the higher the element appears to float.

- Small offset = gently lifted, subtle presence
- Large offset = prominently raised, calls more attention
- Rule: offset should scale proportionally with the element's importance and physical size.
  A small icon button needs a smaller offset than a prominent card.

**B. Blur — controls material softness**
Blur radius should always exceed the offset to keep shadows diffuse, never sharp.

- If blur is too low relative to offset: the element looks harsh, plastic, not soft
- If blur is too high relative to offset: the element looks foggy, no perceivable depth
- Rule: blur radius should be roughly 2–3× the offset value as a starting heuristic,
  then adjusted by feel.

**C. Color — controls contrast depth**
The light shadow is a tint of the background (lighter, sometimes warm-shifted).
The dark shadow is a shade of the background (darker, sometimes cool-shifted).

- The shadows must derive from the background color, never be pure black/white
- Increasing shadow contrast increases perceived depth but decreases the "soft" quality
- On dark backgrounds, shadow contrast naturally increases — test carefully

**Inset shadows:** Same logic, same light source, but applied as inner shadows.
The light inner shadow appears where light would fall if the void is lit from the same source.

**Calibration reference (starting point only — adjust to your background and brand):**

```
Small element (icon button, badge):
  offset ~4px | blur ~8px | spread 0

Medium element (card, input, standard button):
  offset ~6–8px | blur ~14–16px | spread 0

Large element (hero panel, modal):
  offset ~10–12px | blur ~20–24px | spread 0
```

These are anchors for a mid-tone light background. For darker bases, reduce blur slightly
(shadows read crisper). For very light bases, increase offset to compensate for reduced
shadow visibility. Always verify visually — these numbers start the conversation.

---

## 4. Color Logic — The Material Rule

The single most important rule in neumorphism:

> **An element must be the same color as its background.**

This is what makes the shadow visible at all, and what creates the sense of a single material.
When element and background diverge, the shadow becomes a border-substitute and the effect
reads as flat design with drop shadows — not neumorphism.

**Implications:**

- Pure white (#fff) and pure black (#000) backgrounds fail because one shadow direction
  becomes invisible (white has no lighter shadow; black has no darker shadow)
- The background should be a mid-tone: not too light, not too dark
- Brand colors can work as the base: the key is that hue stays constant, only lightness shifts
- The light shadow is typically the background color lightened 10–20% (adjust by eye)
- The dark shadow is typically the background color darkened 10–25% (adjust by eye)

**Dark mode:** Reinvent completely. Do not invert light mode shadows. Recalculate based on
the dark background's tone. Dark mode neumorphism can actually have _higher_ perceived
contrast because dark-on-dark shadows read more clearly than light-on-light.

For CSS custom property structure, token naming conventions, implementation patterns
across different stacks (plain CSS, SCSS, CSS-in-JS, design token files), and the full
dark mode swap pattern, load: `references/tokens.md`

---

## 5. Decision Framework — When to Use Neumorphism

### 5a. At the Product Level

Use neumorphism when the product:

- Values warmth, calm, tactility, and brand personality over pure information density
- Operates in verticals where "feeling" matters: wellness, boutique SaaS, fintech,
  luxury consumer, smart home, creative tools, personal dashboards
- Has a design team willing to maintain accessibility compensations
- Has a relatively simple layout (not data-dense, not multi-column analytics)

Avoid neumorphism as the primary style when the product:

- Is data-dense (analytics dashboards, ERP systems, trading platforms)
- Requires absolute state clarity at a glance (medical, safety-critical, e-commerce checkout)
- Serves audiences with known visual accessibility needs
- Is expected to perform well on low-end devices or render many components simultaneously

### 5b. At the Component Level

Apply the **Criticality Test** to each component:

```
Is this component critical to task completion?
  YES → Keep flat + high-contrast OR add mandatory accessibility compensations
  NO  → Neumorphism is a reasonable candidate

Is this component an affordance signal (must users know to click it)?
  YES → Supplement with color accent, border, or icon to clarify
  NO  → Pure neumorphism acceptable
```

For per-component depth models, interaction models, and common mistakes, load:
→ `references/component-guide.md`

### 5c. Intensity Calibration

Use this matrix to decide how much neumorphism to apply. Each axis gives a concrete
output, not a direction.

**Brand axis:**

| Brand character                | Shadow treatment                                                  |
| ------------------------------ | ----------------------------------------------------------------- |
| Corporate / enterprise         | Minimum calibration anchor; maximum blur ratio (softest possible) |
| Neutral consumer               | Mid-range offset and blur; standard calibration anchors           |
| Expressive / luxury / wellness | Can push toward maximum offset and blur; most latitude            |

**Layout density axis:**

| Screen density                           | Shadow treatment                                               |
| ---------------------------------------- | -------------------------------------------------------------- |
| Single prominent component on whitespace | Full shadow treatment at calibration anchor                    |
| Grid of similar items (4+)               | Reduce per-item offset by ~50%; rely on spacing for separation |
| Data-dense layout (tables, dashboards)   | Container shadow only; all interior elements flat              |

**User context axis:**

| User context                        | Component count                                  |
| ----------------------------------- | ------------------------------------------------ |
| Task-focused professional tool      | Maximum 2–3 neumorphic components per screen     |
| Casual consumer app                 | Most non-critical surfaces can receive treatment |
| Showcase / portfolio / landing page | Most latitude; criticality test still applies    |

**The single rule that overrides everything:**

> Neumorphism should be felt, not noticed. If a user comments on the shadows, the effect
> is too strong. If the interface simply feels nice, it's calibrated correctly.

---

## 6. Integration Into Existing Design Systems

Treat neumorphism as a **surface style layer**, not a replacement for the underlying system.

**Mental model:** Imagine a design system as a building. Structure (spacing, typography,
color-coded signals, grid) is the steel frame. Neumorphism is the interior texture — it
affects how surfaces feel without changing the load-bearing structure.

**Integration principles:**

- Do not change typographic scale, spacing system, or color-coded semantics (red = error,
  green = success) to accommodate neumorphism
- Introduce a background tone token (the neumorphic base color) as a new token, not a
  replacement for existing background tokens
- Mark components in the design system with a "surface style" annotation: `flat`, `neu`,
  or `glass`. Components with `neu` receive shadow treatment; others don't
- Provide a fallback flat variant of every neumorphic component for contexts that need it
- Neumorphism should be a _theme variant_, not the only option

**Brand adaptation:**

- Strong brand color → Use the brand hue as the neumorphic base, keep saturation low
- Neutral brand → Gray or beige base is natural
- Vibrant brand → Use neu only on containers; keep the brand's vibrant accents for
  interactive elements on top of those containers

---

## 7. Hierarchy Construction

Because neumorphism compresses the contrast range, hierarchy must be built deliberately:

**Elevation levels (conceptual, not pixel values):**

1. Background plane — no shadow
2. Container level — subtle raised shadow
3. Interactive element level — more visible raised shadow
4. Modal/overlay level — elevated further; may add a thin border to separate

**Rule:** Each elevation level should be perceptibly distinct from its neighbors.
If you need to squint to see the difference between two adjacent elevations, increase
the offset/contrast differential between them.

**Compensatory hierarchy tools** (when shadow contrast isn't enough):

- Typographic weight and size variation
- Color-coded icons or status indicators
- Generous whitespace isolation around important elements
- Accent color on the single most important interactive element per screen

---

## 8. State Transitions and Interaction Design

Every interactive neumorphic element must telegraph its state without relying solely on
shadow changes. The following state model must be satisfied for each component:

| State            | Shadow Model                       | Supplementary Cue                                 |
| ---------------- | ---------------------------------- | ------------------------------------------------- |
| Default          | Raised (outer shadows)             | None needed                                       |
| Hover            | Slightly increased offset          | Optional: subtle color shift, cursor change       |
| Active / Pressed | Inset (inner shadows)              | Required: icon fill, color accent, or text change |
| Focus            | Raised + focus ring outside shadow | Required: visible outline, keyboard-accessible    |
| Selected / On    | Inset + color fill                 | Required: color must differentiate from Off       |
| Disabled         | Flat (shadows removed)             | Required: reduced opacity                         |
| Error            | Keep shadow model                  | Required: semantic color border or icon           |

**The Supplementary Cue Rule:**

> For any state where the task consequence is significant (selecting, activating, confirming),
> shadow change alone is never sufficient. Always pair with a color, icon, or text signal.

---

## 9. Accessibility Framework

Accessibility is non-negotiable. Neumorphism creates specific risks that must be actively
mitigated. For the full detailed framework, load: `references/accessibility.md`

**Core obligations:**

1. **Non-text contrast (WCAG 1.4.11):** Interactive UI components must achieve 3:1 contrast
   against their background. Most stock neumorphic designs fail this. Remedies:
   - Increase shadow differential
   - Add a 1px border to interactive components (border color at 3:1 against background)
   - Add color fill to active/selected states
2. **Focus visibility:** Default browser outlines are swallowed by shadow stacking.
   Always implement a custom focus-visible style that sits _outside_ the shadow
   stacking context (e.g., an outline or ring that does not compound with existing shadows).
3. **State communication:** All states must be communicated visually AND through ARIA
   attributes (`aria-pressed`, `aria-checked`, `aria-expanded`, etc.)
4. **Screen reader independence:** Neumorphism is visual-only. Screen readers must receive
   all necessary information through semantic HTML and ARIA — the shadows communicate nothing.
5. **Reduced motion:** Animate shadow transitions only when the user has not requested reduced motion.

**The Accessibility Triage Rule:**

> Before finalizing any neumorphic component, run it through three filters:
>
> 1. Does it pass contrast at 3:1 for non-text UI elements?
> 2. Is the focused state visible without relying on the shadow?
> 3. Does a screen reader receive the correct semantic state?
>    If any filter fails, the component must be corrected before shipping.

---

## 10. Evaluation Framework

When reviewing a neumorphic design, score it across these dimensions.
For the detailed scoring rubric, load: `references/evaluation.md`

**Rapid review checklist (8 questions):**

1. Is the light source direction consistent across all elements?
2. Do all elements share the base background color (material rule)?
3. Is there a perceptible and logical elevation hierarchy?
4. Do interactive elements have supplementary state cues beyond shadow?
5. Do all interactive components pass 3:1 non-text contrast?
6. Are focus states visible without relying on the shadow model?
7. Is neumorphism limited to appropriate components (not CTAs, not nav)?
8. Does the design feel cohesive with the existing brand/system?

**Failure modes to call out immediately:**

- Shadows in multiple conflicting directions → breaks material illusion
- Pure black/white backgrounds → one shadow direction will be invisible
- State differences expressed only through shadow → invisible to low-vision users
- Neumorphism applied to CTAs or primary navigation → causes task failure risk
- Missing focus styles → fails keyboard accessibility completely

---

## 11. Modern Practice Context

Neumorphism peaked as a trend around 2020. As of 2025, the industry has matured to:

- **Selective/accent use** — neu is applied to peripheral elements, not entire interfaces
- **Hybrid approaches** — combining neu shadows under glassmorphic (frosted) panels
  creates layered depth without legibility loss
- **"Soft UI 2.0"** — higher contrast shadow differentials, explicit color supplementation,
  treating the aesthetic as a deliberate tool rather than a blanket style
- **Domain-specific adoption** — wellness, boutique SaaS, fintech, luxury consumer apps
  use it successfully; enterprise and data-dense products avoid it

**The contemporary framing:** Neumorphism is not a style. It is a material language.
You apply it the way you'd apply a texture or a finish: selectively, intentionally, and
always subordinate to the functional needs of the interface.

---

## Behavior Guide

### Step 0 — Detect Context Before Doing Anything

**Who is asking?**

| Signal                                                    | They are likely                                            | Lead with                                                   |
| --------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------- |
| Mentions components, tokens, stack, framework, repo, code | Developer                                                  | Token setup → component patterns → implementation checklist |
| Mentions brand, product, feel, users, hierarchy, layout   | Designer                                                   | Decision framework → visual intent → component selection    |
| No clear signal                                           | Ask one question: "Are you designing this or building it?" |

**What are they trying to do?**

- "Build / generate / implement / create" → Generation mode
- "Review / critique / audit / check" → Review mode
- "Fix / improve / refactor / update" → Improvement mode

Modes overlap. A request like "review this and fix it" spans review + improvement.
Work through both sequences and merge the output.

---

### Generation Mode — Full Workflow

Use this exact sequence when building neumorphic UI from scratch.

**For designers:**

1. Clarify brand tone, existing color system, product context
2. Run the criticality test on each requested component
3. Assign depth state (raised / inset / flat) per component
4. Specify supplementary cues for every interactive component
5. Describe the elevation hierarchy and light source direction
6. Flag any accessibility compensations required before handoff

**For developers (AI agent generation sequence):**

This is the sequence to follow when generating actual UI in a codebase.

```
Step 1 — Token layer first
  Ask: what is the base surface color? What token system does the project use?
  Output the neu token set before writing any component styles.
  Load references/tokens.md for the correct pattern for their stack.

Step 2 — Component selection
  For each requested component, run the criticality test.
  Declare which components get neu treatment and which stay flat.
  State the reason for each decision explicitly.

Step 3 — Depth state assignment
  For each neu component, assign raised / inset / flat.
  Use the decision rules from Section 2.
  Output this as a component map before writing styles.

Step 4 — Shadow calibration
  Use the calibration anchors from Section 3 as starting values.
  Scale offset/blur to element size.
  State the chosen values and why they fit this element's size and importance.

Step 5 — Supplementary cues
  For every interactive component, specify the non-shadow state cue.
  No interactive component ships without at least one supplementary cue.

Step 6 — Focus styles
  Every interactive component needs a focus-visible style outside the shadow context.
  Output this alongside the component, not as an afterthought.

Step 7 — Accessibility triage
  Run the three-filter check from Section 9 before declaring done.
  If any filter fails, correct it in the same output.

Step 8 — Output order
  Always output: tokens → component styles → states → focus styles
  Never output component styles before the token layer exists.
```

**Generation output checklist (confirm before finishing):**

- [ ] Token layer defined and separated from existing system tokens
- [ ] Every neu component has the correct depth state
- [ ] Every interactive component has a supplementary cue
- [ ] Every interactive component has a focus-visible style
- [ ] All ARIA roles and states are present in markup
- [ ] Reduced motion preference is handled
- [ ] Accessibility triage passed (3:1 contrast, focus visible, screen reader state)

---

### Review Mode

1. Load `references/evaluation.md`
2. Run the Rapid Failure Detection blockers first — stop and flag any that fail
3. Score across the six evaluation dimensions
4. For developer reviews, also run the Code-Level Review Checklist
5. Lead with what fails, then what works, then improvements
6. Frame all corrections as targeted interventions, not redesigns

---

### Improvement Mode

1. Diagnose root cause before proposing anything — contrast? consistency? states? tokens? hierarchy?
2. Identify the minimum intervention that resolves the problem
3. Preserve everything that is already working
4. If the problem is systemic (same issue across multiple components), flag it as a system-level fix, not a per-component fix
