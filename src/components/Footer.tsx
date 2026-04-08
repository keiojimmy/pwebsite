export default function Footer() {
  return (
    <footer className="px-8 sm:px-14 py-10 sm:py-11 flex items-baseline justify-between border-t border-border mb-12 sm:mb-0">
      <a
        href="mailto:hello@jimmycho.com"
        className="font-sans text-[15px] text-muted hover:text-accent border-b border-transparent hover:border-accent transition-all duration-400"
      >
        hello@jimmycho.com
      </a>
      <div className="flex items-center gap-8 sm:gap-9">
        <span className="font-sans text-[13px] tracking-[0.08em] text-ghost italic">
          Singapore
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-30" />
      </div>
    </footer>
  );
}
