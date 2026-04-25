import type { Metadata } from "next";
import { experiences, ventures, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "CV — Jimmy Cho",
};

function RoleList({ items }: { items: typeof experiences }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((exp) => (
        <div
          key={`${exp.company}-${exp.dates}`}
          className="border border-border px-4 py-3 sm:px-5 sm:py-4 transition-colors duration-200 hover:bg-surface/40"
        >
          <div className="flex items-start justify-between gap-3 mb-0.5">
            <h2 className="font-serif text-[16.5px] sm:text-[18px] font-light text-ink leading-tight">
              {exp.role}
            </h2>
            <span className="font-sans text-[12px] sm:text-[12.5px] text-muted shrink-0 pt-1">
              {exp.dates}
            </span>
          </div>
          <p className="font-sans text-[12.5px] sm:text-[13px] text-muted italic mb-2">
            {exp.company}{exp.location && ` · ${exp.location}`}
          </p>
          <p className="font-sans text-[13.5px] sm:text-[14px] text-muted leading-[1.65]">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="px-8 sm:px-14 pt-30 sm:pt-36 pb-28 sm:pb-32 max-w-[1200px] mx-auto">

      {/* Page header */}
      <div className="mb-7 sm:mb-9">
        <h1 className="font-serif text-[48px] sm:text-[56px] font-light leading-[1.05] tracking-[-0.02em] text-ink mb-3">
          cv
        </h1>
        <div className="w-8 h-px bg-accent opacity-60 my-4" />
        <p className="font-sans text-[15.5px] text-faint italic">
          roles, education, and the work behind the work.
        </p>

        {/* Section anchor nav */}
        <nav className="flex items-center gap-3 mt-5 font-sans text-[13.5px]">
          <a href="#corporate" className="text-muted hover:text-ink transition-colors duration-200">
            corporate
          </a>
          <span className="text-ghost">·</span>
          <a href="#ventures" className="text-muted hover:text-ink transition-colors duration-200">
            ventures
          </a>
          <span className="text-ghost">·</span>
          <a href="#education" className="text-muted hover:text-ink transition-colors duration-200">
            education
          </a>
        </nav>
      </div>

      {/* Corporate */}
      <section id="corporate" className="mb-7 sm:mb-9 scroll-mt-24 sm:scroll-mt-28">
        <div className="flex items-center gap-5 mb-3 sm:mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            corporate
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <RoleList items={experiences} />
      </section>

      {/* Ventures */}
      <section id="ventures" className="mb-7 sm:mb-9 scroll-mt-24 sm:scroll-mt-28">
        <div className="flex items-center gap-5 mb-3 sm:mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            ventures
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <RoleList items={ventures} />
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-24 sm:scroll-mt-28">
        <div className="flex items-center gap-5 mb-3 sm:mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            education
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="flex flex-col gap-2">
          {education.map((edu) => (
            <div
              key={`${edu.school}-${edu.year}`}
              className="border border-border px-4 py-3 sm:px-5 sm:py-4 transition-colors duration-200 hover:bg-surface/40"
            >
              <div className="flex items-start justify-between gap-3 mb-0.5">
                <h2 className="font-serif text-[16.5px] sm:text-[18px] font-light text-ink leading-tight">
                  {edu.degree}
                </h2>
                <span className="font-sans text-[12px] sm:text-[12.5px] text-muted shrink-0 pt-1">
                  {edu.year}
                </span>
              </div>
              <p className="font-sans text-[12.5px] sm:text-[13px] text-muted italic">
                {edu.school}{edu.note && ` · ${edu.note}`}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
