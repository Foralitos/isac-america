import Link from "next/link";
import SigninForm from "@/components/SigninForm";
import config from "@/config";

export const metadata = {
  title: `Iniciar Sesión | ${config.appName}`,
  description: `Accede a tu cuenta de ${config.appName}`,
  robots: "noindex, nofollow",
};

export default function SigninPage() {
  return (
    <main className="min-h-screen bg-sidebar flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        {/* Brand Section */}
        <div className="text-center mb-12 space-y-4">
          {/* Logo/Brand Name */}
          <Link href="/" className="inline-block group">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight transition-transform duration-300 group-hover:scale-105">
              ALMADA POR LOS DATOS
            </h1>
            <p className="text-white/60 text-sm mt-2 tracking-wide">
              Hackathon ISAC 2026 · Club América
            </p>
          </Link>

          {/* Decorative Line */}
          <div className="flex justify-center pt-2">
            <div className="w-16 h-1 bg-white rounded-full"></div>
          </div>

          {/* Tagline */}
          <p className="text-white/80 text-lg leading-relaxed max-w-sm mx-auto">
            La historia de un entrenador
            <br />
            a través de los datos.
          </p>
        </div>

        {/* Auth Form Card */}
        <div className="bg-white/5 border border-white/15 rounded-2xl p-8 shadow-2xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2">
              Iniciar Sesión
            </h2>
            <p className="text-white/60 text-sm">
              Accede a tu cuenta para continuar
            </p>
          </div>

          <SigninForm />
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-3">
          <Link
            href="/"
            className="inline-block text-white/70 hover:text-white text-sm transition-colors duration-300"
          >
            ← Volver al inicio
          </Link>

          <p className="text-white/50 text-xs">
            Al continuar, aceptas nuestros términos de servicio y política de
            privacidad
          </p>
        </div>
      </div>
    </main>
  );
}
