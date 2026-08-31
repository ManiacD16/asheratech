import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

const capabilities = [
  {
    title: 'AI & Intelligent Automation',
    description:
      'Agentic workflows, document intelligence, predictive analytics and enterprise automation connected to real operating systems.',
    image: '/images/asheratech/capability-ai-automation.png',
  },
  {
    title: 'Blockchain Infrastructure & Web3 Engineering',
    description:
      'Production-grade nodes, smart contracts, custody, wallets, transaction observability and multi-chain infrastructure.',
    image: '/images/asheratech/capability-blockchain-web3.png',
  },
  {
    title: 'Product Engineering / Full-Stack Development',
    description:
      'Frontend, backend, APIs, data, testing and deployment designed as one maintainable product system.',
    image: '/images/asheratech/capability-product-engineering.png',
  },
  {
    title: 'Cloud & DevOps Infrastructure',
    description:
      'Cloud platforms, containers, orchestration, CI/CD, observability and resilient runtime infrastructure.',
    image: '/images/asheratech/capability-cloud-devops.png',
  },
  {
    title: 'Cybersecurity & Enterprise Security',
    description:
      'Identity, zero trust, encryption, threat detection, SIEM, network security and compliance built into the platform.',
    image: '/images/asheratech/capability-cybersecurity.png',
  },
  {
    title: 'Digital Product Design / UI UX',
    description:
      'User flows, responsive interfaces, design systems and production-ready experiences across web and mobile.',
    image: '/images/asheratech/capability-digital-product-design.png',
  },
  {
    title: 'System Architecture & API Integration',
    description:
      'API gateways, event-driven services, data transformation and secure connections across internal and third-party systems.',
    image: '/images/asheratech/capability-system-architecture-api.png',
  },
  {
    title: 'Mobile Application Engineering',
    description:
      'Cross-platform applications connected to secure backend services, notifications, analytics and cloud infrastructure.',
    image: '/images/asheratech/capability-mobile-engineering.png',
  },
  {
    title: 'Data Analytics & Business Intelligence',
    description:
      'Data pipelines, warehouses, real-time dashboards, predictive models and decision-ready operational intelligence.',
    image: '/images/asheratech/capability-data-analytics-bi.png',
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
              <article className="surface-depth group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-border bg-card transition duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-card">
                <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_45%,rgba(0,224,92,.08),transparent_60%)] p-3 sm:min-h-[360px] sm:p-5">
                  <div className="grid-lines absolute inset-0 opacity-[0.08]" />
                  <Image
                    src={capability.image}
                    alt={`${capability.title} illustration`}
                    width={1672}
                    height={941}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="relative z-10 h-auto w-full object-contain drop-shadow-[0_26px_48px_rgba(15,23,42,.18)] transition-transform duration-700 group-hover:scale-[1.025] dark:drop-shadow-[0_28px_56px_rgba(0,0,0,.32)]"
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
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_7px_rgba(0,224,92,.08)]" />
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
