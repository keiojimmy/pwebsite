"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "about" },
  { href: "/work", label: "projects" },
  { href: "/experience", label: "cv" },
  { href: "/contact", label: "contact" },
];

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Nav({ onSearchOpen }: { onSearchOpen: () => void }) {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-border">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-12 sm:h-14 flex items-center justify-between">

        {/* Name — hidden on homepage */}
        {pathname !== "/" ? (
          <Link href="/" className="font-sans text-sm font-normal text-muted hover:text-ink transition-colors">
            jimmy cho
          </Link>
        ) : (
          <span />
        )}

        <div className="flex items-center gap-4 sm:gap-7">
          {/* Nav links — hidden on mobile, shown sm+ */}
          {links.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`hidden sm:block font-sans text-sm transition-colors ${
                  isActive
                    ? "text-accent underline underline-offset-4 decoration-accent"
                    : "text-muted hover:text-ink"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Search */}
          <button
            onClick={onSearchOpen}
            className="text-muted hover:text-ink transition-colors"
            aria-label="Open search"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5"/>
              <line x1="15.5" y1="15.5" x2="22" y2="22"/>
            </svg>
          </button>

          {/* Theme toggle */}
          <button onClick={toggleTheme} aria-label="Toggle theme" className="text-muted hover:text-ink transition-colors">
            {dark ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile bottom nav — shown only on small screens */}
      <div className="sm:hidden border-t border-border flex">
        {links.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 text-center py-2.5 font-sans text-xs transition-colors ${
                isActive ? "text-accent" : "text-muted hover:text-ink"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
