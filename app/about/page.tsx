import type { Metadata } from 'next';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { disciplines, principles } from '@/data/site';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { PageIntro } from '@/components/ui/page-intro';
import { Reveal } from '@/components/motion/reveal';
import { Button } from '@/components/ui/button';
import { FinalCta } from '@/components/sections/final-cta';
import { ProductDirectionSystem } from '@/components/sections/product-direction-system';
import { WorkingRelationshipSystem } from '@/components/sections/working-relationship-system';
import { TrustEnvironmentMap } from '@/components/sections/trust-environment-map';

export const metadata: Metadata = createMetadata({
  title: 'About',
  description:
    'Meet the thinking behind Asheratech: a senior, product-minded digital agency built to make complex systems clear and useful.',
  path: '/about',
});

const values = [
  {
    title: 'Clarity is a deliverable',
    body: 'A project should leave the product, system and next decision more understandable than we found them.',
  },
  {
    title: 'Useful beats impressive',
    body: 'We care about beauty and craft, but never at the expense of comprehension, accessibility or operational reality.',
  },
  {
    title: 'Systems create consistency',
    body: 'Reusable patterns, explicit boundaries and shared language help products evolve without losing coherence.',
  },
  {
    title: 'Ownership earns trust',
    body: 'We surface risks early, explain trade-offs directly and stay accountable to the outcome-not only the output.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Asheratech"
        title={
          <>
            Less theatre. More{' '}
            <span className="text-gradient">useful momentum.</span>
          </>
        }
        description="We are a digital product and engineering agency for teams solving difficult problems. Our job is to organize complexity into decisions, systems and products people can trust."
        aside={
          <Button href="/contact" variant="secondary">
            Work with us
          </Button>
        }
      />

      <section data-chapter="Point of view" className="section-shell">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(480px,1.22fr)] lg:items-start lg:gap-16 xl:gap-20">
            <Reveal>
              <div>
                <span className="eyebrow">Our point of view</span>

                <h2 className="max-w-[8.5ch] text-display font-semibold text-foreground">
                  The best technology partner makes the problem smaller.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <div className="space-y-6 text-lg leading-9 text-muted">
                  <p>
                    Complex products rarely fail because a team cannot write code.
                    They fail because the opportunity stays vague, decisions become
                    disconnected and technical weight grows faster than shared
                    understanding.
                  </p>

                  <p>
                    Asheratech brings strategy, experience and engineering into one
                    conversation. That creates tighter feedback loops, fewer handoff
                    gaps and a clearer relationship between what users need, what the
                    business values and what the system must do.
                  </p>

                  <p>
                    We are especially useful in fintech, digital assets, mobile and
                    enterprise environments where trust, access, transaction state
                    and operational clarity cannot be left to chance.
                  </p>
                </div>

                <div className="mt-10 hidden lg:block">
                  <TrustEnvironmentMap />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <section
        data-chapter="Disciplines"
        className="section-shell bg-navy-950 text-white"
      >
        <div className="noise" />
        <Container className="relative">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(470px,1.28fr)] lg:items-start lg:gap-14 xl:gap-20">
              <div>
                <span className="eyebrow text-white/[0.48]">
                  What we bring together
                </span>

                <h2 className="max-w-[8ch] text-display font-semibold text-white">
                  Four disciplines. One shared product direction.
                </h2>
              </div>

              <div className="lg:pt-1">
                <div className="hidden lg:block">
                  <ProductDirectionSystem />
                </div>

                <p className="max-w-2xl text-base leading-8 text-white/[0.6] md:text-lg lg:mt-7">
                  Strong products emerge when commercial, customer and technical
                  decisions reinforce one another. Our model is designed around
                  that connection.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {disciplines.map((discipline, index) => (
              <Reveal key={discipline} delay={index * 0.06}>
                <div className="kinetic-rule group min-h-[250px] bg-navy-950 p-7 transition duration-700 hover:bg-white/[0.055] md:p-8">
                  <span className="text-xs font-semibold text-signal">
                    0{index + 1}
                  </span>
                  <h3 className="mt-24 text-2xl font-semibold tracking-[-0.035em] text-white transition-transform duration-500 group-hover:-translate-y-1">
                    {discipline}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section data-chapter="Values" className="section-shell">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(450px,1.22fr)] lg:gap-14 xl:gap-20">
            <Reveal>
              <div>
                <span className="eyebrow">How we show up</span>

                <h2 className="max-w-[9ch] text-display font-semibold text-foreground">
                  A working relationship designed around trust and traction.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="hidden lg:block">
              <WorkingRelationshipSystem />
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06} className="h-full">
                <article className="surface-depth kinetic-rule h-full rounded-[1.55rem] border border-border bg-card p-7 md:p-9">
                  <div className="flex items-center justify-between">
                    <span className="icon-orbit inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface">
                      <CheckCircle2 className="h-5 w-5 text-accentText" />
                    </span>
                    <span className="text-xs font-semibold text-muted">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-14 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                    {value.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        data-chapter="Engagement model"
        className="section-shell bg-surface/55"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-24">
            <Reveal>
              <span className="eyebrow">The engagement model</span>
              <h2 className="text-display font-semibold text-foreground">
                Small, senior teams close to every decision.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">
                We scale the team around the product stage, keeping ownership
                clear and communication direct.
              </p>
            </Reveal>
            <div className="border-t border-border">
              {principles.slice(0, 3).map((principle, index) => (
                <Reveal key={principle.number} delay={index * 0.05}>
                  <div className="kinetic-rule group grid gap-4 border-b border-border py-8 sm:grid-cols-[48px_1fr_auto] sm:items-start">
                    <span className="text-xs font-semibold text-accentText">
                      {principle.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        {principle.copy}
                      </p>
                    </div>
                    <span className="icon-orbit hidden h-10 w-10 items-center justify-center rounded-full border border-border transition group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground sm:inline-flex">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
