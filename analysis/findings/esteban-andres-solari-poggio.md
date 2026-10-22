# Hallazgos — Solari en la Liga MX (Apertura 2025 → Apertura 2026, 35 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Esteban Solari con datos: Pachuca (play-in del Apertura 2025 y Clausura 2026, 23 partidos) y Pumas UNAM (Apertura 2026, 12 partidos). Récord 17-8-10. Son 35 partidos, suficientes para el perfil general; los cortes por contexto con menos de 8 partidos se tratan como indicio y se dice en cada caso, y los 12 partidos con Pumas son una muestra media. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" o "pases que deja dar antes de robar" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas, "presión tras pérdida" = contrapresión); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Su punto flaco: 0.26 de peligro del rival justo tras perderla, de los más altos de la liga
- bloque: M-3
- metrica: vuln_xg
- cifra: "xG rival en 10 s tras pérdida 0.26 vs 0.18 de liga (p91); 2.71 tiros rivales tras pérdida vs 2.21 (p83); contrapresiones 27.3 vs 32.0 (p13); contrapresiones con regain 24.1 % vs 27.4 % (p13); con Pachuca 0.31 (p96), con Pumas 0.16 (p45); en derrotas 0.52 (p100), en victorias 0.15"
- kpi: "0.26 | 0.18 | goles esperados del rival en los 10 segundos después de una pérdida, por partido | 91 | Peligro del rival justo después de que su equipo pierde el balón | contra"
- definiciones: D-04, D-06
- decision: "Rival: robar y tirar en los primeros 10 segundos; no armar la jugada, correr al espacio que deja su línea adelantada. Staff: la presión tras pérdida está entre las más bajas de la liga y encima recupera poco; o se entrena la contrapresión de los tres de arriba o se baja la línea 3 metros cuando el balón se pierde en campo rival"
Es el rasgo que más lo separa de la liga y le pesa. Presiona tras pérdida 27 veces por partido, abajo de la liga, y solo 24 % de esas presiones recuperan el balón, así que cada pérdida en campo rival se convierte en un ataque del rival contra una línea que defiende a 50 metros. Con Pachuca, con la línea a 52 metros, el problema fue mayor (0.31, de los más altos de la liga); con Pumas bajó a la media (0.16), pero porque el equipo presiona menos y defiende 6 metros más atrás, no porque recupere mejor. En las 10 derrotas el peligro del rival tras pérdida se duplica (0.52).

### Presiona en campo rival (22 % de sus rachas, arriba de la liga) pero solo 28 % roban el balón
- bloque: M-2
- metrica: press_high_pct
- cifra: "Fases de presión altas 21.5 % vs 16.9 % (p85); fases con recuperación 28.3 % vs 31.2 % (p14); PPDA propio 15.8 vs 14.0 (p75, menos intenso que la liga); 26.5 fases de presión por partido vs 29.3 (p31); 144 presiones vs 152 (p38); altura de presión 56.8 m vs 55.8 (p66); con Pachuca 23.3 % de fases altas (p95), con Pumas 18.2 % (p64)"
- kpi: "22 % | 17 % | de sus rachas de presión ocurren en campo rival | 85 | Rachas de presión en campo rival | neutro"
- definiciones: D-05, D-05b, D-13
- decision: "Rival: aguantar la primera presión con un pase más y salir por el lado contrario; sus rachas se apagan solas y después deja dar 16 pases. Staff: elegir el gatillo: presionar arriba solo en saques de meta y pases atrás, y replegar en el resto; hoy el equipo sube a medias y no roba"
Presiona por rachas y arriba, no de manera sostenida: cuando decide ir, va a campo rival, pero son pocas rachas (26.5 por partido, abajo de la media) y terminan robando el balón menos que casi toda la liga. El resultado es un equipo que deja dar casi 16 pases antes de robar, más que la liga, y que concede poco (1.02 goles esperados por partido) más por el repliegue que por la presión. El rasgo viaja a medias: con Pachuca 23 % de rachas en campo rival, con Pumas 18 %.

### Regatea poco pero bien: 11 regates por partido, abajo de la liga, y 59 % le salen
- bloque: M-1
- metrica: dribbles_completed_pct
- cifra: "Regates 11.06 vs 14.03 (p12); completados 59.3 % vs 53.9 % (p85); posesión 46.0 % vs 49.8 % (p20); OBV ofensivo 1.26 vs 1.42 (p25); pases progresivos 93.7 vs 100.4 (p29); con Pachuca 12.4 regates, con Pumas 8.5 (p1); cuando gana completa 68.8 % (p98), cuando pierde 47.3 % (p8)"
- kpi: "59 % | 54 % | de sus regates le salen | 85 | Regates completados | favor"
- definiciones: D-14, D-01
- decision: "Rival: no hay que temerle al uno contra uno por volumen; cerrar el pase hacia adelante, que es donde está abajo de la liga. Staff: el ataque es de poco volumen (46 % de posesión, pocos pases que avanzan); el regate es el recurso que mejor funciona y se usa poco, conviene buscar más situaciones de uno contra uno para Idrissi y Kenedy"
Es un ataque que no acumula: posesión abajo de la liga, valor de sus acciones con balón abajo de la liga y menos pases que avanzan que el promedio. Lo poco que intenta por regate le sale, y la relación con el resultado es fuerte: 69 % de regates completados en los partidos que gana y 47 % en los que pierde. Con Pumas el regate casi desapareció (8.5 por partido, de los más bajos de la liga).

### Salida larga: 56 % de los pases del portero, con Pachuca 62 %, con Pumas 44 %
- bloque: M-1
- metrica: gk_long_pct
- cifra: "Salida larga 55.8 % vs 46.8 % (p78); con Pachuca 62.0 % (p93), con Pumas 43.8 % (p42); cuando gana 67.1 % (p97), cuando empata 44.8 %, cuando pierde 45.2 %; contra el top 6 60.0 % (p89); secuencias que nacen en tercio defensivo 44.7 % (p56)"
- kpi: "56 % | 47 % | de los pases del portero son largos | 78 | Salida larga del portero | neutro"
- definiciones: D-02, D-10
- decision: "Rival: no gastar la presión en el portero; ganar la segunda pelota en medio campo con un volante de más. Staff: con Pumas el equipo juega corto desde atrás sin tener la posesión que lo justifique; decidir una salida y entrenarla, porque la mezcla actual pierde el balón en campo propio"
Con Moreno en Pachuca el equipo salía largo más que el 93 % de la liga; con Keylor Navas en Pumas la salida es la de la media. Sus triunfos vienen con salida larga (67 %) y los empates y derrotas con salida corta (45 %), un patrón que coincide con los partidos en que cede el balón y vive del contragolpe. No es un equipo de posesión (46 %), así que la salida corta le agrega riesgo sin agregar dominio.

