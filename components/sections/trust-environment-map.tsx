'use client';

import {
  Blocks,
  Building2,
  Check,
  Eye,
  Fingerprint,
  KeyRound,
  Landmark,
  RefreshCcw,
  Smartphone,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const environments = [
  {
    code: 'FIN',
    label: 'Fintech',
    icon: Landmark,
  },
  {
    code: 'DAS',
    label: 'Digital assets',
    icon: Blocks,
  },
  {
    code: 'MOB',
    label: 'Mobile',
    icon: Smartphone,
  },
  {
    code: 'ENT',
    label: 'Enterprise',
    icon: Building2,
  },
];

const controls = [
  {
    label: 'Trust',
    detail: 'Verifiable behavior',
    icon: Fingerprint,
    score: 96,
  },
  {
    label: 'Access',
    detail: 'Explicit permissions',
    icon: KeyRound,
    score: 94,
  },
  {
    label: 'State',
    detail: 'Reliable transitions',
    icon: RefreshCcw,
    score: 98,
  },
  {
    label: 'Clarity',
    detail: 'Visible operations',
    icon: Eye,
    score: 92,
  },
];

export function TrustEnvironmentMap() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="img"
      aria-label="Operational confidence system connecting fintech, digital assets, mobile and enterprise environments with trust, access, transaction state and operational clarity."
      className="surface-depth group relative min-h-[330px] overflow-hidden rounded-[2rem] border border-border/80 bg-card/85 p-6 shadow-[0_38px_95px_-58px_rgba(24,31,56,.55)] backdrop-blur-xl dark:shadow-[0_38px_95px_-58px_rgba(0,0,0,.95)] xl:p-7"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_86%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-accent/[0.08] blur-[75px] transition duration-700 group-hover:bg-accent/[0.14]"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 top-20 select-none text-[5.4rem] font-semibold leading-none tracking-[-0.09em] text-foreground/[0.025]"
      >
        OPS
      </span>

      {/* Header */}
      <div className="relative z-20 flex items-start justify-between border-b border-border/70 pb-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
            Trust-critical environments
          </p>

          <p className="mt-1 text-sm font-semibold tracking-[-0.025em] text-foreground">
            Operational confidence by design
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-border/70 bg-surface/75 px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>

          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
            Systems healthy
          </span>
        </div>
      </div>

      {/* Environment rail */}
      <div className="relative z-10 mt-5 grid grid-cols-4 gap-2">
        {environments.map((environment, index) => {
          const Icon = environment.icon;

          return (
            <motion.div
              key={environment.code}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 10,
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
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group/environment rounded-xl border border-border/70 bg-surface/55 px-2 py-3 text-center transition duration-400 hover:-translate-y-1 hover:border-accent/55 hover:bg-card"
            >
              <span className="mx-auto inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-foreground transition duration-300 group-hover/environment:border-accent group-hover/environment:bg-accent group-hover/environment:text-accent-foreground">
                <Icon className="h-3.5 w-3.5" />
              </span>

              <span className="mt-2 block text-[7px] font-semibold tracking-[0.14em] text-accentText">
                {environment.code}
              </span>

              <span className="mt-0.5 block truncate text-[8px] font-semibold text-foreground">
                {environment.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Control matrix */}
      <div className="relative z-10 mt-4 overflow-hidden rounded-2xl border border-border/70 bg-surface/40">
        {!shouldReduceMotion && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 z-20 w-px bg-gradient-to-b from-transparent via-accent to-transparent shadow-[0_0_18px_rgba(0,224,92,.5)]"
            animate={{
              left: ['2%', '98%', '2%'],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}

        {controls.map((control, index) => {
          const Icon = control.icon;

          return (
            <div
              key={control.label}
              className={[
                'grid min-h-[48px] grid-cols-[36px_1fr_48px] items-center gap-3 px-4',
                index !== controls.length - 1
                  ? 'border-b border-border/65'
                  : '',
              ].join(' ')}
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-foreground">
                <Icon className="h-3.5 w-3.5" />
              </span>

              <div className="min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[8px] font-semibold text-foreground">
                      {control.label}
                    </p>

                    <p className="mt-0.5 text-[7px] text-muted">
                      {control.detail}
                    </p>
                  </div>

                  <span className="text-[8px] font-semibold tabular-nums text-muted">
                    {control.score}%
                  </span>
                </div>

                <div className="mt-2 h-1 overflow-hidden rounded-full bg-border/60">
                  <motion.span
                    className="block h-full rounded-full bg-gradient-to-r from-accent/45 to-accent"
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            width: 0,
                          }
                    }
                    whileInView={{
                      width: `${control.score}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.85,
                      delay: 0.2 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </div>

              <span className="inline-flex h-7 items-center justify-center gap-1 rounded-full border border-accent/25 bg-accent/[0.1] px-2 text-[7px] font-semibold uppercase tracking-[0.1em] text-foreground">
                <Check className="h-2.5 w-2.5 text-accentText" />
                Live
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="relative z-20 mt-5 flex items-center justify-between border-t border-border/70 pt-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-muted">
            Access · State · Visibility
          </span>
        </div>

        <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-foreground">
          Confidence 95
        </span>
      </div>
    </div>
  );
}