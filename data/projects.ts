export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  services: string[];
  platforms: string[];
  metrics: ProjectMetric[];
  accent: 'green' | 'blue' | 'slate' | 'mint';
  visual: 'payments' | 'assets' | 'health' | 'operations';
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'payment-orchestration-platform',
    title: 'A clearer command center for global payments.',
    client: 'Confidential fintech company',
    category: 'Financial technology',
    year: '2026',
    summary:
      'Unifying payment operations, exceptions and settlement visibility inside one focused operating experience.',
    challenge:
      'Payment teams were switching between fragmented tools to understand transaction status, investigate failures and coordinate settlement. The product needed to reduce operational ambiguity while supporting strict access and audit requirements.',
    approach: [
      'Mapped the transaction lifecycle around the decisions operators make, not the systems they use.',
      'Designed a shared exception model that made status, ownership and next action immediately visible.',
      'Built a modular Next.js interface and API layer ready for multiple processors and regional workflows.',
      'Introduced role-aware views, audit context and observability patterns from the first release.',
    ],
    outcome:
      'The resulting product concept gives operations teams a single source of truth, creates a clearer path for exception handling and provides a scalable foundation for additional payment rails.',
    services: [
      'Product strategy',
      'Experience design',
      'Web engineering',
      'System architecture',
    ],
    platforms: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    metrics: [
      { value: '01', label: 'Unified operating model' },
      { value: '04', label: 'Core transaction states' },
      { value: '24/7', label: 'Operational visibility' },
    ],
    accent: 'green',
    visual: 'payments',
    featured: true,
  },
  {
    slug: 'tokenized-assets-marketplace',
    title: 'Making digital ownership feel tangible.',
    client: 'Confidential digital-assets venture',
    category: 'Blockchain & tokenization',
    year: '2026',
    summary:
      'A marketplace experience that connects investor onboarding, custody and asset operations without exposing the underlying complexity.',
    challenge:
      'The platform needed to coordinate identity checks, custodial wallets, asset discovery and post-purchase activity in a way that felt coherent to first-time digital-asset investors.',
    approach: [
      'Reframed onboarding as a guided readiness journey with clear progress and reason-for-request context.',
      'Separated investor decisions from blockchain execution details while preserving transaction transparency.',
      'Designed reusable marketplace, wallet and asset-operation patterns for web and administration.',
      'Created architecture boundaries for identity, custody, payments and on-chain orchestration.',
    ],
    outcome:
      'The concept turns a technically dense investment journey into a sequence of understandable decisions and gives the product team a reusable system for new asset classes.',
    services: [
      'Product definition',
      'UX/UI design',
      'Full-stack engineering',
      'Blockchain integration',
    ],
    platforms: ['React', 'Node.js', 'MongoDB', 'Solidity'],
    metrics: [
      { value: '05', label: 'Connected product domains' },
      { value: '01', label: 'Shared design system' },
      { value: '360°', label: 'Investor journey view' },
    ],
    accent: 'blue',
    visual: 'assets',
    featured: true,
  },
  {
    slug: 'connected-care-mobile',
    title: 'Care journeys that stay human on a small screen.',
    client: 'Confidential healthcare product',
    category: 'Mobile product',
    year: '2025',
    summary:
      'A calm mobile experience for appointments, care tasks and progress—designed around moments of uncertainty.',
    challenge:
      'Patients needed a simpler way to prepare for appointments, understand next actions and stay connected to care without navigating fragmented messages and portals.',
    approach: [
      'Structured the product around a daily care timeline rather than organizational departments.',
      'Used progressive disclosure to keep sensitive and complex information manageable.',
      'Created accessible mobile components and resilient offline-aware interaction states.',
      'Aligned the experience with secure identity, notification and appointment-service boundaries.',
    ],
    outcome:
      'The product direction reduces cognitive load around care tasks and establishes a flexible mobile foundation for future clinical journeys.',
    services: [
      'User experience',
      'Mobile design',
      'Flutter engineering',
      'Design system',
    ],
    platforms: ['Flutter', 'Firebase', 'Node.js', 'AWS'],
    metrics: [
      { value: 'AA', label: 'Accessibility target' },
      { value: '03', label: 'Primary care moments' },
      { value: '1 tap', label: 'Next-action clarity' },
    ],
    accent: 'mint',
    visual: 'health',
    featured: true,
  },
  {
    slug: 'enterprise-operations-modernization',
    title: 'From spreadsheet coordination to operational clarity.',
    client: 'Confidential enterprise team',
    category: 'Enterprise modernization',
    year: '2025',
    summary:
      'A modular operations platform that makes work, risk and ownership visible across distributed teams.',
    challenge:
      'Critical workflows were distributed across spreadsheets, email and legacy screens. Teams lacked a dependable view of progress, blockers and accountability.',
    approach: [
      'Documented the operating model and identified the smallest shared vocabulary across teams.',
      'Designed role-specific workspaces over a consistent task and exception framework.',
      'Planned an incremental modernization path that could coexist with existing systems.',
      'Introduced audit history, service boundaries and operational monitoring as platform primitives.',
    ],
    outcome:
      'The modernization plan creates a practical route away from fragmented coordination while protecting continuity for business-critical operations.',
    services: [
      'Service design',
      'Enterprise UX',
      'Architecture',
      'Modernization roadmap',
    ],
    platforms: ['Next.js', 'Node.js', 'AWS', 'OpenTelemetry'],
    metrics: [
      { value: '04', label: 'Connected workflows' },
      { value: '01', label: 'Operational vocabulary' },
      { value: '0', label: 'Big-bang rewrites' },
    ],
    accent: 'slate',
    visual: 'operations',
    featured: false,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
