'use client';

import {
    Check,
    Code2,
    Layers3,
    Lightbulb,
    PenTool,
    Rocket,
    UsersRound,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const inputSignals = [
    {
        label: 'Product ambition',
        detail: 'What should become possible',
        icon: Lightbulb,
    },
    {
        label: 'Customer experience',
        detail: 'What people need to accomplish',
        icon: UsersRound,
    },
    {
        label: 'Technical context',
        detail: 'What the system must support',
        icon: Code2,
    },
];

const productionLayers = [
    {
        number: '01',
        label: 'Direction',
        detail: 'Aligned',
        icon: Lightbulb,
    },
    {
        number: '02',
        label: 'Experience',
        detail: 'Validated',
        icon: PenTool,
    },
    {
        number: '03',
        label: 'Engineering',
        detail: 'Production-ready',
        icon: Code2,
    },
];

export function ServiceProductionSystem() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div
            role="img"
            aria-label="Product ambition, customer experience and technical context converging through one integrated team into a production-ready product."
            className="surface-depth group relative min-h-[330px] overflow-hidden rounded-[2rem] border border-border/80 bg-card/85 p-4 shadow-[0_38px_95px_-58px_rgba(24,31,56,.58)] backdrop-blur-xl dark:shadow-[0_38px_95px_-58px_rgba(0,0,0,.95)] xl:p-5"
        >
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
                BUILD
            </span>

            {/* Header */}
            <div className="relative z-20 flex items-start justify-between border-b border-border/70 pb-2">
                <div className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-surface text-foreground">
                        <Layers3 className="h-4 w-4" />
                    </span>

                    <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
                            Integrated delivery system
                        </p>

                        <p className="mt-1 text-sm font-semibold tracking-[-0.025em] text-foreground">
                            Signal translated into production
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-border/70 bg-surface/75 px-3 py-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />

                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>

                    <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Team connected
                    </span>
                </div>
            </div>

            <div className="relative z-10 mt-2 grid grid-cols-[1fr_52px_1fr] items-stretch gap-3">
                {/* Input signals */}
                <div className="space-y-2">
                    <p className="mb-3 text-[8px] font-semibold uppercase tracking-[0.15em] text-muted">
                        First signals
                    </p>

                    {inputSignals.map((signal, index) => {
                        const Icon = signal.icon;

                        return (
                            <motion.div
                                key={signal.label}
                                initial={
                                    shouldReduceMotion
                                        ? false
                                        : {
                                            opacity: 0,
                                            x: -10,
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
                                    duration: 0.48,
                                    delay: index * 0.09,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group/input flex min-h-[55px] items-center gap-3 rounded-xl border border-border/70 bg-surface/55 px-3 py-2.5 transition duration-300 hover:border-accent/45 hover:bg-card"
                            >
                                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-foreground transition duration-300 group-hover/input:border-accent group-hover/input:bg-accent/15">
                                    <Icon className="h-3.5 w-3.5" />
                                </span>

                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[7px] font-semibold tracking-[0.14em] text-accentText">
                                            0{index + 1}
                                        </span>

                                        <p className="truncate text-[9px] font-semibold text-foreground">
                                            {signal.label}
                                        </p>
                                    </div>

                                    <p className="mt-0.5 truncate text-[7px] leading-4 text-muted">
                                        {signal.detail}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Convergence rail */}
                <div className="relative flex items-center justify-center pt-7">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 52 190"
                        preserveAspectRatio="none"
                        className="absolute inset-x-0 top-8 h-[178px] w-full overflow-visible"
                    >
                        {[
                            'M 0 27 C 23 27, 18 86, 26 95',
                            'M 0 95 H 26',
                            'M 0 163 C 23 163, 18 104, 26 95',
                            'M 26 95 H 52',
                        ].map((path, index) => (
                            <motion.path
                                key={path}
                                d={path}
                                fill="none"
                                stroke={
                                    index === 3 ? 'rgb(0 224 92)' : 'currentColor'
                                }
                                strokeWidth={index === 3 ? 1.5 : 1}
                                strokeLinecap="round"
                                className="text-border"
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
                                    opacity: index === 3 ? 0.9 : 0.7,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            />
                        ))}
                    </svg>

                    {!shouldReduceMotion && (
                        <motion.span
                            aria-hidden="true"
                            className="absolute z-20 h-2.5 w-2.5 rounded-full border-2 border-card bg-accent shadow-[0_0_0_5px_rgba(0,224,92,.11),0_0_22px_rgba(0,224,92,.6)]"
                            animate={{
                                left: ['0%', '82%'],
                                top: ['52%', '52%'],
                            }}
                            transition={{
                                duration: 2.8,
                                repeat: Infinity,
                                repeatDelay: 0.8,
                                ease: 'easeInOut',
                            }}
                        />
                    )}

                    <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-card text-foreground shadow-[0_0_0_7px_rgba(0,224,92,.05),0_18px_45px_-25px_rgba(0,224,92,.5)]">
                        <Layers3 className="h-4 w-4" />
                    </span>
                </div>

                {/* Production output */}
                <div>
                    <div className="mb-3 flex items-center justify-between">
                        <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-muted">
                            Production system
                        </p>

                        <span className="inline-flex items-center gap-1 text-[7px] font-semibold uppercase tracking-[0.12em] text-accentText">
                            <Check className="h-2.5 w-2.5" />
                            Ready
                        </span>
                    </div>

                    <div className="relative min-h-[191px] overflow-hidden rounded-2xl border border-accent/25 bg-accent/[0.045] p-4">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-[7px] font-semibold uppercase tracking-[0.14em] text-muted">
                                    Integrated output
                                </p>

                                <p className="mt-1 text-[12px] font-semibold leading-[1.15] tracking-[-0.025em] text-foreground">
                                    One product direction
                                </p>
                            </div>

                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                                <Rocket className="h-4 w-4" />
                            </span>
                        </div>

                        <div className="relative mt-5 space-y-2">
                            {productionLayers.map((layer, index) => {
                                const Icon = layer.icon;

                                return (
                                    <motion.div
                                        key={layer.label}
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
                                            duration: 0.45,
                                            delay: 0.28 + index * 0.08,
                                        }}
                                        className="group/layer flex items-center gap-2.5 rounded-xl border border-border/70 bg-card/90 px-3 py-2.5 transition duration-300 hover:border-accent/45"
                                    >
                                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-surface text-foreground">
                                            <Icon className="h-3 w-3" />
                                        </span>

                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-2">
                                                <span className="text-[8px] font-semibold text-foreground">
                                                    {layer.label}
                                                </span>

                                                <span className="text-[7px] font-semibold text-accentText">
                                                    {layer.number}
                                                </span>
                                            </div>

                                            <p className="mt-0.5 text-[7px] text-muted">
                                                {layer.detail}
                                            </p>
                                        </div>

                                        <Check className="h-3 w-3 shrink-0 text-accentText" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-20 mt-2 flex items-center justify-between border-t border-border/70 pt-2">
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                    <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-muted">
                        Strategy · Experience · Engineering
                    </span>
                </div>

                <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-foreground">
                    Production reality
                </span>
            </div>
        </div>
    );
}