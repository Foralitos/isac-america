import { DefChips } from "./DefChip";
import { level, pctSentence, PCT_HELP } from "@/libs/words";

// Un hallazgo en tres zonas: la cifra héroe (kpi), la afirmación, y la decisión partida por audiencia.
// kpi en FINDINGS.md: "valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia"
export function parseKpi(raw) {
  if (!raw) return null;
  const [value, reference, unit, pct, label, tone, refLabel] = raw.split("|").map((s) => s.trim());
  if (!value) return null;
  return { value, reference, unit, pct: pct ? Number(pct) : null, label, tone: tone || "neutro", refLabel: refLabel || "liga" };
}

// "Rival: ... Staff: ..." en dos filas. Si no sigue el patrón, todo es para el staff.
export function splitDecision(d) {
  if (!d) return [];
  const re = /(?:^|\.\s+|;\s+|\s)((?:Rival|Staff)[^:]{0,24}):\s*/g;
  const parts = [];
  let last = null;
  let m;
  while ((m = re.exec(d))) {
    if (last) parts.push({ ...last, text: d.slice(last.end, m.index).trim() });
    last = { who: m[1].startsWith("Rival") ? "rival" : "staff", end: m.index + m[0].length };
  }
  if (last) parts.push({ ...last, text: d.slice(last.end).trim() });
  if (!parts.length) return [{ who: "staff", text: d }];
  return parts.map((p) => ({ ...p, text: p.text.replace(/[.;]\s*$/, "") }));
}

const TONE = {
  favor: "bg-almada-soft text-almada",
  contra: "bg-contra-soft text-contra",
  neutro: "bg-line-2 text-ink-2",
};

function Icon({ who }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  if (who === "rival")
    return (
      <svg {...common}>
        <path d="M12 3 4 6v6c0 4.4 3.4 8.2 8 9 4.6-.8 8-4.6 8-9V6l-8-3Z" />
      </svg>
    );
  return (
    <svg {...common}>
      <circle cx="9" cy="15" r="5" />
      <path d="m13 11 7-7M17 4h3v3" />
    </svg>
  );
}

export default function Finding({ f, compact = false, hero = false }) {
  const kpi = parseKpi(f.fields?.kpi);
  const decision = splitDecision(f.fields?.decision);
  return (
    <article className="answer py-1">
      {kpi && (
        <div className="mb-3">
          <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
            <span className={`display ${hero ? "text-6xl" : "text-5xl"} ${kpi.tone === "favor" ? "text-almada" : kpi.tone === "contra" ? "text-contra" : "text-ink"}`}>{kpi.value}</span>
            {kpi.unit && <span className="text-sm text-ink-2">{kpi.unit}</span>}
            {kpi.pct != null && (
              <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${TONE[kpi.tone] ?? TONE.neutro}`} title={`${pctSentence(kpi.pct)}. ${PCT_HELP}`}>
                {level(kpi.pct)}
              </span>
            )}
          </div>
          <p className="text-sm text-ink-2 mt-1.5">
            {kpi.label}
            {kpi.reference && (
              <>
                {". "}
                <span className="text-ink-3">
                  {kpi.refLabel.charAt(0).toUpperCase() + kpi.refLabel.slice(1)}: {kpi.reference}
                </span>
              </>
            )}
          </p>
        </div>
      )}
      <h3 className={`font-semibold text-ink leading-snug ${hero ? "text-xl" : "text-base"}`}>{f.title}</h3>
      {!compact && f.text && <p className="text-sm text-ink-2 mt-2 leading-relaxed max-w-prose">{f.text}</p>}
      {decision.length > 0 && (
        <div className={`grid gap-x-6 gap-y-3 mt-4 ${decision.length > 1 ? "md:grid-cols-2" : ""}`}>
          {decision.map((d, i) => (
            <div key={i} className="min-w-0">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-ink">
                <span className={d.who === "rival" ? "text-contra" : "text-almada"}>
                  <Icon who={d.who} />
                </span>
                {d.who === "rival" ? "Si lo enfrentas" : "Si eres su staff"}
              </p>
              <p className="text-sm text-ink-2 mt-1 leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>
      )}
      {f.fields?.cifra && (
        <details className="explore mt-3 text-xs">
          <summary className="text-ink-3 hover:text-ink inline-flex items-center gap-1">
            <span className="chev inline-block">›</span> Ver los números
          </summary>
          <p className="text-ink-2 mt-1.5 leading-relaxed num">{f.fields.cifra}</p>
        </details>
      )}
      <DefChips ids={f.fields?.definiciones ?? []} />
    </article>
  );
}
