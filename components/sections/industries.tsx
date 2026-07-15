import { ArrowUpRight } from 'lucide-react';
import { industries } from '@/data/site';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

export function Industries() {
  return (
    <section data-chapter="Industries" className="section-shell">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Where we create leverage"
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
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-2 lg:mt-24">
          {industries.map((industry, index) => (
            <Reveal
              key={industry.code}
              delay={index * 0.055}
              className="h-full"
            >
              <article className="surface-depth kinetic-rule group relative flex h-full min-h-[360px] flex-col overflow-hidden bg-card p-8 transition duration-700 hover:bg-navy-900 hover:text-white md:p-10">
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.17em] text-muted transition group-hover:text-white/55">
                    {industry.code}
                  </span>
                  <span className="icon-orbit inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition duration-500 group-hover:rotate-12 group-hover:border-accent group-hover:bg-accent group-hover:text-navy-950">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="relative z-10 mt-auto pt-24">
                  <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted transition group-hover:text-accentText">
                    0{index + 1} / Industry
                  </span>
                  <h3 className="text-[clamp(2rem,3.6vw,3.4rem)] font-semibold leading-[1] tracking-[-0.055em] text-foreground transition group-hover:text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-muted transition group-hover:text-white/60 md:text-base">
                    {industry.description}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute right-7 top-20 text-[7rem] font-semibold leading-none tracking-[-0.08em] text-foreground/[0.025] transition group-hover:text-white/[0.035]"
                >
                  0{index + 1}
                </span>
                <span className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-accent/0 blur-3xl transition duration-700 group-hover:bg-accent/15" />
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