### Pocos ataques tras robo (60 por partido) pero 7.4 % terminan en tiro, arriba de la liga
- bloque: M-3
- metrica: transition_conv_pct
- cifra: "Transiciones ofensivas 59.7 vs 63.2 (p23); conversión 7.38 % vs 6.34 % (p82); tiros en transición 4.17 vs 3.76 (p74); xG en transición 0.41 vs 0.51 (p29); 3.70 s de recuperación a tiro vs 3.30 (p82); recuperaciones altas 11.1 vs 11.9 (p35); recuperaciones altas con tiro en 10 s 35.5 % (p70), con Pumas 41.2 % (p98)"
- kpi: "7.4 % | 6.3 % | de sus ataques tras robo terminan en tiro | 82 | Robos que acaban en tiro | neutro"
- definiciones: D-03
- decision: "Rival: tras perder el balón, cerrar el tiro lejano y obligar al pase extra; sus contragolpes rematan pronto pero desde zonas de poco valor. Staff: los tiros tras robo son muchos y de poco valor (0.41 goles esperados por partido, abajo de la liga); pedir una conducción más antes de rematar sube el valor sin perder la ventaja"
Roba menos veces que la liga y tarda más en rematar (3.7 segundos), pero cuando roba tira: sus ataques tras robo terminan en tiro más que el 82 % de la liga. El problema es la calidad: el peligro creado tras robo queda abajo de la liga, porque remata rápido y de lejos. Con Pumas el equipo robó más arriba con tiro inmediato (41 %, de los más altos de la liga), señal de que el plan de contragolpe sí viajó.

### 17 triunfos con balance de peligro negativo: 52 goles con 36 esperados
- bloque: M-2
- metrica: xgd
- cifra: "xG 1.04 vs 1.14 (p33) y xG concedido 1.02 vs 1.17 (p28); diferencia de xG -0.12 vs -0.03 (p40); 52 goles a favor y 43 en contra en 35 partidos (xG acumulado sin penales 36.4 a favor y 35.8 en contra, sumado de los partidos); 17 ganados, 8 empatados, 10 perdidos; ganó con menos peligro que el rival 2 veces, perdió creando más 1; xG por tiro 0.10 cuando gana (p88) y 0.06 cuando pierde (p0); tiros 12.77 (p43) y tiros concedidos 12.60 (p35)"
- kpi: "-0.12 | -0.03 | goles esperados de diferencia por partido | 40 | Balance de peligro por partido | neutro"
- definiciones: D-12, D-02
- decision: "Rival: el marcador de sus partidos se decide por eficacia, no por volumen; limitar las ocasiones claras dentro del área pesa más que limitar el total de tiros. Staff: unos 13 goles arriba del peligro creado no se sostienen un torneo más; el modelo necesita más llegadas al área para no depender de la puntería"
Sus partidos son de poco peligro en las dos áreas: crea y concede menos que la liga. Que haya ganado 17 de 35 con balance negativo se explica por la eficacia: 52 goles (49 sin penales) con 36 esperados, mientras que lo que concede entra como se espera (35 goles sin penal con 36 esperados, más 8 penales). Los resultados siguen al peligro casi siempre: solo 2 victorias con menos peligro que el rival (Atlas 3-1 con Pachuca, Toluca 2-1 con Pumas) y 1 derrota creando más (Mazatlán 0-1).

## Consistencia y variabilidad (D-20 a D-26)

### Pierde cuando sube la línea: en derrotas presiona a 62 metros y concede 1.05 en contragolpe
- bloque: M-2
- escenario: resultado
- metrica: transition_xg_conceded
- cifra: "Perdió 10: altura de presión 61.7 m (p100), línea defensiva 53.9 m (p99), 29.2 % de fases de presión altas (p99), 14.1 recuperaciones altas (p86), posesión 48.5 %, field tilt 53.8, xG concedido en transición 1.05 (p99), xG rival tras pérdida 0.52 (p100), xG 0.85 (p10), xG por tiro 0.06 (p0), 52.1 % de tiros de fuera (p97). Ganó 17: altura 55.1 m (p38), línea 48.3 m, posesión 43.55 % (p10), field tilt 45.5, salida larga 67.1 % (p97), xG 1.18, xG concedido 0.81 (p7), en transición 0.30 (p5), xG por tiro 0.10 (p88)"
- kpi: "1.05 | 0.30 | goles esperados en contra en contragolpe por partido | 99 | Peligro concedido en contragolpe en los partidos que pierde | contra | en los que gana"
- definiciones: D-04, D-13, D-03
- decision: "Rival: cederle el balón y esperarlo; cuando su equipo domina sube la línea a 54 metros y ahí se le gana al contragolpe. Staff: la versión dominante es la que pierde; si el partido pide tener el balón, hay que fijar la línea defensiva y dejar dos de contención, no acompañar al ataque con todo"
Es el patrón más claro de los 35 partidos. Gana con menos balón (44 %), salida larga y repliegue: concede 0.81 goles esperados, entre lo más bajo de la liga. Pierde con más balón (48 %), con la línea de presión 7 metros más arriba y la defensiva 6 metros más adelantada que cuando gana: el peligro concedido en contragolpe se multiplica por tres y el del rival justo tras pérdida casi por cuatro (de 0.15 a 0.52). Además, cuando domina tira peor: la mitad de los tiros desde fuera y 0.06 de valor por tiro, lo más bajo de la liga.

