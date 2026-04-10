"use client";

import { useState } from "react";

const pursuits = [
  { emoji: "🎵", text: "Music, always — playing and singing" },
  { emoji: "🏀", text: "Basketball, on a bad ankle" },
  { emoji: "♨️", text: "Onsens and sashimi" },
  { emoji: "☕", text: "Quiet cafés and something sweet" },
  { emoji: "📺", text: "Late-night Korean dramas" },
];

export default function PursuitsSection() {
  const [active, setActive] = useState<number | null>(null);
  const [animKeys, setAnimKeys] = useState<Record<number, number>>({});

  const handleClick = (i: number) => {
    setActive(prev => prev === i ? null : i);
    setAnimKeys(prev => ({ ...prev, [i]: (prev[i] ?? 0) + 1 }));
  };

  return (
    <>
      {/* Mobile: tappable card grid */}
      <div className="md:hidden grid grid-cols-2 gap-2.5">
        {pursuits.map(({ emoji, text }, i) => (
          <button
            key={text}
            onClick={() => handleClick(i)}
            className={`text-left p-3.5 border transition-all duration-300 rounded-sm ${
              i === pursuits.length - 1 ? "col-span-2" : ""
            } ${
              active === i
                ? "border-accent/40 bg-accent/[0.07]"
                : "border-border/60 active:bg-accent/[0.04]"
            }`}
          >
            <span
              key={animKeys[i] ?? 0}
              className={`block mb-3 text-[21px] leading-none transition-opacity duration-300 origin-center ${
                active === i ? "opacity-80" : "opacity-40"
              } ${(animKeys[i] ?? 0) > 0 ? "animate-icon-dance" : ""}`}
            >
              {emoji}
            </span>
            <p
              className={`font-sans text-[12px] leading-[1.6] transition-colors duration-300 ${
                active === i ? "text-ink" : "text-muted"
              }`}
            >
              {text}
            </p>
          </button>
        ))}
      </div>

      {/* Desktop: clickable card grid */}
      <div className="hidden md:grid md:grid-cols-5 gap-3">
        {pursuits.map(({ emoji, text }, i) => (
          <button
            key={text}
            onClick={() => handleClick(i)}
            className={`text-left border p-5 flex flex-col gap-4 transition-all duration-300 ${
              active === i
                ? "border-accent/40 bg-accent/[0.07]"
                : "border-border hover:bg-accent/[0.04] hover:border-accent/20"
            }`}
          >
            <span
              key={animKeys[i] ?? 0}
              className={`text-[24px] leading-none transition-opacity duration-300 origin-center ${
                active === i ? "opacity-80" : "opacity-40"
              } ${(animKeys[i] ?? 0) > 0 ? "animate-icon-dance" : ""}`}
            >
              {emoji}
            </span>
            <span
              className={`font-sans text-[13px] leading-[1.7] transition-colors duration-300 ${
                active === i ? "text-ink" : "text-muted"
              }`}
            >
              {text}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
