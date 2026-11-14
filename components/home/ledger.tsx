import Link from 'next/link';
import { insights } from '@/data/insights';
import { processSteps } from '@/data/site';
import { DrawLines } from '@/components/home/draw-lines';
import styles from '@/components/home/ledger.module.css';

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

function minutes(readTime: string) {
  return Number.parseInt(readTime, 10) || 0;
}

export function Ledger() {
  const longest = Math.max(...insights.map((item) => minutes(item.readTime)));

  return (
    <section className={styles.table} aria-label="Process and writing">
      <DrawLines>
        {/* How an engagement runs -------------------------------------- */}
        <div className={`${styles.frame} notched`}>
          <div className={`${styles.frameInner} notched`}>
            <div className={styles.frameLead}>
              <h2 data-plain className={styles.frameTitle}>
                One engagement, four moves
              </h2>
              <span className={styles.rule} aria-hidden="true">
                <span className="diamond" />
              </span>
              <p className={styles.frameMeta}>
                {processSteps.map((step) => step.title).join(' / ')}
              </p>
              <p className={styles.frameNote}>
                Clear milestones, shared decision logs and frequent working
                releases keep delivery transparent.
              </p>
            </div>

            <ol className={styles.steps}>
              {processSteps.map((step, index) => (
                <li key={step.id} className={styles.step}>
                  <div className={styles.stepRow}>
                    <span className={styles.stepTitle}>{step.title}</span>
                    <span className={styles.stepTag}>{step.outputs[0]}</span>
                    <span className={styles.stepIndex}>
                      {step.number} of{' '}
                      {String(processSteps.length).padStart(2, '0')}
                    </span>
                  </div>
                  <p className={styles.stepCopy}>{step.description}</p>
                  <span className={styles.track} aria-hidden="true">
                    <span
                      data-draw
                      className={styles.trackFill}
                      style={{
                        width: `${((index + 1) / processSteps.length) * 100}%`,
                      }}
                    />
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Writing log -------------------------------------------------- */}
        <div className={styles.archive}>
          <header className={styles.archiveHeader}>
            <h2 data-plain className={styles.archiveTitle}>
              Field notes
            </h2>
            <div className={styles.archiveCount}>
              <span className={styles.countLabel}>Latest writing</span>
              <span className={styles.countValue}>
                {String(insights.length).padStart(2, '0')} notes
              </span>
              <Link href="/insights" className={styles.open}>
                <span>Open all insights</span>
                <svg aria-hidden="true" viewBox="0 0 24 10">
                  <path
                    d="M0 5h22M18 1l4 4-4 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </Link>
            </div>
          </header>

          <div className={styles.columns} aria-hidden="true">
            <span />
            <span>Date</span>
            <span>Note</span>
            <span>Topic</span>
            <span className={styles.end}>Read</span>
          </div>

          <ol className={styles.archiveList}>
            {insights.map((insight, index) => (
              <li key={insight.slug}>
                <Link
                  href={`/insights/${insight.slug}`}
                  className={styles.entry}
                  data-cursor="Read"
                >
                  <span className={styles.entryIndex}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <time dateTime={insight.date} className={styles.entryDate}>
                    {dateFormat.format(new Date(insight.date))}
                  </time>
                  <span className={styles.entryBody}>
                    <span className={styles.entryTitle}>{insight.title}</span>
                    <span className={styles.entryExcerpt}>
                      {insight.excerpt}
                    </span>
                  </span>
                  <span className={styles.entryTopic}>{insight.category}</span>
                  <span className={styles.entryRead}>{insight.readTime}</span>
                  <span className={styles.entryLine} aria-hidden="true">
                    <span
                      data-draw
                      style={{
                        width: `${(minutes(insight.readTime) / longest) * 100}%`,
                      }}
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </DrawLines>
    </section>
  );
}
