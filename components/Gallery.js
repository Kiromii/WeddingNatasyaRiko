'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import PhotoFrame from './PhotoFrame';
import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { weddingData } from '@/lib/data';

const INITIAL_COUNT = 6; // jumlah foto yang tampil pertama kali
const STEP = 6; // tambahan foto setiap klik "Lihat Foto Lainnya"

function getTileSpan(index) {
  switch (index % 4) {
    case 0:
      return 'row-span-2';
    case 3:
      return 'col-span-2';
    default:
      return 'row-span-1';
  }
}

export default function Gallery() {
  const [active, setActive] = useState(null);
  const total = weddingData.gallery.length;
  const [visibleCount, setVisibleCount] = useState(Math.min(INITIAL_COUNT, total));

  const visiblePhotos = weddingData.gallery.slice(0, visibleCount);
  const remaining = total - visibleCount;
  const isExpanded = visibleCount > INITIAL_COUNT;

  const showMore = () => setVisibleCount((c) => Math.min(c + STEP, total));
  const showLess = () => setVisibleCount(Math.min(INITIAL_COUNT, total));

  return (
    <section className="bg-ink-700 px-6 py-20 text-center">
      <Reveal>
        <p className="font-body text-[11px] uppercase tracking-[0.35em] text-sky/80">Our Moments</p>
        <h2 className="mt-2 font-display text-3xl italic text-pearl">Galeri Kami</h2>
        <SectionDivider tone="dark" />
      </Reveal>

      <div className="mx-auto mt-8 grid max-w-md grid-cols-2 auto-rows-[140px] gap-3 sm:auto-rows-[170px]">
        {visiblePhotos.map((item, i) => (
          <Reveal key={item.src} delay={(i % STEP) * 0.06} className={getTileSpan(i)}>
            <button onClick={() => setActive(item)} className="block h-full w-full overflow-hidden rounded-xl ring-1 ring-pearl/10 transition-transform duration-300 hover:-translate-y-1">
              <PhotoFrame src={item.src} alt={item.caption} className="h-full w-full" label={item.caption} />
            </button>
          </Reveal>
        ))}
      </div>

      {(remaining > 0 || isExpanded) && (
        <Reveal delay={0.1} className="mt-7">
          {remaining > 0 ? (
            <button onClick={showMore} className="inline-flex items-center gap-2 rounded-full border border-sky/40 px-5 py-2.5 font-body text-xs uppercase tracking-[0.15em] text-sky transition-colors hover:bg-sky/10">
              Lihat Foto Lainnya ({remaining}) <ChevronDown size={14} />
            </button>
          ) : (
            <button onClick={showLess} className="inline-flex items-center gap-2 rounded-full border border-sky/40 px-5 py-2.5 font-body text-xs uppercase tracking-[0.15em] text-sky transition-colors hover:bg-sky/10">
              Tampilkan Lebih Sedikit <ChevronUp size={14} />
            </button>
          )}
        </Reveal>
      )}

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/90 px-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.div className="relative max-h-[80vh] w-full max-w-sm overflow-hidden rounded-2xl" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
              <button onClick={() => setActive(null)} className="absolute right-3 top-3 z-10 rounded-full bg-ink-900/60 p-1.5 text-pearl" aria-label="Tutup">
                <X size={16} />
              </button>
              <PhotoFrame src={active.src} alt={active.caption} className="aspect-[3/4] w-full" label={active.caption} />
              <p className="bg-ink-900 py-3 font-display italic text-pearl">{active.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
