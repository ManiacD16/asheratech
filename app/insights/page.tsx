import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { insights } from '@/data/insights';
import { createMetadata } from '@/lib/metadata';
import { formatDate } from '@/lib/utils';
import { Container } from '@/components/ui/container';
import { PageIntro } from '@/components/ui/page-intro';
import { Reveal } from '@/components/motion/reveal';
import { FinalCta } from '@/components/sections/final-cta';

export const metadata: Metadata = createMetadata({
  title: 'Insights',
  description:
    'Practical product, design and engineering perspectives on fintech, digital assets, modernization and trustworthy software.',
  path: '/insights',
});

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title={
          <>
            Ideas shaped by{' '}
            <span className="text-gradient">real product work.</span>
          </>
        }
        description="Practical perspectives on building trust, modernizing critical systems and making complex technology useful."
        aside={
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            Product · Design · Engineering
          </p>
        }
      />
      <section data-chapter="Insight library" className="section-shell">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {insights.map((insight, index) => (
              <Reveal
                key={insight.slug}
                delay={index * 0.06}
                className={index === 0 ? 'lg:col-span-2' : ''}
              >
                <Link
                  href={`/insights/${insight.slug}`}
                  data-cursor="Read"
                  className={`surface-depth kinetic-rule group flex h-full flex-col rounded-[1.7rem] border border-border bg-card p-7 transition duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-card md:p-10 ${index === 0 ? 'min-h-[460px]' : 'min-h-[380px]'}`}
                >
                  <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    <span>{insight.category}</span>
                    <span className="icon-orbit inline-flex h-11 w-11 items-center justify-center rounded-full border border-border">
                      <ArrowUpRight className="h-5 w-5 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                    </span>
                  </div>
                  <div className="mt-auto pt-24">
                    <h2
                      className={`${index === 0 ? 'max-w-5xl text-display' : 'text-title'} font-semibold text-foreground`}
                    >
                      {insight.title}
                    </h2>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-base">
                      {insight.excerpt}
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                      <span>{formatDate(insight.date)}</span>
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
