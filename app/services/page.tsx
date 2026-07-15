import type { Metadata } from 'next';
import { ArrowDownRight, Check } from 'lucide-react';
import { serviceDetails, servicePractices } from '@/data/services';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { PageIntro } from '@/components/ui/page-intro';
import { Reveal } from '@/components/motion/reveal';
import { Process } from '@/components/sections/process';
import { Technology } from '@/components/sections/technology';
import { FinalCta } from '@/components/sections/final-cta';

export const metadata: Metadata = createMetadata({
  title: 'Services',
  description:
    'Integrated product strategy, experience design, software engineering, fintech and Web3 capabilities for complex digital products.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title={
          <>
            From first signal to{' '}
            <span className="text-gradient">production reality.</span>
          </>
        }
        description="A senior, integrated team for the moments when product ambition, customer experience and technical complexity must move together."
        aside={
          <a
            href="#practices"
            className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted transition hover:text-foreground"
          >
            Explore our practices <ArrowDownRight className="h-4 w-4" />
          </a>
        }
      />

      <section
        data-chapter="Practices"
        id="practices"
        className="section-shell"
      >
        <Container>
          <div className="space-y-6">
            {servicePractices.map((practice, index) => {
              const Icon = practice.icon;
              return (
                <Reveal key={practice.slug}>
                  <article
                    id={practice.slug}
                    className="surface-depth scroll-mt-28 overflow-hidden rounded-[1.8rem] border border-border bg-card"
                  >
                    <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
                      <div className="relative flex min-h-[310px] flex-col overflow-hidden bg-surface p-7 md:p-10">
                        <div className="flex items-center justify-between">
                          <span className="icon-orbit inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-card text-foreground shadow-float">
                            <Icon className="h-6 w-6" />
                          </span>
                          <span className="text-xs font-semibold text-muted">
                            0{index + 1}
                          </span>
                        </div>
                        <div className="mt-auto pt-20">
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-muted">
                            {practice.eyebrow}
                          </p>
                          <h2 className="mt-4 text-title font-semibold text-foreground">
                            {practice.title}
                          </h2>
                        </div>
                        <span className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
                      </div>
                      <div className="p-7 md:p-10 lg:p-12">
                        <p className="max-w-2xl text-lg leading-8 text-muted">
                          {practice.description}
                        </p>
                        <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                          {practice.capabilities.map((capability) => (
                            <li
                              key={capability}
                              className="group/item flex items-center gap-3 rounded-xl border border-border bg-surface/45 px-4 py-3 text-sm font-medium text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-card"
                            >
                              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/15">
                                <Check className="h-3.5 w-3.5 text-accentText" />
                              </span>
                              {capability}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        data-chapter="Engagements"
        className="section-shell bg-surface/55"
      >
        <Container>
          <Reveal>
            <span className="eyebrow">Focused engagements</span>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <h2 className="text-display font-semibold text-foreground">
                Bring us the product moment that needs senior attention.
              </h2>
              <p className="max-w-xl text-base leading-8 text-muted md:text-lg">
                Engage Asheratech for an end-to-end product build or a focused
                intervention around discovery, design, architecture or
                modernization.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal
                  key={service.title}
                  delay={index * 0.045}
                  className="h-full"
                >
                  <article className="surface-depth kinetic-rule h-full rounded-[1.5rem] border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-card">
                    <span className="icon-orbit inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface">
                      <Icon className="h-5 w-5 text-accentText" />
                    </span>
                    <h3 className="mt-10 text-xl font-semibold tracking-[-0.025em] text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {service.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <Process />
      <Technology />
      <FinalCta />
    </>
  );
}
