import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Jimmy Cho",
};

export default function WorkPage() {
  const sections = Array.from(new Set(projects.map((p) => p.section)));

  return (
    <div className="px-8 sm:px-14 pt-36 sm:pt-40 pb-28 sm:pb-32 max-w-[1200px]">

      {/* Page header */}
      <div className="mb-20 sm:mb-24">
        <h1 className="font-serif text-[48px] sm:text-[56px] font-light leading-[1.05] tracking-[-0.02em] text-ink mb-3">
          projects
        </h1>
        <div className="w-8 h-px bg-accent opacity-55 my-4" />
        <p className="font-sans text-[15px] text-faint italic">
          selected work across strategy, investing, and operations.
        </p>
        <div className="mt-8 h-px bg-border" />
      </div>

      {/* Sections */}
      <div className="space-y-20 sm:space-y-28">
        {sections.map((section) => {
          const sectionProjects = projects.filter((p) => p.section === section);
          return (
            <div key={section}>
              {/* Section label */}
              <div className="flex items-center gap-5 mb-10 sm:mb-12">
                <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-50 shrink-0" />
                <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-ghost italic whitespace-nowrap">
                  {section}
                </p>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Card grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
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
