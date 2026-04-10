"use client";

import { useState } from "react";
import { Project } from "@/data/projects";

export default function ProjectAccordion({ projects }: { projects: Project[] }) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="divide-y divide-border">
      {projects.map((project) => {
        const isOpen = openIds.has(project.id);
        return (
          <div key={project.id}>

            {/* Row */}
            <button
              onClick={() => toggle(project.id)}
              className="w-full text-left py-5 sm:py-6 flex items-center justify-between gap-6 group"
            >
              <span className={`font-serif text-[20px] sm:text-[24px] font-light leading-tight tracking-[-0.01em] transition-colors duration-300 ${
                isOpen ? "text-ink" : "text-ink/70 group-hover:text-ink"
              }`}>
                {project.title}
              </span>

              <div className="flex items-center gap-5 shrink-0">
                <span className="font-sans text-[12px] text-faint hidden sm:block">
                  {project.category}&nbsp;·&nbsp;{project.year}
                </span>
                <span className={`font-sans text-[20px] text-accent/60 leading-none transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}>
                  +
                </span>
              </div>
            </button>

            {/* Expandable content */}
            <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}>
              <div className="overflow-hidden">
                <div className="pb-12 pt-1">

                  {/* Mobile: category + year */}
                  <p className="font-sans text-[12px] text-faint italic mb-4 sm:hidden">
                    {project.category} · {project.year}
                  </p>

                  {/* Company */}
                  <p className="font-sans text-[13px] text-faint italic mb-5">
                    {project.company}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-[15px] text-muted leading-[1.9] max-w-2xl mb-8">
                    {project.description}
                  </p>

                  {/* Photos */}
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
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}
