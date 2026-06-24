"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { T } from "@/data/translations";

export default function PathSection() {
  const [active, setActive] = useState<number | null>(null);
  const { lang } = useLanguage();
  const items = T.path.items;

  return (
    <>
      {/* Mobile: tappable card grid */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        {items.map((item, i) => (
          <button
            key={item.index}
            onClick={() => setActive(active === i ? null : i)}
            className={`text-left border p-3.5 flex flex-col min-h-[190px] transition-all duration-300 ${
              i === items.length - 1 ? "col-span-2" : ""
            } ${
              active === i
                ? "border-accent/40 bg-accent/[0.07]"
                : "border-border active:bg-accent/[0.04]"
            }`}
          >
            <div
              className={`font-serif text-[20px] font-light mb-4 transition-colors duration-300 ${
                active === i ? "text-accent/80" : "text-accent/40"
              }`}
            >
              {item.index}
            </div>
            <div className="font-sans text-[13px] text-ink mb-1 leading-snug">
              {item.role[lang]}
            </div>
            <div className="font-sans text-[12px] text-muted italic mb-2">
              {item.org[lang]}
            </div>
            {item.note && (
              <p
                className={`font-sans text-[12px] leading-[1.7] mt-2 transition-colors duration-300 ${
                  active === i ? "text-muted/90" : "text-muted/70"
                }`}
              >
                {item.note[lang]}
              </p>
            )}
          </button>
        ))}
      </div>

      {/* Desktop: 5-column card grid */}
      <div className="hidden md:grid md:grid-cols-5 gap-3">
        {items.map((item, i) => (
          <button
            key={item.index}
            onClick={() => setActive(active === i ? null : i)}
            className={`text-left border p-5 flex flex-col transition-all duration-300 ${
              active === i
                ? "border-accent/40 bg-accent/[0.07]"
                : "border-border hover:bg-accent/[0.04] hover:border-accent/20"
            }`}
          >
            <div
              className={`font-serif text-[28px] font-light mb-8 transition-colors duration-300 ${
                active === i ? "text-accent/80" : "text-accent/40"
              }`}
            >
              {item.index}
            </div>
            <div className="min-h-[72px]">
              <div className="font-sans text-[14px] text-ink mb-1.5 leading-snug">
                {item.role[lang]}
              </div>
              <div className="font-sans text-[13px] text-muted italic">
                {item.org[lang]}
              </div>
            </div>
            {item.note && (
              <p className={`font-sans text-[13px] leading-[1.75] transition-colors duration-300 ${
                active === i ? "text-muted/90" : "text-muted/65"
              }`}>
                {item.note[lang]}
              </p>
            )}
          </button>
        ))}
      </div>
    </>
  );
}
