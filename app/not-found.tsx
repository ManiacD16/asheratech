import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/container';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden pb-20 pt-32">
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="noise" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[34vw] font-semibold leading-none tracking-[-0.1em] text-foreground/[0.025]"
      >
        404
      </span>
      <Container className="relative text-center">
        <div className="text-micro mx-auto inline-flex items-center gap-3 rounded-full border border-border bg-card/70 px-4 py-2 text-muted backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          404 / Signal lost
        </div>
        <h1 className="mx-auto mt-7 max-w-5xl text-[clamp(3.6rem,9vw,9rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-foreground">
          This path doesn’t <span className="headline-outline">compile.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-muted">
          The page may have moved, changed or never existed. The useful part is
          finding the next clear step.
        </p>
        <Link
          href="/"
          data-cursor="Home"
          className="premium-button premium-button--accent button-glint group relative mt-10 inline-flex min-h-[3.25rem] items-center gap-3 overflow-hidden rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground"
        >
          <span className="relative z-10 flex items-center gap-3">
            <span className="icon-orbit border-current/20 inline-flex h-7 w-7 items-center justify-center rounded-full border">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            </span>{' '}
            Back to home
          </span>
        </Link>
      </Container>
    </section>
  );
}
