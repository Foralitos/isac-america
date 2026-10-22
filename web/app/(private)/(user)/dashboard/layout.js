import { redirect } from "next/navigation";
import { auth } from "@/libs/auth";
import config from "@/config";

// Candado de sesión para todo /dashboard. El picker no lleva sidebar; las pantallas por técnico lo ponen en [coach]/layout.
export default async function LayoutPrivate({ children }) {
  const session = await auth();
  if (!session) redirect(config.auth.loginUrl);
  return children;
}
