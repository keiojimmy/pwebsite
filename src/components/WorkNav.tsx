"use client";

import { useState, useEffect } from "react";

type NavItem = { id: string; title: string; category: string };

export default function WorkNav({ projects }: { projects: NavItem[] }) {
  const [activeId, setActiveId] = useState<string>(projects[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    projects.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-20% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [projects]);

  // group by category
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <nav className="sticky top-28 space-y-5">
      {categories.map((cat) => (
        <div key={cat}>
          <p className="font-serif text-[11px] italic text-accent/60 mb-2 tracking-[0.02em]">
            {cat}
          </p>
          <ul className="space-y-1">
            {projects
              .filter((p) => p.category === cat)
              .map((p) => (
                <li key={p.id}>
                  <a
                    href={`#${p.id}`}
                    className={`block font-sans text-[13px] leading-[1.5] transition-colors duration-300 py-0.5 ${
                      activeId === p.id
                        ? "text-ink"
                        : "text-faint hover:text-muted"
                    }`}
                  >
                    {p.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
