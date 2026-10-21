// Récord ganados / empatados / perdidos como barra apilada, con los números en su color.
export default function RecordBar({ W = 0, D = 0, L = 0, compact = false, dark = false }) {
  const muted = dark ? "text-white/60" : "text-ink-3";
  const n = W + D + L || 1;
  const seg = (v, cls) => (v > 0 ? <span className={`${cls} h-full`} style={{ width: `${(v / n) * 100}%` }} /> : null);
  return (
    <div className={compact ? "w-full" : "w-full max-w-xs"}>
      <div className={`flex gap-px rounded-sm overflow-hidden ${compact ? "h-1.5" : "h-2.5"}`}>
        {seg(W, dark ? "bg-almada" : "bg-win")}
        {seg(D, dark ? "bg-white/40" : "bg-draw")}
        {seg(L, dark ? "bg-contra" : "bg-loss")}
      </div>
      <p className={`flex gap-3 mt-1.5 num ${compact ? "text-[11px]" : "text-xs"}`}>
        <span className={`font-semibold ${dark ? "text-white" : "text-win"}`}>
          {W} <span className={`font-normal ${muted}`}>ganados</span>
        </span>
        <span className={`font-semibold ${dark ? "text-white/80" : "text-draw"}`}>
          {D} <span className={`font-normal ${muted}`}>empatados</span>
        </span>
        <span className={`font-semibold ${dark ? "text-contra" : "text-loss"}`}>
          {L} <span className={`font-normal ${muted}`}>perdidos</span>
        </span>
      </p>
    </div>
  );
}
