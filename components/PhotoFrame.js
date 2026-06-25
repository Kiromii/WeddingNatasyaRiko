"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Dipakai di seluruh halaman untuk menampilkan foto.
 * Jika file foto di /public belum ada / gagal dimuat, otomatis tampil
 * placeholder rapi bertema biru — supaya tampilan tidak rusak sebelum
 * Anda mengganti foto asli.
 */
export default function PhotoFrame({ src, alt = "", className, label }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-ink-100 to-sky text-ink-600",
          className
        )}
      >
        <ImageIcon className="h-7 w-7 opacity-50" strokeWidth={1.5} />
        <span className="font-body text-[11px] tracking-wide opacity-60 px-4 text-center">
          {label || "Tambahkan foto di sini"}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
