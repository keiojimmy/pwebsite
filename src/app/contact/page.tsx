import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Jimmy Cho",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

      {/* Page header */}
      <div className="mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-border">
        <h1 className="font-serif font-light text-[28px] sm:text-[32px] tracking-tight text-ink">contact</h1>
        <p className="mt-2 font-sans text-sm text-accent">open to investing, advisory, and interesting conversations.</p>
      </div>

      {/* No sidebar on contact — full width content */}
      <div className="max-w-md">
        <p className="font-sans text-base text-muted leading-relaxed mb-10 sm:mb-16">
          Open to conversations about investing, strategy, and interesting
          company-building — especially in Southeast Asia and emerging
          markets.
        </p>

        <div className="space-y-8">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-muted mb-2">
              Email
            </p>
            <a
              href="mailto:hello@jimmycho.com"
              className="font-serif font-normal text-base sm:text-lg text-ink hover:text-muted transition-colors break-all"
            >
              hello@jimmycho.com
            </a>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-muted mb-2">
              LinkedIn
            </p>
            <a
              href="https://linkedin.com/in/jimmycho"
              className="font-serif font-normal text-base sm:text-lg text-ink hover:text-muted transition-colors break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/jimmycho
            </a>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-muted mb-2">
              Based in
            </p>
            <p className="font-serif font-normal text-base sm:text-lg text-ink">
              Singapore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
