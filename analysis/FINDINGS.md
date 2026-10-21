# Hallazgos — Guillermo Almada en la Liga MX (Apertura 2021 → Apertura 2026, 170 partidos)

Cifras de `data/out/` (export 2026-10-20). Todos los partidos de Almada con datos: Santos Laguna (Apertura 2021, 20), Pachuca (Clausura 2022 → Clausura 2025, 139) y América (Apertura 2026, 11). Récord 80-44-46. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Vive del robo: 72 ataques tras recuperar el balón por partido, de los más altos de la liga
- bloque: M-3
- metrica: transitions
- cifra: "72.0 transiciones ofensivas vs 63.2 de liga (p95); 4.9 tiros en transición por partido; conversión 7 %"
- kpi: "72.0 | 63.2 | ataques tras robo por partido | 95 | Ataques que arrancan al robar el balón, por partido | neutro"
- definiciones: D-03
- decision: "Rival: no regalar pérdidas en campo propio; cada balón que roba su equipo es un ataque. Staff: el modelo necesita delanteros que corran al espacio, no que esperen el balón"
Es lo que más lo separa de la liga, con los tres equipos. Sus ataques son muchos y cortos (88 por partido, de los más altos de la liga) y el peligro que crea tras robar se dispara después del minuto 60: más del doble que en la primera media hora.

### Equipo de uno contra uno: 19 regates por partido, más que el 95 % de la liga
- bloque: M-1
- metrica: dribbles
- cifra: "18.8 regates vs 14.0 (p95); 46.7 conducciones progresivas vs 39.0 (p87); 53 % completados; con Santos 20.8, con Pachuca 19.0, con América 12.9"
- kpi: "18.8 | 14.0 | regates por partido | 95 | Regates intentados por partido | neutro"
- definiciones: D-14
- decision: "Rival: duplicar marca sobre los extremos y no permitir el uno contra uno en banda. Staff: los extremos se eligen por regate, no por centro"
Avanza más conduciendo que pasando: sus conducciones hacia adelante están entre las más altas de la liga y sus pases hacia adelante apenas en la media. En el Apertura 2024, su peor torneo (3 ganados, 4 empatados, 10 perdidos), regateó más que nunca: el uno contra uno se mantuvo aunque dejó de ganar. Con el América el regate cae a 13 por partido: es lo que menos ha viajado.

### Tira mucho y desde lejos: 16 tiros por partido, la mitad desde fuera del área
- bloque: M-1
- metrica: shots_outside_box_pct
- cifra: "15.9 tiros sin penal (p88); 49 % desde fuera del área vs 43 % (p88); xG por tiro en la media de la liga"
- kpi: "49 % | 43 % | de sus tiros | 88 | Tiros desde fuera del área | neutro"
- definiciones: D-12
- decision: "Rival: dejarlo tirar de fuera y cerrar el área; la calidad de sus tiros no es mejor que el promedio. Staff: convertir tiros lejanos en llegadas al área (ya llega mucho) sube el peligro sin cambiar el estilo"

### Presión intensa y efectiva: deja dar 11 pases antes de robar, la liga deja 14
- bloque: M-2
- metrica: ppda_own
- cifra: "PPDA propio 10.9 (p85 bueno); 35.6 contrapresiones (p81); concede 11.7 entradas al área vs 14.2 (p81) y 12.0 tiros vs 13.6 (p75)"
- kpi: "10.9 | 14.0 | pases que deja dar al rival antes de robar | 85 | Intensidad de presión: menos pases es más intensa | favor"
- definiciones: D-05b, D-06, D-12
- decision: "Rival: salida directa, no jugar desde atrás contra su presión. Staff: la presión es la base de la defensa; sin ella concede más (ver torneos y rival de arriba)"
Presiona a 57 metros de su portería, en campo rival. Concede pocos tiros, pero sus rachas de presión roban el balón apenas lo normal: presiona mucho, recupera como cualquiera. Con Santos presionó más que en cualquier torneo con Pachuca: dejaba dar 9 pases, de los más intensos de la liga.

