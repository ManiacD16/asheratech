'use client';

import {
  Blocks,
  Check,
  Code2,
  Compass,
  PenTool,
  Target,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const disciplines = [
  {
    number: '01',
    label: 'Product strategy',
    detail: 'Commercial direction',
    icon: Compass,
    position: 'left-0 top-0',
  },
  {
    number: '02',
    label: 'Experience design',
    detail: 'Customer clarity',
    icon: PenTool,
    position: 'right-0 top-0',
  },
  {
    number: '03',
    label: 'Engineering',
    detail: 'Technical reality',
    icon: Code2,
    position: 'bottom-0 left-0',
  },
  {
    number: '04',
    label: 'Fintech & Web3',
    detail: 'Domain intelligence',
    icon: Blocks,
    position: 'bottom-0 right-0',
  },
];

const alignedDecisions = ['Commercial', 'Customer', 'Technical'];

export function ProductDirectionSystem() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="img"
      aria-label="Four disciplines—product strategy, experience design, software engineering, and fintech and Web3—converging into one shared product direction."
      className="group relative min-h-[350px] overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.035] p-6 shadow-[0_40px_100px_-60px_rgba(0,0,0,.88)] backdrop-blur-xl xl:p-7"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-[0.07]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[52%] h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[70px] transition duration-700 group-hover:bg-accent/[0.13]"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 top-20 select-none text-[5.6rem] font-semibold leading-none tracking-[-0.09em] text-white/[0.025]"
      >
        4→1
      </span>

      {/* Header */}
      <div className="relative z-20 flex items-start justify-between border-b border-white/[0.1] pb-4">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.045] text-white">
            <Target className="h-4 w-4" />
          </span>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
              Product alignment system
            </p>

            <p className="mt-1 text-sm font-semibold tracking-[-0.025em] text-white">
              Four inputs. One direction.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.035] px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>

          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/[0.5]">
            Aligned
          </span>
        </div>
      </div>

      {/* Convergence board */}
      <div className="relative z-10 mt-5 h-[198px]">
        {/* Connecting paths */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          {[
            'M 22 21 C 34 21, 37 39, 50 50',
            'M 78 21 C 66 21, 63 39, 50 50',
            'M 22 79 C 34 79, 37 61, 50 50',
            'M 78 79 C 66 79, 63 61, 50 50',
          ].map((path, index) => (
            <motion.path
              key={path}
              d={path}
              fill="none"
              stroke="rgb(0 224 92)"
              strokeWidth="0.42"
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
                opacity: 0.55,
              }}
              viewport={{
                once: true,
                amount: 0.7,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}
        </svg>

        {/* Discipline cards */}
        {disciplines.map((discipline, index) => {
          const Icon = discipline.icon;

          return (
            <motion.div
              key={discipline.label}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.94,
                      y: index < 2 ? -8 : 8,
                    }
              }
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.1 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group/node absolute w-[37%] ${discipline.position}`}
            >
              <div className="flex min-h-[72px] items-center gap-3 rounded-2xl border border-white/[0.1] bg-navy-950/80 p-3 backdrop-blur-xl transition duration-500 group-hover/node:-translate-y-1 group-hover/node:border-accent/55 group-hover/node:bg-white/[0.055]">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.045] text-white transition duration-400 group-hover/node:border-accent group-hover/node:bg-accent group-hover/node:text-navy-950">
                  <Icon className="h-4 w-4" />
                </span>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[7px] font-semibold tracking-[0.14em] text-accent">
                      {discipline.number}
                    </span>

                    <span className="h-px flex-1 bg-white/[0.1]" />
                  </div>

                  <p className="mt-1 truncate text-[10px] font-semibold text-white">
                    {discipline.label}
                  </p>

                  <p className="mt-0.5 truncate text-[7px] leading-4 text-white/[0.42]">
                    {discipline.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Central shared direction */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          {!shouldReduceMotion && (
            <>
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-[1.6rem] border border-accent/35"
                animate={{
                  scale: [1, 1.28],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />

              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-[1.6rem] border border-accent/25"
                animate={{
                  scale: [1, 1.42],
                  opacity: [0.35, 0],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: 0.75,
                  ease: 'easeOut',
                }}
              />
            </>
          )}

          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [-2, 2, -2],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative flex h-[94px] w-[94px] flex-col items-center justify-center rounded-[1.65rem] border border-accent/50 bg-navy-950 shadow-[0_0_0_8px_rgba(0,224,92,.05),0_26px_65px_-30px_rgba(0,224,92,.55)]"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-navy-950">
              <Target className="h-4 w-4" />
            </span>

            <span className="mt-2 text-[7px] font-semibold uppercase tracking-[0.14em] text-white/[0.45]">
              Shared
            </span>

            <span className="mt-0.5 text-[9px] font-semibold text-white">
              Direction
            </span>
          </motion.div>
        </div>
      </div>

      {/* Alignment result */}
      <div className="relative z-20 mt-4 grid grid-cols-3 gap-2">
        {alignedDecisions.map((decision, index) => (
          <motion.div
            key={decision}
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
              delay: 0.45 + index * 0.08,
            }}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.025] px-2 py-2.5 transition duration-300 hover:border-accent/35 hover:bg-accent/[0.06]"
          >
            <Check className="h-3 w-3 text-accent" />

            <span className="text-[7px] font-semibold uppercase tracking-[0.11em] text-white/[0.52]">
              {decision}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-20 mt-4 flex items-center justify-between border-t border-white/[0.1] pt-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-white/[0.45]">
            Decisions reinforce one another
          </span>
        </div>

        <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-white">
          One product
        </span>
      </div>
    </div>
  );
}