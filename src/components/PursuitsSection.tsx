"use client";

import { useState } from "react";

const pursuits = [
  { icon: "🎵", text: "Music, always — playing and singing" },
  { icon: "🏀", text: "Basketball, on a bad ankle" },
  { icon: "♨️",  text: "Onsens and fine sashimi" },
  { icon: "☕",  text: "Quiet cafés and something sweet" },
  { icon: "📺",  text: "Late-night Korean dramas" },
];

export default function PursuitsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      {/* Mobile: tappable card grid */}
      <div className="md:hidden grid grid-cols-2 gap-2.5">
        {pursuits.map((item, i) => (
          <button
            key={item.text}
            onClick={() => setActive(active === i ? null : i)}
            className={`text-left p-4 border transition-all duration-300 rounded-sm ${
              i === pursuits.length - 1 ? "col-span-2" : ""
            } ${
              active === i
                ? "border-accent/40 bg-accent/[0.07]"
                : "border-border/60 active:bg-accent/[0.04]"
            }`}
          >
            <span
              className="block text-2xl mb-3 transition-transform duration-300 origin-left"
              style={{ transform: active === i ? "scale(1.2)" : "scale(1)" }}
            >
              {item.icon}
            </span>
            <p
              className={`font-sans text-[13px] leading-[1.6] transition-colors duration-300 ${
                active === i ? "text-ink" : "text-muted"
              }`}
            >
              {item.text}
            </p>
          </button>
        ))}
      </div>

      {/* Desktop: sliding line list with icon */}
      <ul className="hidden md:block divide-y divide-border/50">
        {pursuits.map((item) => (
          <li
            key={item.text}
            className="group flex items-center gap-3 py-4 cursor-default overflow-hidden"
          >
            <span className="text-[15px] opacity-40 group-hover:opacity-90 transition-opacity duration-300 shrink-0">
              {item.icon}
            </span>
            <div className="shrink-0 w-0 group-hover:w-4 h-px bg-accent/70 transition-[width] duration-500 mr-0 group-hover:mr-1" />
            <span className="font-sans text-[15.5px] text-muted group-hover:text-ink leading-[1.8] transition-colors duration-300">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
