"use client";

import { useSyncExternalStore } from "react";
import PitchDiagram from "@/components/charts/PitchDiagram";
import inlineMd from "@/libs/inlineMd";

// Glosario como explorador: índice a la izquierda, una definición a la vez a la derecha.
// La selección vive en el hash (#D-02) para que los chips del resto del dashboard sigan aterrizando en su regla.
const ICONS = {
  "D-01": <circle cx="12" cy="12" r="8" />,
  "D-20": <path d="M3 11 12 4l9 7M5 10v10h14V10" />,
  "D-24": <path d="M6 4h12v4a6 6 0 0 1-12 0V4ZM9 20h6M12 14v6M3 6h3M18 6h3" />,
  "D-25": <path d="M12 3 4 6v6c0 4.4 3.4 8.2 8 9 4.6-.8 8-4.6 8-9V6l-8-3Z" />,
  "D-26": <path d="M4 5h16v15H4zM4 10h16M8 3v4M16 3v4" />,
  "D-26b": <path d="M12 3 4 6v6c0 4.4 3.4 8.2 8 9 4.6-.8 8-4.6 8-9V6l-8-3ZM12 8v8M8 12h8" />,
};

const subscribe = (cb) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};
const readHash = () => decodeURIComponent(window.location.hash.slice(1));
const noHash = () => "";

function IconPanel({ id }) {
  return (
    <div className="aspect-[3/2] w-full rounded-[3px] bg-grass-soft text-grass flex items-center justify-center border border-grass/30">
      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {ICONS[id] ?? <circle cx="12" cy="12" r="8" />}
      </svg>
    </div>
  );
}

const linkCls = (on) => `block rounded-md px-3 transition-colors ${on ? "bg-sidebar text-white" : "text-ink-2 hover:bg-surface hover:text-ink"}`;

export default function DefExplorer({ scope, groups, mets }) {
  const hash = useSyncExternalStore(subscribe, readHash, noHash);
  const flat = groups.flatMap((g) => g.items.map((x, i) => ({ ...x, group: g.title, pos: i + 1, of: g.items.length })));
  const order = ["alcance", ...flat.map((x) => x.id), "metricas"];
  const current = order.includes(hash) ? hash : "alcance";
  const at = order.indexOf(current);
  const label = (id) => (id === "alcance" ? "Alcance y límites" : id === "metricas" ? "Métricas por bloque" : flat.find((x) => x.id === id)?.term);
  const def = flat.find((x) => x.id === current);

  return (
    <div className="grid lg:grid-cols-[15rem_minmax(0,1fr)] gap-x-10 gap-y-6 items-start">
      <label className="lg:hidden">
        <span className="sr-only">Ir a</span>
        <select className="w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-ink" value={current} onChange={(e) => (window.location.hash = e.target.value)}>
          <option value="alcance">Alcance y límites</option>
          {groups.map((g) => (
            <optgroup key={g.title} label={g.title}>
              {g.items.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.id} {x.term}
                </option>
              ))}
            </optgroup>
          ))}
          <option value="metricas">Métricas por bloque</option>
        </select>
      </label>

      <nav aria-label="Índice" className="hidden lg:block sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto pr-1 text-sm">
        <a href="#alcance" className={`${linkCls(current === "alcance")} py-1.5 font-medium`} aria-current={current === "alcance" ? "true" : undefined}>
          Alcance y límites
        </a>
        {groups.map((g) => (
          <div key={g.title} className="mt-5">
            <p className="px-3 mb-1 text-xs font-semibold text-ink">{g.title}</p>
            <ul>
              {g.items.map((x) => (
                <li key={x.id}>
                  <a href={`#${x.id}`} className={`${linkCls(current === x.id)} py-1 text-[13px] truncate`} aria-current={current === x.id ? "true" : undefined}>
                    <span className={`num mr-1.5 ${current === x.id ? "text-white/60" : "text-ink-3"}`}>{x.id}</span>
                    {x.term}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <a href="#metricas" className={`${linkCls(current === "metricas")} py-1.5 mt-5 font-medium`} aria-current={current === "metricas" ? "true" : undefined}>
          Métricas por bloque
        </a>
      </nav>

      <div className="min-w-0">
        <div className="bg-surface border border-line rounded-lg p-6 md:p-8 min-h-[32rem]">
          {current === "alcance" && (
            <>
              <h2 className="display text-3xl text-ink mb-6">Alcance y límites</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                {scope.map((s, i) => (
                  <div key={i} className="answer">
                    {s.title && <h3 className="font-semibold text-ink mb-1.5">{s.title}</h3>}
                    <p className="text-sm text-ink-2 leading-relaxed">{inlineMd(s.text)}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {def && (
            <article className="grid xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-x-10 gap-y-6 items-start">
              <div className="xl:sticky xl:top-8">{def.diagram ? <PitchDiagram variant={def.diagram} /> : <IconPanel id={def.id} />}</div>
              <div className="min-w-0">
                <p className="text-sm text-ink-3 num">
                  {def.group}, {def.pos} de {def.of}
                </p>
                <h2 className="display text-3xl md:text-4xl text-ink mt-2">{def.term}</h2>
                <p className="text-lg text-ink-2 mt-4 leading-relaxed max-w-prose">{def.corto}</p>
                <div className="mt-6 pt-5 border-t border-line text-sm text-ink-2 leading-relaxed space-y-2 max-w-prose">
                  <p className="font-semibold text-ink">
                    La regla exacta <span className="font-normal text-ink-3 num">{def.id}</span>
                  </p>
                  <p>{inlineMd(def.definition)}</p>
                  {def.threshold && def.threshold !== "—" && (
                    <p>
                      <span className="font-semibold text-ink">Umbral:</span> {inlineMd(def.threshold)}
                    </p>
                  )}
                  {def.implements && (
                    <p>
                      <span className="font-semibold text-ink">Código:</span> <span className="field">{def.implements}</span>
                    </p>
                  )}
                </div>
              </div>
            </article>
          )}

          {current === "metricas" && (
            <>
              <h2 className="display text-3xl text-ink">Métricas por bloque</h2>
              <p className="text-sm text-ink-2 mt-2 mb-4 max-w-prose">Qué se toma tal cual de Hudl StatsBomb y qué se calculó aquí con las definiciones.</p>
              <div className="divide-y divide-line-2">
                {mets.map((x) => (
                  <div key={x.id} className="grid md:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1fr)] gap-x-8 gap-y-2 py-5">
                    <div>
                      <p className="text-xs text-ink-3 num">{x.id}</p>
                      <p className="font-semibold text-ink">{x.block}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink-3 mb-1">Viene de StatsBomb</p>
                      <p className="text-sm text-ink-2 leading-relaxed">{inlineMd(x.statsbomb)}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink-3 mb-1">Es nuestra</p>
                      <p className="text-sm text-ink-2 leading-relaxed">{inlineMd(x.own)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flex justify-between gap-4 mt-4 text-sm">
          {at > 0 ? (
            <a href={`#${order[at - 1]}`} className="group min-w-0 text-ink-2 hover:text-ink">
              <span className="block text-xs text-ink-3">Anterior</span>
              <span className="truncate block">‹ {label(order[at - 1])}</span>
            </a>
          ) : (
            <span />
          )}
          {at < order.length - 1 && (
            <a href={`#${order[at + 1]}`} className="min-w-0 text-right text-ink-2 hover:text-ink">
              <span className="block text-xs text-ink-3">Siguiente</span>
              <span className="truncate block">{label(order[at + 1])} ›</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
