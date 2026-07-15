'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function ArticleToc({ headings }: { headings: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = headings
      .map((_, index) => document.getElementById(`section-${index}`))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!current) return;
        const index = sections.indexOf(current.target as HTMLElement);
        if (index >= 0) setActive(index);
      },
      { rootMargin: '-20% 0px -62% 0px', threshold: [0, 0.15, 0.35] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [headings]);

  return (
    <aside className="lg:sticky lg:top-28">
      <div className="text-micro flex items-center justify-between text-muted">
        <p>In this article</p>
        <span>
          {String(active + 1).padStart(2, '0')} /{' '}
          {String(headings.length).padStart(2, '0')}
        </span>
      </div>
      <nav
        aria-label="Article sections"
        className="relative mt-6 border-l border-border"
      >
        <motion.span
          aria-hidden="true"
          className="absolute -left-px top-0 h-11 w-[2px] origin-top bg-accent"
          animate={{ y: active * 44 }}
          transition={{ type: 'spring', stiffness: 280, damping: 30 }}
        />
        {headings.map((heading, index) => (
          <a
            key={heading}
            href={`#section-${index}`}
            aria-current={active === index ? 'location' : undefined}
            className={cn(
              'group flex min-h-11 items-center py-2 pl-5 text-sm leading-6 text-muted transition duration-300 hover:text-foreground',
              active === index && 'translate-x-1 text-foreground',
            )}
          >
            <span className="mr-3 text-[9px] font-semibold tracking-[0.12em] text-accentText">
              {String(index + 1).padStart(2, '0')}
            </span>
            {heading}
          </a>
        ))}
      </nav>
    </aside>
  );
}
