'use client';

'use client';

import { useState } from 'react';
import { Gift, Copy, Check, QrCode, ChevronDown, Landmark } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { weddingData } from '@/lib/data';

// Kartu rekening bergaya "kartu debit virtual": gradasi navy-ocean, aksen
// lingkaran transparan ala hologram kartu, nomor rekening ditulis renggang
// seperti angka emboss di kartu fisik.
function BankCard({ bank, number, name }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard tidak tersedia (misalnya http non-secure) - abaikan secara senyap
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink-800 via-ink-700 to-ocean px-5 py-5 text-left shadow-xl ring-1 ring-pearl/10">
      {/* aksen lingkaran transparan ala hologram kartu debit */}
      <span className="pointer-events-none absolute -right-7 -top-7 h-28 w-28 rounded-full bg-pearl/10" />
      <span className="pointer-events-none absolute -bottom-9 -left-5 h-24 w-24 rounded-full bg-pearl/5" />

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Landmark size={14} className="text-sky" strokeWidth={1.5} />
          <p className="font-body text-[11px] uppercase tracking-[0.25em] text-sky">{bank}</p>
        </div>
        <button onClick={copy} className="flex items-center gap-1 rounded-full bg-pearl/15 px-3 py-1.5 font-body text-xs text-pearl backdrop-blur-sm transition-colors hover:bg-pearl/25">
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? 'Disalin' : 'Salin'}
        </button>
      </div>

      <p className="relative z-10 mt-5 font-display text-2xl tracking-[0.12em] text-pearl">{number}</p>
      <p className="relative z-10 mt-1.5 font-body text-xs uppercase tracking-[0.1em] text-sky-light">a.n. {name}</p>
    </div>
  );
}

// Kartu QRIS bergaya "bingkai pemindai": border gradasi, sudut seperti
// viewfinder kamera, dan cahaya lembut yang berdenyut pelan di belakang kode QR.
function QrisCard({ value }) {
  return (
    <div className="mx-auto max-w-[230px]">
      <div className="relative rounded-[28px] bg-gradient-to-br from-sky via-ocean to-sky p-[2px] shadow-2xl">
        <div className="relative rounded-[26px] bg-pearl px-6 py-7">
          <span className="absolute left-3 top-3 h-5 w-5 rounded-tl-md border-l-2 border-t-2 border-ocean" />
          <span className="absolute right-3 top-3 h-5 w-5 rounded-tr-md border-r-2 border-t-2 border-ocean" />
          <span className="absolute bottom-3 left-3 h-5 w-5 rounded-bl-md border-b-2 border-l-2 border-ocean" />
          <span className="absolute bottom-3 right-3 h-5 w-5 rounded-br-md border-b-2 border-r-2 border-ocean" />

          <div className="mb-4 flex items-center justify-center gap-1.5">
            <QrCode size={14} className="text-ocean" />
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-ocean">Scan QRIS</span>
          </div>

          <div className="relative mx-auto flex h-[140px] w-[140px] items-center justify-center">
            <motion.span className="absolute h-[160px] w-[160px] rounded-2xl bg-sky/50 blur-xl" animate={{ opacity: [0.45, 0.9, 0.45], scale: [1, 1.06, 1] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} />
            <QRCodeCanvas value={value} size={140} fgColor="#16324F" bgColor="#FBFAF7" className="relative z-10 rounded-lg shadow-md" />
          </div>
        </div>
      </div>
      <p className="mt-4 font-body text-xs uppercase tracking-[0.15em] text-sky/70">Pindai untuk kirim hadiah digital</p>
    </div>
  );
}

export default function GiftSection() {
  const [showQris, setShowQris] = useState(false);

  return (
    <section className="bg-ink-700 px-6 py-20 text-center text-pearl">
      <Reveal>
        <Gift className="mx-auto h-6 w-6 text-sky" strokeWidth={1.5} />
        <p className="mt-3 font-body text-[11px] uppercase tracking-[0.35em] text-sky/80">Wedding Gift</p>
        <h2 className="mt-2 font-display text-3xl italic text-pearl">Tanda Kasih</h2>
        <SectionDivider tone="dark" />
        <p className="mx-auto mt-2 max-w-xs font-body text-sm leading-relaxed text-sky-light">{weddingData.gift.note}</p>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-6 flex max-w-xs flex-col gap-3">
        {weddingData.gift.banks.map((b) => (
          <BankCard key={b.number} {...b} />
        ))}
      </Reveal>

      {weddingData.gift.qrisUrl && (
        <Reveal delay={0.25} className="mt-7">
          <button onClick={() => setShowQris((v) => !v)} className="inline-flex items-center gap-2 rounded-full border border-sky/40 px-5 py-2.5 font-body text-xs uppercase tracking-[0.15em] text-sky transition-colors hover:bg-sky/10">
            <QrCode size={14} />
            {showQris ? 'Sembunyikan QRIS' : 'Lihat QRIS'}
            <motion.span animate={{ rotate: showQris ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={14} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {showQris && (
              <motion.div key="qris-panel" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
                <div className="pt-7">
                  <QrisCard value={weddingData.gift.qrisUrl} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      )}
    </section>
  );
}
