"use client";

import { useState } from "react";
import TrendLine from "@/components/charts/TrendLine";
import MatchList from "./MatchList";
import { fmt } from "@/libs/format";

// Una gráfica a lo ancho con selector de métrica, y la franja de torneos como filtro compartido con la lista.
const METRICS = {
  xgd: {
    label: "Balance de peligro",
    sub: "Peligro creado menos peligro concedido, en goles esperados. Arriba de cero crea más de lo que concede.",
    dataKey: "xgdAvg",
    rawKey: "xgd",
    leagueLabel: () => "cero: crea lo mismo que concede",
  },
  ppda: {
    label: "Intensidad de presión",
    sub: "Pases que deja dar al rival antes de robar el balón. El eje va al revés: arriba es presión más intensa.",
    dataKey: "ppdaAvg",
    rawKey: "ppda",
    reversed: true,
    leagueLabel: (v) => `media de la liga, ${fmt(v)} pases`,
  },
};

export default function PartidosView({ matches, league, series, bands, teams }) {
  const [metric, setMetric] = useState("xgd");
  const [tourn, setTourn] = useState(bands[bands.length - 1]?.label ?? "");
  const m = METRICS[metric];
  const leagueValue = metric === "xgd" ? 0 : league.ppda_own;
  return (
    <>
      <section className="bg-surface border border-line rounded-lg p-5 md:p-6 mb-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div className="max-w-xl">
            <h2 className="text-lg font-semibold text-ink">{m.label}</h2>
            <p className="text-sm text-ink-2 mt-1">{m.sub}</p>
          </div>
          <div role="radiogroup" aria-label="Qué medir" className="inline-flex rounded-md border border-line p-0.5 bg-bg">
            {Object.entries(METRICS).map(([k, v]) => (
              <button
                key={k}
                type="button"
                role="radio"
                aria-checked={metric === k}
                onClick={() => setMetric(k)}
                className={`px-3 py-1.5 text-sm rounded transition-colors ${metric === k ? "bg-surface text-ink font-medium shadow-sm" : "text-ink-2 hover:text-ink"}`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
        <TrendLine
          data={series}
          dataKey={m.dataKey}
          rawKey={m.rawKey}
          reversed={m.reversed}
          league={leagueValue}
          leagueLabel={leagueValue != null ? m.leagueLabel(leagueValue) : null}
          bands={bands}
          teams={teams}
          selected={tourn}
          onSelect={setTourn}
        />
      </section>

      <MatchList matches={matches} league={league} bands={bands} tourn={tourn} setTourn={setTourn} />
    </>
  );
}
