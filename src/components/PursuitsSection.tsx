"use client";

import { useState } from "react";

function MusicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 3.5H10a1 1 0 0 0-1 1v10.17A4 4 0 0 0 7 14a4 4 0 1 0 4 4V9.5h8v4.17A4 4 0 0 0 17 13a4 4 0 1 0 4 4V4.5a1 1 0 0 0-.5-.86V3.5zM7 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM11 7.5V5.5h8v2H11z"/>
    </svg>
  );
}

function BasketballIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M4.93 4.93C7.07 7.07 8.35 9.39 8.35 12s-1.28 4.93-3.42 7.07"/>
      <path d="M19.07 4.93C16.93 7.07 15.65 9.39 15.65 12s1.28 4.93 3.42 7.07"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
    </svg>
  );
}

function OnsenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 10c0-1.5 1.5-1.5 1.5-3S8 5.5 8 4"/>
      <path d="M12 10c0-1.5 1.5-1.5 1.5-3S12 5.5 12 4"/>
      <path d="M16 10c0-1.5 1.5-1.5 1.5-3S16 5.5 16 4"/>
      <path d="M5 12h14v1a7 7 0 0 1-14 0v-1z"/>
      <path d="M3 21h18"/>
      <path d="M7.5 20.5V21M16.5 20.5V21"/>
    </svg>
  );
}

function CafeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3c0 1.5-1.5 1.5-1.5 3S9 7.5 9 9"/>
      <path d="M13 3c0 1.5-1.5 1.5-1.5 3S13 7.5 13 9"/>
      <path d="M5 11h14l-1.5 9H6.5L5 11z"/>
      <path d="M19 13h1a2 2 0 0 1 0 4h-1"/>
      <path d="M3 22h18"/>
    </svg>
  );
}

function TvIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="8" width="20" height="13" rx="2"/>
      <path d="M7 4l5 4 5-4"/>
      <line x1="8" y1="21" x2="8" y2="23"/>
      <line x1="16" y1="21" x2="16" y2="23"/>
      <line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  );
}

const pursuits = [
  { Icon: MusicIcon,      text: "Music, always — playing and singing" },
  { Icon: BasketballIcon, text: "Basketball, on a bad ankle" },
  { Icon: OnsenIcon,      text: "Onsens and fine sashimi" },
  { Icon: CafeIcon,       text: "Quiet cafés and something sweet" },
  { Icon: TvIcon,         text: "Late-night Korean dramas" },
];

export default function PursuitsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      {/* Mobile: tappable card grid */}
      <div className="md:hidden grid grid-cols-2 gap-2.5">
        {pursuits.map(({ Icon, text }, i) => (
          <button
            key={text}
            onClick={() => setActive(active === i ? null : i)}
            className={`text-left p-4 border transition-all duration-300 rounded-sm ${
              i === pursuits.length - 1 ? "col-span-2" : ""
            } ${
              active === i
                ? "border-accent/40 bg-accent/[0.07] text-accent"
                : "border-border/60 text-muted/50 active:bg-accent/[0.04]"
            }`}
          >
            <span
              className="block mb-3 transition-transform duration-300 origin-left"
              style={{ transform: active === i ? "scale(1.15)" : "scale(1)" }}
            >
              <Icon />
            </span>
            <p
              className={`font-sans text-[13px] leading-[1.6] transition-colors duration-300 ${
                active === i ? "text-ink" : "text-muted"
              }`}
            >
              {text}
            </p>
          </button>
        ))}
      </div>

      {/* Desktop: sliding line list with icon */}
      <ul className="hidden md:block divide-y divide-border/50">
        {pursuits.map(({ Icon, text }) => (
          <li
            key={text}
            className="group flex items-center gap-3 py-4 cursor-default overflow-hidden"
          >
            <span className="text-muted/40 group-hover:text-accent/70 transition-colors duration-300 shrink-0">
              <Icon />
            </span>
            <div className="shrink-0 w-0 group-hover:w-4 h-px bg-accent/70 transition-[width] duration-500 mr-0 group-hover:mr-1" />
            <span className="font-sans text-[15.5px] text-muted group-hover:text-ink leading-[1.8] transition-colors duration-300">
              {text}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
