import { DefChips } from "./DefChip";

// La jugada real que respalda un hallazgo, con el dibujo de pizarra ya encima del video.
export default function PlayClip({ clip }) {
  return (
    <figure className="min-w-0">
      <div className="rounded-lg overflow-hidden bg-ink aspect-video">
        <video src={clip.src} poster={clip.poster} controls playsInline preload="none" className="w-full h-full object-cover" />
      </div>
      <figcaption className="mt-3">
        <p className="text-xs font-semibold text-ink">La jugada: {clip.match}</p>
        <p className="text-sm text-ink-2 mt-1 leading-relaxed">{clip.text}</p>
        <p className="text-[11px] text-ink-3 mt-1.5">Imágenes: Club América / TUDN. Eventos: Hudl StatsBomb.</p>
        <DefChips ids={clip.defs} className="mt-2" />
      </figcaption>
    </figure>
  );
}
