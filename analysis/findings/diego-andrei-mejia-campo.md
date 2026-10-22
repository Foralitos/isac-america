# Hallazgos — Mejía en la Liga MX (Clausura 2023 → Apertura 2026, 36 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Diego Mejía con datos: Juárez (Clausura 2023 → Clausura 2024, 24) y Atlético San Luis (Apertura 2026, 12). Récord 8-9-19. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Los cortes con menos de 8 partidos (Clausura 2023, Clausura 2024, pelea por el play-in) se citan solo como contexto. Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Presión blanda: deja dar 17 pases antes de robar, la liga deja 14, y roba poco arriba
- bloque: M-2
- metrica: ppda_own
- cifra: "PPDA propio 17.25 vs 14.03 de liga (p86); altura de presión 54.24 m vs 55.81 (p27); 9.78 recuperaciones altas vs 11.91 (p11); 12.08 faltas vs 13.55 (p16); 29.22 fases de presión (p55) con 30.77 % de recuperación (p46); 154.25 presiones (p55). Juárez 15.97 (p77), San Luis 19.79 (p96)"
- kpi: "17.3 | 14.0 | pases que deja dar al rival antes de robar | 86 | Intensidad de presión: más pases es menos intensa | contra | liga"
- definiciones: D-05b, D-05, D-13
- decision: "Rival: salir jugando con calma desde atrás; su equipo no va a ir a buscar al portero ni a los centrales. Staff: fijar un disparador de presión concreto (pase atrás al central o balón al lateral) y medir cuántas rachas de presión terminan en robo; hoy presiona con volumen normal pero sin morder"
Presiona con el mismo volumen que la liga (154 presiones y 29 rachas por partido), pero las rachas no roban el balón y la línea de presión está en la media. El resultado es un equipo que deja jugar: comete pocas faltas, roba poco en campo rival y sus ataques tras robo son escasos. El rasgo viaja con él: con Juárez dejaba dar 16 pases y con San Luis 20, de los más altos de la liga.

### Concede 1.41 goles esperados por partido y 65 % de los tiros que recibe son desde dentro del área
- bloque: M-2
- metrica: shots_conceded_in_box_pct
- cifra: "64.54 % de tiros concedidos desde el área vs 58.18 % (p92); xG concedido sin penales 1.41 vs 1.17 (p85); 16.50 entradas al área del rival vs 14.20 (p81); 15.36 tiros concedidos vs 13.60 (p79); OBV concedido 1.60 (p74); línea defensiva 45.85 m vs 47.89 (p26). Juárez 65.25 % (p94), San Luis 63.12 % (p86)"
- kpi: "65 % | 58 % | de los tiros que concede | 92 | Tiros concedidos desde dentro del área | contra | liga"
- definiciones: D-12, D-13
- decision: "Rival: no hace falta tirar de lejos; meter el balón al área por volumen (centros, conducciones por dentro), porque su bloque no filtra la entrada. Staff: el problema no es cuántos tiros concede sino desde dónde; trabajar la cobertura del espacio entre central y lateral y el retroceso del doble pivote cuando el balón entra por el centro"
Defiende cerca de su portería (línea a 46 metros, abajo de la media) y aun así el rival entra al área 16.5 veces por partido, arriba de la liga. El rasgo viaja: con Juárez concedía el 65 % de los tiros desde el área y con San Luis el 63 %, los dos arriba de la liga. Cruza con la presión blanda: como no roba arriba, el rival llega acomodado y remata desde cerca.

### Se parte al perder el balón: 0.26 de peligro rival en los 10 segundos siguientes, de los más altos de la liga
- bloque: M-3
- metrica: vuln_xg
- cifra: "xG rival en 10 s tras pérdida 0.26 por partido vs 0.18 (p91); tiros rivales tras pérdida 2.31 vs 2.21 (p64); contrapresiones 30.81 vs 32.02 (p43) con 28.69 % de regain (p69); xG concedido en transición 0.55 vs 0.52 (p64). Juárez 0.30 (p95), San Luis 0.18 (p56). Perdió: 0.37 (p98); ganó: 0.08 (p3)"
- kpi: "0.26 | 0.18 | goles esperados por partido | 91 | Peligro del rival en los 10 segundos después de una pérdida suya | contra | liga"
- definiciones: D-04, D-06
- decision: "Rival: presionar su salida y correr al espacio apenas se robe; cada pérdida suya vale un tiro de calidad. Staff: no es falta de presión tras pérdida (la hace como la liga) sino de estructura detrás del balón; dejar un central libre y un pivote fijo cuando el equipo sale jugando"
El rival no le tira más veces tras robarle (2.3 tiros, como la liga), pero cada tiro vale mucho más: llega solo frente al portero. Es el corte que mejor separa sus victorias de sus derrotas: 0.08 cuando gana y 0.37 cuando pierde. Con San Luis bajó a la media de la liga a cambio de presionar menos; con Juárez era de lo peor de la base.

