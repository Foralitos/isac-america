# isac-america

Reto "La historia de un entrenador a través de los datos" del hackathon ISAC 2026 (ITAM + Club América).
Técnico: **Guillermo Almada**, todos sus partidos en la Liga MX: Santos (Ap 2021, 20), Pachuca (2022–2025, 139) y América (Ap 2026, 11). El equipo es un escenario más.
Datos: API de Hudl StatsBomb, Liga MX completa (1,807 partidos). Uso exclusivo para la competencia, no se publican.

Entrega: jueves 22 de octubre de 2026. Entregables: reporte HTML (dashboard Next + HTML estático de respaldo) y video de 5 min.

## Flujo

```
yarn download   (TS)      data/raw/          JSON crudo de la API (eventos en .json.gz)
isac build      (Python)  data/processed/    tablas planas parquet: partidos, eventos, stats, contexto
isac metrics    (Python)  data/processed/    métricas por bloque x escenario
isac export     (Python)  data/out/          JSON por celda, solo agregados
isac publish    (Python)  MongoDB Atlas      sube data/out a la base isac_america (lo lee web/)
web/            (Next)    dashboard          (pendiente)
```

## Estructura

```
framework/FRAMEWORK.md   definiciones numeradas (D-xx) que todo el análisis cita. Se escribe ANTES de calcular.
scripts/download.ts      descargador de la API (reanudable)
src/isac/
  config.py              rutas, IDs de competencia/temporadas, técnico y equipo objetivo
  cli.py                 `isac build | metrics | export`
  io/                    lectores de data/raw: matches, lineups, events (gz), team/player stats
  context/               contexto por partido: tabla antes del partido y situación (stakes), fase,
                         localía, rival, marcador en vivo por minuto
  framework/             implementación de las definiciones D-xx: posesión, secuencia ofensiva,
                         transición, fase de presión, zonas
  metrics/               un módulo por bloque: offense, defense, transitions, set_pieces, players
  export/                agrega por escenario x bloque y escribe data/out/*.json
analysis/FINDINGS.md     hallazgos redactados (cifra, definición, decisión); los parsea `isac export` → findings.json
notebooks/               exploración (no se importa desde src)
tests/                   smoke tests de definiciones y contexto
data/                    ignorado por git (ver data/README.md)
```

## Escenarios (filas de la matriz)

localía · marcador en vivo · momento del partido · situación en la tabla antes del partido ·
fase (regular / play-in / liguilla, ida-vuelta y global) · rival (top 6 vs resto) · temporada.

## Bloques (columnas)

ofensiva · defensiva y presión · transiciones · balón parado · jugadores y cambios.

## Estado (2026-10-20)

Pipeline completo y validado contra StatsBomb (`data/processed/metrics/validation.csv`). `make all` tarda ~3 min. Pendiente: `web/` (Next), `report.html`, video.

## Setup

```
cp .env.example .env     # credenciales StatsBomb (correo de ISAC del 13-oct)
make setup
make download            # ~1.6 GB, ~30 min
make all
```
