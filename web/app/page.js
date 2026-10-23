import Image from "next/image";
import Link from "next/link";
import PlayBoard from "@/components/landing/PlayBoard";
import { CLIPS } from "@/libs/clips";

const CLIP = CLIPS["jorge-guillermo-almada-alves"][0];

const MODULES = [
  { n: "01", t: "Identidad", d: "Cómo ataca, cómo presiona y qué tan arriba roba, comparado contra 198 temporadas de equipo de la Liga MX." },
  { n: "02", t: "Escenarios", d: "Qué cambia según la localía, el marcador, el minuto, la tabla, la fase, el rival y el torneo." },
  { n: "03", t: "Balón parado", d: "Córners y tiros libres: a qué zona los manda y cuánto peligro generan." },
  { n: "04", t: "Jugadores y cambios", d: "En qué minuto mueve la banca, a qué formación pasa y qué pasa con el xG después." },
  { n: "05", t: "Partidos", d: "Cada partido con su marcador, su xG y su contexto, uno por uno." },
  { n: "06", t: "Suerte o dominio", d: "Cada partido se vuelve a jugar 10,000 veces con las mismas ocasiones. ¿Ganó jugando mejor o tuvo suerte?" },
  { n: "07", t: "Rivales", d: "Contra quién le va bien, contra quién no y qué le cambia el rival a su plan." },
];

const NUMBERS = [
  { v: "1,807", l: "partidos de Liga MX con eventos de Hudl StatsBomb" },
  { v: "18", l: "técnicos con historia completa" },
  { v: "28", l: "definiciones escritas antes de medir" },
  { v: "10,000", l: "repeticiones de cada partido" },
];

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold tracking-tight wide text-[15px]">
          Técnicos por los datos
        </Link>
        <nav className="flex items-center gap-7 text-sm text-sidebar-ink/75">
          <a href="#reto" className="hidden md:inline hover:text-white">El reto</a>
          <a href="#dentro" className="hidden md:inline hover:text-white">Qué hay dentro</a>
          <a href="#jugada" className="hidden md:inline hover:text-white">La jugada</a>
          <a href="#metodo" className="hidden md:inline hover:text-white">Método</a>
          <Link href="/reporte" className="hidden md:inline hover:text-white">Reporte</Link>
          <Link href="/dashboard" className="rounded-full bg-white text-ink px-5 py-2 font-medium hover:bg-[var(--gold)] transition-colors">
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-sidebar text-white">
      {/* Malla de pizarra */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }}
      />
      <div aria-hidden className="absolute -z-10 -right-40 top-10 w-[720px] h-[720px] rounded-full bg-almada/25 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20 lg:pt-36 lg:pb-28 grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
        <div>
          <p className="rise text-xs uppercase tracking-[0.22em] text-[var(--gold)]" style={{ animationDelay: "0.05s" }}>
            Hackathon ISAC 2026 · Reto Club América
          </p>
          <h1 className="rise wide font-semibold tracking-tight leading-[0.92] text-[44px] sm:text-6xl xl:text-[78px] mt-6" style={{ animationDelay: "0.15s" }}>
            La historia de un técnico, contada por sus partidos.
          </h1>
          <p className="rise text-sidebar-ink/80 text-lg leading-relaxed mt-7 max-w-xl" style={{ animationDelay: "0.3s" }}>
            Leemos a un entrenador de la Liga MX con los eventos de Hudl StatsBomb: cómo ataca, cómo presiona, qué cambia cuando va perdiendo y si sus puntos salen de su juego o de la suerte. Cada número dice cómo se midió.
          </p>
          <div className="rise flex flex-wrap items-center gap-4 mt-9" style={{ animationDelay: "0.45s" }}>
            <Link href="/dashboard" className="rounded-full bg-[var(--gold)] text-ink px-7 py-3.5 font-semibold hover:bg-white transition-colors">
              Entrar al dashboard
            </Link>
            <Link href="/reporte" className="rounded-full border border-white/25 px-7 py-3.5 font-medium text-white hover:border-white transition-colors">
              Leer el reporte
            </Link>
          </div>
        </div>

        <div className="relative rise" style={{ animationDelay: "0.25s" }}>
          <div className="relative mx-auto max-w-[500px] rounded-2xl border border-white/12 bg-white/[0.03] p-5 md:p-7 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)]">
            <PlayBoard />
          </div>

          {/* Marcador, a la Sport Metrics */}
          <div className="board-fade absolute -top-5 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-left-6 flex items-center gap-2.5 rounded-lg bg-white px-3 py-2 text-ink shadow-[0_10px_30px_-8px_rgb(0_0_0/0.5)]" style={{ animationDelay: "0.6s" }}>
            <Image src="/landing/america.png" alt="" width={22} height={22} />
            <span className="text-sm">América</span>
            <span className="rounded-md bg-line-2 px-2 py-0.5 text-sm font-semibold num">2</span>
            <span className="rounded-md bg-almada px-2.5 py-0.5 text-sm font-semibold text-white num">73:42</span>
            <span className="rounded-md bg-line-2 px-2 py-0.5 text-sm font-semibold num">2</span>
            <span className="text-sm">Chivas</span>
          </div>

          {/* Tarjeta del dato */}
          <div className="board-fade absolute -bottom-8 right-2 lg:-right-8 w-[230px] rounded-xl bg-white text-ink p-4 shadow-[0_18px_40px_-12px_rgb(0_0_0/0.55)]" style={{ animationDelay: "3.6s" }}>
            <p className="text-[11px] uppercase tracking-[0.14em] text-ink-3">Tiro de Borja</p>
            <p className="wide text-3xl font-semibold mt-1 num">
              xG 0.85 <span className="text-base font-medium text-ink-2">· gol</span>
            </p>
            <p className="text-xs text-ink-2 mt-1.5 leading-snug">Del robo al gol: 4 segundos y 2 pases.</p>
          </div>
        </div>
      </div>

      {/* Tira de logos */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-wrap items-center gap-x-12 gap-y-4 text-xs text-sidebar-ink/60">
          <span className="flex items-center gap-3">
            Hackathon
            <Image src="/landing/isac.svg" alt="ISAC, ITAM Sports Analytics Conference" width={106} height={30} className="h-7 w-auto" />
          </span>
          <span className="flex items-center gap-3">
            Reto
            <Image src="/landing/america.png" alt="Club América" width={30} height={30} className="h-8 w-8" />
            <span className="text-white/85 text-sm">Club América</span>
          </span>
          <span className="flex items-center gap-3">
            Datos
            <Image src="/landing/hudl-statsbomb.png" alt="Hudl StatsBomb" width={150} height={23} className="h-5 w-auto" />
          </span>
        </div>
      </div>
    </section>
  );
}

