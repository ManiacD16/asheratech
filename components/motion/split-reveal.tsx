'use client';

import { useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';
import { cn } from '@/lib/utils';

/**
 * Splits a short line into characters that rise out of individual masks
 * when the line scrolls into view. The full text stays available to
 * assistive technology through aria-label on the wrapper.
 */
export function SplitReveal({
  text,
  className,
  stagger = 0.028,
  delay = 0,
}: {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const root = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const context = gsap.context(() => {
      gsap.from('[data-char]', {
        yPercent: 110,
        duration: 1.05,
        ease: 'expo.out',
        stagger,
        delay,
        scrollTrigger: { trigger: root.current, start: 'top 90%', once: true },
      });
    }, root);
    return () => context.revert();
  }, [stagger, delay]);

  const words = text.split(' ');

  return (
    <span ref={root} className={cn('inline', className)} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          aria-hidden="true"
          className="inline-block whitespace-nowrap"
        >
          {Array.from(word).map((char, charIndex) => (
            <span
              key={`${char}-${charIndex}`}
              className="inline-block overflow-hidden pb-[0.14em] align-bottom [margin-bottom:-0.14em]"
            >
              <span data-char className="inline-block will-change-transform">
                {char}
              </span>
            </span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}