### De visita se apaga el ataque: 13 % de ataques terminan en tiro contra 18 % en casa
- bloque: M-1
- escenario: localia
- metrica: seq_shot_pct
- cifra: "Local (ganó 10, empató 5, perdió 3): secuencias con tiro 17.65 % (p89), secuencias que llegan al último tercio 59.7 % (p89), 15.5 entradas al área (p72), 14.1 tiros (p69), 5.89 córners (p88), xG 1.04, xG concedido 0.93 (p18), xG concedido en transición 0.36 (p14), altura de presión 58.25 m (p86), línea 51.6 m (p89). Visita (ganó 7, empató 3, perdió 7): 13.40 % (p15), 51.3 % (p18), 11.9 entradas (p21), 11.35 tiros (p20), 3.53 córners (p6), xG 1.04, xG por tiro 0.10 (p81), xG concedido 1.13 (p43), en transición 0.65 (p82), xG rival tras pérdida 0.30 (p94), 64.2 % de tiros concedidos desde el área (p89)"
- kpi: "13 % | 18 % | de sus ataques terminan en tiro | 15 | Ataques que terminan en tiro de visita | contra | de local"
- definiciones: D-20, D-02, D-12
- decision: "Rival: en su cancha, no entrar en el intercambio: cerrar el área y aceptar el tiro lejano; en la tuya, atacarlo en contragolpe, concede casi el doble de peligro así. Staff: de visita el equipo llega al último tercio 8 puntos menos y no genera córners; hace falta un plan de visita con el balón, porque el de repliegue ya concede 1.13"
El peligro creado es idéntico en casa y fuera (1.04), pero por caminos distintos: en casa llega, tira y saca córners; fuera tira menos y mejor (0.10 por tiro). Lo que cambia de verdad es la defensa: de visita baja la línea 4 metros y aun así concede casi el doble en contragolpe y 64 % de los tiros desde dentro del área. Siete de sus 10 derrotas son de visita.

### Perdiendo sube la presión a 62 metros pero presiona tras pérdida un tercio menos: 19 por 90
- bloque: M-2
- escenario: marcador
- metrica: counterpressures
- cifra: "Perdiendo (989 min en 17 partidos): altura de presión 62.4 m (p90), contrapresiones 18.7 por 90 (p2), presiones 105.3 (p22), PPDA 12.9, posesión 51.6 %, field tilt 55.1, 14.0 centros, xG 0.93 (p33), tiros concedidos 8.0 (p19), xG concedido en transición 0.58 (p70), faltas 13.5 (p92). Ganando (1100 min en 19): contrapresiones 25.1 (p43), altura 53.2 m, posesión 38.8 %, field tilt 37.1, 5.8 centros, tiros concedidos 14.2 (p59), 15.4 entradas del rival, xG concedido en transición 0.27 (p20), xG concedido 1.11 (p35)"
- kpi: "18.7 | 25.1 | presiones tras pérdida por cada 90 minutos | 2 | Presión tras pérdida cuando va perdiendo | contra | cuando va ganando"
- definiciones: D-21, D-06, D-13
- decision: "Rival: si vas arriba, aguantar los centros (14 por 90) y salir rápido al perder él la pelota: su equipo adelanta la línea pero no reacciona a la pérdida. Si vas abajo, él se encierra y concede 14 tiros por 90, casi todos de poco valor: insistir por dentro del área. Staff: perdiendo, el equipo empuja con el balón y los centros pero deja de presionar la pérdida; es el momento de exigir la contrapresión, no de soltarla"
Con el marcador en contra el equipo cambia de piel: más balón (52 %), más territorio (55 %), más centros (de 5.8 a 14 por 90) y la presión 9 metros más arriba, pero la presión tras pérdida cae a 19 por 90, de las más bajas de la liga, y el peligro creado no sube (0.93 por 90, apenas arriba de empatando). Ganando ocurre lo contrario: se repliega con 39 % de posesión, concede 14 tiros por 90 pero solo 0.27 de peligro en contragolpe; el repliegue le funciona mejor que el empuje.

### Primer cuarto de hora blindado: 0.42 de peligro concedido por 90, de los más bajos de la liga
- bloque: M-2
- escenario: momento
- metrica: xg_conceded
- cifra: "0-15: xG concedido 0.42 por 90 (p2), 7.7 tiros concedidos (p14), 9.3 entradas del rival (p29), xG concedido en transición 0.11 (p14), altura de presión 61.25 m (p81), 152.7 presiones, 116.7 pérdidas (p62), xG 0.57 (p21). 15-30: xG concedido 1.10 (p60), en transición 0.63 (p82). 30-45: 1.41 (p74), en transición 0.65 (p83). Por tercios: 0-30 xG concedido 0.76 (p18) y xG 0.75; 30-60 1.21 y 0.95; 60-90 1.24 (p41) y 1.04, con PPDA 13.9 (p86) y 22.4 contrapresiones (p18)"
- kpi: "0.42 | 1.43 | goles esperados en contra por cada 90 minutos | 2 | Peligro concedido del minuto 0 al 15 | favor | liga en ese tramo"
- definiciones: D-22, D-13, D-04
- decision: "Rival: no gastarse en los primeros 15 minutos, está cerrado y presionando a 61 metros; el hueco se abre entre el 15 y el 45, cuando concede 6 veces más en contragolpe. Staff: lo que funciona al arranque (presión alta, línea junta) se diluye a partir del 15; la primera pausa de hidratación o el primer córner son el momento de reordenar"
Arranca los partidos con la presión más alta del partido (61 metros) y casi sin conceder, aunque también sin crear (0.57 por 90). Entre el 15 y el 45 la presión baja 6 metros y aparecen los contragolpes en contra: de 0.11 por 90 a 0.63 y 0.65. En el último tramo el equipo deja dar 14 pases antes de robar, de lo menos intenso de la liga en ese momento, y crea su mayor peligro (1.04 por 90) con el partido ya abierto.

### Arranca los torneos sin ataque: 0.76 de peligro creado en las primeras cuatro jornadas
- bloque: M-1
- escenario: tabla
- metrica: np_xg
- cifra: "Arranque J1-J4 (8 partidos; ganó 3, empató 3, perdió 2): xG 0.76 (p4), 10.6 tiros (p9), 10.6 entradas al área (p7), 12.9 % de secuencias con tiro (p7), 3.6 córners (p7), xG de córner 0.07 (p3), 54.6 % de tiros de fuera (p99), 17.0 entradas del rival (p86), xG concedido 0.93, xG concedido de balón parado 0.12 (p0). En zona directa (10 partidos; ganó 6, empató 3, perdió 1): xG 1.30 (p75), 15.9 tiros (p88), 17.7 entradas (p92), field tilt 55.6 (p74), PPDA 12.75 (p38), faltas 17.3 (p99), xG concedido 0.91 (p17)"
- kpi: "0.76 | 1.30 | goles esperados por partido | 4 | Peligro creado en las primeras cuatro jornadas | contra | con el equipo ya en zona de liguilla directa"
- definiciones: D-23, D-02, D-12
- decision: "Rival: enfrentarlo en las primeras jornadas es la mejor ventana; llega poco al área y tira de lejos. Staff: el arranque de torneo es el momento de más riesgo, con los dos equipos; una pretemporada que fije antes el once (hoy tarda en encontrarlo) vale puntos"
Con Pachuca arrancó el Clausura 2026 en el puesto 11 y llegó a la última jornada tercero; con Pumas perdió 0-3 ante Pachuca en la primera jornada del Apertura 2026. En las primeras cuatro jornadas su equipo llega al área 10.6 veces por partido y más de la mitad de sus tiros son de fuera, de lo más alto de la liga. Cuando se instala en zona de liguilla directa aparece su mejor versión: 17.7 llegadas al área, su presión más intensa (12.75 pases antes de robar) y 6 ganados de 10. Con la liguilla directa ya asegurada perdió los dos partidos que jugó (Tijuana 1-3 y Pumas 0-2), concediendo 2.09 de peligro en contragolpe: muestra chica, pero es un indicio de desconexión.

