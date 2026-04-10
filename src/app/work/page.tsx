import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectsLayout from "@/components/ProjectsLayout";

export const metadata: Metadata = {
  title: "Projects — Jimmy Cho",
};

export default function WorkPage() {
  return (
    <div className="px-8 sm:px-14 pt-30 sm:pt-36 pb-28 sm:pb-32 max-w-[1200px] mx-auto">

      {/* Page header */}
      <div className="mb-12 sm:mb-16">
        <h1 className="font-serif text-[48px] sm:text-[56px] font-light leading-[1.05] tracking-[-0.02em] text-ink mb-3">
          projects
        </h1>
        <div className="w-8 h-px bg-accent opacity-60 my-4" />
        <p className="font-sans text-[15px] text-faint italic">
          selected projects across founding, operations, and business development.
        </p>
      </div>

      <ProjectsLayout projects={projects} />

    </div>
  );
}
