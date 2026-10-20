# isac-america

Reto "La historia de un entrenador a través de los datos" del hackathon ISAC 2026 (ITAM + Club América).
Técnico: **Guillermo Almada** (Pachuca ene 2022 → may 2025, 139 partidos; América 2026/27).
Datos: API de Hudl StatsBomb, Liga MX completa (1,807 partidos). Uso exclusivo para la competencia, no se publican.

Entrega: jueves 22 de octubre de 2026. Entregables: reporte HTML (dashboard Next + HTML estático de respaldo) y video de 5 min.

## Flujo

```
yarn download   (TS)      data/raw/          JSON crudo de la API (eventos en .json.gz)
isac build      (Python)  data/processed/    tablas planas parquet: partidos, eventos, stats, contexto
isac metrics    (Python)  data/processed/    métricas por bloque x escenario
isac export     (Python)  data/out/          JSON por celda, solo agregados, lo lee web/
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
notebooks/               exploración (no se importa desde src)
tests/                   smoke tests de definiciones y contexto
data/                    ignorado por git (ver data/README.md)
```

## Escenarios (filas de la matriz)

localía · marcador en vivo · momento del partido · situación en la tabla antes del partido ·
fase (regular / play-in / liguilla, ida-vuelta y global) · rival (top 6 vs resto) · temporada.

## Bloques (columnas)

ofensiva · defensiva y presión · transiciones · balón parado · jugadores y cambios.

## Setup

```
cp .env.example .env     # credenciales StatsBomb (correo de ISAC del 13-oct)
make setup
make download            # ~1.6 GB, ~30 min
make all
```
