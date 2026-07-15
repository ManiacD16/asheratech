# Asheratech — Definitive Refinement Pass

This pass moves the portfolio from a polished agency template to a more authored studio experience. The visual and interaction system is now designed around clarity, controlled tension, editorial scale, and signal-green moments rather than repeated card patterns or uniform fade-up animation.

## Art direction

- Introduced outlined display typography, kinetic rules, scanline detail, depth-aware surfaces, chapter numbering, editorial side rails, and route-specific visual language.
- Refined the light and dark palettes for stronger contrast, calmer surface hierarchy, and more deliberate green usage.
- Reworked interior-page introductions so Work, Services, About, Insights, Contact, and legal content no longer feel like reskinned homepage sections.
- Strengthened case-study and article composition with larger editorial titles, clearer metadata, reading chapters, and active article navigation.

## Interaction and motion

- Added cinematic route curtains with route-aware chapter labels.
- Added a live global chapter rail for long-form pages.
- Added contextual cursor states, magnetic CTA behavior, button glints, pointer lighting, subtle 3D project depth, icon orbits, and scanline movement.
- Synced Lenis and GSAP scrolling, including anchor offsets and cleanup behavior.
- Paused continuous hero and marquee motion when offscreen.
- Prevented pointer-only effects from running on touch devices.
- Removed repeated generic reveal behavior in favor of contextual rise, mask, scale, and scroll-linked sequences.

## Accessibility

- Eliminated reduced-motion hydration mismatches.
- Reduced-motion users receive immediately visible content without delayed observers or route curtains.
- Preserved semantic headings, focus visibility, skip navigation, keyboard-safe mobile navigation, focus restoration, and inert background behavior.
- Decorative oversized typography and product illustrations are hidden from assistive technology.
- Controls remain at least approximately 44px, with persistent labels and clear invalid states.
- Forced-colors fallbacks are included for outlined typography and decorative layers.

## Responsive quality

- Rebalanced hero typography and spacing independently for desktop, tablet, and mobile.
- Preserved readable product visuals without desktop-only hover dependencies.
- Prevented horizontal overflow across reviewed viewports.
- Mobile navigation, CTAs, project layouts, article typography, and contact controls use touch-first sizing.

## Performance and engineering

- Continuous GSAP loops pause outside the viewport.
- Pointer tweens use overwrite behavior to prevent animation queues.
- The first-visit loader is brief, session-aware, and suppressed for reduced-motion users.
- Route and theme placeholders no longer create mount-time visual gaps.
- Security headers, image format preferences, compressed output, and source-map settings remain configured.
- Components are formatted consistently and organized by layout, motion, section, project, form, insight, and UI responsibility.

## Verification

- TypeScript: passed
- ESLint: passed with zero warnings
- Prettier: passed
- Production dependency audit: zero vulnerabilities
- Browser review: desktop, tablet, mobile, dark mode, reduced motion, work, services, case study, and insight layouts
- Browser checks: one H1, no horizontal overflow, no undersized interactive targets, and no page errors in reviewed captures

### Runtime note

The Next.js development server compiled and rendered the reviewed routes successfully. In this constrained execution environment, `next build` stalled during webpack's production optimization stage without emitting a source error. The source-level checks and browser rendering checks above passed; the production build should be re-run in the target CI or hosting environment before deployment.
