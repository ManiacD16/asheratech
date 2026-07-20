import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { getProject, projects } from '@/data/projects';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { ProjectVisual } from '@/components/project/project-visual';
import { Reveal } from '@/components/motion/reveal';
import { FinalCta } from '@/components/sections/final-cta';
import { ProjectHeroSystem } from '@/components/project/project-hero-system';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <article>
        <header className="relative overflow-hidden pb-12 pt-28 md:pb-16 md:pt-32 lg:pb-20 lg:pt-36">
          <div className="grid-lines absolute inset-0 opacity-30" />

          <Container className="relative">
            <Reveal>
              <Link
                href="/work"
                className="mb-8 inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted transition hover:text-foreground md:mb-10"
              >
                <ArrowLeft className="h-4 w-4" />
                All work
              </Link>

              <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(440px,.98fr)] lg:items-start lg:gap-14 xl:gap-20">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                    <span>{project.category}</span>
                    <span>/</span>
                    <span>{project.year}</span>
                  </div>

                  <h1 className="mt-5 max-w-[8.5ch] text-hero font-semibold text-foreground">
                    {project.title}
                  </h1>
                </div>

                <div className="lg:pt-1">
                  <div className="hidden lg:block">
                    <ProjectHeroSystem project={project} />
                  </div>

                  <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl md:leading-9 lg:mt-7">
                    {project.summary}
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </header>

        <Container>
          <Reveal variant="scale">
            <ProjectVisual
              project={project}
              className="min-h-[460px] md:min-h-[640px]"
            />
          </Reveal>
        </Container>

        <section data-chapter="Engagement" className="section-shell">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                    Engagement overview
                  </p>
                  <dl className="mt-8 space-y-7 border-t border-border pt-7">
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Client
                      </dt>
                      <dd className="mt-2 text-sm font-semibold text-foreground">
                        {project.client}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Services
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {project.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-foreground transition hover:border-accent hover:bg-card"
                          >
                            {service}
                          </span>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Technology
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {project.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="text-xs font-medium text-muted"
                          >
                            {platform}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <span className="eyebrow">The challenge</span>
                  <h2 className="text-display font-semibold text-foreground">
                    Clarity had to become part of the system.
                  </h2>
                  <p className="mt-7 text-lg leading-9 text-muted">
                    {project.challenge}
                  </p>
                </Reveal>
                <div className="mt-14">
                  <Reveal>
                    <span className="eyebrow">The approach</span>
                    <h2 className="text-title font-semibold text-foreground">
                      Product decisions connected from interface to
                      architecture.
                    </h2>
                  </Reveal>
                  <div className="mt-9 border-t border-border">
                    {project.approach.map((item, itemIndex) => (
                      <Reveal key={item} delay={itemIndex * 0.05}>
                        <div className="kinetic-rule group grid gap-4 border-b border-border py-7 sm:grid-cols-[40px_1fr]">
                          <span className="icon-orbit inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-foreground">
                            <Check className="h-3.5 w-3.5 text-accentText" />
                          </span>
                          <p className="text-base leading-8 text-muted md:text-lg">
                            {item}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section
          data-chapter="Outcomes"
          className="bg-surface/55 py-14 md:py-18"
        >
          <Container>
            <Reveal>
              <div className="grid gap-5 md:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="surface-depth rounded-[1.5rem] border border-border bg-card p-7 transition duration-500 hover:-translate-y-1 hover:border-accent/50 md:p-9"
                  >
                    <p className="text-4xl font-semibold tracking-[-0.045em] text-foreground md:text-5xl">
                      {metric.value}
                    </p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-10 grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
                <span className="eyebrow h-fit">The outcome</span>
                <p className="text-title font-medium text-foreground">
                  {project.outcome}
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section data-chapter="Next project" className="section-shell">
          <Container>
            <Reveal>
              <Link
                href={`/work/${nextProject.slug}`}
                data-cursor="View"
                className="surface-depth kinetic-rule group grid gap-8 rounded-[2rem] border border-border bg-card p-8 transition duration-500 hover:border-foreground/20 hover:shadow-card md:p-12 lg:grid-cols-[1fr_auto] lg:items-end"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                    Next project
                  </p>
                  <h2 className="mt-5 max-w-3xl text-title font-semibold text-foreground">
                    {nextProject.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                    {nextProject.summary}
                  </p>
                </div>
                <span className="icon-orbit inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground transition group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </Reveal>
          </Container>
        </section>
      </article>
      <FinalCta />
    </>
  );
}
