import type { Metadata } from "next";
import { experiences, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "CV — Jimmy Cho",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

      {/* Page header */}
      <div className="mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-border">
        <h1 className="font-serif font-light text-[28px] sm:text-[32px] tracking-tight text-ink">cv</h1>
        <p className="mt-1 font-sans text-sm text-accent">roles, education, and the work behind the work.</p>
      </div>

      {/* Two-column layout — stacks on mobile */}
      <div className="flex flex-col sm:flex-row sm:gap-16">

        {/* Sidebar — shown above on mobile */}
        <aside className="w-full sm:w-40 sm:shrink-0 mb-8 sm:mb-0">
          <nav className="flex gap-6 sm:flex-col sm:gap-0 sm:space-y-1 sm:sticky sm:top-20">
            <a href="#roles" className="font-sans text-sm text-muted hover:text-ink transition-colors py-1">
              Roles
            </a>
            <a href="#education" className="font-sans text-sm text-muted hover:text-ink transition-colors py-1">
              Education
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1">

          {/* Roles */}
          <section id="roles" className="mb-14 sm:mb-20">
            <p className="font-sans text-xs uppercase tracking-widest text-muted mb-6 sm:mb-8">
              Roles
            </p>
            <div className="divide-y divide-border">
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.dates}`} className="py-6 sm:py-8">
                  {/* Role + dates — stacks on mobile */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-8 mb-2 sm:mb-3">
                    <div>
                      <h2 className="font-serif font-normal text-base sm:text-lg text-ink leading-tight">
                        {exp.role}
                      </h2>
                      <p className="font-sans text-sm text-muted mt-0.5">
                        {exp.company}{exp.location && ` · ${exp.location}`}
                      </p>
                    </div>
                    <span className="font-sans text-xs text-muted mt-1 sm:mt-0 sm:shrink-0 sm:pt-1">
                      {exp.dates}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section id="education">
            <p className="font-sans text-xs uppercase tracking-widest text-muted mb-6 sm:mb-8">
              Education
            </p>
            <div className="divide-y divide-border">
              {education.map((edu) => (
                <div key={`${edu.school}-${edu.year}`} className="py-6 sm:py-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <div>
                      <h2 className="font-serif font-normal text-base sm:text-lg text-ink leading-tight">
                        {edu.degree}
                      </h2>
                      <p className="font-sans text-sm text-muted mt-0.5">
                        {edu.school}{edu.note && ` · ${edu.note}`}
                      </p>
                    </div>
                    <span className="font-sans text-xs text-muted mt-1 sm:mt-0 sm:shrink-0 sm:pt-1">
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
