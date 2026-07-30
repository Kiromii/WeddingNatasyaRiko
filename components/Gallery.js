'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PhotoFrame from './PhotoFrame';
import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { weddingData } from '@/lib/data';

const MAX_COUNT = 12;

// Konfigurasi animasi slide per posisi kartu
const CARD_VARIANTS = {
  // Kartu masuk dari kanan (navigasi → next)
  enterRight: { x: 80, opacity: 0, scale: 0.85 },
  // Kartu masuk dari kiri (navigasi → prev)
  enterLeft:  { x: -80, opacity: 0, scale: 0.85 },
  center:     { x: 0, opacity: 1, scale: 1 },
  exitLeft:   { x: -80, opacity: 0, scale: 0.85 },
  exitRight:  { x: 80, opacity: 0, scale: 0.85 },
};

const SLIDE_TRANSITION = {
  duration: 0.45,
  ease: [0.25, 1, 0.35, 1], // custom spring-like easing
};

export default function Gallery() {
  const [active, setActive]   = useState(null);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = kanan→kiri, -1 = kiri→kanan
  const dragStart = useRef(0);
  const isDragging = useRef(false);

  const photos = weddingData.gallery.slice(0, MAX_COUNT);
  const total  = photos.length;

  const goNext = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
  };
  const goPrev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
  };
  const goTo = (i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  // Swipe / drag support
  const onDragStart = (e) => {
    dragStart.current = e.type === 'touchstart'
      ? e.touches[0].clientX
      : e.clientX;
    isDragging.current = false;
  };
  const onDragEnd = (e) => {
    const end  = e.type === 'touchend'
      ? e.changedTouches[0].clientX
      : e.clientX;
    const diff = dragStart.current - end;
    if (Math.abs(diff) > 40) {
      isDragging.current = true;
      diff > 0 ? goNext() : goPrev();
    }
  };

  const getIndex = (offset) => (current + offset + total) % total;

  return (
    <section className="bg-ink-700 px-6 py-20 text-center">
      <Reveal>
        <p className="font-body text-[11px] uppercase tracking-[0.35em] text-sky/80">
          Our Moments
        </p>
        <h2 className="mt-2 font-display text-3xl italic text-pearl">Galeri Kami</h2>
        <SectionDivider tone="dark" />
      </Reveal>

      <Reveal delay={0.1} className="relative mx-auto mt-8 select-none">

        {/* ─── Track 3 kartu ─────────────────────────────────────────── */}
        <div
          className="flex items-center justify-center gap-3 overflow-hidden py-4 px-2"
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onTouchStart={onDragStart}
          onTouchEnd={onDragEnd}
        >
          {[-1, 0, 1].map((offset) => {
            const idx      = getIndex(offset);
            const isActive = offset === 0;

            return (
              <motion.div
                key={offset}
                animate={{
                  scale:   isActive ? 1 : 0.82,
                  opacity: isActive ? 1 : 0.55,
                  zIndex:  isActive ? 10 : 0,
                }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.35, 1] }}
                className={`relative flex-shrink-0 overflow-hidden rounded-2xl shadow-xl
                  ${isActive ? 'w-52 sm:w-60' : 'w-40 sm:w-48'}`}
                style={{ height: 300 }}
                onClick={() => {
                  if (isDragging.current) return;
                  if (!isActive) { goTo(idx); return; }
                  setActive(photos[idx]);
                }}
              >
                {/* AnimatePresence hanya pada kartu tengah — foto lama slide
                    keluar, foto baru slide masuk dari arah yang benar */}
                {isActive ? (
                  <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                    <motion.div
                      key={idx}
                      custom={direction}
                      variants={{
                        enter: (dir) => ({
                          x: dir > 0 ? 120 : -120,
                          opacity: 0,
                          scale: 0.92,
                        }),
                        center: {
                          x: 0,
                          opacity: 1,
                          scale: 1,
                        },
                        exit: (dir) => ({
                          x: dir > 0 ? -120 : 120,
                          opacity: 0,
                          scale: 0.92,
                        }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={SLIDE_TRANSITION}
                      className="absolute inset-0"
                    >
                      <PhotoFrame
                        src={photos[idx].src}
                        alt={photos[idx].caption}
                        className="h-full w-full"
                        label={photos[idx].caption}
                      />
                      {/* Caption gradient */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/80 to-transparent px-3 py-3">
                        <p className="font-display text-xs text-pearl">
                          {photos[idx].caption}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  /* Kartu samping: crossfade saja (tidak perlu slide) */
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <div style={{ filter: 'grayscale(100%)' }} className="h-full w-full">
                        <PhotoFrame
                          src={photos[idx].src}
                          alt={photos[idx].caption}
                          className="h-full w-full"
                          label={photos[idx].caption}
                        />
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-ink-900/30" />
                    </motion.div>
                  </AnimatePresence>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Tombol navigasi */}
        <motion.button
          onClick={goPrev}
          whileTap={{ scale: 0.9 }}
          aria-label="Foto sebelumnya"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-ink-900/60 text-pearl backdrop-blur hover:bg-ink-900/90 transition-colors"
        >
          <ChevronLeft size={18} />
        </motion.button>
        <motion.button
          onClick={goNext}
          whileTap={{ scale: 0.9 }}
          aria-label="Foto berikutnya"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-ink-900/60 text-pearl backdrop-blur hover:bg-ink-900/90 transition-colors"
        >
          <ChevronRight size={18} />
        </motion.button>

        {/* Dot indicator */}
        <div className="mt-5 flex justify-center gap-1.5">
          {photos.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              animate={{ width: i === current ? 20 : 6 }}
              transition={{ duration: 0.3 }}
              aria-label={`Foto ${i + 1}`}
              className={`h-1.5 rounded-full transition-colors duration-300 ${
                i === current ? 'bg-sky' : 'bg-sky/30'
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="mt-3 font-body text-[11px] uppercase tracking-[0.2em] text-sky/50">
          {current + 1} / {total}
        </p>
      </Reveal>

      {/* ─── Lightbox ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/92 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative w-full max-w-sm overflow-hidden rounded-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.35, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-ink-900/70 p-1.5 text-pearl"
                aria-label="Tutup"
              >
                <X size={16} />
              </button>
              <PhotoFrame
                src={active.src}
                alt={active.caption}
                className="aspect-[3/4] w-full"
                label={active.caption}
              />
              <p className="bg-ink-900 py-3 font-display text-sm text-pearl">
                {active.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}