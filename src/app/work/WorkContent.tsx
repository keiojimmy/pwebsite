"use client";

import { projects } from "@/data/projects";
import ProjectsLayout from "@/components/ProjectsLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { T } from "@/data/translations";

export default function WorkContent() {
  const { lang } = useLanguage();

  return (
    <div className="px-8 sm:px-14 pt-30 sm:pt-36 pb-28 sm:pb-32 max-w-[1200px] mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="font-serif text-[48px] sm:text-[56px] font-light leading-[1.05] tracking-[-0.02em] text-ink mb-3">
          {T.work.title[lang]}
        </h1>
        <div className="w-8 h-px bg-accent opacity-60 my-4" />
        <p className="font-sans text-[15.5px] text-faint italic">
          {T.work.subtitle[lang]}
        </p>
      </div>

      <ProjectsLayout projects={projects} />
    </div>
  );
}
