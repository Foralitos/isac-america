// Cada pantalla abre con la pregunta que contesta. Sin etiquetas decorativas encima.
export default function PageHeader({ question, lead, aside }) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6 mb-8">
      <div className="max-w-3xl">
        <h1 className="display text-3xl md:text-4xl text-ink">{question}</h1>
        {lead && <p className="text-ink-2 mt-3 text-base md:text-lg leading-relaxed max-w-2xl">{lead}</p>}
      </div>
      {aside && <div className="text-sm text-ink-2">{aside}</div>}
    </header>
  );
}
