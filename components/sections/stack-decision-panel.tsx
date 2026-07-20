'use client';

import {
  Check,
  Route,
  ShieldCheck,
  SlidersHorizontal,
  UsersRound,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const decisionSignals = [
  {
    label: 'Reliability',
    value: 96,
    icon: ShieldCheck,
  },
  {
    label: 'Team context',
    value: 92,
    icon: UsersRound,
  },
  {
    label: 'Scale readiness',
    value: 89,
    icon: Route,
  },
];

const selectedStack = ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'];

export function StackDecisionPanel() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="surface-depth group relative min-h-[340px] overflow-hidden rounded-[2rem] border border-border/80 bg-card/85 p-6 shadow-[0_35px_90px_-55px_rgba(24,31,56,.5)] backdrop-blur-xl dark:shadow-[0_35px_90px_-55px_rgba(0,0,0,.9)] xl:p-7"
    >
      {/* Background system */}
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-accent/[0.08] blur-[75px] transition duration-700 group-hover:bg-accent/[0.14]" />

      <span className="pointer-events-none absolute -right-2 top-24 select-none text-[6rem] font-semibold leading-none tracking-[-0.09em] text-foreground/[0.025]">
        FIT
      </span>

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between border-b border-border/70 pb-4">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground">
            <SlidersHorizontal className="h-4 w-4" />
          </span>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
              Architecture decision engine
            </p>

            <p className="mt-1 text-sm font-semibold tracking-[-0.025em] text-foreground">
              Stack selected by context
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>

          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
            Evaluating
          </span>
        </div>
      </div>

      {/* Decision score and signals */}
      <div className="relative z-10 mt-6 grid grid-cols-[1fr_auto] gap-6">
        <div className="space-y-5">
          {decisionSignals.map((signal, index) => {
            const Icon = signal.icon;

            return (
              <div key={signal.label}>
                <div className="mb-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-muted" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">
                      {signal.label}
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold tabular-nums text-foreground">
                    {signal.value}%
                  </span>
                </div>

                <div className="relative h-1.5 overflow-hidden rounded-full bg-border/65">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent/55 to-accent"
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            width: 0,
                          }
                    }
                    whileInView={{
                      width: `${signal.value}%`,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.8,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Composite score */}
        <div className="flex flex-col items-center justify-center">
          <div
            className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full p-[1px]"
            style={{
              background:
                'conic-gradient(rgb(0 224 92) 0deg 331deg, rgba(101,118,148,.16) 331deg 360deg)',
            }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-card">
              <span className="text-2xl font-semibold tracking-[-0.06em] text-foreground">
                92
              </span>

              <span className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.16em] text-muted">
                Fit score
              </span>
            </div>
          </div>

          <span className="mt-3 inline-flex items-center gap-1.5 text-[8px] font-semibold uppercase tracking-[0.13em] text-muted">
            <Check className="h-3 w-3 text-accentText" />
            Recommended
          </span>
        </div>
      </div>

      {/* Selected architecture */}
      <div className="relative z-10 mt-7 rounded-2xl border border-border/70 bg-surface/70 p-4">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-muted">
            Selected architecture
          </span>

          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-accentText">
            High confidence
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {selectedStack.map((technology, index) => (
            <motion.span
              key={technology}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 8,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: 0.35 + index * 0.07,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-[9px] font-semibold text-foreground transition duration-300 hover:border-accent"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {technology}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-5 flex items-center justify-between border-t border-border/70 pt-4">
        <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-muted">
          Maintainability · Context · Outcomes
        </span>

        <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-foreground">
          Decision 04
        </span>
      </div>
    </div>
  );
}