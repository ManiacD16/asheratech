import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { PageIntro } from '@/components/ui/page-intro';
import { ProjectCard } from '@/components/project/project-card';
import { FinalCta } from '@/components/sections/final-cta';

export const metadata: Metadata = createMetadata({
  title: 'Selected Work',
  description:
    'Explore representative product strategy, experience design and engineering engagements across fintech, Web3, mobile and enterprise platforms.',
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
        description="A selection of representative engagements showing how we simplify complex systems, shape useful experiences and create foundations ready to scale."
        aside={
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            Strategy · Experience · Engineering
          </p>
        }
      />
      <section data-chapter="Work archive" className="section-shell">
        <Container>
          <div className="grid gap-x-6 gap-y-20 lg:grid-cols-2 lg:gap-y-28">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className={index % 2 === 1 ? 'lg:mt-24' : ''}
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
          <p className="mt-24 max-w-2xl border-l-2 border-accent pl-5 text-sm leading-7 text-muted">
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
