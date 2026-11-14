'use client';

import { useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';
import styles from '@/components/home/portal.module.css';

const COPY =
  'Secure smart contracts, wallets, tokenized assets and on-chain operations, supported by product strategy, experience design and production engineering. Here is some of the work worth stepping into.';

/**
 * A framed card is pinned to the centre of the screen. Its sentence reads in
 * word by word, fades back out, then the card grows until its paper surface
 * becomes the page, carrying the visitor from the ink hero into the work.
 */
export function Portal() {
  const root = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!root.current || !frame.current || prefersReducedMotion()) return;

    const context = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>('[data-portal-word]');
      const cover = () => {
        const card = frame.current;
        if (!card) return 6;
        const border = parseFloat(getComputedStyle(card).paddingLeft) || 10;
        const width = card.offsetWidth - border * 2;
        const height = card.offsetHeight - border * 2;
        return (
          Math.max(window.innerWidth / width, window.innerHeight / height) * 1.08
        );
      };

      gsap.set(words, { opacity: 0.12 });

      gsap
        .timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        })
        .to(words, { opacity: 1, duration: 0.26, stagger: 0.26 / words.length }, 0)
        .to(
          words,
          { opacity: 0, duration: 0.14, stagger: 0.14 / words.length },
          0.4,
        )
        .to(
          frame.current,
          { scale: cover, duration: 0.36, ease: 'power2.in' },
          0.56,
        )
        .to('[data-portal-cue]', { color: '#0f0b4d', duration: 0.08 }, 0.74)
        .to('[data-portal-cue]', { opacity: 0, duration: 0.06 }, 0.9)
        .set(root.current, { backgroundColor: '#f6faff' }, 0.93)
        .to({}, { duration: 0.06 }, 0.94);
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section ref={root} className={styles.portal} aria-label="What we build">
      <div className={styles.stage}>
        <div ref={frame} className={`${styles.frame} notched`}>
          <div className={`${styles.sheet} notched`}>
            <p className={styles.text}>
              {COPY.split(' ').map((word, index) => (
                <span key={index} data-portal-word>
                  {word}{' '}
                </span>
              ))}
            </p>
          </div>
        </div>
        <p className={styles.cue} data-portal-cue aria-hidden="true">
          Keep scrolling
        </p>
      </div>
    </section>
  );
}
