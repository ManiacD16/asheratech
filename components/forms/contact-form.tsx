'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react';
import { siteConfig } from '@/data/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'peer mt-3 min-h-14 w-full rounded-2xl border border-border bg-surface/45 px-4 text-sm text-foreground outline-none transition duration-300 placeholder:text-muted/55 hover:border-foreground/25 focus:border-accent focus:bg-card focus:ring-4 focus:ring-accent/10 user-invalid:border-foreground/45 motion-reduce:transition-none';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok)
        throw new Error(result.message || 'Unable to send your inquiry.');
      setStatus('success');
      setMessage('Thank you. Your project brief has been received.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please email us directly.',
      );
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        ref={successRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="surface-depth relative flex min-h-[580px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-card p-8 text-center shadow-[0_40px_100px_-60px_rgba(24,31,56,.55)]"
      >
        <span className="icon-orbit inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent/15 text-accentText">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h2 className="mt-8 text-4xl font-semibold tracking-[-0.05em] text-foreground">
          Brief received.
        </h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-muted">
          {message} We’ll review the context and reply using the email you
          provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="link-line mt-9 inline-flex min-h-11 items-center text-sm font-semibold text-foreground"
        >
          Send another inquiry
        </button>
        <span className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={status === 'submitting'}
      className="surface-depth relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-[0_40px_100px_-60px_rgba(24,31,56,.55)] sm:p-9 md:p-12"
    >
      <div className="mb-10 flex items-center justify-between border-b border-border pb-5">
        <div>
          <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Project brief
          </p>
          <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-foreground">
            Tell us what needs to move.
          </p>
        </div>
        <span className="text-xs font-semibold text-accentText">01 / 01</span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label
          htmlFor="contact-name"
          className="group text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground"
        >
          Your name
          <input
            id="contact-name"
            required
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            className={inputClass}
          />
        </label>
        <label
          htmlFor="contact-email"
          className="group text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground"
        >
          Work email
          <input
            id="contact-email"
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClass}
          />
        </label>
        <label
          htmlFor="contact-company"
          className="group text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground"
        >
          Company
          <input
            id="contact-company"
            type="text"
            name="company"
            autoComplete="organization"
            placeholder="Company or venture"
            className={inputClass}
          />
        </label>
        <label
          htmlFor="contact-project-type"
          className="group text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground"
        >
          What are you building?
          <select
            id="contact-project-type"
            required
            name="projectType"
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select a project type
            </option>
            <option>New digital product</option>
            <option>Existing product redesign</option>
            <option>Legacy modernization</option>
            <option>Fintech or payments</option>
            <option>Blockchain or digital assets</option>
            <option>Focused strategy engagement</option>
            <option>Other</option>
          </select>
        </label>
        <label
          htmlFor="contact-timeline"
          className="group text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground"
        >
          Preferred timeline
          <select
            id="contact-timeline"
            name="timeline"
            defaultValue=""
            className={inputClass}
          >
            <option value="">Not decided yet</option>
            <option>As soon as possible</option>
            <option>Within 1–2 months</option>
            <option>Within 3–6 months</option>
            <option>Later this year</option>
          </select>
        </label>
        <label
          htmlFor="contact-budget"
          className="group text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground"
        >
          Indicative budget
          <select
            id="contact-budget"
            name="budget"
            defaultValue=""
            className={inputClass}
          >
            <option value="">Prefer to discuss</option>
            <option>Under $25k</option>
            <option>$25k–$75k</option>
            <option>$75k–$150k</option>
            <option>$150k+</option>
          </select>
        </label>
      </div>
      <label
        htmlFor="contact-message"
        className="mt-7 block text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground"
      >
        Tell us about the opportunity
        <textarea
          id="contact-message"
          required
          name="message"
          rows={7}
          placeholder="What are you trying to create or improve? What makes the problem important now?"
          className={`${inputClass} resize-y py-4 normal-case tracking-normal`}
        />
      </label>
      <div className="mt-8 flex flex-col gap-6 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-muted">
          By submitting, you agree that Asheratech may use these details to
          respond to your inquiry.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          aria-busy={status === 'submitting'}
          data-cursor="Send"
          className="premium-button premium-button--accent button-glint group relative inline-flex min-h-[3.25rem] items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground transition disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="relative z-10 flex items-center gap-2">
            {status === 'submitting' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending
              </>
            ) : (
              <>
                Send project brief{' '}
                <span className="icon-orbit border-current/20 inline-flex h-7 w-7 items-center justify-center rounded-full border">
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </>
            )}
          </span>
        </button>
      </div>
      {status === 'error' && (
        <div
          role="alert"
          className="mt-6 rounded-2xl border border-border bg-surface p-4 text-sm leading-6 text-muted"
        >
          {message}{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4"
          >
            Email {siteConfig.email}
          </a>
          .
        </div>
      )}
      <span className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/[0.06] blur-3xl" />
    </form>
  );
}
