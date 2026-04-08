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
      <div className="mb-12 sm:mb-16">
        <h1 className="font-serif text-[36px] sm:text-[44px] font-light leading-[1.1] tracking-tight text-ink">
          projects
        </h1>
        <p className="mt-2 font-sans text-[13px] text-muted">
          selected work across strategy, investing, and operations.
        </p>
        <div className="mt-6 h-px bg-border" />
      </div>

      {/* Sections */}
      <div className="space-y-16 sm:space-y-24">
        {sections.map((section) => {
          const sectionProjects = projects.filter((p) => p.section === section);
          return (
            <div key={section}>
              {/* Section label with line */}
              <div className="flex items-center gap-4 mb-8 sm:mb-10">
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted whitespace-nowrap">
                  {section}
                </p>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Card grid — 1 col mobile, 2 col sm, 3 col md+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
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
