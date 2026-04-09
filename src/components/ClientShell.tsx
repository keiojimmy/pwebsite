"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchOpen, setSearchOpen] = useState(false);

  // Global Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <Nav onSearchOpen={() => setSearchOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Hanko seal — fixed bottom right */}
      <div
        className="fixed bottom-12 right-12 z-40 hidden sm:flex items-center justify-center w-12 h-9 border border-accent/35 rounded-sm opacity-35 hover:opacity-70 transition-opacity duration-500 cursor-default select-none"
        aria-hidden="true"
      >
        <span className="font-serif text-[13px] text-accent font-medium leading-none tracking-[-0.05em]">
          Bonus
        </span>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
