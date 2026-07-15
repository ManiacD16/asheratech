'use client';

import { useRef } from 'react';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { ProjectVisual } from '@/components/project/project-visual';
import { cn } from '@/lib/utils';

export function ProjectCard({
  project,
  index = 0,
  compact = false,
  featured = false,
  headingLevel = 'h3',
}: {
  project: Project;
  index?: number;
  compact?: boolean;
  featured?: boolean;
  headingLevel?: 'h2' | 'h3';
}) {
  const Heading = headingLevel;
  const visual = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 24 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 24 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    event.currentTarget.style.setProperty('--spot-x', `${px * 100}%`);
    event.currentTarget.style.setProperty('--spot-y', `${py * 100}%`);
    if (!reduceMotion) {
      rotateY.set((px - 0.5) * 3.2);
      rotateX.set((0.5 - py) * 3.2);
    }
  }

  function resetTilt() {
    rotateX.set(0);
    rotateY.set(0);
  }

  if (featured) {
    const reverse = index % 2 === 1;
    return (
      <motion.article
        data-reveal
        initial={{ opacity: 0, y: 64 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          duration: 0.92,
          delay: index * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group/project border-t border-border pt-8 md:pt-10"
      >
        <Link
          href={`/work/${project.slug}`}
          data-cursor="View"
          className="grid gap-8 lg:grid-cols-[1.28fr_0.72fr] lg:items-center lg:gap-14 xl:gap-20"
        >
          <motion.div
            ref={visual}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
            style={
              {
                rotateX,
                rotateY,
                transformPerspective: 1400,
                '--spot-x': '50%',
                '--spot-y': '50%',
              } as CSSProperties
            }
            className={cn(
              'project-spotlight surface-depth relative overflow-hidden rounded-[2rem] will-change-transform',
              reverse && 'lg:order-2',
            )}
          >
            <ProjectVisual
              project={project}
              className="min-h-[430px] sm:min-h-[520px] lg:min-h-[610px]"
            />
            <span className="project-reveal-line" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover/project:opacity-100" />
            <span className="absolute left-5 top-5 inline-flex h-12 min-w-12 items-center justify-center rounded-full border border-white/55 bg-white/20 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-navy-950 backdrop-blur-xl dark:border-white/15 dark:bg-navy-950/25 dark:text-white sm:left-7 sm:top-7">
              0{index + 1}
            </span>
            <div className="absolute bottom-5 right-5 overflow-hidden rounded-full border border-white/60 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-navy-950 opacity-0 backdrop-blur-xl transition duration-500 group-hover/project:translate-y-0 group-hover/project:opacity-100 sm:bottom-7 sm:right-7">
              Open case study
            </div>
          </motion.div>

          <div className={cn('lg:py-10', reverse && 'lg:order-1')}>
            <div className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
              <span>{project.category}</span>
              <span className="h-px w-7 bg-border" />
              <span>{project.year}</span>
            </div>
            <Heading className="mt-6 max-w-xl text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-foreground transition-colors duration-500 group-hover/project:text-accentText">
              {project.title}
            </Heading>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">
              {project.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.services.slice(0, 3).map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted transition group-hover/project:border-foreground/25 group-hover/project:text-foreground"
                >
                  {service}
                </span>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-4">
              <span className="icon-orbit relative inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-accent text-accent-foreground transition-transform duration-500 group-hover/project:rotate-12 group-hover/project:scale-105">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover/project:-translate-y-0.5 group-hover/project:translate-x-0.5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                Explore the work
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      data-reveal
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.78,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor="View"
        className="group block"
      >
        <motion.div
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          className="project-spotlight surface-depth relative overflow-hidden rounded-[1.8rem] will-change-transform"
        >
          <ProjectVisual
            project={project}
            className={cn(
              compact ? 'min-h-[340px] sm:min-h-[390px]' : 'lg:min-h-[520px]',
            )}
          />
          <span className="project-reveal-line" />
          <span className="absolute left-5 top-5 inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/55 bg-white/25 px-2 text-[9px] font-bold tracking-[0.14em] text-navy-950 backdrop-blur-xl dark:border-white/15 dark:bg-navy-950/25 dark:text-white">
            0{index + 1}
          </span>
        </motion.div>
        <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
              <span>{project.category}</span>
              <span aria-hidden="true">/</span>
              <span>{project.year}</span>
            </div>
            <Heading
              className={cn(
                'mt-3 max-w-2xl font-semibold tracking-[-0.045em] text-foreground transition-colors duration-300 group-hover:text-accentText',
                compact ? 'text-2xl md:text-[2rem]' : 'text-2xl md:text-3xl',
              )}
            >
              {project.title}
            </Heading>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted md:text-base">
              {project.summary}
            </p>
          </div>
          <span className="icon-orbit inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
