import {
  Check,
  CircleDollarSign,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Project } from '@/data/projects';

const visualStyles = {
  green:
    'from-[#d8ffe7] via-[#f4fff7] to-[#bbfbd2] dark:from-[#10281c] dark:via-[#0d1b14] dark:to-[#173525]',
  blue: 'from-[#dcecff] via-[#f5f9ff] to-[#c8dcff] dark:from-[#112138] dark:via-[#0d1828] dark:to-[#172d4b]',
  slate:
    'from-[#e3e9f2] via-[#f8fafc] to-[#d3dce9] dark:from-[#182235] dark:via-[#0d1625] dark:to-[#24324a]',
  mint: 'from-[#d8fff4] via-[#f4fffb] to-[#b9f5e5] dark:from-[#102b25] dark:via-[#0d1b19] dark:to-[#173d34]',
} as const;

export function ProjectVisual({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative isolate min-h-[340px] overflow-hidden rounded-[1.6rem] bg-gradient-to-br p-5 sm:min-h-[420px] sm:p-8',
        visualStyles[project.accent],
        className,
      )}
    >
      <div className="grid-lines absolute inset-0 opacity-45" />
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/55 blur-3xl dark:bg-accent/5" />
      {project.visual === 'payments' && <PaymentVisual />}
      {project.visual === 'assets' && <AssetVisual />}
      {project.visual === 'health' && <HealthVisual />}
      {project.visual === 'operations' && <OperationsVisual />}
    </div>
  );
}

function WindowFrame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="absolute inset-x-5 top-8 overflow-hidden rounded-[1.25rem] border border-white/70 bg-white/90 shadow-card backdrop-blur-sm transition duration-700 group-hover/project:-translate-y-2 group-hover/project:scale-[1.015] dark:border-white/10 dark:bg-[#101b2c]/[0.92] sm:inset-x-10 sm:top-12">
      <div className="flex h-11 items-center gap-2 border-b border-slate-200/80 px-4 dark:border-white/10">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff8a8a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffd36b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600 dark:text-white/65">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

