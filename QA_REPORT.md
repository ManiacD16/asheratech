# Asheratech Portfolio — Final QA Report

**QA date:** 15 July 2026  
**Test target:** Next.js production build served with `next start`  
**Browser engine:** Chromium  
**Build:** Next.js 15.5.18, React 18, TypeScript, Tailwind CSS, GSAP, Framer Motion, Lenis

## Executive result

The corrected portfolio passed the final automated and visual QA sweep. All public routes opened successfully, responsive layouts were checked at three widths, dark mode and reduced motion were verified, and no unexpected accessibility, contrast, overflow, console, page, or touch-target failures remained in the tested build.

The intentional `/qa-not-found` test route returned HTTP 404 and rendered the custom not-found experience correctly.

## Coverage

### Routes opened

1. `/`
2. `/work`
3. `/work/payment-orchestration-platform`
4. `/work/tokenized-assets-marketplace`
5. `/work/connected-care-mobile`
6. `/work/enterprise-operations-modernization`
7. `/services`
8. `/about`
9. `/insights`
10. `/insights/designing-trust-into-fintech-products`
11. `/insights/modernize-without-a-big-bang-rewrite`
12. `/insights/hide-blockchain-complexity-not-consequence`
13. `/contact`
14. `/privacy`
15. `/qa-not-found` — expected 404

### Responsive matrix

- Desktop: **1440 × 1000**
- Tablet: **1024 × 768**
- Mobile: **390 × 844**
- Total route/viewport DOM audits: **45**
- Top-of-page screenshots: **45**
- Dark-mode screenshots: **8**
- Full-page reference screenshots: **12**
- Total screenshots delivered: **65**

## Final validation results

| Test area             |                                                                               Result |
| --------------------- | -----------------------------------------------------------------------------------: |
| TypeScript            |                                                                               Passed |
| ESLint                |                                                            Passed with zero warnings |
| Production build      |                                         Passed; 21 static/generated routes completed |
| Route status checks   |                              14 expected 200 responses; custom 404 behaved correctly |
| DOM/responsive audits |                                                                         45/45 passed |
| Horizontal overflow   |                                       None across all 45 route/viewport combinations |
| Heading structure     |                             One visible H1 and one main content region on every page |
| Heading-level skips   |                                                                        None detected |
| Unlabeled controls    |                                                                        None detected |
| Empty links           |                                                                        None detected |
| Touch targets         |                                No controls below the 44 px target in the final audit |
| Contrast audit        |                                             30 light/dark route views, zero failures |
| axe WCAG audit        |                          28 representative page/theme/viewport runs, zero violations |
| Console/page errors   |                         No unexpected errors; expected 404 resource message excluded |
| Reduced motion        |                               Passed; loader removed and content immediately visible |
| Mobile navigation     | Focus trap, Escape close, inert background, scroll lock and focus restoration passed |
| Theme persistence     |                                                                 Passed across reload |
| Page transitions      |                              Passed; no stuck curtain or blocked pointer interaction |
| Contact validation    |                   Required-field focus and accessible delivery-error fallback passed |

## Visual comparison against the intended design

The final UI consistently follows the supplied design system:

- Paper-white and frost surfaces are the dominant light-mode canvas.
- Midnight navy remains the structural text and inverse-section color.
- Signal green is the only primary chromatic accent.
- Typography uses the approved Inter substitute for TT Norms Pro, with tight editorial display tracking and restrained body sizes.
- Pill CTAs, 20–32 px soft radii, hairline cool-gray borders, and restrained elevation are used consistently.
- Section rhythm follows the intended generous 4 px-based spacing scale.
- Product mockups remain the primary visual storytelling device rather than full-bleed stock photography.
- Dark mode preserves the same hierarchy instead of simply inverting colors.

No page showed accidental clipping, broken hierarchy, inconsistent gutters, or unexplained spacing in the final screenshot set.

## Defects found and fixed

### Interaction and animation

