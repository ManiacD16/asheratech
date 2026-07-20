import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';

export function FinalCta() {
  return (
    <section
      data-chapter="Contact"
      className="relative overflow-hidden bg-navy-900 py-16 text-white md:py-20 lg:py-24"
    >
      <div className="noise" />
      <div className="grid-lines absolute inset-0 opacity-[0.055]" />
      <span className="absolute -left-16 top-10 h-56 w-56 rounded-full border border-accent/20" />
      <span className="absolute -left-6 top-20 h-32 w-32 rounded-full bg-accent/15 blur-3xl" />
      <span className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-accent/10 blur-[80px]" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[0.16em] -right-[0.05em] select-none text-[24vw] font-semibold leading-none tracking-[-0.1em] text-white/[0.025]"
      >
        GO
      </span>
      <Container className="relative">
        <Reveal>
          <Link
            href="/contact"
            data-cursor="Start"
            className="group block border-y border-white/15 py-8 md:py-10"
          >
            <div className="flex items-center justify-between gap-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
              <span className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>{' '}
                Start with clarity
              </span>
              <span className="hidden sm:block">New business / 2026</span>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-5xl text-[clamp(3.4rem,8vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-white">
                  Have a complex
                  <br />
                  <span className="headline-outline ![-webkit-text-stroke-color:rgba(255,255,255,.92)]">
                    product to build?
                  </span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/[0.58] md:text-lg">
                  Bring us the ambition, constraints and unanswered questions.
                  We’ll turn them into a focused path forward.
                </p>
              </div>
              <span className="icon-orbit button-glint inline-flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-accent text-navy-950 transition duration-700 group-hover:rotate-45 group-hover:scale-110 md:h-28 md:w-28">
                <ArrowUpRight className="h-7 w-7 md:h-9 md:w-9" />
              </span>
            </div>
          </Link>
          <div className="mt-8 flex flex-col gap-3 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <span>Typical response: within two business days</span>
            <a
              href="mailto:contact@asheratech.com"
              className="link-line inline-flex min-h-11 w-fit items-center font-semibold text-white/70 hover:text-signal"
            >
              contact@asheratech.com
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
