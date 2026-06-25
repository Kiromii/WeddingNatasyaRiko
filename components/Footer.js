'use client';

import { Heart } from 'lucide-react';
import PhotoFrame from './PhotoFrame';
import Reveal from './Reveal';
import { weddingData } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative flex min-h-[620px] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center text-pearl">
      {/* Foto sebagai background penuh */}
      <PhotoFrame src={weddingData.closingPhoto} alt="Penutup" className="absolute inset-0 h-full w-full object-cover" label="Foto penutup di /public/images/closing.jpg" />
      {/* Overlay gradasi biru agar teks tetap terbaca di atas foto */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-800/75 to-ink-900/90" />
      <div className="bg-noise absolute inset-0 opacity-20" />

      <div className="relative z-10">
        <Reveal>
          <Heart className="mx-auto h-5 w-5 text-sky" strokeWidth={1.5} />
          <p className="mx-auto mt-4 max-w-xs font-body text-sm leading-relaxed text-sky-light">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.</p>
          <h2 className="mt-5 font-script text-5xl text-pearl">
            {weddingData.bride.name} &amp; {weddingData.groom.name}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 font-body text-[11px] uppercase tracking-[0.2em] text-sky/60">Dibuat oleh DesignArchive — {weddingData.weddingDateLabel}</p>
        </Reveal>
      </div>
    </footer>
  );
}
