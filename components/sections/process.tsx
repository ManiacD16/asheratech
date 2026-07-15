'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import { processSteps } from '@/data/site';
import { Container } from '@/components/ui/container';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const root = useRef<HTMLElement>(null);
  const line = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      !root.current ||
      !line.current ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;
    const context = gsap.context(() => {
      gsap.fromTo(
        line.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top 58%',
            end: 'bottom 70%',
            scrub: 0.6,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>('[data-process-step]').forEach((step) => {
        gsap.from(step, {
          opacity: 0,
          y: 50,
          scale: 0.98,
          duration: 0.85,
          ease: 'power4.out',
          scrollTrigger: { trigger: step, start: 'top 84%', once: true },
        });
        ScrollTrigger.create({
          trigger: step,
          start: 'top 57%',
          end: 'bottom 43%',
          toggleClass: { targets: step, className: 'is-active' },
        });
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section
      data-chapter="Process"
      ref={root}
      className="section-shell relative overflow-hidden bg-navy-950 text-white"
    >
      <div className="noise" />
      <span className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-accent/10 blur-[100px]" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-[0.08em] top-[0.15em] select-none text-[28vw] font-semibold leading-none tracking-[-0.1em] text-white/[0.018]"
      >
        FLOW
      </span>
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-24">
          <div>
            <span className="eyebrow text-white/[0.48]">How we work</span>
            <h2 className="text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
              A clear path through{' '}
              <span className="text-signal">complex delivery.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/[0.58] md:text-lg">
            Four connected phases keep product, experience and engineering
            decisions moving together from the first brief through real-world
            scale.
          </p>
        </div>

        <div className="relative mt-20 lg:mt-28">
          <div className="absolute bottom-10 left-[17px] top-10 w-px bg-white/[0.12] md:left-[23px]" />
          <div
            ref={line}
            className="absolute bottom-10 left-[17px] top-10 w-px origin-top bg-accent md:left-[23px]"
          />
          <div className="space-y-6 md:space-y-9">
            {processSteps.map((step) => (
              <article
                key={step.id}
                data-process-step
                className="process-step relative grid gap-5 pl-14 transition duration-700 md:grid-cols-[0.72fr_1.28fr] md:gap-8 md:pl-20 lg:gap-14 lg:pl-28"
              >
                <span className="process-node absolute left-0 top-8 inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/35 bg-navy-950 text-[9px] font-bold text-signal transition duration-500 md:h-12 md:w-12">
                  {step.number}
                </span>
                <div className="process-panel relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/[0.04] p-7 transition duration-700 md:p-10">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-[0.25em] -right-[0.02em] text-[9rem] font-semibold leading-none tracking-[-0.09em] text-white/[0.025]"
                  >
                    {step.number}
                  </span>
                  <p className="relative text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-signal">
                    Phase {step.number}
                  </p>
                  <h3 className="relative mt-4 text-4xl font-semibold tracking-[-0.055em] text-white md:text-6xl">
                    {step.title}
                  </h3>
                </div>
                <div className="process-panel rounded-[1.65rem] border border-white/10 bg-white/[0.04] p-7 transition duration-700 md:p-10">
                  <p className="text-sm leading-7 text-white/[0.62] md:text-lg md:leading-8">
                    {step.description}
                  </p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                    {step.outputs.map((output) => (
                      <li
                        key={output}
                        className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/[0.68]"
                      >
                        <Check className="h-3.5 w-3.5 text-signal" />
                        {output}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
