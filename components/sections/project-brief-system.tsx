'use client';

import {
    Check,
    Clock3,
    Compass,
    Lightbulb,
    Route,
    ShieldAlert,
    Sparkles,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const briefInputs = [
    {
        number: '01',
        label: 'Opportunity',
        detail: 'What should become possible?',
        icon: Lightbulb,
    },
    {
        number: '02',
        label: 'Constraints',
        detail: 'What must we work around?',
        icon: ShieldAlert,
    },
    {
        number: '03',
        label: 'Urgency',
        detail: 'Why does the moment matter now?',
        icon: Clock3,
    },
];

const clarityOutputs = [
    {
        label: 'Context',
        value: 'Understood',
    },
    {
        label: 'Priority',
        value: 'Visible',
    },
    {
        label: 'Next move',
        value: 'Defined',
    },
];

export function ProjectBriefSystem() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div
            role="img"
            aria-label="Project briefing system that turns opportunity, constraints and urgency into a clear next step."
            className="surface-depth group relative min-h-[318px] overflow-hidden rounded-[2rem] border border-border/80 bg-card/85 p-6 shadow-[0_38px_95px_-58px_rgba(24,31,56,.58)] backdrop-blur-xl dark:shadow-[0_38px_95px_-58px_rgba(0,0,0,.95)] xl:p-7"
        >
            {/* Background */}
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
                className="pointer-events-none absolute -right-3 top-20 select-none text-[5.5rem] font-semibold leading-none tracking-[-0.09em] text-foreground/[0.025]"
            >
                BRIEF
            </span>

            {/* Header */}
            <div className="relative z-20 flex items-start justify-between border-b border-border/70 pb-4">
                <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground">
                        <Compass className="h-4 w-4" />
                    </span>

                    <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
                            Project signal intake
                        </p>

                        <p className="mt-1 text-sm font-semibold tracking-[-0.025em] text-foreground">
                            Context before solutions
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-border/70 bg-surface/75 px-3 py-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />

                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>

                    <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Listening
                    </span>
                </div>
            </div>

            <div className="relative z-10 mt-5 grid grid-cols-[1.1fr_30px_.9fr] items-stretch gap-3">
                {/* Brief inputs */}
                <div className="space-y-2">
                    {briefInputs.map((input, index) => {
                        const Icon = input.icon;

                        return (
                            <motion.div
                                key={input.label}
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
                                className="group/input flex min-h-[58px] items-center gap-3 rounded-xl border border-border/70 bg-surface/55 px-3 py-2.5 transition duration-300 hover:border-accent/45 hover:bg-card"
                            >
                                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-foreground transition duration-300 group-hover/input:border-accent group-hover/input:bg-accent/15">
                                    <Icon className="h-3.5 w-3.5" />
                                </span>

                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[7px] font-semibold tracking-[0.14em] text-accentText">
                                            {input.number}
                                        </span>

                                        <p className="text-[9px] font-semibold text-foreground">
                                            {input.label}
                                        </p>
                                    </div>

                                    <p className="mt-0.5 truncate text-[7px] leading-4 text-muted">
                                        {input.detail}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Translation rail */}
                <div className="relative flex items-center justify-center">
                    <div className="absolute inset-y-2 left-1/2 w-px -translate-x-1/2 bg-border" />

                    {!shouldReduceMotion && (
                        <motion.span
                            aria-hidden="true"
                            className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-card bg-accent shadow-[0_0_0_5px_rgba(0,224,92,.11),0_0_22px_rgba(0,224,92,.6)]"
                            animate={{
                                top: ['7%', '88%', '7%'],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    )}

                    <span className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-[0_14px_35px_-22px_rgba(24,31,56,.6)]">
                        <Route className="h-3.5 w-3.5" />
                    </span>
                </div>

                {/* Clear path result */}
                <div className="flex flex-col rounded-2xl border border-accent/25 bg-accent/[0.055] p-4">
                    <div className="flex items-start justify-between">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                            <Sparkles className="h-4 w-4" />
                        </span>

                        <span className="text-[7px] font-semibold uppercase tracking-[0.13em] text-accentText">
                            Output 01
                        </span>
                    </div>

                    <p className="mt-4 text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
                        First conversation
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-[1.15] tracking-[-0.035em] text-foreground">
                        A clear and useful starting point.
                    </p>

                    <div className="mt-4 space-y-2">
                        {clarityOutputs.map((output, index) => (
                            <motion.div
                                key={output.label}
                                initial={
                                    shouldReduceMotion
                                        ? false
                                        : {
                                            opacity: 0,
                                            y: 7,
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
                                    delay: 0.28 + index * 0.08,
                                }}
                                className="flex items-center justify-between border-t border-border/65 pt-2"
                            >
                                <span className="text-[7px] font-semibold uppercase tracking-[0.11em] text-muted">
                                    {output.label}
                                </span>

                                <span className="inline-flex items-center gap-1 text-[8px] font-semibold text-foreground">
                                    <Check className="h-2.5 w-2.5 text-accentText" />
                                    {output.value}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-20 mt-5 flex items-center justify-between border-t border-border/70 pt-4">
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                    <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-muted">
                        No sales script
                    </span>
                </div>

                <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-foreground">
                    Context first
                </span>
            </div>
        </div>
    );
}