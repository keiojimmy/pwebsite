import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Jimmy Cho",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Page header */}
      <div className="mb-16 pb-8 border-b border-border">
        <h1 className="font-serif font-light text-5xl text-ink">Contact</h1>
      </div>

      <div className="flex gap-16">
        {/* Left sidebar */}
        <aside className="w-40 shrink-0" />

        {/* Main content */}
        <div className="flex-1">
          <p className="font-sans text-base text-muted leading-relaxed max-w-md mb-16">
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
                className="font-serif font-light text-2xl text-ink hover:text-muted transition-colors"
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
                className="font-serif font-light text-2xl text-ink hover:text-muted transition-colors"
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
              <p className="font-serif font-light text-2xl text-ink">
                Singapore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
