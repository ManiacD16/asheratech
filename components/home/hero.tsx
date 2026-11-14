'use client';

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';
import { FitText } from '@/components/motion/fit-text';
import { LogoMark } from '@/components/layout/logo';
import type { RibbonSceneState } from '@/components/home/ribbon-scene';
import styles from '@/components/home/hero.module.css';

const RibbonScene = dynamic(
  () => import('@/components/home/ribbon-scene').then((m) => m.RibbonScene),
  { ssr: false },
);

const TITLE = 'Asheraatech';
const ECHOES = [0.3, 0.55, 0.8];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const scene = useRef<RibbonSceneState>({ progress: 0 });
  const [sceneReady, setSceneReady] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (!root.current || prefersReducedMotion()) return;

    const context = gsap.context(() => {
      // Entrance: letters rise from behind the fold once the route wipe lifts.
      gsap
        .timeline({ delay: 0.75, defaults: { ease: 'expo.out' } })
        .from('[data-hero-char]', {
          yPercent: 112,
          duration: 1.35,
          stagger: 0.045,
        })
        .from(
          '[data-hero-fade]',
          { opacity: 0, y: 14, duration: 0.9, stagger: 0.08 },
          0.35,
        );

      // Scroll: the title leaves at page speed while outlined echoes lag
      // behind it; the stage itself drifts at roughly half speed.
      const travel = () => root.current?.offsetHeight ?? window.innerHeight;
      const scrub = {
        trigger: root.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      };

      gsap.to(scene.current, { progress: 1, ease: 'none', scrollTrigger: scrub });
      gsap.to('[data-hero-stage]', {
        y: () => travel() * 0.42,
        ease: 'none',
        scrollTrigger: scrub,
      });
      gsap.utils.toArray<HTMLElement>('[data-hero-echo]').forEach((echo) => {
        const lag = Number(echo.dataset.heroEcho);
        gsap.to(echo, {
          y: () => travel() * lag,
          ease: 'none',
          scrollTrigger: scrub,
        });
        gsap.fromTo(
          echo,
          { opacity: 0 },
          {
            opacity: 0.9 - lag * 0.45,
            ease: 'none',
            scrollTrigger: { ...scrub, end: () => `+=${travel() * 0.12}` },
          },
        );
      });
      gsap.to('[data-hero-fill]', {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          ...scrub,
          start: () => `top+=${travel() * 0.1} top`,
          end: () => `top+=${travel() * 0.42} top`,
        },
      });
      gsap.to('[data-hero-out]', {
        opacity: 0,
        ease: 'none',
        scrollTrigger: { ...scrub, end: () => `+=${travel() * 0.2}` },
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section ref={root} className={styles.hero} aria-label="Introduction">
      <p className={styles.tagline} data-hero-out>
        <span data-hero-fade className="inline-block">
          {siteConfig.tagline.replace(/\.$/, '')}
        </span>
      </p>

      <div className={styles.titleBox}>
        <h1 className={styles.title} aria-label={siteConfig.name}>
          <FitText className={styles.titleLine}>
            <span data-hero-fill aria-hidden="true" className={styles.fill}>
              {Array.from(TITLE).map((char, index) => (
                <span key={index} className={styles.charMask}>
                  <span data-hero-char className={styles.char}>
                    {char}
                  </span>
                </span>
              ))}
            </span>
            {ECHOES.map((lag) => (
              <span
                key={lag}
                data-hero-echo={lag}
                aria-hidden="true"
                className={styles.echo}
              >
                {TITLE}
              </span>
            ))}
          </FitText>
        </h1>
      </div>

      <div className={styles.stage} data-hero-stage>
        <div className={cn(styles.poster, sceneReady && styles.posterHidden)}>
          <LogoMark size={560} priority className={styles.posterMark} />
        </div>
        <div className={cn(styles.canvas, sceneReady && styles.canvasReady)}>
          <RibbonScene state={scene} onReady={() => setSceneReady(true)} />
        </div>
      </div>

      <div className={styles.captions} data-hero-out>
        <p data-hero-fade>
          Blockchain-first product
          <br />
          and engineering agency
        </p>
        <p data-hero-fade className={styles.captionEnd}>
          India
          <br />
          Working globally
        </p>
      </div>
    </section>
  );
}
