# Evaluation Engine — Neumorphic Design Review Rubric

Use this rubric when reviewing, auditing, or scoring any neumorphic design.

---

## How to Conduct a Review

1. Run the **Rapid Failure Detection** scan first. Any single failure here is a blocker.
2. Score the design across the **Six Evaluation Dimensions**.
3. Identify the **top 3 priority improvements** based on severity and effort.
4. Provide **targeted correction proposals** — not redesigns.

---

## Rapid Failure Detection (Blockers)

Any YES here requires immediate correction before the design can ship:

| Check                    | Pass Condition                                                    |
| ------------------------ | ----------------------------------------------------------------- |
| Light source consistency | All shadows point in same direction                               |
| Material rule            | All neumorphic elements share base background color               |
| CTA/nav safety           | Primary CTAs and nav are NOT purely neumorphic                    |
| Interactive contrast     | All interactive elements have 3:1+ contrast at their boundary     |
| Focus visibility         | Custom focus styles implemented and visible                       |
| State supplementary cues | All interactive states have a non-shadow cue                      |
| ARIA completeness        | All interactive components have correct semantic roles and states |

---

## Six Evaluation Dimensions

### Dimension 1: Depth Consistency (0–10)

Evaluate: Does the design apply a coherent elevation system?

Score 9–10: Clear elevation hierarchy, all elements at consistent and logical depths,
light source direction uniform throughout, inset/raised/flat used appropriately per component.

Score 6–8: Minor inconsistencies in shadow direction or scale; elevation hierarchy mostly
present but with some elements that are ambiguous.

Score 3–5: Multiple elements with conflicting shadow directions; elevation relationships
between components unclear; no discernible hierarchy.

Score 0–2: Shadow directions inconsistent throughout; elements appear to float randomly;
no coherent depth model applied.

**What to look for:**

- Do any two adjacent elevated elements have shadows pointing in different directions?
- Do nested elements scale their shadows appropriately (smaller shadows at deeper nesting)?
- Does the "ground plane" feel consistent?

---

### Dimension 2: Hierarchy Clarity (0–10)

Evaluate: Can a user immediately understand what is most important on the screen?

Score 9–10: Clear focal points; interactive elements distinguishable from non-interactive;
depth levels map logically to importance; typographic hierarchy reinforces the depth model.

Score 6–8: Hierarchy mostly readable but one or two elements ambiguous in their importance
or interactivity.

Score 3–5: Multiple elements at the same visual weight; unclear what to do first; decorative
and functional elements compete.

Score 0–2: No visual hierarchy; all elements appear equal; user has no guidance on where
to focus.

**What to look for:**

- What's the first thing the eye lands on? Should it be?
- Are interactive elements clearly differentiated from containers?
- Does elevation reliably predict importance?

---

### Dimension 3: Usability and Affordance (0–10)

Evaluate: Do users know what they can interact with and how?

Score 9–10: All interactive elements have supplementary cues; state transitions are clear;
no ambiguity about what's clickable; hover/active states communicate interaction model.

Score 6–8: Most interactive elements are clear; one or two rely too heavily on shadow
alone for state communication.

Score 3–5: Multiple interactive elements that rely solely on shadow for state; pressed vs
default states difficult to distinguish; affordance unclear for key components.

Score 0–2: Shadow-only state communication throughout; no supplementary cues; users cannot
reliably identify interactive vs non-interactive elements.

---

### Dimension 4: Accessibility Compliance (0–10)

Evaluate: Does the design meet accessibility requirements?

Score 9–10: All interactive elements pass 3:1 non-text contrast; custom focus styles
implemented; all ARIA roles and states present; reduced-motion handled.

Score 6–8: Most elements pass contrast; minor gaps in focus styling or ARIA; no structural
failures.

Score 3–5: Several contrast failures; inconsistent focus styling; some ARIA gaps.

Score 0–2: Systematic contrast failures; no custom focus styles; missing ARIA throughout.

---

### Dimension 5: Aesthetic Cohesion (0–10)

Evaluate: Does the design feel like a coherent, considered system?

Score 9–10: Consistent shadow vocabulary; border-radius system consistent; spacing generous
and proportional; neumorphism applied selectively and purposefully; brand alignment achieved.

Score 6–8: Mostly cohesive with minor inconsistencies in radius or spacing; selective
application mostly successful.

Score 3–5: Some components feel out of place; neumorphism applied inconsistently or on
inappropriate components; brand alignment weak.

Score 0–2: Visual incoherence; random application of effects; no design system feel.

---

### Dimension 6: System Integration (0–10)

Evaluate: Does neumorphism work within the broader design system, or does it fight it?

