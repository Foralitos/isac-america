"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, ReferenceArea, ResponsiveContainer, CartesianGrid } from "recharts";
import { fmt } from "@/libs/format";

// Una serie por gráfica (nada de doble eje): cada partido como punto tenue y el promedio de 5 como línea.
// Los nombres de equipo y los torneos viven fuera del SVG, en franjas alineadas al área de dibujo,
// para que nunca se encimen aunque un tramo sea corto. La franja de torneos es también el selector.
const Y_W = 44;
const RIGHT = 12;

const pct = (n) => (i) => `${(i / Math.max(1, n - 1)) * 100}%`;

function spans(items, n) {
  return items.map((s, i) => {
    const end = i < items.length - 1 ? items[i + 1].from : n - 1;
    return { ...s, end };
  });
}

export default function TrendLine({ data, dataKey, rawKey, unit = "", league, leagueLabel, reversed = false, height = 280, bands = [], teams = [], selected, onSelect }) {
  const n = data.length;
  const at = pct(n);
  const width = (a, b) => `${((b - a) / Math.max(1, n - 1)) * 100}%`;
  const sel = bands.find((b) => b.label === selected);
  return (
    <div>
      <div className="relative h-6 mb-1" style={{ marginLeft: Y_W, marginRight: RIGHT }} aria-hidden>
        {spans(teams, n).map((t) => (
          <span key={t.from} className="absolute top-0 h-full border-l-2 border-ink pl-1.5 text-xs font-semibold text-ink truncate" style={{ left: at(t.from), width: width(t.from, t.end) }} title={t.label}>
            {t.label}
          </span>
        ))}
      </div>

      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 6, right: RIGHT, left: 0, bottom: 0 }}>
            {bands.map((b, i) => (i % 2 === 1 ? <ReferenceArea key={b.label} x1={b.from} x2={b.to} fill="var(--line-2)" fillOpacity={0.7} ifOverflow="visible" /> : null))}
            {sel && <ReferenceArea x1={sel.from} x2={sel.to} fill="var(--almada-soft)" fillOpacity={0.8} ifOverflow="visible" />}
            <CartesianGrid vertical={false} stroke="var(--line-2)" />
            <XAxis type="number" dataKey="x" domain={[0, n - 1]} hide />
            <YAxis width={Y_W} reversed={reversed} tick={{ fontSize: 11, fill: "var(--ink-3)" }} axisLine={false} tickLine={false} tickFormatter={(v) => fmt(v, unit)} />
            <Tooltip
              cursor={{ stroke: "var(--ink-3)", strokeDasharray: "2 3" }}
              content={({ active, payload }) => {
                const p = active && payload?.[0]?.payload;
                if (!p) return null;
                return (
                  <div className="bg-ink text-white text-xs rounded-md px-3 py-2 max-w-64">
                    <p className="font-semibold">{p.title}</p>
                    {rawKey && p[rawKey] != null && <p className="num">Este partido: {fmt(p[rawKey], unit)}</p>}
                    {p[dataKey] != null && <p className="num">Promedio de 5: {fmt(p[dataKey], unit)}</p>}
                    {p.sub && <p className="opacity-70 mt-0.5">{p.sub}</p>}
                  </div>
                );
              }}
            />
            {league != null && <ReferenceLine y={league} stroke="var(--liga)" strokeWidth={1.5} strokeDasharray="5 4" />}
            {teams.slice(1).map((t) => (
              <ReferenceLine key={t.from} x={t.from} stroke="var(--ink)" strokeOpacity={0.5} />
            ))}
            {rawKey && <Line dataKey={rawKey} stroke="none" dot={{ r: 2, fill: "var(--almada)", fillOpacity: 0.28, stroke: "none" }} activeDot={false} isAnimationActive={false} />}
            <Line type="monotone" dataKey={dataKey} stroke="var(--almada)" strokeWidth={2.25} dot={false} activeDot={{ r: 5, strokeWidth: 2, stroke: "var(--surface)" }} isAnimationActive={false} connectNulls />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="relative h-11 mt-1" style={{ marginLeft: Y_W, marginRight: RIGHT }} role="group" aria-label="Elegir torneo">
        {bands.map((b, i) => {
          const on = b.label === selected;
          const total = (b.W ?? 0) + (b.D ?? 0) + (b.L ?? 0) || 1;
          const last = i === bands.length - 1;
          return (
            <button
              key={b.label}
              type="button"
              onClick={() => onSelect?.(on ? "" : b.label)}
              aria-pressed={on}
              title={`${b.label}: ${b.W} ganados, ${b.D} empatados, ${b.L} perdidos`}
              className={`absolute top-0 h-full px-1.5 pt-1 text-left border-l border-surface transition-colors ${on ? "bg-almada text-white" : i % 2 === 1 ? "bg-line-2 text-ink-2 hover:bg-line" : "bg-bg text-ink-2 hover:bg-line"}`}
              style={{ left: at(b.from), width: width(b.from, last ? n - 1 : bands[i + 1].from) }}
            >
              <span className="block text-[11px] font-semibold leading-tight truncate num">{b.short}</span>
              <span className="mt-1 flex h-1 rounded-sm overflow-hidden gap-px">
                <span className={on ? "bg-white" : "bg-win"} style={{ width: `${(b.W / total) * 100}%` }} />
                <span className={on ? "bg-white/50" : "bg-draw"} style={{ width: `${(b.D / total) * 100}%` }} />
                <span className={on ? "bg-contra" : "bg-loss"} style={{ width: `${(b.L / total) * 100}%` }} />
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-3 text-xs text-ink-3" style={{ marginLeft: Y_W }}>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block w-5 h-0.5 bg-almada rounded" /> promedio de los últimos 5
        </span>
        {rawKey && (
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-almada/40" /> cada partido
          </span>
        )}
        {league != null && (
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block w-5 border-t-[1.5px] border-dashed border-liga" /> {leagueLabel ?? `liga ${fmt(league, unit)}`}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block w-px h-3 bg-ink/50" /> cambio de equipo
        </span>
      </div>
    </div>
  );
}
