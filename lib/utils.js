// Gabungkan className secara kondisional tanpa perlu library tambahan
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Bangun link wa.me dengan teks yang sudah di-encode
export function buildWhatsAppLink(number, message) {
  const clean = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}

// Ambil nama tamu dari query string ?to=Nama+Tamu
export function formatGuestName(raw) {
  if (!raw) return "Bapak/Ibu/Saudara/i";
  return decodeURIComponent(raw).replace(/\+/g, " ");
}
