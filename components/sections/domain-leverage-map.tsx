import {
  Box,
  Building2,
  CircleDollarSign,
  Network,
  Smartphone,
} from 'lucide-react';

const domainNodes = [
  {
    code: 'FIN',
    label: 'Money systems',
    icon: CircleDollarSign,
    position: 'left-6 top-[82px] xl:left-8',
  },
  {
    code: 'WEB3',
    label: 'Digital assets',
    icon: Box,
    position: 'right-6 top-[82px] xl:right-8',
  },
  {
    code: 'ENT',
    label: 'Operations',
    icon: Building2,
    position: 'bottom-[62px] left-6 xl:left-8',
  },
  {
    code: 'MOB',
    label: 'Everyday use',
    icon: Smartphone,
    position: 'bottom-[62px] right-6 xl:right-8',
  },
];

export function DomainLeverageMap() {
  return (
    <div
      aria-hidden="true"
      className="surface-depth group relative h-[320px] overflow-hidden rounded-[2rem] border border-border/80 bg-card/80 shadow-[0_35px_90px_-55px_rgba(24,31,56,.5)] backdrop-blur-xl dark:shadow-[0_35px_90px_-55px_rgba(0,0,0,.9)] xl:h-[340px]"
    >
      {/* Background texture */}
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[70px] transition duration-700 group-hover:bg-accent/[0.12]" />

      {/* Header */}
      <div className="relative z-20 flex items-center justify-between border-b border-border/70 px-6 py-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
            Domain intelligence
          </p>

          <p className="mt-1 text-sm font-semibold tracking-[-0.02em] text-foreground">
            Connected leverage map
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>

          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
            4 leverage zones
          </span>
        </div>
      </div>

      {/* Connection lines */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-10 bottom-12 top-[67px] z-0 h-[205px] w-[calc(100%-5rem)]"
      >
        <line
          x1="50"
          y1="50"
          x2="16"
          y2="19"
          className="stroke-border"
          strokeWidth="0.35"
          strokeDasharray="2 2"
        />

        <line
          x1="50"
          y1="50"
          x2="84"
          y2="19"
          className="stroke-border"
          strokeWidth="0.35"
          strokeDasharray="2 2"
        />

        <line
          x1="50"
          y1="50"
          x2="16"
          y2="81"
          className="stroke-border"
          strokeWidth="0.35"
          strokeDasharray="2 2"
        />

        <line
          x1="50"
          y1="50"
          x2="84"
          y2="81"
          className="stroke-border"
          strokeWidth="0.35"
          strokeDasharray="2 2"
        />
      </svg>

      {/* Radar rings */}
      <div className="pointer-events-none absolute left-1/2 top-[53%] z-0 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70" />

      <div className="pointer-events-none absolute left-1/2 top-[53%] z-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70" />

      <div className="pointer-events-none absolute left-1/2 top-[53%] z-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/30" />

      {/* Rotating signal */}
      <div className="pointer-events-none absolute left-1/2 top-[53%] z-10 h-44 w-44 -translate-x-1/2 -translate-y-1/2 animate-[spin_12s_linear_infinite] rounded-full motion-reduce:animate-none">
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card bg-accent shadow-[0_0_0_5px_rgba(0,224,92,.1),0_0_22px_rgba(0,224,92,.55)]" />
      </div>

      {/* Central hub */}
      <div className="absolute left-1/2 top-[53%] z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-24 w-24 flex-col items-center justify-center rounded-[1.6rem] border border-border bg-card shadow-[0_24px_60px_-30px_rgba(24,31,56,.55)] transition duration-700 group-hover:border-accent/60 group-hover:shadow-[0_24px_70px_-30px_rgba(0,224,92,.35)]">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/[0.15] text-foreground">
            <Network className="h-4 w-4" />
          </span>

          <span className="mt-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
            Leverage
          </span>

          <span className="mt-0.5 text-xs font-semibold text-foreground">
            Core
          </span>
        </div>
      </div>

      {/* Domain nodes */}
      {domainNodes.map((domain) => {
        const Icon = domain.icon;

        return (
          <div
            key={domain.code}
            className={`absolute z-20 ${domain.position}`}
          >
            <div className="group/node flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-[0_14px_35px_-20px_rgba(24,31,56,.55)] transition duration-500 group-hover/node:-translate-y-1 group-hover/node:border-accent group-hover/node:bg-accent group-hover/node:text-accent-foreground">
                <Icon className="h-4 w-4" />
              </span>

              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-muted">
                  {domain.code}
                </p>

                <p className="mt-0.5 whitespace-nowrap text-[10px] font-semibold text-foreground">
                  {domain.label}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Footer */}
      <div className="absolute inset-x-6 bottom-0 z-20 flex items-center justify-between border-t border-border/70 py-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-muted">
            Risk-aware architecture
          </span>
        </div>

        <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-foreground">
          Built to adapt
        </span>
      </div>
    </div>
  );
}