'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  portfolio,
  portfolioCount,
  portfolioProjects,
  type PortfolioCategory,
  type PortfolioLink,
  type PortfolioProject,
} from '@/data/portfolio';
import { DisplayTitle } from '@/components/motion/display-title';
import { cn } from '@/lib/utils';
import styles from '@/components/portfolio/portfolio-showcase.module.css';

type View = 'chapters' | 'index';

const ease = [0.22, 1, 0.36, 1] as const;

/*
 * Each card and chapter header watches the viewport once and drives its
 * children through these variants, so nested pieces never need their own
 * observers (a clipped child would never register as visible).
 */
const cardVariants = {
  hidden: { opacity: 0, y: 56 },
  shown: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease },
  }),
};
const maskVariants = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  shown: (delay: number) => ({
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 1.25, delay: delay + 0.1, ease },
  }),
};
const zoomVariants = {
  hidden: { scale: 1.28 },
  shown: (delay: number) => ({
    scale: 1,
    transition: { duration: 1.6, delay: delay + 0.1, ease },
  }),
};
const riseVariants = {
  hidden: { y: '105%' },
  shown: (delay: number) => ({
    y: '0%',
    transition: { duration: 1.1, delay, ease },
  }),
};
const ruleVariants = {
  hidden: { scaleX: 0 },
  shown: { scaleX: 1, transition: { duration: 1.4, ease } },
};
const fadeVariants = {
  hidden: { opacity: 0, y: 16 },
  shown: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease },
  }),
};
const pad = (value: number) => String(value).padStart(2, '0');

/** Running number of every project across the whole portfolio. */
const globalNumber = new Map(
  portfolioProjects.map((project, index) => [project.slug, index + 1]),
);

