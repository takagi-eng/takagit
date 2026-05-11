"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function VideoSection() {
  return (
    <section id="film" className="grain relative overflow-hidden bg-night py-28 text-white sm:py-36">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-night to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.35fr] lg:items-end">
        <Reveal>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-azure-300/80">
            Opening Sequence
          </p>
          <h2 className="text-balance font-display text-4xl font-semibold leading-[1.04] tracking-[-0.03em] sm:text-6xl">
            Healthcare seen from above, directed with calm precision
          </h2>
          <p className="mt-7 max-w-xl text-pretty text-base leading-8 text-white/[0.62]">
            Drone footage becomes the emotional prologue: architecture, service, and place translated
            into a quiet cinematic language for medical institutions.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div data-scale-on-scroll className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-editorial">
            <motion.div
              className="video-embed absolute inset-0 scale-[1.04]"
              animate={{ scale: [1.04, 1.09, 1.04] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            >
              <iframe
                title="Cinematic drone footage"
                src="https://www.youtube.com/embed/xorJzal-hFo?autoplay=1&mute=1&loop=1&playlist=xorJzal-hFo&controls=0&modestbranding=1&playsinline=1&rel=0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-night/75 via-night/[0.08] to-white/5" />
            <div className="absolute left-6 top-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-night/[0.45] px-4 py-2 text-xs font-medium text-white/[0.78] backdrop-blur-xl">
              <Play size={13} fill="currentColor" aria-hidden />
              Silent cinematic loop
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-azure-300/[0.85]">
                Aerial Medical Narrative
              </p>
              <p className="mt-2 max-w-lg text-sm leading-6 text-white/[0.72]">
                A premium opening frame for hospital websites, recruitment stories, and institutional brand films.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
