'use client';

import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Blocks,
  Building2,
  Check,
  CircleCheckBig,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Fingerprint,
  HeartPulse,
  KeyRound,
  RefreshCcw,
  Route,
  ShieldCheck,
  Smartphone,
  TriangleAlert,
  UserRoundCheck,
  WalletCards,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Project } from '@/data/projects';

type ProjectHeroSystemProps = {
  project: Project;
};

type SystemConfig = {
  eyebrow: string;
  title: string;
  status: string;
  stages: Array<{
    label: string;
    detail: string;
    icon: LucideIcon;
  }>;
  signals: Array<{
    label: string;
    value: string;
    icon: LucideIcon;
  }>;
  footerLeft: string;
  footerRight: string;
};

const systemConfigs: Record<Project['visual'], SystemConfig> = {
  payments: {
    eyebrow: 'Payment operations system',
    title: 'One command center',
    status: 'Rails connected',
    stages: [
      {
        label: 'Captured',
        detail: 'Payment accepted',
        icon: CreditCard,
      },
      {
        label: 'Processing',
        detail: 'Rail in motion',
        icon: RefreshCcw,
      },
      {
        label: 'Exception',
        detail: 'Action required',
        icon: TriangleAlert,
      },
      {
        label: 'Settled',
        detail: 'Funds confirmed',
        icon: CircleCheckBig,
      },
    ],
    signals: [
      {
        label: 'Transaction state',
        value: 'Visible',
        icon: Activity,
      },
      {
        label: 'Exception owner',
        value: 'Assigned',
        icon: UserRoundCheck,
      },
      {
        label: 'Settlement',
        value: 'Reconciled',
        icon: CircleDollarSign,
      },
    ],
    footerLeft: 'Operations · Exceptions · Settlement',
    footerRight: '24/7 visibility',
  },

  assets: {
    eyebrow: 'Digital ownership system',
    title: 'Ownership made legible',
    status: 'Assets connected',
    stages: [
      {
        label: 'Identity',
        detail: 'Investor verified',
        icon: Fingerprint,
      },
      {
        label: 'Custody',
        detail: 'Wallet ready',
        icon: WalletCards,
      },
      {
        label: 'Asset',
        detail: 'Offering visible',
        icon: Blocks,
      },
      {
        label: 'Ownership',
        detail: 'Position confirmed',
        icon: ShieldCheck,
      },
    ],
    signals: [
      {
        label: 'Identity state',
        value: 'Verified',
        icon: Fingerprint,
      },
      {
        label: 'Custody access',
        value: 'Ready',
        icon: KeyRound,
      },
      {
        label: 'Asset position',
        value: 'Visible',
        icon: Blocks,
      },
    ],
    footerLeft: 'Identity · Custody · Assets',
    footerRight: 'Ownership clear',
  },

  health: {
    eyebrow: 'Connected care system',
    title: 'One calm care journey',
    status: 'Care synchronized',
    stages: [
      {
        label: 'Prepare',
        detail: 'Next visit ready',
        icon: Clock3,
      },
      {
        label: 'Connect',
        detail: 'Care team visible',
        icon: HeartPulse,
      },
      {
        label: 'Act',
        detail: 'Next step clear',
        icon: Route,
      },
      {
        label: 'Progress',
        detail: 'Journey updated',
        icon: CircleCheckBig,
      },
    ],
    signals: [
      {
        label: 'Care status',
        value: 'Current',
        icon: HeartPulse,
      },
      {
        label: 'Next action',
        value: 'Visible',
        icon: Route,
      },
      {
        label: 'Mobile access',
        value: 'Available',
        icon: Smartphone,
      },
    ],
    footerLeft: 'Appointments · Tasks · Progress',
    footerRight: 'Patient ready',
  },

  operations: {
    eyebrow: 'Enterprise operations system',
    title: 'Work made visible',
    status: 'Teams connected',
    stages: [
      {
        label: 'Intake',
        detail: 'Request captured',
        icon: Building2,
      },
      {
        label: 'Coordinate',
        detail: 'Ownership clear',
        icon: UserRoundCheck,
      },
      {
        label: 'Resolve',
        detail: 'Work completed',
        icon: Check,
      },
      {
        label: 'Monitor',
        detail: 'Risk visible',
        icon: Activity,
      },
    ],
    signals: [
      {
        label: 'Work state',
        value: 'Visible',
        icon: Activity,
      },
      {
        label: 'Ownership',
        value: 'Assigned',
        icon: UserRoundCheck,
      },
      {
        label: 'Operational risk',
        value: 'Tracked',
        icon: ShieldCheck,
      },
    ],
    footerLeft: 'Workflow · Ownership · Risk',
    footerRight: 'Operations aligned',
  },
};

