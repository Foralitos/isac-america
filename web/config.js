const config = {
  // REQUIRED
  appName: "Almada por los datos",
  appDescription:
    "La historia de Guillermo Almada a través de los datos de StatsBomb: identidad, escenarios, balón parado y cambios. Hackathon ISAC 2026 · Club América.",
  // dominio sin https:// ni slash final
  domainName: "isac-america.vercel.app",
  resend: {
    fromNoReply: `Almada por los datos <noreply@resend.dev>`,
    fromAdmin: `Fora <onboarding@resend.dev>`,
    supportEmail: "elfora.dev@gmail.com",
  },
  colors: {
    theme: "dark",
    main: "#111111",
  },
  auth: {
    loginUrl: "/signin",
    callbackUrl: "/dashboard",
  },
  // Técnico y equipo que muestra el dashboard (clave en Mongo: coach-slug:team-slug)
  coachKey: "jorge-guillermo-almada-alves:todos",
};

export default config;
