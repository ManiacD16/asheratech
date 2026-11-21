/**
 * Live products from the Asheraatech project portfolio, grouped by the
 * headlines used in the portfolio document. Images live in
 * public/images/portfolio/ and share the studio art direction.
 */

export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  slug: string;
  name: string;
  /** Short descriptor shown under the name. */
  kind: string;
  summary: string;
  tags: string[];
  links: PortfolioLink[];
  image: string;
  alt: string;
};

export type PortfolioCategory = {
  id: string;
  title: string;
  /** Shorter label for rails and chips. */
  short: string;
  intro: string;
  projects: PortfolioProject[];
};

const img = (slug: string) => `/images/portfolio/${slug}.webp`;

export const portfolio: PortfolioCategory[] = [
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    short: 'Mobile',
    intro:
      'Consumer apps on Google Play for spiritual wellbeing, travel and live astrology consultations.',
    projects: [
      {
        slug: 'shankha',
        name: 'Shankha',
        kind: 'Hindu spiritual health app',
        summary:
          'A personal space to connect with Hindu Gods through AI and voice-enabled chats, listen to soulful bhajans and find peace of mind. Spiritual healing and divine conversations in one app.',
        tags: ['Android', 'AI chat', 'Voice', 'Audio'],
        links: [
          {
            label: 'Google Play',
            href: 'https://play.google.com/store/apps/details?id=com.shankha',
          },
        ],
        image: img('shankha'),
        alt: 'A woman meditates at home with earbuds in, a glowing phone in her hands and a lit diya beside her.',
      },
      {
        slug: 'bharat-darshan',
        name: 'Bharat Darshan',
        kind: 'Travel and services super-app',
        summary:
          'India’s trusted all-in-one travel and service app for flights, hotels, tours, recharges, FASTag, pooja services and live darshan, built for a safe, smooth and transparent experience.',
        tags: ['Android', 'Travel booking', 'Payments', 'Live streaming'],
        links: [
          {
            label: 'Google Play',
            href: 'https://play.google.com/store/apps/details?id=com.ksbm.bharatdarshanApplication',
          },
        ],
        image: img('bharat-darshan'),
        alt: 'A couple plans a trip on a phone in an airport terminal with a temple skyline beyond the glass.',
      },
      {
        slug: 'astrowala',
        name: 'Astrowala',
        kind: 'Personal astrology guide',
        summary:
          'Personalised horoscope predictions, kundli readings and live consultations with verified astrologers and tarot readers over chat, call or video, for clarity on love, career, health and money.',
        tags: ['Android', 'Video calls', 'Live chat', 'Payments'],
        links: [
          {
            label: 'Google Play',
            href: 'https://play.google.com/store/apps/details?id=com.nh.astrowala',
          },
        ],
        image: img('astrowala'),
        alt: 'A man on a video call with an astrologer, a tablet beside him showing a glowing zodiac chart.',
      },
      {
        slug: 'astrovedvaani',
        name: 'AstroVedvaani',
        kind: 'Astrology consultation platform',
        summary:
          'Connects people with experienced astrologers for personalised guidance on career, love, marriage, business and finance through chat, call and one-to-one consultations with verified experts.',
        tags: ['Android', 'Chat & call', 'Expert marketplace'],
        links: [
          {
            label: 'Google Play',
            href: 'https://play.google.com/store/apps/details?id=com.nexthikes.astrovedvaani',
          },
        ],
        image: img('astrovedvaani'),
        alt: 'A woman on a phone consultation, her laptop showing a celestial wheel of planets and orbits.',
      },
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Medical Technology',
    short: 'Healthcare',
    intro:
      'Telemedicine, insurance claims and fertility care, designed to build trust at sensitive moments.',
    projects: [
      {
        slug: 'uhurumed',
        name: 'UhuruMed',
        kind: 'Online doctor consultation platform',
        summary:
          'A telemedicine website for consulting doctors online through secure calling and messaging, with appointment booking, digital prescriptions, patient history and real-time consultation support.',
        tags: ['Telemedicine', 'Video calls', 'E-prescriptions', 'Booking'],
        links: [{ label: 'Visit site', href: 'https://uhurumed.com/' }],
        image: img('uhurumed'),
        alt: 'A doctor in a clinic office speaks with a patient on a video consultation on her laptop.',
      },
      {
        slug: 'uhurucare',
        name: 'UhuruCare',
        kind: 'Medical claim service platform',
        summary:
          'A medical insurance claim system where users file claims online, upload documents, talk to support and track status, with an admin panel for review, verification and automated updates.',
        tags: ['Claims workflow', 'Document upload', 'Admin panel'],
        links: [{ label: 'Visit site', href: 'https://www.uhurucare.com/' }],
        image: img('uhurucare'),
        alt: 'A man photographs a hospital bill with his phone while a laptop shows claim progress.',
      },
      {
        slug: 'embryva',
        name: 'Embryva',
        kind: 'IVF clinic website',
        summary:
          'A healthcare website for an IVF centre with treatment details, doctor profiles, a booking system and patient support information, designed to build trust and patient engagement.',
        tags: ['Healthcare web', 'Appointment booking', 'Content design'],
        links: [{ label: 'Visit site', href: 'https://embryva.com/' }],
        image: img('embryva'),
        alt: 'A couple holding hands across a desk from a fertility specialist who shows them a tablet.',
      },
    ],
  },
  {
    id: 'social-commerce',
    title: 'Social, Community & E-Commerce',
    short: 'Social & commerce',
    intro:
      'Platforms where people share, connect and buy, built for real-time engagement and smooth checkout.',
    projects: [
      {
        slug: 'calisdiary',
        name: 'CalisDiary',
        kind: 'Social media & community platform',
        summary:
          'A social network for sharing posts, photos and videos, with real-time feeds, profiles, messaging and community engagement features in the style of modern social apps.',
        tags: ['Real-time feed', 'Messaging', 'Media sharing'],
        links: [{ label: 'Visit site', href: 'https://calisdiary.com/' }],
        image: img('calisdiary'),
        alt: 'Three friends on a rooftop at dusk laugh at a photo feed on a phone.',
      },
      {
        slug: 'gwydion-shop',
        name: 'Gwydion Shop',
        kind: 'E-commerce website',
        summary:
          'A full e-commerce platform with a product catalogue, cart, secure checkout, order tracking and account management, optimised for performance and a smooth shopping experience.',
        tags: ['Catalogue', 'Checkout', 'Order tracking'],
        links: [{ label: 'Visit site', href: 'https://gwydion.shop/' }],
        image: img('gwydion'),
        alt: 'A woman beside an opened delivery box checks order tracking on her phone.',
      },
    ],
  },
  {
    id: 'fintech',
    title: 'FinTech, Payments & Financial Platforms',
    short: 'FinTech',
    intro:
      'Payment products, crypto banking and advisory platforms that make money movement feel safe.',
    projects: [
      {
        slug: 'sambhav-pay',
        name: 'Sambhav Pay',
        kind: 'FinTech platform',
        summary:
          'A professional digital platform for a fintech company, presenting financial and payment-oriented products and services through a modern web experience.',
        tags: ['FinTech web', 'Payments', 'Product marketing'],
        links: [{ label: 'Visit site', href: 'https://www.sambhavpay.com/' }],
        image: img('sambhav-pay'),
        alt: 'A shopkeeper smiles as a customer taps a phone on a payment terminal.',
      },
      {
        slug: '3pay',
        name: '3PAY',
        kind: 'Crypto bank & payment gateway',
        summary:
          'A complete crypto-banking platform with secure digital wallets, cross-chain transfers and a merchant crypto payment gateway, including KYC, automated transaction processing and strong security.',
        tags: ['Wallets', 'Cross-chain', 'Merchant gateway', 'KYC'],
        links: [{ label: 'Visit site', href: 'https://3pa-y.com/' }],
        image: img('3pay'),
        alt: 'Hands hold a phone with a crypto wallet beside a hardware key and a payment terminal.',
      },
      {
        slug: 'future-fund-finances',
        name: 'Future Fund Finances',
        kind: 'Payment & loan advisory',
        summary:
          'A professional website for a payment-solutions and loan-advisory business, focused on explaining financial services and customer pathways clearly.',
        tags: ['Financial services', 'Lead journeys', 'Web'],
        links: [
          { label: 'Visit site', href: 'https://futurefundfinances.com/' },
        ],
        image: img('future-fund'),
        alt: 'A loan advisor walks a client through a financial plan on a tablet.',
      },
    ],
  },
  {
    id: 'insurtech',
    title: 'Insurance & InsurTech',
    short: 'InsurTech',
    intro: 'Making insurance discovery and comparison simple to follow.',
    projects: [
      {
        slug: 'bimaguide',
        name: 'BimaGuide',
        kind: 'Insurance platform',
        summary:
          'An insurance platform that simplifies discovery, comparison and customer journeys through a modern digital experience.',
        tags: ['Comparison', 'Customer journeys', 'Web'],
        links: [{ label: 'Visit site', href: 'https://bimaguide.com' }],
        image: img('bimaguide'),
        alt: 'A family on a sofa compares insurance plans on a tablet.',
      },
    ],
  },
  {
    id: 'mobility',
    title: 'Mobility & White-Label Platforms',
    short: 'Mobility',
    intro: 'Rental marketplaces businesses can launch under their own brand.',
    projects: [
      {
        slug: 'sailani',
        name: 'Sailani',
        kind: 'Car & bike rental platform',
        summary:
          'A white-label car and bike rental platform that lets businesses launch and run their own branded rental marketplace and booking experience.',
        tags: ['White-label', 'Booking engine', 'Marketplace'],
        links: [
          { label: 'Visit site', href: 'https://sailani-web.vercel.app/' },
        ],
        image: img('sailani'),
        alt: 'A traveller unlocks a rental car with her phone beside a row of scooters.',
      },
    ],
  },
  {
    id: 'blockchain-web3',
    title: 'Blockchain, Web3 & Crypto',
    short: 'Blockchain',
    intro:
      'Exchanges, token sales, vesting, mining and on-chain rewards, shipped with security in mind.',
    projects: [
      {
        slug: 'iingo-network',
        name: 'IINGO Network',
        kind: 'Crypto-based MLM project',
        summary:
          'A blockchain-driven MLM system with smart-contract payouts, referral management, real-time commission tracking, secure wallet integration and transparent reward distribution.',
        tags: ['Smart contracts', 'Referrals', 'Wallets'],
        links: [
          { label: 'Visit site', href: 'https://pipcrypto.vercel.app/' },
          { label: 'IINGO Network', href: 'https://iingo.network/' },
        ],
        image: img('iingo'),
        alt: 'A team gathers around a touchscreen table showing a glowing referral network.',
      },
      {
        slug: 'tarality',
        name: 'Tarality Exchange',
        kind: 'Centralised crypto exchange',
        summary:
          'A full-featured centralised exchange with trading, deposits and withdrawals, a user wallet system, verification and a secure transaction architecture.',
        tags: ['Exchange', 'Order book', 'Wallets', 'KYC'],
        links: [{ label: 'Visit site', href: 'https://tarality.com/' }],
        image: img('tarality'),
        alt: 'A trader at a multi-monitor desk studies candlestick charts at night.',
      },
      {
        slug: 'tan-ico',
        name: 'TAN ICO Platform',
        kind: 'Token sale website',
        summary:
          'An ICO launchpad with token purchase, wallet integration, a real-time token supply display, KYC and automated token distribution.',
        tags: ['ICO', 'Wallet connect', 'KYC', 'Distribution'],
        links: [{ label: 'Visit site', href: 'https://buy.tan.live/' }],
        image: img('tan-ico'),
        alt: 'An investor at night looks at a token sale page with a filling progress ring.',
      },
      {
        slug: 'fieres-ico',
        name: 'FIERES ICO',
        kind: 'Token sale & vesting platform',
        summary:
          'A token sale and vesting platform built with React.js, Node.js and Solidity. The explorer gives full transparency of on-chain activity while vesting runs on automated schedules.',
        tags: ['React.js', 'Node.js', 'Solidity', 'Explorer'],
        links: [
          { label: 'Vesting platform', href: 'https://vesting.fieres.io/' },
          { label: 'Explorer', href: 'https://fieroscan.com/' },
        ],
        image: img('fieres'),
        alt: 'An engineer studies a chain of glowing blocks above a stepped unlock timeline.',
      },
      {
        slug: 'gyan-batua',
        name: 'Gyan Batua',
        kind: 'Blockchain & AI skill-tech platform',
        summary:
          'A skills-tech platform powered by blockchain, Web3 and AI that bridges academic learning and real-world skills, opening jobs, internships, apprenticeships and consultancy roles.',
        tags: ['Web3', 'AI', 'Credentials', 'Jobs'],
        links: [{ label: 'Visit site', href: 'https://gyanbatua.com/' }],
        image: img('gyan-batua'),
        alt: 'Two students look at a laptop showing a glowing skills credential linked to job cards.',
      },
      {
        slug: 'hyperarbi',
        name: 'HyperArbi',
        kind: 'Crypto arbitrage & referral platform',
        summary:
          'A crypto arbitrage trading platform built around cross-exchange opportunities, with referral and multi-level marketing functionality.',
        tags: ['Arbitrage', 'Multi-exchange', 'Referrals'],
        links: [{ label: 'Visit site', href: 'https://hyperarbi.com/' }],
        image: img('hyperarbi'),
        alt: 'A trader faces two price charts joined by an arc of light.',
      },
      {
        slug: 'hypa-token',
        name: 'HYPA Token',
        kind: 'BNB Chain token ecosystem',
        summary:
          'A fixed-supply BEP-20 utility-token ecosystem on BNB Chain, supported by a Telegram-based mining experience.',
        tags: ['BEP-20', 'BNB Chain', 'Tokenomics'],
        links: [{ label: 'Visit site', href: 'https://hypatoken.com/' }],
        image: img('hypa-token'),
        alt: 'A metallic token coin stands on dark glass in front of a laptop and phone.',
      },
      {
        slug: 'hypa-mining-bot',
        name: 'HYPA Mining Bot',
        kind: 'Telegram asset-mining system',
        summary:
          'A Telegram-based asset-mining system with a Proof-of-Authority-oriented architecture and the HYPA token, including backend API integration and smart-contract components.',
        tags: ['Telegram bot', 'Proof of Authority', 'Backend API'],
        links: [
          {
            label: 'Open in Telegram',
            href: 'https://t.me/HypaMiningBot?start=1e6ec99b-9317-4057-85a7-318f3ecd0505',
          },
        ],
        image: img('hypa-mining-bot'),
        alt: 'A man taps a glowing button in a chat app as light particles rise from his phone.',
      },
    ],
  },
  {
    id: 'corporate-marketing',
    title: 'Corporate, Marketing & Advertising',
    short: 'Corporate',
    intro: 'Clean marketing sites that let services and case studies lead.',
    projects: [
      {
        slug: 'immersive-display-tech',
        name: 'Immersive Display Tech',
        kind: 'Marketing & advertising website',
        summary:
          'A professional static website for a marketing and advertising company offering LED display solutions, with a clean UI that highlights services, case studies and client offerings.',
        tags: ['Static site', 'Marketing', 'Case studies'],
        links: [
          {
            label: 'Visit site',
            href: 'https://www.immersivedisplaytech.com/',
          },
        ],
        image: img('immersive-display'),
        alt: 'People walk past a huge curved LED wall of flowing blue light in a mall atrium.',
      },
    ],
  },
];

export const portfolioProjects = portfolio.flatMap((category) =>
  category.projects.map((project) => ({ ...project, category })),
);

export const portfolioCount = portfolioProjects.length;

export function findPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

/** Lead pieces for the home page grid, in display order. */
export const portfolioHighlights = [
  '3pay',
  'tarality',
  'uhurumed',
  'shankha',
  'gyan-batua',
].map((slug) => {
  const project = findPortfolioProject(slug);
  if (!project) throw new Error(`Unknown portfolio project: ${slug}`);
  return project;
});
