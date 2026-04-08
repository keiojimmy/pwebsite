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
        {/* Name — uniform weight, no bold */}
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

          {/* Search trigger */}
          <button
            onClick={onSearchOpen}
            className="font-sans text-xs text-muted hover:text-ink transition-colors tracking-wide"
            aria-label="Open search"
          >
            ctrl k
          </button>

          {/* Dark mode toggle — hollow circle (light) / filled circle (dark) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`w-3.5 h-3.5 rounded-full border border-ink transition-colors hover:opacity-70 ${
              dark ? "bg-ink" : "bg-transparent"
            }`}
          />
        </div>
      </nav>
    </header>
  );
}