Score 9–10: Neumorphism treated as a surface style layer; underlying grid, typography, and
color semantics preserved; fallback styles available; brand identity maintained.

Score 6–8: Mostly integrated; minor conflicts with existing system conventions; recoverable.

Score 3–5: Neumorphism replaces rather than overlays existing conventions; some design
system tokens broken; typography or color semantics affected.

Score 0–2: Neumorphism has overridden the design system entirely; no existing conventions
survive; the interface would need to be rebuilt to function in the broader product.

---

## Interpreting Scores

| Total (out of 60) | Assessment                                                         |
| ----------------- | ------------------------------------------------------------------ |
| 54–60             | Production-ready; minor polish only                                |
| 42–53             | Solid foundation; address identified gaps before shipping          |
| 30–41             | Requires significant work in low-scoring dimensions                |
| 18–29             | Concept stage only; fundamental issues must be resolved            |
| 0–17              | Recommend starting over with principles applied from the beginning |

---

## Priority Improvement Identification

After scoring, identify the top 3 priorities using this logic:

1. **Any accessibility blocker** → Highest priority regardless of score. Cannot ship.
2. **Lowest-scoring dimension** → Most impactful improvement opportunity.
3. **Highest-effort quick win** → Look for a single change that would improve 2+ dimensions.

Frame improvements as targeted corrections:

- "Add a 1px border at [target contrast] to the input fields to resolve the 3:1 contrast failure."
- "Align all shadow directions to top-left source; the cards in the sidebar are currently casting
  shadows in the opposite direction from the main content area."
- "The toggle's on/off state relies only on shadow inversion. Add a color fill to the track
  for the 'on' state to make the state change unambiguous."

---

## Design Review Output Template

When delivering a review, structure as:

**1. Blocker check** — List any Rapid Failure Detection failures and their required corrections.

**2. Dimension scores** — Score and one-sentence rationale for each dimension.

**3. What works** — Identify 2–3 genuine strengths to preserve.

**4. Top 3 improvements** — Prioritized, specific, actionable corrections.

**5. Systemic patterns** — Any recurring issue that suggests a missing principle rather
than isolated mistakes (e.g., "The team appears unaware of the supplementary cue
requirement for state changes — this should be addressed at the system level").

---

## Code-Level Review Checklist

Use this alongside the visual rubric when reviewing an actual frontend implementation.
Each item is a concrete thing to verify in the code, not a design judgment call.

### Tokens and Structure

☐ Are neu shadow values stored in named tokens (never as raw values in component styles),
regardless of whether the stack uses CSS custom properties, SCSS variables, a theme
object, or a design token file?
☐ Is there a dedicated, clearly labeled section or file for neu tokens, separate from
existing system tokens?
☐ Do dark mode tokens use a full independent recalculation — not a simple inversion of
light mode values?
☐ Do all component shadow definitions reference tokens by name, not by literal value?

### Focus Styles

☐ Is there a custom focus-visible style on every interactive neumorphic component
(not relying on the browser default, which is swallowed by shadow stacking)?
☐ Does the focus indicator use an outline or equivalent that sits _outside_ the shadow
stacking context — not an additional shadow layered inside the existing ones?
☐ Is the focus ring color verified at 3:1 contrast against the surface color token?
☐ Are focus styles tested in both light and dark mode?

### ARIA and Semantics

☐ Do all non-native interactive elements have the correct `role` attribute
(`button`, `switch`, `checkbox`, `radio`, `dialog`, etc.)?
☐ Do stateful components have the matching ARIA state attribute
(`aria-pressed`, `aria-checked`, `aria-expanded`, `aria-selected`)?
☐ Is that ARIA attribute being updated programmatically when state changes
(not just set statically in the HTML)?
☐ Do icon-only buttons have `aria-label` or an associated visually-hidden label?
☐ Are purely decorative shadow elements marked `aria-hidden="true"`?

### State Implementation

☐ Does the pressed/active state use an inset (inner) shadow — not just a reduced outer shadow?
☐ Is there a supplementary non-shadow cue for every interactive state change
(color fill, icon swap, border, or label update)?
☐ Does the disabled state remove shadows AND reduce opacity (not just one or the other)?
☐ Does the error state add a semantic color signal (border or icon), not just modify shadows?

### Reduced Motion

☐ Is there a reduced-motion preference handler that disables shadow transitions for users who have requested it?
☐ Does that handler disable transitions only — not the state change itself?

### Contrast (Spot-Check)

☐ Run the interactive element boundary color against the background through a contrast checker.
Does it pass 3:1?
☐ Run body text and label text against the base surface token color. Does it pass 4.5:1?
☐ Run the focus ring color against the base surface token color. Does it pass 3:1?