### Juega hacia los lados y no llega: de los menos verticales de la liga y 11.7 llegadas al área por partido
- bloque: M-1
- metrica: directness
- cifra: "directness 0.56 vs 0.59 (p6); 11.72 entradas al área vs 13.99 (p19); 51.55 % de secuencias llegan al último tercio vs 54.96 % (p20); 46.41 % de secuencias nacen en tercio defensivo vs 44.52 % (p76); salida larga del portero 41.04 % vs 46.78 % (p28); posesión 47.95 % (p35); precisión de pase 80.24 % (p62); 45.57 % de tiros fuera del área (p68); xG por tiro 0.08 (p33). Juárez 0.57 (p18), San Luis 0.53 (p2)"
- kpi: "11.7 | 14.0 | llegadas al área por partido | 19 | Llegadas al área | contra | liga"
- definiciones: D-02, D-10, D-12
- decision: "Rival: bloque medio ordenado, sin salir a presionar; su equipo da la vuelta al balón sin romper líneas y termina tirando de fuera (46 % de sus tiros). Staff: el equipo sale jugando bien (más ataques desde su campo que la liga, pases precisos) pero el balón no avanza; obligar un pase vertical al mediapunta en los primeros tres toques después de cruzar medio campo"
Saca el balón corto (solo 41 % de los saques del portero son largos) y arma casi la mitad de sus ataques desde su propio campo, pero casi la mitad no llega al último tercio. Con San Luis el rasgo se acentuó: pases más precisos que el 90 % de la liga (83 %) y aun así es de los equipos menos verticales de toda la base. Son ataques largos que terminan en tiro lejano o en centro, con una calidad de tiro apenas normal.

### Casi no ataca tras robar: 9.8 robos en campo rival y 2.9 tiros tras robo por partido, abajo de la liga
- bloque: M-3
- metrica: high_recoveries
- cifra: "9.78 recuperaciones altas vs 11.91 (p11); 2.92 tiros en transición vs 3.76 (p13); 5.27 % de conversión de transición vs 6.34 % (p16); 61.08 transiciones vs 63.24 (p34); xG en transición 0.45 vs 0.51 (p38); 31.40 % de recuperaciones altas con tiro en 10 s (p33). San Luis 8.08 (p4) pero 38.54 % con tiro (p89); ganó: xG en transición 0.76 (p93)"
- kpi: "9.8 | 11.9 | robos en campo rival por partido | 11 | Robos en campo rival | contra | liga"
- definiciones: D-03, D-10
- decision: "Rival: se puede jugar con la línea alta sin miedo al robo alto; su equipo no castiga la pérdida en campo propio. Staff: con San Luis los pocos robos altos sí acaban en tiro (39 %, arriba de la liga); el problema es el volumen; adelantar al segundo mediapunta del 3-4-2-1 para cerrar el pase al pivote rival y provocar el robo"
Sus ataques tras robo son pocos y con poco peligro, y el dato se cruza con la presión blanda: si deja dar 17 pases, robar en campo rival es raro. En los partidos que ganó el peligro tras robo subió a 0.76 por partido, de los más altos de la liga; cuando el contragolpe aparece, gana. Con San Luis el equipo roba todavía menos arriba (8 por partido) pero aprovecha mejor cada robo.

### Defiende sin hacer faltas: 12 por partido, abajo de la liga, y con San Luis solo 10, de las menos de la base
- bloque: M-2
- metrica: fouls
- cifra: "12.08 faltas vs 13.55 (p16); Juárez 13.12 (p37), San Luis 10.00 (p1); empatando 9.38 por 90 (p4); del 45 al 60, 8.67 por 90 (p6); Apertura 2026 10.00 (p1). Línea defensiva 45.85 m (p26); PPDA 17.25 (p86); 8 penales en contra en 36 partidos, 7 goles"
- kpi: "12.1 | 13.6 | faltas por partido | 16 | Faltas cometidas | neutro | liga"
- definiciones: SB, D-05b
- decision: "Rival: se puede conducir el balón por el medio campo sin que te corten; sus mediocampistas acompañan y no entran. Staff: no se trata de hacer más faltas, sino de que la falta táctica exista: cortar el contragolpe en la salida, que es donde hoy regala 0.26 goles esperados por partido justo después de perder el balón"
Cruza con la presión blanda y con la fragilidad tras pérdida: el equipo no muerde y tampoco corta. Con San Luis el rasgo llegó al extremo: 10 faltas por partido, de las cifras más bajas de los 198 equipos-torneo de la liga. Los 8 penales en contra en 36 partidos (7 goles) sí pesan, porque cuando el rival entra al área el contacto llega tarde y dentro.

## Consistencia y variabilidad (D-20, D-21, D-22, D-23, D-25, D-26)

### De visita presiona a 51 metros y defiende a 42, de los más bajos de la liga, y concede 17 tiros
- bloque: M-2
- escenario: localia
- metrica: press_height
- cifra: "Visita 4-4-11: altura de presión 51.06 m (p4) vs 57.78 de local (p79); línea defensiva 42.21 m (p2) vs 49.92 (p75); PPDA 18.84 (p92) vs 15.47; 17.26 tiros concedidos (p95) vs 13.24; 17.84 entradas al área del rival (p90) vs 15.00; 8.05 recuperaciones altas (p4) vs 11.71; 12.73 % de fases altas (p14) vs 20.93 % (p81); 25.53 presiones en último tercio (p10) vs 38.88 (p75); xG 0.90 (p18) vs 1.15; xG concedido 1.45 (p88) vs 1.36; tiros rivales tras pérdida 2.89 (p92) vs 1.65 (p11). Local 4-5-8"
- kpi: "51 | 58 | metros desde su portería | 4 | Altura de la presión de visita | contra | de local"
- definiciones: D-20, D-13, D-05
- decision: "Rival: de local contra Mejía, tener el balón y cargar el área; su equipo se repliega siete metros y concede 17 tiros. Staff: el repliegue de visita no reduce el peligro concedido (1.45, arriba de la liga) y mata el ataque (0.90, abajo); llevar la misma altura que en casa, al menos la primera media hora"
Es el corte más claro del técnico. De local el equipo presiona arriba de la liga (21 % de sus rachas de presión son en campo rival, 39 presiones cerca del área rival por partido) y concede tiros como la liga; de visita renuncia a todo eso y encima el rival le tira justo después de robarle: 2.89 tiros tras pérdida por partido contra 1.65 de local. De sus 19 derrotas, 11 fueron de visita.

