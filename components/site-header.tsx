"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";

const nav = ["About", "Works", "Designing Trust", "Contact"];

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-5 py-5 sm:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-night/[0.45] px-4 py-3 text-white shadow-editorial backdrop-blur-2xl">
        <a href="#top" className="group flex items-center gap-3" aria-label="Hirokazu Takagi portfolio home">
          <span className="grid size-8 place-items-center rounded-full border border-white/[0.15] bg-white/[0.08] text-[11px] font-semibold">
            HT
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-white/[0.72] sm:block">
            Hirokazu Takagi
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-[0.18em] text-white/[0.55] md:flex">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>
        <Magnetic>
          <a
            href="mailto:hello@hirokazu-takagi.jp"
            className="inline-flex items-center gap-2 rounded-full border border-azure-300/25 bg-white/90 px-4 py-2 text-xs font-semibold text-night transition hover:bg-azure-300"
          >
            Inquiry
            <ArrowUpRight size={14} aria-hidden />
          </a>
        </Magnetic>
      </div>
    </motion.header>
  );
}
