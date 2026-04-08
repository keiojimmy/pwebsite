import type { Metadata } from "next";
import { experiences, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "CV — Jimmy Cho",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

      {/* Page header */}
      <div className="mb-12 sm:mb-16">
        <h1 className="font-serif text-[36px] sm:text-[44px] font-light leading-[1.1] tracking-tight text-ink">
          cv
        </h1>
        <p className="mt-2 font-sans text-[13px] text-muted">
          roles, education, and the work behind the work.
        </p>
        <div className="mt-6 h-px bg-border" />
      </div>

      {/* Two-column layout — stacks on mobile */}
      <div className="flex flex-col sm:flex-row sm:gap-16">

        {/* Sidebar — shown above on mobile */}
        <aside className="w-full sm:w-40 sm:shrink-0 mb-8 sm:mb-0">
          <nav className="flex gap-6 sm:flex-col sm:gap-0 sm:space-y-1.5 sm:sticky sm:top-20">
            <a href="#roles" className="font-sans text-[13px] text-muted hover:text-ink transition-colors py-0.5">
              Roles
            </a>
            <a href="#education" className="font-sans text-[13px] text-muted hover:text-ink transition-colors py-0.5">
              Education
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1">

          {/* Roles */}
          <section id="roles" className="mb-16 sm:mb-20">
            <div className="flex items-center gap-4 mb-8">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted whitespace-nowrap">
                Roles
              </p>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="divide-y divide-border">
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.dates}`} className="py-7 sm:py-8">
                  {/* Role + dates — stacks on mobile */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-8 mb-2 sm:mb-3">
                    <div>
                      <h2 className="font-serif text-lg sm:text-xl text-ink leading-tight">
                        {exp.role}
                      </h2>
                      <p className="font-sans text-[13px] text-muted mt-1">
                        {exp.company}{exp.location && ` · ${exp.location}`}
                      </p>
                    </div>
                    <span className="font-sans text-[12px] text-muted/70 mt-1 sm:mt-0 sm:shrink-0 sm:pt-1.5">
                      {exp.dates}
                    </span>
                  </div>
                  <p className="font-sans text-[14px] text-muted leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section id="education">
            <div className="flex items-center gap-4 mb-8">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted whitespace-nowrap">
                Education
              </p>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="divide-y divide-border">
              {education.map((edu) => (
                <div key={`${edu.school}-${edu.year}`} className="py-7 sm:py-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <div>
                      <h2 className="font-serif text-lg sm:text-xl text-ink leading-tight">
                        {edu.degree}
                      </h2>
                      <p className="font-sans text-[13px] text-muted mt-1">
                        {edu.school}{edu.note && ` · ${edu.note}`}
                      </p>
                    </div>
                    <span className="font-sans text-[12px] text-muted/70 mt-1 sm:mt-0 sm:shrink-0 sm:pt-1.5">
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
