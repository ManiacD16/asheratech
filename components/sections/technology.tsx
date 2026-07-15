'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { technologies } from '@/data/site';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

export function Technology() {
  const root = useRef<HTMLElement>(null);
  const inView = useInView(root, { margin: '20% 0px 20% 0px' });
  const rows = Object.entries(technologies);
  return (
    <section
      ref={root}
      data-chapter="Technology"
      className="section-shell overflow-hidden bg-surface/55"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Technology with a purpose"
              title="The stack follows the product—not the other way around."
              description="We choose tools around reliability, team context and the product’s next stage. These are the systems we work with most often."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xs border-l border-accent pl-5 text-xs font-semibold uppercase leading-6 tracking-[0.14em] text-muted">
              Built for maintainability
              <br />
              Measured in outcomes
            </p>
          </Reveal>
        </div>
      </Container>
      <div className="mt-16 space-y-3 lg:mt-24">
        {rows.map(([category, items], rowIndex) => {
          const values = [...items, ...items, ...items];
          return (
            <div key={category} className="marquee-mask group overflow-hidden">
              <div
                className={`flex w-max items-center transition-[animation-play-state] group-hover:[animation-play-state:paused] motion-reduce:animate-none ${rowIndex % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'} ${inView ? '' : '[animation-play-state:paused]'}`}
              >
                {values.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="mx-1.5 inline-flex min-h-16 items-center gap-3 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground shadow-float transition duration-300 hover:-translate-y-1 hover:border-accent hover:bg-navy-900 hover:text-white dark:hover:bg-white dark:hover:text-navy-950"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {item}
                    <span className="ml-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-muted">
                      {category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
