"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/reveal";

const principles = [
  ["01", "Clarity before decoration", "Medical communication earns trust when complexity becomes calm, legible, and beautifully organized."],
  ["02", "Emotion with restraint", "Recruitment and branding should move people without overstating itself. Quiet conviction travels further."],
  ["03", "Digital as a reputation surface", "Every interaction is a signal: navigation, speed, language, photography, and motion all shape confidence."]
];

export function TrustSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-12%"]);

  return (
    <section id="designing-trust" ref={ref} className="grain relative overflow-hidden bg-night py-28 text-white sm:py-44">
      <motion.div style={{ x }} className="pointer-events-none absolute top-16 whitespace-nowrap font-display text-[16vw] font-semibold leading-none tracking-[-0.08em] text-white/[0.055]">
        Designing Trust
      </motion.div>
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-azure-300/80">
            Creative Philosophy
          </p>
          <h2 className="max-w-5xl text-balance font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            Designing Trust.
          </h2>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-9 text-white/[0.62]">
            Trust is not a slogan. It is built through pacing, hierarchy, language, visual silence,
            and the feeling that every detail has been deliberately cared for.
          </p>
        </Reveal>
        <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-3">
          {principles.map(([number, title, body], index) => (
            <Reveal key={title} delay={index * 0.08}>
              <div className="min-h-72 bg-night/80 p-8 backdrop-blur-xl sm:p-10">
                <p className="font-mono text-xs text-azure-300">{number}</p>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/[0.58]">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
