import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

const capabilities = [
  {
    title: 'AI & Intelligent Automation',
    description:
      'Agentic workflows, document intelligence, predictive analytics and enterprise automation connected to real operating systems.',
    image: '/images/studio/cap-ai-automation.webp',
    alt: 'An engineer directs an automated workflow shown as a node graph.',
  },
  {
    title: 'Blockchain Infrastructure & Web3 Engineering',
    description:
      'Production-grade nodes, smart contracts, custody, wallets, transaction observability and multi-chain infrastructure.',
    image: '/images/studio/cap-blockchain.webp',
    alt: 'A blockchain engineer reviews contract code with a hardware key in hand.',
  },
  {
    title: 'Product Engineering / Full-Stack Development',
    description:
      'Frontend, backend, APIs, data, testing and deployment designed as one maintainable product system.',
    image: '/images/studio/cap-product-engineering.webp',
    alt: 'Two engineers pair-program at a wide monitor.',
  },
  {
    title: 'Cloud & DevOps Infrastructure',
    description:
      'Cloud platforms, containers, orchestration, CI/CD, observability and resilient runtime infrastructure.',
    image: '/images/studio/cap-cloud-devops.webp',
    alt: 'An infrastructure engineer checks a laptop in a data-centre aisle.',
  },
  {
    title: 'Cybersecurity & Enterprise Security',
    description:
      'Identity, zero trust, encryption, threat detection, SIEM, network security and compliance built into the platform.',
    image: '/images/studio/cap-cybersecurity.webp',
    alt: 'A security analyst watches network activity across three monitors.',
  },
  {
    title: 'Digital Product Design / UI UX',
    description:
      'User flows, responsive interfaces, design systems and production-ready experiences across web and mobile.',
    image: '/images/studio/cap-product-design.webp',
    alt: 'Two designers work over wireframes, swatches and a tablet.',
  },
  {
    title: 'System Architecture & API Integration',
    description:
      'API gateways, event-driven services, data transformation and secure connections across internal and third-party systems.',
    image: '/images/studio/cap-system-architecture.webp',
    alt: 'An architect draws a system diagram on glass with a colleague.',
  },
  {
    title: 'Mobile Application Engineering',
    description:
      'Cross-platform applications connected to secure backend services, notifications, analytics and cloud infrastructure.',
    image: '/images/studio/cap-mobile-engineering.webp',
    alt: 'A developer tests one app across several phones and tablets.',
  },
  {
    title: 'Data Analytics & Business Intelligence',
    description:
      'Data pipelines, warehouses, real-time dashboards, predictive models and decision-ready operational intelligence.',
    image: '/images/studio/cap-data-analytics.webp',
    alt: 'An analyst presents charts to two colleagues.',
  },
] as const;

export function EngineeringCapabilities() {
  return (
    <section
      data-chapter="Engineering capabilities"
      className="section-shell relative overflow-hidden bg-surface/55"
    >
      <div className="grid-lines absolute inset-0 opacity-[0.12]" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Engineering capability map"
            title={
              <>
                Specialist depth,{' '}
                <span className="text-gradient">connected as one system.</span>
              </>
            }
            description="Each capability can stand alone, but the strongest products connect experience, application engineering, infrastructure, security and data from the start."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2">
          {capabilities.map((capability, index) => (
            <Reveal
              key={capability.title}
              delay={(index % 2) * 0.06}
              className="h-full"
            >
              <article className="surface-depth group flex h-full flex-col overflow-hidden rounded-none border border-border bg-card transition duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-card">
                <div className="relative aspect-[3/2] overflow-hidden bg-surface">
                  <Image
                    src={capability.image}
                    alt={capability.alt}
                    width={1536}
                    height={1024}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="border-t border-border p-6 md:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                        Capability {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-foreground md:text-[2rem]">
                        {capability.title}
                      </h3>
                    </div>
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_7px_rgba(1,230,255,.08)]" />
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                    {capability.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
