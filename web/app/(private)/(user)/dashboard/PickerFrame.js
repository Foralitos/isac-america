// Marco simple del picker (sin sidebar de técnico): barra arriba con el nombre de la app y cerrar sesión.
"use client";

import { signOut } from "next-auth/react";
import config from "@/config";

export default function PickerFrame({ children }) {
  return (
    <div className="min-h-screen bg-bg">
      <div className="bg-sidebar text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <p className="font-semibold tracking-tight">{config.appName}</p>
          <button onClick={() => signOut({ callbackUrl: "/" })} className="text-sm text-sidebar-ink/80 hover:text-white">
            Cerrar sesión
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 md:py-12">{children}</div>
    </div>
  );
}
