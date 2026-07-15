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
        <path
          d="M9.2 23.8 16.8 7l2.7 6.05-3.32 7.3H12.7L11.1 23.8H9.2Z"
          fill="#00E05C"
          className="origin-center transition-transform duration-700 group-hover:scale-110"
        />
        <path
          d="M20.1 14.35 25 25h-3.62l-1.42-3.2h-5.24l1.42-3.2h2.4l-1.2-2.67 2.76-1.58Z"
          className={
            inverse ? 'fill-navy-900' : 'fill-white dark:fill-navy-950'
          }
        />
      </svg>
      <span
        className={cn(
          'text-[1.06rem] font-bold tracking-[-0.035em]',
          inverse ? 'text-white' : 'text-foreground',
        )}
      >
        Ashera
        <span className={inverse ? 'text-signal' : 'text-accentText'}>
          tech
        </span>
      </span>
    </Link>
  );
}