### Salida larga: 6 de cada 10 pases del portero son largos
- bloque: M-1
- metrica: gk_long_pct
- cifra: "60 % vs 47 % de liga (p89); solo 41 % de las secuencias nacen en tercio defensivo"
- kpi: "60 % | 47 % | de los pases del portero | 89 | Salida larga del portero | neutro"
- definiciones: D-02, D-10
- decision: "Rival: presionar al portero no sirve, él juega largo; ganar la segunda pelota en medio campo. Staff: medir la segunda pelota como dato propio del modelo"

### Partidos rotos: 6 córners, 9 saques de banda cerca del área y 84 penales en 170 partidos
- bloque: M-4
- metrica: corners
- cifra: "córners 6.1 (p91), saques en zona de peligro 9 por partido; 44 penales a favor y 40 en contra"
- kpi: "6.1 | 4.9 | córners por partido | 91 | Córners a favor por partido | neutro"
- definiciones: D-07
- decision: "Rival: el partido se va a cortar; trabajar el balón parado defensivo. Staff: con tantos córners, mejorar un poco cada cobro vale medio gol por torneo"

## Consistencia y variabilidad (D-23, D-24, D-26)

### La presión se fue aflojando torneo a torneo: de 9 pases a 13 antes de robar
- bloque: M-2
- escenario: torneo
- metrica: ppda_own
- cifra: "Santos, Apertura 2021: PPDA 8.8 (p1). Pachuca: Clausura 2022 9.3 (p3) y Apertura 2022 9.8 (p4, campeón) → Apertura 2023 13.0 (p42) → Clausura 2025 12.9 (p41). América, Apertura 2026: 10.8 (p13). xG concedido 0.78 (p4) en 2022 vs 1.49 (p90) en Apertura 2023"
- kpi: "12.9 | 8.8 | pases que deja dar antes de robar | 41 | Intensidad de presión en su último torneo con Pachuca, Clausura 2025 | contra | con Santos en el Apertura 2021"
- definiciones: D-05b, D-26
- decision: "Staff del América: la versión campeona de Almada es la de presión máxima; vigilar la intensidad de presión como señal temprana de desgaste del modelo"
Los dos torneos en que terminó primero y campeón con Pachuca son los de presión más intensa de ese ciclo, y en Santos presionaba todavía más. Cuando la presión se aflojó (Apertura 2023, con 4-4-2 en 8 de 17 partidos), el peligro que concedía casi se duplicó y el equipo terminó 11.º. Con el América la presión volvió a subir: deja dar 11 pases.

### Dos equipos: en casa presiona y domina, fuera se repliega y concede 50 % más peligro
- bloque: M-2
- escenario: localia
- metrica: np_xg_conceded
- cifra: "Local 44-27-15, xG concedido 0.82 (p7), PPDA 9.9, field tilt 58.5, xG 1.40. Visita 36-17-31, xG concedido 1.25 (p63), PPDA 12.0, altura de presión 2.5 m más baja, field tilt 49.7"
- kpi: "1.25 | 0.82 | goles esperados en contra por partido | 63 | Peligro concedido de visita | contra | de local"
- definiciones: D-20, D-05b, D-13
- decision: "Rival: en casa contra Almada, tener el balón; de visita, esperarlo. Staff: el déficit de visita es de presión, no de ataque: el peligro creado cae 15 %, el concedido sube 52 %"
Perdiendo de visita concede 1.4 goles esperados por cada 90 minutos; perdiendo de local, 0.6. Cuando va abajo fuera de casa el equipo se abre y no se cierra.

