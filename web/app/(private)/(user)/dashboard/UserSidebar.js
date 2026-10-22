"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { NAV, coachShort, coachYears, listTeams } from "@/libs/coach";

export default function UserSidebar({ coach }) {
  const pathname = usePathname();
  const nav = NAV(coach.key);
  return (
    <div className="drawer-side z-40">
      <label htmlFor="user-drawer" className="drawer-overlay" />
      <aside className="w-64 min-h-screen bg-sidebar text-sidebar-ink flex flex-col">
        <div className="px-6 pt-7 pb-6 border-b border-white/10">
          <Link href={`/dashboard/${coach.key}`} className="block">
            <p className="text-white font-semibold text-lg leading-tight tracking-tight">{coachShort(coach)} por los datos</p>
            <p className="text-sidebar-ink/70 text-xs mt-1">
              {listTeams((coach.teams ?? []).map((t) => t.team))}, {coachYears(coach)}
            </p>
          </Link>
          <Link href="/dashboard" className="inline-block mt-3 text-xs text-sidebar-ink/70 hover:text-white underline underline-offset-2">
            Cambiar de técnico
          </Link>
        </div>
        <nav className="flex-1 px-3 py-4">
          <ul className="space-y-0.5">
            {nav.map((item) => {
              const active = item.href === `/dashboard/${coach.key}` ? pathname === item.href : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-sm transition-colors ${active ? "bg-white/10 text-white font-medium" : "text-sidebar-ink/80 hover:bg-white/5 hover:text-white"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="px-6 py-4 border-t border-white/10 text-xs text-sidebar-ink/60 space-y-2">
          <Link
            href={`/dashboard/${coach.key}/metodologia`}
            className={`block underline underline-offset-2 ${pathname.startsWith(`/dashboard/${coach.key}/metodologia`) ? "text-white" : "text-sidebar-ink/80 hover:text-white"}`}
          >
            Cómo se midió
          </Link>
          <p>Datos Hudl StatsBomb, uso exclusivo para ISAC 2026.</p>
          <button onClick={() => signOut({ callbackUrl: "/" })} className="text-sidebar-ink/80 hover:text-white">
            Cerrar sesión
          </button>
        </div>
      </aside>
    </div>
  );
}
