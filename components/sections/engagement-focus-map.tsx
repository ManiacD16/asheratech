'use client';

import {
  Blocks,
  Check,
  Crosshair,
  PenTool,
  RefreshCcw,
  Search,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const engagementModes = [
  {
    code: '01',
    label: 'Discovery',
    detail: 'Find the signal',
    icon: Search,
  },
  {
    code: '02',
    label: 'Experience',
    detail: 'Clarify the journey',
    icon: PenTool,
  },
  {
    code: '03',
    label: 'Architecture',
    detail: 'De-risk the system',
    icon: Blocks,
  },
  {
    code: '04',
    label: 'Modernization',
    detail: 'Move safely',
    icon: RefreshCcw,
  },
];

const engagementSignals = [
  {
    label: 'Engagement',
    value: 'Focused',
  },
  {
    label: 'Team shape',
    value: 'Senior',
  },
  {
    label: 'Next move',
    value: 'Defined',
  },
];

export function EngagementFocusMap() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="img"
      aria-label="Engagement focus map showing discovery, experience design, architecture and modernization intervention options."
      className="surface-depth group relative min-h-[340px] overflow-hidden rounded-[2rem] border border-border/80 bg-card/85 p-6 shadow-[0_35px_90px_-55px_rgba(24,31,56,.55)] backdrop-blur-xl dark:shadow-[0_35px_90px_-55px_rgba(0,0,0,.95)] xl:p-7"
    >
      {/* Background */}
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_86%)]" />

      <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-accent/[0.08] blur-[75px] transition duration-700 group-hover:bg-accent/[0.14]" />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 top-20 select-none text-[5.8rem] font-semibold leading-none tracking-[-0.09em] text-foreground/[0.025]"
      >
        FOCUS
      </span>

      {/* Header */}
      <div className="relative z-20 flex items-start justify-between border-b border-border/70 pb-4">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground">
            <Crosshair className="h-4 w-4" />
          </span>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
              Senior attention map
            </p>

            <p className="mt-1 text-sm font-semibold tracking-[-0.025em] text-foreground">
              Calibrated around the product moment
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-border/70 bg-surface/75 px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>

          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
            Signal found
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-5 grid gap-4 sm:grid-cols-[minmax(0,1fr)_112px]">
        {/* Focus matrix */}
        <div className="relative min-h-[198px] overflow-hidden rounded-2xl border border-border/70 bg-surface/45">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            {engagementModes.map((mode, index) => {
              const Icon = mode.icon;

              return (
                <div
                  key={mode.code}
                  className={[
                    'group/cell relative flex flex-col justify-between p-4 transition duration-500 hover:bg-card',
                    index % 2 === 0 ? 'border-r border-border/70' : '',
                    index < 2 ? 'border-b border-border/70' : '',
                  ].join(' ')}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-foreground transition duration-300 group-hover/cell:border-accent group-hover/cell:bg-accent/15">
                      <Icon className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-[7px] font-semibold tracking-[0.14em] text-muted">
                      {mode.code}
                    </span>
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold text-foreground">
                      {mode.label}
                    </p>

                    <p className="mt-0.5 text-[7px] leading-4 text-muted">
                      {mode.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Axis labels */}
          <span className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-card px-2 py-1 text-[6px] font-semibold uppercase tracking-[0.13em] text-muted">
            Discover
          </span>

          <span className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-card px-2 py-1 text-[6px] font-semibold uppercase tracking-[0.13em] text-muted">
            Deliver
          </span>

          {/* Animated scanner */}
          {!shouldReduceMotion && (
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-3 h-px bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_18px_rgba(0,224,92,.45)]"
              animate={{
                top: ['14%', '86%', '14%'],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}

          {/* Selected focus */}
          <div className="pointer-events-none absolute left-[68%] top-[39%] -translate-x-1/2 -translate-y-1/2">
            <span className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-accent/25 motion-reduce:animate-none" />

            <span className="relative block h-3 w-3 rounded-full border-2 border-card bg-accent shadow-[0_0_0_6px_rgba(0,224,92,.12),0_0_24px_rgba(0,224,92,.6)]" />
          </div>

          <div className="pointer-events-none absolute right-3 top-[27%] rounded-xl border border-accent/25 bg-card/95 px-3 py-2 shadow-[0_16px_40px_-24px_rgba(24,31,56,.6)] backdrop-blur-xl">
            <p className="text-[6px] font-semibold uppercase tracking-[0.14em] text-muted">
              Current focus
            </p>

            <p className="mt-0.5 text-[8px] font-semibold text-foreground">
              Architecture intervention
            </p>
          </div>
        </div>

        {/* Engagement summary */}
        <div className="flex flex-col gap-2">
          {engagementSignals.map((signal, index) => (
            <motion.div
              key={signal.label}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 10,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
              }}
              className="flex flex-1 flex-col justify-center rounded-xl border border-border/70 bg-surface/55 px-3 py-3 transition duration-300 hover:border-accent/50 hover:bg-card"
            >
              <span className="text-[7px] font-semibold uppercase tracking-[0.13em] text-muted">
                {signal.label}
              </span>

              <span className="mt-1 flex items-center gap-1.5 text-[9px] font-semibold text-foreground">
                <Check className="h-3 w-3 text-accentText" />
                {signal.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20 mt-5 flex items-center justify-between border-t border-border/70 pt-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-muted">
            Focused when useful
          </span>
        </div>

        <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-foreground">
          End-to-end when needed
        </span>
      </div>
    </div>
  );
}