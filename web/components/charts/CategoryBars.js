"use client";

import { BarChart, Bar, XAxis, YAxis, ReferenceLine, Tooltip, LabelList, ResponsiveContainer, Cell } from "recharts";
import { barColor, fmt, SMALL_N } from "@/libs/format";
import { pctSentence } from "@/libs/words";

// Barras horizontales por categoría, con la media de liga como línea escrita ("liga 1.14").
// Azul cuando el percentil le favorece, naranja cuando le pesa, azul plano si la métrica es descriptiva.
// Muestras chicas (n < 5) van en gris claro.
export default function CategoryBars({ data, unit, league }) {
  const h = 30 * data.length + 44;
  const max = Math.max(...data.map((d) => d.value ?? 0), league ?? 0) * 1.25 || 1;
  const min = Math.min(0, ...data.map((d) => d.value ?? 0));
  return (
    <div style={{ height: h }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 18, right: 64, left: 0, bottom: 4 }} barCategoryGap={6}>
          <XAxis type="number" domain={[min, max]} hide />
          <YAxis type="category" dataKey="label" width={160} tick={{ fontSize: 12, fill: "var(--ink-2)" }} axisLine={false} tickLine={false} />
          <Tooltip
            cursor={{ fill: "var(--line-2)" }}
            content={({ active, payload }) =>
              active && payload?.length ? (
                <div className="bg-ink text-white text-xs rounded-md px-3 py-2">
                  <p className="font-semibold">{payload[0].payload.label}</p>
                  <p>
                    Almada {fmt(payload[0].value, unit)}
                    {league != null && <>, liga {fmt(league, unit)}</>}
                  </p>
                  {payload[0].payload.pct != null && <p className="opacity-70">{pctSentence(payload[0].payload.pct)}</p>}
                  {payload[0].payload.n != null && (
                    <p className="opacity-70">
                      {payload[0].payload.n} partidos{payload[0].payload.n < SMALL_N ? ", muestra chica" : ""}
                    </p>
                  )}
                </div>
              ) : null
            }
          />
          {league != null && <ReferenceLine x={league} stroke="var(--liga)" strokeWidth={1.5} label={{ value: `liga ${fmt(league, unit)}`, position: "top", fontSize: 11, fill: "var(--liga)" }} />}
          <Bar dataKey="value" barSize={14} radius={[0, 4, 4, 0]} isAnimationActive={false}>
            {data.map((d) => (
              <Cell key={d.label} fill={barColor(d)} />
            ))}
            <LabelList dataKey="value" position="right" formatter={(v) => fmt(v, unit)} style={{ fontSize: 12, fill: "var(--ink)", fontVariantNumeric: "tabular-nums" }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
