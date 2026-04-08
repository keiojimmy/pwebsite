import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group cursor-pointer hover:bg-accent/[0.04] transition-colors duration-500">
      {/* Image area */}
      <div className="aspect-[4/3] bg-surface flex items-end p-5 overflow-hidden mb-5">
        <span className="font-sans text-[11px] tracking-[0.12em] text-ghost italic lowercase">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="px-1">
        <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-faint italic mb-3">
          {project.category}
        </p>
        <h3 className="font-serif text-[20px] sm:text-[22px] font-light text-ink leading-[1.3] mb-3">
          {project.title}
        </h3>
        <p className="font-sans text-[14.5px] text-muted leading-[1.85]">
          {project.description}
        </p>
      </div>
    </div>
  );
}
