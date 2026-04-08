import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jimmy Cho",
};

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Name */}
      <h1 className="font-sans text-[42px] leading-tight tracking-tight text-ink mb-3">
        <span className="font-semibold">Jimmy</span>{" "}
        <span className="font-light">Cho</span>
      </h1>

      {/* Accent subtitle — firm | location | email */}
      <p className="font-sans text-sm text-accent mb-10">
        <span>[Firm Name]</span>
        {" | "}
        <span>Singapore</span>
        {" | "}
        <a href="mailto:hello@jimmycho.com" className="hover:underline underline-offset-2">
          hello@jimmycho.com
        </a>
      </p>

      {/* Bio + photo */}
      <div className="flex gap-12 mb-14">
        {/* Bio text */}
        <div className="flex-1 space-y-5 font-sans text-base leading-relaxed text-ink">
          <p>
            I&apos;m Jimmy Cho — an investor and operator focused on
            technology and emerging markets. I spend most of my time in
            Southeast Asia, where I&apos;ve built and backed businesses across
            fintech, B2B software, and consumer technology.
          </p>
          <p>
            My path has been deliberately varied: investment banking at
            Goldman Sachs, management consulting at McKinsey, operational
            leadership at a high-growth startup, and now venture investing. I
            don&apos;t think these are separate careers — they&apos;re
            different vantage points on the same question of what makes
            businesses work.
          </p>
          <p>
            I care most about the early, hard stages of company building — the
            period where the decisions that determine long-term outcomes are
            made with the least information. That&apos;s where I think I can
            add the most value, both as an investor and as an operator.
          </p>
          <p>
            Outside of work, I&apos;m a reader (mostly history and philosophy
            of science), an occasional writer, and a slow but enthusiastic
            distance runner.
          </p>
        </div>

        {/* Profile photo — replace src with your photo */}
        <div className="w-64 shrink-0 self-start">
          <div className="w-full aspect-[3/4] bg-surface border border-border flex items-center justify-center">
            <span className="font-sans text-xs text-muted">photo</span>
          </div>
        </div>
      </div>

      {/* Photo grid — replace divs with <img> tags */}
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-surface border border-border flex items-center justify-center"
          >
            <span className="font-sans text-xs text-muted">{i + 1}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
