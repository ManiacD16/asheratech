'use client';

import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Search,
  Sparkles,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const editorialSignals = [
  {
    label: 'Product trust',
    detail: 'Systems people can understand',
    strength: 94,
  },
  {
    label: 'Modernization',
    detail: 'Change without unnecessary disruption',
    strength: 88,
  },
  {
    label: 'Useful technology',
    detail: 'Tools shaped around decisions',
    strength: 91,
  },
];

const noteCards = [
  {
    category: 'Product trust',
    title: 'Clarity is part of the infrastructure.',
    number: '01',
  },
  {
    category: 'Modernization',
    title: 'Legacy is context—not a limitation.',
    number: '02',
  },
  {
    category: 'Product systems',
    title: 'Good technology reduces decision friction.',
    number: '03',
  },
];

export function InsightSignalBoard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="surface-depth group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-border/80 bg-card/80 p-6 shadow-[0_35px_90px_-55px_rgba(24,31,56,.55)] backdrop-blur-xl dark:shadow-[0_35px_90px_-55px_rgba(0,0,0,.95)] xl:p-7"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_86%)]" />

      <div className="pointer-events-none absolute -right-16 -top-14 h-48 w-48 rounded-full bg-accent/[0.08] blur-[70px] transition duration-700 group-hover:bg-accent/[0.14]" />

      <span className="pointer-events-none absolute -right-3 top-20 select-none text-[6rem] font-semibold leading-none tracking-[-0.09em] text-foreground/[0.025]">
        READ
      </span>

      {/* Header */}
      <div className="relative z-20 flex items-start justify-between border-b border-border/70 pb-4">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground">
            <BookOpen className="h-4 w-4" />
          </span>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
              Editorial signal
            </p>

            <p className="mt-1 text-sm font-semibold tracking-[-0.025em] text-foreground">
              Thinking shaped by delivery
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-border/70 bg-surface/75 px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>

          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
            New notes
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-6 grid grid-cols-[1.08fr_.92fr] gap-5">
        {/* Topic signals */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Search className="h-3.5 w-3.5 text-muted" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-muted">
                Active themes
              </span>
            </div>

            <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-foreground">
              03 tracked
            </span>
          </div>

          <div className="space-y-4">
            {editorialSignals.map((signal, index) => (
              <div key={signal.label}>
                <div className="mb-2 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-semibold text-foreground">
                      {signal.label}
                    </p>

                    <p className="mt-0.5 text-[7px] leading-4 text-muted">
                      {signal.detail}
                    </p>
                  </div>

                  <span className="text-[8px] font-semibold tabular-nums text-muted">
                    {signal.strength}
                  </span>
                </div>

                <div className="relative h-1 overflow-hidden rounded-full bg-border/65">
                  <motion.span
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent/45 to-accent"
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            width: 0,
                          }
                    }
                    whileInView={{
                      width: `${signal.strength}%`,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.8,
                    }}
                    transition={{
                      duration: 0.85,
                      delay: index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial note stack */}
        <div className="relative min-h-[176px]">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-3.5 w-3.5 text-muted" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-muted">
                Field notes
              </span>
            </div>

            <Sparkles className="h-3.5 w-3.5 text-accentText" />
          </div>

          <div className="relative h-[148px]">
            {noteCards.map((note, index) => (
              <motion.div
                key={note.number}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 14,
                        rotate: 0,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: index * 13,
                  rotate: index === 0 ? -1.5 : index === 1 ? 1.2 : 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.15 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-x-0 top-0 rounded-2xl border border-border bg-card p-4 shadow-[0_18px_45px_-28px_rgba(24,31,56,.55)] transition duration-500 group-hover:border-accent/35 dark:shadow-[0_18px_45px_-28px_rgba(0,0,0,.9)]"
                style={{
                  zIndex: noteCards.length - index,
                  transformOrigin: 'center top',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[7px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {note.category}
                  </span>

                  <span className="text-[8px] font-semibold text-accentText">
                    {note.number}
                  </span>
                </div>

                <p className="mt-3 max-w-[180px] text-[11px] font-semibold leading-[1.35] tracking-[-0.025em] text-foreground">
                  {note.title}
                </p>

                <span className="mt-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-foreground transition duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground">
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20 mt-6 flex items-center justify-between border-t border-border/70 pt-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-muted">
            Practice becomes perspective
          </span>
        </div>

        <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-foreground">
          From the field
        </span>
      </div>
    </div>
  );
}