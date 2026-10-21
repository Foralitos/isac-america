import { Archivo } from "next/font/google";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo" });

export const viewport = { themeColor: "#0f1f2e", width: "device-width", initialScale: 1 };
export const metadata = getSEOTags();

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="light" className={archivo.variable}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
