"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-sans text-sm tracking-tight hover:opacity-70 transition-opacity"
        >
          <span className="font-semibold text-ink">Jimmy</span>
          <span className="font-normal text-ink"> Cho</span>
        </Link>

        <div className="flex items-center gap-8">
          {links.map(({ href, label }) => {
            const isActive =
              pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`font-sans text-sm transition-colors ${
                  isActive
                    ? "text-ink underline underline-offset-4 decoration-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
