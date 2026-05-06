"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FileText, Mail, MapPin, ExternalLink } from "lucide-react";
import { profile } from "@/data/portfolio";

gsap.registerPlugin(useGSAP);

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "mursaleenmk3",
    href: profile.github,
    icon: ExternalLink,
  },
  {
    label: "LinkedIn",
    value: "mursaleen-kembhavi",
    href: profile.linkedin,
    icon: ExternalLink,
  },
  {
    label: "Location",
    value: profile.location,
    href: "",
    icon: MapPin,
  },
];

export function ProfileCard() {
  const cardRef = useRef<HTMLElement | null>(null);

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  useGSAP(
    () => {
      if (!cardRef.current) return;

      gsap.fromTo(
        ".profile-anim",
        {
          opacity: 0,
          y: 16,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          clearProps: "transform",
        }
      );
    },
    { scope: cardRef }
  );

  return (
    <aside
      ref={cardRef}
      className="glass-card relative overflow-hidden p-4 sm:p-6 xl:sticky xl:top-8 xl:max-h-[calc(100vh-4rem)] xl:overflow-y-auto"
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[rgba(185,216,221,0.06)] blur-3xl" />

      <div className="relative z-10 flex items-center gap-4 text-left sm:flex-col sm:text-center">
        <div className="profile-anim flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-border bg-card-soft sm:mb-5 sm:h-32 sm:w-32 sm:rounded-[2rem]">
          {profile.profileImage ? (
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-2xl font-semibold text-[var(--accent-light)] sm:text-4xl">
              {initials}
            </span>
          )}
        </div>

        <div className="min-w-0">
          <h1 className="profile-anim text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {profile.name}
          </h1>

          <p className="profile-anim mt-2 inline-flex rounded-full border border-border bg-card-soft px-3 py-1.5 text-xs text-muted sm:mt-3 sm:px-4 sm:py-2 sm:text-sm">
            {profile.role}
          </p>

          <p className="profile-anim mt-5 hidden max-w-xs text-sm leading-6 text-muted sm:block">
            {profile.tagline}
          </p>
        </div>
      </div>

      <div className="profile-anim my-6 hidden h-px bg-border sm:block" />

      <div className="relative z-10 hidden space-y-4 sm:block">
        {contactLinks.map((item) => {
          const Icon = item.icon;

          const content = (
            <>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-[var(--accent-soft)] text-[var(--accent-light)] transition group-hover:border-[var(--accent-light)]/30">
                <Icon size={19} />
              </span>

              <span className="min-w-0 text-left">
                <span className="block text-xs uppercase tracking-[0.18em] text-muted-soft">
                  {item.label}
                </span>

                <span className="block truncate text-sm font-medium text-foreground transition group-hover:text-[var(--accent-light)]">
                  {item.value}
                </span>
              </span>
            </>
          );

          if (!item.href) {
            return (
              <div
                key={item.label}
                className="profile-anim group flex items-center gap-4 rounded-2xl border border-transparent p-2"
              >
                {content}
              </div>
            );
          }

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="profile-anim group flex items-center gap-4 rounded-2xl border border-transparent p-2 transition hover:border-border hover:bg-card-soft"
            >
              {content}
            </a>
          );
        })}
      </div>

      <a
        href={profile.resume}
        target="_blank"
        className="profile-anim relative z-10 mt-6 hidden items-center justify-center gap-2 rounded-2xl border border-[rgba(185,216,221,0.14)] bg-[#0d2f3d] px-5 py-3.5 text-sm font-semibold text-[#d6edf1] shadow-[0_10px_28px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(185,216,221,0.26)] hover:bg-[#124256] hover:shadow-[0_16px_36px_rgba(15,73,101,0.3)] sm:flex"
      >
        <FileText size={18} />
        Download Resume
      </a>
    </aside>
  );
}