"use client";

import { useState } from "react";

function MusicIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
    </svg>
  );
}

function BasketballIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M4.93 4.93c4.69 4.69 4.69 9.75 0 14.14"/>
      <path d="M19.07 4.93c-4.69 4.69-4.69 9.75 0 14.14"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
    </svg>
  );
}

function OnsenIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M8 3c0 2-2 2-2 4s2 2 2 4-2 2-2 4"/>
      <path d="M12 3c0 2-2 2-2 4s2 2 2 4-2 2-2 4"/>
      <path d="M16 3c0 2-2 2-2 4s2 2 2 4-2 2-2 4"/>
      <path d="M4 19h16a1 1 0 0 1 1 1v1H3v-1a1 1 0 0 1 1-1z"/>
    </svg>
  );
}

function CafeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
      <line x1="6" y1="2" x2="6" y2="4"/>
      <line x1="10" y1="2" x2="10" y2="4"/>
      <line x1="14" y1="2" x2="14" y2="4"/>
    </svg>
  );
}

function TvIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="15" rx="2"/>
      <polyline points="17 2 12 7 7 2"/>
    </svg>
  );
}

const pursuits = [
  { Icon: MusicIcon,     text: "Music, always — playing and singing" },
  { Icon: BasketballIcon,text: "Basketball, on a bad ankle" },
  { Icon: OnsenIcon,     text: "Onsens and fine sashimi" },
  { Icon: CafeIcon,      text: "Quiet cafés and something sweet" },
  { Icon: TvIcon,        text: "Late-night Korean dramas" },
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
