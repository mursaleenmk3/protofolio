"use client";

import { useState } from "react";
import { User, Folder, Code, FileText, Mail } from "lucide-react";
import { ProfileCard } from "@/components/ProfileCard";
import { AboutSection } from "@/components/AboutSection";
import { ProjectSection } from "@/components/ProjectSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";
import { navItems } from "@/data/portfolio";

type TabId = (typeof navItems)[number]["id"];

const mobileTabIcons: Record<TabId, typeof User> = {
  about: User,
  projects: Folder,
  skills: Code,
  resume: FileText,
  contact: Mail,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("about");

  const renderDesktopTabButtons = () =>
    navItems.map((item) => {
      const isActive = activeTab === item.id;

      return (
        <li key={item.id}>
          <button
            type="button"
            onClick={() => setActiveTab(item.id)}
            className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-[var(--accent-light)] text-[#0c2a38] shadow-[0_0_24px_rgba(185,216,221,0.14)]"
                : "text-muted hover:bg-[var(--accent-soft-light)] hover:text-[var(--accent-light)]"
            }`}
          >
            {item.label}
          </button>
        </li>
      );
    });

  return (
    <main className="min-h-screen pb-24 pt-5 md:py-10">
      <div className="page-shell grid min-w-0 gap-4 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-6">
        <ProfileCard />

        <section className="glass-card relative min-h-[620px] min-w-0 overflow-hidden">
          {/* Desktop / tablet nav */}
          <nav className="relative z-20 hidden border-b border-border bg-card px-4 py-4 sm:px-6 lg:px-8 md:block">
            <ul className="flex flex-wrap gap-2 xl:justify-end">
              {renderDesktopTabButtons()}
            </ul>
          </nav>

          <div className="relative min-w-0 p-5 sm:p-8 lg:p-10">
            <div className="content-grid-bg" />

            <div className="relative z-10 min-w-0">
              {activeTab === "about" && <AboutSection />}
              {activeTab === "projects" && <ProjectSection />}
              {activeTab === "skills" && <SkillsSection />}
              {activeTab === "resume" && <ResumeSection />}
              {activeTab === "contact" && <ContactSection />}
            </div>
          </div>
        </section>
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-3 bottom-3 z-50 rounded-[1.35rem] border border-border bg-[#101720]/95 p-1.5 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur md:hidden">
        <ul
          className="grid gap-1"
          style={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = mobileTabIcons[item.id];

            return (
              <li key={item.id} className="min-w-0">
                <button
                  type="button"
                  aria-label={item.label}
                  title={item.label}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex h-11 w-full items-center justify-center rounded-[1rem] transition ${
                    isActive
                      ? "bg-[var(--accent-light)] text-[#0c2a38]"
                      : "text-muted hover:bg-[var(--accent-soft-light)] hover:text-[var(--accent-light)]"
                  }`}
                >
                  <Icon size={19} strokeWidth={2.2} />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </main>
  );
}