import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { FooterArt } from '@/components/layout/footer-art';
import { SplitReveal } from '@/components/motion/split-reveal';
import styles from '@/components/layout/footer.module.css';

const places = [
  {
    label: 'Start a project',
    note: 'Bring the ambition, constraints and open questions.',
    href: '/contact',
  },
  {
    label: 'Selected work',
    note: 'Product stories across payments, digital assets and mobile.',
    href: '/work',
  },
  {
    label: 'Services',
    note: 'Strategy, design, engineering and blockchain.',
    href: '/services',
  },
];

const secondary = [
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Privacy', href: '/privacy' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterArt />

      <div className={styles.intro}>
        <h2 data-plain className={styles.title}>
          <SplitReveal text="Complex underneath." />
        </h2>
        <p className={styles.tagline}>Clear where it matters.</p>
      </div>

      <nav aria-label="Footer" className={styles.places}>
        {places.map((place) => (
          <Link
            key={place.href}
            href={place.href}
            className={styles.placeCard}
            data-cursor="Open"
          >
            <span className={styles.paint} aria-hidden="true" />
            <span className={styles.paint} aria-hidden="true" />
            <span className={styles.paint} aria-hidden="true" />
            <span className={styles.paint} aria-hidden="true" />
            <span className={styles.placeDiamond} aria-hidden="true" />
            <span className={styles.placeLabel}>{place.label}</span>
            <span className={styles.placeNote}>{place.note}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.contact}>
        <div>
          <p className={styles.contactLabel}>Write to the studio</p>
          <a href={`mailto:${siteConfig.email}`} className={styles.email}>
            {siteConfig.email}
          </a>
        </div>
        <ul className={styles.secondary}>
          {secondary.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.secondaryLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.artSpace} aria-hidden="true" />

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} {siteConfig.legalName}
        </p>
        <a href="#main-content" className={styles.secondaryLink}>
          Back to top
        </a>
      </div>
    </footer>
  );
}