### Con la liguilla en juego presiona más arriba y se expone más
- bloque: M-2
- escenario: tabla
- metrica: press_high_pct
- cifra: "En zona directa: PPDA 10.2 (p6), xG concedido 0.97, 22-10-13. Directa alcanzable: PPDA 11.3 (p19), 18.5 % de fases altas (vs 17.3 %), xG concedido 1.13, xG rival tras pérdida 0.20 (p67), 23-16-19"
- kpi: "18.5 % | 17.3 % | de sus rachas de presión son en campo rival | | Presión en campo rival cuando la liguilla directa es alcanzable | neutro | en el resto de partidos"
- definiciones: D-23, D-05, D-04
- decision: "Rival: cuando el equipo de Almada persigue la liguilla, esperar su línea adelantada y correr a su espalda. Staff: bajo presión de tabla el equipo sube la línea y se expone al contragolpe; conviene contener esa reacción"
Perdiendo con la liguilla directa al alcance, su presión es la más alta de todos los cortes. Arranca los torneos fuerte: en las primeras cuatro jornadas va 19 ganados, 10 empatados y 7 perdidos, creando más peligro que el 82 % de la liga.

### En cuartos se guarda, en semis vive del contragolpe y el balón parado, en finales domina
- bloque: M-1
- escenario: fase
- metrica: field_tilt
- cifra: "Cuartos 3-4-3: field tilt 40 (p15), PPDA 15.5, 12.5 % fases altas. Semis 3-1-0: field tilt 36 (p5), xG concedido 1.42 (p86) pero xG en transición 0.73 (p90) y de balón parado 1.01 (p99). Final 3-0-1: field tilt 57, sp xG 0.63"
- kpi: "40 % | 57 % | del juego en campo rival | 15 | Dominio territorial en cuartos de final | contra | en finales"
- definiciones: D-24, D-03, D-07
- decision: "Rival en liguilla: en cuartos Almada te deja el balón; hay que atacar sin regalar contragolpes. Staff: el plan de liguilla es otro modelo, más reactivo; la plantilla debe poder jugar los dos"
En liguilla suma 9 ganados, 5 empatados y 4 perdidos. En el play-in y la reclasificación (5 partidos a un solo juego, 3 ganados y 2 empatados) hace lo contrario: presiona como nadie en la liga, domina el 69 % del territorio y crea 1.65 goles esperados. Se juega todo a presionar.

### Ida y vuelta: a la ida espera, en la vuelta reacciona según el global
- bloque: M-2
- escenario: ida_vuelta
- metrica: ppda_own
- cifra: "Ida 3-4-2, 10.9 entradas al área (p10). Vuelta perdiendo el global 2-0-0: PPDA 8.9 (p1), field tilt 56.5. Vuelta ganando el global 2-0-1: xG 0.47 (p0) pero xG en transición 0.91 (p98)"
- kpi: "8.9 | 14.0 | pases que deja dar antes de robar | 1 | Intensidad de presión en la vuelta cuando pierde el global | favor"
- definiciones: D-24, D-03
- decision: "Rival: a la ida se le puede atacar; en la vuelta, si va abajo presiona todo, si va arriba cede el balón y mata al contragolpe. Son 2 o 3 partidos por situación: patrón, no ley"

### Contra los seis de arriba pierde la identidad
- bloque: M-2
- escenario: rival
- metrica: ppda_own
- cifra: "Rival top 6: 25-17-21, PPDA 12.8 (p39), field tilt 47.0, xG 1.15 (p52). Resto: 55-27-25, PPDA 9.8 (p4), field tilt 58.3, xG 1.39 (p85)"
- kpi: "12.8 | 9.8 | pases que deja dar antes de robar | 39 | Intensidad de presión contra rivales del top 6 | contra | contra el resto"
- definiciones: D-25, D-05b
- decision: "Staff: contra rivales de arriba su presión cae a la media de la liga y el dominio desaparece; el América va a jugar más partidos de ese tipo. Hace falta un plan específico contra equipos que saben salir de la presión"

