'use client';

import {
  Check,
  Eye,
  Gauge,
  Handshake,
  MessageSquareText,
  Repeat2,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const relationshipSignals = [
  {
    label: 'Shared context',
    detail: 'Everyone sees the same problem',
    icon: Eye,
  },
  {
    label: 'Direct communication',
    detail: 'Trade-offs stay visible',
    icon: MessageSquareText,
  },
  {
    label: 'Continuous progress',
    detail: 'Learning returns to delivery',
    icon: Repeat2,
  },
];

const relationshipStages = ['Align', 'Decide', 'Build', 'Learn'];

export function WorkingRelationshipSystem() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="img"
      aria-label="A working relationship system showing trust and traction increasing through alignment, decisions, delivery and learning."
      className="surface-depth group relative min-h-[340px] overflow-hidden rounded-[2rem] border border-border/80 bg-card/85 p-6 shadow-[0_38px_95px_-58px_rgba(24,31,56,.55)] backdrop-blur-xl dark:shadow-[0_38px_95px_-58px_rgba(0,0,0,.95)] xl:p-7"
    >
      {/* Background */}
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_86%)]" />

      <div className="pointer-events-none absolute -right-14 -top-16 h-52 w-52 rounded-full bg-accent/[0.08] blur-[75px] transition duration-700 group-hover:bg-accent/[0.14]" />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 top-20 select-none text-[5.8rem] font-semibold leading-none tracking-[-0.09em] text-foreground/[0.025]"
      >
        T+T
      </span>

      {/* Header */}
      <div className="relative z-20 flex items-start justify-between border-b border-border/70 pb-4">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground">
            <Handshake className="h-4 w-4" />
          </span>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
              Working relationship
            </p>

            <p className="mt-1 text-sm font-semibold tracking-[-0.025em] text-foreground">
              Trust compounds into traction
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-border/70 bg-surface/75 px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>

          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
            In rhythm
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-5 grid gap-4 sm:grid-cols-[1.25fr_.75fr]">
        {/* Relationship curve */}
        <div className="relative min-h-[205px] overflow-hidden rounded-2xl border border-border/70 bg-surface/45 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-muted">
                Relationship momentum
              </p>

              <p className="mt-1 text-[11px] font-semibold text-foreground">
                Clarity grows through shared decisions
              </p>
            </div>

            <Gauge className="h-4 w-4 text-muted" />
          </div>

          <div className="relative mt-4 h-[106px]">
            {/* Horizontal guides */}
            <div className="absolute inset-x-0 top-0 h-px bg-border/60" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-border/45" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-border/60" />

            <svg
              aria-hidden="true"
              viewBox="0 0 420 110"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              {/* Trust curve */}
              <motion.path
                d="M 0 91 C 55 84, 72 71, 113 74 C 160 77, 176 53, 220 58 C 269 64, 289 31, 333 38 C 368 41, 389 18, 420 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                className="text-foreground/45"
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        pathLength: 0,
                        opacity: 0,
                      }
                }
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.7,
                }}
                transition={{
                  duration: 1.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* Traction curve */}
              <motion.path
                d="M 0 98 C 58 96, 80 85, 118 86 C 165 87, 179 70, 222 68 C 272 66, 291 48, 333 42 C 372 35, 392 25, 420 8"
                fill="none"
                stroke="rgb(0 224 92)"
                strokeWidth="2.4"
                strokeLinecap="round"
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        pathLength: 0,
                        opacity: 0,
                      }
                }
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.7,
                }}
                transition={{
                  duration: 1.15,
                  delay: 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </svg>

            {!shouldReduceMotion && (
              <motion.span
                aria-hidden="true"
                className="absolute h-3 w-3 rounded-full border-2 border-card bg-accent shadow-[0_0_0_6px_rgba(0,224,92,.11),0_0_24px_rgba(0,224,92,.6)]"
                animate={{
                  left: ['0%', '97%'],
                  top: ['88%', '2%'],
                }}
                transition={{
                  duration: 4.4,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                  ease: 'easeInOut',
                }}
              />
            )}

            <div className="absolute right-0 top-0 flex items-center gap-3 rounded-xl border border-border bg-card/95 px-3 py-2 shadow-[0_14px_38px_-25px_rgba(24,31,56,.55)] backdrop-blur-xl">
              <div>
                <p className="text-[7px] font-semibold uppercase tracking-[0.13em] text-muted">
                  Trust
                </p>

                <p className="mt-0.5 text-[10px] font-semibold text-foreground">
                  96%
                </p>
              </div>

              <span className="h-6 w-px bg-border" />

              <div>
                <p className="text-[7px] font-semibold uppercase tracking-[0.13em] text-muted">
                  Traction
                </p>

                <p className="mt-0.5 text-[10px] font-semibold text-accentText">
                  93%
                </p>
              </div>
            </div>
          </div>

          {/* Working rhythm */}
          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {relationshipStages.map((stage, index) => (
              <motion.div
                key={stage}
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
                  duration: 0.42,
                  delay: 0.3 + index * 0.08,
                }}
                className="rounded-lg border border-border/70 bg-card px-2 py-2 text-center transition duration-300 hover:border-accent/45"
              >
                <span className="block text-[7px] font-semibold text-accentText">
                  0{index + 1}
                </span>

                <span className="mt-0.5 block text-[7px] font-semibold uppercase tracking-[0.09em] text-muted">
                  {stage}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Relationship signals */}
        <div className="flex flex-col gap-2">
          {relationshipSignals.map((signal, index) => {
            const Icon = signal.icon;

            return (
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
                  delay: 0.18 + index * 0.1,
                }}
                className="group/signal flex flex-1 items-center gap-3 rounded-xl border border-border/70 bg-surface/55 px-3 py-3 transition duration-300 hover:border-accent/45 hover:bg-card"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-foreground transition duration-300 group-hover/signal:border-accent group-hover/signal:bg-accent/15">
                  <Icon className="h-3.5 w-3.5" />
                </span>

                <div className="min-w-0">
                  <p className="truncate text-[8px] font-semibold text-foreground">
                    {signal.label}
                  </p>

                  <p className="mt-0.5 text-[7px] leading-4 text-muted">
                    {signal.detail}
                  </p>
                </div>

                <Check className="ml-auto h-3 w-3 shrink-0 text-accentText" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20 mt-5 flex items-center justify-between border-t border-border/70 pt-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-muted">
            Direct communication
          </span>
        </div>

        <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-foreground">
          Shared ownership
        </span>
      </div>
    </div>
  );
}