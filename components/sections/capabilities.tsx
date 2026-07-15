'use client';

import type { CSSProperties } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { servicePractices } from '@/data/services';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';
import { cn } from '@/lib/utils';

export function Capabilities() {
  return (
    <section
      data-chapter="Capabilities"
      className="section-shell relative overflow-hidden bg-surface/55"
    >
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Integrated capabilities"
            title={
              <>
                One team from{' '}
                <span className="text-gradient">signal to scale.</span>
              </>
            }
            description="We bring product strategy, experience and engineering into the same decision loop—so ambitious products move with less translation and more intent."
          />
        </Reveal>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:mt-24 lg:grid-cols-12">
          {servicePractices.map((practice, index) => {
            const Icon = practice.icon;
            const spans = [
              'lg:col-span-7',
              'lg:col-span-5',
              'lg:col-span-5',
              'lg:col-span-7',
            ];
            return (
              <Reveal
                key={practice.slug}
                delay={index * 0.055}
                className={cn('h-full', spans[index])}
              >
                <Link
                  href={`/services#${practice.slug}`}
                  data-cursor="Explore"
                  onPointerMove={(event) => {
                    if (!window.matchMedia('(pointer: fine)').matches) return;
                    const rect = event.currentTarget.getBoundingClientRect();
                    event.currentTarget.style.setProperty(
                      '--spot-x',
                      `${event.clientX - rect.left}px`,
                    );
                    event.currentTarget.style.setProperty(
                      '--spot-y',
                      `${event.clientY - rect.top}px`,
                    );
                  }}
                  style={
                    { '--spot-x': '50%', '--spot-y': '50%' } as CSSProperties
                  }
                  className="spotlight-card surface-depth kinetic-rule group relative flex h-full min-h-[400px] flex-col overflow-hidden rounded-[1.9rem] border border-border bg-card p-7 transition duration-700 hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-[0_35px_90px_-55px_rgba(24,31,56,.55)] md:min-h-[440px] md:p-10"
                >
                  <div className="relative z-10 flex items-start justify-between">
                    <span className="icon-orbit inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-foreground transition duration-500 group-hover:rotate-6 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.08em] text-foreground/[0.055] transition-colors duration-500 group-hover:text-accentText/[0.18]"
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <div className="relative z-10 mt-auto pt-20">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                      {practice.eyebrow}
                    </p>
                    <h3 className="mt-4 max-w-xl text-[clamp(1.75rem,3.2vw,3rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-foreground">
                      {practice.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-muted md:text-base">
                      {practice.description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
                      {practice.capabilities.slice(0, 4).map((capability) => (
                        <span
                          key={capability}
                          className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="absolute bottom-7 right-7 z-10 inline-flex h-12 w-12 translate-y-3 items-center justify-center rounded-full border border-border bg-card text-foreground opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:rotate-12 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                  <span className="absolute -bottom-28 -right-20 h-64 w-64 rounded-full bg-accent/0 blur-3xl transition duration-700 group-hover:bg-accent/10" />
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 240 240"
                    className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 text-border/45 transition duration-700 group-hover:rotate-12 group-hover:text-accent/25"
                  >
                    <circle
                      cx="120"
                      cy="120"
                      r="76"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="3 8"
                    />
                    <circle
                      cx="120"
                      cy="120"
                      r="38"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <path
                      d="M120 6v228M6 120h228"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity=".5"
                    />
                  </svg>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
