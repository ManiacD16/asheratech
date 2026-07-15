import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { insights } from '@/data/insights';
import { formatDate } from '@/lib/utils';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';

export function InsightsPreview() {
  return (
    <section data-chapter="Insights" className="section-shell bg-surface/55">
      <Container>
        <div className="flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Latest thinking"
              title="Notes from the work behind the work."
              description="Practical thinking on product trust, modernization and designing useful technology around real decisions."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Button href="/insights" variant="secondary">
              View all insights
            </Button>
          </Reveal>
        </div>
        <div className="mt-16 border-t border-border lg:mt-24">
          {insights.map((insight, index) => (
            <Reveal key={insight.slug} delay={index * 0.05}>
              <Link
                href={`/insights/${insight.slug}`}
                data-cursor="Read"
                className="kinetic-rule group relative grid gap-7 overflow-hidden border-b border-border py-9 transition md:grid-cols-[70px_0.65fr_1.35fr_auto] md:items-center md:py-12"
              >
                <span className="relative z-10 text-xs font-semibold text-accentText">
                  0{index + 1}
                </span>
                <div className="relative z-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted transition group-hover:text-white/55">
                    {insight.category}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted transition group-hover:text-white/55">
                    {formatDate(insight.date)} · {insight.readTime}
                  </p>
                </div>
                <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
                  <h3 className="max-w-3xl text-2xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground transition group-hover:text-white md:text-4xl">
                    {insight.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted transition group-hover:text-white/60">
                    {insight.excerpt}
                  </p>
                </div>
                <span className="icon-orbit relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition duration-500 group-hover:rotate-12 group-hover:border-accent group-hover:bg-accent group-hover:text-navy-950">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                <span className="absolute inset-y-0 left-0 w-0 bg-navy-900 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
