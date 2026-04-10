import type { Metadata } from "next";
import { experiences, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "CV — Jimmy Cho",
};

export default function ExperiencePage() {
  return (
    <div className="px-8 sm:px-14 pt-35 sm:pt-36 pb-28 sm:pb-32 max-w-[1200px] mx-auto">

      {/* Page header */}
      <div className="mb-12 sm:mb-14">
        <h1 className="font-serif text-[48px] sm:text-[56px] font-light leading-[1.05] tracking-[-0.02em] text-ink mb-3">
          cv
        </h1>
        <div className="w-8 h-px bg-accent opacity-60 my-4" />
        <p className="font-sans text-[15px] text-faint italic">
          roles, education, and the work behind the work.
        </p>
        <div className="mt-8 h-px bg-border" />
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col sm:flex-row sm:gap-20">

        {/* Sidebar */}
        <aside className="w-full sm:w-36 sm:shrink-0 mb-10 sm:mb-0">
          <nav className="flex gap-8 sm:flex-col sm:gap-0 sm:space-y-2 sm:sticky sm:top-24">
            <a href="#roles" className="font-sans text-[14px] text-faint hover:text-ink transition-colors duration-400 py-0.5">
              Roles
            </a>
            <a href="#education" className="font-sans text-[14px] text-faint hover:text-ink transition-colors duration-400 py-0.5">
              Education
            </a>
          </nav>
        </aside>

        <div className="flex-1">

          {/* Roles */}
          <section id="roles" className="mb-14 sm:mb-16">
            <div className="flex items-center gap-5 mb-7 sm:mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
              <p className="font-serif text-[15px] italic text-accent/80 whitespace-nowrap">
                roles
              </p>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="divide-y divide-border">
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.dates}`} className="py-6 sm:py-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-8 mb-3">
                    <div>
                      <h2 className="font-serif text-[20px] sm:text-[22px] font-light text-ink leading-tight">
                        {exp.role}
                      </h2>
                      <p className="font-sans text-[14.5px] text-faint italic mt-1">
                        {exp.company}{exp.location && ` · ${exp.location}`}
                      </p>
                    </div>
                    <span className="font-sans text-[13px] text-ghost mt-1.5 sm:mt-0 sm:shrink-0 sm:pt-1">
                      {exp.dates}
                    </span>
                  </div>
                  <p className="font-sans text-[14.5px] text-muted leading-[1.85]">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section id="education">
            <div className="flex items-center gap-5 mb-7 sm:mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
              <p className="font-serif text-[15px] italic text-accent/80 whitespace-nowrap">
                education
              </p>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="divide-y divide-border">
              {education.map((edu) => (
                <div key={`${edu.school}-${edu.year}`} className="py-6 sm:py-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <div>
                      <h2 className="font-serif text-[20px] sm:text-[22px] font-light text-ink leading-tight">
                        {edu.degree}
                      </h2>
                      <p className="font-sans text-[14.5px] text-faint italic mt-1">
                        {edu.school}{edu.note && ` · ${edu.note}`}
                      </p>
                    </div>
                    <span className="font-sans text-[13px] text-ghost mt-1.5 sm:mt-0 sm:shrink-0 sm:pt-1">
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
