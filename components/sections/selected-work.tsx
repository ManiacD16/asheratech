import { projects } from '@/data/projects';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project/project-card';
import { Reveal } from '@/components/motion/reveal';

export function SelectedWork() {
  const featured = projects.filter((project) => project.featured);
  return (
    <section
      data-chapter="Selected work"
      id="selected-work"
      className="section-shell relative overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-[0.08em] top-20 select-none text-[18vw] font-semibold leading-none tracking-[-0.08em] text-foreground/[0.018]"
      >
        WORK
      </span>
      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title={
                <>
                  Products shaped around{' '}
                  <span className="text-gradient">real decisions.</span>
                </>
              }
              description="Representative engagements across payments, digital assets and mobile products. Each story shows how strategy, design and engineering connect."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/work" variant="secondary">
              Explore all work
            </Button>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-16 lg:mt-18 lg:gap-24">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              featured
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
