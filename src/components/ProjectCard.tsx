import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group p-6 border border-border hover:border-ink/20 bg-bg hover:bg-surface transition-all duration-200">
      <div className="flex items-start justify-between gap-4 mb-3">
        <span className="font-sans text-xs uppercase tracking-widest text-muted">
          {project.category}
        </span>
        <span className="font-sans text-xs text-muted shrink-0">{project.year}</span>
      </div>
      <h3 className="font-serif text-xl font-light text-ink leading-snug mb-3">
        {project.title}
      </h3>
      <p className="font-sans text-sm text-muted leading-relaxed">
        {project.description}
      </p>
    </div>
  );
}
