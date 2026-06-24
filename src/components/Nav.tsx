"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// The top menu always stays in English.
const links = [
  { href: "/", label: "about" },
  { href: "/work", label: "projects" },
  { href: "/experience", label: "cv" },
  { href: "/contact", label: "contact" },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function LangToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-2 font-sans text-[12.5px] tracking-[0.03em] select-none">
      <button
        onClick={() => setLang("en")}
        className={`flex items-center gap-1.5 transition-opacity duration-300 ${lang === "en" ? "opacity-100" : "opacity-45 hover:opacity-75"}`}
        aria-label="English"
        aria-pressed={lang === "en"}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/Flag_of_the_United_States.svg.png" alt="" width={18} height={12} className="w-[18px] h-[12px] rounded-[2px] object-cover shadow-[0_1px_2px_rgba(0,0,0,0.12)]" draggable={false} />
        <span className={lang === "en" ? "text-ink" : "text-faint"}>EN</span>
      </button>
      <span className="text-faint/30">/</span>
      <button
        onClick={() => setLang("jp")}
        className={`flex items-center gap-1.5 transition-opacity duration-300 ${lang === "jp" ? "opacity-100" : "opacity-45 hover:opacity-75"}`}
        aria-label="日本語"
        aria-pressed={lang === "jp"}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/Flag_of_Japan.svg.webp" alt="" width={18} height={12} className="w-[18px] h-[12px] rounded-[2px] object-cover shadow-[0_1px_2px_rgba(0,0,0,0.12)]" draggable={false} />
        <span className={lang === "jp" ? "text-ink" : "text-faint"}>日本語</span>
      </button>
    </div>
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
    <header
      className="fixed top-0 w-full z-50 pointer-events-none"
      style={{ background: "linear-gradient(to bottom, var(--color-bg) 55%, transparent)" }}
    >
      {/* Row 1: wordmark + nav links (desktop) + icons */}
      <div className="px-8 sm:px-14 pt-8 pb-2 sm:pb-10 flex items-baseline justify-between pointer-events-none max-w-[1200px] mx-auto">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif text-[19px] font-normal tracking-[0.01em] text-ink pointer-events-auto"
        >
          jimmy cho
        </Link>

        {/* Desktop: links + icons */}
        <div className="hidden sm:flex items-center gap-10 pointer-events-auto">
          {links.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`font-sans text-[15.5px] tracking-[0.02em] transition-colors duration-500 ${
                  isActive ? "text-accent/80" : "text-faint hover:text-accent/80"
                }`}
              >
                {label}
              </Link>
            );
          })}

          <span className="self-center">
            <LangToggle />
          </span>

          <button
            onClick={onSearchOpen}
            className="self-center text-faint hover:text-accent transition-colors duration-500"
            aria-label="Open search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5"/>
              <line x1="15.5" y1="15.5" x2="22" y2="22"/>
            </svg>
          </button>

          <button onClick={toggleTheme} aria-label="Toggle theme" className="self-center text-faint hover:text-accent transition-colors duration-500">
            {dark ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>

        {/* Mobile: icons only in row 1 */}
        <div className="flex sm:hidden items-center gap-4 pointer-events-auto">
          <LangToggle />
          <button onClick={onSearchOpen} className="text-faint hover:text-accent transition-colors" aria-label="Open search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5"/>
              <line x1="15.5" y1="15.5" x2="22" y2="22"/>
            </svg>
          </button>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="text-faint hover:text-accent transition-colors">
            {dark ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>

      {/* Row 2: nav links — mobile only, sits below row 1 */}
      <div className="sm:hidden px-8 pb-4 flex items-center gap-7 pointer-events-auto max-w-[1200px] mx-auto">
        {links.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`font-sans text-[15.5px] tracking-[0.02em] transition-colors duration-500 ${
                isActive ? "text-accent" : "text-faint hover:text-accent"
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
