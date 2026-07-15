'use client';

import { ThemeProvider } from 'next-themes';
import { SmoothScroll } from '@/components/motion/smooth-scroll';
import { ExperienceLayer } from '@/components/motion/experience-layer';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SmoothScroll>
        <ExperienceLayer>{children}</ExperienceLayer>
      </SmoothScroll>
    </ThemeProvider>
  );
}
