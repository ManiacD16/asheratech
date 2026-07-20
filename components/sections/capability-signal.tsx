'use client';

import { Code2, Compass, PenTool, Rocket } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const stages = [
  {
    label: 'Strategy',
    number: '01',
    icon: Compass,
  },
  {
    label: 'Design',
    number: '02',
    icon: PenTool,
  },
  {
    label: 'Build',
    number: '03',
    icon: Code2,
  },
  {
    label: 'Scale',
    number: '04',
    icon: Rocket,
  },
];

export function CapabilitySignal() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="surface-depth group relative h-[300px] overflow-hidden rounded-[2rem] border border-border/80 bg-card/85 p-6 shadow-[0_35px_90px_-55px_rgba(24,31,56,.45)] backdrop-blur-xl dark:shadow-[0_35px_90px_-55px_rgba(0,0,0,.85)]"
    >
      {/* Background grid */}
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

      {/* Accent glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-3xl transition duration-700 group-hover:bg-accent/[0.13]" />

      {/* Large decorative numbering */}
      <span className="pointer-events-none absolute -right-3 top-10 select-none text-[6.5rem] font-semibold leading-none tracking-[-0.09em] text-foreground/[0.025]">
        01-04
      </span>

      {/* Top status row */}
      <div className="relative z-10 flex items-center justify-between border-b border-border/70 pb-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
            Integrated delivery loop
          </p>

          <p className="mt-1 text-sm font-semibold tracking-[-0.02em] text-foreground">
            One connected system
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-border/70 bg-surface/80 px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>

          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
            System live
          </span>
        </div>
      </div>

      {/* Signal journey */}
      <div className="absolute inset-x-7 top-[48%] z-10">
        <div className="relative h-px bg-border">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/15 via-accent to-accent/15" />

          {!shouldReduceMotion && (
            <motion.span
              className="absolute -top-[5px] h-[11px] w-[11px] rounded-full border-2 border-card bg-accent shadow-[0_0_0_5px_rgba(0,224,92,.12),0_0_24px_rgba(0,224,92,.6)]"
              animate={{
                left: ['0%', 'calc(100% - 11px)'],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                repeatDelay: 0.7,
                ease: 'easeInOut',
              }}
            />
          )}

          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-start justify-between">
            {stages.map((stage) => {
              const Icon = stage.icon;

              return (
                <div
                  key={stage.label}
                  className="group/node flex w-16 -translate-y-[22px] flex-col items-center"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-[0_12px_35px_-18px_rgba(24,31,56,.45)] transition duration-500 group-hover/node:-translate-y-1 group-hover/node:border-accent group-hover/node:bg-accent group-hover/node:text-accent-foreground">
                    <Icon className="h-4 w-4" />
                  </span>

                  <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-foreground">
                    {stage.label}
                  </span>

                  <span className="mt-1 text-[8px] font-medium tracking-[0.12em] text-muted">
                    {stage.number}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom summary */}
      <div className="absolute inset-x-6 bottom-5 z-10 flex items-center justify-between border-t border-border/70 pt-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
            Strategy + Experience + Engineering
          </span>
        </div>

        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-foreground">
          One team
        </span>
      </div>
    </div>
  );
}