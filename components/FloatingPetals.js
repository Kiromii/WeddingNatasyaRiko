"use client";

// Sekumpulan partikel kecil yang melayang turun perlahan, memberi kesan
// "hidup" pada cover & hero tanpa perlu asset gambar atau library tambahan.
const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 7.3) % 100}%`,
  delay: `${(i * 1.37) % 9}s`,
  duration: `${10 + (i % 5) * 2}s`,
  size: 4 + (i % 3) * 2,
}));

export default function FloatingPetals({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 rounded-full bg-sky/70 animate-petal"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
