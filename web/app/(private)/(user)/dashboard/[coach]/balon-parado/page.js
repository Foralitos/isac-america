import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Finding from "@/components/ui/Finding";
import Stat from "@/components/ui/Stat";
import PairedBars from "@/components/charts/PairedBars";
import SetPieceBoard from "@/components/board/SetPieceBoard";
import { getFindings, getMeta, getSetPieces } from "@/libs/data";
import { coachShort } from "@/libs/coach";

export const dynamic = "force-dynamic";

const DELIV = { inswinging: "Cerrado", outswinging: "Abierto", corto: "Corto", otro: "Otro" };
const TYPE = { corner: "Córner", tiro_libre: "Tiro libre indirecto", tiro_libre_directo: "Tiro libre directo", saque_banda: "Saque de banda", penal: "Penal", otro: "Otro" };

export default async function BalonParado({ params }) {
  const { coach: key } = await params;
  const [sp, findings, meta] = await Promise.all([getSetPieces(key), getFindings(key, { "fields.bloque": "M-4" }), getMeta(key)]);
  const short = coachShort(meta);
  if (!sp) return <PageHeader question="Sin datos de balón parado publicados." />;
  const c = sp.corners;
  const mix = Object.keys(DELIV).map((k) => ({ label: DELIV[k], a: c.delivery_mix[k] ?? 0, b: c.delivery_mix_league[k] ?? 0 }));
  const xgBy = Object.keys(DELIV).map((k) => ({
    label: DELIV[k],
    a: c.by_delivery.find((d) => d.delivery === k)?.xg_per_corner ?? null,
    b: c.by_delivery_league.find((d) => d.delivery === k)?.xg_per_corner ?? null,
  }));
  const types = (rows) => rows.map((r) => ({ ...r, label: TYPE[r.sp_type] ?? r.sp_type }));
  const n = sp.n_matches;
  return (
    <>
      <PageHeader question="¿Cómo cobra y cómo defiende el balón parado?" lead={`${c.n} córners cobrados en ${n} partidos. Tipo de envío, zona de primer contacto y de dónde salen los tiros, a favor y en contra. El peligro se mide en goles esperados: la probabilidad de gol de cada tiro, sumada.`} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <Stat value={c.per_match?.toFixed(1)} label="Córners a favor por partido" />
        <Stat value={`${(c.delivery_mix.corto ?? 0).toFixed(0)} %`} label="Córners cortos" reference={`${(c.delivery_mix_league.corto ?? 0).toFixed(0)} %`} />
        <Stat value={sp.shots_for.by_type.find((t) => t.sp_type === "corner")?.goals ?? 0} label="Goles de córner a favor" reference={`en ${n} partidos`} refLabel="" />
        <Stat value={sp.shots_against.by_type.find((t) => t.sp_type === "corner")?.goals ?? 0} label="Goles de córner en contra" reference={`en ${n} partidos`} refLabel="" />
      </div>

      {findings.length > 0 && (
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
          {findings.map((f) => (
            <Finding key={f.id} f={f} compact />
          ))}
        </div>
      )}

      {sp.board && (
        <div className="mb-6">
          <SetPieceBoard
            name={short}
            board={sp.board}
            penalties={{
              for: { n: sp.shots_for.by_type.find((t) => t.sp_type === "penal")?.shots ?? 0, goals: sp.shots_for.by_type.find((t) => t.sp_type === "penal")?.goals ?? 0 },
              against: { n: sp.shots_against.by_type.find((t) => t.sp_type === "penal")?.shots ?? 0, goals: sp.shots_against.by_type.find((t) => t.sp_type === "penal")?.goals ?? 0 },
              league: { n: sp.league_shots_for_by_type?.find((t) => t.sp_type === "penal")?.shots ?? 0, goals: sp.league_shots_for_by_type?.find((t) => t.sp_type === "penal")?.goals ?? 0 },
            }}
          />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card title="Tipo de envío" sub="Porcentaje de córners por tipo de cobro.">
          <PairedBars data={mix} unit="%" aLabel={short} />
        </Card>
        <Card title="Peligro por cada córner según el envío" sub="Goles esperados por cobro, con la liga como referencia. Cerrado: el balón va hacia la portería; abierto: se aleja de ella.">
          <PairedBars data={xgBy} unit="xg" aLabel={short} />
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          ["A favor", types(sp.shots_for.by_type)],
          ["En contra", types(sp.shots_against.by_type)],
        ].map(([title, rows]) => (
          <Card key={title} title={`Tiros de balón parado ${title.toLowerCase()}`}>
            <table className="w-full text-sm">
              <thead className="text-xs text-ink-3">
                <tr>
                  <th className="text-left font-normal pb-2">Tipo</th>
                  <th className="text-right font-normal pb-2">Tiros</th>
                  <th className="text-right font-normal pb-2">Peligro</th>
                  <th className="text-right font-normal pb-2">Goles</th>
                  <th className="text-right font-normal pb-2">Peligro por partido</th>
                </tr>
              </thead>
              <tbody className="num">
                {rows.map((r) => (
                  <tr key={r.sp_type} className="border-t border-line-2">
                    <td className="py-2 text-ink">{r.label}</td>
                    <td className="py-2 text-right">{r.shots}</td>
                    <td className="py-2 text-right">{r.xg.toFixed(1)}</td>
                    <td className="py-2 text-right">{r.goals}</td>
                    <td className="py-2 text-right text-ink-2">{(r.xg / n).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        ))}
      </div>
    </>
  );
}
