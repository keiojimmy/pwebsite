import type { Metadata } from "next";
import { experiences, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience — Jimmy Cho",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Page header */}
      <div className="mb-16 pb-8 border-b border-border">
        <h1 className="font-serif font-light text-[32px] tracking-tight text-ink">Experience</h1>
      </div>

      <div className="flex gap-16">
        {/* Left sidebar */}
        <aside className="w-40 shrink-0">
          <nav className="space-y-1 sticky top-20">
            <a
              href="#roles"
              className="block font-sans text-sm text-muted hover:text-ink transition-colors py-1"
            >
              Roles
            </a>
            <a
              href="#education"
              className="block font-sans text-sm text-muted hover:text-ink transition-colors py-1"
            >
              Education
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1">
          {/* Roles */}
          <section id="roles" className="mb-20">
            <p className="font-sans text-xs uppercase tracking-widest text-muted mb-8">
              Roles
            </p>
            <div className="divide-y divide-border">
              {experiences.map((exp) => (
                <div
                  key={`${exp.company}-${exp.dates}`}
                  className="py-8"
                >
                  <div className="flex items-start justify-between gap-8 mb-3">
                    <div>
                      <h2 className="font-serif font-normal text-lg text-ink leading-tight">
                        {exp.role}
                      </h2>
                      <p className="font-sans text-sm text-muted mt-0.5">
                        {exp.company}
                        {exp.location && ` · ${exp.location}`}
                      </p>
                    </div>
                    <span className="font-sans text-xs text-muted shrink-0 pt-1">
                      {exp.dates}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-muted leading-relaxed max-w-xl">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section id="education">
            <p className="font-sans text-xs uppercase tracking-widest text-muted mb-8">
              Education
            </p>
            <div className="divide-y divide-border">
              {education.map((edu) => (
                <div key={`${edu.school}-${edu.year}`} className="py-8">
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <h2 className="font-serif font-normal text-lg text-ink leading-tight">
                        {edu.degree}
                      </h2>
                      <p className="font-sans text-sm text-muted mt-0.5">
                        {edu.school}
                        {edu.note && ` · ${edu.note}`}
                      </p>
                    </div>
                    <span className="font-sans text-xs text-muted shrink-0 pt-1">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
