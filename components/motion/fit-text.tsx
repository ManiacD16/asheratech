'use client';

import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';
import { cn } from '@/lib/utils';

/**
 * Sizes a single line of text so it spans the full width of its parent.
 * The class passed in should carry a sensible vw-based font-size, which is
 * what renders before hydration and when scripting is unavailable.
 */
export function FitText({
  children,
  className,
  min = 36,
  max = 640,
}: {
  children: React.ReactNode;
  className?: string;
  min?: number;
  max?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    const parent = element?.parentElement;
    if (!element || !parent) return;

    // Measurements below read layout straight after writing font-size, so the
    // size must never be transitioned.
    element.style.transition = 'none';

    let lastWidth = -1;
    let lastSize = '';
    const fit = () => {
      // Collapse the text first so the parent reports its own width, not a
      // width the text itself has stretched it to.
      element.style.fontSize = '1px';
      const available = parent.clientWidth;
      if (!available || available === lastWidth) {
        element.style.fontSize = lastSize;
        return;
      }
      lastWidth = available;
      // Optical sizing changes glyph widths with font size, so converge on
      // the answer over a few passes instead of scaling once from 100px.
      let size = 100;
      for (let pass = 0; pass < 4; pass += 1) {
        element.style.fontSize = `${size}px`;
        const natural = element.getBoundingClientRect().width;
        if (!natural) break;
        const next = Math.min(max, Math.max(min, (size * available) / natural));
        if (Math.abs(next - size) < 0.25) {
          size = next;
          break;
        }
        size = next;
      }
      lastSize = `${size.toFixed(2)}px`;
      element.style.fontSize = lastSize;
    };

    const refit = () => {
      lastWidth = -1;
      fit();
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(parent);
    document.fonts?.ready.then(refit).catch(() => undefined);
    return () => observer.disconnect();
  }, [min, max]);

  return (
    <span
      ref={ref}
      className={cn('inline-block whitespace-nowrap', className)}
    >
      {children}
    </span>
  );
}
