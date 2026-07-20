import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-4xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <span
        className={cn(
          'eyebrow',
          align === 'center' && 'justify-center before:hidden',
        )}
      >
        {eyebrow}
      </span>
      <h2 className="text-[clamp(2.65rem,5.7vw,5.75rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg md:leading-9">
          {description}
        </p>
      )}
    </div>
  );
}
