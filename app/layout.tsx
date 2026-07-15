import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Providers } from '@/app/providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { siteConfig } from '@/data/site';
import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Asheratech — Digital Product & Engineering Agency',
    template: '%s | Asheratech',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: 'technology',
  keywords: [
    'digital product agency',
    'product design',
    'software engineering',
    'fintech development',
    'blockchain development',
    'Next.js development',
    'mobile app development',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Asheratech — Compile complexity into progress.',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asheratech — Compile complexity into progress.',
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
  icons: {
    icon: '/icon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    sameAs: siteConfig.socials.map((social) => social.href),
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          id="preloader-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{if(!sessionStorage.getItem('ashera-preloader-seen')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('is-loading')}}catch(e){}`,
          }}
        />
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] inline-flex min-h-11 -translate-y-20 items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <Providers>
          <Header />
          <div id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </div>
          <Footer />
        </Providers>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
