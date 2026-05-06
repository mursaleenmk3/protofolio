"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionTitle } from "@/components/SectionTitle";
import { featuredProject, otherProjects } from "@/data/portfolio";

gsap.registerPlugin(useGSAP);

export function ProjectSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const projectItems = gsap.utils.toArray<HTMLElement>(".project-animate");
      const moduleCards = gsap.utils.toArray<HTMLElement>(".project-module-card");
      const otherCards = gsap.utils.toArray<HTMLElement>(".other-project-card");

      gsap.fromTo(
        projectItems,
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
        moduleCards,
        { opacity: 0, y: 18, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.06,
          delay: 0.15,
          ease: "power3.out",
          clearProps: "transform",
        }
      );

      gsap.fromTo(
        otherCards,
        { opacity: 0, y: 24, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          delay: 0.2,
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
        <div className="project-animate">
          <SectionTitle
            eyebrow="Featured Project"
            title={featuredProject.title}
          />
        </div>

        <article className="project-animate overflow-hidden rounded-[2rem] border border-[rgba(185,216,221,0.16)] bg-[rgba(21,30,40,0.92)] shadow-[0_14px_45px_rgba(0,0,0,0.18)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8">
              <div className="mb-5 flex flex-wrap items-center gap-3">
               

               
              </div>

              <p className="text-xl font-medium leading-9 text-foreground">
                {featuredProject.shortDescription}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <InfoBox title="Problem" text={featuredProject.problem} />
                <InfoBox title="Solution" text={featuredProject.solution} />
              </div>
            </div>

            <div className="border-t border-border bg-background/40 p-5 lg:border-l lg:border-t-0">
              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-3xl border border-border bg-[#071018] p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,73,101,0.22),transparent_34rem)]" />

                <div className="relative w-full rounded-2xl border border-border bg-card p-4 shadow-2xl">
                  <div className="mb-4 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {featuredProject.modules.slice(0, 6).map((module) => (
                      <div
                        key={module}
                        className="project-module-card rounded-2xl border border-[rgba(185,216,221,0.16)] bg-background/70 p-4 opacity-100"
                      >
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-soft">
                          Module
                        </p>
                        <p className="mt-2 font-semibold text-foreground">
                          {module}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-xs leading-5 text-muted-soft">
                    Add your safe screenshot here later.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Key Modules
            </h3>

            <div className="flex flex-wrap gap-3">
              {featuredProject.modules.map((module) => (
                <span
                  key={module}
                  className="rounded-full border border-border bg-background/40 px-4 py-2 text-sm text-muted"
                >
                  {module}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <ListBlock
                title="My Responsibilities"
                items={featuredProject.responsibilities}
              />

              <ListBlock
                title="What I Learned"
                items={featuredProject.learnings}
              />
            </div>

            <div className="mt-8 rounded-3xl border border-border bg-background/40 p-5">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Technical Focus
              </h3>

              <div className="flex flex-wrap gap-3">
                {featuredProject.techFocus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-card px-4 py-2 text-sm text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

           
          </div>
        </article>
      </section>

      <section>
        <div className="project-animate">
          <SectionTitle eyebrow="Selected Work" title="Other Projects" />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {otherProjects.map((project) => (
            <article
              key={project.title}
              className="other-project-card opacity-100 rounded-3xl border border-[rgba(185,216,221,0.18)] bg-[rgba(21,30,40,0.92)] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-light)]/35 hover:shadow-[0_14px_45px_rgba(15,73,101,0.18)]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-light)]">
                {project.type}
              </span>

              <h3 className="mt-3 text-xl font-semibold text-foreground">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {project.description}
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-light)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function InfoBox({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-[rgba(185,216,221,0.16)] bg-background/40 p-5">
      <h3 className="mb-3 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-7 text-muted">{text}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-foreground">{title}</h3>

      <ul className="space-y-3 text-sm leading-6 text-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-light)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}