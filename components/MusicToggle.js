"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music2 } from "lucide-react";
import { weddingData } from "@/lib/data";

export default function MusicToggle({ isOpen }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!isOpen || !audioRef.current) return;
    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false)); // browser blokir autoplay tanpa interaksi - tombol tetap bisa ditekan manual
  }, [isOpen]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true));
    }
  };

  return (
    <>
      <audio ref={audioRef} src={weddingData.song.src} loop />
      <motion.button
        onClick={toggle}
        aria-label={playing ? "Hentikan musik" : "Putar musik"}
        title={weddingData.song.title}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink-700/90 text-pearl shadow-lg ring-1 ring-sky/40 backdrop-blur"
      >
        <motion.span
          className="flex items-center justify-center"
          animate={playing ? { rotate: 360 } : { rotate: 0 }}
          transition={playing ? { duration: 4, repeat: Infinity, ease: "linear" } : {}}
        >
          <Music2 size={18} className={playing ? "opacity-100" : "opacity-40"} />
        </motion.span>
        <span className="sr-only">{playing ? "Musik sedang diputar" : "Musik dijeda"}</span>
      </motion.button>
    </>
  );
}
