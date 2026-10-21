"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { NAV } from "@/libs/format";

export default function UserSidebar() {
  const pathname = usePathname();
  return (
    <div className="drawer-side z-40">
      <label htmlFor="user-drawer" className="drawer-overlay" />
      <aside className="w-64 min-h-screen bg-sidebar text-sidebar-ink flex flex-col">
        <div className="px-6 pt-7 pb-6 border-b border-white/10">
          <Link href="/dashboard" className="block">
            <p className="text-white font-semibold text-lg leading-tight tracking-tight">Almada por los datos</p>
            <p className="text-sidebar-ink/70 text-xs mt-1">Santos, Pachuca y América, 2021 a 2026</p>
          </Link>
        </div>
        <nav className="flex-1 px-3 py-4">
          <ul className="space-y-0.5">
            {NAV.map((item) => {
              const active = item.href === "/dashboard" ? pathname === item.href : pathname.startsWith(item.href);
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
          <p>Datos Hudl StatsBomb, uso exclusivo para ISAC 2026.</p>
          <button onClick={() => signOut({ callbackUrl: "/" })} className="text-sidebar-ink/80 hover:text-white">
            Cerrar sesión
          </button>
        </div>
      </aside>
    </div>
  );
}
