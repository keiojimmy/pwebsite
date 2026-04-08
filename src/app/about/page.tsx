import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Jimmy Cho",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Page header */}
      <div className="mb-16 pb-8 border-b border-border">
        <h1 className="font-serif font-normal text-5xl text-ink">About</h1>
      </div>

      <div className="flex gap-16">
        {/* Left sidebar */}
        <aside className="w-40 shrink-0" />

        {/* Main content */}
        <div className="flex-1 max-w-2xl">
          <div className="space-y-6 font-sans text-base leading-relaxed text-ink">
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

          <div className="mt-16 pt-8 border-t border-border">
            <p className="font-sans text-xs uppercase tracking-widest text-muted mb-6">
              Currently
            </p>
            <p className="font-sans text-sm text-ink">
              Partner at [Firm Name], Singapore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
