"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FloatingPetals from "./FloatingPetals";
import { weddingData } from "@/lib/data";

export default function Cover({ guestName, onOpen }) {
  const [opening, setOpening] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    // Beri waktu animasi flap & kartu terbuka sebelum cover ditutup
    window.setTimeout(() => {
      onOpen();
    }, 250);
    window.setTimeout(() => {
      setHidden(true);
    }, 1450);
  };

  if (hidden) return null;

  const initials = `${weddingData.bride.name[0]}${weddingData.groom.name[0]}`;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-ink-800 via-ink-700 to-ink-900 px-6"
      animate={opening ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.6, delay: opening ? 0.85 : 0 }}
    >
      <FloatingPetals />
      <div className="bg-noise absolute inset-0 opacity-40" />

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center text-pearl">
        <p className="font-body text-[11px] uppercase tracking-[0.35em] text-sky/80">
          The Wedding Of
        </p>

        <h1 className="mt-4 font-script text-6xl leading-none text-pearl sm:text-7xl">
          {weddingData.bride.name}
          <span className="mx-2 font-display text-3xl italic text-sky">&amp;</span>
          {weddingData.groom.name}
        </h1>

        <div className="ornament-divider mt-5 w-full text-sky/60">
          <span className="font-body text-xs tracking-[0.3em]">
            {weddingData.weddingDateLabel.toUpperCase()}
          </span>
        </div>

        {/* ===== Envelope ===== */}
        <div className="relative mt-10 h-[190px] w-[260px]" style={{ perspective: "1000px" }}>
          {/* Badan envelope */}
          <div className="absolute inset-x-0 bottom-0 h-[150px] rounded-b-md rounded-t-sm bg-cloud shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-x-0 bottom-0 h-[150px] [clip-path:polygon(0%_0%,50%_45%,100%_0%,100%_100%,0%_100%)] bg-pearl/60" />
          </div>

          {/* Kartu / surat yang terdorong naik saat dibuka */}
          <motion.div
            className="absolute inset-x-3 bottom-3 top-6 flex flex-col items-center justify-center rounded-sm bg-pearl shadow-inner"
            animate={
              opening
                ? { y: -86, scale: 1.04, transition: { duration: 0.7, delay: 0.35, ease: "easeOut" } }
                : { y: 0, scale: 1 }
            }
          >
            <span className="font-script text-3xl text-ink-700">{initials}</span>
            <span className="mt-1 h-px w-10 bg-ink-400/40" />
          </motion.div>

          {/* Flap segitiga atas - terbuka ke belakang seperti envelope sungguhan */}
          <motion.div
            className="absolute left-0 top-0 h-[95px] w-full origin-top"
            style={{ transformStyle: "preserve-3d" }}
            animate={opening ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="h-full w-full bg-ink-600 [clip-path:polygon(0%_0%,100%_0%,50%_100%)] shadow-md" />
          </motion.div>

          {/* Segel lilin sekaligus tombol buka */}
          {!opening && (
            <button
              onClick={handleOpen}
              aria-label="Buka undangan"
              className="absolute left-1/2 top-[78px] z-20 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-2 border-sky/70 bg-ink-700 font-script text-2xl text-sky shadow-[0_8px_20px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              {initials}
            </button>
          )}
        </div>

        <div className="mt-10 max-w-[260px]">
          <p className="font-body text-[11px] uppercase tracking-[0.25em] text-sky/70">
            Kepada Bapak/Ibu/Saudara/i
          </p>
          <p className="mt-2 font-display text-xl italic text-pearl">{guestName}</p>
        </div>

        <motion.p
          className="mt-8 font-body text-xs uppercase tracking-[0.3em] text-sky/60"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {opening ? "Membuka undangan…" : "Ketuk segel untuk membuka"}
        </motion.p>
      </div>
    </motion.div>
  );
}
