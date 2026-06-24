"use client";

import { useState } from "react";
import { Project } from "@/data/projects";

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block font-serif text-[11px] italic text-accent/80 border border-accent/30 bg-accent/[0.05] rounded-sm px-1.5 py-0.5 leading-none">
      {category}
    </span>
  );
}


export default function ProjectsLayout({ projects }: { projects: Project[] }) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <>
      {/* ── Accordion: all screen sizes ── */}
      <div className="flex flex-col gap-2">
        {projects.map((project) => {
          const isOpen = openIds.has(project.id);
          return (
            <div key={project.id} className={`border transition-colors duration-300 ${isOpen ? "border-accent/40 bg-accent/[0.03]" : "border-border"}`}>
              <button
                onClick={() => toggle(project.id)}
                className="w-full text-left px-5 py-2 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="mb-0.5">
                    <CategoryBadge category={project.category} />
                  </div>
                  <span className={`font-serif text-[15px] sm:text-[16.5px] font-light leading-tight transition-colors duration-200 ${isOpen ? "text-ink" : "text-ink/70"}`}>
                    {project.title}
                  </span>
                </div>
                <span className={`font-sans text-[18px] text-accent/60 shrink-0 transition-transform duration-300 leading-none ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>

              {/* Inline detail */}
              <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="px-5 pb-4 pt-0 sm:max-w-3xl">
                    <p className="font-sans text-[12px] text-faint mb-2">{project.year} · {project.company}</p>
                    <p className="font-sans text-[15px] text-muted leading-[1.7]">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
