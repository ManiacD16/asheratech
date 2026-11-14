'use client';

import { useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';
import { FitText } from '@/components/motion/fit-text';
import { cn } from '@/lib/utils';

/**
 * A full-width display headline that rises out of a clipping edge the first
 * time it scrolls into view.
 */
export function DisplayTitle({
  children,
  as: Tag = 'h2',
  className,
  delay = 0,
}: {
  children: string;
  as?: 'h1' | 'h2';
  className?: string;
  delay?: number;
}) {
  const clip = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!clip.current || !inner.current || prefersReducedMotion()) return;
    const context = gsap.context(() => {
      gsap.from(inner.current, {
        yPercent: 104,
        duration: 1.25,
        delay,
        ease: 'expo.out',
        scrollTrigger: { trigger: clip.current, start: 'top 92%', once: true },
      });
    });
    return () => context.revert();
  }, [delay]);

  return (
    <div ref={clip} className="overflow-hidden pb-[0.04em]">
      <Tag
        className={cn(
          'block w-full text-[13vw] leading-[0.86] text-current',
          className,
        )}
      >
        <FitText>
          <span ref={inner} className="block will-change-transform">
            {children}
          </span>
        </FitText>
      </Tag>
    </div>
  );
}
