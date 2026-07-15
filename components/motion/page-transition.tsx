'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const routeNames: Record<string, string> = {
  '/': 'Studio',
  '/work': 'Selected work',
  '/services': 'Capabilities',
  '/about': 'About',
  '/insights': 'Insights',
  '/contact': 'Start a project',
  '/privacy': 'Privacy',
};

function getRouteName(pathname: string) {
  if (routeNames[pathname]) return routeNames[pathname];
  if (pathname.startsWith('/work/')) return 'Case study';
  if (pathname.startsWith('/insights/')) return 'Field note';
  return 'Asheratech';
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const routeName = getRouteName(pathname);

  useEffect(() => setMounted(true), []);
  const motionEnabled = mounted && !reduceMotion;

  return (
    <>
      <p className="sr-only" aria-live="polite">
        Opened {routeName}
      </p>
      {motionEnabled && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[85] overflow-hidden"
        >
          <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.span
                key={index}
                initial={{ y: '0%' }}
                animate={{ y: '-102%' }}
                transition={{
                  duration: 0.82,
                  delay: 0.035 * index,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className={`route-panel bg-navy-950 ${index > 3 ? 'hidden md:block' : ''}`}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -22 }}
            transition={{
              duration: 0.38,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 flex items-center justify-center text-white"
          >
            <div className="text-center">
              <span className="text-micro text-signal">
                Asheratech / Navigate
              </span>
              <p className="mt-4 text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-none tracking-[-0.07em]">
                {routeName}
                <span className="text-signal">.</span>
              </p>
            </div>
          </motion.div>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 bottom-0 h-1 origin-left bg-accent"
          />
        </div>
      )}
      <motion.main
        data-page-transition
        initial={false}
        animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
        exit={motionEnabled ? { opacity: 0, y: -12 } : undefined}
        transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
    </>
  );
}