### Cuando persigue la liguilla directa cede el balón (42 %) y concede 1.38, arriba de la liga
- bloque: M-2
- escenario: tabla
- metrica: np_xg_conceded
- cifra: "Directa alcanzable (9 partidos; ganó 4, empató 2, perdió 3): xG concedido 1.38 (p81), diferencia de xG -0.67 (p8), posesión 42.4 % (p7), PPDA 18.5 (p91), field tilt 40.4 (p15), contrapresiones 23.6 (p2), tiros concedidos 14.9 (p73), 69.1 % de tiros concedidos desde el área (p99), xG concedido de balón parado 0.72 (p93), goles concedidos de balón parado 0.67 (p86), xG concedido en transición 0.69 (p87). Ganando en esos partidos (332 min en 6): xG concedido 1.97 por 90, 17.6 tiros concedidos, 17.6 entradas del rival. En zona directa: xG concedido 0.91 (p17), posesión 49.6 %"
- kpi: "1.38 | 0.91 | goles esperados en contra por partido | 81 | Peligro concedido cuando la liguilla directa está al alcance pero no asegurada | contra | cuando ya está en zona directa"
- definiciones: D-23, D-21, D-05b, D-07
- decision: "Rival: si su equipo llega a la jornada peleando el puesto directo, atacarlo con balón parado y con llegadas al área; concede 69 % de los tiros desde dentro. Staff: la ansiedad de tabla se nota en que el equipo suelta el balón y deja de presionar la pérdida (23.6 por partido); conviene jugar esas jornadas con el plan de zona directa, que es el que gana"
Siete de esos 9 partidos son del Apertura 2026 con Pumas, así que la muestra mezcla contexto de tabla y plantilla. Aun así el patrón es nítido: con el puesto directo en juego el equipo tiene el balón menos que el 93 % de la liga, deja dar 18.5 pases antes de robar y concede desde todos lados, en contragolpe y a balón parado. Y cuando se pone en ventaja en esos partidos se encierra mal: 1.97 goles esperados en contra por cada 90 minutos ganando (6 partidos, indicio), el peor registro de todos sus cortes por marcador y tabla.

### Contra los seis de arriba suelta el balón: 41 % de posesión y deja dar 18.7 pases antes de robar
- bloque: M-2
- escenario: rival
- metrica: ppda_own
- cifra: "Top 6 (14 partidos; ganó 6, empató 4, perdió 4): posesión 41.1 % (p6), PPDA 18.65 (p92), field tilt 43.25 (p24), pases progresivos 82.1 (p7), precisión de pase 75.8 % (p17), salida larga 60.0 % (p89), fases de presión 24.4 (p16), tiros concedidos 14.6 (p68), 16.0 entradas del rival (p76), recuperaciones altas con tiro 39.4 % (p92), xG 0.98 vs concedido 1.13, xG concedido en transición 0.39 (p19), primer cambio al 56.4'. Resto (21; ganó 11, empató 4, perdió 6): posesión 49.3 %, PPDA 13.92 (p54), 24.05 % de fases altas (p96), línea defensiva 50.95 m (p85), faltas 15.8 (p93), tiros concedidos 11.2 (p14), xG 1.08 vs concedido 0.95, xG concedido en transición 0.57 (p67), primer cambio al 51.9'"
- kpi: "18.7 | 13.9 | pases que deja dar al rival antes de robar | 92 | Intensidad de presión contra rivales del top 6: más pases es menos presión | neutro | contra el resto"
- definiciones: D-25, D-05b, D-01
- decision: "Rival de arriba: va a tener el balón; ojo con el robo alto de su equipo, que contra los grandes remata en 10 segundos el 39 % de las veces. Rival de abajo: esperar presión alta, línea a 51 metros y 16 faltas; salir largo a la espalda. Staff: son dos planes con resultados parecidos (43 % y 52 % de victorias); el de bloque bajo contra los grandes se entiende, pero el de presión contra el resto es el que concede el contragolpe (0.57 contra 0.39)"
Contra el top 6 el equipo renuncia al balón (41 % de posesión, menos que el 94 % de la liga), sale largo y espera; concede más tiros pero el peligro concedido apenas sube (1.13 contra 0.95), y pega en el robo alto. Contra el resto presiona en campo rival más que el 96 % de la liga, adelanta la línea y corta con falta. El cambio es de plan, no de rendimiento: 6 ganados de 14 contra los grandes y 11 de 21 contra los demás.

### Con Pumas la presión se desplomó: 114 presiones y 20 rachas por partido, de las más bajas de la liga
- bloque: M-2
- escenario: torneo
- metrica: pressures
- cifra: "Apertura 2026 (Pumas, 12 partidos; ganó 4, empató 4, perdió 4): presiones 113.8 (p1), fases de presión 19.75 (p2), contrapresiones 21.0 (p0), PPDA 17.3 (p86), presiones en último tercio 24.75 (p7), altura de presión 54.3 m (p28), línea defensiva 45.8 m (p26), xG concedido 1.18 (p54), 17.6 entradas del rival (p90), 68.1 % de tiros concedidos desde el área (p98), faltas 12.25 (p19), xG rival tras pérdida 0.16 (p45). Clausura 2026 (Pachuca, 21; ganó 12, empató 4, perdió 5): presiones 154.95 (p56), 28.8 fases (p50), 30.3 contrapresiones (p35), PPDA 15.45 (p71), 38.9 en último tercio (p75), altura 58.2 m (p86), línea 51.6 m (p89), xG concedido 0.97 (p24), 13.0 entradas (p34), 56.0 % desde el área (p33), faltas 16.2 (p95), xG rival tras pérdida 0.33 (p97). Apertura 2025 (Pachuca, 2 de play-in): 210 presiones (p99), muestra chica"
- kpi: "114 | 155 | presiones por partido | 1 | Presiones por partido en el Apertura 2026 con Pumas | contra | en el Clausura 2026 con Pachuca"
- definiciones: D-26, D-05, D-13
- decision: "Rival de Pumas: jugar desde atrás sin miedo, la presión llega 25 veces por partido en el último tercio, de las más bajas de la liga; el peligro está en llegar al área, donde concede 68 % de los tiros. Staff: la caída no es de intensidad individual sino de estructura: la línea bajó 6 metros y el equipo dejó de ir; recuperar la línea a 50 metros es el primer ajuste, antes que cualquier cambio de dibujo"
De un torneo al otro el equipo pasó de presionar como la liga a presionar menos que el 99 % de ella, con 41 presiones menos por partido, un tercio menos de rachas y la presión tras pérdida más baja de la liga. Lo que mejoró con el repliegue fue la vulnerabilidad tras pérdida (de 0.33 a 0.16); lo que empeoró fue todo lo demás: 4.6 llegadas al área del rival más por partido, 12 puntos más de tiros desde el área y 0.21 más de peligro concedido por partido. El Apertura 2025 son solo dos partidos de play-in con Pachuca.

