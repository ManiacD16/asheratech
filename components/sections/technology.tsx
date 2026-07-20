'use client';

import { useRef } from 'react';
import {
  Blocks,
  ShieldCheck,
  WalletCards,
} from 'lucide-react';
import { useInView } from 'framer-motion';
import { technologies } from '@/data/site';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';
import { StackDecisionPanel } from '@/components/sections/stack-decision-panel';
import { BlockchainNetworkBackground } from '@/components/sections/blockchain-network-background';

const blockchainCategory = 'Blockchain & digital assets';

export function Technology() {
  const root = useRef<HTMLElement>(null);

  const inView = useInView(root, {
    margin: '20% 0px 20% 0px',
  });

  const rows = Object.entries(technologies).sort(
    ([firstCategory]) =>
      firstCategory === blockchainCategory ? -1 : 1,
  );

  return (
    <section
      ref={root}
      data-chapter="Technology"
      className="section-shell relative overflow-hidden bg-surface/55"
    >
      <BlockchainNetworkBackground className="opacity-20" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(370px,0.75fr)] lg:gap-12 xl:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Blockchain-first engineering"
              className="max-w-[790px]"
              title={
                <>
                  Blockchain is our core stack.{' '}
                  <span className="text-gradient">
                    Every other technology supports the product.
                  </span>
                </>
              }
              description="We lead with smart contracts, wallets, digital identity, tokenization and on-chain operations—then select web, mobile, cloud and data technologies around the product’s real delivery needs."
            />
          </Reveal>

          <Reveal
            delay={0.1}
            className="hidden lg:block"
          >
            <StackDecisionPanel />
          </Reveal>
        </div>

        <Reveal
          delay={0.08}
          className="mt-8 lg:hidden"
        >
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                label: 'Smart contracts',
                icon: Blocks,
              },
              {
                label: 'Wallet infrastructure',
                icon: WalletCards,
              },
              {
                label: 'Security by design',
                icon: ShieldCheck,
              },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex min-h-12 items-center gap-3 rounded-xl border border-border bg-card px-4"
              >
                <Icon className="h-4 w-4 text-accentText" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      <div className="relative mt-12 space-y-3 lg:mt-16">
        {rows.map(([category, items], rowIndex) => {
          const isBlockchain =
            category === blockchainCategory;

          const values = [...items, ...items, ...items];

          return (
            <div
              key={category}
              className={`marquee-mask group overflow-hidden ${
                isBlockchain
                  ? 'border-y border-accent/20 bg-accent/[0.045] py-3'
                  : ''
              }`}
            >
              <div
                className={`flex w-max items-center transition-[animation-play-state] group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
                  rowIndex % 2 === 0
                    ? 'animate-marquee'
                    : 'animate-marquee-reverse'
                } ${
                  inView
                    ? ''
                    : '[animation-play-state:paused]'
                }`}
              >
                {values.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className={`mx-1.5 inline-flex items-center gap-3 rounded-full border px-6 text-sm font-semibold transition duration-300 hover:-translate-y-1 ${
                      isBlockchain
                        ? 'min-h-[4.5rem] border-accent/35 bg-navy-950 text-white shadow-[0_22px_55px_-35px_rgba(0,224,92,.45)] hover:border-accent hover:bg-accent hover:text-navy-950 dark:bg-white dark:text-navy-950 dark:hover:bg-accent'
                        : 'min-h-16 border-border bg-card text-foreground shadow-float hover:border-accent hover:bg-navy-900 hover:text-white dark:hover:bg-white dark:hover:text-navy-950'
                    }`}
                  >
                    <span
                      className={`rounded-full bg-accent ${
                        isBlockchain
                          ? 'h-2.5 w-2.5'
                          : 'h-2 w-2'
                      }`}
                    />

                    {item}

                    <span
                      className={`ml-3 text-[9px] font-semibold uppercase tracking-[0.15em] ${
                        isBlockchain
                          ? 'text-white/50 dark:text-navy-950/45'
                          : 'text-muted'
                      }`}
                    >
                      {category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}