export function SectionLabel({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-azure-500">{eyebrow}</p>
      <h2 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink-900 sm:text-6xl">
        {title}
      </h2>
      {intro ? <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-ink-500 sm:text-lg">{intro}</p> : null}
    </div>
  );
}
