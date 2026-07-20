import {
  Blocks,
  ChartNoAxesCombined,
  CircleDollarSign,
  CodeXml,
  Compass,
  Fingerprint,
  Layers3,
  RefreshCw,
  Smartphone,
  Sparkles,
} from 'lucide-react';

export const servicePractices = [
  {
    slug: 'product-strategy',
    eyebrow: '01 / Product strategy',
    title: 'Find the sharpest version of the opportunity.',
    description:
      'We convert uncertain ideas into a focused product direction, grounded in customer behavior, commercial reality and technical feasibility.',
    icon: Compass,
    capabilities: [
      'Product discovery',
      'Market and user framing',
      'MVP definition',
      'Roadmaps and prioritization',
      'Technical feasibility',
      'Product due diligence',
    ],
  },
  {
    slug: 'experience-design',
    eyebrow: '02 / Experience design',
    title: 'Make complex products feel clear and inevitable.',
    description:
      'Research, interaction design and visual systems come together to create experiences people can understand, trust and use confidently.',
    icon: Sparkles,
    capabilities: [
      'UX research',
      'Information architecture',
      'Product and interface design',
      'Interactive prototyping',
      'Design systems',
      'Usability validation',
    ],
  },
  {
    slug: 'software-engineering',
    eyebrow: '03 / Software engineering',
    title: 'Engineer the product behind the promise.',
    description:
      'Senior product engineers build resilient web, mobile and cloud platforms with a deliberate approach to quality, observability and scale.',
    icon: CodeXml,
    capabilities: [
      'Web applications',
      'Mobile products',
      'Backend systems and APIs',
      'Cloud architecture',
      'DevOps and observability',
      'Quality engineering',
    ],
  },
  {
    slug: 'fintech-web3',
    eyebrow: '04 / Blockchain engineering',
    title: 'Build trusted blockchain products for real-world adoption.',
    description:
      'Our core practice covers smart contracts, wallets, tokenization, digital identity and on-chain operations without compromising usability or control.',
    icon: CircleDollarSign,
    capabilities: [
      'Smart contract engineering',
      'Custodial and non-custodial wallets',
      'Tokenization and digital assets',
      'Digital identity and compliance',
      'Blockchain integrations',
      'On-chain operations',
    ],
  },
] as const;

export const serviceDetails = [
  {
    title: 'Product discovery',
    description:
      'Turn ambiguity into a decision-ready product brief and practical delivery plan.',
    icon: Compass,
  },
  {
    title: 'Web platforms',
    description:
      'Responsive, accessible and high-performance products built around real workflows.',
    icon: Layers3,
  },
  {
    title: 'Mobile products',
    description:
      'Cross-platform mobile experiences designed for reliability and natural use.',
    icon: Smartphone,
  },
  {
    title: 'Legacy modernization',
    description:
      'Reduce operational friction while evolving critical systems without reckless rewrites.',
    icon: RefreshCw,
  },
  {
    title: 'Digital assets',
    description:
      'Wallet, custody, smart-contract and tokenization systems shaped for everyday users.',
    icon: Blocks,
  },
  {
    title: 'Identity & compliance',
    description:
      'KYC, access and auditability integrated into customer journeys with less friction.',
    icon: Fingerprint,
  },
  {
    title: 'Data products',
    description:
      'Operational dashboards and decision systems that surface the signal, not the noise.',
    icon: ChartNoAxesCombined,
  },
] as const;
