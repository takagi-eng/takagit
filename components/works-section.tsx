"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { Magnetic } from "@/components/magnetic";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export function WorksSection() {
  return (
    <section id="works" className="relative bg-white py-20 text-ink-900 sm:py-28">
      <SectionLabel
        eyebrow="Selected Works"
        title="Immersive case studies for healthcare institutions"
        intro="病院サイト、採用サイト、冊子制作の実績を紹介します。"
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-5 sm:px-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const featured = index === 0;
          return (
            <Reveal key={project.title} delay={Math.min(index * 0.05, 0.2)}>
              <article
                data-scale-on-scroll
                className={`group relative overflow-hidden rounded-[2rem] border border-ink-100 bg-ink-50 shadow-editorial ${
                  featured ? "min-h-[70vh]" : "min-h-[32rem]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} visual direction`}
                  fill
                  sizes="(min-width: 1024px) 1120px, 100vw"
                  className="object-cover object-top transition duration-1000 ease-out group-hover:scale-105"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-night/[0.86] via-night/[0.38] to-night/[0.08]" />
                <div className="absolute inset-0 bg-gradient-to-t from-night/[0.72] via-transparent to-white/5" />
                <div className="relative z-10 flex min-h-[inherit] flex-col justify-between p-6 text-white sm:p-10 lg:p-12">
                  <div className="flex items-start justify-between gap-5">
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/[0.78] backdrop-blur-xl">
                      <Icon size={15} aria-hidden />
                      {project.category}
                    </div>
                    {project.url ? (
                      <Magnetic>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="grid size-12 place-items-center rounded-full border border-white/[0.15] bg-white/10 text-white backdrop-blur-xl transition hover:bg-white hover:text-night"
                          aria-label={`Open ${project.title}`}
                        >
                          <ArrowUpRight size={18} aria-hidden />
                        </a>
                      </Magnetic>
                    ) : null}
                  </div>
                  <div className="max-w-3xl">
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-azure-300">{project.year}</p>
                    <h3 className="text-balance font-display text-4xl font-semibold leading-[1] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                      {project.title}
                    </h3>
                    <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-white/[0.76] sm:text-lg">
                      {project.summary}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.metrics.map((metric) => (
                        <span key={metric} className="rounded-full border border-white/[0.12] bg-white/10 px-4 py-2 text-xs text-white/[0.76] backdrop-blur-xl">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
