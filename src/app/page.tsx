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
      <section className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] px-8 sm:px-14 pt-30 sm:pt-36 pb-10 sm:pb-16 items-start gap-6 md:gap-24 max-w-[1200px]">

        {/* Text — left column (desktop) / below photo (mobile) */}
        <div className="pb-2 max-w-xl order-2 md:order-1">
          <h1 className="font-sans text-[48px] sm:text-[68px] md:text-[72px] font-normal leading-[1.05] tracking-[-0.02em] text-ink mb-4 sm:mb-6">
            Jimmy<br />Cho
          </h1>
          <div className="w-10 h-px bg-accent opacity-60 mb-5 sm:mb-10" />
          <p className="font-sans text-[16px] sm:text-[17.5px] leading-[1.8] text-muted max-w-lg">
            Shaped by strategy consulting, hands-on operations, and entrepreneurship across Japan, Korea, and the U.S., now investing in early-stage companies.
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
            className="hidden md:block w-full h-full relative overflow-hidden bg-surface rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.09),0_20px_56px_rgba(0,0,0,0.10)]"
            style={{ transform: 'translateZ(0)' }}
          >
            <Image
              src="/profile.jpg"
              alt="Jimmy Cho"
              fill
              className="object-cover"
              style={{ objectPosition: "30% 82%" }}
              priority
            />
          </div>
        </div>

      </section>

      {/* ——— Bio ——— */}
      <section className="px-8 sm:px-14 pt-[20px] sm:pt-[26px] pb-10 sm:pb-12 max-w-[1200px]">
        <div className="flex items-center gap-5 mb-7 sm:mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            bio
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-24">
          {/* Italic statement with red left border */}
          <div className="relative pl-7">
            <div className="absolute left-0 top-2 w-0.5 h-12 bg-accent opacity-40" />
            <p className="font-serif text-[26px] sm:text-[30px] font-light italic leading-[1.6] text-ink tracking-[-0.005em]">
              The most interesting things happen at the edges, where people and places collide.
            </p>

            {/* Flags */}
            <div className="block mt-4 md:mt-10 select-none">
              <div className="flex gap-[14px] md:gap-[28px]">
                {[
                  '/logos/Flag_of_South_Korea.svg.webp',
                  '/logos/Flag_of_Germany.svg.png',
                  '/logos/Flag_of_Japan.svg.webp',
                  '/logos/Flag_of_the_United_States.svg.png',
                  '/logos/Flag_of_Texas.svg.png',
                ].map((src) => (
                  <div
                    key={src}
                    className="shrink-0 w-8 h-[21px] md:w-[46px] md:h-[31px] rounded-md overflow-hidden cursor-pointer
                      shadow-[0_2px_6px_rgba(0,0,0,0.09)]
                      transition-all duration-200 ease-out
                      hover:-translate-y-1.5 hover:scale-110
                      hover:shadow-[0_5px_14px_rgba(0,0,0,0.13),0_2px_4px_rgba(0,0,0,0.07)]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" draggable={false} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="pt-0 md:pt-2.5 space-y-5">
            <p className="font-sans text-[15.5px] leading-[1.9] text-muted">
              In the span of 20 months, I attended preschool in Korea, started
              kindergarten in Germany, and finished it in Japan. I spent
              first grade in Tennessee, second in Colorado, third and fourth in
              Korea, middle school in Texas, and high school back in Seoul. As
              life continued to ping-pong me between college in the U.S., the
              army in Korea, and a career in Japan, I came to believe that the
              most interesting things happen at the edges, where people and
              places collide.
            </p>
            <p className="font-sans text-[15.5px] leading-[1.9] text-muted">
              My career has been built on navigating those exact edges. Strategy
              consulting at L.E.K. in Tokyo. Managing Cinnabon and Jamba Juice
              across Japan and Korea. Acting as Chief of Staff at a fast-growing
              hospitality tech unicorn expanding aggressively across Asia.
              Getting my hands dirty through COVID when the business had to do a
              full pivot. Building a startup—an artisanal tea brand that distributed
              to café chains across Japan, including Godiva. Two years at Harvard
              Business School confirmed what my operating experience had already
              suggested.
            </p>
            <p className="font-sans text-[15.5px] leading-[1.9] text-muted">
              I now back early-stage founders building at those exact
              edges—where new ideas collide and the path forward is least defined.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Path ——— */}
      <section className="px-8 sm:px-14 pt-[20px] sm:pt-[26px] pb-14 sm:pb-16 max-w-[1200px]">
        <div className="flex items-center gap-5 mb-7 sm:mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            path
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <PathSection />
      </section>

      {/* ——— Elsewhere ——— */}
      <section className="px-8 sm:px-14 pt-[20px] sm:pt-[26px] pb-24 sm:pb-28 max-w-[1200px]">
        <div className="flex items-center gap-5 mb-7 sm:mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            other pursuits
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <PursuitsSection />
      </section>
    </div>
  );
}
