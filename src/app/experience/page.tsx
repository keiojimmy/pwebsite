import type { Metadata } from "next";
import { experiences, ventures, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "CV — Jimmy Cho",
};

const sections = [
  { href: "#corporate", label: "corporate" },
  { href: "#founder", label: "founder" },
  { href: "#education", label: "education" },
];

function RoleList({ items }: { items: typeof experiences }) {
  return (
    <div className="divide-y divide-border">
      {items.map((exp) => (
        <div key={`${exp.company}-${exp.dates}`} className="py-3 sm:py-4 first:pt-1">
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <h2 className="font-serif text-[16px] sm:text-[17.5px] font-light leading-tight">
              <span className="text-ink">{exp.role}</span>
              <span className="text-muted italic">
                {" · "}{exp.company}{exp.location && `, ${exp.location}`}
              </span>
            </h2>
            <span className="font-sans text-[12.5px] sm:text-[13px] text-muted shrink-0 pt-1">
              {exp.dates}
            </span>
          </div>
          <p className="font-sans text-[13.5px] sm:text-[14px] text-muted leading-[1.6]">
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

        {/* Section anchor nav — accent boxes */}
        <nav className="flex flex-wrap items-center gap-2 mt-5">
          {sections.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="border border-accent/40 bg-accent/[0.05] rounded-md px-2.5 py-0.5 font-sans text-[13px] text-accent/80 hover:bg-accent/[0.1] hover:border-accent/60 hover:text-accent transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Corporate */}
      <section id="corporate" className="mb-7 sm:mb-9 scroll-mt-24 sm:scroll-mt-28">
        <div className="flex items-center gap-5 mb-1 sm:mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            corporate
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <RoleList items={experiences} />
      </section>

      {/* Founder */}
      <section id="founder" className="mb-7 sm:mb-9 scroll-mt-24 sm:scroll-mt-28">
        <div className="flex items-center gap-5 mb-1 sm:mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            founder
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <RoleList items={ventures} />
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-24 sm:scroll-mt-28">
        <div className="flex items-center gap-5 mb-1 sm:mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            education
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="divide-y divide-border">
          {education.map((edu) => (
            <div key={`${edu.school}-${edu.year}`} className="py-3 sm:py-4 first:pt-1">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-serif text-[16px] sm:text-[17.5px] font-light leading-tight">
                  <span className="text-ink">{edu.degree}</span>
                  <span className="text-muted italic">
                    {" · "}{edu.school}{edu.note && `, ${edu.note}`}
                  </span>
                </h2>
                <span className="font-sans text-[12.5px] sm:text-[13px] text-muted shrink-0 pt-1">
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
