import { ArrowUpRight } from 'lucide-react';
import { principles } from '@/data/site';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

export function Principles() {
  return (
    <section data-chapter="Principles" className="section-shell">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.76fr_1.24fr] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Why Asheratech"
                title="Built to reduce the distance between thinking and shipping."
                description="The way we work is designed for complex products where clarity, control and technical judgment matter."
              />
            </div>
          </Reveal>
          <div className="border-t border-border">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 0.05}>
                <div className="kinetic-rule group relative grid gap-5 overflow-hidden border-b border-border py-8 sm:grid-cols-[76px_1fr_auto] md:py-11">
                  <span className="relative z-10 text-xs font-semibold text-accentText">
                    {principle.number}
                  </span>
                  <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground md:text-3xl">
                      {principle.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-muted md:text-base">
                      {principle.copy}
                    </p>
                  </div>
                  <span className="icon-orbit relative z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-border sm:inline-flex">
                    <ArrowUpRight className="h-5 w-5 text-muted opacity-0 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accentText group-hover:opacity-100" />
                  </span>
                  <span className="absolute inset-y-0 left-0 w-0 bg-surface/75 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
