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

function PhotoGrid({ count }: { count: number }) {
  return (
    <div className={`grid gap-2 ${count === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3"}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="aspect-[4/3] bg-surface border border-border/60 rounded-sm flex items-center justify-center">
          <span className="font-sans text-[11px] text-ghost/50 select-none">photo {i + 1}</span>
        </div>
      ))}
    </div>
  );
}

export default function ProjectsLayout({ projects }: { projects: Project[] }) {
  const [activeId, setActiveId] = useState("");

  return (
    <>
      {/* ── Accordion: all screen sizes ── */}
      <div className="divide-y divide-border">
        {projects.map((project) => {
          const isOpen = activeId === project.id;
          return (
            <div key={project.id}>
              <button
                onClick={() => setActiveId(isOpen ? "" : project.id)}
                className="w-full text-left py-5 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="mb-1.5">
                    <CategoryBadge category={project.category} />
                  </div>
                  <span className={`font-serif text-[15.5px] sm:text-[17.5px] font-light leading-tight transition-colors duration-200 ${isOpen ? "text-ink" : "text-ink/70"}`}>
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
                  <div className="pb-10 pt-1 sm:max-w-3xl">
                    <p className="font-sans text-[12px] text-ghost mb-4">{project.year} · {project.company}</p>
                    <p className="font-sans text-[15.5px] text-muted leading-[1.9] mb-7">{project.description}</p>
                    <PhotoGrid count={project.photos} />
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
