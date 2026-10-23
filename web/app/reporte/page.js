import Image from "next/image";
import Link from "next/link";
import { CLIPS } from "@/libs/clips";
import TournamentChart from "./TournamentChart";

// Reporte para el jurado: público, se lee de arriba a abajo sin dar clics. Cifras de data/out/jorge-guillermo-almada-alves.
export const metadata = {
  title: "Reporte · Almada a través de los datos",
  description: "Cómo juega Guillermo Almada en 170 partidos de Liga MX con datos de Hudl StatsBomb: identidad, contexto, jugadores, balón parado, simulación y qué hacer con eso.",
};

const CLIP = CLIPS["jorge-guillermo-almada-alves"][0];

const TOC = [
  ["resumen", "En un minuto"],
  ["ofensiva", "Fase ofensiva"],
  ["defensiva", "Fase defensiva y transiciones"],
  ["contexto", "Consistencia y contexto"],
  ["jugadores", "Uso de jugadores"],
  ["balon-parado", "Balón parado"],
  ["suerte", "Suerte o dominio"],
  ["america", "El Almada del América"],
  ["accion", "Qué hacer con esto"],
  ["metodo", "Metodología"],
];

const IDEAS = [
  { v: "72", u: "ataques tras robo por partido", c: "liga 63 · p95", t: "Vive del robo", d: "Es lo que más lo separa de la liga, con los tres equipos." },
  { v: "10.9", u: "pases que deja dar antes de robar", c: "liga 14.0 · p85", t: "Presiona arriba y fuerte", d: "Su mejor versión, la campeona, es la de presión máxima." },
  { v: "19", u: "regates por partido", c: "liga 14 · p95", t: "Avanza en el uno contra uno", d: "Progresa más conduciendo que pasando." },
  { v: "+52 %", u: "peligro concedido de visita", c: "0.82 → 1.25 xG", t: "Son dos equipos", d: "En casa presiona y domina; fuera se repliega." },
  { v: "×2.4", u: "peligro creado tras su primer cambio perdiendo", c: "0.11 → 0.26 xG en 15 min", t: "El cambio funciona", d: "Mueve la banca al minuto 52 cuando pierde." },
];

const SCEN = [
  { c: "Local", n: 86, ppda: "9.9", xga: "0.82", tilt: "58.5", r: "44-27-15", note: "presiona y domina" },
  { c: "Visita", n: 84, ppda: "12.0", xga: "1.25", tilt: "49.7", r: "36-17-31", note: "se repliega, concede más", bad: true },
  { c: "Contra el top 6", n: 63, ppda: "12.8", xga: "—", tilt: "47.0", r: "25-17-21", note: "pierde la identidad", bad: true },
  { c: "Contra el resto", n: 107, ppda: "9.8", xga: "—", tilt: "58.3", r: "55-27-25", note: "su versión de siempre" },
  { c: "Cuartos de final", n: 10, ppda: "15.5", xga: "—", tilt: "40", r: "3-4-3", note: "se guarda", bad: true },
  { c: "Vuelta perdiendo el global", n: 2, ppda: "8.9", xga: "—", tilt: "56.5", r: "2-0-0", note: "presiona como nadie" },
];

const RIVAL = [
  ["Aguanta la primera media hora sin perder el balón en tu campo.", "Arranca a tope: 36 contrapresiones por 90 en los primeros 30 minutos (p82)."],
  ["Sal directo; no juegues desde atrás contra su presión.", "Deja dar 10.9 pases antes de robar (p85). Su portero, en cambio, juega largo: 60 % de sus pases."],
  ["Dobla la marca sobre sus extremos.", "19 regates por partido, más que el 95 % de la liga."],
  ["Déjalo tirar de fuera y cierra el área.", "49 % de sus tiros son de fuera del área y su xG por tiro está en la media."],
  ["Anota primero y ciérrate.", "Perdiendo tiene 56 % del balón y crea menos (1.12 xG por 90, p54): su ataque depende del robo."],
  ["Si va abajo después del 60, espera dos delanteros.", "Perdiendo pasa del 4-2-3-1 al 4-4-2; su primer cambio llega al 52'."],
  ["Defiende el córner corto con dos hombres y busca el contacto en el área.", "24 % de córners cortos (liga 13 %) y 40 penales en contra en 170 partidos."],
];

