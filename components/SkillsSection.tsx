"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionTitle } from "@/components/SectionTitle";
import { skills } from "@/data/portfolio";

gsap.registerPlugin(useGSAP);

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const headingItems = gsap.utils.toArray<HTMLElement>(".skills-animate");
      const skillGroups = gsap.utils.toArray<HTMLElement>(".skill-group");

      gsap.fromTo(
        headingItems,
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
        skillGroups,
        { opacity: 0, y: 24, scale: 0.98 },
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
    <section ref={sectionRef}>
      <div className="skills-animate">
        <SectionTitle eyebrow="Toolkit" title="Skills" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="skill-group opacity-100 rounded-3xl border border-[rgba(185,216,221,0.18)] bg-[rgba(21,30,40,0.92)] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-light)]/35 hover:shadow-[0_14px_45px_rgba(15,73,101,0.18)]"
          >
            <h3 className="mb-5 capitalize text-lg font-semibold text-foreground">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[rgba(185,216,221,0.16)] bg-background/40 px-4 py-2 text-sm text-muted transition hover:border-[var(--accent-light)] hover:text-[var(--accent-light)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}