- Prevented pointer-driven tilt and spotlight logic from running on coarse/touch pointers.
- Added keyboard focus trapping to the mobile menu.
- Restored focus to the menu button after Escape/close.
- Applied `inert` to background content while the modal navigation is open.
- Verified scroll locking and restored the original body overflow state.
- Shortened the first-visit loader to reduce time before useful content.
- Paused infinite hero floating animations while the hero is offscreen.
- Removed whole-page blur from route transitions to reduce expensive repainting.
- Ensured the route curtain cannot capture pointer events after navigation.
- Corrected reduced-motion case-study cards that could remain visually hidden in static/full-page rendering until their observer fired.

### Responsive layout and spacing

- Corrected a tablet hero offset that could push a floating product-status card outside the safe viewport.
- Improved mobile footer typography so the oversized wordmark no longer risks clipping.
- Standardized footer, navigation, article, contact and final-CTA touch areas to at least 44 px.
- Improved small-screen CTA and utility-link alignment.
- Verified no document-level overflow at 390, 1024 or 1440 px.

### Accessibility

- Made the skip-link target programmatically focusable.
- Added `aria-current="page"` to active desktop and mobile navigation links.
- Added explicit input types and retained visible labels for all form fields.
- Hid decorative product mockup copy and oversized background typography from assistive technology.
- Removed one purely decorative low-contrast numeral that an automated audit correctly treated as visible text.
- Increased loader and inverse-section secondary-copy contrast.
- Corrected a light-surface green token used on a dark section to the bright signal-green token.
- Preserved reduced-motion and keyboard-visible focus behavior.

### Performance and resilience

- Paused offscreen continuous GSAP loops.
- Disabled pointer animation work on touch devices.
- Removed an expensive page-wide blur transition.
- Reduced loader duration while retaining the branded transition.
- Confirmed zero request failures during the local production performance sweep.
- Confirmed content remains visible in reduced-motion full-page rendering.

## Local production performance observations

These figures were collected against the local production server without external network latency. They are useful for regression comparison but are not a substitute for a hosted Lighthouse/WebPageTest run.

| View                      |    FCP |      LCP | CLS | Transferred resources | Transferred JS |
| ------------------------- | -----: | -------: | --: | --------------------: | -------------: |
| Desktop home, first visit | 496 ms | 2,068 ms |   0 |                289 KB |         239 KB |
| Desktop home, repeat      | 400 ms | 1,780 ms |   0 |                289 KB |         239 KB |
| Mobile home, repeat       | 440 ms | 1,788 ms |   0 |                259 KB |         233 KB |
| Desktop services          | 380 ms | 1,420 ms |   0 |                291 KB |         239 KB |
| Desktop contact           | 348 ms | 1,336 ms |   0 |                297 KB |         239 KB |

Static build inventory:

- Total JavaScript across all generated chunks: approximately **1.12 MB uncompressed**; this is not all loaded by a single route.
- Route-observed compressed JavaScript transfer: approximately **233–239 KB**.
- Global CSS build output: approximately **60 KB uncompressed**.

## Functional notes

The contact endpoint intentionally returns an accessible delivery-service message when `CONTACT_WEBHOOK_URL` is absent. This is an environment configuration dependency rather than a UI defect. The form preserves entered context, announces the error, and provides a direct email fallback.

Before deployment, configure:

```env
CONTACT_WEBHOOK_URL=https://your-secure-form-endpoint.example
```

## Screenshot directories

- `screenshots/desktop` — all 15 routes
- `screenshots/tablet` — all 15 routes
- `screenshots/mobile` — all 15 routes
- `screenshots/dark-desktop` — Home, Work, Services, Contact
- `screenshots/dark-mobile` — Home, Work, Services, Contact
- `screenshots/full-page-desktop` — key template coverage
- `screenshots/full-page-mobile` — key template coverage

## Release recommendation

**Approved for staging/deployment.**

The tested implementation has no remaining reproducible visual, responsive, animation, accessibility, spacing, or local performance defects. A final hosted-environment check should confirm the production domain, analytics consent, webhook delivery, caching headers and CDN behavior.
