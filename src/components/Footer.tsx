export default function Footer() {
  return (
    <footer className="border-t border-border mt-16 sm:mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex items-center justify-between">
        <p className="font-sans text-[11px] text-muted/60">
          © {new Date().getFullYear()} Jimmy Cho
        </p>
        <div className="flex gap-5 sm:gap-6">
          <a
            href="mailto:hello@jimmycho.com"
            className="font-sans text-[11px] text-muted/60 hover:text-ink transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/jimmycho"
            className="font-sans text-[11px] text-muted/60 hover:text-ink transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
