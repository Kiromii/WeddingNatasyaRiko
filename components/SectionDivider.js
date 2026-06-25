export default function SectionDivider({ tone = "light" }) {
  const color = tone === "light" ? "text-ink-400" : "text-sky";
  return (
    <div className={`ornament-divider my-5 ${color}`}>
      <span className="font-script text-3xl leading-none -translate-y-1">&</span>
    </div>
  );
}