### En liguilla cambia de plan por rival: 32 % de dominio territorial en cuartos, 70 % en semis
- bloque: M-1
- escenario: fase
- metrica: field_tilt
- cifra: "Cuartos vs Toluca (2 partidos, ganó los 2): field tilt 32.2 (p1), xG en transición 1.10 (p100), 6.0 tiros en transición (p100), conversión de transición 10.17 % (p99), 10.4 % de fases altas (p1), 51.2 % de secuencias nacidas en tercio defensivo (p97), 4.5 tiros rivales tras pérdida (p100). Semis vs Pumas (2; ganó 1, perdió 1): field tilt 70.3 (p100), 39.6 % de fases altas (p100), 78.5 % de pases bajo presión completados (p99), 2.0 tiros en transición (p1), xG en transición 0.10 (p0), 117 presiones (p3). Play-in del Apertura 2025 (2; ganó 1, perdió 1): 210 presiones (p99), 42.5 fases de presión (p99), PPDA 10.65. Fase regular (29; ganó 13, empató 8, perdió 8): field tilt 47.0 (p37)"
- kpi: "32 % | 70 % | del juego en campo rival | 1 | Dominio territorial en cuartos de final, 2 partidos | neutro | en semifinales, 2 partidos"
- definiciones: D-24, D-03, D-05
- decision: "Rival en liguilla: no hay un solo plan que esperar; contra Toluca cedió el campo y mató en transición, contra Pumas presionó y tuvo el balón. Leer el rival que le toca, no el torneo. Staff: la flexibilidad es real y funcionó (4 ganados y 2 perdidos entre play-in y liguilla), pero cada plan son 2 partidos; es patrón, no ley"
Seis partidos de eliminación directa en total, todos con Pachuca: el play-in del Apertura 2025, donde ganó 3-1 a Pumas y quedó fuera al perder 1-2 con Juárez, y la liguilla del Clausura 2026, donde eliminó a Toluca en cuartos jugando replegado y con el mejor contragolpe de todos sus cortes, y cayó en semis ante Pumas dominando el territorio más que el 99 % de la liga pero sin contragolpes. En el play-in presionó el doble de su media (210 presiones). Cada categoría son 2 partidos: orientativo.

## Balón parado (M-4)

### Córner cerrado como firma: 58 % de sus córners, de los más altos de la liga, y es su peor envío
- bloque: M-4
- metrica: corner_inswing_pct
- cifra: "Córners inswinging 58.3 % vs 34.9 % de liga (p97); 166 córners, 5 goles; por envío: inswinging 88 córners, 35 tiros, xG 1.91, 2 goles (0.022 por córner vs 0.039 de liga); outswinging 32, 22 tiros, xG 2.12, 0 goles (0.066 por córner); corto 25, 12 tiros, xG 0.93, 3 goles (0.037 por córner); xG por córner total 0.03 vs 0.04 (p26); 52.4 % desde la izquierda; con Pachuca 58.7 % cerrados, con Pumas 57.5 %; desde la derecha cerrados 36 córners, 13 tiros, xG 0.43"
- kpi: "58 % | 35 % | de sus córners son cerrados, con efecto hacia la portería | 97 | Córners cerrados | neutro"
- definiciones: D-07
- decision: "Rival: defender en zona el área chica y el primer palo con el portero saliendo, el 58 % de los envíos va hacia la portería; cuidado con el corto por la izquierda, que es donde han entrado 3 de sus 5 goles. Staff: el cerrado produce 0.022 por córner, un tercio que el abierto (0.066); invertir la mezcla o al menos igualarla vale un gol por torneo"
Es el rasgo de balón parado que más viaja: con Pachuca y con Pumas más de la mitad de los córners son cerrados, cuando la liga abre más de los que cierra. El problema es que ese envío es el que menos rinde: 88 córners cerrados para 2 goles y menos peligro por córner que la liga, mientras que los 32 abiertos generaron más peligro total (2.12) sin gol y los 25 cortos dieron 3 goles. El saque cerrado desde la derecha es el más pobre: 36 córners para 13 tiros y 0.43 de peligro.

### Balón parado ofensivo de los más bajos de la liga: 0.29 de peligro por partido contra 0.47
- bloque: M-4
- metrica: sp_xg
- cifra: "xG de balón parado 0.29 vs 0.47 (p6); goles de balón parado 0.29 vs 0.44 (p15); 10 goles de balón parado en 35 partidos: 6 de córner, 3 de penal, 1 de tiro libre; xG de córner 0.14 vs 0.18 (p28); tiro libre indirecto 0.04 vs 0.07 (p25); 162 tiros libres a favor, 18 directos, 3 goles; con Pachuca 0.24 (p2) y 0.17 goles por partido (p3), con Pumas 0.39 (p32) y 0.50 (p69); saques de banda en zona de peligro 7.0 vs 7.72 (p29), xG tras saque 0.02 (p50)"
- kpi: "0.29 | 0.47 | goles esperados de balón parado por partido | 6 | Peligro creado a balón parado | contra"
- definiciones: D-07
- decision: "Rival: en su balón parado ofensivo se puede defender con menos gente y dejar dos arriba para el contragolpe; casi no genera. Staff: es la mayor reserva de puntos que tiene: pasar de 0.29 a la media de la liga son unos 3 goles por torneo; empezar por los tiros libres al área (20 tiros en 35 partidos) y por el córner abierto"
Con Pachuca anotó 4 goles de balón parado en 23 partidos y 2 en 103 córners, de lo más bajo de la liga. Con Pumas mejoró (6 en 12, 3 de córner en 63 córners), pero sobre todo por 2 penales. Los tiros libres casi no cuentan: 162 cobros y 3 goles, 18 directos sin gol. Para un equipo que crea poco en juego abierto (1.04), no sumar a balón parado deja al ataque sin red.

