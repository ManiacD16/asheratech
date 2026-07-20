'use client';

import { motion, useReducedMotion } from 'framer-motion';

const nodes = [
  { x: 8, y: 24, active: false },
  { x: 20, y: 12, active: true },
  { x: 30, y: 34, active: false },
  { x: 43, y: 18, active: false },
  { x: 55, y: 40, active: true },
  { x: 67, y: 17, active: false },
  { x: 79, y: 31, active: false },
  { x: 91, y: 13, active: true },
  { x: 15, y: 67, active: false },
  { x: 29, y: 82, active: true },
  { x: 42, y: 61, active: false },
  { x: 58, y: 78, active: false },
  { x: 72, y: 59, active: true },
  { x: 86, y: 79, active: false },
];

const links = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 8],
  [3, 4],
  [3, 10],
  [4, 5],
  [4, 10],
  [4, 12],
  [5, 6],
  [5, 7],
  [6, 7],
  [6, 12],
  [8, 9],
  [8, 10],
  [9, 10],
  [10, 11],
  [10, 12],
  [11, 12],
  [11, 13],
  [12, 13],
];

export function BlockchainNetworkBackground({
  className = '',
}: {
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_42%,rgba(0,224,92,.13),transparent_31%),radial-gradient(circle_at_18%_78%,rgba(0,224,92,.06),transparent_26%)]" />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-40"
      >
        <defs>
          <linearGradient
            id="blockchain-connection"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0"
              stopColor="currentColor"
              stopOpacity="0.07"
            />

            <stop
              offset="0.5"
              stopColor="rgb(0 224 92)"
              stopOpacity="0.48"
            />

            <stop
              offset="1"
              stopColor="currentColor"
              stopOpacity="0.07"
            />
          </linearGradient>
        </defs>

        {links.map(([from, to], index) => {
          const start = nodes[from];
          const end = nodes[to];

          return (
            <motion.line
              key={`${from}-${to}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="url(#blockchain-connection)"
              strokeWidth="0.18"
              vectorEffect="non-scaling-stroke"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      pathLength: 0,
                      opacity: 0,
                    }
              }
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.15 + index * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          );
        })}

        {nodes.map((node, index) => (
          <g key={`${node.x}-${node.y}`}>
            {node.active && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="1.3"
                fill="none"
                stroke="rgb(0 224 92)"
                strokeWidth="0.16"
                vectorEffect="non-scaling-stroke"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        r: [1.1, 2.8],
                        opacity: [0.45, 0],
                      }
                }
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
              />
            )}

            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.active ? 0.65 : 0.45}
              className={
                node.active
                  ? 'fill-accent'
                  : 'fill-foreground/20'
              }
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.45,
                delay: 0.3 + index * 0.05,
              }}
            />
          </g>
        ))}
      </svg>

      <motion.div
        className="absolute right-[7%] top-[15%] h-44 w-44 rounded-[2.2rem] border border-accent/20 bg-card/[0.035] backdrop-blur-[2px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: [0, 7, 0],
                y: [0, -8, 0],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="absolute inset-5 rotate-45 rounded-[1.35rem] border border-border/40" />

        <div className="absolute inset-12 rotate-45 rounded-xl border border-accent/30 bg-accent/[0.04]" />

        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_7px_rgba(0,224,92,.09),0_0_28px_rgba(0,224,92,.45)]" />
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] left-[9%] h-28 w-28 rounded-full border border-border/30"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />

        <span className="absolute bottom-[16%] right-[4%] h-1.5 w-1.5 rounded-full bg-foreground/25" />
      </motion.div>
    </div>
  );
}