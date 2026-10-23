import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/libs/auth";
import config from "@/config";

// Candado de sesión para todo /dashboard. El picker no lleva sidebar; las pantallas por técnico lo ponen en [coach]/layout.
// El jurado entra sin cuenta con la cookie que deja /api/jurado.
export default async function LayoutPrivate({ children }) {
  const token = process.env.JURY_TOKEN;
  const jurado = token && (await cookies()).get("jurado")?.value === token;
  if (!jurado && !(await auth())) redirect(config.auth.loginUrl);
  return children;
}
