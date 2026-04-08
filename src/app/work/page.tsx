import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Jimmy Cho",
};

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Page header */}
      <div className="mb-16 pb-8 border-b border-border">
        <h1 className="font-serif font-light text-5xl text-ink">Work</h1>
      </div>

      {/* Two-column layout */}
      <div className="flex gap-16">
        {/* Left sidebar */}
        <aside className="w-40 shrink-0">
          <p className="font-sans text-xs uppercase tracking-widest text-muted mb-4">
            Categories
          </p>
          <ul className="space-y-2">
            {Array.from(new Set(projects.map((p) => p.category))).map((cat) => (
              <li key={cat}>
                <span className="font-sans text-sm text-muted hover:text-ink cursor-default transition-colors">
                  {cat}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Project list */}
        <div className="flex-1 divide-y divide-border">
          {projects.map((project) => (
            <article key={project.id} className="py-8 group">
              <div className="flex items-start gap-6">
                {/* Year badge */}
                <span className="font-sans text-xs px-2.5 py-1 bg-surface text-muted rounded-sm shrink-0 mt-1">
                  {project.year}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h2 className="font-serif font-light text-2xl text-ink leading-snug">
                      {project.title}
                    </h2>
                    <span className="font-sans text-xs uppercase tracking-widest text-muted shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
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
