import { disciplines } from '@/data/site';

export function ProofStrip() {
  const repeated = [...disciplines, ...disciplines, ...disciplines];
  return (
    <section
      data-chapter="Disciplines"
      aria-label="Asheratech disciplines"
      className="border-y border-border bg-surface/55 py-5"
    >
      <div className="marquee-mask overflow-hidden">
        <div 
  className="flex w-max animate-marquee items-center transition-[animation-play-state] hover:[animation-play-state:paused] motion-reduce:animate-none"
  style={{ animationDuration: '90s' }}
>
          {repeated.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="px-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted transition hover:text-foreground md:px-14">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
