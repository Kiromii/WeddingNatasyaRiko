'use client';

import { MapPin, CalendarHeart, Clock } from 'lucide-react';
import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { weddingData } from '@/lib/data';

function EventCard({ data }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-pearl/25 bg-pearl/10 px-6 py-8 text-center shadow-2xl backdrop-blur-xl">
      {/* highlight halus di tepi atas - ciri khas kaca glassmorphism */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-pearl/15 to-transparent" />

      <div className="relative z-10">
        <CalendarHeart className="mx-auto h-6 w-6 text-sky" strokeWidth={1.5} />
        <h3 className="mt-3 font-display text-xl italic text-pearl [text-shadow:0_2px_8px_rgba(0,0,0,0.45)]">{data.title}</h3>

        <div className="mx-auto mt-4 h-px w-10 bg-pearl/30" />

        <p className="mt-4 font-body text-sm font-medium text-pearl">{data.date}</p>
        <p className="mt-1 flex items-center justify-center gap-1.5 font-body text-sm text-sky-light">
          <Clock size={14} /> {data.time}
        </p>

        <p className="mt-4 font-display text-base text-pearl">{data.place}</p>
        <p className="mt-1 font-body text-xs text-sky-light/90">{data.address}</p>

        <a
          href={data.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-pearl/40 bg-pearl/10 px-5 py-2 font-body text-xs uppercase tracking-[0.15em] text-pearl transition-colors hover:bg-pearl/20"
        >
          <MapPin size={14} /> Lihat Lokasi
        </a>
      </div>
    </div>
  );
}

export default function EventDetails() {
  return (
    // bg-fixed -> latar foto tidak ikut ter-scroll, hanya konten di atasnya yang bergerak
    <section className="relative bg-fixed bg-cover bg-center px-6 py-20" style={{ backgroundImage: `url(${weddingData.eventsBackground})` }}>
      {/* Lapisan gelap transparan di atas foto - sedikit menggelapkan + menjaga
          judul section tetap kontras meski tanpa kartu di belakangnya */}
      <div className="absolute inset-0 bg-ink-900/70" />

      <div className="relative z-10">
        <Reveal className="text-center">
          <p className="font-body text-[11px] uppercase tracking-[0.35em] text-sky">Save The Date</p>
          <h2 className="mt-2 font-display text-3xl italic text-pearl [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">Acara Pernikahan</h2>
          <SectionDivider tone="dark" />
        </Reveal>

        <div className="mx-auto mt-8 flex max-w-md flex-col gap-6">
          <Reveal delay={0.1}>
            <EventCard data={weddingData.akad} />
          </Reveal>
          <Reveal delay={0.2}>
            <EventCard data={weddingData.resepsi} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
