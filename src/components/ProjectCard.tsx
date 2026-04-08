import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group border border-border hover:border-accent/40 bg-bg hover:bg-surface transition-all duration-200 cursor-pointer">
      {/* Image area */}
      <div className="aspect-[4/3] bg-surface border-b border-border flex items-center justify-center overflow-hidden">
        <span className="font-sans text-xs text-muted group-hover:text-accent transition-colors">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <p className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
          {project.category}
        </p>
        <h3 className="font-sans font-normal text-base sm:text-lg text-ink leading-snug mb-2">
          {project.title}
        </h3>
        <p className="font-sans text-sm text-muted leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
