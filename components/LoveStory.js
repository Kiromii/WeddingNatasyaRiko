'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, HeartHandshake, Gem, House } from 'lucide-react';
import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { weddingData } from '@/lib/data';

const ICONS = {
  sparkles: Sparkles,
  heart: HeartHandshake,
  gem: Gem,
  church: House,
};

const SLOT_H  = 200;  // px per item — naikkan kalau teks terlalu panjang
const SVG_W   = 300;
const LEFT_X  = 60;
const RIGHT_X = 240;

function getPoints(count) {
  return Array.from({ length: count }, (_, i) => ({
    x: i % 2 === 0 ? LEFT_X : RIGHT_X,
    y: i * SLOT_H + SLOT_H * 0.42,
  }));
}

// Kurva S klasik yang mengalir:
// CP1 tetap di sisi asal, turun 60% → kurva menahan diri dulu di sisi kiri/kanan
// CP2 sudah di sisi tujuan, naik 60% dari bawah → lalu menyeberang di tengah
// Hasilnya: S-curve yang lembut & natural, tidak pinched
function buildPath(points) {
  if (points.length < 2) return '';
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const { x: x0, y: y0 } = points[i];
    const { x: x1, y: y1 } = points[i + 1];
    const dy = y1 - y0;
    d += ` C ${x0},${y0 + dy * 0.6}  ${x1},${y1 - dy * 0.6}  ${x1},${y1}`;
  }
  return d;
}

export default function LoveStory() {
  const containerRef = useRef(null);
  const items  = weddingData.loveStory;
  const points = getPoints(items.length);
  const totalH = items.length * SLOT_H;
  const pathD  = buildPath(points);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.55'],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-pearl px-6 py-20">
      <Reveal className="text-center">
        <p className="font-body text-[11px] uppercase tracking-[0.35em] text-ocean">
          Our Story
        </p>
        <h2 className="mt-2 font-display text-3xl italic text-ink-700">
          Perjalanan Cinta Kami
        </h2>
        <SectionDivider />
      </Reveal>

      <div
        ref={containerRef}
        className="relative mx-auto mt-12 w-full max-w-sm"
        style={{ height: totalH }}
      >
        {/* ─── SVG jalan setapak ─────────────────────────────────── */}
        <svg
          viewBox={`0 0 ${SVG_W} ${totalH}`}
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path
            d={pathD}
            fill="none"
            stroke="#CBDBE6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <motion.path
            d={pathD}
            fill="none"
            stroke="#3B6E91"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{ pathLength }}
          />
        </svg>

        {/* ─── Item momen ────────────────────────────────────────────
            FIX: outer div yang handle absolute position (bukan Reveal),
            Reveal hanya handle animasi fade-in di dalamnya.
            Ini kuncinya — Reveal tidak meneruskan prop style. ──────── */}
        {items.map((item, i) => {
          const Icon   = ICONS[item.icon] || Sparkles;
          const isLeft = i % 2 === 0;
          const topPct = (points[i].y / totalH) * 100;

          return (
            <div
              key={item.title}
              className="absolute w-full -translate-y-1/2"
              style={{ top: `${topPct}%` }}
            >
              <Reveal delay={i * 0.12} className="flex items-center gap-3">
                {/* Ikon kiri */}
                {isLeft && (
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-cloud shadow-md ring-4 ring-pearl">
                    <Icon size={22} className="text-ocean" strokeWidth={1.5} />
                  </div>
                )}

                {/* Teks */}
                <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
                  <p className="font-display text-lg leading-tight text-ink-700">
                    {item.title}
                  </p>
                  <p className="mt-1 font-body text-xs leading-relaxed text-ink-600">
                    {item.desc}
                  </p>
                </div>

                {/* Ikon kanan */}
                {!isLeft && (
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-cloud shadow-md ring-4 ring-pearl">
                    <Icon size={22} className="text-ocean" strokeWidth={1.5} />
                  </div>
                )}
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}