import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Jimmy Cho",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

      {/* Page header */}
      <div className="mb-12 sm:mb-16">
        <h1 className="font-serif text-[36px] sm:text-[44px] font-light leading-[1.1] tracking-tight text-ink">
          contact
        </h1>
        <p className="mt-2 font-sans text-[13px] text-muted">
          open to investing, advisory, and interesting conversations.
        </p>
        <div className="mt-6 h-px bg-border" />
      </div>

      {/* Content */}
      <div className="max-w-lg">
        <p className="font-sans text-[15px] text-muted leading-[1.8] mb-12 sm:mb-16">
          Open to conversations about investing, strategy, and interesting
          company-building — especially in Southeast Asia and emerging
          markets.
        </p>

        <div className="space-y-10">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted mb-3">
              Email
            </p>
            <a
              href="mailto:hello@jimmycho.com"
              className="font-serif text-xl sm:text-2xl text-ink hover:text-accent transition-colors break-all"
            >
              hello@jimmycho.com
            </a>
          </div>

          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted mb-3">
              LinkedIn
            </p>
            <a
              href="https://linkedin.com/in/jimmycho"
              className="font-serif text-xl sm:text-2xl text-ink hover:text-accent transition-colors break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/jimmycho
            </a>
          </div>

          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted mb-3">
              Based in
            </p>
            <p className="font-serif text-xl sm:text-2xl text-ink">
              Singapore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
