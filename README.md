# isac-america

Reto "La historia de un entrenador a través de los datos" del hackathon ISAC 2026 (ITAM + Club América).
Base multi-técnico: la liga se procesa una vez (`build`, `metrics`) y cada técnico se exporta y publica por separado con su clave `slug(nombre completo)`; el equipo es un escenario más. Hoy: Almada (170 partidos) y el Turco Mohamed (102); mañana los que quieras (`isac coaches`).
Datos: API de Hudl StatsBomb, Liga MX completa (1,807 partidos). Uso exclusivo para la competencia, no se publican.

Entrega: jueves 22 de octubre de 2026. Entregables: reporte HTML (dashboard Next + HTML estático de respaldo) y video de 5 min.

## Flujo

```
yarn download   (TS)      data/raw/          JSON crudo de la API (eventos en .json.gz)
isac build      (Python)  data/processed/    tablas planas parquet: partidos, eventos, stats, contexto
isac metrics    (Python)  data/processed/    métricas por bloque x escenario
isac export     (Python)  data/out/<coach>/  JSON por celda, solo agregados; data/out/global/ definiciones y liga
isac publish    (Python)  MongoDB Atlas      sube un técnico (--coach) o todos (--all) + globales; registro en `coaches`
web/            (Next)    dashboard          (pendiente)
```

## Estructura

```
framework/FRAMEWORK.md   definiciones numeradas (D-xx) que todo el análisis cita. Se escribe ANTES de calcular.
scripts/download.ts      descargador de la API (reanudable)
src/isac/
  config.py              rutas, IDs de competencia/temporadas, técnico y equipo objetivo
  cli.py                 `isac build | metrics | coaches | export --coach X | publish --coach X`
  io/                    lectores de data/raw: matches, lineups, events (gz), team/player stats
  context/               contexto por partido: tabla antes del partido y situación (stakes), fase,
                         localía, rival, marcador en vivo por minuto
  framework/             implementación de las definiciones D-xx: posesión, secuencia ofensiva,
                         transición, fase de presión, zonas
  metrics/               un módulo por bloque: offense, defense, transitions, set_pieces, players
  export/                agrega por escenario x bloque y escribe data/out/*.json
analysis/findings/<coach_key>.md  hallazgos redactados por técnico (cifra, kpi, definición, decisión); si falta, el técnico se publica sin hallazgos
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

## Esquema multi-técnico (Mongo)

- `coaches`: un doc por técnico publicado (`_id` = clave, nombre corto, equipos, récord, periodo). El picker del dashboard solo lee esto.
- `meta`, `profile`, `scenarios`, `set_pieces`, `players`, `matches`, `findings`: por técnico, `key` = clave y `_id` = `clave:nombre`. Capítulos por equipo: `clave:equipo:profile`.
- `definitions` y `league`: globales (`key` = "global"); todos los técnicos se miden contra la misma línea base.
- Cada partido guarda `opp_coach` y `opp_coach_key`: la relación entre técnicos ya está sembrada para perfiles de rival y comparaciones.
- Web: `/dashboard` elige técnico; `/dashboard/<clave>/...` son las pantallas. Nombre corto en `config.COACH_SHORT`.