### Nueve penales en contra y tres a favor en 35 partidos; 8 de los 9 entraron
- bloque: M-4
- metrica: sp_goals_conceded
- cifra: "Penales en contra 9 (8 goles, xG 7.05), a favor 3 (3 goles); 16 goles concedidos de balón parado: 8 de penal, 5 de córner, 1 de saque de banda, 1 de tiro libre, 1 de tiro libre directo; goles concedidos de balón parado 0.46 vs 0.45 (p56); xG concedido de balón parado 0.43 vs 0.48 (p41); xG por córner concedido 0.03 vs 0.04 (p42); 158 córners en contra, 6 goles; faltas 14.86 vs 13.55 (p83), con Pachuca 16.2 (p94); en derrotas 0.90 goles concedidos de balón parado por partido (p99) y 0.76 de xG (p95), en victorias 0.24 (p12)"
- kpi: "9 | 3 | penales en 35 partidos | | Penales en contra | contra | a favor"
- definiciones: D-07, D-12
- decision: "Rival: buscar el contacto dentro del área, su equipo comete 15 faltas por partido y la mitad de los goles de balón parado que concede son penales. Staff: el córner y el tiro libre en contra están controlados (6 goles de córner en 158); el agujero es la falta en el área: trabajar la defensa del área sin manos y sin agarrones es el ajuste más barato del año"
La mitad de lo que le anotan a balón parado son penales, en un equipo que corta con falta más que el 83 % de la liga (con Pachuca, más que el 94 %). Defendiendo córners es un equipo normal: concede 0.03 de peligro por córner, menos que la liga. Y el balón parado en contra separa resultados: en las 10 derrotas concede 0.90 goles de balón parado por partido, de lo más alto de la liga; en las 17 victorias, 0.24.

### Con Pumas pierde la mitad de los saques de banda cerca del área: 52 % retenidos contra 65 % con Pachuca
- bloque: M-4
- escenario: equipo
- metrica: throwin_retention_pct
- cifra: "Saques en zona de peligro retenidos: con Pumas 51.6 % (p15), con Pachuca 64.9 % (p63), total 60.3 % vs 61.1 % de liga (p46); saques de banda en zona de peligro 7.0 por partido (p29), con Pumas 7.25; xG tras saque de banda con Pumas 0.05 (p89), con Pachuca 0.00 (p9); 245 saques en zona de peligro, 2 goles, 61.2 % retenidos en total; en contra 235, 65.5 % retenidos por el rival, 1 gol"
- kpi: "52 % | 65 % | de los saques de banda cerca del área rival que conserva | 15 | Saques de banda cerca del área que conserva, con Pumas | contra | con Pachuca"
- definiciones: D-07, D-26b
- decision: "Rival de Pumas: presionar el saque de banda en campo propio, uno de cada dos lo pierde y ahí nace el contragolpe. Staff: el saque de banda es la única jugada a balón parado donde Pumas crea algo (0.05 por partido, arriba de la liga), pero la pierde la mitad de las veces; definir dos rutinas fijas de saque largo y corto"
Es una diferencia de plantilla más que de modelo: con Pachuca el saque de banda cerca del área se conservaba más que la liga y no generaba nada; con Pumas genera algo de peligro pero se pierde la mitad. En 35 partidos los saques de banda dejaron 2 goles a favor y 1 en contra: son la jugada menos relevante de su balón parado, pero cada saque perdido cerca del área rival es una pérdida con el equipo volcado, justo el escenario donde más sufre.

## Jugadores y cambios (M-5)

### 4-2-3-1 con Pachuca (13 de 21), 4-4-2 con Pumas (5 de 12); perdiendo acaba en 4-4-2 y 4-4-1-1
- bloque: M-5
- metrica: tactical_shifts
- cifra: "Dibujo inicial: 4231 en 17 de 35 (49 %), 433 en 7 (20 %), 442 en 5 (14 %), 352 en 3 (9 %); Clausura 2026 con Pachuca: 4231 en 13 y 433 en 5; Apertura 2026 con Pumas: 442 en 5, 433 en 2, 4231 en 2, 352 en 2, 343 en 1; cambio real de dibujo en 20 de 35 partidos, 68 cambios de dibujo en total (1.94 por partido vs 1.80, p62), con Pumas 2.33 (p88); cambios de dibujo por estado: perdiendo 11, ganando 10, empatando 6; perdiendo del minuto 70 en adelante 442 en 26 a 33 % de los minutos y 4411 en 16 a 21 %; empatando desde el minuto 40 el 433 pasa a ser el dibujo más usado (41 a 42 %); ganando el 4231 se mantiene en 50 a 66 % hasta el final"
- kpi: "49 % | | de los partidos | | Partidos que arranca en 4-2-3-1 | neutro"
- definiciones: SB, D-21, D-26
- decision: "Rival: contra Pumas el once sale en 4-4-2 o 3-5-2 (7 de 12), no en el 4-2-3-1 de Pachuca; si va perdiendo después del 70, esperar dos delanteros y luego un 4-4-1-1. Staff: el dibujo ya no es la constante del modelo; lo que viaja es el cambio a dos puntas perdiendo. Con Pumas el cambio de dibujo por partido subió a 2.3, señal de que todavía no encuentra el sistema"
Con Pachuca el sistema fue uno, 4-2-3-1 en 13 de 21 partidos del Clausura 2026 con 4-3-3 como alternativa; con Pumas probó cinco dibujos distintos en 12 partidos y el más repetido fue el 4-4-2, apenas 5 veces. Lo que sí es consistente es la reacción al marcador: perdiendo, el 4-2-3-1 cede el paso al 4-4-2 desde el minuto 45 y al 4-4-1-1 en el cierre; empatando, el 4-3-3 toma el mando a partir del minuto 40; ganando, no toca el dibujo.

