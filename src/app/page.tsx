import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jimmy Cho",
};

export default function HomePage() {
  return (
    <div>
      {/* ——— Hero ——— */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_0.55fr] px-8 sm:px-14 pt-32 sm:pt-36 pb-20 sm:pb-24 items-end">
        <div className="pb-2 max-w-xl">
          <h1 className="font-sans text-[58px] sm:text-[68px] md:text-[72px] font-normal leading-[1.05] tracking-[-0.02em] text-ink mb-5 sm:mb-6">
            Jimmy<br />Cho
          </h1>
          <div className="w-10 h-px bg-accent opacity-60 mb-8 sm:mb-10" />
          <p className="font-sans text-[17px] sm:text-[17.5px] leading-[1.8] text-muted max-w-md">
            Investor and operator building at the intersection of technology and
            emerging markets across Southeast Asia.
          </p>
        </div>

        <div className="hidden md:flex justify-end items-end pt-16 self-stretch">
          <div className="relative w-72 lg:w-80">
            {/* Red accent line — left of photo */}
            <div className="absolute top-6 -left-4 w-0.5 h-16 bg-accent opacity-70" />
            <div className="w-full aspect-[340/460] bg-surface flex items-end p-7">
              <span className="font-sans text-[11px] tracking-[0.15em] text-ghost lowercase italic">portrait</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-8 sm:mx-14 h-px bg-border" />

      {/* ——— Belief ——— */}
      <section className="px-8 sm:px-14 py-24 sm:py-28 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 md:gap-24 max-w-[1200px]">
        {/* Italic statement with red left border */}
        <div className="relative pl-7">
          <div className="absolute left-0 top-2 w-0.5 h-12 bg-accent opacity-45" />
          <p className="font-serif text-[26px] sm:text-[30px] font-light italic leading-[1.6] text-ink tracking-[-0.005em]">
            I care most about the early, hard stages — where long-term outcomes
            are shaped with the least information.
          </p>
        </div>

        {/* Body */}
        <div className="pt-0 md:pt-2.5 space-y-5">
          <p className="font-sans text-[15.5px] leading-[1.9] text-muted max-w-md">
            My career has been deliberately varied, not out of restlessness, but
            from a belief that the question of what makes businesses work is best
            understood from multiple vantage points.
          </p>
          <p className="font-sans text-[15.5px] leading-[1.9] text-muted max-w-md">
            I&apos;ve underwritten risk, advised on strategy, operated through
            rapid scale, and now invest at the earliest stages. Each chapter
            sharpened a different instinct. Together, they form a point of view.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-8 sm:mx-14 h-px bg-border" />

      {/* ——— Path ——— */}
      <section className="px-8 sm:px-14 pt-24 sm:pt-28 pb-28 sm:pb-32 max-w-[1200px]">
        <p className="font-sans text-[12px] uppercase tracking-[0.15em] text-ghost italic mb-16">
          Path
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-border">
          {[
            { index: "I", role: "Investment Banking", org: "Goldman Sachs" },
            { index: "II", role: "Management Consulting", org: "McKinsey & Company" },
            { index: "III", role: "Operational Leadership", org: "High-growth startup" },
            { index: "IV", role: "Venture Investing", org: "Current" },
          ].map((item, i, arr) => (
            <div
              key={item.index}
              className={`group relative py-10 pr-8 border-b border-border hover:bg-accent/[0.04] transition-colors duration-500 ${
                i < arr.length - 1 ? "border-r border-border" : ""
              }`}
            >
              <div className="font-serif text-[26px] font-light text-border group-hover:text-accent/20 mb-6 transition-colors duration-500">
                {item.index}
              </div>
              <div className="font-sans text-[15px] text-ink mb-1">{item.role}</div>
              <div className="font-sans text-[14px] text-faint italic">{item.org}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="mx-8 sm:mx-14 h-px bg-border" />

      {/* ——— Elsewhere ——— */}
      <section className="px-8 sm:px-14 py-24 sm:py-28 grid grid-cols-1 md:grid-cols-[0.4fr_1fr] gap-12 md:gap-20 max-w-[1200px]">
        <div>
          <p className="font-sans text-[12px] uppercase tracking-[0.15em] text-ghost italic pt-1">
            Elsewhere
          </p>
        </div>
        <div className="flex flex-wrap gap-12 sm:gap-16">
          {[
            "History &\nphilosophy of science",
            "Occasional\nwriting",
            "Distance\nrunning",
          ].map((item) => (
            <div key={item} className="font-sans text-[15.5px] text-muted leading-[1.5]">
              <div className="w-3.5 h-px bg-accent opacity-30 mb-3.5" />
              {item.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
