import type { Metadata } from "next";
import { experiences, ventures, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "CV — Jimmy Cho",
};

function RoleList({ items }: { items: typeof experiences }) {
  return (
    <div className="divide-y divide-border">
      {items.map((exp) => (
        <div key={`${exp.company}-${exp.dates}`} className="py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-8 mb-2">
            <div>
              <h2 className="font-serif text-[18px] sm:text-[20px] font-light text-ink leading-tight">
                {exp.role}
              </h2>
              <p className="font-sans text-[13.5px] text-faint italic mt-0.5">
                {exp.company}{exp.location && ` · ${exp.location}`}
              </p>
            </div>
            <span className="font-sans text-[12.5px] text-faint mt-1 sm:mt-0 sm:shrink-0 sm:pt-1">
              {exp.dates}
            </span>
          </div>
          <p className="font-sans text-[14px] text-muted leading-[1.65]">
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
      <div className="mb-8 sm:mb-10">
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
      <section id="corporate" className="mb-10 sm:mb-12 scroll-mt-24 sm:scroll-mt-28">
        <div className="flex items-center gap-5 mb-5 sm:mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            corporate
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <RoleList items={experiences} />
      </section>

      {/* Ventures */}
      <section id="ventures" className="mb-10 sm:mb-12 scroll-mt-24 sm:scroll-mt-28">
        <div className="flex items-center gap-5 mb-5 sm:mb-6">
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
        <div className="flex items-center gap-5 mb-5 sm:mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            education
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="divide-y divide-border">
          {education.map((edu) => (
            <div key={`${edu.school}-${edu.year}`} className="py-4 sm:py-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div>
                  <h2 className="font-serif text-[18px] sm:text-[20px] font-light text-ink leading-tight">
                    {edu.degree}
                  </h2>
                  <p className="font-sans text-[13.5px] text-faint italic mt-0.5">
                    {edu.school}{edu.note && ` · ${edu.note}`}
                  </p>
                </div>
                <span className="font-sans text-[12.5px] text-faint mt-1 sm:mt-0 sm:shrink-0 sm:pt-1">
                  {edu.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