const KPIS = [
  { k: "Intensidad de presión (PPDA)", hoy: "10.8", meta: "≤ 9.8", ref: "Su versión campeona (Ap 2022) dejaba dar 9.8; en el Ap 2023 subió a 13.0 y el peligro concedido casi se duplicó.", d: "D-05b" },
  { k: "Presiones tras pérdida por partido", hoy: "27.6", meta: "≥ 35", ref: "Con Pachuca hacía 36.5; es la firma que no ha llegado al América (p13 de la liga).", d: "D-06" },
  { k: "xG concedido de visita", hoy: "1.25*", meta: "≤ 1.0", ref: "De local concede 0.82. El déficit de visita es de presión, no de ataque.", d: "D-20" },
  { k: "Tiros desde fuera del área", hoy: "49 %", meta: "≤ 43 %", ref: "La media de la liga. Cambiar tiros lejanos por llegadas sube el peligro sin cambiar el estilo.", d: "D-12" },
  { k: "PPDA contra el top 6", hoy: "12.8*", meta: "≤ 11", ref: "Contra el resto deja dar 9.8. Es donde se va a jugar la liguilla.", d: "D-25" },
  { k: "Minuto del primer cambio perdiendo", hoy: "51.8'", meta: "~50'", ref: "Su mejor decisión dentro del partido: el xG de los 15 minutos siguientes pasa de 0.11 a 0.26.", d: "D-21" },
];

const DEFS = [
  ["D-01", "Posesión", "Eventos con el mismo número de posesión de StatsBomb; se descartan las que no tienen ninguna acción con balón."],
  ["D-02", "Secuencia ofensiva", "Posesión con 3 o más acciones con balón, o que termina en tiro. Es peligrosa si toca el último tercio (x ≥ 80) o termina en tiro."],
  ["D-03", "Transición", "Tramo de la posesión que sigue a una recuperación en juego abierto, antes de que la posesión se asiente (marca de StatsBomb). Tiro rápido: tiro dentro de 10 s de recuperar."],
  ["D-05", "Fase de presión", "Dos o más presiones seguidas con no más de 5 s entre ellas en la misma posesión rival. Alta si su altura media es x ≥ 80. Éxito: recuperar en 5 s."],
  ["D-05b", "PPDA propio", "Pases completados del rival en su 60 % defensivo entre acciones defensivas nuestras en esa franja. Menos es más intenso. r = 0.95 contra el PPDA de StatsBomb."],
  ["D-06", "Contrapresión", "Presión dentro de 5 s de una pérdida propia (marca de StatsBomb)."],
  ["D-28", "Partido simulado", "Cada partido se repite 10,000 veces con las ocasiones que tuvo; tiros de una misma posesión cuentan como una ocasión."],
];

