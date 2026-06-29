'use client';

import PhotoFrame from './PhotoFrame';
import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { weddingData } from '@/lib/data';

// Frame foto bundar dengan cincin putus-putus dekoratif + aksen titik kecil di
// bawah, sedikit dimiringkan agar terasa lebih hidup (tidak kaku/simetris).
function PortraitFrame({ src, label, tilt }) {
  return (
    <div className={`relative mx-auto h-32 w-32 sm:h-36 sm:w-36 ${tilt}`}>
      <div className="absolute -inset-2.5 rounded-full border border-dashed border-pearl/60" />
      <div className="absolute inset-0 overflow-hidden rounded-full shadow-xl ring-[5px] ring-pearl">
        <PhotoFrame src={src} alt={label} className="h-full w-full" label={label} />
      </div>
      <span className="absolute -bottom-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-sky ring-2 ring-pearl" />
    </div>
  );
}

export default function Intro() {
  return (
    // bg-fixed -> latar tidak ikut ter-scroll, hanya konten di atasnya yang bergerak
    <section className="relative bg-fixed bg-cover bg-center px-6 py-24 text-center" style={{ backgroundImage: `url(${weddingData.introBackground})` }}>
      {/* Lapisan gelap transparan di atas foto - bikin foto sedikit lebih gelap
          sekaligus memastikan semua teks di section ini tetap kontras & mudah dibaca */}
      <div className="absolute inset-0 bg-ink-900/70" />

      <div className="relative z-10">
        <Reveal>
          <p className="mx-auto max-w-xs rounded-xl bg-ink-900/40 px-4 py-3 font-body text-sm leading-relaxed text-pearl backdrop-blur-sm">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-10 sm:grid-cols-2">
          <Reveal delay={0.1}>
            <PortraitFrame src={weddingData.bride.photo} label="Foto mempelai wanita" tilt="-rotate-3" />
            <h3 className="mt-5 font-script text-4xl text-pearl [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">{weddingData.bride.fullName}</h3>
            <p className="mx-auto mt-2 max-w-[220px] rounded-lg bg-ink-900/45 px-3 py-2 font-body text-xs leading-relaxed text-sky-light backdrop-blur-sm">{weddingData.bride.parents}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <PortraitFrame src={weddingData.groom.photo} label="Foto mempelai pria" tilt="rotate-3" />
            <h3 className="mt-5 font-script text-4xl text-pearl [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">{weddingData.groom.fullName}</h3>
            <p className="mx-auto mt-2 max-w-[220px] rounded-lg bg-ink-900/45 px-3 py-2 font-body text-xs leading-relaxed text-sky-light backdrop-blur-sm">{weddingData.groom.parents}</p>
          </Reveal>
        </div>

        {/* <Reveal delay={0.3}>
          <SectionDivider tone="dark" />
          <p className="font-body text-sm text-sky-light">{weddingData.hashtag}</p>
        </Reveal> */}
      </div>
    </section>
  );
}
