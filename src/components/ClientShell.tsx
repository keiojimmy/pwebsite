"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";

const COLORS = ["#b83a2a", "#f59e0b", "#facc15", "#34d399", "#60a5fa", "#c084fc", "#f472b6", "#fb923c"];

const FORTUNES = [
  "The most interesting things happen at the edges.",
  "A good ankle is overrated anyway.",
  "Tokyo is always a good idea.",
  "The next great founder is already building.",
  "Three languages are never enough.",
  "The best café is always the next one.",
  "Pivot early, pivot often.",
  "Uncertainty is just opportunity in disguise.",
  "The path forward is least defined for a reason.",
  "Great things happen where people and places collide.",
];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(true);
  const [fortune, setFortune] = useState<string | null>(null);
  const [fortuneVisible, setFortuneVisible] = useState(false);
  const fortuneTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerWidth >= 640
        ? window.innerHeight * 0.3
        : window.innerHeight * 0.6;
      setCookieVisible(window.scrollY < threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const triggerFireworks = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 640;
    const edge = isMobile ? 24 : 48;
    const ox = window.innerWidth - edge - 24;
    const oy = window.innerHeight - edge - 18;

    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      color: string; size: number;
      rotation: number; rotSpeed: number;
      alpha: number; isRect: boolean;
    };

    const particles: Particle[] = Array.from({ length: 120 }, () => {
      const angle = randomBetween(0, Math.PI * 2);
      const speed = randomBetween(4, 16);
      return {
        x: ox, y: oy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - randomBetween(2, 6),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: randomBetween(4, 9),
        rotation: randomBetween(0, Math.PI * 2),
        rotSpeed: randomBetween(-0.15, 0.15),
        alpha: 1,
        isRect: Math.random() > 0.4,
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.vx *= 0.98;
        p.alpha -= 0.013;
        p.rotation += p.rotSpeed;
        if (p.alpha <= 0) continue;
        alive = true;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        if (p.isRect) {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      if (alive) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    // Show a random fortune
    const picked = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
    setFortune(picked);
    setFortuneVisible(true);
    if (fortuneTimerRef.current) clearTimeout(fortuneTimerRef.current);
    fortuneTimerRef.current = setTimeout(() => setFortuneVisible(false), 3000);
  }, []);

  return (
    <>
      <Nav onSearchOpen={() => setSearchOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Confetti canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 z-50 pointer-events-none" />

      {/* Fortune message popup */}
      <div
        className={`fixed bottom-20 right-6 sm:bottom-24 sm:right-12 z-40 max-w-[200px] pointer-events-none transition-all duration-500 ${
          fortuneVisible ? "opacity-50 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="bg-[#fffdf7] border border-accent/20 rounded-sm px-3.5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm">
          <p className="font-serif text-[12.5px] italic text-ink/80 leading-[1.6]">
            &ldquo;{fortune}&rdquo;
          </p>
        </div>
        {/* little triangle pointing down to the cookie */}
        <div className="absolute bottom-[-5px] right-5 w-2.5 h-2.5 bg-[#fffdf7] border-r border-b border-accent/20 rotate-45" />
      </div>

      {/* Fortune cookie easter egg — fixed bottom right */}
      <button
        onClick={triggerFireworks}
        className={`fixed bottom-6 right-6 sm:bottom-12 sm:right-12 z-40 flex items-center justify-center w-12 h-9 border border-accent/35 rounded-sm transition-all duration-500 select-none cursor-pointer ${
          cookieVisible ? "opacity-75 hover:opacity-95 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Surprise"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/fortunecookie.svg" alt="Fortune cookie" width={28} height={28} />
      </button>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
