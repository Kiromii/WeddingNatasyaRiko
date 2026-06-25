'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, HeartHandshake, Gem, Church } from 'lucide-react';
import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { weddingData } from '@/lib/data';

const ICONS = {
  sparkles: Sparkles,
  heart: HeartHandshake,
  gem: Gem,
  church: Church,
};

// Posisi horizontal "jalan setapak" dalam persen lebar container
// (viewBox 0-100): ikon indeks genap (0,2,4,...) di kiri, ikon ganjil
// di kanan - persis seperti pada gambar referensi.
const LEFT_X = 15;
const RIGHT_X = 85;
const PAD_TOP = 8;
const PAD_BOTTOM = 8;

// Titik (x,y) setiap momen, tersebar rata secara vertikal di sepanjang
// daftar (valid karena tinggi tiap item relatif seragam).
function getMomentPoints(count) {
  if (count <= 0) return [];
  if (count === 1) return [{ x: LEFT_X, y: 50 }];
  const span = 100 - PAD_TOP - PAD_BOTTOM;
  const step = span / (count - 1);
  return Array.from({ length: count }, (_, i) => ({
    x: i % 2 === 0 ? LEFT_X : RIGHT_X,
    y: PAD_TOP + i * step,
  }));
}

// Jalur lengkung yang melewati setiap titik - per segmen dibuat 2x
// liukan bolak-balik antar "rel" kiri/kanan (bukan cuma 1 kurva-S
// halus) supaya kelihatan lebih berliku, lalu tetap mendarat pas di
// titik tujuan agar tidak meleset dari posisi ikon.
function buildWindingPath(points) {
  if (points.length < 2) return '';

  let d = `M${points[0].x},${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const { x: x0, y: y0 } = points[i];
    const { x: x1, y: y1 } = points[i + 1];

    const midY = (y0 + y1) / 2;

    d += `
      C ${x0},${midY}
        ${x1},${midY}
        ${x1},${y1}
    `;
  }

  return d;
}

export default function LoveStory() {
  const containerRef = useRef(null);
  const items = weddingData.loveStory;
  const points = getMomentPoints(items.length);
  const pathD = buildWindingPath(points);

  // Garis jalan digambar perlahan seiring section ini di-scroll ke dalam layar
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.55'],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-pearl px-6 py-20">
      <Reveal className="text-center">
        <p className="font-body text-[11px] uppercase tracking-[0.35em] text-ocean">Our Story</p>
        <h2 className="mt-2 font-display text-3xl italic text-ink-700">Perjalanan Cinta Kami</h2>
        <SectionDivider />
      </Reveal>

      <div ref={containerRef} className="relative mx-auto mt-12 max-w-sm">
        {/* Jalan setapak melengkung sebagai latar - garis tipis statis + garis
            biru yang "tergambar" mengikuti scroll di atasnya */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path d={pathD} fill="none" stroke="#CBDBE6" strokeWidth="1" strokeLinecap="round" />
          <motion.path
            d={pathD}
            fill="none"
            stroke="#3B6E91"
            strokeWidth="1.3"
            strokeLinecap="round"
            style={{ pathLength }}
          />
        </svg>

        {/* Titik penanda di setiap momen. Dibuat sebagai elemen HTML biasa
            (bukan <circle> di dalam svg) agar tetap bulat sempurna - svg di
            atas di-stretch non-uniform (preserveAspectRatio="none") sehingga
            lingkaran di dalamnya akan gepeng jadi elips kalau dipakai. */}
        {points.map((p, i) => {
          const isLeft = i % 2 === 0;
          const dotX = isLeft ? p.x + 6 : p.x - 6;
          return (
            <span
              key={i}
              aria-hidden="true"
              className="absolute z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink-700"
              style={{ left: `${dotX}%`, top: `${p.y}%` }}
            />
          );
        })}

        <ul className="relative space-y-16 py-2">
          {items.map((item, i) => {
            const Icon = ICONS[item.icon] || Sparkles;
            const isLeft = i % 2 === 0;
            const badge = (
              <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-cloud shadow-md ring-4 ring-pearl">
                <Icon size={22} className="text-ocean" strokeWidth={1.5} />
              </div>
            );
            return (
              <li key={item.title} className="relative flex items-center gap-5">
                {isLeft && badge}
                {/* Teks selalu rata kiri, sisi ikon yang berganti -
                    sesuai gambar referensi (bukan teks yang mengikuti
                    sisi ikon). */}
                <Reveal delay={i * 0.1} className="flex-1 text-left">
                  <p className="font-display text-lg text-ink-700">{item.title}</p>
                  <p className="mt-1 font-body text-xs leading-relaxed text-ink-600">{item.desc}</p>
                </Reveal>
                {!isLeft && badge}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}