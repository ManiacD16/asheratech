'use client';

import {
    Blocks,
    Check,
    CircleDollarSign,
    Code2,
    Fingerprint,
    KeyRound,
    Network,
    ShieldCheck,
    WalletCards,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
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
            <BlockchainNetworkBackground className="opacity-80" />

            <div className="noise opacity-25" />

            <Container className="relative">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,.82fr)_minmax(480px,1.18fr)] lg:items-start lg:gap-16 xl:gap-24">
                    <Reveal>
                        <div>
                            <span className="eyebrow text-white/[0.48]">
                                Blockchain is a core practice
                            </span>

                            <h2 className="max-w-[9ch] text-[clamp(2rem,6.4vw,5.2rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white">
                                Blockchain infrastructure built for{' '}
                                <span className="text-signal">
                                    real adoption.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-8 text-white/[0.6] md:text-lg md:leading-9">
                                We design and engineer blockchain products where
                                security, identity, custody, transactions and
                                everyday usability must work as one dependable
                                system.
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

                    <Reveal delay={0.1}>
                        <BlockchainSystemBoard />
                    </Reveal>
                </div>
                <div className="mt-9 flex flex-wrap gap-2 items-center justify-center">
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
                <div className="mt-12 grid gap-px overflow-hidden rounded-[1.8rem] border border-white/[0.1] bg-white/[0.1] md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                    {capabilities.map((capability, index) => {
                        const Icon = capability.icon;

                        return (
                            <Reveal
                                key={capability.title}
                                delay={0.12 + index * 0.055}
                            >
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

                                    <span className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition duration-700 group-hover:bg-accent/15" />
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

function BlockchainSystemBoard() {
    const shouldReduceMotion = useReducedMotion();

    const lifecycle = [
        {
            label: 'Identity',
            icon: Fingerprint,
        },
        {
            label: 'Wallet',
            icon: WalletCards,
        },
        {
            label: 'Contract',
            icon: Code2,
        },
        {
            label: 'Settlement',
            icon: CircleDollarSign,
        },
    ];

    const statuses = [
        {
            label: 'Contract security',
            value: 'Verified',
            icon: ShieldCheck,
        },
        {
            label: 'Wallet controls',
            value: 'Active',
            icon: KeyRound,
        },
        {
            label: 'Identity state',
            value: 'Compliant',
            icon: Fingerprint,
        },
    ];

    return (
        <div
            role="img"
            aria-label="Blockchain lifecycle connecting identity, wallet, smart contract and settlement infrastructure."
            className="group relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.045] p-6 shadow-[0_44px_120px_-65px_rgba(0,0,0,.92)] backdrop-blur-xl md:p-7"
        >
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.07]" />

            <div className="pointer-events-none absolute right-4 top-8 h-48 w-48 rounded-full bg-accent/[0.08] blur-[70px] transition duration-700 group-hover:bg-accent/[0.14]" />

            <div className="relative z-10 flex items-start justify-between border-b border-white/[0.1] pb-4">
                <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] text-white">
                        <Network className="h-4 w-4" />
                    </span>

                    <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
                            Production blockchain system
                        </p>

                        <p className="mt-1 text-sm font-semibold tracking-[-0.025em] text-white">
                            Trust across the transaction lifecycle
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.035] px-3 py-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />

                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>

                    <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/[0.5]">
                        Network live
                    </span>
                </div>
            </div>

            <div className="relative z-10 mt-8">
                <div className="absolute left-[9%] right-[9%] top-5 h-px bg-white/[0.12]">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent to-accent/10" />

                    {!shouldReduceMotion && (
                        <motion.span
                            className="absolute -top-[5px] h-[11px] w-[11px] rounded-full border-2 border-navy-950 bg-accent shadow-[0_0_0_5px_rgba(0,224,92,.1),0_0_24px_rgba(0,224,92,.65)]"
                            animate={{
                                left: ['0%', 'calc(100% - 11px)'],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatDelay: 0.7,
                                ease: 'easeInOut',
                            }}
                        />
                    )}
                </div>

                <div className="relative grid grid-cols-4 gap-2">
                    {lifecycle.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.label}
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
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="group/node flex flex-col items-center text-center"
                            >
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.13] bg-navy-950 text-white transition duration-500 group-hover/node:-translate-y-1 group-hover/node:border-accent group-hover/node:bg-accent group-hover/node:text-navy-950">
                                    <Icon className="h-4 w-4" />
                                </span>

                                <span className="mt-3 text-[8px] font-semibold uppercase tracking-[0.11em] text-white">
                                    {item.label}
                                </span>

                                <span className="mt-1 text-[7px] font-semibold tracking-[0.13em] text-accent">
                                    0{index + 1}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="relative z-10 mt-8 grid grid-cols-[1.1fr_.9fr] gap-3">
                <div className="rounded-2xl border border-white/[0.1] bg-navy-950/72 p-4">
                    <div className="flex items-center justify-between">
                        <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/[0.45]">
                            Contract activity
                        </span>

                        <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-accent">
                            Confirmed
                        </span>
                    </div>

                    <div className="mt-5 flex h-24 items-end gap-1.5">
                        {[36, 55, 44, 70, 62, 86, 73, 96, 82, 100].map(
                            (height, index) => (
                                <motion.span
                                    key={`${height}-${index}`}
                                    className={`flex-1 origin-bottom rounded-t-sm ${index > 6
                                            ? 'bg-accent'
                                            : 'bg-white/[0.14]'
                                        }`}
                                    style={{
                                        height: `${height}%`,
                                    }}
                                    initial={
                                        shouldReduceMotion
                                            ? false
                                            : {
                                                scaleY: 0,
                                            }
                                    }
                                    whileInView={{
                                        scaleY: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: 0.2 + index * 0.035,
                                    }}
                                />
                            ),
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    {statuses.map((status) => {
                        const Icon = status.icon;

                        return (
                            <div
                                key={status.label}
                                className="flex min-h-[54px] items-center gap-3 rounded-xl border border-white/[0.1] bg-white/[0.025] px-3"
                            >
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.1] bg-navy-950 text-white">
                                    <Icon className="h-3.5 w-3.5" />
                                </span>

                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-[7px] font-semibold uppercase tracking-[0.11em] text-white/[0.42]">
                                        {status.label}
                                    </p>

                                    <p className="mt-0.5 text-[9px] font-semibold text-white">
                                        {status.value}
                                    </p>
                                </div>

                                <Check className="h-3 w-3 text-accent" />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="relative z-10 mt-5 flex items-center justify-between border-t border-white/[0.1] pt-4">
                <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-white/[0.45]">
                    Identity · Custody · Contracts · Settlement
                </span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-white">
                    Production ready
                </span>
            </div>
        </div>
    );
}