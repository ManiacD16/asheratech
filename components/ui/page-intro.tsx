import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';

export function PageIntro({
  eyebrow,
  title,
  description,
  aside,
  visual,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  aside?: React.ReactNode;
  visual?: React.ReactNode;
}) {
  return (
    <section
      data-chapter="Overview"
      className="dark relative overflow-hidden bg-background pb-16 pt-32 md:pb-20 md:pt-40 lg:flex lg:min-h-[86svh] lg:items-end lg:pb-24"
    >
      <Image
        src="/brand/asheraatech-mark-line.svg"
        alt=""
        aria-hidden="true"
        width={1312}
        height={1199}
        unoptimized
        priority
        className="pointer-events-none absolute -right-[12%] top-[8%] w-[min(72vw,980px)] max-w-none select-none opacity-70"
      />
      <Container className="relative w-full">
        <p className="mb-8 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-cyan md:mb-10">
          <span className="diamond" aria-hidden="true" />
          {eyebrow}
        </p>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          <Reveal variant="mask">
            <h1 className="max-w-[17ch] text-[clamp(4rem,9.6vw,10.5rem)] leading-[0.84] text-foreground">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="lg:pb-3">
            <div>
              {visual && <div className="mb-8 hidden lg:block">{visual}</div>}

              <p className="max-w-xl font-serif text-[clamp(1.35rem,1.94vw,1.95rem)] leading-[1.18] text-foreground">
                {description}
              </p>

              {aside && <div className="mt-8">{aside}</div>}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
