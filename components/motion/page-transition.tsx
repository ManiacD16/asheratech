'use client';

import { usePathname } from 'next/navigation';
import { LogoMark } from '@/components/layout/logo';

const routeNames: Record<string, string> = {
  '/': 'Home',
  '/work': 'Selected work',
  '/services': 'Services',
  '/about': 'About',
  '/insights': 'Insights',
  '/contact': 'Start a project',
  '/privacy': 'Privacy',
};

function getRouteName(pathname: string) {
  if (routeNames[pathname]) return routeNames[pathname];
  if (pathname.startsWith('/work/')) return 'Case study';
  if (pathname.startsWith('/insights/')) return 'Field note';
  return 'Asheraatech';
}

/**
 * Four stacked colour sheets lift away, one after another, each time a route
 * mounts. The animation is pure CSS so the first paint is already covered.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const routeName = getRouteName(pathname);

  return (
    <>
      <p className="sr-only" aria-live="polite">
        Opened {routeName}
      </p>
      <div className="wipe" aria-hidden="true" data-preloader data-tone-skip>
        <span className="wipe__layer wipe__layer--cyan" />
        <span className="wipe__layer wipe__layer--azure" />
        <span className="wipe__layer wipe__layer--royal" />
        <span className="wipe__layer wipe__layer--ink">
          <span className="wipe__mark">
            <LogoMark size={96} priority className="w-24" />
            <span className="wipe__label">{routeName}</span>
          </span>
        </span>
      </div>
      <main data-page-transition>{children}</main>
    </>
  );
}
