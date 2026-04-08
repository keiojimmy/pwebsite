import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { experiences } from "@/data/experience";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-28">
        <p className="font-sans text-xs uppercase tracking-widest text-accent mb-6">
          Investor&nbsp;·&nbsp;Operator&nbsp;·&nbsp;Strategist
        </p>
        <h1 className="font-serif font-light text-[42px] leading-[1.1] tracking-tight text-ink mb-8">
          Jimmy Cho
        </h1>
        <p className="font-sans text-base leading-[1.85] text-muted max-w-xl">
          I build and back technology companies in Southeast Asia. Over the past
          decade I&apos;ve worked across venture, strategy consulting, and
          operating roles — with a focus on finding and scaling businesses at
          the intersection of technology and emerging markets.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Selected Work */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-sans text-xs uppercase tracking-widest text-muted">
            Selected Work
          </h2>
          <Link
            href="/work"
            className="font-sans text-xs text-muted hover:text-ink transition-colors"
          >
            All Work →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Experience Snapshot */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-sans text-xs uppercase tracking-widest text-muted">
            Experience
          </h2>
          <Link
            href="/experience"
            className="font-sans text-xs text-muted hover:text-ink transition-colors"
          >
            Full Experience →
          </Link>
        </div>

        <div className="divide-y divide-border">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.dates}`}
              className="flex items-baseline justify-between py-5 gap-8"
            >
              <div>
                <span className="font-sans text-sm font-medium text-ink">
                  {exp.role}
                </span>
                <span className="font-sans text-sm text-muted">
                  {" "}
                  — {exp.company}
                </span>
              </div>
              <span className="font-sans text-xs text-muted shrink-0">
                {exp.dates}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Contact CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-serif font-light text-2xl text-ink mb-4">
          Get in touch
        </h2>
        <p className="font-sans text-sm text-muted mb-8 max-w-sm">
          Open to conversations about investing, strategy, and interesting
          company-building.
        </p>
        <div className="flex gap-8">
          <a
            href="mailto:hello@jimmycho.com"
            className="font-sans text-sm text-ink underline underline-offset-4 hover:text-muted transition-colors"
          >
            hello@jimmycho.com
          </a>
          <a
            href="https://linkedin.com/in/jimmycho"
            className="font-sans text-sm text-ink underline underline-offset-4 hover:text-muted transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
