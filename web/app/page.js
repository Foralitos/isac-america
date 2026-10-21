import Link from "next/link";
import config from "@/config";

export default function Home() {
  return (
    <main className="min-h-screen bg-sidebar text-white flex items-center">
      <div className="max-w-5xl mx-auto px-8 py-20 grid md:grid-cols-[1.2fr_1fr] gap-12 items-end">
        <div>
          <p className="text-sidebar-ink/70 text-sm">Hackathon ISAC 2026, reto Club América</p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] mt-4">Almada por los datos</h1>
          <p className="text-sidebar-ink/80 text-lg mt-6 max-w-xl leading-relaxed">
            170 partidos de Guillermo Almada en la Liga MX, con Santos, Pachuca y América, leídos con eventos de StatsBomb: cómo ataca, cómo presiona, qué cambia cuando pierde, cuando va de visita o cuando se juega la liguilla.
          </p>
          <Link href="/signin" className="inline-block mt-8 bg-white text-ink px-6 py-3 rounded-md font-medium hover:bg-sidebar-ink">
            Entrar al dashboard
          </Link>
        </div>
        <ul className="text-sidebar-ink/80 text-sm space-y-3 border-l border-white/15 pl-6">
          <li>Identidad contra 198 temporadas de la Liga MX</li>
          <li>Diez escenarios: equipo, localía, marcador, momento, tabla, fase, ida y vuelta, rival, torneo, resultado</li>
          <li>Balón parado con mapas de zona</li>
          <li>Cambios, formaciones y su efecto</li>
          <li>Definiciones explícitas antes de medir</li>
        </ul>
      </div>
    </main>
  );
}
