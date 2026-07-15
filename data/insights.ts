export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  sections: { heading: string; body: string[] }[];
};

export const insights: Insight[] = [
  {
    slug: 'designing-trust-into-fintech-products',
    title: 'Designing trust into fintech products before the first transaction',
    excerpt:
      'Trust is not a badge at the bottom of a screen. It is the cumulative result of clear states, understandable risk and dependable recovery.',
    category: 'Fintech',
    date: '2026-06-18',
    readTime: '7 min read',
    sections: [
      {
        heading: 'Trust is operational, not ornamental',
        body: [
          'Financial products often communicate trust through visual polish while leaving the most important moments ambiguous. Users decide whether a product is dependable when money is pending, identity checks fail or a transfer needs attention.',
          'Those moments require explicit status, ownership, timing and next action. A reassuring color palette cannot compensate for an unclear transaction model.',
        ],
      },
      {
        heading: 'Design the exception before the happy path',
        body: [
          'Map what can fail, who can resolve it and what evidence each participant needs. This exposes hidden dependencies early and produces interfaces that remain useful under stress.',
          'The best financial experiences do not pretend uncertainty does not exist. They make uncertainty legible and manageable.',
        ],
      },
      {
        heading: 'Make architecture visible through behavior',
        body: [
          'Customers do not need to understand your service boundaries, but they should experience consistent states across them. Shared status language, idempotent actions and durable audit context turn technical reliability into a felt product quality.',
        ],
      },
    ],
  },
  {
    slug: 'modernize-without-a-big-bang-rewrite',
    title: 'How to modernize critical software without betting the business',
    excerpt:
      'A useful modernization plan improves the operating model in increments instead of replacing every system at once.',
    category: 'Enterprise',
    date: '2026-05-29',
    readTime: '8 min read',
    sections: [
      {
        heading: 'Start with the operating model',
        body: [
          'Legacy software is often blamed for problems created by fragmented ownership, unclear rules and duplicated processes. Replacing the interface without addressing those conditions simply moves the confusion into a newer stack.',
          'Map the decisions, handoffs and failure points before deciding what should be rebuilt.',
        ],
      },
      {
        heading: 'Create seams before replacements',
        body: [
          'Introduce stable APIs, event boundaries and shared identity models around the most valuable workflows. These seams make incremental change possible and reduce the number of teams that must move in lockstep.',
        ],
      },
      {
        heading: 'Measure operational improvement',
        body: [
          'Track lead time, exception volume, manual reconciliation and recovery—not just technical migration milestones. Modernization succeeds when the organization operates with less friction and better visibility.',
        ],
      },
    ],
  },
  {
    slug: 'hide-blockchain-complexity-not-consequence',
    title: 'Hide blockchain complexity—not transaction consequence',
    excerpt:
      'Good Web3 UX removes implementation detail while preserving the information people need to understand ownership, cost and finality.',
    category: 'Digital assets',
    date: '2026-04-12',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Abstraction needs boundaries',
        body: [
          'Wallets, networks and signatures should not dominate every interaction. But hiding every technical concept can make irreversible actions feel deceptively ordinary.',
          'The product must distinguish between detail that creates cognitive load and information that changes the user’s decision.',
        ],
      },
      {
        heading: 'Use plain language for irreversible moments',
        body: [
          'Explain destination, asset, amount, estimated fee and expected finality before commitment. After submission, show a durable transaction reference and a clear distinction between submitted, confirmed and failed states.',
        ],
      },
      {
        heading: 'Design for recovery even when reversal is impossible',
        body: [
          'Recovery can mean better diagnosis, support evidence and next-step guidance—not necessarily undoing the transaction. Product teams should treat these paths as core experience, not edge-case copy.',
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
