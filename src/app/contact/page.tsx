import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Jimmy Cho",
};

export default function ContactPage() {
  return (
    <div className="px-8 sm:px-14 pt-30 sm:pt-36 pb-28 sm:pb-32 max-w-[1200px] mx-auto">

      {/* Page header */}
      <div className="mb-12 sm:mb-14">
        <h1 className="font-serif text-[48px] sm:text-[56px] font-light leading-[1.05] tracking-[-0.02em] text-ink mb-3">
          contact
        </h1>
        <div className="w-8 h-px bg-accent opacity-60 my-4" />
        <p className="font-sans text-[15px] text-faint italic">
          open to investing, advisory, and interesting conversations.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 md:gap-24 max-w-[900px]">

        <div className="relative pl-7">
          <div className="absolute left-0 top-2 w-0.5 h-10 bg-accent opacity-40" />
          <p className="font-sans text-[16px] leading-[1.9] text-muted">
            Always open to conversations about early-stage companies, interesting
            founders, and the occasional new opportunity. If you think
            there&apos;s something worth talking about, reach out.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <p className="font-serif text-[14px] italic text-ghost mb-4">
              email
            </p>
            <a
              href="mailto:hello@jimmy-cho.com"
              className="font-serif text-[18px] sm:text-[20px] font-light text-ink hover:text-accent/80 border-b border-transparent hover:border-accent/40 transition-all duration-500 pb-0.5 break-all"
            >
              hello@jimmy-cho.com
            </a>
          </div>

          <div>
            <p className="font-serif text-[14px] italic text-ghost mb-4">
              linkedin
            </p>
            <a
              href="https://linkedin.com/in/jimmy-cho"
              className="font-serif text-[18px] sm:text-[20px] font-light text-ink hover:text-accent/80 border-b border-transparent hover:border-accent/40 transition-all duration-500 pb-0.5 break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/jimmy-cho
            </a>
          </div>

          <div>
            <p className="font-serif text-[14px] italic text-ghost mb-4">
              based in
            </p>
            <p className="font-serif text-[22px] sm:text-[24px] font-light text-ink">
              Tokyo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
