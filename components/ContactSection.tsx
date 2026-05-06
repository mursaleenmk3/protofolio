"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Mail } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/portfolio";

gsap.registerPlugin(useGSAP);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".contact-animate",
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform",
        }
      );

      gsap.fromTo(
        ".contact-button",
        {
          opacity: 0,
          y: 14,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          delay: 0.18,
          ease: "power3.out",
          clearProps: "transform",
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef}>
      <div className="contact-animate">
        <SectionTitle eyebrow="Contact" title="Let’s Connect" />
      </div>

      <div className="contact-animate rounded-[2rem] border border-border bg-card-soft p-6 sm:p-8">
        <p className="max-w-3xl text-base leading-8 text-muted">
          I’m open to remote frontend, full-stack, and product engineering roles
          where I can contribute, learn fast, and work on real product problems.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="contact-button inline-flex items-center gap-2 rounded-2xl border border-[rgba(185,216,221,0.14)] bg-[#0d2f3d] px-5 py-3.5 text-sm font-semibold text-[#d6edf1] shadow-[0_10px_28px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(185,216,221,0.26)] hover:bg-[#124256]"
          >
            <Mail size={17} />
            Email Me
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-button inline-flex items-center gap-2 rounded-2xl border border-border px-5 py-3.5 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-light)] hover:text-[var(--accent-light)]"
          >
            <ExternalLink size={17} />
            LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="contact-button inline-flex items-center gap-2 rounded-2xl border border-border px-5 py-3.5 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-light)] hover:text-[var(--accent-light)]"
          >
            <ExternalLink size={17} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}