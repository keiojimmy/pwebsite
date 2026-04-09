"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";

const COLORS = ["#b83a2a", "#f59e0b", "#facc15", "#34d399", "#60a5fa", "#c084fc", "#f472b6", "#fb923c"];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

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

    // Origin: center of the Bonus box (bottom-right: 48px from edge, box 48x36)
    const ox = window.innerWidth - 48 - 24;
    const oy = window.innerHeight - 48 - 18;

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
  }, []);

  return (
    <>
      <Nav onSearchOpen={() => setSearchOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Confetti canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-50 pointer-events-none"
      />

      {/* Bonus easter egg — fixed bottom right */}
      <button
        onClick={triggerFireworks}
        className="fixed bottom-12 right-12 z-40 hidden sm:flex items-center justify-center w-12 h-9 border border-accent/35 rounded-sm opacity-35 hover:opacity-70 transition-opacity duration-500 select-none cursor-pointer"
        aria-label="Surprise"
      >
        <span className="font-serif text-[13px] text-accent font-medium leading-none tracking-[-0.05em]">
          Bonus
        </span>
      </button>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
