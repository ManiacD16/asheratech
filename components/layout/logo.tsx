import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

/** The ribbon emblem on its own. Decorative unless a label is passed. */
export function LogoMark({
  className,
  size = 44,
  label,
  priority = false,
}: {
  className?: string;
  size?: number;
  label?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/asheraatech-mark.svg"
      alt={label ?? ''}
      aria-hidden={label ? undefined : true}
      width={size}
      height={Math.round(size * (1199 / 1312))}
      priority={priority}
      unoptimized
      className={cn('h-auto shrink-0 select-none', className)}
    />
  );
}

export function Logo({
  className,
  inverse = false,
  markOnly = false,
}: {
  className?: string;
  inverse?: boolean;
  markOnly?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex min-h-11 items-center gap-3 py-1',
        className,
      )}
      aria-label="Asheraatech home"
    >
      <LogoMark
        priority
        className="w-11 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-rotate-6 group-hover:scale-105"
      />

      {!markOnly && (
        <span className="flex min-w-0 flex-col justify-center">
          <span
            className={cn(
              'font-display text-[1.7rem] font-semibold uppercase leading-[0.9] tracking-[0.02em]',
              inverse ? 'text-white' : 'text-foreground',
            )}
          >
            Asheraatech
          </span>
          <span
            className={cn(
              'mt-1 whitespace-nowrap text-[0.68rem] leading-none tracking-[0.08em] transition-colors duration-300',
              inverse
                ? 'text-white/55 group-hover:text-white/80'
                : 'text-muted group-hover:text-foreground/70',
            )}
          >
            Legacy into innovation
          </span>
        </span>
      )}
    </Link>
  );
}
