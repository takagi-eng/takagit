"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const contexts = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        const speed = Number(element.dataset.parallax || 0.12);
        gsap.to(element, {
          yPercent: speed * -100,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-scale-on-scroll]").forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 0.94, opacity: 0.74 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              end: "center 42%",
              scrub: true
            }
          }
        );
      });
    });

    return () => {
      contexts.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
