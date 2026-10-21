import Link from "next/link";
import { DEFS } from "@/libs/plain";

// Un ID de definición (D-20) como chip con su nombre al pasar el mouse y link al glosario.
export default function DefChip({ id }) {
  const d = DEFS[id];
  const label = d?.term ?? id;
  const cls = "inline-flex items-center rounded-md border border-line bg-surface px-1.5 py-0.5 text-[11px] text-ink-2 hover:border-ink-3 hover:text-ink";
  if (id === "SB") {
    return (
      <span className={cls} title="Métrica calculada por Hudl StatsBomb">
        StatsBomb
      </span>
    );
  }
  return (
    <Link href={`/dashboard/metodologia#${id}`} className={cls} title={label}>
      <span className="font-medium mr-1">{id}</span>
      <span className="text-ink-3 max-w-[11rem] truncate">{label}</span>
    </Link>
  );
}

export function DefChips({ ids = [], className = "mt-3" }) {
  if (!ids.length) return null;
  return (
    <p className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      <span className="text-[11px] text-ink-3 mr-1">Cómo se midió</span>
      {ids.map((id) => (
        <DefChip key={id} id={id} />
      ))}
    </p>
  );
}
