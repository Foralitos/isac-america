"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";

export default function UserMobileHeader() {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-sidebar text-white lg:hidden">
      <label htmlFor="user-drawer" className="cursor-pointer p-1.5 rounded-md hover:bg-white/10">
        <Bars3Icon className="w-6 h-6" />
      </label>
      <span className="font-semibold">Almada por los datos</span>
    </div>
  );
}
