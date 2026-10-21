import { Fragment } from "react";

// Markdown mínimo de FRAMEWORK.md a React: **negrita**, `campo` y flechas. Sin librería.
// Los nombres de campo salen como chips .field (misma fuente, fondo suave), nunca como código.
export default function inlineMd(text) {
  if (!text) return null;
  const src = String(text).replace(/\s*→\s*/g, " pasa a ").replace(/\s*⇔\s*/g, ", es decir ");
  const parts = src.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) return <strong key={i} className="font-semibold text-ink">{p.slice(2, -2)}</strong>;
    if (p.startsWith("`") && p.endsWith("`")) return <span key={i} className="field">{p.slice(1, -1).replace(/_/g, "_​")}</span>;
    return <Fragment key={i}>{p}</Fragment>;
  });
}
