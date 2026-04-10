import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Jimmy Cho",
};

export default function WorkPage() {
  return (
    <div className="px-8 sm:px-14 pt-36 sm:pt-40 pb-28 sm:pb-32 max-w-[1200px] mx-auto">

      {/* Page header */}
      <div className="mb-12 sm:mb-16">
        <h1 className="font-serif text-[48px] sm:text-[56px] font-light leading-[1.05] tracking-[-0.02em] text-ink mb-3">
          projects
        </h1>
        <div className="w-8 h-px bg-accent opacity-60 my-4" />
        <p className="font-sans text-[15px] text-faint italic">
          selected work across operations, founding, and business development.
        </p>
      </div>

      {/* Project list */}
      <div className="divide-y divide-border">
        {projects.map((project) => (
          <div key={project.id} className="py-14 sm:py-16">

            {/* Meta row */}
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-serif text-[13px] italic text-accent/80">
                {project.category}
              </span>
              <span className="font-sans text-[12px] tracking-[0.04em] text-ghost">
                {project.year}
              </span>
            </div>

            {/* Title + company */}
            <h2 className="font-serif text-[28px] sm:text-[34px] font-light text-ink leading-tight tracking-[-0.01em] mb-1">
              {project.title}
            </h2>
            <p className="font-sans text-[13px] text-faint italic mb-6">
              {project.company}
            </p>

            {/* Description */}
            <p className="font-sans text-[15px] text-muted leading-[1.9] max-w-2xl mb-10">
              {project.description}
            </p>

            {/* Photo placeholders */}
            <div className={`grid gap-2.5 ${
              project.photos === 4
                ? "grid-cols-2 sm:grid-cols-4"
                : "grid-cols-2 sm:grid-cols-3"
            }`}>
              {Array.from({ length: project.photos }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] bg-surface border border-border/60 rounded-sm flex items-center justify-center"
                >
                  <span className="font-sans text-[11px] text-ghost/50 select-none">
                    photo {i + 1}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
