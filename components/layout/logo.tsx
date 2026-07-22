import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({
  className,
  inverse = false,
}: {
  className?: string;
  inverse?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex min-h-11 items-center gap-3 py-1',
        className,
      )}
      aria-label="Asheratech home"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-6 group-hover:scale-105"
      >
        <rect
          width="34"
          height="34"
          rx="11"
          className={inverse ? 'fill-white' : 'fill-navy-900 dark:fill-white'}
        />

        <g transform="translate(17 17) scale(1.6) translate(-17 -17)">
  <path
    d="M9.2 23.8 16.8 7l2.7 6.05-3.32 7.3H12.7L11.1 23.8H9.2Z"
    fill="#00E05C"
    className="origin-center transition-transform duration-700 group-hover:scale-110"
  />

  <path
    d="M20.1 14.35 24.3 23.5h-3.62l-1.42-3.2h-5.24l1.42-3.2h2.4l-1.2-2.67 2.76-1.58Z"
    className={
      inverse ? 'fill-navy-900' : 'fill-white dark:fill-navy-950'
    }
  />
</g>
      </svg>

      <span className="flex min-w-0 flex-col justify-center">
        <span
          className={cn(
            'text-[1.06rem] font-bold leading-none tracking-[0.2em]',
            inverse ? 'text-white' : 'text-foreground',
          )}
        >
          Ashera
          <span className={inverse ? 'text-signal' : 'text-accentText'}>
            tech
          </span>
        </span>

        <span
          className={cn(
            'mt-1 whitespace-nowrap text-[0.7rem] leading-none tracking-[0.05em] transition-colors duration-300 sm:text-[0.7rem]',
            inverse
              ? 'text-white/50 group-hover:text-white/70'
              : 'text-muted group-hover:text-foreground/70',
          )}
        >
          {/*  */}
          Legacy into innovation
        </span>
      </span>
    </Link>
  );
}   