import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { Button } from '@/components/ui/button';
import { ClarityLens } from '@/components/sections/clarity-lens';

export function StudioNote() {
  return (
    <section data-chapter="Point of view" className="section-shell">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.2rem] border border-border bg-card p-8 shadow-[0_40px_100px_-65px_rgba(24,31,56,.5)] md:p-12 lg:p-16 xl:p-20">
            <span
              aria-hidden="true"
              className="absolute -left-[0.04em] -top-[0.35em] select-none text-[18rem] font-semibold leading-none text-accentText/[0.08]"
            >
              “
            </span>

            <div className="relative grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:items-start lg:gap-14 xl:gap-20">
              {/* Left column */}
              <div className="flex h-full flex-col">
                <div className="hidden lg:block">
                  <ClarityLens />
                </div>

                <div className="mt-10 lg:mt-12">
                  <span className="eyebrow">The standard</span>

                  <p className="max-w-sm text-sm leading-7 text-muted">
                    A product partner should make the work more
                    understandable—not make itself look mysterious.
                  </p>

                  <div className="mt-7">
                    <Button href="/about" variant="secondary">
                      How we think
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right statement */}
              <blockquote className="text-[clamp(2.25rem,4.8vw,5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-foreground">
                Complex underneath.{' '}
                <span className="text-gradient">Clear where it matters.</span>{' '}
                Every screen, service and decision should move the product
                closer to that standard.
              </blockquote>
            </div>

            <span className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent/10 blur-3xl" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}