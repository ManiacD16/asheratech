/**
 * Portfolio sectors. The site presents the work by category only: no
 * product names, per-project details or outbound links. Images live in
 * public/images/portfolio/ and share the studio art direction.
 */

export type PortfolioImage = {
  src: string;
  alt: string;
};

export type PortfolioCategory = {
  id: string;
  title: string;
  /** Shorter label for tabs, cards and the toolbar readout. */
  short: string;
  intro: string;
  description: string;
  /** Kinds of product delivered in this sector. */
  builds: string[];
  platforms: string;
  /** Live products delivered in this sector. */
  products: number;
  images: PortfolioImage[];
  /** Core specialism: shown first, on the ink surface. */
  featured?: boolean;
};

const img = (name: string, alt: string): PortfolioImage => ({
  src: `/images/portfolio/${name}.webp`,
  alt,
});

export const portfolio: PortfolioCategory[] = [
  {
    id: 'blockchain-web3',
    title: 'Blockchain, Web3 & Crypto',
    short: 'Blockchain & Web3',
    intro:
      'Our core specialism. Exchanges, token sales, vesting, explorers, mining and on-chain rewards, shipped with security in mind.',
    description:
      'We design and engineer the full on-chain stack: smart contracts, token economics, wallet flows and the web products people use to trade, invest and earn. Every launch is built around transparent transactions, secure custody and clear user journeys.',
    builds: [
      'Centralised crypto exchanges',
      'ICO launchpads & token sales',
      'Vesting platforms & explorers',
      'BEP-20 & ERC-20 tokens',
      'Telegram mining systems',
      'Arbitrage & referral platforms',
      'Smart-contract reward payouts',
      'Web3 skills & credential platforms',
    ],
    platforms: 'Web · Smart contracts · Telegram',
    products: 8,
    featured: true,
    images: [
      img(
        'blockchain-1',
        'A trader at a multi-monitor desk studies candlestick charts at night.',
      ),
      img(
        'blockchain-2',
        'An engineer studies a chain of glowing blocks above a stepped unlock timeline.',
      ),
      img(
        'blockchain-3',
        'An investor at night looks at a token sale page with a filling progress ring.',
      ),
      img(
        'blockchain-4',
        'Two students look at a laptop showing a glowing skills credential linked to job cards.',
      ),
      img(
        'blockchain-5',
        'A trader faces two price charts joined by an arc of light.',
      ),
      img(
        'blockchain-6',
        'A metallic token coin stands on dark glass in front of a laptop and phone.',
      ),
      img(
        'blockchain-7',
        'A man taps a glowing button in a chat app as light particles rise from his phone.',
      ),
      img(
        'blockchain-8',
        'A team gathers around a touchscreen table showing a glowing referral network.',
      ),
    ],
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    short: 'Mobile',
    intro:
      'Consumer apps on Google Play for spiritual wellbeing, travel and live expert consultations.',
    description:
      'Android-first consumer apps that bring voice, AI chat, live video and payments into one experience, built to feel personal and to scale to large, multilingual audiences.',
    builds: [
      'Spiritual & wellness apps',
      'Travel & services super-apps',
      'Live consultation marketplaces',
      'AI & voice chat',
      'Video and call consultations',
      'In-app payments',
    ],
    platforms: 'Android · Google Play',
    products: 4,
    images: [
      img(
        'mobile-1',
        'A woman meditates at home with earbuds in, a glowing phone in her hands and a lit diya beside her.',
      ),
      img(
        'mobile-2',
        'A couple plans a trip on a phone in an airport terminal with a temple skyline beyond the glass.',
      ),
      img(
        'mobile-3',
        'A man on a video call with an astrologer, a tablet beside him showing a glowing zodiac chart.',
      ),
      img(
        'mobile-4',
        'A woman on a phone consultation, her laptop showing a celestial wheel of planets and orbits.',
      ),
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Medical Technology',
    short: 'Healthcare',
    intro:
      'Telemedicine, insurance claims and fertility care, designed to build trust at sensitive moments.',
    description:
      'Secure, calm products for patients, clinicians and insurers: online consultations, digital prescriptions, claim workflows with admin review, and clinic websites that make booking simple.',
    builds: [
      'Telemedicine platforms',
      'Medical claim management',
      'Clinic & IVF websites',
      'Appointment booking',
      'Digital prescriptions',
      'Admin & verification panels',
    ],
    platforms: 'Web platforms & admin panels',
    products: 3,
    images: [
      img(
        'healthcare-1',
        'A doctor in a clinic office speaks with a patient on a video consultation on her laptop.',
      ),
      img(
        'healthcare-2',
        'A man photographs a hospital bill with his phone while a laptop shows claim progress.',
      ),
      img(
        'healthcare-3',
        'A couple holding hands across a desk from a fertility specialist who shows them a tablet.',
      ),
    ],
  },
  {
    id: 'social-commerce',
    title: 'Social, Community & E-Commerce',
    short: 'Social & commerce',
    intro:
      'Platforms where people share, connect and buy, built for real-time engagement and smooth checkout.',
    description:
      'Social networks with live feeds, media sharing and messaging, and online stores with catalogues, secure checkout and order tracking, all tuned for speed.',
    builds: [
      'Social networks',
      'Real-time feeds & messaging',
      'Photo & video sharing',
      'E-commerce storefronts',
      'Secure checkout',
      'Order tracking & accounts',
    ],
    platforms: 'Web platforms',
    products: 2,
    images: [
      img(
        'social-commerce-1',
        'Three friends on a rooftop at dusk laugh at a photo feed on a phone.',
      ),
      img(
        'social-commerce-2',
        'A woman beside an opened delivery box checks order tracking on her phone.',
      ),
    ],
  },
  {
    id: 'fintech',
    title: 'FinTech, Payments & Financial Platforms',
    short: 'FinTech',
    intro:
      'Payment products, crypto banking and advisory platforms that make money movement feel safe.',
    description:
      'Digital payment products, crypto banking with cross-chain wallets and merchant gateways, and advisory websites that explain financial services clearly and guide customers to the right next step.',
    builds: [
      'Payment platforms',
      'Crypto banking & wallets',
      'Merchant payment gateways',
      'Cross-chain transfers',
      'Loan & advisory journeys',
      'KYC & transaction processing',
    ],
    platforms: 'Web platforms & payment gateways',
    products: 3,
    images: [
      img(
        'fintech-1',
        'A shopkeeper smiles as a customer taps a phone on a payment terminal.',
      ),
      img(
        'fintech-2',
        'Hands hold a phone with a crypto wallet beside a hardware key and a payment terminal.',
      ),
      img(
        'fintech-3',
        'A loan advisor walks a client through a financial plan on a tablet.',
      ),
    ],
  },
  {
    id: 'insurtech',
    title: 'Insurance & InsurTech',
    short: 'InsurTech',
    intro: 'Making insurance discovery and comparison simple to follow.',
    description:
      'Insurance platforms that turn complex policies into clear comparisons and guided customer journeys, from first search through to purchase.',
    builds: [
      'Policy discovery',
      'Plan comparison',
      'Guided customer journeys',
      'Lead capture',
    ],
    platforms: 'Web platform',
    products: 1,
    images: [
      img(
        'insurtech-1',
        'A family on a sofa compares insurance plans on a tablet.',
      ),
    ],
  },
  {
    id: 'mobility',
    title: 'Mobility & White-Label Platforms',
    short: 'Mobility',
    intro: 'Rental marketplaces businesses can launch under their own brand.',
    description:
      'White-label car and bike rental platforms that let operators launch a branded marketplace with fleet listings, booking and payments.',
    builds: [
      'White-label platforms',
      'Car & bike rental',
      'Booking engines',
      'Fleet listings',
    ],
    platforms: 'White-label web platform',
    products: 1,
    images: [
      img(
        'mobility-1',
        'A traveller unlocks a rental car with her phone beside a row of scooters.',
      ),
    ],
  },
  {
    id: 'corporate-marketing',
    title: 'Corporate, Marketing & Advertising',
    short: 'Corporate',
    intro: 'Clean marketing sites that let services and case studies lead.',
    description:
      'Fast, professional websites for marketing, advertising and technology companies, structured around services, case studies and client offerings.',
    builds: [
      'Corporate websites',
      'Static marketing sites',
      'Service & case-study pages',
      'Brand presentation',
    ],
    platforms: 'Static website',
    products: 1,
    images: [
      img(
        'corporate-1',
        'People walk past a huge curved LED wall of flowing blue light in a mall atrium.',
      ),
    ],
  },
];

export const portfolioCount = portfolio.reduce(
  (sum, category) => sum + category.products,
  0,
);

/** The featured (blockchain) category. */
export const featuredCategory = portfolio.find((category) => category.featured);

export function findPortfolioCategory(id: string) {
  return portfolio.find((category) => category.id === id);
}

/** Sectors for the home page grid, in display order. Blockchain leads. */
export const portfolioHighlights = [
  'blockchain-web3',
  'fintech',
  'healthcare',
  'mobile-applications',
  'social-commerce',
].map((id) => {
  const category = findPortfolioCategory(id);
  if (!category) throw new Error(`Unknown portfolio category: ${id}`);
  return category;
});