function Reto() {
  return (
    <section id="reto" className="scroll-mt-10 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-almada">El reto</p>
          <h2 className="wide text-4xl md:text-5xl font-semibold tracking-tight leading-[0.98] mt-4">Un técnico no es un promedio.</h2>
        </div>
        <div className="text-ink-2 text-lg leading-relaxed space-y-5">
          <p>
            Club América pidió contar <span className="text-ink font-medium">la historia de un entrenador a través de los datos</span>. No un ranking: el retrato de cómo juegan sus equipos, que un staff pueda leer en minutos y usar para preparar un partido.
          </p>
          <p>
            Por eso cada técnico se mide contra la liga y no en el vacío, se parte por contexto (marcador, minuto, localía, rival), y cada hallazgo se escribe como lo diría un cuerpo técnico, con el número que lo respalda al lado.
          </p>
        </div>
      </div>
    </section>
  );
}

function Dentro() {
  return (
    <section id="dentro" className="scroll-mt-10 bg-surface border-y border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-almada">Qué hay dentro</p>
            <h2 className="wide text-4xl md:text-5xl font-semibold tracking-tight leading-[0.98] mt-4 max-w-2xl">Siete pantallas por técnico.</h2>
          </div>
          <p className="text-ink-2 max-w-sm">Eliges al técnico y el dashboard se llena con sus partidos, en cualquier equipo que haya dirigido.</p>
        </div>
        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
          {MODULES.map((m) => (
            <li key={m.n} className="group border-r border-b border-line p-7 hover:bg-almada-soft/50 transition-colors">
              <span className="wide text-sm font-semibold text-ink-3 num group-hover:text-almada transition-colors">{m.n}</span>
              <h3 className="text-xl font-semibold mt-6">{m.t}</h3>
              <p className="text-sm text-ink-2 leading-relaxed mt-2">{m.d}</p>
            </li>
          ))}
          <li className="border-r border-b border-line p-7 bg-sidebar text-white flex flex-col justify-between">
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">Y en cada dato</span>
            <p className="text-base leading-relaxed mt-6">Una ficha con su definición: qué cuenta, qué no y desde dónde.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Jugada() {
  return (
    <section id="jugada" className="scroll-mt-10 bg-sidebar text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">La jugada que comprueba el dato</p>
          <h2 className="wide text-4xl md:text-5xl font-semibold tracking-tight leading-[0.98] mt-4">El América de Almada vive del robo.</h2>
          <p className="text-sidebar-ink/80 text-lg leading-relaxed mt-6">
            13 de sus 27 goles nacen de un robo en el último tercio con tiro en menos de 10 segundos. Genera 0.86 de xG por partido a la contra, contra 0.51 de la liga: más que el 97 % de los equipos.
          </p>
          <p className="text-sidebar-ink/60 leading-relaxed mt-4">
            El dato vive en el dashboard. El video es un ejemplo: el 2-2 del Clásico, minuto 73.
          </p>
        </div>
        <figure>
          <div className="rounded-xl overflow-hidden bg-black aspect-video ring-1 ring-white/10 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.7)]">
            <video src={CLIP.src} poster={CLIP.poster} controls playsInline preload="none" className="w-full h-full object-cover" />
          </div>
          <figcaption className="text-xs text-sidebar-ink/50 mt-3">{CLIP.match}. Imágenes: Club América / TUDN. Eventos: Hudl StatsBomb.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Metodo() {
  return (
    <section id="metodo" className="scroll-mt-10 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-almada">Método</p>
        <h2 className="wide text-4xl md:text-5xl font-semibold tracking-tight leading-[0.98] mt-4 max-w-3xl">Primero se define, luego se mide.</h2>
        <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-xl overflow-hidden">
          {NUMBERS.map((x) => (
            <div key={x.v} className="bg-surface p-7">
              <dt className="sr-only">{x.l}</dt>
              <dd className="wide text-4xl md:text-5xl font-semibold tracking-tight num">{x.v}</dd>
              <p className="text-sm text-ink-2 mt-3 leading-snug">{x.l}</p>
            </div>
          ))}
        </dl>
        <div className="mt-12 grid md:grid-cols-3 gap-10 text-ink-2 leading-relaxed">
          <p>
            <span className="block text-ink font-semibold mb-2">Siempre contra la liga.</span>
            Cada métrica trae su percentil frente a las 198 temporadas de equipo. Un número solo no dice si es mucho o poco.
          </p>
          <p>
            <span className="block text-ink font-semibold mb-2">La simulación está calibrada.</span>
            En los 1,807 partidos los puntos merecidos dan 1.372 por partido y los reales 1.367. Por eso se le puede creer a «ganó sin merecerlo».
          </p>
          <p>
            <span className="block text-ink font-semibold mb-2">Solo resultados.</span>
            El análisis corre en local sobre los eventos; la plataforma solo guarda los agregados, como pide la licencia de los datos.
          </p>
        </div>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="bg-sidebar text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 flex flex-wrap items-end justify-between gap-10">
        <h2 className="wide text-5xl md:text-7xl font-semibold tracking-tight leading-[0.92] max-w-3xl">Elige un técnico.</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/reporte" className="rounded-full border border-white/25 px-8 py-4 text-lg font-medium hover:border-white transition-colors">
            Leer el reporte
          </Link>
          <Link href="/dashboard" className="rounded-full bg-[var(--gold)] text-ink px-8 py-4 text-lg font-semibold hover:bg-white transition-colors">
            Entrar al dashboard
          </Link>
        </div>
      </div>
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 text-xs text-sidebar-ink/50 leading-relaxed">
          Proyecto participante del Hackathon ISAC 2026, reto Club América. Datos de eventos: Hudl StatsBomb. Los logos pertenecen a sus dueños y se usan solo para identificar el reto.
        </div>
      </footer>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Reto />
      <Dentro />
      <Jugada />
      <Metodo />
      <Cierre />
    </main>
  );
}
