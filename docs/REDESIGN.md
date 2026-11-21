# Redesign notes

The site was rebuilt around the ribbon emblem and a scroll-led home page.
This file records what the new system is made of and where to change it.

## Brand assets

| File | Use |
| --- | --- |
| `public/brand/asheraatech-mark.svg` | Full-colour emblem (header, menu wipe, closing panel) |
| `public/brand/asheraatech-mark-line.svg` | Tone-on-tone engraving (page intros, footer resting state) |
| `public/icon.svg` | Favicon, a lighter build of the same emblem |
| `public/models/asheraatech-ribbon.glb` | 3D ribbon rendered in the home hero |

`components/layout/logo.tsx` exports `Logo` (mark + wordmark) and `LogoMark`.

## Colour

Tokens live at the top of `app/globals.css` and are mirrored in
`tailwind.config.ts`. All values are sampled from the emblem.

| Token | Value | Role |
| --- | --- | --- |
| `--color-ink` | `#0f0b4d` | Dark surface, text on paper |
| `--color-night` | `#070526` | Deepest shade |
| `--color-paper` | `#f6faff` | Light surface, text on ink |
| `--color-violet` | `#2c0d81` | Emblem shadow fold |
| `--color-royal` | `#124ed9` | Accent on paper |
| `--color-azure` | `#00a8f7` | Mid accent, rules, markers |
| `--color-cyan` | `#01e6ff` | Accent on ink |

The site uses one art-directed theme (the theme toggle is no longer mounted).
Add the `dark` class to any wrapper to flip the Tailwind surface tokens to the
ink surface for that region; `PageIntro` does this.

## Type

| Role | Family | Token |
| --- | --- | --- |
| Display (uppercase titles) | Imbue | `--font-display` |
| Serif (titles in content, leads, dates) | Instrument Serif | `--font-serif` |
| Text and labels | Schibsted Grotesk | `--font-sans` |

Fonts are self-hosted through `@fontsource` packages imported in
`app/layout.tsx`. To switch to licensed faces, add the font files, declare
them with `@font-face` (or `next/font/local`) and change the three
`--font-*` variables; nothing else references a family by name.

`h1`/`h2` take the display face and `h3`/`h4` the serif automatically. Add
`data-plain` to a heading to opt out.

## Home page

`app/page.tsx` composes five sections from `components/home/`:

1. `hero` – fitted title, outlined echoes that lag on scroll, WebGL stage
   (`ribbon-scene.tsx`) with the ribbon and floating pieces.
2. `portal` – pinned framed card; text reads in, fades, the card grows to
   become the paper surface.
3. `featured` – full-width title and the bordered work grid.
4. `deck` – pinned outlined word with cards dealt on scroll; cards are
   draggable.
5. `ledger` – framed process panel and the writing log.

Scroll work uses GSAP ScrollTrigger with Lenis (`lib/gsap.ts`,
`components/motion/smooth-scroll.tsx`). Pinned sections use CSS
`position: sticky`, so they degrade to normal flow when motion is reduced.

## Portfolio

`data/portfolio.ts` holds the live projects from the company portfolio,
grouped under the portfolio's eight headlines (mobile, healthcare, social and
commerce, fintech, insurtech, mobility, blockchain and Web3, corporate). Each
entry has its summary, scope tags, outbound links and image. Add a project
there and it appears everywhere below.

- `components/portfolio/portfolio-showcase.tsx` is the "The Portfolio"
  section on `/work`: sector filter chips, a Gallery/Index switch, chapter
  headers, cards that tilt toward the pointer, and an index list with a
  preview image that trails the cursor. Every card has an anchor
  (`/work#<slug>`).
- The home page "Selected work" grid reads `portfolioHighlights` from the
  same file; change that list to pick other lead projects.

Project images are in `public/images/portfolio/` (1536 × 1024 WebP), made in
the same art direction as the studio photographs. The originals are in the
Figma draft "Asheraatech portfolio imagery".

## Shared pieces

- `components/layout/header.tsx` – mark + two-bar menu button; the menu is a
  sheet revealed by four stacked colour layers. Bar colour follows the
  surface underneath (`hooks/use-surface-tone.ts`).
- `components/layout/footer.tsx` – place cards and the emblem that is painted
  in by the pointer (`footer-art.tsx`).
- `components/motion/page-transition.tsx` – CSS-only colour-sheet wipe on
  every route.
- `.notched` (globals) – concave-corner frame used by cards and panels.

## Imagery

All photographs live in `public/images/studio/` as WebP (1536 × 1024). They
were generated for this site in one art direction: people at work, cool
daylight, indigo and electric-blue light, no text or logos in frame. The
originals are in the Figma draft "Asheraatech site imagery".

| Files | Used by |
| --- | --- |
| `work-*.webp` | Home work grid, work index and case-study pages |
| `cap-*.webp` | Capability cards (Services), blockchain section, home grid |
| `studio-team.webp` | About intro |
| `delivery-process.webp` | Process section |
| `technology-workspace.webp` | Technology section |
| `blockchain-ambient.webp` | Background of the blockchain section |

The previous illustrations in `public/images/asheratech/` are no longer
referenced anywhere and can be deleted.

## Hero pieces

`components/home/ribbon-scene.tsx` loads fifteen technology models from
`public/models/tech/` and floats them around the ribbon: React, Next.js,
Node.js, JavaScript, HTML, CSS, Tailwind CSS, Docker, Redis, MongoDB,
PostgreSQL, Postman, Solidity, Ethereum and a blockchain strip. Each entry in
the `TECHNOLOGIES` array sets a model's position (wide and narrow screens),
size, resting angle and scroll drift; add, remove or move a piece there.

The files are meshopt-compressed (about 1 MB in total, down from 18.5 MB as
supplied). To add another model, optimise it the same way:

```
npx @gltf-transform/cli optimize in.glb public/models/tech/name.glb \
  --compress meshopt --simplify false --palette false --instance false
```

Authors and licences are listed in `public/models/tech/CREDITS.md`.

## Retired home sections

The earlier home sections in `components/sections/` that the home page no
longer imports (hero, proof-strip, selected-work, capabilities, principles,
industries, studio-note, insights-preview and their graphics) are untouched
and can be deleted once you are happy with the new page.
