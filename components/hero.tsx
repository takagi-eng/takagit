"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Magnetic } from "@/components/magnetic";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.22], [1, 0.86]);
  const y = useTransform(scrollYProgress, [0, 0.22], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.16]);

  return (
    <section id="top" className="grain relative flex min-h-screen items-center justify-center overflow-hidden bg-radial-hero px-5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px] opacity-20" />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-[18%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-azure-300/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ scale, y, opacity }}
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mb-7 text-[11px] font-semibold uppercase tracking-[0.28em] text-azure-300/80"
        >
          Designing trust through digital experiences
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 34, filter: "blur(18px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.25, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-display text-[clamp(4.2rem,12vw,12.5rem)] font-semibold leading-[0.86] text-white"
        >
          Hirokazu
          <br />
          Takagi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.72 }}
          className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-8 text-white/[0.68] sm:text-lg"
        >
          医療機関の信頼を、ブランド設計・採用広報・UX・編集表現で整える
          Web Director / Digital Experience Designer.
        </motion.p>
      </motion.div>
      <Magnetic className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <a
          href="#film"
          className="inline-flex size-14 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.08] text-white backdrop-blur-xl transition hover:border-azure-300/50 hover:text-azure-300"
          aria-label="Scroll to cinematic film section"
        >
          <ArrowDown size={18} aria-hidden />
        </a>
      </Magnetic>
    </section>
  );
}
