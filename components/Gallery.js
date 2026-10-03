'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import PhotoFrame from './PhotoFrame';
import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { weddingData } from '@/lib/data';

const MAX_COUNT = 12;

export default function Gallery() {
  const [active, setActive] = useState(null);
  const photos = weddingData.gallery.slice(0, MAX_COUNT);

  const selectPhoto = (photo) => {
    setActive(photo);
  };

  return (
    <section className="bg-ink-700 px-6 py-20 text-center">
      <Reveal>
        <p className="font-body text-[11px] uppercase tracking-[0.35em] text-sky/80">Our Moments</p>
        <h2 className="mt-2 font-display text-3xl italic text-pearl">Galeri Kami</h2>
        <SectionDivider tone="dark" />
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {photos.map((photo, index) => {
            return (
              <motion.button
                key={photo.src}
                type="button"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => selectPhoto(photo)}
                aria-label={`Buka foto ${index + 1}`}
                className={`relative aspect-square overflow-hidden rounded-xl shadow-lg ${index % 5 === 0 ? 'sm:row-span-2 sm:aspect-[3/4]' : ''}`}
              >
                <div className="h-full w-full">
                  <PhotoFrame src={photo.src} alt={photo.caption || `Momen pernikahan ${index + 1}`} className="h-full w-full" label={photo.caption} />
                </div>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/35 via-transparent to-transparent" />
              </motion.button>
            );
          })}
        </div>
      </Reveal>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/92 px-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.div
              className="relative w-full max-w-sm overflow-hidden rounded-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.35, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button onClick={() => setActive(null)} className="absolute right-3 top-3 z-10 rounded-full bg-ink-900/70 p-1.5 text-pearl" aria-label="Tutup">
                <X size={16} />
              </button>
              <PhotoFrame src={active.src} alt={active.caption} className="aspect-[3/4] w-full" label={active.caption} />
              <p className="bg-ink-900 py-3 font-display text-sm text-pearl">{active.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
