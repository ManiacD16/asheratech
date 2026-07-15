'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/layout/logo';
import { ThemeToggle } from '@/components/layout/theme-toggle';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 18);
      setHidden(current > 180 && current > lastScroll.current + 4);
      if (current < lastScroll.current - 4) setHidden(false);
      lastScroll.current = current;
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const main = document.querySelector<HTMLElement>('#main-content');
    const footer = document.querySelector<HTMLElement>('footer');

    document.body.style.overflow = 'hidden';
    main?.setAttribute('inert', '');
    footer?.setAttribute('inert', '');
    setHidden(false);

    window.requestAnimationFrame(() => {
      mobilePanelRef.current?.querySelector<HTMLElement>('a[href]')?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== 'Tab' || !mobilePanelRef.current) return;
      const focusable = Array.from(
        mobilePanelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter(
        (element) =>
          !element.hasAttribute('disabled') && element.offsetParent !== null,
      );

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
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute('inert');
      footer?.removeAttribute('inert');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <motion.header
      animate={{ y: hidden && !open ? '-105%' : '0%' }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-transparent transition-[background-color,border-color,box-shadow] duration-500',
        scrolled &&
          'border-border/70 bg-background/75 shadow-float backdrop-blur-2xl',
        open && 'bg-background',
      )}
    >
      <Container className="flex h-[78px] items-center justify-between">
        <Logo />

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-9 lg:flex"
        >
          {siteConfig.navigation.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                data-cursor="View"
                className={cn(
                  'group relative inline-grid h-11 min-w-11 overflow-hidden px-2 text-sm font-medium text-muted transition-colors hover:text-foreground',
                  active && 'text-foreground',
                )}
              >
                <span className="col-start-1 row-start-1 flex items-center transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-full">
                  {item.label}
                </span>
                <span
                  aria-hidden="true"
                  className="col-start-1 row-start-1 flex translate-y-full items-center text-foreground transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0"
                >
                  {item.label}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-x-0 bottom-0 mx-auto h-0.5 w-0 rounded-full bg-accent transition-all duration-500',
                    active && 'w-5',
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="mr-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available
          </div>
          <ThemeToggle />
          <Link
            href="/contact"
            data-cursor="Start"
            className="premium-button premium-button--accent button-glint group relative inline-flex min-h-11 items-center overflow-hidden rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a project{' '}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition hover:border-foreground/30"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-navigation-panel"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.62, ease: [0.76, 0, 0.24, 1] }}
            ref={mobilePanelRef}
            id="mobile-navigation-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-x-0 bottom-0 top-[78px] overflow-y-auto bg-background lg:hidden"
            data-lenis-prevent
          >
            <div className="grid-lines absolute inset-0 opacity-25" />
            <Container className="relative flex min-h-full flex-col py-10">
              <nav aria-label="Primary navigation" className="flex flex-col">
                {siteConfig.navigation.map((item, index) => {
                  const active =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.18 + index * 0.06, duration: 0.5 }}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        className={cn(
                          'group flex min-h-16 items-center justify-between border-b border-border py-5 text-3xl font-semibold tracking-[-0.05em]',
                          active && 'text-accentText',
                        )}
                      >
                        <span className="transition group-hover:text-accentText">
                          {item.label}
                        </span>
                        <span className="text-xs font-semibold tracking-[0.14em] text-muted">
                          0{index + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <div className="mt-auto pt-10">
                <Link
                  href="/contact"
                  className="premium-button premium-button--accent button-glint group inline-flex min-h-14 w-full items-center justify-center rounded-full bg-accent px-6 font-semibold text-accent-foreground"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start a project{' '}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
                <div className="mt-8 flex items-center justify-between text-xs text-muted">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex min-h-11 items-center"
                  >
                    {siteConfig.email}
                  </a>
                  <span>India · Global</span>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
