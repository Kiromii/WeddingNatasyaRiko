"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PhotoFrame from "./PhotoFrame";
import Reveal from "./Reveal";
import { weddingData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink-700 px-6 pb-16 pt-24 text-center text-pearl">
      <div className="bg-noise absolute inset-0 opacity-30" />

      <Reveal>
        <p className="font-body text-[11px] uppercase tracking-[0.4em] text-sky/80">
          We Are Getting Married
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="mt-3 font-script text-7xl leading-none text-pearl sm:text-8xl">
          {weddingData.bride.name}
        </h1>
      </Reveal>
      <Reveal delay={0.15}>
        <span className="my-1 block font-display text-2xl italic text-sky">&amp;</span>
      </Reveal>
      <Reveal delay={0.2}>
        <h1 className="font-script text-7xl leading-none text-pearl sm:text-8xl">
          {weddingData.groom.name}
        </h1>
      </Reveal>

      <Reveal delay={0.3} className="relative mt-10 h-[360px] w-[260px] sm:h-[420px] sm:w-[300px]">
        <div className="absolute inset-0 -rotate-2 rounded-[2rem] border border-sky/30" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-pearl/10">
          <PhotoFrame
            src={weddingData.heroPhoto}
            alt={`${weddingData.bride.name} & ${weddingData.groom.name}`}
            className="h-full w-full"
            label="Letakkan foto utama di /public/images/hero.jpg"
          />
        </div>
      </Reveal>

      <Reveal delay={0.4} className="mt-10 max-w-xs">
        <p className="font-display text-base italic leading-relaxed text-sky-light">
          “{weddingData.quote.text}”
        </p>
        <p className="mt-2 font-body text-xs uppercase tracking-[0.2em] text-sky/60">
          {weddingData.quote.source}
        </p>
      </Reveal>

      <motion.div
        className="absolute bottom-6 text-sky/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
