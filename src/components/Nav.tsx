"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/about", label: "about" },
  { href: "/work", label: "work" },
  { href: "/experience", label: "experience" },
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

export default function Nav({
  onSearchOpen,
}: {
  onSearchOpen: () => void;
}) {
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
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Name */}
        <Link
          href="/"
          className="font-sans text-sm font-normal text-ink hover:text-muted transition-colors"
        >
          Jimmy Cho
        </Link>

        <div className="flex items-center gap-7">
          {/* Nav links */}
          {links.map(({ href, label }) => {
            const isActive =
              pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`font-sans text-sm transition-colors ${
                  isActive
                    ? "text-accent underline underline-offset-4 decoration-accent"
                    : "text-muted hover:text-ink"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Search trigger — magnifying glass + ctrl k */}
          <button
            onClick={onSearchOpen}
            className="flex items-center gap-1.5 font-sans text-xs text-muted hover:text-ink transition-colors"
            aria-label="Open search"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <circle cx="5" cy="5" r="3.5"/>
              <line x1="7.5" y1="7.5" x2="11" y2="11"/>
            </svg>
            ctrl k
          </button>

          {/* Theme toggle — sun / moon */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-muted hover:text-ink transition-colors"
          >
            {dark ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
