'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';
import { useSurfaceTone } from '@/hooks/use-surface-tone';
import { Logo } from '@/components/layout/logo';
import styles from '@/components/layout/header.module.css';

const primaryLinks = [
  { label: 'Home', href: '/' },
  ...siteConfig.navigation,
  { label: 'Contact', href: '/contact' },
];

const sheets = ['cyan', 'azure', 'royal', 'paper'] as const;
const curtain = [0.76, 0, 0.24, 1] as const;

export function Header() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const tone = useSurfaceTone(headerRef);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const main = document.querySelector<HTMLElement>('#main-content');
    const footer = document.querySelector<HTMLElement>('footer');

    document.body.style.overflow = 'hidden';
    main?.setAttribute('inert', '');
    footer?.setAttribute('inert', '');

    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>('a[href]')?.focus();
    }, 420);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = [
        menuButtonRef.current,
        ...Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled])',
          ),
        ),
      ].filter((element): element is HTMLElement => Boolean(element));

      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute('inert');
      footer?.removeAttribute('inert');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const sheetDuration = reduceMotion ? 0 : 0.72;

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          styles.navbar,
          (tone === 'light' || open) && styles.onLight,
        )}
      >
        <Logo markOnly className={styles.logoLink} />
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={cn(styles.menuButton, open && styles.menuButtonOpen)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-menu"
          data-cursor={open ? 'Close' : 'Menu'}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            className={styles.navRoot}
            data-tone-skip
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className={styles.backdrop}
              onClick={() => setOpen(false)}
              variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.4 }}
            />
            <div
              ref={panelRef}
              id="site-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className={styles.navContent}
              data-lenis-prevent
            >
              {sheets.map((sheet, index) => (
                <motion.div
                  key={sheet}
                  className={cn(styles.navBg, styles[sheet])}
                  variants={{
                    closed: {
                      y: '-101%',
                      transition: {
                        duration: sheetDuration * 0.8,
                        ease: curtain,
                        delay: (sheets.length - 1 - index) * 0.05,
                      },
                    },
                    open: {
                      y: '0%',
                      transition: {
                        duration: sheetDuration,
                        ease: curtain,
                        delay: index * 0.07,
                      },
                    },
                  }}
                />
              ))}

              <motion.div
                className={styles.navItems}
                variants={{
                  closed: { opacity: 0, transition: { duration: 0.18 } },
                  open: {
                    opacity: 1,
                    transition: { duration: 0.3, delay: reduceMotion ? 0 : 0.36 },
                  },
                }}
              >
                <div className={styles.navCol}>
                  <div>
                    <p className={styles.navLabel}>Write to the studio</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className={styles.navEmail}
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <p className={styles.navCredit}>
                    Blockchain-first product and engineering agency.
                    <br />
                    India, working globally.
                  </p>
                </div>

                <nav aria-label="Primary" className={styles.navPrimary}>
                  <ul className={styles.navPrimaryLinks}>
                    {primaryLinks.map((item, index) => {
                      const active =
                        item.href === '/'
                          ? pathname === '/'
                          : pathname === item.href ||
                            pathname.startsWith(`${item.href}/`);
                      return (
                        <li key={item.href} className={styles.navClip}>
                          <motion.span
                            className="block"
                            variants={{
                              closed: { y: '105%' },
                              open: {
                                y: '0%',
                                transition: {
                                  duration: reduceMotion ? 0 : 0.8,
                                  ease: [0.16, 1, 0.3, 1],
                                  delay: reduceMotion ? 0 : 0.34 + index * 0.05,
                                },
                              },
                            }}
                          >
                            <Link
                              href={item.href}
                              aria-current={active ? 'page' : undefined}
                              onClick={() => setOpen(false)}
                              className={cn(
                                styles.navLink,
                                active && styles.navLinkActive,
                              )}
                            >
                              {item.label}
                            </Link>
                          </motion.span>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