### De visita concede casi un gol de balón parado por partido: 0.95, contra 0.24 de local
- bloque: M-4
- escenario: localia
- metrica: sp_goals_conceded
- cifra: "Goles concedidos de balón parado: visita 0.95 por partido (p100) vs local 0.24 (p12); liga 0.45. xG concedido de balón parado visita 0.67 (p90) vs local 0.36 (p21); córners a favor de visita 3.63 (p7) vs 4.35; 19 partidos de visita, 17 de local"
- kpi: "0.95 | 0.24 | goles de balón parado en contra por partido | 100 | Goles concedidos de balón parado de visita | contra | de local"
- definiciones: D-07, D-20
- decision: "Rival: de local, buscar el córner y la falta lateral; es donde más goles le han hecho fuera de casa. Staff: revisar las marcas del balón parado defensivo de visita; el repliegue bajo trae más córners en contra y el equipo los defiende peor que en casa, donde el mismo balón parado casi no le cuesta goles"
De los goles de balón parado que concede, casi todos llegan fuera de casa: 0.95 por partido en 19 partidos de visita son unos 18 goles, contra unos 4 en 17 de local. El peligro concedido de balón parado de visita está arriba del 90 % de la liga y de local abajo del 79 %. Es el mismo equipo y el mismo cuerpo técnico; lo que cambia es la altura a la que defiende y cuántos córners regala.

### Ganando se encierra: 25 % de dominio territorial y 18 tiros concedidos por cada 90 minutos
- bloque: M-2
- escenario: marcador
- metrica: shots_conceded
- cifra: "Ganando (13 partidos, 651 min): field tilt 25.10 (p11), posesión 35.24 % (p15), 52.52 pases progresivos (p6), altura de presión 47.94 m (p14), PPDA 18.00 (p87), 18.11 tiros concedidos por 90 (p94), 18.66 entradas al área del rival (p87), xG concedido 1.91 (p91), xG concedido de balón parado 0.85 (p90), 4.70 centros (p8). Empatando: field tilt 44.53, 14.71 tiros concedidos. Perdiendo: field tilt 51.06, 10.70 tiros concedidos, altura de presión 56.34"
- kpi: "18.1 | 10.7 | tiros concedidos por cada 90 minutos | 94 | Tiros que concede cuando va ganando | contra | cuando va perdiendo"
- definiciones: D-21, D-13
- decision: "Rival: si Mejía se pone arriba, no desesperarse: su equipo va a regalar el balón y el territorio; cargar el área con centros y segundas jugadas, que es donde concede 1.9 goles esperados por 90. Staff: ganando concede casi el doble de tiros que perdiendo; subir la línea diez metros y mantener a dos jugadores arriba para que el rival no se instale en campo propio"
De los 13 partidos en que estuvo arriba en el marcador ganó 8; en los otros 5 el rival empató o remontó. Perdiendo el equipo tiene más balón (53 %), presiona más arriba (56 metros) y concede 10.7 tiros por 90; ganando se desploma todo a la vez: 35 % de posesión, 25 % del territorio y 18 tiros en contra. Lo único que le queda con ventaja es el contragolpe: 0.62 de peligro tras robo por 90, arriba de la liga.

### Perdiendo tiene el balón y crea menos: 0.83 goles esperados por 90, abajo de la liga
- bloque: M-1
- escenario: marcador
- metrica: np_xg
- cifra: "Perdiendo (27 partidos, 1623 min): xG 0.83 por 90 (p23), posesión 53.00 %, field tilt 51.06 (p24), 92.51 pases progresivos (p30), 11.54 entradas al área (p15), 10.82 centros por 90 (p19), xG en transición 0.39 (p46), PPDA 13.11. Empatando (1401 min): xG 0.95 (p45). Ganando (651 min): xG 0.97 (p46), xG en transición 0.62 (p76)"
- kpi: "0.83 | 0.97 | goles esperados por cada 90 minutos | 23 | Peligro creado cuando va perdiendo | contra | cuando va ganando"
- definiciones: D-21, D-12
- decision: "Rival: con la ventaja, bloque medio y dejarle el balón; su equipo no sabe atacar un bloque cerrado. Staff: el plan de remontada es tener el balón y centrar, y no produce; hace falta un recurso distinto (extremo a pierna cambiada que entre al área, segundo delantero fijo en el área chica), porque 1623 minutos perdiendo dieron menos peligro por minuto que empatando"
Es el corte que explica el récord: pasa casi la mitad de sus minutos perdiendo (1623 de 3675) y en ese estado crea menos que en cualquier otro. Sube la posesión y suben los pases hacia adelante, pero las llegadas al área se quedan abajo de la liga; el equipo rodea el área y no la pisa. Los centros también están abajo de la liga incluso perdiendo, así que ni siquiera es un plan de centros: es circulación sin remate.

