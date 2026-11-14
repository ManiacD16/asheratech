import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { LogoMark } from '@/components/layout/logo';
import { Reveal } from '@/components/motion/reveal';

/**
 * Closing invitation shown at the end of inner pages: an ink panel with
 * concave corners set on the paper surface, so it reads as a card on the
 * table rather than a second footer.
 */
export function FinalCta() {
  return (
    <section
      data-chapter="Contact"
      className="relative bg-paper px-[var(--section-padding-inline)] py-16 md:py-20 lg:py-24"
    >
      <Reveal>
        <div
          className="notched bg-[linear-gradient(120deg,var(--color-cyan),var(--color-royal)_38%,var(--color-azure)_72%,var(--color-cyan))] p-[3px]"
          style={{ '--notch': '22px' } as React.CSSProperties}
        >
          <Link
            href="/contact"
            data-cursor="Start"
            className="notched group relative grid gap-10 overflow-hidden bg-ink px-6 py-12 text-paper md:px-14 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-20 lg:py-20"
            style={
              { '--notch': '22px', '--notch-out': '3px' } as React.CSSProperties
            }
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-[9px] border border-cyan/40"
            />
            <div className="relative">
              <p className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-cyan">
                <span className="diamond" aria-hidden="true" />
                Start with clarity
              </p>
              <h2 className="mt-6 max-w-[11ch] text-[clamp(3.4rem,7.4vw,8rem)] leading-[0.84] text-paper">
                Have a complex product to build?
              </h2>
              <p className="mt-7 max-w-xl font-serif text-xl leading-[1.25] text-paper/75 md:text-2xl">
                Bring us the ambition, constraints and unanswered questions.
                We&apos;ll turn them into a focused path forward.
              </p>
              <span className="mt-9 inline-flex min-h-[3.25rem] items-center gap-4 border-b border-paper/30 pb-1 text-base transition-colors duration-300 group-hover:border-cyan group-hover:text-cyan">
                Start a project
                <svg aria-hidden="true" viewBox="0 0 24 10" className="w-6 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5">
                  <path
                    d="M0 5h22M18 1l4 4-4 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </span>
              <p className="mt-8 text-sm text-paper/55">
                Typical response within two business days ·{' '}
                {siteConfig.email}
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[520px]">
              <LogoMark
                size={520}
                className="w-full transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:-rotate-3 group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
