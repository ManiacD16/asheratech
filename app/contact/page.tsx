import type { Metadata } from 'next';
import { Mail, MoveUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { PageIntro } from '@/components/ui/page-intro';
import { Reveal } from '@/components/motion/reveal';
import { ContactForm } from '@/components/forms/contact-form';

export const metadata: Metadata = createMetadata({
  title: 'Start a Project',
  description:
    'Tell Asheratech about the product, platform or modernization challenge you are ready to move forward.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Start a project"
        title={
          <>
            Bring the complexity. We’ll find the{' '}
            <span className="text-gradient">clear path forward.</span>
          </>
        }
        description="Share the opportunity, constraints and urgency. A useful first conversation starts with context—not a sales script."
      />
      <section data-chapter="Project inquiry" className="section-shell">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.66fr_1.34fr] lg:gap-20">
            <Reveal>
              <aside className="lg:sticky lg:top-28">
                <h2 className="eyebrow">What happens next</h2>
                <ol className="mt-6 space-y-6">
                  {[
                    [
                      '01',
                      'We review the opportunity',
                      'A senior team member reads the context and identifies the most important open questions.',
                    ],
                    [
                      '02',
                      'We arrange a focused call',
                      'We discuss goals, users, constraints, timing and what useful progress should look like.',
                    ],
                    [
                      '03',
                      'We propose a practical next step',
                      'That may be a discovery sprint, focused intervention or a complete product engagement.',
                    ],
                  ].map(([number, title, copy]) => (
                    <li
                      key={number}
                      className="kinetic-rule group grid grid-cols-[36px_1fr] gap-4 border-t border-border pt-5"
                    >
                      <span className="text-xs font-semibold text-accentText">
                        {number}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-foreground">
                          {title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-muted">
                          {copy}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="surface-depth mt-10 rounded-[1.4rem] bg-navy-950 p-6 text-white">
                  <span className="icon-orbit inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05]">
                    <Mail className="h-5 w-5 text-signal" />
                  </span>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-white/[0.45]">
                    Prefer email?
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group mt-2 inline-flex min-h-11 items-center gap-2 text-base font-semibold text-white transition hover:text-signal"
                  >
                    {siteConfig.email}
                    <MoveUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </aside>
            </Reveal>
            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
