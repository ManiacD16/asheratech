'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowDown,
  Check,
  WalletCards,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
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
        )
        .from(
          '[data-float-card]',
          { opacity: 0, y: 26, scale: 0.92, duration: 0.65, stagger: 0.1 },
          '-=0.55',
        )
        .from(
          '[data-chart-bar]',
          {
            scaleY: 0,
            transformOrigin: 'bottom',
            duration: 0.75,
            stagger: 0.045,
          },
          '-=0.72',
        );

      const floatA = gsap.to('[data-float-a]', {
        y: -10,
        rotate: -1,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      const floatB = gsap.to('[data-float-b]', {
        y: 9,
        rotate: 1,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.35,
      });
      ScrollTrigger.create({
        trigger: root.current,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: ({ isActive }) => {
          [floatA, floatB].forEach((animation) =>
            isActive ? animation.play() : animation.pause(),
          );
        },
      });
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
  const chart = [34, 48, 42, 66, 60, 78, 72, 92, 84, 100];
  return (
    <div
      data-hero-stage
      className="relative mx-auto min-h-[500px] w-full max-w-[680px] lg:min-h-[650px]"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/60"
      />
      <div className="surface-depth absolute inset-x-4 top-8 overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/[0.88] shadow-[0_40px_100px_-55px_rgba(24,31,56,.55)] backdrop-blur-2xl sm:inset-x-8 lg:inset-x-0 lg:top-12">
        <div className="scanline" />
        <div className="flex h-14 items-center justify-between border-b border-border/80 px-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff8d8d]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd36b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          </div>
          <div className="flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>{' '}
            Networks live
          </div>
        </div>
        <div className="grid min-h-[380px] grid-cols-[72px_1fr] sm:grid-cols-[104px_1fr] lg:min-h-[470px]">
          <aside className="border-r border-border/80 p-3 sm:p-4">
            <div className="h-8 w-8 rounded-xl bg-foreground" />
            <div className="mt-8 space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <span
                  key={item}
                  className={`block h-2 rounded-full ${item === 1 ? 'w-full bg-accent' : 'w-4/5 bg-border'}`}
                />
              ))}
            </div>
          </aside>
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  On-chain product
                </p>
                <p className="mt-2 text-2xl font-bold tracking-[-0.05em] text-foreground sm:text-3xl">
                  Secure. Compliant. Ready.
                </p>
              </div>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1.5 text-[10px] font-semibold text-foreground">
                <Sparkles className="h-3 w-3 text-accentText" /> Live insight
              </span>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                ['Identity', 'Verified'],
                ['Contracts', 'Audited'],
                ['Operations', 'Live'],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className="group rounded-2xl bg-surface p-3 transition duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-float sm:p-4"
                >
                  <span
                    className={`block h-1.5 w-7 rounded-full ${index === 2 ? 'bg-accent' : 'bg-foreground/20'}`}
                  />
                  <p className="mt-5 text-[9px] text-muted">{label}</p>
                  <p className="mt-1 text-[10px] font-bold text-foreground sm:text-xs">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-2xl border border-border/70 p-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold text-foreground">
                  On-chain activity
                </p>
                <p className="text-[9px] text-muted">Last 10 blocks</p>
              </div>
              <div className="mt-5 flex h-24 items-end gap-1.5">
                {chart.map((height, index) => (
                  <span
                    data-chart-bar
                    key={index}
                    className={`flex-1 rounded-t-sm transition-colors duration-300 hover:bg-foreground ${index > 6 ? 'bg-accent' : 'bg-border'}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-float-card
        data-float-a
        className="icon-orbit absolute bottom-4 left-0 flex items-center gap-3 rounded-2xl border border-border bg-card/90 p-3.5 shadow-[0_24px_70px_-30px_rgba(24,31,56,.55)] backdrop-blur-2xl sm:bottom-9 sm:left-1 lg:-left-12 lg:bottom-20"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.18] text-foreground">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[9px] uppercase tracking-[0.12em] text-muted">
            Contract security
          </p>
          <p className="mt-0.5 text-xs font-semibold text-foreground">
            Secure by design
          </p>
        </div>
      </div>
      <div
        data-float-card
        data-float-b
        className="icon-orbit absolute right-0 top-0 flex items-center gap-3 rounded-2xl border border-border bg-card/90 p-3.5 shadow-[0_24px_70px_-30px_rgba(24,31,56,.55)] backdrop-blur-2xl sm:right-2 lg:right-0 lg:top-4 xl:-right-10"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#dcecff] text-[#2f6bb8] dark:bg-[#74a7ff]/15 dark:text-[#8bb6ff]">
          <WalletCards className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[9px] uppercase tracking-[0.12em] text-muted">
            Wallet infrastructure
          </p>

          <p className="mt-0.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
            <Check className="h-3.5 w-3.5 text-accentText" />

            Custody & signing live
          </p>
        </div>
      </div>
    </div>
  );
}
