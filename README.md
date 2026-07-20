# Asheratech Portfolio

An award-pass, multi-page agency portfolio built with Next.js App Router, TypeScript, Tailwind CSS, GSAP, Framer Motion and Lenis.

## Included

- Work-first homepage and reusable editorial sections
- Work index and statically generated case-study routes
- Services, About, Insights, Contact and Privacy pages
- Dark/light/system themes
- GSAP scroll storytelling and Framer Motion page/component transitions
- Branded progress preloader, route curtains and global scroll progress
- Fine-pointer custom cursor with contextual states
- Magnetic CTAs, pointer spotlights and subtle project-card tilt
- Direction-aware sticky navigation and premium mobile menu
- Reduced-motion behavior and keyboard-visible focus states
- Smooth scrolling through Lenis
- Responsive product mockups built as components (no stock-image dependency)
- Metadata, canonical URLs, Open Graph image, sitemap, robots and JSON-LD
- Validated contact API with a configurable secure webhook
- Source design references under `docs/`

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

See `AWWWARDS_REVIEW.md` for the design-quality audit and award-pass rationale.

## Production build

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Contact form

Set `CONTACT_WEBHOOK_URL` to a server-side webhook that accepts JSON. The route validates form data before forwarding it. Do not expose provider secrets with a `NEXT_PUBLIC_` prefix.

Example payload:

```json
{
  "name": "Jane Doe",
  "email": "jane@company.com",
  "company": "Company",
  "projectType": "New digital product",
  "timeline": "Within 1–2 months",
  "budget": "$75k–$150k",
  "message": "Project context...",
  "submittedAt": "ISO timestamp",
  "source": "asheratech-portfolio",
  "recipient": "contact@asheratech.com"
}
```

When the webhook is not configured, the form displays a direct email fallback rather than pretending the inquiry was sent.

## Content model

- `data/projects.ts` - case-study data
- `data/services.ts` - service practices and focused capabilities
- `data/insights.ts` - insight articles
- `data/site.ts` - navigation, company details, process and technologies

The included work is labeled as representative/confidential. Replace it with approved client names, verified outcomes, permissions and final imagery before public launch.

## Design system

The global theme translates the supplied Wrike-derived references into an Asheratech agency system:

- Midnight navy for authority and dark stages
- Signal green as the only primary chromatic action accent
- White/frost surfaces with cool blue-gray borders
- 4px spacing logic, soft 20–32px cards and pill CTAs
- System/Inter/TT Norms Pro fallback stack; no font binaries are bundled

## Deployment

Works with Vercel and standard Node.js hosting. The project currently targets Next.js 15.5.16. Re-run `npm audit` during deployment and move to a patched stable Next.js release whenever your hosting baseline permits. Configure:

- `NEXT_PUBLIC_SITE_URL`
- `CONTACT_WEBHOOK_URL`
- `CONTACT_TO_EMAIL`

Then run `npm run build`.

## Quality assurance

The final production build was validated across every public route at desktop, tablet and mobile widths, including light/dark themes, reduced motion, keyboard navigation, contrast, contact validation and local performance checks.

See [`QA_REPORT.md`](./QA_REPORT.md) for the complete test matrix, fixes and deployment recommendation.
