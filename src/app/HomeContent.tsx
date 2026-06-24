"use client";

import Image from "next/image";
import PursuitsSection from "@/components/PursuitsSection";
import PathSection from "@/components/PathSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { T } from "@/data/translations";

export default function HomeContent() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* ——— Hero ——— */}
      <section className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] px-8 sm:px-14 pt-30 sm:pt-36 pb-10 sm:pb-16 items-start gap-6 md:gap-24 max-w-[1200px]">

        {/* Text — left column (desktop) / below photo (mobile) */}
        <div className="pb-2 max-w-xl order-2 md:order-1">
          <h1 className="font-sans text-[36px] sm:text-[68px] md:text-[72px] font-normal leading-[1.05] tracking-[-0.02em] text-ink mb-4 sm:mb-6">
            Jimmy<br className="hidden sm:block" /> Cho
          </h1>
          <div className="w-10 h-px bg-accent opacity-60 mb-5 sm:mb-10" />
          <p className="font-sans text-[16px] sm:text-[17.5px] leading-[1.8] text-muted max-w-lg">
            {T.home.heroSubtitle[lang]}
          </p>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 md:self-stretch">
          <div
            className="md:hidden w-full aspect-[4/3] relative overflow-hidden bg-surface rounded-sm shadow-[0_12px_40px_rgba(28,22,18,0.13)]"
            style={{ transform: "translateZ(0)" }}
          >
            <Image
              src="/profile.jpg"
              alt="Jimmy Cho"
              fill
              className="object-cover"
              style={{ objectPosition: "30% 75%" }}
              priority
            />
          </div>
          <div
            className="hidden md:block w-full h-full relative overflow-hidden bg-surface rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.09),0_20px_56px_rgba(0,0,0,0.10)]"
            style={{ transform: "translateZ(0)" }}
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
      <section className="px-8 sm:px-14 pt-[10px] sm:pt-[26px] pb-10 sm:pb-12 max-w-[1200px]">
        <div className="flex items-center gap-5 mb-7 sm:mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            {T.home.bioLabel[lang]}
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-24">
          {/* Italic statement with red left border */}
          <div className="relative pl-7">
            <div className="absolute left-0 top-2 w-0.5 h-12 bg-accent opacity-40" />
            <p className="font-serif text-[26px] sm:text-[30px] font-light italic leading-[1.6] text-ink tracking-[-0.005em]">
              {T.home.bioQuote[lang]}
            </p>

            {/* Flags */}
            <div className="block mt-4 md:mt-10 select-none">
              <div className="flex gap-[14px] md:gap-[28px]">
                {[
                  "/logos/Flag_of_South_Korea.svg.webp",
                  "/logos/Flag_of_Germany.svg.png",
                  "/logos/Flag_of_Japan.svg.webp",
                  "/logos/Flag_of_the_United_States.svg.png",
                  "/logos/Flag_of_Texas.svg.png",
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

          {/* Bio paragraphs */}
          <div className="pt-0 md:pt-2.5 space-y-5">
            <p className="font-sans text-[15.5px] leading-[1.9] text-muted">
              {T.home.bioPara1[lang]}
            </p>
            <p className="font-sans text-[15.5px] leading-[1.9] text-muted">
              {T.home.bioPara2[lang]}
            </p>
            <p className="font-sans text-[15.5px] leading-[1.9] text-muted">
              {T.home.bioPara3[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* ——— Path ——— */}
      <section className="px-8 sm:px-14 pt-[10px] sm:pt-[26px] pb-14 sm:pb-16 max-w-[1200px]">
        <div className="flex items-center gap-5 mb-7 sm:mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            {T.home.pathLabel[lang]}
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <PathSection />
      </section>

      {/* ——— Other Pursuits ——— */}
      <section className="px-8 sm:px-14 pt-[10px] sm:pt-[26px] pb-24 sm:pb-28 max-w-[1200px]">
        <div className="flex items-center gap-5 mb-7 sm:mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 shrink-0" />
          <p className="font-serif text-[15.5px] italic text-accent/80 whitespace-nowrap">
            {T.home.pursuitsLabel[lang]}
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <PursuitsSection />
      </section>
    </div>
  );
}
