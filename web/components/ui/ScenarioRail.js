import Link from "next/link";
import { SCENARIO_GROUPS } from "@/libs/format";

// Las diez preguntas, agrupadas. El activo lleva la regla azul; cada ítem dice en gris de qué va.
export default function ScenarioRail({ active, bloque, base = "/dashboard/escenarios" }) {
  return (
    <nav aria-label="Escenarios" className="md:sticky md:top-8 space-y-6">
      {SCENARIO_GROUPS.map((g) => (
        <div key={g.title}>
          <p className="text-xs font-semibold text-ink-3 mb-2 px-3">{g.title}</p>
          <ul className="space-y-0.5">
            {g.items.map((s) => {
              const on = s.id === active;
              return (
                <li key={s.id}>
                  <Link
                    href={`${base}?escenario=${s.id}${bloque ? `&bloque=${bloque}` : ""}`}
                    aria-current={on ? "page" : undefined}
                    className={`block rounded-md px-3 py-2 border-l-4 transition-colors ${on ? "border-almada bg-surface" : "border-transparent hover:bg-surface/70"}`}
                  >
                    <span className={`block text-sm ${on ? "font-semibold text-ink" : "text-ink"}`}>{s.label}</span>
                    <span className="block text-xs text-ink-3 mt-0.5">{s.short}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
