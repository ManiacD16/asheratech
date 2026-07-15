import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/layout/logo';

const footerLinks = [
  {
    title: 'Navigate',
    links: [...siteConfig.navigation, { label: 'Contact', href: '/contact' }],
  },
  {
    title: 'Capabilities',
    links: [
      { label: 'Product strategy', href: '/services#product-strategy' },
      { label: 'Experience design', href: '/services#experience-design' },
      { label: 'Software engineering', href: '/services#software-engineering' },
      { label: 'Fintech & Web3', href: '/services#fintech-web3' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="noise" />
      <Container className="relative py-16 md:py-20">
        <div className="grid gap-14 border-b border-white/15 pb-14 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <Logo inverse />
            <p className="mt-6 max-w-md text-base leading-7 text-white/[0.62]">
              Strategy, experience and engineering for ambitious digital
              products. Complex underneath. Clear where it matters.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              data-cursor="Email"
              className="group mt-7 inline-flex min-h-11 items-center gap-2 text-lg font-semibold text-white transition hover:text-signal"
            >
              {siteConfig.email}
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                  {group.title}
                </p>
                <ul className="mt-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="link-line inline-flex min-h-11 w-fit min-w-11 items-center text-sm text-white/[0.72] transition hover:text-signal"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden border-b border-white/15 py-8 md:py-10">
          <div
            aria-hidden="true"
            className="select-none whitespace-nowrap text-center text-[clamp(3.2rem,13vw,12rem)] font-semibold leading-[0.78] tracking-[-0.085em]"
          >
            <span className="text-white">ASHERA</span>
            <span className="headline-outline ![-webkit-text-stroke-color:rgba(255,255,255,.78)]">
              TECH
            </span>
            <span className="text-signal">.</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {siteConfig.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 min-w-11 items-center transition hover:text-white"
              >
                {social.label}
              </a>
            ))}
            <Link
              href="/privacy"
              className="inline-flex min-h-11 min-w-11 items-center transition hover:text-white"
            >
              Privacy
            </Link>
            <a
              href="#main-content"
              className="inline-flex min-h-11 min-w-11 items-center transition hover:text-white"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </Container>
      <span className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
    </footer>
  );
}
