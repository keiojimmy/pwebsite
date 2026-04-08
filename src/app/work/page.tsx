import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Jimmy Cho",
};

export default function WorkPage() {
  const sections = Array.from(new Set(projects.map((p) => p.section)));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

      {/* Page header */}
      <div className="mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-border">
        <h1 className="font-sans font-light text-[28px] sm:text-[32px] tracking-tight text-ink">projects</h1>
        <p className="mt-1 font-sans text-sm text-accent">projects across strategy, investing, and operations.</p>
      </div>

      {/* Sections */}
      <div className="space-y-14 sm:space-y-20">
        {sections.map((section) => {
          const sectionProjects = projects.filter((p) => p.section === section);
          return (
            <div key={section}>
              {/* Section label row */}
              <div className="flex items-baseline justify-between mb-6 sm:mb-8">
                <p className="font-sans text-xs uppercase tracking-widest text-muted">
                  {section}
                </p>
                <span
                  className="font-sans font-light text-[48px] sm:text-[72px] leading-none tracking-tight text-border select-none"
                  aria-hidden="true"
                >
                  {section.split(" ")[0]}
                </span>
              </div>

              {/* Card grid — 1 col mobile, 2 col sm, 3 col md+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {sectionProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
