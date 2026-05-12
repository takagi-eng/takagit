"use client";

import { capabilities } from "@/lib/projects";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink-50 py-24 text-ink-900 sm:py-28">
      <div className="absolute right-[-12rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-azure-300/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal>
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-azure-700">About</p>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-[1.12] tracking-[-0.02em] sm:text-6xl">
            Creating sophisticated healthcare digital experiences
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-pretty text-lg leading-9 text-ink-500">
            WEBディレクター歴10年。人材紹介・派遣営業の経験を活かし、全国の病院・クリニックのHP制作や採用HP制作に携わってきました。
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3">
            {capabilities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink-100 bg-white px-4 py-3 text-center text-xs font-medium text-ink-700 shadow-[0_18px_60px_-46px_rgba(2,4,7,0.55)]"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
