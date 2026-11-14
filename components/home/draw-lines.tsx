'use client';

import { useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';

/** Draws every [data-draw] rule inside it from the left as it enters view. */
export function DrawLines({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-draw]').forEach((line) => {
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1.3,
          ease: 'expo.out',
          scrollTrigger: { trigger: line, start: 'top 88%', once: true },
        });
      });
    }, root);
    return () => context.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}
