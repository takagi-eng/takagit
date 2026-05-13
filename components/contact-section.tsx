"use client";

import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-50 py-24 text-ink-900 sm:py-36">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-azure-500/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-night px-6 py-16 text-white shadow-editorial sm:px-12 sm:py-20 lg:px-16">
            <div className="absolute right-[-8rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-azure-300/20 blur-3xl" />
            <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.35fr] lg:items-end">
              <div>
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-azure-300/80">Contact</p>
                <h2 className="text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Let healthcare communication feel as refined as the care behind it.
                </h2>
                <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-white/[0.62]">
                  病院サイト、採用ブランディング、編集企画、映像的なデジタル表現のご相談に対応します。
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="#top"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/[0.12] px-6 py-4 text-sm font-medium text-white/[0.72] transition hover:border-white/30 hover:text-white"
                >
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
