'use client';

import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
} from 'framer-motion';
import { usePathname } from 'next/navigation';

export function ExperienceLayer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <CursorFollower />
      <ScrollChapterIndicator />
      {children}
    </>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.25,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-azure motion-reduce:hidden"
      style={{ scaleX }}
    />
  );
}

function ScrollChapterIndicator() {
  const pathname = usePathname();
  const [chapters, setChapters] = useState<
    Array<{ label: string; element: HTMLElement }>
  >([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        'main section[data-chapter], #main-content section[data-chapter]',
      ),
    );
    const next = elements.map((element, index) => ({
      label: element.dataset.chapter || `Section ${index + 1}`,
      element,
    }));
    setChapters(next);
    if (!next.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = next.findIndex(
          (chapter) => chapter.element === visible.target,
        );
        if (index >= 0) setActive(index);
      },
      { rootMargin: '-34% 0px -50% 0px', threshold: [0, 0.15, 0.35, 0.6] },
    );

    next.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  if (chapters.length < 2) return null;

  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 2xl:block"
    >
      <div className="flex items-center gap-4">
        <div className="chapter-rail text-micro max-h-40 overflow-hidden text-muted">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={chapters[active]?.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {chapters[active]?.label}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="relative h-36 w-px bg-border/70">
          <motion.span
            className="chapter-dot absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
            animate={{
              top: `${chapters.length <= 1 ? 0 : (active / (chapters.length - 1)) * 100}%`,
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          />
        </div>
        <div className="font-mono text-[9px] font-semibold tracking-[0.12em] text-muted">
          {String(active + 1).padStart(2, '0')}
          <span className="mx-1 text-border">/</span>
          {String(chapters.length).padStart(2, '0')}
        </div>
      </div>
    </aside>
  );
}

function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 38, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 500, damping: 38, mass: 0.2 });
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState('');
  const [pressed, setPressed] = useState(false);
  const labelRef = useRef('');

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (!finePointer || reduced) return;
    setEnabled(true);

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>('[data-cursor]')
          : null;
      const nextLabel = target?.dataset.cursor ?? '';
      if (nextLabel !== labelRef.current) {
        labelRef.current = nextLabel;
        setLabel(nextLabel);
      }
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const blur = () => {
      x.set(-100);
      y.set(-100);
      setPressed(false);
      setLabel('');
    };

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', down, { passive: true });
    window.addEventListener('pointerup', up, { passive: true });
    window.addEventListener('blur', blur);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('blur', blur);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[110] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-azure"
        style={{ x, y, scale: pressed ? 0.55 : 1 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[109] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/25 bg-background/5 text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur-sm"
        style={{ x: springX, y: springY }}
        animate={{
          width: label ? 76 : 34,
          height: label ? 76 : 34,
          scale: pressed ? 0.9 : 1,
          backgroundColor: label
            ? 'hsl(var(--accent))'
            : 'hsl(var(--background) / 0.05)',
          color: label
            ? 'hsl(var(--accent-foreground))'
            : 'hsl(var(--foreground))',
          borderColor: label
            ? 'hsl(var(--accent))'
            : 'hsl(var(--foreground) / 0.25)',
        }}
        transition={{ type: 'spring', stiffness: 360, damping: 26 }}
      >
        <AnimatePresence mode="wait">
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
