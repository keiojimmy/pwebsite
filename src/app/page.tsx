import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jimmy Cho",
};

export default function HomePage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* ——— Hero ——— */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_0.55fr] px-8 sm:px-14 pt-32 sm:pt-36 pb-20 sm:pb-24 items-end max-w-[1200px]">
        <div className="pb-2 max-w-xl">
          <h1 className="font-sans text-[58px] sm:text-[68px] md:text-[72px] font-normal leading-[1.05] tracking-[-0.02em] text-ink mb-5 sm:mb-6">
            Jimmy<br />Cho
          </h1>
          <div className="w-10 h-px bg-accent opacity-60 mb-8 sm:mb-10" />
          <p className="font-sans text-[17px] sm:text-[17.5px] leading-[1.8] text-muted max-w-lg">
            Investor and operator, fluent in Japanese, Korean, and English —
            and the harder language of getting things done across cultures.
          </p>
        </div>

        <div className="hidden md:flex justify-end items-end pt-16 self-stretch">
          <div className="relative w-72 lg:w-80">
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
      <section className="px-8 sm:px-14 pt-24 sm:pt-28 pb-12 sm:pb-14 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 md:gap-24 max-w-[1200px]">
        {/* Italic statement with red left border */}
        <div className="relative pl-7">
          <div className="absolute left-0 top-2 w-0.5 h-12 bg-accent opacity-45" />
          <p className="font-serif text-[26px] sm:text-[30px] font-light italic leading-[1.6] text-ink tracking-[-0.005em]">
            New ideas emerge when people and places collide.
            I&apos;ve spent my career proving it.
          </p>
        </div>

        {/* Bio */}
        <div className="pt-0 md:pt-2.5 space-y-5">
          <p className="font-sans text-[15.5px] leading-[1.9] text-muted">
            In the span of 20 months as a child, I attended preschool in Korea,
            kindergarten in Germany and Japan, and started first grade in Tennessee.
            Life ping-ponged me across cultures, and I came to believe that the
            most interesting things happen at the edges, where people and places
            collide.
          </p>
          <p className="font-sans text-[15.5px] leading-[1.9] text-muted">
            My career has followed the same logic. Strategy consulting at L.E.K.
            in Tokyo. Managing Cinnabon and Jamba Juice across Japan and Korea.
            Working out of the CEO&apos;s office at a then fast-growing hospitality
            unicorn expanding aggressively across Asia. Getting my hands dirty
            through COVID when the business had to do a full pivot. Building a
            startup — an artisanal tea brand into cafés including Godiva across
            Japan, and
            structuring international franchise deals. Two years at Harvard
            Business School confirmed what my operating experience had already
            suggested.
          </p>
          <p className="font-sans text-[15.5px] leading-[1.9] text-muted">
            I now back founders at the early stages, where the outcomes are
            uncertain and the path is least defined.

          </p>
        </div>
      </section>

      {/* ——— Path ——— */}
      <section className="px-8 sm:px-14 pt-10 sm:pt-12 pb-28 sm:pb-32 max-w-[1200px]">
        <div className="flex items-center gap-5 mb-10 sm:mb-12">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15px] italic text-accent/70 whitespace-nowrap">
            path
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        {(() => {
          const items = [
            { index: "I",   role: "Strategy Consulting",    org: "L.E.K. Consulting", note: "M&A diligence, commercial strategy, and financial modeling across Japan and the U.S." },
            { index: "II",  role: "Operator",               org: "Enterprise & Startups", note: "Running international food brands across Japan and Korea. CEO's office at a fast-growing hospitality unicorn expanding across Asia." },
            { index: "III", role: "Founder",                org: "Tokyo",              note: "Built a startup — an artisanal tea brand into cafés including Godiva across Japan, and structured international franchise deals." },
            { index: "IV",  role: "Harvard Business School",org: "MBA",                note: "" },
            { index: "V",   role: "Investor",               org: "Current",            note: "Backing founders at the early stages, in the US and Japan." },
          ];
          return (
            <>
              {/* Mobile: square card grid */}
              <div className="md:hidden grid grid-cols-2 gap-3">
                {items.map((item) => (
                  <div
                    key={item.index}
                    className="group border border-border p-5 flex flex-col min-h-[190px] hover:bg-accent/[0.08] hover:border-accent/30 active:bg-accent/[0.12] transition-all duration-300 cursor-default"
                  >
                    <div className="font-serif text-[20px] font-light text-accent/50 group-hover:text-accent/80 mb-4 transition-colors duration-300">
                      {item.index}
                    </div>
                    <div className="font-sans text-[13px] text-ink mb-1 leading-snug">{item.role}</div>
                    <div className="font-sans text-[12px] text-muted italic mb-2">{item.org}</div>
                    {item.note && (
                      <p className="font-sans text-[11px] text-muted/70 leading-[1.7] mt-2">{item.note}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop: 5-column card grid */}
              <div className="hidden md:grid md:grid-cols-5 gap-3">
                {items.map((item) => (
                  <div
                    key={item.index}
                    className="group border border-border p-7 flex flex-col hover:bg-accent/[0.05] hover:border-accent/25 transition-all duration-500 cursor-default"
                  >
                    <div className="font-serif text-[28px] font-light text-accent/45 group-hover:text-accent/75 mb-8 transition-colors duration-500">
                      {item.index}
                    </div>
                    {/* Fixed-height block so note starts at same position across all cards */}
                    <div className="min-h-[72px]">
                      <div className="font-sans text-[14px] text-ink mb-1.5 leading-snug">{item.role}</div>
                      <div className="font-sans text-[13px] text-muted italic">{item.org}</div>
                    </div>
                    {item.note && (
                      <p className="font-sans text-[12px] text-muted/65 leading-[1.75]">{item.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          );
        })()}
      </section>

      {/* ——— Elsewhere ——— */}
      <section className="px-8 sm:px-14 py-24 sm:py-28 max-w-[1200px]">
        <div className="flex items-center gap-5 mb-10 sm:mb-12">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15px] italic text-accent/70 whitespace-nowrap">
            elsewhere
          </p>
          <div className="flex-1 h-px bg-border" />
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
