import Image from 'next/image';
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
                </span>
                Start with clarity
              </span>
              <span className="hidden sm:block">New business / 2026</span>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center xl:gap-14">
              <div className="relative z-10">
                <h2 className="max-w-[8ch] text-[clamp(3.2rem,6vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white">
                  Have a complex{' '}
                  <span className="headline-outline ![-webkit-text-stroke-color:rgba(255,255,255,.92)]">
                    product to build?
                  </span>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/[0.58] md:text-lg">
                  Bring us the ambition, constraints and unanswered questions.
                  We’ll turn them into a focused path forward.
                </p>
                <span className="mt-8 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  <span className="icon-orbit button-glint inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-accent text-navy-950 transition duration-700 group-hover:rotate-45 group-hover:scale-110">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                  Let&apos;s work together
                </span>
              </div>

              <div className="relative mx-auto w-full max-w-[780px]">
                <div className="absolute inset-[18%] rounded-full bg-accent/10 blur-[90px]" />
                <Image
                  src="/images/asheratech/closing-cta.png"
                  alt="AsheraTech closing artwork connecting product engineering, cloud, cybersecurity, UI/UX, mobile, data and API integration."
                  width={1536}
                  height={1024}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="relative h-auto w-full object-contain drop-shadow-[0_34px_72px_rgba(0,0,0,.48)] transition-transform duration-700 group-hover:scale-[1.015]"
                />
              </div>
            </div>
          </Link>

          <div className="mt-8 flex flex-col gap-3 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <span>Typical response: within two business days</span>
            <a
              href="mailto:contact@asheraatech.com"
              className="link-line inline-flex min-h-11 w-fit items-center font-semibold text-white/70 hover:text-signal"
            >
              contact@asheraatech.com
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
