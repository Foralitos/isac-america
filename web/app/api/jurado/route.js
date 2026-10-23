import { NextResponse } from "next/server";
import config from "@/config";

// Link de acceso para el jurado: /api/jurado?t=<JURY_TOKEN>. Sin cuenta; deja una cookie y entra a la dashboard.
export async function GET(req) {
  const token = process.env.JURY_TOKEN;
  const t = req.nextUrl.searchParams.get("t");
  if (!token || t !== token) return NextResponse.redirect(new URL(config.auth.loginUrl, req.url));

  const res = NextResponse.redirect(new URL("/dashboard", req.url));
  res.cookies.set("jurado", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}
