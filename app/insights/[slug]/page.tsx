import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getInsight, insights } from '@/data/insights';
import { createMetadata } from '@/lib/metadata';
import { formatDate } from '@/lib/utils';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { FinalCta } from '@/components/sections/final-cta';
import { ArticleToc } from '@/components/insights/article-toc';

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return createMetadata({
    title: insight.title,
    description: insight.excerpt,
    path: `/insights/${insight.slug}`,
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();
  const index = insights.findIndex((item) => item.slug === insight.slug);
  const nextInsight = insights[(index + 1) % insights.length];

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.date,
    author: { '@type': 'Organization', name: 'Asheratech' },
  };

  return (
    <>
      <article>
        <header className="relative overflow-hidden border-b border-border pb-12 pt-28 md:pb-16 md:pt-32 lg:pt-36">
          <div className="grid-lines absolute inset-0 opacity-30" />
          <div className="noise" />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[0.2em] -right-[0.04em] select-none text-[24vw] font-semibold leading-none tracking-[-0.09em] text-foreground/[0.018]"
          >
            NOTE
          </span>
          <Container className="relative">
            <Reveal>
              <Link
                href="/insights"
                className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted transition hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" /> All insights
              </Link>
              <div className="mt-8 max-w-5xl">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  <span>{insight.category}</span>
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  <span>{formatDate(insight.date)}</span>
                  <span>/</span>
                  <span>{insight.readTime}</span>
                </div>
                <h1 className="mt-6 max-w-[15ch] text-[clamp(3.6rem,8vw,8rem)] font-semibold leading-[0.89] tracking-[-0.07em] text-foreground">
                  {insight.title}
                </h1>
                <p className="mt-8 max-w-3xl text-lg leading-9 text-muted md:text-xl">
                  {insight.excerpt}
                </p>
              </div>
            </Reveal>
          </Container>
        </header>

        <section data-chapter="Article" className="py-14 md:py-18">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-24">
              <Reveal>
                <ArticleToc
                  headings={insight.sections.map((section) => section.heading)}
                />
              </Reveal>
              <div className="prose-ashera max-w-3xl">
                {insight.sections.map((section, sectionIndex) => (
                  <Reveal key={section.heading}>
                    <section
                      id={`section-${sectionIndex}`}
                      className="scroll-mt-28"
                    >
                      <h2>{section.heading}</h2>
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </section>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section data-chapter="Read next" className="pb-14 md:pb-18">
          <Container>
            <Reveal>
              <Link
                href={`/insights/${nextInsight.slug}`}
                data-cursor="Read"
                className="surface-depth kinetic-rule group grid gap-8 rounded-[1.8rem] border border-border bg-surface/55 p-8 transition hover:border-foreground/20 md:p-11 lg:grid-cols-[1fr_auto] lg:items-end"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                    Read next
                  </p>
                  <h2 className="mt-5 max-w-3xl text-title font-semibold text-foreground">
                    {nextInsight.title}
                  </h2>
                </div>
                <span className="icon-orbit inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground transition group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </Reveal>
          </Container>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      </article>
      <FinalCta />
    </>
  );
}
