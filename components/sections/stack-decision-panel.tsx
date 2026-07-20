'use client';

import {
  Check,
  Code2,
  Fingerprint,
  Network,
  ShieldCheck,
  WalletCards,
} from 'lucide-react';
import {
  motion,
  useReducedMotion,
} from 'framer-motion';
import { BlockchainNetworkBackground } from '@/components/sections/blockchain-network-background';

const blockchainSignals = [
  {
    label: 'Contract security',
    value: 97,
    icon: ShieldCheck,
  },
  {
    label: 'Wallet readiness',
    value: 94,
    icon: WalletCards,
  },
  {
    label: 'Identity & compliance',
    value: 92,
    icon: Fingerprint,
  },
];

const selectedStack = [
  'Solidity',
  'Viem',
  'ERC-3643',
  'Fireblocks',
  'The Graph',
];

export function StackDecisionPanel() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="img"
      aria-label="Blockchain architecture panel highlighting smart-contract, wallet and identity infrastructure."
      className="surface-depth group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-border/80 bg-card/85 p-6 shadow-[0_35px_90px_-55px_rgba(24,31,56,.5)] backdrop-blur-xl dark:shadow-[0_35px_90px_-55px_rgba(0,0,0,.9)] xl:p-7"
    >
      <BlockchainNetworkBackground className="opacity-35" />

      <div className="relative z-10 flex items-start justify-between border-b border-border/70 pb-4">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground">
            <Network className="h-4 w-4" />
          </span>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
              Primary technology practice
            </p>

            <p className="mt-1 text-sm font-semibold tracking-[-0.025em] text-foreground">
              Blockchain product architecture
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>

          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
            Chain ready
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-6 grid grid-cols-[1fr_auto] gap-6">
        <div className="space-y-5">
          {blockchainSignals.map((signal, index) => {
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

        <div className="flex flex-col items-center justify-center">
          <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full border border-accent/35 bg-card shadow-[0_0_0_8px_rgba(0,224,92,.05),0_20px_50px_-25px_rgba(0,224,92,.45)]">
            {!shouldReduceMotion && (
              <motion.span
                className="absolute inset-0 rounded-full border border-accent/30"
                animate={{
                  scale: [1, 1.26],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            )}

            <div className="flex flex-col items-center justify-center">
              <Code2 className="h-5 w-5 text-accentText" />

              <span className="mt-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
                Core stack
              </span>
            </div>
          </div>

          <span className="mt-3 inline-flex items-center gap-1.5 text-[8px] font-semibold uppercase tracking-[0.13em] text-muted">
            <Check className="h-3 w-3 text-accentText" />

            Production focused
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-7 rounded-2xl border border-accent/25 bg-accent/[0.045] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-muted">
            Blockchain stack
          </span>

          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-accentText">
            Primary expertise
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

      <div className="relative z-10 mt-5 flex items-center justify-between border-t border-border/70 pt-4">
        <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-muted">
          Contracts · Wallets · Identity · Indexing
        </span>

        <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-foreground">
          Main stack
        </span>
      </div>
    </div>
  );
}