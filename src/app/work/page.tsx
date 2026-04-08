import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Jimmy Cho",
};

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

      {/* Page header */}
      <div className="mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-border">
        <h1 className="font-serif font-light text-[28px] sm:text-[32px] tracking-tight text-ink">projects</h1>
        <p className="mt-2 font-sans text-sm text-accent">projects across strategy, investing, and operations.</p>
      </div>

      {/* Two-column layout — stacks on mobile */}
      <div className="flex flex-col sm:flex-row sm:gap-16">

        {/* Sidebar — shown above list on mobile */}
        <aside className="w-full sm:w-40 sm:shrink-0 mb-8 sm:mb-0">
          <p className="font-sans text-xs uppercase tracking-widest text-muted mb-3">
            Categories
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 sm:flex-col sm:space-y-2">
            {Array.from(new Set(projects.map((p) => p.category))).map((cat) => (
              <li key={cat}>
                <span className="font-sans text-sm text-muted">
                  {cat}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Project list */}
        <div className="flex-1 divide-y divide-border">
          {projects.map((project) => (
            <article key={project.id} className="py-6 sm:py-8">
              <div className="flex items-start gap-4 sm:gap-6">

                {/* Year badge */}
                <span className="font-sans text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 bg-accent text-bg rounded-sm shrink-0 mt-1">
                  {project.year}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                    <h2 className="font-serif font-normal text-base sm:text-lg text-ink leading-snug">
                      {project.title}
                    </h2>
                    <span className="font-sans text-xs uppercase tracking-widest text-accent sm:shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-3 sm:mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-xs px-2 py-0.5 border border-border text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
