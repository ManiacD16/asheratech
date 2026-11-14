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
      <span className={cn('eyebrow', align === 'center' && 'justify-center')}>
        {eyebrow}
      </span>
      <h2 className="text-[clamp(3rem,6.6vw,6.75rem)] leading-[0.88] text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-2xl font-serif text-xl leading-[1.25] text-muted md:text-2xl md:leading-[1.22]">
          {description}
        </p>
      )}
    </div>
  );
}
