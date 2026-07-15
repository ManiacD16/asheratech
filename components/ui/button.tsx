'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'text';
  className?: string;
  showArrow?: boolean;
};

const variants = {
  primary:
    'premium-button premium-button--accent bg-accent text-accent-foreground',
  secondary:
    'premium-button border border-border bg-card text-foreground hover:border-foreground/30',
  dark: 'premium-button bg-navy-900 text-white dark:bg-white dark:text-navy-950',
  text: 'px-0 text-foreground hover:text-accentText',
};

export function Button({
  href,
  children,
  variant = 'primary',
  className,
  showArrow = true,
}: ButtonProps) {
  const inner = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();

  function handleMove(event: React.MouseEvent<HTMLAnchorElement>) {
    if (reduceMotion || !inner.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.14;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
    inner.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  function reset() {
    if (inner.current) inner.current.style.transform = 'translate3d(0, 0, 0)';
  }

  return (
    <motion.div
      className="inline-flex"
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        data-cursor="Open"
        className={cn(
          'group relative inline-flex min-h-[3.25rem] items-center justify-center overflow-hidden rounded-full px-6 text-sm font-semibold transition duration-300 ease-out',
          variant !== 'text' && 'button-glint',
          variants[variant],
          className,
        )}
      >
        <span
          ref={inner}
          className="relative z-10 flex items-center gap-3 transition-transform duration-300 ease-out"
        >
          <span>{children}</span>
          {showArrow && (
            <span className="icon-orbit border-current/20 group-hover:border-current/35 inline-flex h-7 w-7 items-center justify-center rounded-full border transition-colors duration-300">
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          )}
        </span>
      </Link>
    </motion.div>
  );
}
