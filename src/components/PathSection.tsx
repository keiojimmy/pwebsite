"use client";

import { useState } from "react";

const items = [
  { index: "I",   role: "Strategy Consulting",    org: "L.E.K. Consulting",      note: "M&A diligence, commercial strategy, and financial modeling across Japan and the U.S." },
  { index: "II",  role: "Operator",               org: "Enterprise & Startups",  note: "Running international food brands across Japan and Korea. CEO's office at a fast-growing hospitality unicorn expanding across Asia." },
  { index: "III", role: "Founder",                org: "Tokyo",                  note: "Built a startup — an artisanal tea brand into cafés including Godiva across Japan, and structured international franchise deals." },
  { index: "IV",  role: "Harvard Business School",org: "MBA",                    note: "" },
  { index: "V",   role: "Investor",               org: "Current",                note: "Backing founders at the early stages, in Japan and the U.S." },
];

export default function PathSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      {/* Mobile: tappable card grid */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        {items.map((item, i) => (
          <button
            key={item.index}
            onClick={() => setActive(active === i ? null : i)}
            className={`text-left border p-5 flex flex-col min-h-[190px] transition-all duration-300 ${
              i === items.length - 1 ? "col-span-2" : ""
            } ${
              active === i
                ? "border-accent/40 bg-accent/[0.07]"
                : "border-border active:bg-accent/[0.04]"
            }`}
          >
            <div
              className={`font-serif text-[20px] font-light mb-4 transition-colors duration-300 ${
                active === i ? "text-accent/80" : "text-accent/50"
              }`}
            >
              {item.index}
            </div>
            <div className="font-sans text-[13px] text-ink mb-1 leading-snug">
              {item.role}
            </div>
            <div className="font-sans text-[12px] text-muted italic mb-2">
              {item.org}
            </div>
            {item.note && (
              <p
                className={`font-sans text-[11px] leading-[1.7] mt-2 transition-colors duration-300 ${
                  active === i ? "text-muted/90" : "text-muted/70"
                }`}
              >
                {item.note}
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
            className={`text-left border p-7 flex flex-col transition-all duration-300 ${
              active === i
                ? "border-accent/40 bg-accent/[0.07]"
                : "border-border hover:bg-accent/[0.04] hover:border-accent/20"
            }`}
          >
            <div
              className={`font-serif text-[28px] font-light mb-8 transition-colors duration-300 ${
                active === i ? "text-accent/80" : "text-accent/45"
              }`}
            >
              {item.index}
            </div>
            <div className="min-h-[72px]">
              <div className="font-sans text-[14px] text-ink mb-1.5 leading-snug">
                {item.role}
              </div>
              <div className="font-sans text-[13px] text-muted italic">
                {item.org}
              </div>
            </div>
            {item.note && (
              <p className={`font-sans text-[12px] leading-[1.75] transition-colors duration-300 ${
                active === i ? "text-muted/90" : "text-muted/65"
              }`}>
                {item.note}
              </p>
            )}
          </button>
        ))}
      </div>
    </>
  );
}
