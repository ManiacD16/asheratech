'use client';

import Image from 'next/image';
import { Blocks, Code2, Network, WalletCards } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { Button } from '@/components/ui/button';
import { BlockchainNetworkBackground } from '@/components/sections/blockchain-network-background';

const capabilities = [
  {
    title: 'Smart contracts',
    copy: 'Auditable contracts, upgrade strategies and transaction flows built around real product behavior.',
    icon: Code2,
  },
  {
    title: 'Wallet infrastructure',
    copy: 'Custodial and non-custodial wallet journeys with secure signing, recovery and operational controls.',
    icon: WalletCards,
  },
  {
    title: 'Tokenized assets',
    copy: 'Identity, compliance, ownership and lifecycle systems for regulated digital assets.',
    icon: Blocks,
  },
  {
    title: 'On-chain operations',
    copy: 'Indexing, observability, reconciliation and transaction-state visibility for production systems.',
    icon: Network,
  },
];

const stack = [
  'Solidity',
  'EVM',
  'ERC-20',
  'ERC-721',
  'ERC-3643',
  'Viem',
  'Ethers.js',
  'Fireblocks',
  'WalletConnect',
  'The Graph',
];

export function BlockchainExpertise() {
  return (
    <section
      data-chapter="Blockchain"
      className="relative overflow-hidden bg-navy-950 py-16 text-white md:py-20 lg:py-24"
    >
      <BlockchainNetworkBackground className="opacity-45" />
      <Image
        src="/images/studio/blockchain-ambient.webp"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none object-cover object-center opacity-40 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/55 to-navy-950" />
      <div className="noise opacity-25" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,.82fr)_minmax(480px,1.18fr)] lg:items-center lg:gap-16 xl:gap-24">
          <Reveal>
            <div>
              <span className="eyebrow text-white/[0.48]">
                Blockchain is a core practice
              </span>
              <h2 className="max-w-[9ch] text-[clamp(2rem,6.4vw,5.2rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white">
                Blockchain infrastructure built for{' '}
                <span className="text-signal">real adoption.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/[0.6] md:text-lg md:leading-9">
                We design and engineer blockchain products where security,
                identity, custody, transactions and everyday usability must work
                as one dependable system.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/services#fintech-web3">
                  Explore blockchain work
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  className="border-white/15 bg-white/[0.035] text-white hover:border-accent"
                >
                  Discuss a blockchain product
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} variant="scale">
            <div className="relative mx-auto w-full max-w-[820px]">
              <div className="absolute inset-[15%] rounded-full bg-accent/10 blur-[80px]" />
              <Image
                src="/images/studio/cap-blockchain.webp"
                alt="A blockchain engineer reviews contract code with a hardware key in hand."
                width={1536}
                height={1024}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="relative h-auto w-full border border-white/15 object-cover shadow-[0_34px_70px_rgba(0,0,0,.5)]"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/[0.11] bg-white/[0.035] px-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/[0.62] transition duration-300 hover:border-accent/55 hover:bg-accent/[0.09] hover:text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-none border border-white/[0.1] bg-white/[0.1] md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Reveal key={capability.title} delay={0.12 + index * 0.055}>
                <article className="group relative h-full min-h-[240px] overflow-hidden bg-navy-950/95 p-6 transition duration-500 hover:bg-white/[0.045] md:p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.11] bg-white/[0.035] text-white transition duration-500 group-hover:-translate-y-1 group-hover:border-accent group-hover:bg-accent group-hover:text-navy-950">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="absolute right-6 top-6 text-[10px] font-semibold tracking-[0.14em] text-white/[0.25]">
                    0{index + 1}
                  </span>
                  <div className="mt-16">
                    <h3 className="text-xl font-semibold tracking-[-0.035em] text-white">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/[0.52]">
                      {capability.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
