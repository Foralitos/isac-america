const config = {
  // REQUIRED
  appName: "Técnicos por los datos",
  appDescription:
    "La historia de un técnico a través de los datos de StatsBomb: identidad, escenarios, balón parado y cambios. Hackathon ISAC 2026, Club América.",
  // dominio sin https:// ni slash final
  domainName: "isac-america.vercel.app",
  resend: {
    fromNoReply: `Técnicos por los datos <noreply@resend.dev>`,
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
};

export default config;
