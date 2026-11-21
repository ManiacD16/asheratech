import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { PageIntro } from '@/components/ui/page-intro';
import { ProjectCard } from '@/components/project/project-card';
import { FinalCta } from '@/components/sections/final-cta';
import { PortfolioShowcase } from '@/components/portfolio/portfolio-showcase';
import { portfolio, portfolioCount } from '@/data/portfolio';

export const metadata: Metadata = createMetadata({
  title: 'Selected Work',
  description:
    'Live products designed and engineered by Asheraatech across mobile, healthcare, social commerce, fintech, insurtech, mobility, blockchain and Web3.',
  path: '/work',
});

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Selected work"
        title={
          <>
            Built around the{' '}
            <span className="text-gradient">decisions that matter.</span>
          </>
        }
        description={`${portfolioCount} live products across ${portfolio.length} sectors, from Google Play apps to crypto exchanges, showing how we turn complex ideas into products people use.`}
        aside={
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            Strategy · Experience · Engineering
          </p>
        }
      />
      <PortfolioShowcase />
      <section data-chapter="Case studies" className="section-shell">
        <Container>
          <div className="mb-14 grid gap-6 border-b border-border pb-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="text-[clamp(2.6rem,5.6vw,5.5rem)] leading-[0.88]">
              Case studies
            </h2>
            <p className="max-w-xl font-serif text-[clamp(1.2rem,1.7vw,1.6rem)] leading-[1.2] text-muted">
              Deeper write-ups of how we approach a problem, shape the product
              decisions and plan delivery.
            </p>
          </div>
          <div className="grid gap-x-6 gap-y-12 lg:grid-cols-2 lg:gap-y-18">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className={index % 2 === 1 ? 'lg:mt-14' : ''}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  compact
                  headingLevel="h2"
                />
              </div>
            ))}
          </div>
          <p className="mt-16 max-w-2xl border-l-2 border-accent pl-5 text-sm leading-7 text-muted">
            Some engagements are represented without client names or
            confidential performance data. The focus is the problem, product
            decisions and delivery approach.
          </p>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
