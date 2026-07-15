import { ArrowDownRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';

export function PageIntro({
  eyebrow,
  title,
  description,
  aside,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  aside?: React.ReactNode;
}) {
  return (
    <section
      data-chapter="Overview"
      className="relative min-h-[76svh] overflow-hidden border-b border-border pb-20 pt-36 md:pb-28 md:pt-44 lg:flex lg:min-h-[840px] lg:items-end lg:pb-32 lg:pt-48"
    >
      <div className="grid-lines absolute inset-0 opacity-30" />
      <div className="noise" />
      <span className="absolute right-[5%] top-24 h-72 w-72 rounded-full bg-accent/[0.075] blur-[100px]" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[0.25em] -left-[0.04em] select-none text-[28vw] font-semibold leading-none tracking-[-0.1em] text-foreground/[0.018]"
      >
        A
      </span>
      <div
        aria-hidden="true"
        className="absolute right-[8%] top-[24%] hidden h-36 w-36 rounded-full border border-border/80 lg:block"
      >
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        <span className="absolute left-1/2 top-1/2 h-px w-48 origin-left rotate-[28deg] bg-border/80" />
      </div>
      <Container className="relative w-full">
        <div className="text-micro mb-12 flex items-center justify-between border-b border-border pb-4 text-muted">
          <span className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
          <span>Asheratech / Studio index</span>
        </div>
        <div className="grid gap-14 lg:grid-cols-[1.34fr_0.66fr] lg:items-end lg:gap-20">
          <Reveal variant="mask">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="max-w-[14ch] text-[clamp(3.75rem,8.2vw,8.5rem)] font-semibold leading-[0.865] tracking-[-0.075em] text-foreground">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.1} variant="scale" className="lg:pb-2">
            <div className="relative border-l border-border pl-6 md:pl-8">
              <span className="absolute -left-[3px] top-0 h-1.5 w-1.5 rounded-full bg-accent" />
              <p className="max-w-xl text-lg leading-9 text-muted md:text-xl md:leading-9">
                {description}
              </p>
              {aside && <div className="mt-8">{aside}</div>}
              <div className="text-micro mt-10 flex items-center gap-3 text-muted">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
                  <ArrowDownRight className="h-4 w-4" />
                </span>
                Continue through the studio
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