### Arranca dormido: 7.8 llegadas al área por 90 en la primera media hora, de las más bajas de la liga
- bloque: M-1
- escenario: momento
- metrica: box_entries
- cifra: "0-30: 7.83 entradas al área por 90 (p10), xG 0.68 (p19), field tilt 38.16 (p13), 27.17 conducciones progresivas (p19), posesión 45.50 % (p23); concede 13.25 tiros (p88) y 1.30 xG (p83). 30-60: xG 1.10 (p63), 10.71 entradas, 14.00 tiros concedidos. 60-90: xG 0.89 (p23), 12.00 entradas, 1.41 xG concedido. Por cuartos de hora: mejor 45-60 (xG 1.25, p75), peor 15-30 (xG 0.72, 69.50 pases progresivos, p9)"
- kpi: "7.8 | 12.0 | llegadas al área por cada 90 minutos | 10 | Llegadas al área en los primeros 30 minutos | contra | del minuto 60 al 90"
- definiciones: D-22, D-12
- decision: "Rival: salir a presionar los primeros 20 minutos; su equipo no avanza y concede tiros desde el arranque. Staff: el equipo entra al partido a estudiar al rival y sale del descanso mejor (su mejor cuarto de hora es del 45 al 60); adelantar ese plan al silbatazo inicial, con el mediapunta pisando área desde el primer minuto"
En la primera media hora el equipo apenas pisa el área rival y, al mismo tiempo, concede más que después: 13.25 tiros por 90, arriba del 88 % de la liga. La segunda media hora es la única donde crea como la liga; después del 60 vuelve a caer. Del 15 al 30 casi no avanza el balón: 69.5 pases hacia adelante por 90, de los más bajos de la base, aunque pierde pocos balones; tiene el balón y no lo mueve.

### Gana con 0.88 goles de balón parado por partido y pierde cuando el rival le hace 0.37 tras cada pérdida
- bloque: M-3
- escenario: resultado
- metrica: vuln_xg
- cifra: "Ganó 8: xG rival tras pérdida 0.08 (p3), goles de balón parado 0.88 (p99), xG en transición 0.76 (p93), xG por tiro 0.11 (p98), xG 1.29 (p73), field tilt 37.75 (p6), posesión 42.87 % (p8), PPDA 21.99 (p98), xG concedido 1.17 (p53). Empató 9: 69.06 % de tiros concedidos desde el área (p99), goles de balón parado 0.22 (p8). Perdió 19: xG rival tras pérdida 0.37 (p98), xG concedido 1.59 (p94), xG concedido en transición 0.63 (p80), goles de balón parado 0.26 (p14), xG por tiro 0.07 (p5), primer cambio al 47.53' (p5)"
- kpi: "0.37 | 0.08 | goles esperados por partido | 98 | Peligro del rival justo después de una pérdida suya, en los partidos que perdió | contra | en los que ganó"
- definiciones: D-04, D-07, D-03
- decision: "Rival: presionar la salida y atacar en los cinco segundos después del robo; además, cerrar el córner y la falta lateral, que son su única fuente de goles cuando gana. Staff: las victorias llegan sin balón (43 % de posesión, 38 % de territorio), con contragolpe y balón parado; el modelo que gana es reactivo y el que pierde intenta tener el balón y se parte atrás. Elegir uno"
Cuando gana, su equipo tiene menos balón y menos territorio que casi toda la liga y aun así crea 1.29 goles esperados, con la mejor calidad de tiro de la base (0.11 por tiro). Cuando pierde, la calidad de tiro se desploma (0.07) y el rival lo castiga tras cada pérdida: más de cuatro veces el peligro de las victorias. Los empates también tienen firma: en los 9 concedió el 69 % de los tiros desde el área, el valor más alto de todos sus cortes.

### Contra los seis de arriba cede el territorio: 37 % de dominio, de los más bajos de la liga, y 2-5-7
- bloque: M-1
- escenario: rival
- metrica: field_tilt
- cifra: "Top 6 (14 partidos): 2-5-7, field tilt 36.85 (p5), posesión 43.24 % (p9), 47.27 % de secuencias llegan al último tercio (p4), 85.57 pases progresivos (p13), xG 0.89 (p16), xG concedido 1.50 (p91), PPDA 19.32 (p94), 168.29 presiones (p79), 49.26 % de tiros fuera del área (p89), 27.48 % de ataques por izquierda (p2). Resto (22): 6-4-12, field tilt 48.95 (p44), xG 1.10 (p42), xG concedido 1.35 (p78), goles concedidos de balón parado 0.73 (p92)"
- kpi: "37 % | 49 % | del juego en campo rival | 5 | Dominio territorial contra rivales del top 6 | contra | contra el resto"
- definiciones: D-25, D-02
- decision: "Rival de arriba: salir a dominar desde el inicio; su equipo se repliega, presiona mucho pero sin robar y tira de lejos. Staff: contra los grandes presiona más veces (168 por partido) y deja dar más pases (19), es decir, corre sin robar; mejor bajar el volumen y fijar un bloque medio compacto. Contra el resto el problema es otro: 0.73 goles de balón parado en contra por partido"
Contra el resto de la liga tampoco gana (6-4-12), pero por motivos distintos: ahí domina como la liga y lo que lo hunde es el balón parado defensivo, con goles concedidos arriba del 92 % de la liga. Contra los de arriba el equipo no cruza medio campo: menos de la mitad de sus ataques llegan al último tercio, de los más bajos de la base, y casi todo lo que intenta sale por el centro o por la derecha.

