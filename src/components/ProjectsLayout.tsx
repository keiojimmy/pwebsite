"use client";

import { useState } from "react";
import { Project } from "@/data/projects";

const CATEGORY_COLORS: Record<string, string> = {
  "Founder":              "text-[#b83a2a]/80 border-[#b83a2a]/30 bg-[#b83a2a]/[0.06]",
  "Operations":           "text-[#2a72b8]/80 border-[#2a72b8]/30 bg-[#2a72b8]/[0.06]",
  "Business Development": "text-[#2a9e6e]/80 border-[#2a9e6e]/30 bg-[#2a9e6e]/[0.06]",
  "Consulting":           "text-[#7a5c2a]/80 border-[#7a5c2a]/30 bg-[#7a5c2a]/[0.06]",
};

function CategoryBadge({ category }: { category: string }) {
  const color = CATEGORY_COLORS[category] ?? "text-muted border-border bg-surface";
  return (
    <span className={`inline-block font-sans text-[10px] tracking-[0.06em] uppercase border rounded-sm px-1.5 py-0.5 leading-none ${color}`}>
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
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId) ?? projects[0];
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <>
      {/* ── Desktop: split panel ── */}
      <div className="hidden sm:flex gap-14 lg:gap-20 items-start">

        {/* Left: project list */}
        <aside className="w-52 shrink-0 sticky top-28">
          <nav className="space-y-6">
            {categories.map((cat) => (
              <div key={cat}>
                <p className="font-sans text-[10px] tracking-[0.08em] uppercase text-ghost mb-2">
                  {cat}
                </p>
                <ul className="space-y-px">
                  {projects.filter((p) => p.category === cat).map((p) => (
                    <li key={p.id}>
                      <button
                        onClick={() => setActiveId(p.id)}
                        className={`w-full text-left px-2.5 py-2 rounded-sm font-sans text-[13.5px] leading-snug transition-all duration-200 ${
                          activeId === p.id
                            ? "bg-accent/[0.07] text-ink border-l-2 border-accent/60 pl-2"
                            : "text-faint hover:text-muted hover:bg-surface border-l-2 border-transparent"
                        }`}
                      >
                        {p.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Right: detail panel */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-5">
            <CategoryBadge category={active.category} />
            <span className="font-sans text-[12px] text-ghost">{active.year}</span>
          </div>
          <h2 className="font-serif text-[30px] sm:text-[36px] font-light text-ink leading-tight tracking-[-0.01em] mb-1.5">
            {active.title}
          </h2>
          <p className="font-sans text-[13px] text-faint italic mb-6">
            {active.company}
          </p>
          <p className="font-sans text-[15px] text-muted leading-[1.9] max-w-2xl mb-10">
            {active.description}
          </p>
          <PhotoGrid count={active.photos} />
        </div>

      </div>

      {/* ── Mobile: tap list ── */}
      <div className="sm:hidden divide-y divide-border">
        {projects.map((project) => {
          const isOpen = activeId === project.id;
          return (
            <div key={project.id}>
              <button
                onClick={() => setActiveId(isOpen ? "" : project.id)}
                className="w-full text-left py-4 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="mb-1.5">
                    <CategoryBadge category={project.category} />
                  </div>
                  <span className={`font-serif text-[18px] font-light leading-tight transition-colors duration-200 ${isOpen ? "text-ink" : "text-ink/70"}`}>
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
                  <div className="pb-8 pt-1">
                    <p className="font-sans text-[12px] text-ghost mb-4">{project.year} · {project.company}</p>
                    <p className="font-sans text-[14px] text-muted leading-[1.9] mb-7">{project.description}</p>
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
