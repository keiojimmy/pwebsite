"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";

type SearchItem = {
  label: string;
  sublabel?: string;
  href: string;
  group: string;
};

const searchIndex: SearchItem[] = [
  { group: "Navigation", label: "about", href: "/about" },
  { group: "Navigation", label: "projects", href: "/work" },
  { group: "Navigation", label: "cv", href: "/experience" },
  { group: "Navigation", label: "contact", href: "/contact" },
  ...projects.map((p) => ({
    group: "Work",
    label: p.title,
    sublabel: p.category,
    href: "/work",
  })),
  ...experiences.map((e) => ({
    group: "Experience",
    label: e.role,
    sublabel: e.company,
    href: "/experience",
  })),
];

export default function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim()
    ? searchIndex.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.sublabel?.toLowerCase().includes(query.toLowerCase()) ||
          item.group.toLowerCase().includes(query.toLowerCase())
      )
    : searchIndex;

  // Group filtered results
  const grouped = filtered.reduce<Record<string, SearchItem[]>>((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {});

  // Flat list for keyboard nav
  const flat = filtered;

  const navigate = useCallback(
    (item: SearchItem) => {
      router.push(item.href);
      onClose();
    },
    [router, onClose]
  );

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, flat.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        if (flat[activeIndex]) navigate(flat[activeIndex]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, flat, activeIndex, navigate, onClose]);

  // Global Ctrl+K listener (handled here so layout can just render this component)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (!open) {
          // signal parent to open — handled via the prop
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  if (!open) return null;

  let flatIndex = 0;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/10 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg mx-4 bg-bg border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center border-b border-border px-4">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to start searching"
            className="w-full py-4 font-sans text-sm text-ink bg-transparent placeholder:text-muted outline-none"
          />
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto">
          {Object.keys(grouped).length === 0 ? (
            <p className="px-4 py-6 font-sans text-sm text-muted text-center">
              No results
            </p>
          ) : (
            Object.entries(grouped).map(([group, items]) => (
              <div key={group}>
                <p className="px-4 pt-4 pb-1 font-sans text-[10px] uppercase tracking-widest text-muted">
                  {group}
                </p>
                {items.map((item) => {
                  const idx = flatIndex++;
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={`${item.group}-${item.label}`}
                      onClick={() => navigate(item)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`w-full text-left px-4 py-2.5 flex items-center justify-between transition-colors ${
                        isActive ? "bg-surface" : "hover:bg-surface"
                      }`}
                    >
                      <span className="font-sans text-sm text-ink">
                        {item.label}
                      </span>
                      {item.sublabel && (
                        <span className="font-sans text-xs text-muted">
                          {item.sublabel}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer hint */}
        <div className="border-t border-border px-4 py-2 flex items-center gap-4">
          <span className="font-sans text-[10px] text-muted">↑↓ to navigate</span>
          <span className="font-sans text-[10px] text-muted">↵ to select</span>
          <span className="font-sans text-[10px] text-muted">esc to close</span>
        </div>
      </div>
    </div>
  );
}