function Arrow({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className={className}>
      <path
        d="M2.5 9.5l7-7M4 2.5h5.5V8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function ExternalLink({
  link,
  className,
  children,
}: {
  link: PortfolioLink;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children ?? (
        <>
          <span>{link.label}</span>
          <Arrow className={styles.linkArrow} />
        </>
      )}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/* Card -------------------------------------------------------------------- */

function ProjectCard({
  project,
  index,
  total,
  wide,
}: {
  project: PortfolioProject;
  index: number;
  total: number;
  wide: boolean;
}) {
  const reduce = useReducedMotion();
  const card = useRef<HTMLElement>(null);
  const figure = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: card,
    offset: ['start end', 'end start'],
  });
  const drift = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);
  const primary = project.links[0];

  // Pointer tilt and sheen, written straight to CSS variables.
  const onMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduce || event.pointerType !== 'mouse' || !figure.current) return;
    const rect = figure.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    figure.current.style.setProperty('--rx', `${(0.5 - y) * 7}deg`);
    figure.current.style.setProperty('--ry', `${(x - 0.5) * 9}deg`);
    figure.current.style.setProperty('--mx', `${x * 100}%`);
    figure.current.style.setProperty('--my', `${y * 100}%`);
  };
  const onLeave = () => {
    figure.current?.style.setProperty('--rx', '0deg');
    figure.current?.style.setProperty('--ry', '0deg');
  };

  return (
    <motion.article
      ref={card}
      id={project.slug}
      className={cn(styles.card, wide && styles.cardWide)}
      variants={cardVariants}
      custom={(index % 2) * 0.08}
      initial={reduce ? false : 'hidden'}
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
    >
      <a
        ref={figure}
        href={primary.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.figure}
        data-cursor="Visit"
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        aria-label={`${project.name}: ${primary.label} (opens in a new tab)`}
      >
        <motion.span
          className={styles.mask}
          variants={maskVariants}
          custom={(index % 2) * 0.08}
        >
          <motion.span
            className={styles.drift}
            style={reduce ? undefined : { y: drift }}
          >
            <motion.span
              className={styles.zoom}
              variants={zoomVariants}
              custom={(index % 2) * 0.08}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes={
                  wide
                    ? '(max-width: 899px) 100vw, 58vw'
                    : '(max-width: 899px) 100vw, 46vw'
                }
                className={styles.image}
              />
            </motion.span>
          </motion.span>
        </motion.span>
        <span className={styles.sheen} aria-hidden="true" />
        <span className={styles.badge} aria-hidden="true">
          P.{pad(globalNumber.get(project.slug) ?? 0)}
        </span>
      </a>

      <div className={styles.body}>
        <div className={styles.metaRow}>
          <span className={styles.counter}>
            {pad(index + 1)}
            <span className={styles.counterTotal}>/{pad(total)}</span>
          </span>
          <span className={styles.kind}>{project.kind}</span>
        </div>

        <h4 data-plain className={styles.name}>
          {project.name}
        </h4>
        <p className={styles.summary}>{project.summary}</p>

        <ul className={styles.tags} aria-label="Scope">
          {project.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          {project.links.map((link) => (
            <ExternalLink key={link.href} link={link} className={styles.link} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* Chapter ----------------------------------------------------------------- */

function Chapter({
  category,
  number,
}: {
  category: PortfolioCategory;
  number: number;
}) {
  const reduce = useReducedMotion();
  const total = category.projects.length;

  return (
    <section
      id={category.id}
      data-portfolio-chapter={category.id}
      className={styles.chapter}
      aria-labelledby={`${category.id}-title`}
    >
      <motion.header
        className={styles.chapterHead}
        initial={reduce ? false : 'hidden'}
        whileInView="shown"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className={styles.chapterClip} aria-hidden="true">
          <motion.span
            className={styles.chapterNumber}
            variants={riseVariants}
            custom={0}
          >
            {pad(number)}
          </motion.span>
        </span>
        <div className={styles.chapterText}>
          <div className={styles.chapterClip}>
            <motion.h3
              data-plain
              id={`${category.id}-title`}
              className={styles.chapterTitle}
              variants={riseVariants}
              custom={0.08}
            >
              {category.title}
            </motion.h3>
          </div>
          <motion.p
            className={styles.chapterIntro}
            variants={fadeVariants}
            custom={0.25}
          >
            {category.intro}
          </motion.p>
        </div>
        <motion.span
          className={styles.chapterCount}
          variants={fadeVariants}
          custom={0.35}
        >
          {pad(total)} {total === 1 ? 'project' : 'projects'}
        </motion.span>
        <motion.span
          className={styles.chapterRule}
          aria-hidden="true"
          variants={ruleVariants}
        >
          <span className="diamond" />
        </motion.span>
      </motion.header>

      <div className={styles.grid}>
        {category.projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            total={total}
            wide={total % 2 === 1 && index === 0}
          />
        ))}
      </div>
    </section>
  );
}

/* Index view -------------------------------------------------------------- */

function ProjectIndex({ categories }: { categories: PortfolioCategory[] }) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.6 });
  const rotate = useTransform(springX, (value) => (value - x.get()) * -0.06);
  const rows = categories.flatMap((category) =>
    category.projects.map((project) => ({ project, category })),
  );

  return (
    <motion.div
      className={styles.index}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.6, ease }}
      onPointerMove={(event) => {
        if (event.pointerType !== 'mouse') return;
        x.set(event.clientX);
        y.set(event.clientY);
      }}
      onPointerLeave={() => setHovered(null)}
    >
      <div className={styles.indexHead} aria-hidden="true">
        <span>No.</span>
        <span>Project</span>
        <span>Type</span>
        <span>Sector</span>
        <span>Links</span>
      </div>
      <ul className={styles.indexList}>
        {rows.map(({ project, category }, index) => (
          <motion.li
            key={project.slug}
            className={styles.row}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') setHovered(project.slug);
            }}
            initial={reduce ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.025, ease }}
          >
            <span className={styles.rowNumber}>
              P.{pad(globalNumber.get(project.slug) ?? 0)}
            </span>
            <ExternalLink link={project.links[0]} className={styles.rowName}>
              <span data-cursor="Visit">{project.name}</span>
            </ExternalLink>
            <span className={styles.rowKind}>{project.kind}</span>
            <span className={styles.rowSector}>{category.short}</span>
            <span className={styles.rowLinks}>
              {project.links.map((link) => (
                <ExternalLink
                  key={link.href}
                  link={link}
                  className={styles.rowLink}
                />
              ))}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* Floating preview that trails the pointer (fine pointers only). */}
      <motion.div
        className={styles.preview}
        style={{ x: springX, y: springY, rotate }}
        aria-hidden="true"
      >
        <motion.div
          className={styles.previewFrame}
          animate={{
            opacity: hovered ? 1 : 0,
            scale: hovered ? 1 : 0.6,
          }}
          transition={{ duration: 0.35, ease }}
        >
          {portfolioProjects.map((project) => (
            <Image
              key={project.slug}
              src={project.image}
              alt=""
              fill
              sizes="360px"
              className={cn(
                styles.previewImage,
                hovered === project.slug && styles.previewImageActive,
              )}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* Section ----------------------------------------------------------------- */

export function PortfolioShowcase() {
  const reduce = useReducedMotion();
  const root = useRef<HTMLElement>(null);
  const listTop = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string>('all');
  const [view, setView] = useState<View>('chapters');
  const [current, setCurrent] = useState(portfolio[0].id);

  const visible = useMemo(
    () =>
      filter === 'all'
        ? portfolio
        : portfolio.filter((category) => category.id === filter),
    [filter],
  );
  const visibleCount = visible.reduce(
    (sum, category) => sum + category.projects.length,
    0,
  );

  const { scrollYProgress } = useScroll({
    target: root,
    offset: ['start start', 'end end'],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  // Track which chapter is on screen for the toolbar readout. Reads the
  // live DOM on scroll, so it keeps working after the list is swapped.
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let active: string | null = null;
      root.current
        ?.querySelectorAll<HTMLElement>('[data-portfolio-chapter]')
        .forEach((chapter) => {
          if (chapter.getBoundingClientRect().top <= line) {
            active = chapter.dataset.portfolioChapter ?? active;
          }
        });
      if (active) setCurrent(active);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Bring the list back into view when the filter or view changes mid-scroll.
  const settle = () => {
    const top = listTop.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) {
      window.scrollTo({ top: window.scrollY + top - 140 });
    }
  };

  const choose = (id: string) => {
    setFilter(id);
    if (id !== 'all') setCurrent(id);
    settle();
  };

  const chips = [
    { id: 'all', label: 'All work', count: portfolioCount },
    ...portfolio.map((category) => ({
      id: category.id,
      label: category.short,
      count: category.projects.length,
    })),
  ];

  const currentCategory =
    portfolio.find((category) => category.id === current) ?? portfolio[0];

  return (
    <section
      ref={root}
      id="portfolio"
      data-chapter="Portfolio"
      className={styles.showcase}
      aria-labelledby="portfolio-title"
    >
      <header className={styles.heading}>
        <p className={styles.eyebrow}>
          <span className="diamond" aria-hidden="true" />
          Selected work · Live in production
        </p>
        <div id="portfolio-title">
          <DisplayTitle>The Portfolio</DisplayTitle>
        </div>
        <div className={styles.headingRow}>
          <p className={styles.lead}>
            Apps, platforms and protocols we have designed, engineered and
            shipped for founders and businesses across eight sectors.
          </p>
          <dl className={styles.stats}>
            <div>
              <dt>Live products</dt>
              <dd>{pad(portfolioCount)}</dd>
            </div>
            <div>
              <dt>Sectors</dt>
              <dd>{pad(portfolio.length)}</dd>
            </div>
            <div>
              <dt>Platforms</dt>
              <dd className={styles.statWords}>Web · Mobile · Web3</dd>
            </div>
          </dl>
        </div>
      </header>

      <div ref={listTop} />
      <div className={styles.toolbar} data-tone="light">
        <div
          className={styles.chips}
          role="group"
          aria-label="Filter by sector"
          data-lenis-prevent
        >
          <LayoutGroup id="portfolio-chips">
            {chips.map((chip) => {
              const active = filter === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => choose(chip.id)}
                  className={cn(styles.chip, active && styles.chipActive)}
                >
                  {active && (
                    <motion.span
                      layoutId="portfolio-chip"
                      className={styles.chipFill}
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 34,
                      }}
                    />
                  )}
                  <span className={styles.chipLabel}>{chip.label}</span>
                  <span className={styles.chipCount}>{pad(chip.count)}</span>
                </button>
              );
            })}
          </LayoutGroup>
        </div>

        <div className={styles.toolbarEnd}>
          <span className={styles.readout} aria-live="polite">
            {/* Re-keyed so the CSS rise replays on every change. */}
            <span
              key={view === 'chapters' ? currentCategory.id : 'index'}
              className={styles.readoutText}
            >
              {view === 'chapters'
                ? currentCategory.short
                : `${pad(visibleCount)} listed`}
            </span>
          </span>
          <div className={styles.toggle} role="group" aria-label="Layout">
            {(['chapters', 'index'] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={view === option}
                onClick={() => {
                  setView(option);
                  settle();
                }}
                className={cn(
                  styles.toggleButton,
                  view === option && styles.toggleActive,
                )}
              >
                {option === 'chapters' ? 'Gallery' : 'Index'}
              </button>
            ))}
          </div>
        </div>

        <motion.span
          className={styles.progress}
          style={{ scaleX: reduce ? scrollYProgress : progress }}
          aria-hidden="true"
        />
      </div>

      <AnimatePresence mode="wait">
        {view === 'chapters' ? (
          <motion.div
            key={`chapters-${filter}`}
            className={styles.chapters}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.6, ease }}
          >
            {visible.map((category) => (
              <Chapter
                key={category.id}
                category={category}
                number={portfolio.indexOf(category) + 1}
              />
            ))}
          </motion.div>
        ) : (
          <ProjectIndex key={`index-${filter}`} categories={visible} />
        )}
      </AnimatePresence>
    </section>
  );
}
