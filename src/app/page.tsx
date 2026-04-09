import type { Metadata } from "next";
import Image from "next/image";
import PursuitsSection from "@/components/PursuitsSection";
import PathSection from "@/components/PathSection";

export const metadata: Metadata = {
  title: "Jimmy Cho",
};

export default function HomePage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* ——— Hero ——— */}
      <section className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] px-8 sm:px-14 pt-28 sm:pt-36 pb-16 sm:pb-24 items-start gap-6 md:gap-24 max-w-[1200px]">

        {/* Text — left column (desktop) / below photo (mobile) */}
        <div className="pb-2 max-w-xl order-2 md:order-1">
          <h1 className="font-sans text-[48px] sm:text-[68px] md:text-[72px] font-normal leading-[1.05] tracking-[-0.02em] text-ink mb-4 sm:mb-6">
            Jimmy<br />Cho
          </h1>
          <div className="w-10 h-px bg-accent opacity-60 mb-5 sm:mb-10" />
          <p className="font-sans text-[16px] sm:text-[17.5px] leading-[1.8] text-muted max-w-lg">
            Investor and operator, fluent in Japanese, Korean, and English —
            and the harder language of getting things done across cultures.
          </p>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 md:self-stretch">
          {/* Mobile: landscape crop, shows person */}
          <div
            className="md:hidden w-full aspect-[4/3] relative overflow-hidden bg-surface rounded-sm shadow-[0_12px_40px_rgba(28,22,18,0.13)]"
            style={{ transform: 'translateZ(0)' }}
          >
            <Image
              src="/profile.jpg"
              alt="Jimmy Cho"
              fill
              className="object-cover"
              style={{ objectPosition: '30% 75%' }}
              priority
            />
          </div>
          {/* Desktop: fills column height, no fixed aspect ratio */}
          <div
            className="hidden md:block w-full h-full relative overflow-hidden bg-surface rounded-sm shadow-[0_12px_40px_rgba(28,22,18,0.13)]"
            style={{ transform: 'translateZ(0)' }}
          >
            <Image
              src="/profile.jpg"
              alt="Jimmy Cho"
              fill
              className="object-cover"
              style={{ objectPosition: "30% 77.999%" }}
              priority
            />
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
        <PathSection />
      </section>

      {/* ——— Elsewhere ——— */}
      <section className="px-8 sm:px-14 py-24 sm:py-28 max-w-[1200px]">
        <div className="flex items-center gap-5 mb-10 sm:mb-12">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15px] italic text-accent/70 whitespace-nowrap">
            other pursuits
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <PursuitsSection />
      </section>
    </div>
  );
}