### Con la liguilla directa en la mano, el balón parado decidió: 0.75 goles a favor y 1.00 en contra por partido
- bloque: M-4
- escenario: tabla
- metrica: sp_goals_conceded
- cifra: "En zona directa (8 partidos, Juárez Apertura 2023): 3-1-4, goles de balón parado 0.75 (p97), xG de balón parado 0.72 (p95), xG de tiro libre indirecto 0.20 (p100), goles concedidos de balón parado 1.00 (p100), xG en transición 0.65 (p82), 22.25 % de recuperaciones altas con tiro (p1), xG 0.90, xG concedido 1.26. Arranque (12): 2-5-5, xG en transición 0.29 (p6), 51.33 % de tiros fuera del área (p96), xG concedido 1.41 (p85). Directa alcanzable (12): 3-2-7, xG 1.24 (p68), xG concedido 1.43 (p86)"
- kpi: "1.00 | 0.45 | goles de balón parado en contra por partido | 100 | Goles concedidos de balón parado cuando ya estaba en zona de liguilla directa | contra | liga"
- definiciones: D-23, D-07
- decision: "Rival: cuando su equipo llega arriba en la tabla, insistir en el córner y la falta lateral; en esa situación le marcaron un gol de balón parado por partido. Staff: con la tabla a favor el equipo creó más de balón parado y de contragolpe que nunca, pero regaló lo mismo atrás; la ventaja en la tabla no se sostiene sin balón parado defensivo"
Son 8 partidos, todos del Apertura 2023 con Juárez, cuando el equipo llegó a estar tercero de la tabla; de ahí perdió 4 de 8 y llegó a la última jornada en el lugar 14. En las primeras cuatro jornadas de cada torneo (12 partidos) el patrón es otro: casi no hay contragolpe (0.29 de peligro tras robo, de los más bajos de la liga) y la mitad de los tiros son desde fuera del área; arranca los torneos tanteando.

### Con San Luis presiona todavía menos: deja dar 20 pases, de los más altos de la liga, y 23 rachas de presión
- bloque: M-2
- escenario: torneo
- metrica: ppda_own
- cifra: "Apertura 2023 (Juárez, 17): PPDA 16.51 (p81), 32.65 fases de presión (p74), 33.47 contrapresiones (p65), 32.32 % de fases con recuperación (p66), 9.94 recuperaciones altas (p16), xG concedido 1.40 (p84), xG rival tras pérdida 0.33 (p98), 64.42 % de tiros concedidos desde el área (p91), 5-3-9. Apertura 2026 (San Luis, 12): PPDA 19.79 (p96), 23.00 fases (p10), 25.17 contrapresiones (p4), 25.74 % con recuperación (p3), 8.08 recuperaciones altas (p4), xG concedido 1.32 (p74), xG rival tras pérdida 0.18 (p56), 63.12 % desde el área (p86), 3-4-5. Clausura 2023 (3) y Clausura 2024 (4, PPDA 18.08): muestra chica"
- kpi: "19.8 | 16.5 | pases que deja dar antes de robar | 96 | Intensidad de presión con San Luis en el Apertura 2026 | contra | con Juárez en el Apertura 2023"
- definiciones: D-26, D-05b, D-05, D-06
- decision: "Staff de San Luis: presionar menos redujo el peligro tras pérdida (de 0.33 a 0.18) pero no el peligro concedido total (1.32, arriba de la liga) y dejó al equipo sin robos altos; el equilibrio está en presionar tras pérdida con los dos mediapuntas, no en renunciar. Rival: ante el San Luis de Mejía hay tiempo para construir desde atrás; no apurarse"
Torneo a torneo la presión se afloja: 16.5 pases con Juárez en el Apertura 2023, 18.1 en el Clausura 2024 (4 partidos) y 19.8 con San Luis. A cambio el equipo se partió menos tras perder el balón, que era su peor rasgo con Juárez. La defensa dentro del área no cambió: 64 % de tiros concedidos desde el área en 2023 y 63 % en 2026, los dos arriba de la liga; presionar menos no lo hizo más sólido, solo menos expuesto al contragolpe.

## Balón parado (M-4)

