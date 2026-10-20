# Framework analítico — Almada / Pachuca

> Se escribe antes de calcular. Toda métrica y gráfica cita la definición que usa (D-xx).
> Si una definición cambia, cambia aquí y se recalcula todo. Nada se define en el código sin estar aquí.

## 0. Alcance y límites

- Equipo y técnico: Pachuca con Guillermo Almada, ene 2022 → may 2025 (139 partidos). Capítulo opcional: América 2026/27.
- Fuente: eventos StatsBomb v11, alineaciones v5, Team Match Stats v4. Sin 360.
- Línea base: toda la Liga MX 2021/22 → 2025/26 (percentiles por partido).
- Límites: (pendiente)

## 1. Unidades de juego

| ID | Término | Definición | Umbral / supuesto |
|---|---|---|---|
| D-01 | Posesión | | |
| D-02 | Secuencia ofensiva | | |
| D-03 | Transición ofensiva | | |
| D-04 | Transición defensiva | | |
| D-05 | Fase de presión | | |
| D-06 | Contrapresión | | |
| D-07 | Balón parado (tipos) | | |

## 2. Espacio

| ID | Término | Definición |
|---|---|---|
| D-10 | Tercios | |
| D-11 | Carriles | |
| D-12 | Zona de peligro / área | |
| D-13 | Altura de presión | |

## 3. Contexto (escenarios)

| ID | Término | Definición |
|---|---|---|
| D-20 | Localía | |
| D-21 | Marcador en vivo | ganando / empate / perdiendo, por minuto |
| D-22 | Momento del partido | 0-30 / 30-60 / 60-90 (+ tiempo añadido) |
| D-23 | Situación en la tabla | antes del partido: arranque (J1-4) / top 6 asegurado / en top 6 peleando / fuera, alcanzable / pelea play-in / sin nada en juego. Formato: 2021-22 y 2022-23 top 4 + repechaje 5-12; desde Ap 2023 top 6 + play-in 7-10 |
| D-24 | Fase | regular / reclasificación o play-in / liguilla (cuartos, semis, final; ida vs vuelta; marcador global) |
| D-25 | Rival | top 6 de ese torneo vs resto; (opcional) estilo del rival |
| D-26 | Temporada | torneo (Apertura / Clausura) y año |

## 4. Métricas por bloque

| ID | Bloque | Métricas (existentes) | Métricas propias |
|---|---|---|---|
| M-1 | Ofensiva | xG, OBV, pases progresivos, directness, field tilt | |
| M-2 | Defensiva y presión | PPDA, presiones en campo rival, contrapresiones, xG en contra | |
| M-3 | Transiciones | xG en transición a favor / en contra, tiempo en transición | |
| M-4 | Balón parado | xG por córner / tiro libre / saque de banda, zonas de remate, goles en contra por tipo | |
| M-5 | Jugadores y cambios | minuto del primer cambio, tipo, cambios de formación (Tactical Shift), impacto antes/después | |

## 5. Coherencia

- Una sola función por definición en `src/isac/framework/`; los módulos de `metrics/` solo consumen esas funciones.
- Cada JSON exportado lleva `definitions: [D-xx, ...]`.
