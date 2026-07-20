export const siteConfig = {
  name: 'Asheratech',
  legalName: 'Asheratech',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://asheratech.com',
  email: 'contact@asheratech.com',
  description:
    'A digital product and engineering agency turning complex ideas into secure, scalable products for fintech, Web3, mobile and enterprise teams.',
  tagline: 'Compile complexity into progress.',
  navigation: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/asheratech/' },
    { label: 'GitHub', href: 'https://github.com/asheratech' },
  ],
} as const;

export const disciplines = [
  'Product strategy',
  'Experience design',
  'Software engineering',
  'Fintech & Web3',
] as const;

export const principles = [
  {
    number: '01',
    title: 'Senior talent, close to the work',
    copy: 'The people shaping the strategy stay involved through design, engineering and launch.',
  },
  {
    number: '02',
    title: 'Product thinking before production',
    copy: 'We pressure-test the problem, customer journey and business model before adding technical weight.',
  },
  {
    number: '03',
    title: 'Scale and security by design',
    copy: 'Architecture, observability and risk are considered from day one-not patched in at the finish line.',
  },
  {
    number: '04',
    title: 'Visible progress, fewer surprises',
    copy: 'Clear milestones, shared decision logs and frequent working releases keep delivery transparent.',
  },
] as const;

export const processSteps = [
  {
    id: 'define',
    number: '01',
    title: 'Define',
    description:
      'Align the opportunity, users, constraints and success measures into a focused product brief.',
    outputs: ['Discovery brief', 'Opportunity map', 'Delivery roadmap'],
  },
  {
    id: 'design',
    number: '02',
    title: 'Design',
    description:
      'Shape the experience and system architecture together, reducing uncertainty before full build.',
    outputs: ['UX flows', 'Prototype', 'Technical architecture'],
  },
  {
    id: 'build',
    number: '03',
    title: 'Build',
    description:
      'Ship in focused iterations with peer review, quality gates and continuous stakeholder visibility.',
    outputs: ['Production code', 'QA evidence', 'Release candidate'],
  },
  {
    id: 'scale',
    number: '04',
    title: 'Scale',
    description:
      'Launch with confidence, monitor the right signals and evolve the product around real usage.',
    outputs: ['Launch plan', 'Observability', 'Growth backlog'],
  },
] as const;

export const industries = [
  {
    title: 'Financial technology',
    description:
      'Payment journeys, digital banking, identity, compliance and transaction infrastructure designed around trust.',
    code: 'FIN',
  },
  {
    title: 'Blockchain & digital assets',
    description:
      'Tokenization, custody, smart contracts and marketplaces translated into usable, resilient products.',
    code: 'WEB3',
  },
  {
    title: 'Enterprise platforms',
    description:
      'Complex operations simplified through connected workflows, modern architecture and measurable visibility.',
    code: 'ENT',
  },
  {
    title: 'Mobile products',
    description:
      'Focused cross-platform experiences that feel native, work reliably and support real-world behavior.',
    code: 'MOB',
  },
] as const;

export const technologies = {
  'Product interfaces': [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Design systems',
  ],
  'Backend & APIs': ['Node.js', 'Express', 'NestJS', 'GraphQL', 'PostgreSQL'],
  'Cloud & infrastructure': ['AWS', 'Docker', 'Kubernetes', 'Redis', 'CI/CD'],
  Mobile: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
  'Blockchain & assets': [
    'Solidity',
    'ERC standards',
    'Fireblocks',
    'Wallets',
    'Indexers',
  ],
  'Data & observability': [
    'MongoDB',
    'OpenTelemetry',
    'Prometheus',
    'Grafana',
    'CloudWatch',
  ],
} as const;