function PaymentVisual() {
  const bars = [38, 55, 44, 70, 62, 84, 74, 92, 78, 96];
  return (
    <>
      <WindowFrame label="Payment operations">
        <div className="grid min-h-[270px] grid-cols-[72px_1fr] sm:grid-cols-[110px_1fr]">
          <div className="border-r border-slate-200/80 p-3 dark:border-white/10 sm:p-4">
            <div className="mb-7 h-7 w-7 rounded-lg bg-navy-900 dark:bg-white" />
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={cn(
                    'h-2 rounded-full',
                    item === 1
                      ? 'w-full bg-accent'
                      : 'w-4/5 bg-slate-200 dark:bg-white/10',
                  )}
                />
              ))}
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600 dark:text-white/65">
                  Processed volume
                </p>
                <p className="mt-2 text-2xl font-bold tracking-[-0.04em] text-navy-900 dark:text-white">
                  $284,920
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#dffbe9] px-2.5 py-1 text-[10px] font-semibold text-[#08783a] dark:bg-accent/15 dark:text-accentText">
                <TrendingUp className="h-3 w-3" /> 12.8%
              </span>
            </div>
            <div className="mt-6 flex h-24 items-end gap-1.5 sm:gap-2">
              {bars.map((bar, index) => (
                <span
                  key={index}
                  className={cn(
                    'flex-1 rounded-t-sm',
                    index > 6
                      ? 'bg-accent'
                      : 'bg-slate-200 dark:bg-white/[0.12]',
                  )}
                  style={{ height: `${bar}%` }}
                />
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {['Succeeded', 'Pending', 'Review'].map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl bg-slate-50 p-2.5 dark:bg-white/5"
                >
                  <p className="text-[9px] text-slate-600 dark:text-white/65">
                    {item}
                  </p>
                  <p className="mt-1 text-sm font-bold text-navy-900 dark:text-white">
                    {[93, 5, 2][index]}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WindowFrame>
      <div className="absolute bottom-5 right-4 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-float dark:border-white/10 dark:bg-[#111c2d]/[0.95] sm:bottom-8 sm:right-7">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/20 text-[#08783a] dark:text-accentText">
          <ShieldCheck className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[9px] uppercase tracking-[0.12em] text-slate-600 dark:text-white/65">
            Risk engine
          </p>
          <p className="text-xs font-semibold text-navy-900 dark:text-white">
            All systems clear
          </p>
        </div>
      </div>
    </>
  );
}

function AssetVisual() {
  return (
    <>
      <WindowFrame label="Digital assets">
        <div className="min-h-[270px] p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.14em] text-slate-600 dark:text-white/65">
                Portfolio value
              </p>
              <p className="mt-2 text-2xl font-bold tracking-[-0.04em] text-navy-900 dark:text-white">
                $128,450
              </p>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 dark:border-[#101b2c] dark:bg-white/15"
                />
              ))}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              ['Real estate', '62%', 'bg-accent'],
              ['Private credit', '24%', 'bg-[#74a7ff]'],
              ['Treasuries', '14%', 'bg-slate-300 dark:bg-white/20'],
              ['Available', '$18.4k', 'bg-navy-900 dark:bg-white'],
            ].map(([label, value, color]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200/80 bg-white p-3 dark:border-white/10 dark:bg-white/5"
              >
                <span className={cn('block h-2 w-7 rounded-full', color)} />
                <p className="mt-5 text-[9px] text-slate-600 dark:text-white/65">
                  {label}
                </p>
                <p className="mt-1 text-sm font-bold text-navy-900 dark:text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </WindowFrame>
      <div className="absolute bottom-5 left-3 rounded-2xl border border-white/80 bg-white/[0.92] p-3 shadow-float dark:border-white/10 dark:bg-[#111c2d]/[0.95] sm:bottom-8 sm:left-7">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#dcecff] text-[#2d6cc7] dark:bg-[#74a7ff]/15 dark:text-[#8bb6ff]">
            <CircleDollarSign className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[9px] uppercase tracking-[0.12em] text-slate-600 dark:text-white/65">
              Ownership
            </p>
            <p className="text-xs font-semibold text-navy-900 dark:text-white">
              Verified on-chain
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function HealthVisual() {
  return (
    <>
      <div className="absolute left-1/2 top-7 w-[220px] -translate-x-1/2 overflow-hidden rounded-[2rem] border-[7px] border-navy-900 bg-white shadow-card dark:border-[#dce5f2] dark:bg-[#101b2c] sm:top-10 sm:w-[250px]">
        <div className="mx-auto mt-2 h-4 w-20 rounded-full bg-navy-900 dark:bg-[#dce5f2]" />
        <div className="p-4 pt-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] text-slate-600 dark:text-white/65">
                Good morning
              </p>
              <p className="text-base font-bold text-navy-900 dark:text-white">
                Your care today
              </p>
            </div>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d8fff4] text-[#08785c] dark:bg-accent/10 dark:text-accentText">
              <HeartPulse className="h-4 w-4" />
            </span>
          </div>
          <div className="mt-5 rounded-2xl bg-[#e8fff1] p-4 dark:bg-accent/10">
            <p className="text-[9px] uppercase tracking-[0.12em] text-[#08785c] dark:text-accentText">
              Next appointment
            </p>
            <p className="mt-2 text-sm font-bold text-navy-900 dark:text-white">
              Follow-up consultation
            </p>
            <p className="mt-1 text-[10px] text-slate-600 dark:text-white/65">
              Today · 2:30 PM
            </p>
          </div>
          <div className="mt-4 space-y-2.5">
            {['Confirm symptoms', 'Prepare questions', 'Join consultation'].map(
              (item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 p-2.5 dark:border-white/10"
                >
                  <span
                    className={cn(
                      'inline-flex h-6 w-6 items-center justify-center rounded-full',
                      index === 0
                        ? 'bg-accent text-navy-950'
                        : 'bg-slate-100 text-slate-600 dark:bg-white/[0.08] dark:text-white/65',
                    )}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-[10px] font-medium text-navy-900 dark:text-white">
                    {item}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 right-4 rounded-2xl border border-white/80 bg-white/[0.92] p-3 shadow-float dark:border-white/10 dark:bg-[#111c2d]/[0.95] sm:bottom-8 sm:right-8">
        <p className="text-[9px] uppercase tracking-[0.12em] text-slate-600 dark:text-white/65">
          Care plan
        </p>
        <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-navy-900 dark:text-white">
          <Sparkles className="h-3.5 w-3.5 text-accentText" /> 3 of 4 complete
        </p>
      </div>
    </>
  );
}

function OperationsVisual() {
  const rows = [
    ['Review vendor risk', 'In review', 'AL'],
    ['Approve release plan', 'Ready', 'KM'],
    ['Resolve data exception', 'Blocked', 'JP'],
  ];
  return (
    <>
      <WindowFrame label="Operations workspace">
        <div className="min-h-[270px] p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.14em] text-slate-600 dark:text-white/65">
                Active operations
              </p>
              <p className="mt-2 text-xl font-bold text-navy-900 dark:text-white">
                Command workspace
              </p>
            </div>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-white/[0.08] dark:text-white/60">
              <Users className="h-4 w-4" />
            </span>
          </div>
          <div className="mt-6 space-y-2.5">
            {rows.map(([task, state, owner], index) => (
              <div
                key={task}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3 dark:border-white/10 dark:bg-white/5"
              >
                <span className="text-[10px] font-medium text-navy-900 dark:text-white">
                  {task}
                </span>
                <span
                  className={cn(
                    'rounded-full px-2 py-1 text-[8px] font-semibold',
                    index === 1
                      ? 'bg-accent/20 text-[#08783a] dark:text-accentText'
                      : 'bg-slate-100 text-slate-500 dark:bg-white/[0.08] dark:text-white/50',
                  )}
                >
                  {state}
                </span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-navy-900 text-[8px] font-bold text-white dark:bg-white dark:text-navy-950">
                  {owner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </WindowFrame>
      <div className="absolute bottom-5 left-4 rounded-2xl border border-white/80 bg-white/[0.92] px-4 py-3 shadow-float dark:border-white/10 dark:bg-[#111c2d]/[0.95] sm:bottom-8 sm:left-8">
        <p className="text-[9px] uppercase tracking-[0.12em] text-slate-600 dark:text-white/65">
          Operational signal
        </p>
        <p className="mt-1 text-xs font-semibold text-navy-900 dark:text-white">
          7 items need attention
        </p>
      </div>
    </>
  );
}
