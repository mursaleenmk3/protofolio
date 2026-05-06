"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FileText } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/portfolio";

gsap.registerPlugin(useGSAP);

export function ResumeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".resume-animate", {
        opacity: 0,
        y: 24,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".resume-card", {
        opacity: 0,
        y: 28,
        scale: 0.98,
        duration: 0.75,
        delay: 0.14,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef}>
      <div className="resume-animate">
        <SectionTitle eyebrow="Resume" title="My Resume" />
      </div>

      <div className="resume-card relative overflow-hidden rounded-[2rem] border border-border bg-card-soft p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[rgba(15,73,101,0.2)] blur-3xl" />

        <div className="relative z-10">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-[var(--accent-soft)] text-[var(--accent-light)]">
            <FileText size={20} />
          </div>

          <h3 className="text-xl font-semibold text-foreground">
            Resume / CV
          </h3>

         <p className="max-w-2xl text-base leading-8 text-muted">
  A quick overview of my technical skills, client project experience,
  deployment exposure, and hands-on work building internal business systems.
</p>

          <a
  href={profile.resume}
  target="_blank"
  className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-[rgba(185,216,221,0.14)] bg-[#0d2f3d] px-5 py-3.5 text-sm font-semibold text-[#d6edf1] shadow-[0_10px_28px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(185,216,221,0.26)] hover:bg-[#124256] hover:shadow-[0_16px_36px_rgba(15,73,101,0.3)]"
>
  <FileText size={18} />
  Open Resume PDF
</a>
          <p className="mt-4 text-sm leading-6 text-muted-soft">
            Keep this PDF updated with your latest projects, skills, portfolio
            link, GitHub, and LinkedIn.
          </p>
        </div>
      </div>
    </section>
  );
}