import Image from 'next/image';
import Link from 'next/link';
import { projects, type Project } from '@/data/projects';
import { DisplayTitle } from '@/components/motion/display-title';
import { cn } from '@/lib/utils';
import styles from '@/components/home/featured.module.css';

const artwork: Record<Project['visual'], { src: string; alt: string }> = {
  payments: {
    src: '/images/studio/work-payments.webp',
    alt: 'A finance operations lead walks a colleague through payment flows on a wall display.',
  },
  assets: {
    src: '/images/studio/work-tokenized-assets.webp',
    alt: 'An investor reviews a property holding on his phone beside an architectural model.',
  },
  health: {
    src: '/images/studio/work-healthcare.webp',
    alt: 'A patient at home on a video consultation with her doctor.',
  },
  operations: {
    src: '/images/studio/work-enterprise.webp',
    alt: 'An operations team reviews workflow status together on a shared dashboard.',
  },
};

const practices = [
  {
    title: 'Blockchain engineering',
    meta: ['Practice', 'Contracts, wallets, tokenization'],
    href: '/services#fintech-web3',
    src: '/images/studio/cap-blockchain.webp',
    alt: 'A blockchain engineer reviews contract code with a hardware key in hand.',
  },
];

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
  const [lead, ...rest] = projects;
  const practice = practices[0];

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
            Chosen for the decisions they made clearer and the systems they
            left behind.
          </p>
          <div className={styles.count}>
            <span className={styles.countValue}>
              {String(projects.length).padStart(2, '0')}
            </span>
            <span className={styles.countLabel}>product stories on file</span>
            <Link href="/work" className={styles.enter}>
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
          href={`/work/${lead.slug}`}
          title={lead.title}
          meta={[lead.year, lead.category]}
          {...artwork[lead.visual]}
        />
        {rest.map((project) => (
          <Card
            key={project.slug}
            href={`/work/${project.slug}`}
            title={project.title}
            meta={[project.year, project.category]}
            {...artwork[project.visual]}
          />
        ))}
        <Card
          href={practice.href}
          title={practice.title}
          meta={practice.meta}
          src={practice.src}
          alt={practice.alt}
        />
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
            <svg aria-hidden="true" viewBox="0 0 24 10" className={styles.arrow}>
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