### Perdiendo cambia al 53' y el primer cambio sube la presión 8 metros y el dominio a 58 %, pero no crea más
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio: perdiendo al 53.0' (mediana 51'), empatando al 49.2' (mediana 48'), ganando al 57.2' (mediana 63'); media 53.71 vs 53.87 de liga (p48); por tabla: directa asegurada 45.0', arranque 50.6', directa alcanzable 52.0', zona directa 55.2', play-in 59.0', liguilla 61.8'; contra el top 6 56.4', contra el resto 51.9'. 15 min antes vs después perdiendo (14 partidos): xG 0.11 a 0.08, xG concedido 0.44 a 0.30, tiros 2.1 a 1.6, field tilt 47 a 58, altura de presión 58 a 66 m. Empatando (8): xG 0.08 a 0.19, xG concedido 0.10 a 0.22, PPDA 17.8 a 39.2, field tilt 42 a 35. 4.5 cambios por partido, 147 tácticos y 12 por lesión"
- kpi: "53' | 57' | minuto del primer cambio | 48 | Minuto del primer cambio cuando va perdiendo | neutro | cuando va ganando"
- definiciones: D-21, D-23, SB
- decision: "Rival: tras su primer cambio perdiendo, su equipo sube 8 metros y domina el territorio, pero concede menos y crea menos; es el momento de guardar el balón, no de atacar. Staff: el primer cambio perdiendo corrige la defensa (de 0.44 a 0.30) pero no el ataque (de 0.11 a 0.08 en 15 minutos); conviene que el primer cambio perdiendo sea un atacante que remate, hoy saca medios y laterales"
No es un técnico que cambie temprano ni tarde: su minuto medio es el de la liga, y cambia antes empatando (49') que perdiendo (53'). El efecto es distinto según el marcador. Perdiendo, el cambio empuja al equipo hacia adelante (presión a 66 metros, 58 % del territorio) y cierra atrás, pero el peligro creado baja. Empatando, el cambio abre el partido en las dos áreas y el equipo deja de presionar (de 18 a 39 pases que deja dar). Cuanto más hay en juego, más tarda: 45' con la liguilla asegurada, 62' en liguilla.

### Ganando saca a los de arriba (40 de 67 cambios); perdiendo, pivotes y laterales (21 de 56)
- bloque: M-5
- metrica: first_sub_minute
- cifra: "A quién saca ganando: extremo izquierdo 11, extremo derecho 11, delantero centro 10, mediapunta 8, interior izquierdo 5, lateral derecho 5 (67 cambios, minuto medio 73.6'). Perdiendo: pivote derecho 7, volante derecho 6, volante izquierdo 5, pivote izquierdo 5, lateral izquierdo 5, lateral derecho 4 (56 cambios, minuto medio 67.3'). Empatando: extremo izquierdo 6, extremo derecho 3, volante derecho 3, delantero 3 (36 cambios, 66.1'). Motivos: 147 tácticos, 12 por lesión"
- kpi: "40 | 67 | cambios | | Cambios ganando en los que saca a un extremo, al delantero o al mediapunta | neutro | cambios totales ganando"
- definiciones: D-21, SB
- decision: "Rival: si él va ganando, los que entran son extremos frescos para correr al contragolpe; cerrar los costados del minuto 70 en adelante. Si va perdiendo, saca contención y laterales: el medio campo queda con menos cuerpo para la segunda pelota, atacar por el centro tras su pérdida. Staff: perdiendo, sacar al pivote y al lateral deja al equipo sin la presión tras pérdida que ya es la más baja de la liga en ese estado (19 por 90); revisar si la remontada pasa por un delantero de más o por un medio que presione"
Ganando usa el cambio para refrescar la presión y el contragolpe: 40 de los 67 cambios son de los cuatro de arriba, y los hace tarde (minuto 74). Perdiendo sacrifica estructura: pivotes, volantes y laterales se van para meter atacantes, y es justo en ese estado donde la presión tras pérdida se desploma y el peligro del rival en contragolpe sube a 0.58 por 90. Empatando repite el patrón de ganando pero más temprano (minuto 66).

### Núcleo fijo atrás con Pachuca (Moreno, Bauermann y Barreto, 20 de 21) y once nuevo con Pumas
- bloque: M-5
- metrica: xi_stability
- cifra: "Estabilidad del once (Jaccard entre onces consecutivos) 0.70; 2.3 titulares distintos de un partido al siguiente; más usados: Moreno 22 titularidades (63 %, 1951 min), Bauermann 22 (1933 min), Barreto 22 (1933 min), García Carpizo 21 (1724 min), Idrissi 21 (1443 min), Rivera Cuéllar 19 (1649 min), Kenedy 17 (1369 min), Sánchez Nava 15 (1264 min), Rondón 13 (1235 min). Núcleo Clausura 2026 (8 jugadores con 70 % o más): Barreto, Moreno y Bauermann 20 de 21 (95 %), Idrissi, Rivera Cuéllar y García Carpizo 19 (90 %), Kenedy y Sánchez Nava 15 (71 %). Núcleo Apertura 2026 (9): Keylor Navas, Nathanael Silva y Rodrigo López 12 de 12, Antuna, Robert Morales y Olávio Júnior 11, Rubén Duarte y Pedro Vite 10, Arteaga 9"
- kpi: "20 | 21 | partidos como titulares | | Partidos del Clausura 2026 que arrancaron Moreno, Bauermann y Barreto | neutro | partidos del torneo"
- definiciones: SB, D-26
- decision: "Rival: la base de su equipo es portero y centrales fijos, el resto rota; atacar a los que entran por fuera, no a la pareja central. Staff: el núcleo es defensivo con los dos equipos (portero, centrales, lateral derecho); el frente de ataque cambia cada semana, y eso se nota en que el ataque no acumula peligro; fijar al menos dos de los cuatro de arriba"
Con Pachuca el once tenía seis fijos (portero, los dos centrales, el lateral izquierdo García Carpizo, el pivote Rivera Cuéllar y el extremo Idrissi) y el resto rotaba; con Pumas armó un núcleo de nueve en 12 partidos con Keylor Navas, Nathanael Silva y Rodrigo López en todos, pero con cinco dibujos distintos. Cambia 2.3 titulares por partido, una estabilidad media, y el frente de ataque es la zona de rotación: Rondón 13 titularidades, Alexei Domínguez 12, Morales 11. En 35 partidos nadie llega al 70 % de titularidades porque la base cambió entera entre un equipo y otro.

## Por equipo: qué viaja con Solari (Pumas, Apertura 2026, 12 partidos, confianza media por la muestra)

