'use client';

import { Check, GitBranch, ScanLine } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const outputs = [
  {
    label: 'Context',
    value: 'Connected',
  },
  {
    label: 'Priority',
    value: 'Visible',
  },
  {
    label: 'Next move',
    value: 'Clear',
  },
];

export function ClarityLens() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="surface-depth group relative min-h-[270px] overflow-hidden rounded-[1.8rem] border border-border/80 bg-surface/65 p-5 shadow-[0_30px_80px_-55px_rgba(24,31,56,.5)] backdrop-blur-xl dark:shadow-[0_30px_80px_-55px_rgba(0,0,0,.9)]"
    >
      {/* Background */}
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_86%)]" />

      <div className="pointer-events-none absolute -left-12 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[65px] transition duration-700 group-hover:bg-accent/[0.12]" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-border/70 pb-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-foreground">
            <ScanLine className="h-4 w-4" />
          </span>

          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.17em] text-muted">
              Clarity system
            </p>

            <p className="mt-1 text-xs font-semibold tracking-[-0.02em] text-foreground">
              Complexity translated
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-border/70 bg-card/75 px-2.5 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>

          <span className="text-[7px] font-semibold uppercase tracking-[0.14em] text-muted">
            Active
          </span>
        </div>
      </div>

      {/* Transformation interface */}
      <div className="relative z-10 mt-5 grid grid-cols-[1fr_30px_1fr] items-center gap-3">
        {/* Complexity input */}
        <div className="relative h-[128px] overflow-hidden rounded-2xl border border-border/70 bg-card/60">
          <p className="absolute left-3 top-3 text-[7px] font-semibold uppercase tracking-[0.15em] text-muted">
            Raw complexity
          </p>

          <svg
            viewBox="0 0 140 110"
            className="absolute inset-x-2 bottom-1 h-[95px] w-[calc(100%-1rem)] text-border"
          >
            <line
              x1="22"
              y1="38"
              x2="70"
              y2="62"
              stroke="currentColor"
              strokeWidth="1"
            />

            <line
              x1="70"
              y1="62"
              x2="116"
              y2="29"
              stroke="currentColor"
              strokeWidth="1"
            />

            <line
              x1="38"
              y1="88"
              x2="70"
              y2="62"
              stroke="currentColor"
              strokeWidth="1"
            />

            <line
              x1="70"
              y1="62"
              x2="112"
              y2="86"
              stroke="currentColor"
              strokeWidth="1"
            />

            <line
              x1="22"
              y1="38"
              x2="38"
              y2="88"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          </svg>

          <span className="absolute left-[18%] top-[38%] h-3 w-3 rounded-full border border-border bg-card" />

          <span className="absolute right-[18%] top-[30%] h-4 w-4 rounded-full border border-border bg-card" />

          <span className="absolute bottom-[18%] left-[30%] h-3.5 w-3.5 rounded-full border border-border bg-card" />

          <span className="absolute bottom-[20%] right-[20%] h-3 w-3 rounded-full border border-border bg-card" />

          <span className="absolute left-1/2 top-[57%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70 bg-accent/15 shadow-[0_0_20px_rgba(0,224,92,.18)]" />
        </div>

        {/* Translation rail */}
        <div className="relative flex h-[128px] items-center justify-center">
          <div className="absolute inset-y-2 left-1/2 w-px -translate-x-1/2 bg-border" />

          {!shouldReduceMotion && (
            <motion.span
              className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-surface bg-accent shadow-[0_0_0_4px_rgba(0,224,92,.1),0_0_18px_rgba(0,224,92,.55)]"
              animate={{
                top: ['8%', '84%'],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          )}

          <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm">
            <GitBranch className="h-3.5 w-3.5" />
          </span>
        </div>

        {/* Clarity output */}
        <div className="space-y-2">
          {outputs.map((output, index) => (
            <motion.div
              key={output.label}
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
                amount: 0.8,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.1,
              }}
              className="flex min-h-[36px] items-center justify-between rounded-xl border border-border/70 bg-card px-3 transition duration-300 hover:border-accent/50"
            >
              <div>
                <p className="text-[7px] font-semibold uppercase tracking-[0.13em] text-muted">
                  {output.label}
                </p>

                <p className="mt-0.5 text-[9px] font-semibold text-foreground">
                  {output.value}
                </p>
              </div>

              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/[0.14] text-foreground">
                <Check className="h-3 w-3" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-5 flex items-center justify-between border-t border-border/70 pt-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />

          <span className="text-[7px] font-semibold uppercase tracking-[0.13em] text-muted">
            Noise reduced
          </span>
        </div>

        <span className="text-[7px] font-semibold uppercase tracking-[0.13em] text-foreground">
          Decisions aligned
        </span>
      </div>
    </div>
  );
}