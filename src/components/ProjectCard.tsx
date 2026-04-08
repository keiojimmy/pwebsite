import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group bg-bg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer overflow-hidden">
      {/* Image area */}
      <div className="aspect-[4/3] bg-surface flex items-center justify-center overflow-hidden">
        <span className="font-sans text-xs text-muted/40 group-hover:text-accent/40 transition-colors">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent mb-3">
          {project.category}
        </p>
        <h3 className="font-serif text-lg sm:text-xl text-ink leading-snug mb-2">
          {project.title}
        </h3>
        <p className="font-sans text-[13px] text-muted leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