function Sec({ id, n, kicker, title, children }) {
  return (
    <section id={id} className="scroll-mt-8 border-t border-line pt-14 mt-16 first:mt-0 first:border-0 first:pt-0">
      <p className="text-xs uppercase tracking-[0.22em] text-almada num">
        {n} · {kicker}
      </p>
      <h2 className="wide text-3xl md:text-[40px] font-semibold tracking-tight leading-[1.02] mt-3 max-w-3xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function F({ title, num, unit, comp, children, rival, staff, defs }) {
  return (
    <article className="grid md:grid-cols-[180px_minmax(0,1fr)] gap-x-8 gap-y-3 py-7 border-b border-line last:border-0">
      <div>
        <p className="wide text-4xl font-semibold tracking-tight num leading-none">{num}</p>
        <p className="text-xs text-ink-2 mt-2 leading-snug">{unit}</p>
        {comp && <p className="text-xs text-ink-3 mt-1 num">{comp}</p>}
      </div>
      <div className="min-w-0">
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        <div className="text-ink-2 leading-relaxed mt-2 space-y-2">{children}</div>
        {(rival || staff) && (
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            {rival && (
              <p className="text-sm leading-snug rounded-lg bg-contra-soft/60 px-3.5 py-2.5">
                <span className="font-semibold text-contra">Si lo enfrentas: </span>
                {rival}
              </p>
            )}
            {staff && (
              <p className="text-sm leading-snug rounded-lg bg-almada-soft/70 px-3.5 py-2.5">
                <span className="font-semibold text-almada">Para su staff: </span>
                {staff}
              </p>
            )}
          </div>
        )}
        {defs && <p className="text-[11px] text-ink-3 mt-3 num">Definiciones: {defs}</p>}
      </div>
    </article>
  );
}

export default function Reporte() {
  return (
    <main className="bg-bg min-h-screen">
      {/* Portada */}
      <header className="bg-sidebar text-white relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-10 pb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-sidebar-ink/70">
            <Link href="/" className="hover:text-white">‹ Técnicos por los datos</Link>
            <span className="flex items-center gap-5">
              <Image src="/landing/isac.svg" alt="ISAC" width={86} height={24} className="h-6 w-auto" />
              <Image src="/landing/america.png" alt="Club América" width={28} height={28} className="h-7 w-7" />
            </span>
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)] mt-14">Reporte · Hackathon ISAC 2026 · Reto Club América</p>
          <h1 className="wide font-semibold tracking-tight leading-[0.94] text-[42px] md:text-[68px] mt-5 max-w-4xl">Guillermo Almada: el técnico que vive del robo.</h1>
          <p className="text-sidebar-ink/80 text-lg leading-relaxed mt-6 max-w-2xl">
            La historia de un entrenador contada con 170 partidos de Liga MX y los eventos de Hudl StatsBomb. Cada número se compara contra la liga y cada idea dice qué decisión permite tomar.
          </p>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            {[
              ["170", "partidos"],
              ["3", "equipos: Santos, Pachuca, América"],
              ["80-44-46", "ganados, empatados, perdidos"],
              ["2021–2026", "Apertura 2021 a Apertura 2026"],
            ].map(([v, l]) => (
              <div key={v}>
                <dt className="sr-only">{l}</dt>
                <dd className="wide text-2xl font-semibold num">{v}</dd>
                <p className="text-sidebar-ink/60 text-xs mt-1">{l}</p>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14">
        <nav aria-label="Índice" className="hidden lg:block">
          <ol className="sticky top-8 space-y-2 text-sm">
            {TOC.map(([id, l], i) => (
              <li key={id}>
                <a href={`#${id}`} className="flex gap-3 text-ink-2 hover:text-ink">
                  <span className="text-ink-3 num w-5">{String(i + 1).padStart(2, "0")}</span>
                  {l}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Link href="/dashboard" className="inline-block rounded-full bg-ink text-white px-4 py-2 text-xs font-medium hover:bg-almada">
                Explorar en el dashboard
              </Link>
            </li>
          </ol>
        </nav>

        <div className="min-w-0">
          <Sec id="resumen" n="01" kicker="En un minuto" title="Cinco ideas definen a Almada.">
            <p className="text-ink-2 text-lg leading-relaxed max-w-3xl">
              Su equipo recupera arriba y ataca rápido, avanza en el uno contra uno y cambia según dónde juega. Cuando la presión se afloja, el modelo se cae: es la señal que su staff tiene que vigilar.
            </p>
            <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-3 mt-8">
              {IDEAS.map((x) => (
                <div key={x.t} className="rounded-xl bg-surface border border-line p-5 flex flex-col">
                  <p className="text-xs font-semibold text-almada">{x.t}</p>
                  <p className="wide text-[34px] font-semibold tracking-tight num leading-none mt-4">{x.v}</p>
                  <p className="text-xs text-ink-2 mt-2 leading-snug">{x.u}</p>
                  <p className="text-[11px] text-ink-3 mt-1 num">{x.c}</p>
                  <p className="text-sm text-ink-2 mt-auto pt-4 leading-snug">{x.d}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-ink-3 mt-4">
              p95 = más que el 95 % de las 198 temporadas de equipo de la liga. Todas las cifras son por partido, en todos sus partidos, salvo que se diga otra cosa.
            </p>
          </Sec>

          <Sec id="ofensiva" n="02" kicker="Fase ofensiva" title="Construye largo, progresa conduciendo y tira mucho.">
            <F title="Salida larga: 6 de cada 10 pases del portero son largos" num="60 %" unit="de los pases del portero" comp="liga 47 % · p89" rival="Presionar al portero no sirve: ganar la segunda pelota en medio campo." staff="Medir la segunda pelota como dato propio del modelo." defs="D-02, D-10">
              <p>Solo 41 % de sus secuencias nacen en el tercio defensivo. No construye desde atrás: salta la primera línea y busca ganar el rebote.</p>
            </F>
            <F title="Avanza en el uno contra uno: 19 regates por partido" num="18.8" unit="regates por partido" comp="liga 14.0 · p95" rival="Doblar la marca sobre los extremos; no permitir el uno contra uno en banda." staff="Los extremos se eligen por regate, no por centro." defs="D-14">
              <p>Sus conducciones progresivas (46.7, p87) pesan más que sus pases progresivos, que están en la media. En su peor torneo, el Apertura 2024 (3-4-10), regateó más que nunca: el estilo se mantuvo aunque dejó de ganar.</p>
            </F>
            <F title="Tira mucho y desde lejos" num="49 %" unit="de sus tiros, desde fuera del área" comp="liga 43 % · p88" rival="Dejarlo tirar de fuera y cerrar el área; la calidad de sus tiros es promedio." staff="Convertir tiros lejanos en llegadas al área sube el peligro sin cambiar el estilo." defs="D-12">
              <p>15.9 tiros sin penal por partido (p88), con un xG por tiro en la media de la liga: genera volumen, no calidad.</p>
            </F>
          </Sec>

          <Sec id="defensiva" n="03" kicker="Fase defensiva y transiciones" title="Presiona en campo rival y ataca en cuanto roba.">
            <F title="Presión intensa: deja dar 11 pases antes de robar; la liga, 14" num="10.9" unit="PPDA: pases que deja dar al rival" comp="liga 14.0 · p85" rival="Salida directa; no jugar desde atrás contra su presión." staff="La presión es la base de la defensa: sin ella concede más." defs="D-05b, D-06, D-12">
              <p>Presiona a 57 m de su portería, en campo rival, con 35.6 contrapresiones por partido (p81). Concede 11.7 entradas al área (liga 14.2) y 12 tiros (liga 13.6). Matiz honesto: sus rachas de presión recuperan el balón en la media; presiona mucho, recupera como cualquiera.</p>
            </F>
            <F title="Vive del robo: 72 ataques tras recuperar el balón por partido" num="72" unit="transiciones ofensivas por partido" comp="liga 63.2 · p95" rival="No regalar pérdidas en campo propio: cada balón que roba es un ataque." staff="El modelo necesita delanteros que corran al espacio, no que esperen el balón." defs="D-03">
              <p>Es lo que más lo separa de la liga, con los tres equipos. El peligro que crea tras robar se dispara después del minuto 60: 0.84 xG por 90 (p87), más del doble que en la primera media hora.</p>
            </F>
            <figure className="mt-8 grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-6 items-start rounded-xl bg-sidebar text-white p-5 md:p-6">
              <div className="rounded-lg overflow-hidden bg-black aspect-video">
                <video src={CLIP.src} poster={CLIP.poster} controls playsInline preload="none" className="w-full h-full object-cover" />
              </div>
              <figcaption>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">El dato, en la cancha</p>
                <p className="font-semibold mt-2">{CLIP.match}</p>
                <p className="text-sm text-sidebar-ink/80 leading-relaxed mt-2">{CLIP.text}</p>
                <p className="text-sm text-sidebar-ink/80 leading-relaxed mt-2">Con el América, 13 de sus 27 goles nacen así: robo en el último tercio y tiro en menos de 10 segundos.</p>
                <p className="text-[11px] text-sidebar-ink/50 mt-3">Imágenes: Club América / TUDN. Eventos y dibujo: Hudl StatsBomb.</p>
              </figcaption>
            </figure>
          </Sec>

          <Sec id="contexto" n="04" kicker="Consistencia y contexto" title="Una identidad clara, que se afloja con el tiempo y cambia según el rival.">
            <p className="text-ink-2 text-lg leading-relaxed max-w-3xl">
              La presión es su firma y también su termómetro. Los torneos en que presionó más fueron los que ganó; cuando dejó de presionar, el peligro que concedía casi se duplicó.
            </p>
            <div className="mt-8 rounded-xl bg-surface border border-line p-5 md:p-7">
              <TournamentChart />
            </div>
            <div className="mt-8 overflow-x-auto rounded-xl border border-line bg-surface">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="text-left text-xs text-ink-3 border-b border-line">
                    <th className="font-medium px-4 py-3">Contexto</th>
                    <th className="font-medium px-4 py-3 text-right">Partidos</th>
                    <th className="font-medium px-4 py-3 text-right">PPDA</th>
                    <th className="font-medium px-4 py-3 text-right">Campo rival %</th>
                    <th className="font-medium px-4 py-3 text-right">G-E-P</th>
                    <th className="font-medium px-4 py-3">Lectura</th>
                  </tr>
                </thead>
                <tbody>
                  {SCEN.map((s) => (
                    <tr key={s.c} className="border-b border-line-2 last:border-0">
                      <td className="px-4 py-3 font-medium">{s.c}</td>
                      <td className="px-4 py-3 text-right num text-ink-2">{s.n}</td>
                      <td className="px-4 py-3 text-right num font-semibold">{s.ppda}</td>
                      <td className="px-4 py-3 text-right num">{s.tilt}</td>
                      <td className="px-4 py-3 text-right num text-ink-2">{s.r}</td>
                      <td className={`px-4 py-3 ${s.bad ? "text-contra" : "text-almada"}`}>{s.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-ink-3 mt-3">Campo rival % = field tilt, parte de los toques en el último tercio que son suyos. Cortes con pocos partidos (vuelta perdiendo el global: 2) se leen como patrón, no como ley. Definiciones D-20, D-24, D-25.</p>
            <F title="Perdiendo tiene más balón y crea menos" num="1.12" unit="xG por 90 cuando va perdiendo" comp="1.25 ganando · p54" rival="Anotar primero y cerrarse: con el balón crea apenas lo normal." staff="Falta un plan B contra bloque bajo: los centros suben (13.6 por 90) pero no se convierten." defs="D-21, D-03">
              <p>La presión no cambia con el marcador: deja dar 10 pases ganando, empatando o perdiendo. Lo que cambia es el balón: perdiendo sube a 56 % de posesión, roba menos y crea menos por minuto.</p>
            </F>
          </Sec>

          <Sec id="jugadores" n="05" kicker="Uso de jugadores" title="Un dibujo fijo, una banca que funciona y ningún intocable.">
            <F title="4-2-3-1 en 114 de 170 partidos; perdiendo pasa a 4-4-2" num="67 %" unit="de partidos arranca en 4-2-3-1" rival="Si va perdiendo después del 60, esperar dos delanteros." staff="El plan de remontada ya existe y es consistente." defs="SB, D-21">
              <p>Cambia de dibujo de verdad en 64 partidos, 33 de ellos perdiendo. El 4-4-2 aparece sobre todo en 2023 (16 de 35 partidos), el ciclo en que se aflojó la presión.</p>
            </F>
            <F title="Cambia antes cuando pierde, y el cambio funciona" num="×2.4" unit="xG en los 15 min tras su primer cambio, perdiendo" comp="0.11 → 0.26" rival="El cambio llega antes del 55': ajustar la marca a los que entran." staff="Es su mejor decisión dentro del partido: mantener el gatillo cerca del 50'." defs="D-21, SB">
              <p>Primer cambio al minuto 51.8 perdiendo, 56.5 empatando y 59.7 ganando. Perdiendo, el xG concedido baja de 0.31 a 0.19 y el dominio territorial sube de 53 a 59 %. Ganando saca a los tres de arriba para refrescar la presión, no para cerrarse.</p>
            </F>
            <F title="Rotación alta: casi 3 titulares distintos de un partido al siguiente" num="2.9" unit="cambios de titular por partido" staff="El modelo no depende de nombres sino de perfiles: velocidad, regate, agresividad. Planear la plantilla así." defs="SB">
              <p>Ningún jugador llega al 70 % de titularidades en sus 170 partidos y el núcleo cambia cada torneo.</p>
            </F>
          </Sec>

          <Sec id="balon-parado" n="06" kicker="Balón parado" title="Muchos córners, un córner corto propio y demasiados penales en contra.">
            <F title="El córner corto es su seña" num="24 %" unit="de sus córners son cortos" comp="liga 13 %" rival="Defender el corto con dos hombres." staff="Cobrar menos córners cerrados: rinden 0.029 xG contra 0.039 de la liga; los abiertos rinden 0.042." defs="D-07">
              <p>6.1 córners por partido (p91) y 9 saques de banda en zona de peligro. 1,031 córners en total, 29 goles a favor y 25 en contra. Los tiros libres al área (16 goles en 150 tiros) rinden más que los directos (6 en 130).</p>
            </F>
            <F title="Defensa a balón parado normal, penales en contra fuera de serie" num="40" unit="penales en contra en 170 partidos" comp="44 a favor" rival="Buscar el contacto dentro del área." staff="El problema no es el córner sino la falta en el área, consecuencia de la agresividad del modelo." defs="D-07">
              <p>Concede 0.45 xG de balón parado por partido (p46, la media). Cuando gana, su balón parado produce 0.75 goles por partido (p97); cuando pierde, 0.17 (p3): es lo que mejor anticipa su resultado.</p>
            </F>
          </Sec>

          <Sec id="suerte" n="07" kicker="Suerte o dominio" title="Sus puntos salen de su juego, con dos torneos que se escapan.">
            <div className="grid md:grid-cols-3 gap-3">
              <div className="rounded-xl bg-surface border border-line p-6">
                <p className="wide text-4xl font-semibold num">284</p>
                <p className="text-sm text-ink-2 mt-2">puntos sumados en 170 partidos, contra <span className="font-semibold text-ink num">270</span> merecidos: +14, 0.08 por partido. Lo normal.</p>
              </div>
              <div className="rounded-xl bg-surface border border-line p-6">
                <p className="wide text-4xl font-semibold num text-almada">+10.7</p>
                <p className="text-sm text-ink-2 mt-2">Clausura 2022 con Pachuca: más suerte que el 96 % de las temporadas de la liga.</p>
              </div>
              <div className="rounded-xl bg-surface border border-line p-6">
                <p className="wide text-4xl font-semibold num text-contra">−10.0</p>
                <p className="text-sm text-ink-2 mt-2">Apertura 2024 (3-4-10): jugó para 23 puntos y sumó 13. Más mala suerte que el 98 % de la liga.</p>
              </div>
            </div>
            <p className="text-ink-2 leading-relaxed mt-6 max-w-3xl">
              Cada partido se volvió a jugar 10,000 veces con las mismas ocasiones: en cada repetición, cada ocasión entra o no según su xG. Eso da cuántos puntos mereció. Solo 40 % de sus triunfos son de control (lo ganaba en 60 % o más de las repeticiones); 18 victorias fueron sin merecerlo y 17 derrotas, robadas. La simulación está calibrada: en toda la liga da 1.372 puntos por partido contra 1.367 reales. En el dashboard cada partido se puede volver a jugar.
            </p>
          </Sec>

          <Sec id="america" n="08" kicker="El Almada del América" title="Más dominio y más balón parado; falta la presión tras pérdida.">
            <div className="overflow-x-auto rounded-xl border border-line bg-surface">
              <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr className="text-left text-xs text-ink-3 border-b border-line">
                    <th className="font-medium px-4 py-3">Por partido</th>
                    <th className="font-medium px-4 py-3 text-right">Pachuca (139)</th>
                    <th className="font-medium px-4 py-3 text-right">América (11)</th>
                    <th className="font-medium px-4 py-3">Lectura</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["xG", "1.31", "1.54", "crea más", true],
                    ["Campo rival %", "53", "60", "domina más", true],
                    ["xG de balón parado", "0.49", "0.85", "casi el doble", true],
                    ["PPDA", "11.3", "10.8", "presiona igual", true],
                    ["Presiones tras pérdida", "36.5", "27.6", "no ha llegado", false],
                    ["Regates", "19.0", "12.9", "no ha llegado", false],
                  ].map(([k, a, b, l, ok]) => (
                    <tr key={k} className="border-b border-line-2 last:border-0">
                      <td className="px-4 py-3 font-medium">{k}</td>
                      <td className="px-4 py-3 text-right num text-ink-2">{a}</td>
                      <td className="px-4 py-3 text-right num font-semibold">{b}</td>
                      <td className={`px-4 py-3 ${ok ? "text-almada" : "text-contra"}`}>{l}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-ink-2 leading-relaxed mt-6 max-w-3xl">
              En 11 partidos va 7-3-1 con 24 puntos, pero la simulación le da 18.6: <span className="font-semibold text-ink">la tabla va 5.4 puntos adelante de su juego</span>, más que el 99 % de las temporadas de la liga. Con mejor plantilla domina más y vive más del balón parado; lo que no ha llegado es la presión tras pérdida y el uno contra uno, que eran su firma. Antes de la liguilla, es lo primero que hay que vigilar.
            </p>
          </Sec>

          <Sec id="accion" n="09" kicker="Qué hacer con esto" title="Un plan para enfrentarlo y un tablero para su staff.">
            <div className="grid xl:grid-cols-2 gap-6">
              <div className="rounded-xl border border-line bg-surface p-6">
                <h3 className="font-semibold text-contra">Plan de partido contra Almada</h3>
                <ol className="mt-4 space-y-4">
                  {RIVAL.map(([a, b], i) => (
                    <li key={a} className="grid grid-cols-[24px_minmax(0,1fr)] gap-2">
                      <span className="num text-sm font-semibold text-ink-3">{i + 1}</span>
                      <div>
                        <p className="font-medium leading-snug">{a}</p>
                        <p className="text-sm text-ink-2 leading-snug mt-1">{b}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-xl border border-line bg-surface p-6">
                <h3 className="font-semibold text-almada">Tablero del staff del América</h3>
                <p className="text-sm text-ink-2 mt-1">Seis números para revisar cada jornada. La meta sale de su propia mejor versión, no de un ideal.</p>
                <div className="mt-4 divide-y divide-line-2">
                  {KPIS.map((k) => (
                    <div key={k.k} className="py-3.5 grid grid-cols-[minmax(0,1fr)_64px_64px] gap-3 items-baseline">
                      <div className="min-w-0">
                        <p className="font-medium leading-snug">{k.k}</p>
                        <p className="text-xs text-ink-2 leading-snug mt-1">{k.ref}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-ink-3">hoy</p>
                        <p className="num font-semibold">{k.hoy}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-ink-3">meta</p>
                        <p className="num font-semibold text-almada">{k.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-ink-3 mt-2">* Histórico de sus 170 partidos; con el América todavía hay pocos partidos de ese corte.</p>
              </div>
            </div>
          </Sec>

          <Sec id="metodo" n="10" kicker="Metodología" title="Primero se define, luego se mide, y todo se compara contra la liga.">
            <div className="grid md:grid-cols-2 gap-8 text-ink-2 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <span className="font-semibold text-ink">Datos.</span> Eventos, alineaciones y estadísticas por partido de Hudl StatsBomb para toda la Liga MX con datos, Apertura 2021 a Apertura 2026: 1,807 partidos. Almada son 170 de ellos con tres equipos; el equipo se trata como un contexto más.
                </p>
                <p>
                  <span className="font-semibold text-ink">Línea base.</span> Cada métrica se compara contra la media por equipo y torneo de toda la liga (198 unidades) y se reporta como percentil. Así un número siempre dice si es mucho o poco.
                </p>
                <p>
                  <span className="font-semibold text-ink">Validación.</span> Lo que calculamos nosotros se contrastó con lo que publica StatsBomb partido a partido: xG r = 0.99, posesión 0.995, PPDA 0.95 y contrapresiones 0.92.
                </p>
                <p>
                  <span className="font-semibold text-ink">Simulación.</span> Monte Carlo con 10,000 repeticiones por partido y semilla fija. Calibrada en los 1,807 partidos: 1.372 puntos merecidos por partido contra 1.367 reales.
                </p>
                <p>
                  <span className="font-semibold text-ink">Límites.</span> Sin datos 360: la estructura defensiva se infiere de las acciones, no de las posiciones. Los umbrales propios están elegidos a mano y se reportan. Los cortes chicos muestran cuántos partidos son. Todo describe, nada prueba causa. La simulación solo ve las ocasiones que terminaron en tiro.
                </p>
              </div>
              <div>
                <p className="font-semibold text-ink">El framework, en sus términos clave</p>
                <dl className="mt-3 divide-y divide-line rounded-xl border border-line bg-surface">
                  {DEFS.map(([id, t, d]) => (
                    <div key={id} className="px-4 py-3">
                      <dt className="text-sm font-semibold text-ink">
                        <span className="num text-almada mr-2">{id}</span>
                        {t}
                      </dt>
                      <dd className="text-sm mt-1 leading-snug">{d}</dd>
                    </div>
                  ))}
                </dl>
                <p className="text-xs text-ink-3 mt-3">Son 28 definiciones en total (zonas, progresión, balón parado, marcador, momento, tabla, fase, rival). En el dashboard, cada dato enlaza a la suya.</p>
              </div>
            </div>
          </Sec>

          <div className="mt-20 rounded-2xl bg-sidebar text-white p-8 md:p-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="wide text-3xl md:text-4xl font-semibold tracking-tight">Todo esto, explorable.</p>
              <p className="text-sidebar-ink/75 mt-2 max-w-xl">El dashboard tiene a Almada y a otros 17 técnicos de la liga, con cada partido, cada contexto y cada simulación.</p>
            </div>
            <Link href="/dashboard" className="rounded-full bg-[var(--gold)] text-ink px-7 py-3.5 font-semibold hover:bg-white transition-colors">
              Entrar al dashboard
            </Link>
          </div>
          <p className="text-xs text-ink-3 mt-8 leading-relaxed">
            Proyecto participante del Hackathon ISAC 2026, reto Club América. Datos: Hudl StatsBomb. Los logos pertenecen a sus dueños y se usan solo para identificar el reto.
          </p>
        </div>
      </div>
    </main>
  );
}
