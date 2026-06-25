"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionDivider from "./SectionDivider";
import { weddingData } from "@/lib/data";

function getTimeLeft() {
  const diff = new Date(weddingData.weddingDateISO).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

function Digit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-14 items-center justify-center rounded-lg bg-ink-700 font-display text-2xl text-pearl shadow-md sm:h-20 sm:w-16 sm:text-3xl">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-2 font-body text-[10px] uppercase tracking-[0.2em] text-ink-600">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-pearl px-6 py-20 text-center">
      <Reveal>
        <p className="font-body text-[11px] uppercase tracking-[0.35em] text-ocean">
          Menghitung Hari
        </p>
        <h2 className="mt-2 font-display text-3xl italic text-ink-700">Hingga Hari Bahagia Kami</h2>
        <SectionDivider />
      </Reveal>

      <Reveal delay={0.15} className="mt-6 flex items-center justify-center gap-3 sm:gap-5">
        {time?.done ? (
          <p className="font-display text-xl italic text-ink-700">
            Hari yang ditunggu telah tiba — sampai jumpa di acara kami!
          </p>
        ) : (
          <>
            <Digit value={time?.days ?? 0} label="Hari" />
            <Digit value={time?.hours ?? 0} label="Jam" />
            <Digit value={time?.minutes ?? 0} label="Menit" />
            <Digit value={time?.seconds ?? 0} label="Detik" />
          </>
        )}
      </Reveal>

      <Reveal delay={0.25}>
        <p className="mt-8 font-body text-sm text-ink-600">{weddingData.weddingDateLabel}</p>
      </Reveal>
    </section>
  );
}