### Pocos córners y poco peligro: 4 por partido, abajo de la liga, y 5 goles de córner en 36 partidos
- bloque: M-4
- metrica: corners
- cifra: "143 córners (3.97 por partido, p13); xG de córner 0.13 por partido vs 0.18 (p24); xG por córner 0.03 (p43); 72 tiros, 4.8 xG, 5 goles. Envío: 43 % abiertos (61 córners, 1 gol, 0.040 por córner), 32 % cerrados (46, 3 goles, 0.041), 12 % cortos (17, 1 gol, 0.020 vs 0.032 de liga); 57 % desde la derecha. San Luis: 3.00 por partido (p1), 36 córners, 3 goles, 22.50 % cortos (p85). Juárez: 107 córners, 2 goles"
- kpi: "4.0 | 4.9 | córners por partido | 13 | Córners a favor por partido | contra | liga"
- definiciones: D-07
- decision: "Staff: el córner cerrado desde la izquierda es el único que produce (3 de los 5 goles); cobrar más cerrados y menos cortos, que rinden la mitad que en la liga. Rival: su córner corto no asusta; defenderlo con un solo hombre y ganar la segunda jugada"
Como el equipo llega poco al área, tampoco genera córners: 4 por partido, abajo del 87 % de la liga, y con San Luis apenas 3, de los más bajos de la base. En cambio concede 224 (6.2 por partido), más de uno y medio por cada uno que cobra. Con San Luis el córner rinde más (3 goles en 36 cobros, contra 2 en 107 con Juárez) y se cobra corto más seguido, pero el corto sigue siendo su envío menos peligroso.

### Concede 0.61 goles de balón parado por partido, arriba de la liga: 10 de córner y 7 penales en 36 partidos
- bloque: M-4
- metrica: sp_goals_conceded
- cifra: "Goles concedidos de balón parado 0.61 por partido vs 0.45 (p79); xG concedido de balón parado 0.52 (p66); 224 córners en contra (6.2 por partido), 117 tiros, 8.9 xG, 10 goles; penales en contra 8 tiros, 7 goles; tiros libres en contra 185, 5 goles, xG 3.8; saques de banda en contra 288, 3 goles; 0.04 xG por córner concedido (p58). Juárez 0.58 (p74), San Luis 0.67 (p86); San Luis 83 córners en contra, 6 goles"
- kpi: "0.61 | 0.45 | goles de balón parado en contra por partido | 79 | Goles concedidos de balón parado | contra | liga"
- definiciones: D-07, D-12
- decision: "Rival: insistir en el córner, sobre todo de local: el peligro por córner que concede es normal, pero el volumen es alto (6 por partido) y los goles llegan. Staff: el problema es cuántos córners regala, consecuencia de defender dentro del área; reducir los despejes al córner con salida corta del portero y poner marca fija al remate en el centro del área, de donde salen casi todos los goles de córner que concede"
Cada córner en contra vale lo mismo que en la liga; lo que lo castiga es la cantidad: 6.2 por partido, por 4.0 que cobra él. El dato se dispara de visita (0.95 goles de balón parado por partido) y con la liguilla directa en juego (1.00). Con San Luis no mejoró: 0.67 por partido, con 6 goles de córner en contra en 12 partidos.

### Tira muchos tiros libres directos y no mete ninguno: 23 tiros, 1.0 de peligro, 0 goles
- bloque: M-4
- metrica: fk_direct_xg
- cifra: "xG de tiro libre directo 0.03 por partido vs 0.02 (p92); 23 tiros libres directos, xG 0.99, 0 goles; 22 cobros directos de 183 tiros libres a favor, 8 de ellos desde zona media. Tiros libres al área: 41 tiros, xG 3.03, 2 goles; xG de tiro libre indirecto 0.08 (p66): Juárez 0.11 (p83), San Luis 0.04 (p17). Saques de banda en zona de peligro 7.17 (p33), 258 en total, 1 gol, 64.56 % retenidos; San Luis 5.50 (p5). 8 penales a favor, 7 goles"
- kpi: "23 | 0 | tiros libres directos en 36 partidos | 92 | Tiros libres directos intentados, contra goles anotados con ellos | contra | goles"
- definiciones: D-07
- decision: "Staff: dejar de tirar directo desde lejos (8 de los 22 cobros directos salen de zona media) y cobrar al área; el tiro libre al área produce casi el doble de peligro por intento. Rival: la falta frontal lejana no es peligro; la falta lateral al área sí tiene remate (41 tiros) y conviene cuidarla"
Es el único rasgo de balón parado donde está arriba de la liga, y es por volumen, no por acierto. Con Juárez el tiro libre al área sí producía (0.11 por partido, arriba de la liga); con San Luis cayó a 0.04. Los saques de banda cerca del área tampoco pesan: 7 por partido, 1 gol en 258 saques, y con San Luis 5.5 por partido, de los más bajos de la liga, porque el equipo casi no llega a esa zona.

## Jugadores y cambios (M-5)

