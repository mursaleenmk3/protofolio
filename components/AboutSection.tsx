"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionTitle } from "@/components/SectionTitle";
import { about, whatIDo } from "@/data/portfolio";

gsap.registerPlugin(useGSAP);

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const aboutItems = gsap.utils.toArray<HTMLElement>(".about-animate");
      const focusCards = gsap.utils.toArray<HTMLElement>(".focus-card");

      gsap.fromTo(
        aboutItems,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform",
        }
      );

      gsap.fromTo(
        focusCards,
        { opacity: 0, y: 28, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          delay: 0.15,
          ease: "power3.out",
          clearProps: "transform",
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="space-y-12">
      <section>
        <div className="about-animate">
          <SectionTitle eyebrow="Introduction" title={about.title} />
        </div>

        <div className="max-w-4xl space-y-4 text-base leading-8 text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="about-animate">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section>
        <div className="about-animate">
          <SectionTitle eyebrow="Focus Areas" title="What I Can Build" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {whatIDo.map((item, index) => (
            <article
              key={item.title}
              className="focus-card group relative overflow-hidden rounded-3xl border border-[rgba(185,216,221,0.18)] bg-[rgba(21,30,40,0.92)] p-6 opacity-100 shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-light)]/35 hover:shadow-[0_14px_45px_rgba(15,73,101,0.18)]"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[rgba(15,73,101,0.28)] blur-2xl transition group-hover:bg-[rgba(185,216,221,0.16)]" />

              <span className="relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(185,216,221,0.2)] bg-[rgba(185,216,221,0.08)] text-sm font-bold text-[var(--accent-light)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="relative z-10 text-lg font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="relative z-10 mt-3 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}