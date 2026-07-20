'use client';

import { Code2, Compass, PenTool, Rocket } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const phases = [
    {
        number: '01',
        label: 'Define',
        icon: Compass,
    },
    {
        number: '02',
        label: 'Design',
        icon: PenTool,
    },
    {
        number: '03',
        label: 'Build',
        icon: Code2,
    },
    {
        number: '04',
        label: 'Scale',
        icon: Rocket,
    },
];

const principles = [
    'Shared context',
    'Continuous validation',
    'Measurable progress',
];

export function ProcessSignal() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div
            aria-hidden="true"
            className="group relative min-h-[300px] overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.035] p-6 shadow-[0_40px_100px_-60px_rgba(0,0,0,.85)] backdrop-blur-xl xl:p-7"
        >
            {/* Background texture */}
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.08]" />

            <div className="pointer-events-none absolute right-10 top-8 h-36 w-36 rounded-full bg-accent/[0.08] blur-[65px] transition duration-700 group-hover:bg-accent/[0.14]" />

            <span className="pointer-events-none absolute -right-2 top-12 select-none text-[6rem] font-semibold leading-none tracking-[-0.09em] text-white/[0.025]">
                01-04
            </span>

            {/* Header */}
            <div className="relative z-10 flex items-start justify-between border-b border-white/[0.1] pb-4">
                <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
                        Connected delivery system
                    </p>

                    <p className="mt-1.5 text-sm font-semibold tracking-[-0.025em] text-white">
                        One continuous decision loop
                    </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />

                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>

                    <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-white/[0.52]">
                        System active
                    </span>
                </div>
            </div>

            {/* Process pipeline */}
            <div className="relative z-10 mt-8">
                <div className="absolute left-[8%] right-[8%] top-5 h-px bg-white/[0.12]">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/80 to-accent/10" />

                    {!shouldReduceMotion && (
                        <motion.span
                            className="absolute -top-[5px] h-[11px] w-[11px] rounded-full border-2 border-navy-950 bg-accent shadow-[0_0_0_5px_rgba(0,224,92,.10),0_0_22px_rgba(0,224,92,.65)]"
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
                    {phases.map((phase, index) => {
                        const Icon = phase.icon;

                        return (
                            <div
                                key={phase.label}
                                className="group/node flex flex-col items-center text-center"
                            >
                                <motion.span
                                    className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.14] bg-navy-950 text-white shadow-[0_15px_35px_-18px_rgba(0,0,0,.9)] transition duration-500 group-hover/node:-translate-y-1 group-hover/node:border-accent group-hover/node:bg-accent group-hover/node:text-navy-950"
                                    animate={
                                        shouldReduceMotion
                                            ? undefined
                                            : {
                                                borderColor: [
                                                    'rgba(255,255,255,.14)',
                                                    'rgba(0,224,92,.72)',
                                                    'rgba(255,255,255,.14)',
                                                ],
                                            }
                                    }
                                    transition={{
                                        duration: 2.4,
                                        repeat: Infinity,
                                        delay: index * 0.55,
                                        repeatDelay: 1.5,
                                    }}
                                >
                                    <Icon className="h-4 w-4" />
                                </motion.span>

                                <span className="mt-3 text-[9px] font-semibold uppercase tracking-[0.1em] text-white">
                                    {phase.label}
                                </span>

                                <span className="mt-1 text-[8px] font-medium tracking-[0.14em] text-white/[0.38]">
                                    {phase.number}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Shared principles */}
            <div className="relative z-10 mt-7 grid grid-cols-3 gap-2">
                {principles.map((principle) => (
                    <div
                        key={principle}
                        className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-2 py-3 text-center transition duration-500 hover:border-accent/40 hover:bg-accent/[0.07]"
                    >
                        <span className="text-[8px] font-semibold uppercase leading-4 tracking-[0.09em] text-white/[0.5]">
                            {principle}
                        </span>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="relative z-10 mt-5 flex items-center justify-between border-t border-white/[0.1] pt-4">
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                    <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-white/[0.46]">
                        Product · Experience · Engineering
                    </span>
                </div>

                <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white">
                    One team
                </span>
            </div>
        </div>
    );
}