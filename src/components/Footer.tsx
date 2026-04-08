export default function Footer() {
  return (
    <footer className="border-t border-border mt-12 sm:mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex items-center justify-between">
        <p className="font-sans text-xs text-muted">
          © {new Date().getFullYear()} Jimmy Cho
        </p>
        <div className="flex gap-4 sm:gap-6">
          <a
            href="mailto:hello@jimmycho.com"
            className="font-sans text-xs text-muted hover:text-ink transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/jimmycho"
            className="font-sans text-xs text-muted hover:text-ink transition-colors"
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