### Perdiendo tiene más balón y crea menos peligro: su ataque depende del robo
- bloque: M-1
- escenario: marcador
- metrica: np_xg
- cifra: "Ganando: xG 1.25 por 90 (p75), posesión 46.8 %, xG en transición 0.62. Perdiendo: xG 1.12 (p54), posesión 56.2 %, field tilt 60.0, xG en transición 0.52, 13.6 centros por 90"
- kpi: "1.12 | 1.25 | goles esperados por cada 90 minutos | 54 | Peligro creado cuando va perdiendo | contra | cuando va ganando"
- definiciones: D-21, D-03
- decision: "Rival: anotar primero y cerrarse; con el balón el equipo de Almada crea apenas lo normal. Staff: falta un plan B contra bloque bajo; los centros suben pero las llegadas al área no se convierten"
La intensidad de la presión no cambia con el marcador: deja dar 10 pases ganando, empatando o perdiendo. Lo que cambia es el balón: más posesión, más centros, menos robos, menos peligro por minuto.

### Arranca a tope y los partidos se le abren al final
- bloque: M-3
- escenario: momento
- metrica: transition_xg
- cifra: "0-30: 39.9 presiones en último tercio y 36.3 contrapresiones por 90 (p82), 118 pérdidas por 90 (p91). 60-90: xG en transición 0.84 por 90 (p87, más del doble que al inicio), xG 1.26, xG concedido 1.15"
- kpi: "0.84 | 0.35 | goles esperados tras robo por cada 90 minutos | 87 | Peligro creado tras robar, del minuto 60 al 90 | favor | en los primeros 30 minutos"
- definiciones: D-22, D-03, D-06
- decision: "Rival: aguantar la primera media hora sin perder el balón en campo propio; después del 60 el partido se abre y Almada mata al robar. Staff: el último tramo es donde más concede"

### Gana cuando el balón parado y el contragolpe producen; pierde cuando concede desde el área
- bloque: M-4
- escenario: resultado
- metrica: sp_goals
- cifra: "Ganó 80: 0.75 goles de balón parado por partido (p97), xG en transición 0.73 (p90), xG concedido 0.88 (p13), 52 % de tiros concedidos desde el área (p7). Perdió 46: 0.17 goles de balón parado (p3), xG en transición 0.33 (p14), xG concedido 1.40 (p83), 61 % desde el área (p76), xG rival tras pérdida 0.27 (p91)"
- kpi: "0.75 | 0.17 | goles de balón parado por partido | 97 | Goles de balón parado cuando gana | favor | cuando pierde"
- definiciones: D-07, D-03, D-04, D-12
- decision: "Rival: para ganarle hay que obligarlo a conceder tiros desde dentro del área y castigar sus pérdidas; cuando su balón parado no entra, el partido se abre. Staff: las derrotas no vienen de crear menos (crea lo normal) sino de conceder más y desde zonas peores; el balón parado a favor es lo que mejor anticipa el resultado"
La presión apenas cambia entre ganar y perder; lo que se desploma en las derrotas es la calidad de lo que concede: el peligro del rival justo después de una pérdida suya se duplica y los tiros concedidos desde el área suben 9 puntos.

## Balón parado (M-4)

### El córner corto es su seña: 24 % contra 13 % de la liga, y los cerrados le rinden menos
- bloque: M-4
- metrica: corner_short_pct
- cifra: "1,031 córners: inswinging 39 %, corto 24 % (liga 13 %), outswinging 24 %. xG por córner: outswinging 0.042, corto 0.030, inswinging 0.029 (liga 0.039). 29 goles de córner a favor, 25 en contra"
- kpi: "24 % | 13 % | de sus córners | | Córners cortos | neutro"
- definiciones: D-07
- decision: "Staff: cobrar menos córners cerrados (su peor envío, por debajo de la liga) y más abiertos; el corto está en la media y es su firma. Rival: defender el corto con dos hombres"
El primer contacto se concentra en el área chica y el punto de penal. Los tiros libres cobrados al área (150 tiros, 16 goles) rinden mejor que los directos a portería (130 tiros, 6 goles).

