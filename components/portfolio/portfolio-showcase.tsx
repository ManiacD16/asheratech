'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  featuredCategory,
  portfolio,
  portfolioCount,
  type PortfolioCategory,
} from '@/data/portfolio';
import { DisplayTitle } from '@/components/motion/display-title';
import { BlockchainNetworkBackground } from '@/components/sections/blockchain-network-background';
import { cn } from '@/lib/utils';
import styles from '@/components/portfolio/portfolio-showcase.module.css';

type View = 'chapters' | 'index';

const ease = [0.22, 1, 0.36, 1] as const;
const pad = (value: number) => String(value).padStart(2, '0');
/** How long each gallery image stays up before the next one, in ms. */
const CYCLE = 4800;

/*
 * Each chapter header and body watches the viewport once and drives its
 * children through these variants, so nested pieces never need their own
 * observers (a clipped child would never register as visible).
 */
const maskVariants = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  shown: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 1.25, ease },
  },
};
const zoomVariants = {
  hidden: { scale: 1.28 },
  shown: { scale: 1, transition: { duration: 1.6, ease } },
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

function Arrow({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 10" className={className}>
      <path
        d="M0 5h22M18 1l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/* Gallery ----------------------------------------------------------------- */

/**
 * A framed image that tilts toward the pointer and cycles through the
 * sector's imagery while it is on screen. Thumbnails pick an image directly.
 */
function SectorGallery({ category }: { category: PortfolioCategory }) {
  const reduce = useReducedMotion();
  const frame = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const inView = useInView(frame, { amount: 0.35 });
  const { images } = category;
  const many = images.length > 1;
  const playing = many && !reduce && !paused && inView;

  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ['start end', 'end start'],
  });
  const drift = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(
      () => setActive((index) => (index + 1) % images.length),
      CYCLE,
    );
    return () => window.clearTimeout(timer);
  }, [active, playing, images.length]);

  // Pointer tilt and sheen, written straight to CSS variables.
  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType !== 'mouse' || !frame.current) return;
    const rect = frame.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    frame.current.style.setProperty('--rx', `${(0.5 - y) * 6}deg`);
    frame.current.style.setProperty('--ry', `${(x - 0.5) * 8}deg`);
    frame.current.style.setProperty('--mx', `${x * 100}%`);
    frame.current.style.setProperty('--my', `${y * 100}%`);
  };
  const onLeave = () => {
    frame.current?.style.setProperty('--rx', '0deg');
    frame.current?.style.setProperty('--ry', '0deg');
    setPaused(false);
  };

  return (
    <div className={styles.gallery}>
      <div
        ref={frame}
        className={styles.figure}
        onPointerMove={onMove}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setPaused(true);
        }}
        onPointerLeave={onLeave}
      >
        <motion.span className={styles.mask} variants={maskVariants}>
          <motion.span
            className={styles.drift}
            style={reduce ? undefined : { y: drift }}
          >
            <motion.span className={styles.zoom} variants={zoomVariants}>
              {images.map((image, index) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 899px) 100vw, 58vw"
                  aria-hidden={index !== active}
                  className={cn(
                    styles.image,
                    index === active && styles.imageActive,
                  )}
                />
              ))}
            </motion.span>
          </motion.span>
        </motion.span>
        <span className={styles.sheen} aria-hidden="true" />
        <span className={styles.badge} aria-hidden="true">
          {category.short}
        </span>
        {many && (
          <span className={styles.frameCount} aria-hidden="true">
            {pad(active + 1)}
            <span>/{pad(images.length)}</span>
          </span>
        )}
      </div>

      {many && (
        <div className={styles.thumbs} role="group" aria-label="Sector images">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-pressed={index === active}
              aria-label={`Show image ${index + 1} of ${images.length}`}
              onClick={() => setActive(index)}
              className={cn(
                styles.thumb,
                index === active && styles.thumbActive,
              )}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="140px"
                className={styles.thumbImage}
              />
              {index === active && (
                <span
                  key={`${active}-${playing}`}
                  className={cn(styles.timer, playing && styles.timerRunning)}
                  style={{ animationDuration: `${CYCLE}ms` }}
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
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
  const featured = Boolean(category.featured);

  return (
    <section
      id={category.id}
      data-portfolio-chapter={category.id}
      className={cn(styles.chapter, featured && styles.chapterFeatured)}
      aria-labelledby={`${category.id}-title`}
    >
      {featured && (
        <>
          <BlockchainNetworkBackground className={styles.network} />
          <span className={styles.glow} aria-hidden="true" />
          <motion.p
            className={styles.featuredLabel}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <span className={styles.pulse} aria-hidden="true" />
            Core specialism
          </motion.p>
        </>
      )}

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
          {pad(category.products)} live{' '}
          {category.products === 1 ? 'product' : 'products'}
        </motion.span>
        <motion.span
          className={styles.chapterRule}
          aria-hidden="true"
          variants={ruleVariants}
        >
          <span className="diamond" />
        </motion.span>
      </motion.header>

      <motion.div
        className={cn(styles.body, number % 2 === 0 && styles.bodyReverse)}
        initial={reduce ? false : 'hidden'}
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectorGallery category={category} />

        <div className={styles.details}>
          <motion.p
            className={styles.description}
            variants={fadeVariants}
            custom={0.15}
          >
            {category.description}
          </motion.p>

          <motion.div variants={fadeVariants} custom={0.3}>
            <h4 data-plain className={styles.blockLabel}>
              What we build
            </h4>
            <ul className={styles.builds}>
              {category.builds.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.dl
            className={styles.facts}
            variants={fadeVariants}
            custom={0.42}
          >
            <div>
              <dt>Live products</dt>
              <dd className={styles.factNumber}>{pad(category.products)}</dd>
            </div>
            <div>
              <dt>Platforms</dt>
              <dd>{category.platforms}</dd>
            </div>
          </motion.dl>

          <motion.div variants={fadeVariants} custom={0.52}>
            <Link href="/contact" className={styles.cta} data-cursor="Start">
              <span>Discuss a {category.short} project</span>
              <Arrow className={styles.ctaArrow} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* Index view -------------------------------------------------------------- */

function SectorIndex({
  categories,
  onOpen,
}: {
  categories: PortfolioCategory[];
  onOpen: (id: string) => void;
}) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.6 });
  const rotate = useTransform(springX, (value) => (value - x.get()) * -0.06);

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
        <span>Sector</span>
        <span>What we build</span>
        <span>Products</span>
      </div>
      <ul className={styles.indexList}>
        {categories.map((category, index) => (
          <motion.li
            key={category.id}
            className={cn(styles.row, category.featured && styles.rowFeatured)}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') setHovered(category.id);
            }}
            initial={reduce ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05, ease }}
          >
            <span className={styles.rowNumber}>
              {pad(portfolio.indexOf(category) + 1)}
            </span>
            <button
              type="button"
              className={styles.rowName}
              onClick={() => onOpen(category.id)}
            >
              <span data-cursor="Open">
                {category.featured && (
                  <span className={styles.rowMark} aria-hidden="true" />
                )}
                {category.title}
              </span>
            </button>
            <span className={styles.rowBuilds}>
              {category.builds.slice(0, 3).join(' · ')}
            </span>
            <span className={styles.rowCount}>{pad(category.products)}</span>
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
          {portfolio.map((category) => (
            <Image
              key={category.id}
              src={category.images[0].src}
              alt=""
              fill
              sizes="360px"
              className={cn(
                styles.previewImage,
                hovered === category.id && styles.previewImageActive,
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
    { id: 'all', label: 'All sectors', count: portfolioCount, featured: false },
    ...portfolio.map((category) => ({
      id: category.id,
      label: category.short,
      count: category.products,
      featured: Boolean(category.featured),
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
            Blockchain first. Exchanges, token platforms and on-chain products
            lead a portfolio of products shipped across eight sectors.
          </p>
          <dl className={styles.stats}>
            <div>
              <dt>Live products</dt>
              <dd>{pad(portfolioCount)}</dd>
            </div>
            <div className={styles.statFeatured}>
              <dt>Blockchain &amp; Web3</dt>
              <dd>{pad(featuredCategory?.products ?? 0)}</dd>
            </div>
            <div>
              <dt>Sectors</dt>
              <dd>{pad(portfolio.length)}</dd>
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
                  className={cn(
                    styles.chip,
                    chip.featured && styles.chipFeatured,
                    active && styles.chipActive,
                  )}
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
                  {chip.featured && (
                    <span className={styles.chipMark} aria-hidden="true" />
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
                : `${pad(visible.length)} ${visible.length === 1 ? 'sector' : 'sectors'}`}
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
          <SectorIndex
            key={`index-${filter}`}
            categories={visible}
            onOpen={(id) => {
              setView('chapters');
              choose(id);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
