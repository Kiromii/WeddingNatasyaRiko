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

// Bangun jalur "jalan setapak" yang meliuk kiri-kanan, satu lengkungan per
// momen. viewBox dibuat 0-100 di kedua sumbu lalu di-stretch non-uniform
// (preserveAspectRatio="none") supaya otomatis menyesuaikan tinggi asli
// daftar momen - tidak perlu hitung pixel manual & tetap responsif.
function buildWindingPath(count) {
  const segment = 100 / count;
  let d = 'M50,0';
  for (let i = 0; i < count; i++) {
    const sideX = i % 2 === 0 ? 16 : 84;
    const midY = i * segment + segment * 0.5;
    const endY = i * segment + segment;
    d += ` C50,${midY - segment * 0.32} ${sideX},${midY - segment * 0.2} ${sideX},${midY}`;
    d += ` C${sideX},${midY + segment * 0.2} 50,${endY - segment * 0.32} 50,${endY}`;
  }
  return d;
}

export default function LoveStory() {
  const containerRef = useRef(null);
  const items = weddingData.loveStory;
  const pathD = buildWindingPath(items.length);

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

      <div ref={containerRef} className="relative mx-auto mt-10 max-w-sm">
        {/* Jalan setapak melengkung sebagai latar - garis tipis statis + garis
            biru yang "tergambar" mengikuti scroll di atasnya */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <path d={pathD} fill="none" stroke="#CBDBE6" strokeWidth="1" strokeLinecap="round" />
          <motion.path d={pathD} fill="none" stroke="#3B6E91" strokeWidth="1.3" strokeLinecap="round" style={{ pathLength }} />
        </svg>

        <ul className="relative space-y-16 py-2">
          {items.map((item, i) => {
            const Icon = ICONS[item.icon] || Sparkles;
            const isLeft = i % 2 === 0;
            return (
              <li key={item.title} className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                <Reveal delay={i * 0.1} className="w-[78%]">
                  <div className={`flex items-center gap-4 ${isLeft ? '' : 'flex-row-reverse text-right'}`}>
                    <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-cloud shadow-md ring-4 ring-pearl">
                      <Icon size={22} className="text-ocean" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-display text-lg text-ink-700">{item.title}</p>
                      <p className="mt-1 font-body text-xs leading-relaxed text-ink-600">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
