'use client';

import { useEffect, useState } from 'react';

export type SurfaceTone = 'dark' | 'light';

function parseColor(value: string) {
  const match = value.match(/rgba?\(([^)]+)\)/);
  if (!match) return null;
  const parts = match[1].split(/[,/\s]+/).filter(Boolean).map(Number);
  const [r, g, b, a = 1] = parts;
  if ([r, g, b].some((channel) => Number.isNaN(channel))) return null;
  return { r, g, b, a };
}

/**
 * Reports whether the page surface under a fixed element is dark or light,
 * so chrome that floats over alternating sections can stay legible.
 * `ignore` is the fixed element itself (skipped while sampling).
 */
export function useSurfaceTone(
  ignore: React.RefObject<HTMLElement | null>,
  sampleY = 48,
): SurfaceTone {
  const [tone, setTone] = useState<SurfaceTone>('dark');

  useEffect(() => {
    let frame = 0;
    let last = 0;

    const sample = () => {
      frame = 0;
      last = performance.now();
      const x = Math.max(0, window.innerWidth - 56);
      const stack = document.elementsFromPoint(x, sampleY);
      for (const element of stack) {
        if (ignore.current?.contains(element)) continue;
        if (element.closest('[data-tone-skip]')) continue;
        const explicit = (element as HTMLElement).dataset?.tone;
        if (explicit === 'dark' || explicit === 'light') {
          setTone(explicit);
          return;
        }
        const color = parseColor(getComputedStyle(element).backgroundColor);
        if (!color || color.a < 0.6) continue;
        const luminance =
          (0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b) / 255;
        setTone(luminance > 0.6 ? 'light' : 'dark');
        return;
      }
    };

    const request = () => {
      if (frame) return;
      const wait = Math.max(0, 90 - (performance.now() - last));
      frame = window.setTimeout(sample, wait);
    };

    sample();
    const settle = window.setTimeout(sample, 1600);
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    return () => {
      window.clearTimeout(frame);
      window.clearTimeout(settle);
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
    };
  }, [ignore, sampleY]);

  return tone;
}
