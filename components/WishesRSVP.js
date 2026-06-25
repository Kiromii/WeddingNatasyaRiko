"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Reveal from "./Reveal";
import SectionDivider from "./SectionDivider";
import { weddingData } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/utils";

export default function WishesRSVP({ guestName }) {
  const [name, setName] = useState(guestName === "Bapak/Ibu/Saudara/i" ? "" : guestName);
  const [message, setMessage] = useState("");

  const composeMessage = () => {
    const lines = [
      `Halo, saya ingin mengirimkan doa & ucapan untuk pernikahan ${weddingData.bride.name} & ${weddingData.groom.name}.`,
      "",
      `Nama: ${name || "-"}`,
    ];
    if (message.trim()) {
      lines.push("", `Ucapan & doa: ${message.trim()}`);
    }
    return lines.join("\n");
  };

  const sendTo = (target) => {
    const number = target === "bride" ? weddingData.whatsapp.bride : weddingData.whatsapp.groom;
    window.open(buildWhatsAppLink(number, composeMessage()), "_blank");
  };

  return (
    <section className="bg-pearl px-6 py-20">
      <Reveal className="text-center">
        <p className="font-body text-[11px] uppercase tracking-[0.35em] text-ocean">
          Ucapan &amp; Konfirmasi
        </p>
        <h2 className="mt-2 font-display text-3xl italic text-ink-700">Kirim Doa &amp; Restu</h2>
        <SectionDivider />
        <p className="mx-auto mt-2 max-w-xs font-body text-sm text-ink-600">
          Kirimkan ucapan dan doa terbaik Anda langsung lewat WhatsApp.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-8 max-w-sm rounded-2xl bg-cloud p-6 shadow-sm ring-1 ring-ink-100">
        <label className="block text-left">
          <span className="font-body text-xs uppercase tracking-[0.15em] text-ink-600">Nama Anda</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tulis nama lengkap"
            className="mt-1.5 w-full rounded-lg border border-ink-100 bg-pearl px-3.5 py-2.5 font-body text-sm text-ink-700 outline-none focus:border-ocean"
          />
        </label>

        <label className="mt-4 block text-left">
          <span className="font-body text-xs uppercase tracking-[0.15em] text-ink-600">Ucapan &amp; Doa</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="Tulis doa dan ucapan terbaik Anda…"
            className="mt-1.5 w-full resize-none rounded-lg border border-ink-100 bg-pearl px-3.5 py-2.5 font-body text-sm text-ink-700 outline-none focus:border-ocean"
          />
        </label>

        <p className="mt-5 text-left font-body text-xs uppercase tracking-[0.15em] text-ink-600">
          Kirim pesan ini ke
        </p>
        <div className="mt-2 flex flex-col gap-2.5">
          <button
            onClick={() => sendTo("bride")}
            className="flex items-center justify-center gap-2 rounded-full bg-ink-700 px-5 py-3 font-body text-sm text-pearl transition-transform hover:scale-[1.02]"
          >
            <Send size={15} /> {weddingData.bride.name} (Mempelai Wanita)
          </button>
          <button
            onClick={() => sendTo("groom")}
            className="flex items-center justify-center gap-2 rounded-full border border-ink-700 px-5 py-3 font-body text-sm text-ink-700 transition-transform hover:scale-[1.02]"
          >
            <Send size={15} /> {weddingData.groom.name} (Mempelai Pria)
          </button>
        </div>
      </Reveal>
    </section>
  );
}