### Sin dibujo fijo: 8 sistemas en 36 partidos y 2.4 cambios de dibujo por partido, de los más altos de la liga
- bloque: M-5
- metrica: tactical_shifts
- cifra: "Cambios de formación 2.36 por partido vs 1.80 (p90); 85 cambios de dibujo en 36 partidos; 36 cambios reales de dibujo en 24 partidos: 25 perdiendo, 7 empatando, 4 ganando. Dibujo inicial: 4-2-3-1 en 9 (25 %), 4-4-2 en 9 (25 %), 3-4-2-1 en 8 (22 %), 3-4-3 en 4 (11 %), 4-4-1-1 en 3 (8 %), 3-5-2, 4-1-4-1 y 4-3-3 en 1. Perdiendo, del 70 al 80: 4-4-2 en 39 % y 40 % de los minutos. Juárez 2.54 (p97), San Luis 2.00 (p69)"
- kpi: "2.4 | 1.8 | cambios de dibujo por partido | 90 | Cambios de dibujo dentro del partido | neutro | liga"
- definiciones: SB, D-21
- decision: "Rival: no preparar el partido contra un dibujo sino contra dos: el inicial y el 4-4-2 con dos delanteros que llega perdiendo después del 55. Staff: el cambio más repetido perdiendo (de 4-2-3-1 a 4-4-2) no cambió la producción, que perdiendo es la más baja de todos los estados; medir qué dibujo crea más por minuto antes de seguir moviendo"
Ningún dibujo pasa de un cuarto de sus partidos. Con Juárez mezcló 4-4-2 y 4-2-3-1 en el mismo torneo (7 y 5 en el Apertura 2023) y probó 4-4-1-1, 3-5-2, 4-1-4-1 y 4-3-3; con San Luis se asentó en línea de tres. Perdiendo, los cambios se concentran entre el 55 y el 75: 18 cambios en el tramo del 55 y 21 en el del 70, casi todos para pasar a dos delanteros.

### Perdiendo cambia al 50 y el cambio cierra el partido: el peligro concedido baja de 0.52 a 0.19 en 15 minutos
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio perdiendo al 49.5' (mediana 53', 21 partidos), empatando 50.6' (8), ganando 61.6' (7); media 52.11' vs 53.87 de liga (p31). Perdiendo, 15 min antes vs después: xG concedido 0.52 → 0.19, xG 0.09 → 0.20, tiros 1.8 → 2.5, field tilt 44 → 55, altura de presión 52 → 59 m. Ganando: field tilt 13 → 30, PPDA 39.0 → 27.2. Todos: xG concedido 0.42 → 0.21. 4.9 cambios por partido, 170 tácticos y 8 por lesión. Por tabla: zona directa 50.0', arranque 54.2'; perdió 47.5' (p5), ganó 56.3' (p72)"
- kpi: "0.19 | 0.52 | goles esperados concedidos en 15 minutos | | Peligro concedido en los 15 minutos después del primer cambio, perdiendo | favor | antes del cambio"
- definiciones: D-21, SB
- decision: "Staff: el primer cambio perdiendo es la mejor decisión del técnico dentro del partido: el equipo sube siete metros y deja de conceder; adelantarlo al descanso cuando va abajo, porque la mediana ya es el 53. Rival: si vas ganando contra Mejía, el ajuste llega al 50 y mete a su equipo en campo rival; preparar la respuesta para el tramo 55-70, cuando él más mueve"
Perdiendo saca sobre todo al pivote izquierdo (15 veces), al delantero centro (10) y al extremo izquierdo (10): quita un contención y refresca el frente. Ganando espera hasta el 62 y saca al 9 (8 veces); en ese estado el equipo llega al cambio con 13 % de dominio territorial, completamente encerrado, y el cambio apenas lo saca a 30 %. En las derrotas el primer cambio llegó al 47.5, de los más tempranos de la liga: cuando el partido se le va temprano, mueve temprano.

### Once sin fijos: 2.9 titulares nuevos por partido y nadie llega al 70 % de titularidades
- bloque: M-5
- metrica: xi_stability
- cifra: "Jaccard entre onces consecutivos 0.63; 2.9 cambios de titular por partido; más usados: Alfredo Talavera 20 titularidades (56 %, 1566 min), Luis Rodríguez Alanís 19 (53 %), Javier Salas 18 (50 %), Aitor García 18 (50 %), José Juan García Manríquez 16 (44 %), Avilés Hurtado 16 (44 %), Aldo Cruz 15, Denzell García 15. Núcleo Apertura 2023 (17 partidos): 8 jugadores; Apertura 2026 (12): 6 jugadores"
- kpi: "2.9 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB
- decision: "Staff: con dos plantillas distintas el patrón se repite (ocho fijos en el Apertura 2023, seis en el 2026); la rotación va de la mano con los ocho dibujos; fijar al menos la línea defensiva, que es donde concede. Rival: el once cambia tres piezas por semana; no gastar el análisis en nombres sino en el dibujo y en los carrileros"
En 36 partidos nadie fue titular en siete de cada diez; el que más, el portero Talavera, en poco más de la mitad. El núcleo de cada torneo se arma con quien está: en el Apertura 2023 con Juárez fueron Talavera, Rodríguez Alanís, Aitor García, Salas, Castillo, García Manríquez, Chávez y Hurtado; en el Apertura 2026 con San Luis, Macías, Salles-Lamonge, David Rodríguez, Águila, Román Torres y Llorente.

## Por equipo: qué viaja con Mejía (Juárez 24 partidos, Atlético San Luis 12)

