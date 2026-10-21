// Un dato héroe: cifra en Archivo ancho, etiqueta en una frase, referencia de liga opcional.
export default function Stat({ value, label, reference, refLabel = "liga", tone = "neutro", size = "lg" }) {
  const color = tone === "favor" ? "text-almada" : tone === "contra" ? "text-contra" : "text-ink";
  const sz = size === "xl" ? "text-5xl" : size === "md" ? "text-2xl" : "text-4xl";
  return (
    <div className="bg-surface border border-line rounded-lg p-5">
      <p className={`display ${sz} ${color}`}>{value}</p>
      <p className="text-sm text-ink-2 mt-2 leading-snug">{label}</p>
      {reference != null && reference !== "" && (
        <p className="text-xs text-ink-3 mt-1">
          {refLabel} {reference}
        </p>
      )}
    </div>
  );
}
