"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, ResponsiveContainer, Legend } from "recharts";

// Dos series (técnico vs liga) por categoría. Almada azul, liga gris. Leyenda siempre presente.
export default function PairedBars({ data, unit = "%", height = 180, aLabel = "Técnico", bLabel = "Liga" }) {
  const f = (v) => (v == null ? "–" : unit === "%" ? `${Number(v).toFixed(0)} %` : Number(v).toFixed(3));
  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 16, right: 8, left: 0, bottom: 0 }} barCategoryGap={18} barGap={2}>
          <XAxis dataKey="label" tick={{ fontSize: 12, fill: "var(--ink-2)" }} axisLine={{ stroke: "var(--line)" }} tickLine={false} />
          <YAxis hide />
          <Tooltip
            cursor={{ fill: "var(--line-2)" }}
            content={({ active, payload, label }) =>
              active && payload?.length ? (
                <div className="bg-ink text-white text-xs rounded-md px-3 py-2 shadow-lg">
                  <p className="font-semibold">{label}</p>
                  {payload.map((p) => (
                    <p key={p.dataKey}>
                      {p.name} {f(p.value)}
                    </p>
                  ))}
                </div>
              ) : null
            }
          />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, color: "var(--ink-2)" }} />
          <Bar dataKey="a" name={aLabel} fill="var(--almada)" barSize={18} radius={[4, 4, 0, 0]} isAnimationActive={false}>
            <LabelList dataKey="a" position="top" formatter={f} style={{ fontSize: 11, fill: "var(--ink)" }} />
          </Bar>
          <Bar dataKey="b" name={bLabel} fill="var(--liga)" barSize={18} radius={[4, 4, 0, 0]} isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
