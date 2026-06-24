"use client";

import { experiences, ventures, education } from "@/data/experience";
import type { Experience } from "@/data/experience";
import { useLanguage } from "@/contexts/LanguageContext";
import { T } from "@/data/translations";
import type { Lang } from "@/data/translations";

function RoleList({ items, lang }: { items: typeof experiences; lang: Lang }) {
  return (
    <div className="divide-y divide-border">
      {items.map((exp) => {
        const role = lang === "jp" && exp.role_jp ? exp.role_jp : exp.role;
        const description = lang === "jp" && exp.description_jp ? exp.description_jp : exp.description;
        return (
          <div key={`${exp.company}-${exp.dates}`} className="py-3 sm:py-4 first:pt-1">
            <div className="flex items-start justify-between gap-3 mb-0.5">
              <h2 className="font-serif text-[16px] sm:text-[17.5px] font-light leading-tight">
                <span className="text-ink">{role}</span>
                <span className="text-muted italic text-[14.5px] sm:text-[15.5px]">
                  {" · "}{exp.company}{exp.location && `, ${exp.location}`}
                </span>
              </h2>
              <span className="font-sans text-[12.5px] sm:text-[13px] text-muted shrink-0 pt-1">
                {exp.dates}
              </span>
            </div>
            <ul className="space-y-1">
              {description.split(/(?<=\.)\s+(?=[A-Z　-鿿一-龯])/).map((sentence, i) => (
                <li
                  key={i}
                  className="font-sans text-[13.5px] sm:text-[14px] text-muted leading-[1.6] flex gap-2 items-baseline"
                >
                  <span className="text-accent/60 shrink-0 select-none">•</span>
                  <span>{sentence}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default function ExperienceContent() {
  const { lang } = useLanguage();

  const sections = [
    { href: "#corporate", label: T.experience.corporate[lang] },
    { href: "#founder",   label: T.experience.founder[lang] },
    { href: "#education", label: T.experience.education[lang] },
  ];

  return (
    <div className="px-8 sm:px-14 pt-30 sm:pt-36 pb-28 sm:pb-32 max-w-[1200px] mx-auto">

      {/* Page header */}
      <div className="mb-7 sm:mb-9">
        <h1 className="font-serif text-[48px] sm:text-[56px] font-light leading-[1.05] tracking-[-0.02em] text-ink mb-3">
          {T.experience.title[lang]}
        </h1>
        <div className="w-8 h-px bg-accent opacity-60 my-4" />
        <p className="font-sans text-[15.5px] text-faint italic">
          {T.experience.subtitle[lang]}
        </p>

        {/* Section anchor nav */}
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
      <section id="corporate" className="mb-3 sm:mb-4 scroll-mt-24 sm:scroll-mt-28">
        <div className="flex items-center gap-5 mb-1 sm:mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            {T.experience.corporate[lang]}
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <RoleList items={experiences} lang={lang} />
      </section>

      {/* Founder */}
      <section id="founder" className="mb-3 sm:mb-4 scroll-mt-24 sm:scroll-mt-28">
        <div className="flex items-center gap-5 mb-1 sm:mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            {T.experience.founder[lang]}
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <RoleList items={ventures} lang={lang} />
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-24 sm:scroll-mt-28">
        <div className="flex items-center gap-5 mb-1 sm:mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            {T.experience.education[lang]}
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="divide-y divide-border">
          {education.map((edu) => {
            const degree = lang === "jp" && edu.degree_jp ? edu.degree_jp : edu.degree;
            const school = lang === "jp" && edu.school_jp ? edu.school_jp : edu.school;
            return (
              <div key={`${edu.school}-${edu.year}`} className="py-3 sm:py-4 first:pt-1">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-serif text-[16px] sm:text-[17.5px] font-light leading-tight">
                    <span className="text-ink">{degree}</span>
                    <span className="text-muted italic text-[14.5px] sm:text-[15.5px]">
                      {" · "}{school}{edu.note && `, ${edu.note}`}
                    </span>
                  </h2>
                  <span className="font-sans text-[12.5px] sm:text-[13px] text-muted shrink-0 pt-1">
                    {edu.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
