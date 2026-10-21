"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, ReferenceArea, ResponsiveContainer, CartesianGrid } from "recharts";
import { fmt } from "@/libs/format";

// Una serie por gráfica (nada de doble eje). Bandas alternadas por torneo, marcas escritas en los cambios de equipo,
// y la media de la liga como línea gris con su valor.
export default function TrendLine({ data, dataKey, unit = "", league, height = 240, bands = [], marks = [] }) {
  const tickIdx = bands.map((b) => b.from);
  const tickName = Object.fromEntries(bands.map((b) => [b.from, b.short ?? b.label]));
  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 22, right: 12, left: 0, bottom: 0 }}>
          {bands.map((b, i) => (i % 2 === 1 ? <ReferenceArea key={b.label} x1={b.from} x2={b.to} fill="var(--line-2)" fillOpacity={0.6} ifOverflow="visible" /> : null))}
          <CartesianGrid vertical={false} stroke="var(--line-2)" />
          <XAxis type="number" dataKey="x" domain={[0, data.length - 1]} ticks={tickIdx} tickFormatter={(v) => tickName[v] ?? ""} tick={{ fontSize: 11, fill: "var(--ink-3)" }} axisLine={{ stroke: "var(--line)" }} tickLine={false} />
          <YAxis width={40} tick={{ fontSize: 11, fill: "var(--ink-3)" }} axisLine={false} tickLine={false} tickFormatter={(v) => fmt(v, unit)} />
          <Tooltip
            content={({ active, payload }) =>
              active && payload?.length ? (
                <div className="bg-ink text-white text-xs rounded-md px-3 py-2">
                  <p className="font-semibold">{payload[0].payload.title}</p>
                  <p>{fmt(payload[0].value, unit)}</p>
                  {payload[0].payload.sub && <p className="opacity-70">{payload[0].payload.sub}</p>}
                </div>
              ) : null
            }
          />
          {league != null && <ReferenceLine y={league} stroke="var(--liga)" strokeWidth={1.5} label={{ value: `liga ${fmt(league, unit)}`, position: "insideBottomRight", fontSize: 11, fill: "var(--liga)" }} />}
          {marks.map((m) => (
            <ReferenceLine key={m.x} x={m.x} stroke="var(--ink-3)" strokeDasharray="3 3" label={{ value: m.label, position: "top", fontSize: 11, fill: "var(--ink-2)" }} />
          ))}
          <Line type="monotone" dataKey={dataKey} stroke="var(--almada)" strokeWidth={2} dot={false} activeDot={{ r: 5, strokeWidth: 2, stroke: "var(--surface)" }} isAnimationActive={false} connectNulls />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
