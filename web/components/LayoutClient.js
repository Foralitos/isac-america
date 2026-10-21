"use client";

import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import config from "@/config";

// Wrappers de cliente: sesión de next-auth, barra de progreso, toasts y tooltips.
const ClientLayout = ({ children }) => {
  return (
    <SessionProvider>
      <NextTopLoader color={config.colors.main} showSpinner={false} />
      {children}
      <Toaster toastOptions={{ duration: 3000 }} />
      <Tooltip id="tooltip" className="z-[60] !opacity-100 max-w-sm shadow-lg" />
    </SessionProvider>
  );
};

export default ClientLayout;
