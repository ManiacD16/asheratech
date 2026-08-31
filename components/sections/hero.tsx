'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { BlockchainNetworkBackground } from '@/components/sections/blockchain-network-background';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      !root.current ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } });
      timeline
        .from('[data-hero-meta]', {
          opacity: 0,
          y: 12,
          duration: 0.5,
          stagger: 0.08,
        })
        .from(
          '[data-hero-line]',
          { yPercent: 115, rotate: 1.5, duration: 1.05, stagger: 0.09 },
          '-=0.2',
        )
        .from(
          '[data-hero-copy]',
          { opacity: 0, y: 24, duration: 0.72 },
          '-=0.55',
        )
        .from(
          '[data-hero-action]',
          { opacity: 0, y: 18, duration: 0.55, stagger: 0.08 },
          '-=0.42',
        )
        .from(
          '[data-hero-stage]',
          { opacity: 0, x: 60, rotateY: -5, scale: 0.94, duration: 1.15 },
          '-=0.9',
        );
      gsap.to('[data-hero-stage]', {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, root);

    return () => context.revert();
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (
      !stage.current ||
      !glow.current ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !window.matchMedia('(pointer: fine)').matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    gsap.to(stage.current, {
      rotateY: (x - 0.5) * 4,
      rotateX: (0.5 - y) * 3,
      duration: 0.8,
      ease: 'power3.out',
      transformPerspective: 1400,
      overwrite: 'auto',
    });
    gsap.to(glow.current, {
      x: event.clientX - rect.left - 180,
      y: event.clientY - rect.top - 180,
      duration: 0.7,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  }

  function resetStage() {
    if (stage.current)
      gsap.to(stage.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 1,
        ease: 'power3.out',
        overwrite: 'auto',
      });
  }

  return (
    <section
      data-chapter="Introduction"
      ref={root}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetStage}
      className="relative min-h-[88svh] overflow-hidden pb-10 pt-24 md:pb-12 md:pt-28 lg:flex lg:min-h-[820px] lg:items-center lg:pb-16 lg:pt-28"
    >
      <div className="grid-lines absolute inset-0 opacity-35" />
      <BlockchainNetworkBackground className="opacity-55" />
      <div className="noise" />
      <div
        ref={glow}
        className="pointer-events-none absolute left-0 top-0 h-[360px] w-[360px] rounded-full bg-accent/[0.07] blur-[90px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[0.08em] top-[8%] select-none text-[38vw] font-semibold leading-none tracking-[-0.12em] text-foreground/[0.018]"
      >
        A
      </span>

      <Container className="relative w-full">
        <div className="mb-8 flex items-center justify-between border-b border-border/80 pb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted md:mb-10">
          <span data-hero-meta>Independent digital studio</span>
          <span data-hero-meta className="hidden sm:block">
            India · Working globally
          </span>
          <span data-hero-meta className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Available
            for select projects
          </span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.91fr_1.09fr] lg:gap-8 xl:gap-10">
          <div className="relative z-10 max-w-4xl">
            <span
              data-hero-meta
              className="eyebrow"
            >
              Blockchain-first product & engineering agency
            </span>

            <h1 className="text-[clamp(3.75rem,7.8vw,7.7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-foreground">
              <span className="block overflow-hidden pb-[0.08em]">
                <span
                  data-hero-line
                  className="block"
                >
                  Complex ideas.
                </span>
              </span>

              <span className="block overflow-hidden pb-[0.08em]">
                <span
                  data-hero-line
                  className="headline-outline block"
                >
                  Clear products.
                </span>
              </span>

              <span className="block overflow-hidden pb-[0.12em]">
                <span
                  data-hero-line
                  className="text-gradient block"
                >
                  Real adoption.
                </span>
              </span>
            </h1>

            <p
              data-hero-copy
              className="mt-6 max-w-xl text-base leading-8 text-muted md:text-xl md:leading-9"
            >
              Secure smart contracts, wallets, tokenized assets and
              on-chain operations—supported by product strategy,
              experience design and production engineering.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <div data-hero-action>
                <Button href="/work">View our work</Button>
              </div>
              <div data-hero-action>
                <Button href="/contact" variant="secondary">
                  Start a project
                </Button>
              </div>
            </div>
            <a
              data-hero-copy
              href="#selected-work"
              data-cursor="Scroll"
              className="group mt-8 inline-flex min-h-11 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted transition hover:text-foreground"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border bg-card transition group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                <ArrowDown className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1" />
              </span>
              Explore selected work
            </a>
          </div>

          <div ref={stage} className="will-change-transform lg:-mt-10 xl:-mt-72">
            <HeroStage />
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 hidden border-t border-border/70 py-4 lg:block">
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
            {[...Array(2)]
              .flatMap(() => [
                'STRATEGY',
                'EXPERIENCE',
                'ENGINEERING',
                'FINTECH',
                'WEB3',
                'BLOCKCHAIN',
                'CRYPTOCURRENCY',
                'WEB APPLICATION',
                'MOBILE APP',
                'AI',
                'UI/UX',
                'CLOUD & DEVOPS SERVICES',
                'CYBERSECURITY',
                'API',
                'SAAS',
                'ENTERPRISE SOFTWARE',
                'QA',
                'IT CONSULTING'
              ])
              .map((item, index) => (
                <div key={`${item}-${index}`} className="flex items-center">
                  <span className="px-10 text-[10px] font-semibold tracking-[0.22em] text-muted">
                    {item}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStage() {
  return (
    <div
      data-hero-stage
      className="relative mx-auto flex min-h-[430px] w-full max-w-[760px] items-center justify-center sm:min-h-[520px] lg:min-h-[650px]"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[17%] top-[19%] h-2 w-2 rounded-full bg-accent shadow-[0_0_0_8px_rgba(0,224,92,.07),0_0_32px_rgba(0,224,92,.42)]"
      />
      <Image
        src="/images/asheratech/asheratech-signature-hero.png"
        alt="AsheraTech technology ecosystem connecting blockchain infrastructure, identity, custody, real-world assets and digital products."
        width={1536}
        height={1024}
        priority
        sizes="(max-width: 1024px) 100vw, 56vw"
        className="relative z-10 h-auto w-full object-contain drop-shadow-[0_36px_70px_rgba(15,23,42,.22)] dark:drop-shadow-[0_38px_76px_rgba(0,0,0,.42)]"
      />
    </div>
  );
}
