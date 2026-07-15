'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <motion.button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      whileHover={{ y: -2, rotate: resolvedTheme === 'dark' ? -8 : 8 }}
      whileTap={{ scale: 0.92 }}
      data-cursor="Theme"
      className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border bg-card text-foreground transition hover:border-foreground/30"
    >
      <span className="absolute inset-0 translate-y-full rounded-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
      <Moon aria-hidden="true" className="relative z-10 h-5 w-5 dark:hidden" />
      <Sun
        aria-hidden="true"
        className="relative z-10 hidden h-5 w-5 dark:block"
      />
    </motion.button>
  );
}
