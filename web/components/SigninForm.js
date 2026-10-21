"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import FormInput from "./form/FormInput";
import FormButton from "./form/FormButton";
import FormError from "./form/FormError";
import { toast } from "react-hot-toast";

export default function SigninForm() {
  const [mode, setMode] = useState("signin"); // "signin" or "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor ingresa un correo electrónico válido");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setIsLoading(true);

    try {
      // Crear cuenta
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al crear cuenta");
        toast.error(data.error || "Error al crear cuenta");
        setIsLoading(false);
        return;
      }

      // Cuenta creada exitosamente, hacer signin automático
      toast.success(data.message || "Cuenta creada exitosamente");

      const result = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/dashboard",
      });

      if (result?.error) {
        setError("Cuenta creada pero hubo un error al iniciar sesión");
        toast.error("Por favor inicia sesión manualmente");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Hubo un error inesperado. Intenta de nuevo.");
      toast.error("Error al crear cuenta");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor ingresa un correo electrónico válido");
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/dashboard",
      });

      if (result?.error) {
        // Detectar diferentes tipos de errores
        if (result.error.includes("Google")) {
          setError("Esta cuenta usa Google para iniciar sesión. Por favor usa el botón 'Continuar con Google' arriba.");
          toast.error("Usa el botón de Google para iniciar sesión");
        } else if (result.error.includes("no tiene contraseña") || result.error.includes("Crear Cuenta")) {
          // Usuario existe pero sin password (creado por Stripe)
          setError("Esta cuenta aún no tiene contraseña. Cambia a 'Crear Cuenta' arriba para establecer tu contraseña.");
          toast.error("Cambia a 'Crear Cuenta' para establecer tu contraseña");
          // Auto-switch to signup mode
          setMode("signup");
        } else if (result.error.includes("Usuario no encontrado")) {
          setError("No existe una cuenta con este email. Por favor crea una cuenta primero.");
          toast.error("Cambia a 'Crear Cuenta' para registrarte");
          setMode("signup");
        } else {
          setError("Email o contraseña incorrectos");
          toast.error("Email o contraseña incorrectos");
        }
      } else if (result?.ok) {
        // Redirect manually on success
        window.location.href = result.url || "/dashboard";
      }
    } catch (err) {
      console.error("Signin error:", err);
      setError("Hubo un error inesperado. Intenta de nuevo.");
      toast.error("Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      await signIn("google", {
        callbackUrl: "/dashboard",
      });
    } catch (err) {
      console.error("Google signin error:", err);
      toast.error("Error al conectar con Google");
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Mode Toggle Tabs */}
      <div className="flex gap-2 p-1 bg-white/5 rounded-lg">
        <button
          onClick={() => {
            setMode("signin");
            setError("");
          }}
          className={`flex-1 py-3 px-4 rounded-md font-bold uppercase tracking-wide text-sm transition-all duration-300 ${
            mode === "signin"
              ? "bg-white text-ink"
              : "text-white/60 hover:text-white/80"
          }`}
        >
          Iniciar Sesión
        </button>
        <button
          onClick={() => {
            setMode("signup");
            setError("");
          }}
          className={`flex-1 py-3 px-4 rounded-md font-bold uppercase tracking-wide text-sm transition-all duration-300 ${
            mode === "signup"
              ? "bg-white text-ink"
              : "text-white/60 hover:text-white/80"
          }`}
        >
          Crear Cuenta
        </button>
      </div>

      {/* Google Signin */}
      <button
        onClick={handleGoogleSignIn}
        disabled={isGoogleLoading}
        className="w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isGoogleLoading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          <>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Continuar con Google</span>
          </>
        )}
      </button>

      {/* Divider */}
      <div className="relative flex items-center">
        <div className="flex-1 border-t border-white/20"></div>
        <span className="px-4 text-sm text-white/60 uppercase tracking-wider">
          O
        </span>
        <div className="flex-1 border-t border-white/20"></div>
      </div>

      {/* Signin/Signup Form */}
      <form
        onSubmit={mode === "signin" ? handleSignin : handleSignup}
        className="space-y-4"
      >
        {mode === "signup" && (
          <FormInput
            type="text"
            id="name"
            name="name"
            label="Nombre (opcional)"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
          />
        )}

        <FormInput
          type="email"
          id="email"
          name="email"
          label="Correo Electrónico"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          required
        />

        {/* Password Input con Toggle Show/Hide */}
        <div className="w-full space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-white block"
          >
            Contraseña
            <span className="text-white ml-1" aria-label="required">
              *
            </span>
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Mínimo 6 caracteres"
              required
              className="
                w-full px-4 py-3 pr-12
                bg-white/5
                border-2 border-white/20
                rounded-lg
                text-white placeholder:text-white/50
                focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none
                transition-all duration-200
              "
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200"
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? (
                // Ícono de ojo cerrado (hide)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                // Ícono de ojo abierto (show)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {error && <FormError error={error} />}

        <FormButton
          type="submit"
          variant="primary"
          isLoading={isLoading}
          fullWidth={true}
        >
          {mode === "signin" ? "Iniciar Sesión" : "Crear Cuenta"}
        </FormButton>
      </form>

      {/* Helper Text */}
      <p className="text-center text-sm text-white/60">
        {mode === "signin"
          ? "¿No tienes cuenta? Cambia a Crear Cuenta arriba"
          : "¿Ya tienes cuenta? Cambia a Iniciar Sesión arriba"}
      </p>
    </div>
  );
}
