import Image from 'next/image';
import Link from 'next/link';
import { portfolioCount, portfolioHighlights } from '@/data/portfolio';
import { DisplayTitle } from '@/components/motion/display-title';
import { cn } from '@/lib/utils';
import styles from '@/components/home/featured.module.css';

function Meta({ items }: { items: string[] }) {
  return (
    <span className={styles.meta}>
      {items.map((item, index) => (
        <span key={item} className={styles.metaItem}>
          {index > 0 && <span className={styles.dot} aria-hidden="true" />}
          {item}
        </span>
      ))}
    </span>
  );
}

function Card({
  href,
  title,
  meta,
  src,
  alt,
  big = false,
  priority = false,
}: {
  href: string;
  title: string;
  meta: string[];
  src: string;
  alt: string;
  big?: boolean;
  priority?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(styles.card, big && styles.bigCard)}
      data-cursor="Open"
    >
      <span className={styles.figure}>
        <Image
          src={src}
          alt={alt}
          width={1536}
          height={1024}
          priority={priority}
          sizes={
            big
              ? '(max-width: 767px) 100vw, 62vw'
              : '(max-width: 767px) 100vw, 30vw'
          }
          className={styles.image}
        />
      </span>
      <span className={styles.caption}>
        <span className={styles.cardTitle}>{title}</span>
        <Meta items={meta} />
      </span>
    </Link>
  );
}

export function Featured() {
  const [lead, ...rest] = portfolioHighlights;

  return (
    <section
      id="selected-work"
      className={styles.featured}
      aria-labelledby="selected-work-title"
    >
      <header className={styles.heading}>
        <div id="selected-work-title">
          <DisplayTitle>Selected work</DisplayTitle>
        </div>
        <div className={styles.row}>
          <span className={styles.ornament} aria-hidden="true">
            <span className="diamond" />
          </span>
          <p className={styles.lead}>
            Live products across fintech, Web3, healthcare and mobile, built
            from first idea to production.
          </p>
          <div className={styles.count}>
            <span className={styles.countValue}>
              {String(portfolioCount).padStart(2, '0')}
            </span>
            <span className={styles.countLabel}>live products on file</span>
            <Link href="/work#portfolio" className={styles.enter}>
              <span>See all work</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 10"
                className={styles.arrow}
              >
                <path
                  d="M0 5h22M18 1l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.grid}>
        <Card
          big
          href={`/work#${lead.slug}`}
          title={lead.name}
          meta={[lead.category.short, lead.kind]}
          src={lead.image}
          alt={lead.alt}
        />
        {rest.map((project) => (
          <Card
            key={project.slug}
            href={`/work#${project.slug}`}
            title={project.name}
            meta={[project.category.short, project.kind]}
            src={project.image}
            alt={project.alt}
          />
        ))}
        <Link href="/contact" className={styles.filler} data-cursor="Start">
          <span className="diamond" aria-hidden="true" />
          <span className={styles.fillerTitle}>
            Have a complex product to build?
          </span>
          <span className={styles.fillerNote}>
            Bring the ambition, constraints and unanswered questions.
          </span>
          <span className={styles.enter}>
            <span>Start a project</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 10"
              className={styles.arrow}
            >
              <path
                d="M0 5h22M18 1l4 4-4 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