### Con San Luis crea más y mejor: 1.20 goles esperados y 0.10 por tiro, con la mitad de regates
- bloque: M-1
- escenario: equipo
- metrica: np_xg
- cifra: "San Luis (12): xG 1.20 (p63) vs Juárez 0.93 (p20); xG por tiro 0.10 (p79) vs 0.07 (p15); regates 9.67 (p5) vs 14.54 (p62), completados 61.09 % (p89) vs 46.95 % (p7); precisión de pase 83.17 % (p90) vs 78.77 % (p49); posesión 50.72 % (p59) vs 46.57 % (p22); salida larga del portero 32.24 % (p7) vs 45.44 %; entradas al área 11.50 (p16) vs 11.83 (p21); xGD -0.12 (p39) vs -0.53 (p14). Lo que no cambió: tiros concedidos desde el área 63.12 % vs 65.25 %, xG concedido 1.32 (p74) vs 1.45 (p88)"
- kpi: "1.20 | 0.93 | goles esperados por partido | 63 | Peligro creado con San Luis | favor | con Juárez"
- definiciones: D-26b, D-14, D-12
- decision: "Staff: lo que mejoró con San Luis es la calidad de la decisión final (tiros más cercanos, regates elegidos) y la salida corta; lo que no cambió son las llegadas al área, abajo de la liga con los dos equipos, ni la defensa del área. Rival: no hay extremos que desborden (menos de 10 regates por partido); se puede defender con laterales que no necesiten ayuda"
Con Juárez el equipo regateaba mucho y mal (47 % completados, de los más bajos de la liga); con San Luis regatea la mitad y le sale el 61 %, arriba de la liga. La salida se volvió todavía más corta (un tercio de los saques del portero son largos, de los más bajos de la liga) y el balance de peligro pasó de -0.53 a -0.12 por partido. La plantilla cambió el ataque; la defensa del área y la presión blanda viajaron intactas.

### Con San Luis pasó a línea de tres (3-4-2-1 en 8 de 12) y retrasó el primer cambio al minuto 58
- bloque: M-5
- escenario: equipo
- metrica: first_sub_minute
- cifra: "San Luis: 3-4-2-1 en 8 partidos y 3-4-3 en 4; primer cambio al 58.33' (p86); 2.00 cambios de dibujo por partido (p69); núcleo de 6 jugadores en 12 partidos (Óscar Macías, Sébastien Salles-Lamonge, David Rodríguez, Eduardo Águila, Román Torres, Rafael Llorente). Juárez: 4-4-2 en 9, 4-2-3-1 en 9, 4-4-1-1 en 3, 3-5-2, 4-1-4-1 y 4-3-3 en 1; primer cambio al 49.00' (p11); 2.54 cambios de dibujo (p97); núcleo de 8 en 17 partidos del Apertura 2023"
- kpi: "58' | 49' | minuto del primer cambio | 86 | Minuto del primer cambio con San Luis | neutro | con Juárez"
- definiciones: D-26b, SB
- decision: "Rival: ante San Luis esperar línea de tres con carrileros; atacar la espalda de los carrileros antes del 58, que es cuando empieza a mover el banquillo. Staff: el cambio a línea de tres redujo los cambios de sistema dentro del partido (de 2.5 a 2.0) y dio un once más estable; sostenerlo y no volver a la mezcla de dibujos de Juárez"
Con Juárez probó seis dibujos distintos en 24 partidos y cambiaba de sistema más que el 97 % de la liga. Con San Luis el dibujo es uno (tres centrales siempre, con dos mediapuntas o con tres arriba) y el técnico espera más para el primer cambio, nueve minutos más que con Juárez. Con una plantilla que le convence, Mejía toca menos.

## Partidos y rivales

### Balance de peligro de -0.39 por partido, abajo de la liga, y una racha de 5 derrotas seguidas
- bloque: M-2
- metrica: xgd
- cifra: "xGD -0.39 vs -0.03 (p20); xG 1.02 (p31), xG concedido 1.41 (p85); récord 8-9-19; Juárez -0.53 (p14), San Luis -0.12 (p39). Rachas: 5 sin perder (julio y agosto de 2023), 5 derrotas seguidas (del 30 de octubre al 14 de enero siguiente). Técnicos más enfrentados: Jardine 1-0-2 (xG 0.85 contra 1.34), Almada 0-0-2 (1.07 contra 1.56), Fernando Ortiz 0-0-2 (1.23 contra 1.37), Ambriz 1-1-0, Mohamed 1-1-0. Mejor partido: San Luis 1-1 Pachuca, xG 2.85 contra 0.68; peor: Juárez 0-3 Querétaro, xG 1.01 contra 2.59"
- kpi: "-0.39 | -0.03 | goles esperados de diferencia por partido | 20 | Balance de peligro: creado menos concedido | contra | liga"
- definiciones: D-25, D-26
- decision: "Rival: Cruz Azul (0-1-2), Atlas, Santos y León (0-0-2 cada uno) nunca perdieron con él; el patrón común es un rival que lo deja tener el balón y lo castiga tras pérdida. Staff: el balance negativo es de defensa, no de ataque; con San Luis el ataque ya está en la media y la mejora pendiente es toda atrás"
El Apertura 2023 con Juárez resume su carrera: arrancó 4-3-1 y tercero de la tabla, y cerró 1-0-8 para llegar a la última jornada en el lugar 14; cinco derrotas seguidas enlazaron ese final con el inicio del Clausura 2024, que duró cuatro jornadas. Las dos goleadas a favor con menos peligro que el rival (4-1 a Pumas con 0.62 contra 1.78; 3-1 a Monterrey con 1.56 contra 2.12) son la versión reactiva que le funciona: poco balón, contragolpe y balón parado. Su mejor partido por peligro, el 1-1 con Pachuca en casa, lo empató.