### Con Pachuca defendía a 52 metros y salía largo (62 %); con Pumas, a 46 metros y salida corta (44 %)
- bloque: M-2
- escenario: equipo
- metrica: def_line
- cifra: "Pachuca (23 partidos; ganó 13, empató 4, perdió 6): línea defensiva 51.56 m (p89), altura de presión 58.1 m (p83), presiones en último tercio 39.8 (p80), salida larga 62.0 % (p93), faltas 16.2 (p94), directness permitida 0.56 (p7), xG concedido 0.94 (p19), 12.6 entradas del rival (p28), 55.6 % de tiros concedidos desde el área (p28), xG rival tras pérdida 0.31 (p96). Pumas (12; ganó 4, empató 4, perdió 4): línea 45.81 m (p26), altura 54.3 m (p28), 24.75 presiones en último tercio (p7), salida larga 43.8 % (p42), faltas 12.25 (p19), xG concedido 1.18 (p54), 17.6 entradas (p90), 68.1 % desde el área (p98), xG rival tras pérdida 0.16 (p45)"
- kpi: "46 | 52 | metros desde su portería | 26 | Altura de la defensa con Pumas | contra | con Pachuca"
- definiciones: D-26b, D-13, D-04
- decision: "Rival de Pumas: el equipo defiende 6 metros más atrás que el Pachuca de Solari y deja llegar al área 17.6 veces por partido; centros y llegadas por dentro, no pelotas a la espalda. Staff: lo que no viajó es la altura; con Pachuca el precio de esa altura era el contragolpe tras pérdida (0.31, de los más altos de la liga), con Pumas el precio de bajarla es conceder dentro del área. El punto medio está en subir la línea a 49 o 50 metros con la contrapresión entrenada"
Son dos equipos con el mismo técnico: el Pachuca de Solari era alto, de salida larga y con faltas, concedía poco y lejos del área pero sufría cada pérdida; el Pumas de Solari es bajo, de salida corta y limpio, sufre menos la pérdida pero concede más, más cerca y más seguido. La diferencia acompaña al récord: 57 % de victorias con Pachuca, 33 % con Pumas. Doce partidos con Pumas son una muestra media; el cambio de altura, sin embargo, es de 6 metros y se ve en todas las piezas (presión, portero, faltas).

### Lo que viaja con Solari: 46 % de posesión, 59 % de regates logrados y 7 % de robos con tiro
- bloque: M-3
- escenario: equipo
- metrica: transition_conv_pct
- cifra: "Pachuca vs Pumas: posesión 45.6 % (p20) vs 46.8 % (p23); regates completados 59.0 % (p83) vs 60.0 % (p87); conversión de transición 7.32 % (p80) vs 7.49 % (p85); córners cerrados 58.7 % vs 57.5 % (p97 los dos); xG 1.06 (p36) vs 1.00 (p30); fases de presión con recuperación 26.8 % (p8) vs 31.0 % (p51); OBV ofensivo 1.27 vs 1.24; pases progresivos 94.65 vs 91.8; xG de balón parado 0.24 (p2) vs 0.39 (p32); precisión de pase 78.5 % vs 77.0 %"
- kpi: "7.5 % | 7.3 % | de los ataques tras robo terminan en tiro | 85 | Robos que acaban en tiro con Pumas | neutro | con Pachuca"
- definiciones: D-26b, D-03, D-01, D-14
- decision: "Rival: contra cualquier equipo de Solari esperar lo mismo con el balón: poca posesión, poco pase que avanza, regate seguro y remate rápido tras robo; la forma de defenderlo no cambia con la plantilla. Staff: la identidad ofensiva viaja completa, incluida su debilidad (peligro creado abajo de la liga con los dos); lo que no viaja es la presión y la altura, que son de plantilla y de tiempo de trabajo"
Con el balón el técnico se reconoce en los dos equipos: posesión abajo de la liga, poco volumen de pases que avanzan, regate eficaz, córner cerrado y ataques tras robo que terminan en tiro arriba de la liga; y en los dos crea menos peligro que la media (1.06 y 1.00). Lo que cambió entre equipos está en la defensa y en el balón parado ofensivo, que con Pumas mejoró de 0.24 a 0.39 gracias a los penales y al saque de banda. Para el staff de Pumas el margen está en lo que sí depende de él: volumen de llegadas al área y más de un plan de salida.

## Partidos y rivales

### Invicto en 4 contra Mohamed (3-1-0) y sin puntos contra Guadalajara y Tijuana (0-0-2 cada uno)
- bloque: M-2
- metrica: xgd
- cifra: "Técnicos más enfrentados: Efraín Juárez (Pumas) 4 partidos, ganó 2 y perdió 2 (xG 1.05 a favor, 0.69 en contra); Antonio Mohamed (Toluca) 4 partidos, ganó 3 y empató 1 (0.93 a favor, 0.70 en contra); Martín Varini 3 partidos, ganó 1, empató 1, perdió 1 (1.00 y 0.81); Gabriel Milito (Guadalajara) 2 partidos, perdió los 2 (0.62 y 1.65); Sebastián Abreu (Tijuana) 2 partidos, perdió los 2 (0.50 y 1.46); Pedro Caixinha (Juárez) 2 partidos, ganó los 2 (1.94 y 1.32). Peores partidos por diferencia de peligro: Tijuana 1-3 de visita (xG 0.65 a 2.18), Guadalajara 0-2 de visita (0.52 a 2.45), Cruz Azul 3-3 de local (1.67 a 3.46), Tijuana 0-2 de visita (0.35 a 0.75). Rachas: 7 sin perder y 3 victorias seguidas (marzo y abril de 2026 con Pachuca), 2 derrotas seguidas"
- kpi: "0 | 10 | puntos en 4 partidos | | Puntos contra Guadalajara y Tijuana, 2 partidos contra cada uno | contra | contra el Toluca de Mohamed"
- definiciones: D-25, D-20
- decision: "Rival: Guadalajara y Tijuana le ganaron las cuatro veces en su propia cancha y dos de ellas con más del doble de peligro (2.45 y 2.18 de goles esperados): a Solari se le gana de local haciéndolo defender muchas llegadas. Staff: tres de sus cuatro peores partidos por peligro son derrotas de visita; el problema de visita no es de resultado, es de volumen concedido"
Contra el Toluca de Mohamed sacó 3 victorias y un empate en 4 partidos, incluidos los cuartos de final del Clausura 2026 con Pachuca y el 2-1 de visita con Pumas, siempre con menos de 0.95 de peligro concedido. Contra los Pumas de Efraín Juárez, el equipo que hoy dirige, se repartió 2 y 2 con Pachuca, incluida la eliminación en semis. Guadalajara con Milito le ganó dos veces sin que Solari pasara de 0.72 de peligro creado, y Tijuana con Abreu otras dos, con 2.18 goles esperados en la derrota con el puesto directo ya asegurado. Su mejor racha fue con Pachuca entre marzo y abril de 2026: 7 partidos sin perder, los últimos 3 ganados, que lo llevaron del puesto 11 al 3.
