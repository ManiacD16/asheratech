import Image from 'next/image';
import type { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

const projectArtwork: Record<Project['visual'], { src: string; alt: string }> = {
  payments: {
    src: '/images/studio/work-payments.webp',
    alt: 'A finance operations lead walks a colleague through payment flows on a wall display.',
  },
  assets: {
    src: '/images/studio/work-tokenized-assets.webp',
    alt: 'An investor reviews a property holding on his phone beside an architectural model.',
  },
  health: {
    src: '/images/studio/work-healthcare.webp',
    alt: 'A patient at home on a video consultation with her doctor.',
  },
  operations: {
    src: '/images/studio/work-enterprise.webp',
    alt: 'An operations team reviews workflow status together on a shared dashboard.',
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
        'relative isolate aspect-[3/2] overflow-hidden bg-surface',
        className,
      )}
    >
      <Image
        src={artwork.src}
        alt={artwork.alt}
        width={1536}
        height={1024}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 760px"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover/project:scale-[1.04]"
      />
    </div>
  );
}
