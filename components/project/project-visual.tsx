import Image from 'next/image';
import type { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

const projectArtwork: Record<Project['visual'], { src: string; alt: string }> = {
  payments: {
    src: '/images/asheratech/case-study-payment-platform.png',
    alt: 'Payment operations platform interface with multi-rail payments, settlement, risk and analytics.',
  },
  assets: {
    src: '/images/asheratech/case-study-tokenized-assets.png',
    alt: 'Tokenized-assets platform showing real-world assets, fractional ownership, custody and on-chain ownership.',
  },
  health: {
    src: '/images/asheratech/case-study-healthcare-mobile.png',
    alt: 'Healthcare mobile experience showing appointments, telehealth, medical records and health monitoring.',
  },
  operations: {
    src: '/images/asheratech/case-study-enterprise-platform.png',
    alt: 'Enterprise operations platform showing workflows, approvals, infrastructure, analytics and team activity.',
  },
};

export function ProjectVisual({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const artwork = projectArtwork[project.visual];

  return (
    <div
      className={cn(
        'relative isolate flex min-h-[340px] items-center justify-center overflow-hidden rounded-[1.6rem] bg-[radial-gradient(circle_at_50%_45%,rgba(0,224,92,.08),transparent_58%)] p-3 sm:min-h-[420px] sm:p-5 dark:bg-[radial-gradient(circle_at_50%_45%,rgba(0,224,92,.07),transparent_62%)]',
        className,
      )}
    >
      <div className="grid-lines absolute inset-0 opacity-[0.08] dark:opacity-[0.06]" />
      <Image
        src={artwork.src}
        alt={artwork.alt}
        width={1536}
        height={1024}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 760px"
        className="relative z-10 h-auto w-full object-contain drop-shadow-[0_28px_52px_rgba(15,23,42,.18)] transition-transform duration-700 group-hover/project:scale-[1.025] dark:drop-shadow-[0_30px_60px_rgba(0,0,0,.32)]"
      />
    </div>
  );
}
