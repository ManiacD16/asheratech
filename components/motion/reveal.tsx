'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type RevealVariant = 'rise' | 'mask' | 'scale';

export function Reveal({
  children,
  className,
  delay = 0,
  y = 34,
  variant = 'rise',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: RevealVariant;
}) {
  const reduceMotion = useReducedMotion();
  const initial =
    variant === 'scale'
      ? { opacity: 0, y: y * 0.55, scale: 0.975 }
      : variant === 'mask'
        ? { opacity: 0, y, clipPath: 'inset(0 0 18% 0)' }
        : { opacity: 0, y };

  return (
    <motion.div
      data-reveal
      className={cn(className)}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, scale: 1, clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, amount: 0.14, margin: '0px 0px -4% 0px' }}
      transition={{
        duration: 0.86,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
