// Récord ganados / empatados / perdidos como barra apilada, con los números en su color.
export default function RecordBar({ W = 0, D = 0, L = 0, compact = false }) {
  const n = W + D + L || 1;
  const seg = (v, cls) => (v > 0 ? <span className={`${cls} h-full`} style={{ width: `${(v / n) * 100}%` }} /> : null);
  return (
    <div className={compact ? "w-full" : "w-full max-w-xs"}>
      <div className={`flex gap-px rounded-sm overflow-hidden ${compact ? "h-1.5" : "h-2.5"}`}>
        {seg(W, "bg-win")}
        {seg(D, "bg-draw")}
        {seg(L, "bg-loss")}
      </div>
      <p className={`flex gap-3 mt-1.5 num ${compact ? "text-[11px]" : "text-xs"}`}>
        <span className="text-win font-semibold">
          {W} <span className="font-normal text-ink-3">ganados</span>
        </span>
        <span className="text-draw font-semibold">
          {D} <span className="font-normal text-ink-3">empatados</span>
        </span>
        <span className="text-loss font-semibold">
          {L} <span className="font-normal text-ink-3">perdidos</span>
        </span>
      </p>
    </div>
  );
}
