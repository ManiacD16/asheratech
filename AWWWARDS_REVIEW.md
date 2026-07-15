# Asheratech — Awwwards-Style Design Review

This is an internal, subjective design-quality audit rather than an official Awwwards score.

## Review outcome

The original build had a strong technical foundation and clear content architecture, but too many interactions shared the same fade-up/lift behavior. The hierarchy was competent rather than distinctive, case studies read like polished SaaS cards, and the loading/navigation experience did not yet create a memorable studio signature.

The award pass focuses on a coherent experience system rather than adding effects indiscriminately.

## Scorecard after the award pass

| Area        | Assessment | Notes                                                                                                                                                |
| ----------- | ---------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Design      |   8.7 / 10 | More confident scale, editorial case-study rhythm, better dark/light contrast and stronger visual tension.                                           |
| Usability   |   8.8 / 10 | Directional navigation, clear actions, touch-safe behavior, visible focus, reduced motion and readable page structure.                               |
| Creativity  |   8.4 / 10 | Branded compiler preloader, contextual cursor states, pointer spotlights, route curtains and product-oriented visual storytelling.                   |
| Content     |   8.2 / 10 | Strong positioning and structure; final score still depends on approved client work, real imagery and verified outcomes.                             |
| Performance |   8.3 / 10 | Static generation, route-level loading, AVIF/WebP support and restrained transforms. Home interaction libraries add weight but remain page-specific. |

## Key improvements

- Rebuilt the hero as a full-height editorial statement with pointer-responsive product staging and scroll-linked depth.
- Replaced generic project cards with alternating case-study compositions, subtle 3D tilt, cursor spotlighting, contextual labels and richer metadata.
- Added a branded progress preloader and cinematic route-curtain transitions.
- Added a responsive custom cursor for fine-pointer devices only.
- Added a global scroll-progress indicator.
- Added directional hide/reveal navigation and double-line nav-link motion.
- Added magnetic CTA behavior and full-surface button fills.
- Rebuilt capability cards into an asymmetric responsive bento system with pointer-position lighting.
- Reworked principles, industries and insights into more editorial, reactive list systems.
- Strengthened scroll storytelling in the process section with active-phase states and GSAP progress tracking.
- Increased typographic scale and tightened display tracking while preserving readable body rhythm.
- Expanded desktop section spacing and improved mobile hierarchy.
- Rebuilt the final CTA and footer around oversized typography and stronger conversion focus.
- Improved contact-form hierarchy, field states, submission feedback and success treatment.
- Synchronized Lenis and GSAP for smoother scroll-trigger accuracy.
- Preserved reduced-motion, keyboard and touch-device behavior.

## What still determines the public award ceiling

The largest remaining variable is not code. A truly award-competitive submission needs:

1. Approved real client imagery or exceptionally art-directed project renders.
2. Verified outcomes and testimonials.
3. A refined final SVG identity rather than placeholder branding.
4. Final content editing by a native brand copywriter.
5. Device testing with production analytics, consent and form providers installed.
6. A final Lighthouse and accessibility audit on the deployed host.

The source is designed so these assets can be introduced without rebuilding the interaction or layout system.