export function ProjectHeroSystem({
  project,
}: ProjectHeroSystemProps) {
  const shouldReduceMotion = useReducedMotion();
  const config = systemConfigs[project.visual];

  return (
    <div
      role="img"
      aria-label={`${config.title}. ${config.stages
        .map((stage) => stage.label)
        .join(', ')}.`}
      className="surface-depth group relative min-h-[342px] overflow-hidden rounded-[2rem] border border-border/80 bg-card/85 p-6 shadow-[0_38px_95px_-58px_rgba(24,31,56,.58)] backdrop-blur-xl dark:shadow-[0_38px_95px_-58px_rgba(0,0,0,.95)] xl:p-7"
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
        className="pointer-events-none absolute -right-3 top-20 select-none text-[5.6rem] font-semibold leading-none tracking-[-0.09em] text-foreground/[0.025]"
      >
        01—04
      </span>

      <div className="relative z-20 flex items-start justify-between border-b border-border/70 pb-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
            {config.eyebrow}
          </p>

          <p className="mt-1 text-sm font-semibold tracking-[-0.025em] text-foreground">
            {config.title}
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-border/70 bg-surface/75 px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>

          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
            {config.status}
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-7">
        <div className="absolute left-[8%] right-[8%] top-5 h-px bg-border">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/85 to-accent/10" />

          {!shouldReduceMotion && (
            <motion.span
              aria-hidden="true"
              className="absolute -top-[5px] h-[11px] w-[11px] rounded-full border-2 border-card bg-accent shadow-[0_0_0_5px_rgba(0,224,92,.11),0_0_22px_rgba(0,224,92,.6)]"
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
          {config.stages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <motion.div
                key={stage.label}
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
                  duration: 0.48,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group/stage flex flex-col items-center text-center"
              >
                <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-[0_14px_35px_-20px_rgba(24,31,56,.5)] transition duration-500 group-hover/stage:-translate-y-1 group-hover/stage:border-accent group-hover/stage:bg-accent group-hover/stage:text-accent-foreground">
                  <Icon className="h-4 w-4" />
                </span>

                <span className="mt-3 text-[8px] font-semibold uppercase tracking-[0.1em] text-foreground">
                  {stage.label}
                </span>

                <span className="mt-1 max-w-[70px] text-[7px] leading-3 text-muted">
                  {stage.detail}
                </span>

                <span className="mt-1.5 text-[7px] font-semibold tracking-[0.13em] text-accentText">
                  0{index + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mt-7 grid grid-cols-3 gap-2">
        {config.signals.map((signal, index) => {
          const Icon = signal.icon;

          return (
            <motion.div
              key={signal.label}
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
                delay: 0.32 + index * 0.08,
              }}
              className="group/signal rounded-xl border border-border/70 bg-surface/55 p-3 transition duration-300 hover:border-accent/45 hover:bg-card"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-card text-foreground transition group-hover/signal:border-accent group-hover/signal:bg-accent/15">
                  <Icon className="h-3 w-3" />
                </span>

                <Check className="h-3 w-3 text-accentText" />
              </div>

              <p className="mt-3 text-[7px] font-semibold uppercase tracking-[0.11em] text-muted">
                {signal.label}
              </p>

              <p className="mt-1 text-[9px] font-semibold text-foreground">
                {signal.value}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-20 mt-5 flex items-center justify-between border-t border-border/70 pt-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-muted">
            {config.footerLeft}
          </span>
        </div>

        <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-foreground">
          {config.footerRight}
        </span>
      </div>
    </div>
  );
}