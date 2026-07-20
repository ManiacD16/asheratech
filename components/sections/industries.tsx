import { ArrowUpRight } from 'lucide-react';
import { industries } from '@/data/site';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';
import { DomainLeverageMap } from '@/components/sections/domain-leverage-map';
import { IndustryCardGraphic } from '@/components/sections/industry-card-graphic';

export function Industries() {
  return (
    <section data-chapter="Industries" className="section-shell">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.28fr)_minmax(380px,0.72fr)] lg:gap-12 xl:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Where we create leverage"
              className="max-w-[800px]"
              title={
                <>
                  Deep enough for the domain.{' '}
                  <span className="text-gradient">
                    Flexible enough for the future.
                  </span>
                </>
              }
              description="We are most useful where technical complexity, operational risk and customer experience intersect."
            />
          </Reveal>

          <Reveal delay={0.12} className="hidden lg:block">
            <DomainLeverageMap />
          </Reveal>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-2 lg:mt-16">
          {industries.map((industry, index) => (
            <Reveal
              key={industry.code}
              delay={index * 0.055}
              className="h-full"
            >
              <article className="surface-depth kinetic-rule group relative flex h-full min-h-[320px] flex-col overflow-hidden bg-card p-8 transition duration-700 hover:bg-navy-900 hover:text-white md:min-h-[420px] md:p-10">
                <IndustryCardGraphic variant={industry.code} />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.17em] text-muted transition group-hover:text-white/55">
                    {industry.code}
                  </span>
                  <span className="icon-orbit inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition duration-500 group-hover:rotate-12 group-hover:border-accent group-hover:bg-accent group-hover:text-navy-950">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="relative z-10 mt-auto pt-28 md:pt-32">
                  <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted transition group-hover:text-accentText">
                    0{index + 1} / Industry
                  </span>

                  <h3 className="max-w-[13ch] text-[clamp(2rem,3.6vw,3.4rem)] font-semibold leading-[1] tracking-[-0.055em] text-foreground transition group-hover:text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-muted transition group-hover:text-white/60 md:text-base">
                    {industry.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute right-7 top-20 z-[1] text-[7rem] font-semibold leading-none tracking-[-0.08em] text-foreground/[0.025] transition group-hover:text-white/[0.035]"
                >
                  0{index + 1}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
