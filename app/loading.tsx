export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[95] flex min-h-screen items-center justify-center overflow-hidden bg-navy-950 text-white"
      role="status"
      aria-label="Loading page"
    >
      <div className="noise" />
      <div className="relative w-[min(82vw,560px)]">
        <div className="flex items-end justify-between border-b border-white/15 pb-5">
          <div>
            <p className="text-2xl font-semibold tracking-[-0.05em]">
              Asheratech<span className="text-signal">.</span>
            </p>
            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
              Loading the next signal
            </p>
          </div>
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
        </div>
        <span className="absolute bottom-0 left-0 h-px w-1/3 animate-[loading-line_1.2s_ease-in-out_infinite] bg-accent" />
      </div>
    </div>
  );
}