### Balón parado defensivo normal, penales en contra fuera de serie
- bloque: M-4
- metrica: sp_xg_conceded
- cifra: "xG concedido de balón parado 0.45 por partido (p46); 40 penales en contra, 31 goles; 25 goles de córner en contra"
- kpi: "40 | 44 | penales en 170 partidos | | Penales en contra | contra | a favor"
- definiciones: D-07
- decision: "Staff: el problema defensivo a balón parado no es el córner sino la falta en el área: 40 penales en 170 partidos es consecuencia de la agresividad del modelo. Rival: buscar el contacto en el área"

## Jugadores y cambios (M-5)

### 4-2-3-1 fijo: 114 de 170 partidos; perdiendo cambia a 4-4-2
- bloque: M-5
- metrica: tactical_shifts
- cifra: "4-2-3-1 en 67 %; 4-4-2 en 35 partidos, 16 de ellos en Clausura y Apertura 2023 (10-2-6 y 5-7-5). Cambio real de dibujo en 64 de 170 partidos, 33 de ellos perdiendo: 4-2-3-1 → 4-4-2 perdiendo (6), → 4-4-1-1 empatando (6)"
- kpi: "67 % | | de los partidos | | Partidos que arranca en 4-2-3-1 | neutro"
- definiciones: SB, D-21, D-26
- decision: "Rival: el dibujo base es uno; si va perdiendo después del 60, esperar dos delanteros (4-4-2). Staff: el 4-2-3-1 con doble pivote es el sistema con los tres equipos; el plan de remontada ya existe y es consistente"

### Cambia antes cuando pierde y el cambio funciona: el peligro creado se duplica
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio al 51.8' perdiendo, 56.5' empatando, 59.7' ganando. Perdiendo, 15 min antes vs después: xG 0.11 → 0.26, xG concedido 0.31 → 0.19, field tilt 53 → 59. 4.4 cambios por partido, 94 % tácticos"
- kpi: "0.26 | 0.11 | goles esperados en 15 minutos | | Peligro creado en los 15 minutos después del primer cambio, perdiendo | favor | antes del cambio"
- definiciones: D-21, SB
- decision: "Staff: el primer cambio perdiendo es su mejor decisión dentro del partido; mantener el gatillo al minuto 50. Rival: el cambio llega antes del 55, ajustar la marca a los que entran"
Perdiendo saca extremos y mediapunta, pero también lateral derecho (23 veces) y pivote izquierdo (18): sacrifica un defensor o un contención. Ganando saca a los tres de arriba (extremos 75, mediapunta 33) para refrescar la presión, no para cerrarse.

### Rotación alta: 3 titulares distintos de un partido al siguiente y ningún fijo en cinco años
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Jaccard entre XIs consecutivos 0.63; 2.9 cambios de titular por partido; ningún jugador llega al 70 % de titularidades en los 170 partidos; el núcleo cambia cada torneo"
- kpi: "2.9 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB
- decision: "Staff: el modelo no depende de nombres; depende de que los que entran corran. Conviene planear la plantilla por perfil (velocidad, regate, agresividad), no por titulares"

## Por equipo: qué viaja con Almada (América, Apertura 2026, 11 partidos, confianza media por la muestra)

### Lo que llegó al América y lo que no, en 11 partidos
- bloque: M-2
- escenario: equipo
- metrica: counterpressures
- cifra: "América vs Pachuca: xG 1.54 vs 1.31, field tilt 60 vs 53, xG de balón parado 0.85 vs 0.49; PPDA 10.8 vs 11.3 (igual); regates 12.9 vs 19.0; contrapresiones 27.6 vs 36.5; altura de presión 55.4 vs 57.0"
- kpi: "27.6 | 36.5 | presiones tras pérdida por partido | | Presión tras pérdida con el América | contra | con Pachuca"
- definiciones: D-05b, D-06, D-07
- decision: "Staff: con mejor plantilla el equipo domina más y vive más del balón parado; lo que no ha llegado es la presión tras pérdida y el uno contra uno, que eran la firma. Vigilar esas dos antes de la liguilla"
