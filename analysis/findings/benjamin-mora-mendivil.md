# Hallazgos — Benjamín Mora en la Liga MX (Clausura 2023 → Apertura 2026, 80 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Mora con datos: Atlas (Clausura 2023 → Apertura 2023, 34), Querétaro (Clausura 2025 → Apertura 2025, 34) y Pachuca (Apertura 2026, 12). Récord 25-21-34. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Presión que no muerde: deja dar 19 pases antes de robar, la liga deja 14
- bloque: M-2
- metrica: ppda_own
- cifra: "PPDA propio 18.6 vs 14.0 de liga (p92, de los menos intensos); 158.4 presiones por partido (p64); fases de presión con recuperación 28.5 % vs 31.2 % (p15); altura de presión 54.1 m (p26); con Atlas 14.1 (p59), con Querétaro 25.0 (p99), con Pachuca 13.3 (p46)"
- kpi: "18.6 | 14.0 | pases que deja dar al rival antes de robar | 92 | Intensidad de presión: más pases es menos intensa | contra"
- definiciones: D-05b, D-05, D-13
- decision: "Rival: salir jugando corto desde el portero; su equipo corre pero no roba, y el pase bajo presión no se castiga. Staff: convertir presiones en acciones defensivas: fijar gatillos (pase atrás, control orientado al lateral) para que la segunda presión llegue al balón y no al hombre"
Corre como la liga (158 presiones por partido) pero sus rachas de presión roban el balón menos que el 85 % de la liga y presiona a 54 metros, abajo de la media. El dato lo infla Querétaro, donde dejaba dar 25 pases, de los más pasivos que hay; con Atlas y Pachuca está en la media. Es el rasgo que más depende de la plantilla, pero ni con los equipos grandes llegó a una presión intensa.

### Juega sin el balón: 44 % de posesión y 43 % de dominio territorial, abajo de la liga
- bloque: M-1
- metrica: possession_pct
- cifra: "posesión 44.2 % vs 49.8 % (p11); field tilt 43.1 % vs 49.6 % (p23); 76.2 secuencias ofensivas vs 80.3 (p22); xG sin penales 0.95 vs 1.14 (p23); 11.7 entradas al área vs 14.0 (p20); 52.6 % de secuencias llegan al último tercio vs 55.0 % (p30); con Atlas posesión 50.4 %, con Querétaro 36.5 % (p1), con Pachuca 48.3 %"
- kpi: "44 % | 50 % | de posesión | 11 | Posesión del balón | contra"
- definiciones: D-01, D-02, D-12
- decision: "Rival: quedarse con el balón no le incomoda; lo que le incomoda es perder la segunda pelota tras el despeje. Staff: con 12 llegadas al área por partido, cada ataque que llega cerca del área tiene que terminar en tiro; hoy lo hace el 14 %, abajo de la liga"
Menos ataques que la liga (76 por partido) y menos que llegan cerca del área (53 % contra 55 %). Con Atlas tuvo el balón como cualquiera (50 %) y con Pachuca casi (48 %); con Querétaro fue el equipo con menos balón de la liga (36 %). El estilo base es ceder el balón; la caída hasta de los más bajos fue de plantilla.

### No avanza conduciendo: 30 conducciones progresivas por partido, de las más bajas de la liga
- bloque: M-1
- metrica: prog_carries
- cifra: "29.6 conducciones progresivas vs 39.0 (p9); 47.0 % de regates completados vs 53.9 % (p7); 12.4 regates intentados (p29); 92.8 pases progresivos vs 100.4 (p28); con Pachuca 40.9 conducciones (p60) y 56.3 % de regates completados, con Querétaro 24.6 (p1) y 41.5 % (p1), con Atlas 30.6 (p12) y 49.3 %"
- kpi: "29.6 | 39.0 | conducciones que avanzan por partido | 9 | Conducciones progresivas por partido | contra"
- definiciones: D-14
- decision: "Rival: presionar al que recibe de espaldas; su equipo no se zafa en el uno contra uno (pierde más de la mitad de los regates). Staff: el avance tiene que venir por pase y balón largo, no por conducción; o fichar un conductor, que es el perfil que falta en los tres equipos"
Progresa por pase (como la liga) y por balón largo, no con el balón en los pies. Con Querétaro el regate fue de los peores de la liga (41 % completado, 25 conducciones); con Pachuca sube a la media (41 conducciones, 56 % de regates), señal de que es plantilla más que modelo. Aun así, en 80 partidos nunca estuvo arriba de la liga en conducción.

### Salida larga y centro: 56 % de los pases del portero son largos y 1.05 centros por llegada al área
- bloque: M-1
- metrica: gk_long_pct
- cifra: "salida larga del portero 55.5 % vs 46.8 % (p78); 46.5 % de las secuencias nacen en tercio defensivo vs 44.5 % (p77); centros por entrada al área 1.05 vs 0.94 (p77); 33.0 % de las secuencias nacen por izquierda vs 31.7 % (p76), con Atlas 35.3 % (p95); por equipo, salida larga 54.3 % Atlas, 55.9 % Querétaro, 57.6 % Pachuca"
- kpi: "56 % | 47 % | de los pases del portero | 78 | Salida larga del portero | neutro"
- definiciones: D-02, D-10, D-11, D-12
- decision: "Rival: no presionar al portero, ganar la segunda pelota en medio campo y cerrar el carril izquierdo; con dos centrales fuertes por arriba, sus centros rinden poco. Staff: este es el rasgo que sí viaja (los tres equipos entre 54 y 58 % de salida larga); conviene un delantero que fije centrales y un segundo hombre a la caída del balón"
Es el rasgo más estable de Mora: con los tres equipos su portero juega largo arriba de la liga y el ataque nace en campo propio y por la izquierda. Lo que viene después es el centro: más de un centro por cada llegada al área, también con los tres. Es un modelo de balón largo, segunda pelota y banda, no de elaboración.

### Al robar no castiga: 0.34 de peligro creado tras robo por partido, abajo de la liga
- bloque: M-3
- metrica: transition_xg
- cifra: "xG en transición 0.34 vs 0.51 (p14); 2.9 tiros en transición vs 3.8 (p12); conversión de transición 5.0 % vs 6.3 % (p12); 60.2 transiciones ofensivas (p28); 11.1 recuperaciones altas (p34); con Atlas 0.29 (p7), con Querétaro 0.37 (p18), con Pachuca 0.37 (p20)"
- kpi: "0.34 | 0.51 | goles esperados tras robo por partido | 14 | Peligro creado tras robar el balón | contra"
- definiciones: D-03
- decision: "Rival: se puede atacar con muchos hombres; perder el balón contra su equipo cuesta poco. Staff: un equipo que cede el balón tiene que vivir del contragolpe y este no lo hace; entrenar la primera salida tras robo (dos pases hacia adelante en 5 segundos) y medir cada semana los tiros en los 10 segundos tras recuperar"
Es la contradicción del modelo: cede el balón (44 % de posesión) pero cuando lo recupera solo el 5 % de los robos termina en tiro, y eso con los tres equipos. Los partidos que gana sí vienen del contragolpe (0.59 de peligro tras robo cuando gana, 0.20 cuando pierde), lo que confirma que cuando el contragolpe aparece el equipo compite; el problema es que aparece poco.

### Cuando pierde el balón concede poco: 1.75 tiros rivales en los 10 segundos tras pérdida, abajo de la liga
- bloque: M-3
- metrica: vuln_shots
- cifra: "tiros rivales en 10 s tras pérdida 1.75 vs 2.21 (p14, bueno); xG rival tras pérdida 0.14 vs 0.18 (p31); xG concedido en transición 0.49 vs 0.52 (p48); 30.6 contrapresiones (p39) con 25.6 % de regain (p26); con Atlas 2.24 (p58), con Querétaro 1.47 (p5), con Pachuca 1.17 (p0)"
- kpi: "1.75 | 2.21 | tiros del rival por partido en los 10 segundos después de perderla | 14 | Tiros del rival justo tras una pérdida suya | favor"
- definiciones: D-04, D-06
- decision: "Rival: no esperar el contragolpe tras su pérdida; su equipo pierde el balón en zonas donde no duele (balón largo, centro). Hay que atacarlo en estático. Staff: es una virtud del balón largo, no de la presión tras pérdida (que recupera menos que la liga); no cambiarla por un modelo de posesión sin preparar antes la contrapresión"
Como ataca con balón largo y centro, pierde el balón lejos de su portería y el rival rara vez le saca tiros rápidos. Con Pachuca es de lo mejor de la liga (1.2 tiros tras pérdida) y con Querétaro también (1.5); con Atlas, que tenía más balón, el dato era normal. El peligro concedido en contragolpe total es como la liga: lo que no sufre en los primeros 10 segundos lo sufre después.

### Concede 16 llegadas al área por partido y termina con balance de peligro negativo: -0.34
- bloque: M-2
- metrica: xgd
- cifra: "diferencia de xG -0.34 vs -0.03 (p24); 15.7 entradas al área del rival vs 14.2 (p73); 14.4 tiros concedidos vs 13.6 (p65); xG concedido sin penales 1.19 vs 1.17 (p56); 59.6 % de los tiros concedidos desde el área (p64); línea defensiva 46.6 m vs 47.9 (p32); con Atlas -0.04 (p51), con Querétaro -0.67 (p9), con Pachuca -0.29 (p28)"
- kpi: "-0.34 | -0.03 | goles esperados de diferencia por partido | 24 | Balance entre el peligro que crea y el que concede | contra"
- definiciones: D-12, D-13
- decision: "Rival: llegar al área por volumen funciona (16 veces por partido); jugar el partido en su campo y meter centros rasos. Staff: el déficit es de ataque más que de defensa (concede como la liga, crea abajo); si la plantilla no permite tener más el balón, adelantar la línea defensiva (hoy 1 metro más baja que la liga) y presionar la segunda pelota para que las llegadas rivales bajen"
El balance negativo no viene de conceder mucho peligro (1.19, como la liga) sino de conceder muchas llegadas y crear poco. Con Atlas el balance fue cero; con Querétaro -0.67, de los peores, y con Pachuca -0.29 aun con el mejor ataque de su carrera. Solo 25 de 80 partidos ganados: el modelo no compensa con resultado lo que no compensa con peligro.

## Consistencia y variabilidad (D-20 a D-26)

### De visita se encoge: 0.81 de peligro creado y 10 llegadas al área, de los más bajos de la liga
- bloque: M-1
- escenario: localia
- metrica: np_xg
- cifra: "Visita 12-11-20: xG 0.81 (p7), 10.4 tiros (p7), 10.0 entradas al área (p4), xGD -0.59 (p10), altura de presión 52.5 m (p7), línea defensiva 44.7 m (p12), xG de balón parado 0.24 (p3), primer cambio al 50.7'. Local 13-10-14: xG 1.12 (p47), 13.1 tiros, 13.7 entradas al área, xGD -0.05 (p49), altura de presión 55.9 m, línea defensiva 48.7 m, primer cambio al 54.9'"
- kpi: "0.81 | 1.12 | goles esperados por partido | 7 | Peligro creado de visita | contra | de local"
- definiciones: D-20, D-13, D-12
- decision: "Rival: de local contra Mora, presionar alto desde el primer minuto; su equipo defiende 4 metros más atrás fuera de casa y no sale. Staff: de visita el plan se vuelve solo aguantar (3 metros menos de altura de presión, balón parado a la mitad); trabajar un plan de visita que conserve al menos las llegadas al área, que caen de 14 a 10"
El peligro concedido casi no cambia entre casa y fuera; lo que se desploma es el ataque: menos tiros, menos llegadas, menos balón parado. Fuera de casa su equipo defiende con la línea a 45 metros y presiona a 52, y el balance de peligro cae de cero a -0.59. El primer cambio de visita llega antes (51' contra 55' de local), señal de que el técnico ve lo mismo.

### Ganando se encierra: presiona a 49 metros y concede 15 tiros por cada 90 minutos
- bloque: M-2
- escenario: marcador
- metrica: shots_conceded
- cifra: "Ganando (2006 min): PPDA 19.6 (p90), altura de presión 49.1 m (p21), 15.2 tiros concedidos por 90 (p70), 16.9 entradas al área del rival (p75), xG 0.76 (p25), 5.8 centros, 3.3 tiros en transición (p51). Perdiendo (2899 min): PPDA 13.5 (p78), altura 57.7 m (p36), 10.5 tiros concedidos (p56), 12.5 entradas al área del rival, xG 0.95 (p34), 13.9 centros, 2.1 tiros en transición (p13)"
- kpi: "15.2 | 10.5 | tiros concedidos por cada 90 minutos | 70 | Tiros que concede cuando va ganando | contra | cuando va perdiendo"
- definiciones: D-21, D-05b, D-13
- decision: "Rival: si va abajo contra Mora, no desesperarse: su equipo va a regalar el balón y 17 llegadas al área por 90; meter centros y tiro desde fuera, porque el bloque está a 49 metros. Staff: el repliegue ganando cuesta 15 tiros por 90 y el contragolpe, que es lo único que crece ganando, solo produce 3.3 tiros; adelantar el bloque 5 metros ganando sin perder la referencia del contragolpe"
La presión cambia 6 pases según el marcador: ganando deja dar 20, perdiendo 14. Perdiendo sube el bloque casi 9 metros y recurre al centro (14 por 90, más del doble que ganando), pero el peligro creado apenas pasa de 0.76 a 0.95. Son los dos modos del equipo: aguantar con el marcador a favor y centrar con el marcador en contra.

### Arranca pasivo: en la primera media hora deja dar 19 pases antes de robar y saca 1.8 tiros tras robo por 90
- bloque: M-3
- escenario: momento
- metrica: transition_shots
- cifra: "0-30: PPDA 19.4 (p93), 154.0 presiones por 90 (p64), 1.80 tiros en transición (p9), xG 0.74 (p27), 30.0 presiones en último tercio. 60-90: PPDA 13.9 (p86), 126.7 presiones (p57), 2.77 tiros en transición (p23), xG 0.84 (p17), xG concedido 1.31. 30-60: xG 0.94 (p38), 13.7 tiros concedidos (p76). Tramo 60-75: xG concedido en transición 0.70 (p84), 13.8 faltas (p87)"
- kpi: "1.80 | 2.77 | tiros tras robo por cada 90 minutos | 9 | Tiros tras robar el balón en los primeros 30 minutos | contra | del minuto 60 al 90"
- definiciones: D-22, D-03, D-05b
- decision: "Rival: los primeros 30 minutos son para tener el balón y salir jugando sin miedo; su equipo presiona en cantidad pero no roba ni castiga. Staff: la energía inicial (154 presiones por 90) se gasta sin producto; mejor arrancar con bloque medio ordenado y guardar la presión para después del 60, cuando sí roba"
Es la presión al revés: corre más al inicio (154 presiones por 90) y roba menos (19 pases antes de una acción defensiva); al final corre menos (127) y roba más (14). El peligro creado nunca pasa de 0.94 por 90 en ningún tramo. Del minuto 60 al 75 es su tramo más expuesto al contragolpe (0.70 por 90 concedido, arriba de la liga) y el de más faltas (13.8 por 90).

### Gana y pierde a balón parado: 0.60 goles de balón parado cuando gana, 0.15 cuando pierde
- bloque: M-4
- escenario: resultado
- metrica: sp_goals
- cifra: "Ganó 25: 0.60 goles de balón parado (p86), 0.16 concedidos (p3), xG por tiro 0.11 (p95), xG en transición 0.59 (p73), conversión de transición 6.95 % (p73), xGD 0.20 (p71), 8.6 recuperaciones altas (p6), 79.5 pases progresivos (p5), 3.4 córners (p4). Perdió 34: 0.15 goles de balón parado (p2), 0.76 concedidos (p94), xG por tiro 0.06 (p0), xG en transición 0.20 (p0), xGD -0.76 (p6), xG concedido en transición 0.60 (p73)"
- kpi: "0.60 | 0.15 | goles de balón parado por partido | 86 | Goles de balón parado cuando gana | favor | cuando pierde"
- definiciones: D-07, D-03
- decision: "Rival: para ganarle, el balón parado defensivo es la mitad del trabajo; cuando no le entra el balón parado, no gana. Staff: las victorias son partidos de poco balón (79 pases progresivos, 3 córners, 9 robos altos) y mucho contragolpe (0.59 de peligro tras robo, el triple que en las derrotas); el plan ganador existe y es el de equipo chico; las derrotas son los partidos en que intenta jugar"
Cuando gana, cada tiro vale casi el doble (0.11 por tiro contra 0.06) y el balón parado en contra casi desaparece (0.16 goles concedidos por partido contra 0.76 cuando pierde). Con 34 derrotas en 80 partidos, 0.76 goles concedidos de balón parado por derrota es el dato que más pesa en su récord. Gana cuando el partido se juega a balón parado y contragolpe, no cuando tiene el balón.

### Contra los seis de arriba: 4 ganados en 27, 36 % de dominio territorial y 16 tiros concedidos
- bloque: M-2
- escenario: rival
- metrica: field_tilt
- cifra: "Top 6: 4-7-16, field tilt 36.4 % (p5), OBV ofensivo 1.13 (p9), xG concedido 1.41 (p85), 16.1 tiros concedidos (p86), OBV concedido 1.73 (p92), línea defensiva 44.9 m (p13), altura de presión 52.3 m (p6), goles de balón parado 0.26 (p13), xG rival tras pérdida 0.08 (p2). Resto: 21-14-18, field tilt 46.5 % (p36), xG concedido 1.08 (p38), 13.6 tiros concedidos (p51), línea defensiva 47.4 m, altura de presión 55.0 m"
- kpi: "36 % | 46 % | del juego en campo rival | 5 | Dominio territorial contra rivales del top 6 | contra | contra el resto"
- definiciones: D-25, D-13, D-12
- decision: "Rival grande: dominar es fácil; lo difícil es traducirlo, porque su equipo concede 16 tiros pero muy pocos rápidos tras pérdida. Paciencia, centros y balón parado. Staff: contra los de arriba el equipo baja la línea a 45 metros y pierde el balón parado a favor (0.26 goles por partido); el plan contra grandes debe al menos conservar el balón parado, que es su única arma en esos partidos"
Contra el resto gana 21 de 53; contra los seis primeros gana 4 de 27 y pierde 16. No es solo que crea menos (1.13 de valor con balón, de los más bajos): es que se mete casi 3 metros más atrás y concede 1.41 de peligro, arriba de la liga. Monterrey (0-0-5), Tijuana (0-2-3), León (0-2-3), Toluca (0-2-2) y América (0-2-2) son los rivales a los que nunca les ha ganado.

### Arranca mal los torneos: 4 ganados, 5 empatados y 11 perdidos en las primeras cuatro jornadas
- bloque: M-3
- escenario: tabla
- metrica: transition_conv_pct
- cifra: "Arranque J1-J4 (20 partidos): 4-5-11, conversión de transición 4.39 % (p4), xG en transición 0.33 (p12), goles de balón parado 0.20 (p8), salida larga 60.0 % (p89), xG concedido 1.10 (p40). Directa alcanzable (47): 13-14-20, xG concedido 1.25 (p63), fases de presión con recuperación 27.3 % (p9), goles de balón parado 0.43 (p49). Pelea play-in (7): 5-1-1, primer cambio al 62.3' (p98), goles de balón parado 0.71 (p95)"
- kpi: "4.39 % | 6.34 % | de los robos acaban en tiro | 4 | Robos que terminan en tiro en las primeras cuatro jornadas | contra | liga"
- definiciones: D-23, D-03, D-07
- decision: "Rival: enfrentarlo en las primeras jornadas es el mejor momento; su equipo todavía no tiene ni contragolpe ni balón parado. Staff: la pretemporada no le alcanza para instalar el modelo; adelantar el trabajo de balón parado (0.20 goles por partido en el arranque contra 0.43 con la liguilla directa al alcance) y jugar las primeras jornadas con el plan de equipo chico que sí le gana partidos"
En 20 partidos de arranque de torneo ganó 4. Cuando la liguilla directa sigue al alcance (47 partidos, la mayor parte de su carrera) el récord es 13-14-20 y la defensa concede 1.25, arriba de la liga. Los 7 partidos peleando el play-in (5-1-1, balón parado 0.71 goles por partido, primer cambio al 62') son un indicio de que con el equipo ya armado y poco que perder compite mejor, pero es muestra chica.

### Ganando con la liguilla en juego se encierra del todo: 7 tiros y 59 pases progresivos por 90
- bloque: M-1
- escenario: tabla
- metrica: np_shots
- cifra: "Directa alcanzable, ganando (1021 min en 16 partidos): xG 0.59, 7.32 tiros, 7.67 entradas al área, 59.0 pases progresivos, 5.03 centros, 15.5 tiros concedidos, 17.5 entradas al área del rival por 90. Perdiendo en la misma situación (1965 min en 33): xG 0.99, 11.8 tiros, 13.1 entradas al área, 93.9 pases progresivos, 14.8 centros, 10.4 tiros concedidos, 12.5 entradas al área del rival. Arranque ganando: xG 0.90, 9.57 tiros. Visita ganando: 8.09 tiros, 19.0 entradas al área del rival"
- kpi: "7.3 | 11.8 | tiros por cada 90 minutos | | Tiros cuando va ganando con la liguilla directa al alcance | contra | cuando va perdiendo en la misma situación"
- definiciones: D-23, D-21, D-12
- decision: "Rival: si Mora se pone arriba en un partido que le importa, el empate está disponible: 17 llegadas al área por 90 y 15 tiros concedidos. Insistir por banda, el bloque no sale. Staff: 59 pases progresivos por 90 ganando es renunciar a tener el balón; con un delantero que aguante y un extremo que corra se conserva el 1-0 con menos sufrimiento que con once atrás"
Es la versión extrema del repliegue ganando: en los partidos con la liguilla directa en juego y marcador a favor el equipo casi no tira (7 por 90), casi no llega (8 entradas al área) y concede 17 llegadas por 90 contra 13 cuando pierde. Es la misma película de visita ganando (8 tiros, 19 llegadas rivales por 90). En el arranque de torneo ganando aún crea 0.90 por 90; conforme el torneo pesa, ganando crea 0.59.

### Apertura 2026 con Pachuca: su mejor ataque (1.33 de peligro creado) con la defensa más expuesta (1.42 concedido)
- bloque: M-1
- escenario: torneo
- metrica: np_xg
- cifra: "Apertura 2026 (12 pj, 3-4-5, GF 19 GA 16): xG 1.33 (p78), xG concedido 1.42 (p86), 15.3 tiros (p84), OBV ofensivo 1.69 (p91), 15.9 entradas al área (p79), 17.1 % de secuencias con tiro (p84), xG concedido en transición 0.73 (p89), 16.7 faltas (p97), 61.7 % de tiros concedidos desde el área (p80), línea defensiva 50.1 m (p79). Querétaro: Clausura 2025 xG 0.70 (p2) y Apertura 2025 0.62 (p1), los dos 6-2-9, posesión 37 % y 36 %, línea defensiva 44.7 m. Atlas: Clausura 2023 1.11 (p43), Apertura 2023 1.13 (p48)"
- kpi: "1.33 | 0.62 | goles esperados por partido | 78 | Peligro creado en el Apertura 2026 con Pachuca | favor | en el Apertura 2025 con Querétaro"
- definiciones: D-26, D-04, D-13
- decision: "Staff de Pachuca: el ataque ya está arriba de la liga; lo que está matando el torneo es el contragolpe en contra (0.73, arriba de la liga) con la línea a 50 metros. Dos opciones: bajar la línea 3 metros o poner un pivote que corte contragolpes; no las dos a medias. Rival: contra este Pachuca el espacio está a la espalda de la defensa, esperar y correr"
Es el único torneo de Mora con el ataque arriba de la liga y también el de la defensa más abierta: 12 partidos, muestra media. Con Querétaro ocurrió lo contrario en dos torneos seguidos (0.62 y 0.70 de peligro creado, de los más bajos de la liga, con 36 y 37 % de posesión), y con Atlas estuvo en la media en los dos. La defensa de Pachuca concede 0.73 en contragolpe, arriba de la liga (0.52), con la línea 5 metros más adelantada que en Querétaro.

## Balón parado (M-4)

### 9 goles en 353 córners: su mejor cobro es el corto y lo usa 1 de cada 10 veces
- bloque: M-4
- metrica: corner_short_pct
- cifra: "353 córners (4.4 por partido, p30), 9 goles, xG de córner 0.15 (p34), xG por córner 0.03 (p43); córners cortos 12.2 % de media por partido (p53), 37 de 353 en el total (10.5 % vs 13.3 % liga). Por tipo: outswinging 167 (47.3 % vs 41.5 %), xG 6.02, 76 tiros, 4 goles, 0.036 por córner; inswinging 100 (28.3 % vs 35.6 %), xG 2.85, 35 tiros, 2 goles, 0.0285 por córner (liga 0.0386); corto 37, xG 2.25, 21 tiros, 1 gol, 0.0607 por córner (liga 0.0319). Corto por derecha: 18 córners, 12 tiros, xG 1.74. xG de balón parado total 0.35 (p17); con Pachuca 22.8 % de cortos (p85), con Querétaro 5.6 % (p19)"
- kpi: "12 % | 13 % | de sus córners | 53 | Córners cortos | neutro"
- definiciones: D-07
- decision: "Staff: cobrar el doble de córners cortos, sobre todo por derecha (12 tiros en 18 cobros), y menos cerrados, que rinden por debajo de la liga; con 4.4 córners por partido no hay volumen, hay que subir el rendimiento de cada uno. Rival: dos hombres al corto por derecha y no regalar el segundo balón tras el abierto desde la derecha, que es su cobro más repetido (90)"
Su córner más usado (abierto desde la derecha, 90 cobros, 45 tiros) produjo 1 gol; el corto, que casi no usa, es el único tipo donde rinde por encima de la liga por cobro, casi el doble. La inclinación por el corto depende del equipo: con Pachuca arriba de la liga (23 %), con Querétaro casi nada (6 %). En conjunto, el balón parado ofensivo está abajo de la liga (0.35 de peligro por partido) y es menor que el que concede (0.51).

### Concede 19 goles de córner en 80 partidos: 0.05 de peligro por córner en contra, arriba de la liga
- bloque: M-4
- metrica: xg_per_corner_conceded
- cifra: "419 córners en contra (5.2 por partido), 19 goles, 195 tiros, xG 16.9; xG por córner concedido 0.047 vs 0.04 (p83), con Atlas 0.049 (p85), con Querétaro 0.047 (p83), con Pachuca 0.041 (p71); goles concedidos de balón parado 0.47 (p61), xG concedido de balón parado 0.51 (p64). Outswinging desde la derecha: 100 córners, 59 tiros, xG 5.01, 5 goles; inswinging desde la derecha: 62 córners, 27 tiros, 5 goles; outswinging desde la izquierda: 54 córners, 30 tiros, 4 goles"
- kpi: "0.047 | 0.040 | goles esperados por cada córner en contra | 83 | Peligro que concede en cada córner | contra"
- definiciones: D-07
- decision: "Rival: cobrar abierto desde la derecha del ataque: 59 tiros en 100 córners contra su equipo, más de la mitad. Staff: 19 goles de córner en contra son 1 cada 4 partidos y el dato viaja con los tres equipos (todos arriba de la liga por córner); el problema es de sistema de marca, no de plantilla; revisar el primer palo y el bloqueo al rematador en el cobro abierto"
Es el rasgo defensivo más estable de Mora y el más caro: con Atlas, Querétaro y Pachuca el peligro por córner en contra estuvo arriba de la liga. A eso se suman 21 penales en contra (14 goles) frente a 10 a favor. Entre córners y penales, el balón parado en contra explica 33 goles en 80 partidos; en las derrotas concede 0.76 goles de balón parado por partido y en las victorias 0.16.

### 15 goles de tiro libre en 80 partidos, 7 de ellos directos con apenas 1.1 de peligro esperado
- bloque: M-4
- metrica: fk_direct_xg
- cifra: "379 tiros libres a favor (4.7 por partido), 15 goles, xG 7.3; 50 directos, xG 1.1, 7 goles; 56 tiros tras tiro libre al área, xG 4.7, 7 goles; xG de tiro libre directo 0.01 por partido (p35), indirecto 0.06 (p41); con Querétaro 0.01 (p5) y 0.03 (p11), con Pachuca indirecto 0.14 (p93). En contra: 446 tiros libres (5.6 por partido), 5 goles, 55 directos con xG 1.6 y 0 goles"
- kpi: "7 | 1.1 | goles de tiro libre directo en 80 partidos | 35 | Goles de tiro libre directo | favor | goles esperados de esos tiros"
- definiciones: D-07
- decision: "Staff: 7 goles con 1.1 esperados no se repite; no planear el torneo alrededor del cobrador. Lo que sí se puede repetir es el tiro libre al área (7 goles en 56 tiros, en la media) y con Pachuca ya está arriba de la liga. Rival: barrera completa y portero atento en cualquier falta frontal; es donde más les ha rendido y donde menos se espera"
El tiro libre es la parte del balón parado donde Mora saca más de lo que el peligro dice: 15 goles con 7.3 esperados, y 0 goles en contra de tiro libre directo en 80 partidos (con 1.6 esperados). Pero el volumen es bajo: su peligro por partido de tiro libre directo e indirecto está como la liga o abajo, y con Querétaro fue de los más bajos (0.01 y 0.03).

### Penales: 21 en contra y 10 a favor en 80 partidos
- bloque: M-4
- metrica: sp_goals_conceded
- cifra: "21 penales en contra (xG 16.5, 14 goles) frente a 10 a favor (xG 7.8, 8 goles); 14.1 faltas por partido (p67), con Pachuca 16.7 (p97); goles concedidos de balón parado 0.47 (p61); 59.6 % de los tiros concedidos desde el área (p64); 15.7 entradas al área del rival (p73)"
- kpi: "21 | 10 | penales en 80 partidos | 61 | Penales en contra | contra | a favor"
- definiciones: D-07, D-12
- decision: "Rival: atacar el área con conducción; su equipo defiende atrás, con contacto, y comete más faltas que la liga (y con Pachuca, más que casi todos). Staff: el doble de penales en contra que a favor es consecuencia de defender 16 llegadas al área por partido con la línea atrás; cada llegada menos es una falta menos en el área"
Un penal en contra cada 4 partidos, y 14 de los 21 terminaron en gol. Con Pachuca la tendencia a la falta se dispara (16.7 por partido, de las más altas de la liga) con un equipo que presiona más arriba y defiende a 50 metros, lo que mete al defensor en más duelos de frente. Es un costo directo del repliegue con contacto y se suma a los 19 goles de córner en contra.

## Jugadores y cambios (M-5)

### Sin dibujo fijo: el más usado, 4-4-2, solo en 24 % de los partidos, y cambia de dibujo en 56 de 80
- bloque: M-5
- metrica: tactical_shifts
- cifra: "4-4-2 en 19 partidos (24 %), 4-3-3 en 18 (22 %), 4-1-4-1 en 11 (14 %), 4-2-3-1 en 10 (12 %), 3-5-2 en 7 (9 %), 3-4-3 en 5 (6 %); cambio real de dibujo en 56 de 80; 2.05 cambios de formación por partido vs 1.80 (p72), con Querétaro 2.53 (p96), con Atlas 1.74, con Pachuca 1.58. Por torneo: Clausura 2023 4-4-2 en 11, Apertura 2023 4-3-3 en 10, Apertura 2025 4-1-4-1 en 8, Apertura 2026 4-2-3-1 en 7. Ganando, del minuto 85 en adelante: 3-4-3 en 26 % y 31 % de los minutos; perdiendo, minuto 90: 4-4-2 en 37 %"
- kpi: "2.05 | 1.80 | cambios de dibujo por partido | 72 | Cambios de dibujo dentro del partido | neutro"
- definiciones: SB, D-21, D-26
- decision: "Rival: no preparar el partido contra un dibujo, sino contra dos comportamientos: bloque bajo con dos puntas cuando empata o pierde, y tres centrales para cerrar cuando gana. Staff: cinco dibujos distintos en cinco torneos y 2 cambios por partido es flexibilidad, pero con Querétaro (2.5 por partido, de los más altos de la liga) fue búsqueda; fijar un dibujo base por torneo y mover solo el plan de cierre"
Cada torneo arranca con un dibujo distinto y dentro del partido lo mueve dos veces. Perdiendo converge siempre al 4-4-2 (37 % de los minutos al final); ganando, cierra con tres centrales (3-4-3, 31 % de los minutos en el descuento). El único rasgo estable es la línea de cuatro de inicio: en 66 de 80 partidos arranca con cuatro atrás.

### Perdiendo cambia al descanso y el cambio funciona: el peligro concedido baja de 0.32 a 0.17 en 15 minutos
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio perdiendo: media 51.6', mediana 45' (33 partidos); empatando 51.3', mediana 45' (23); ganando 55.3', mediana 59' (24); de visita 50.7', de local 54.9'. Perdiendo, 15 min antes y después: xG 0.17 a 0.24, xG concedido 0.32 a 0.17, tiros 1.9 a 2.5, field tilt 48 a 55, altura de presión 55 a 59. Ganando: xG 0.22 a 0.17, PPDA 23.7 a 26.0, field tilt 33 a 31. 4.7 cambios por partido, 343 tácticos y 32 por lesión"
- kpi: "0.17 | 0.32 | goles esperados concedidos en 15 minutos | | Peligro concedido en los 15 minutos después del primer cambio, perdiendo | favor | antes del cambio"
- definiciones: D-21, SB
- decision: "Staff: el cambio al descanso perdiendo es su mejor decisión: sube el bloque 4 metros, el dominio territorial 7 puntos y baja el peligro concedido a la mitad; mantenerlo y adelantarlo al 40' cuando el primer tiempo va mal. Ganando, en cambio, el primer cambio profundiza el repliegue (deja dar 26 pases): ahí conviene un cambio que sostenga la presión, no uno que cierre. Rival: si Mora va perdiendo, esperar tres cambios y un dibujo nuevo al 45'; el tramo 45-60 es cuando su equipo más aprieta"
La mitad de las veces que va perdiendo o empatando cambia en el descanso (mediana 45'). Perdiendo saca por la izquierda: lateral izquierdo (19 veces), pivote izquierdo (16) y volante izquierdo (13), y la mejora llega por ahí. Ganando saca al centro delantero (14) y al extremo derecho (11), y el equipo pierde 2 puntos de dominio territorial. Con 4.7 cambios por partido usa todas las ventanas.

### Nadie es titular en la mitad de sus partidos: su jugador más usado, Venegas, arranca el 45 %
- bloque: M-5
- metrica: xi_stability
- cifra: "Jaccard entre onces consecutivos 0.65; 2.5 titulares distintos de un partido al siguiente; Francisco Venegas 36 titularidades (45 %, 2768 min), Martín Nervo 33 (41 %, 2812 min), Camilo Vargas 32 (40 %), Luis Reyes 31 (39 %), Aldo Rocha 30 (38 %). Núcleo (70 % o más de titularidades) por torneo: Clausura 2023 8 jugadores, Apertura 2023 8, Clausura 2025 4, Apertura 2025 6, Apertura 2026 7"
- kpi: "2.5 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB, D-26
- decision: "Staff: con Querétaro en el Clausura 2025 solo 4 jugadores fueron titulares en 7 de cada 10 partidos, el núcleo más chico de su carrera, y fue el torneo con más cambios de dibujo; estabilizar ocho nombres antes que buscar el sistema. Rival: lo fijo en su once es la defensa (lateral izquierdo, un central y el portero); arriba rota, así que preparar la marca por perfil, no por nombre"
Tres equipos en 80 partidos explican parte de la rotación, pero dentro de cada torneo el núcleo es chico: entre 4 y 8 jugadores. Lo constante es el lateral izquierdo (Reyes con Atlas, Venegas con Querétaro y Pachuca, los dos arriba de 2,500 minutos), un central con Atlas (Nervo, 2,812 minutos) y el portero. Venegas es el único que ha viajado con él de un club a otro.

## Por equipo (Atlas 34, Querétaro 34, Pachuca 12)

### Con Querétaro fue otro equipo: 33 % de dominio territorial y 25 pases antes de robar
- bloque: M-2
- escenario: equipo
- metrica: field_tilt
- cifra: "Querétaro (34 pj, 12-4-18): field tilt 32.7 % (p3), posesión 36.5 % (p1), PPDA 25.0 (p99), xG 0.66 (p1), 8.7 tiros (p2), 9.0 entradas al área (p2), 18.4 entradas al área del rival (p94), 8.2 recuperaciones altas (p5), 74.9 pases progresivos (p2), fases de presión con recuperación 25.1 % (p2). Atlas (34 pj, 10-13-11): field tilt 50.6 % (p54), posesión 50.4 %, PPDA 14.1 (p59), xG 1.12 (p45). Pachuca (12 pj, 3-4-5): field tilt 50.9 % (p55), posesión 48.3 %, PPDA 13.3 (p46), xG 1.33 (p78)"
- kpi: "33 % | 51 % | del juego en campo rival | 3 | Dominio territorial con Querétaro | contra | con Atlas"
- definiciones: D-26b, D-05b, D-01
- decision: "Staff: la versión de Querétaro no es el modelo de Mora, es el modelo sin plantilla: el dominio, la presión y el peligro creado vuelven a la media en cuanto cambia de club. Al evaluar al técnico, separar los 34 partidos de Querétaro (12-4-18) de los otros 46 (13-17-16). Rival de Pachuca: no esperar al equipo de Querétaro; este Pachuca tiene el balón la mitad del tiempo y presiona como la liga"
Entre Atlas y Pachuca casi no hay diferencia en dominio, posesión o presión; Querétaro está a 18 puntos de dominio territorial de los otros dos y a 11 pases de presión. Lo que ese año sí mantuvo fue la salida larga (56 %), el centro (1.03 por llegada) y el peligro por córner en contra arriba de la liga: el esqueleto del modelo. Con Querétaro ganó 12 partidos, dos más que con Atlas en los mismos 34, pero perdió 18: ganaba más seguido y perdía más seguido, equipo de contragolpe puro.

### Lo que viaja con Mora: salida larga, centro y poco castigo al robar, igual con los tres equipos
- bloque: M-3
- escenario: equipo
- metrica: transition_xg
- cifra: "Salida larga del portero: Atlas 54.3 % (p76), Querétaro 55.9 % (p78), Pachuca 57.6 % (p83). Centros por entrada al área: 1.08 (p81), 1.03 (p74), 1.06 (p78). xG en transición: 0.29 (p7), 0.37 (p18), 0.37 (p20); conversión de transición 4.9 %, 5.0 %, 5.5 %. xG por córner concedido: 0.049 (p85), 0.047 (p83), 0.041 (p71). Lo que no viaja: fases de presión con recuperación Atlas 32.0 % (p62) vs Querétaro 25.1 % (p2) y Pachuca 27.9 % (p13); contrapresiones Atlas 31.9 vs Pachuca 27.1 (p11); xG Pachuca 1.33 vs Querétaro 0.66"
- kpi: "0.37 | 0.29 | goles esperados tras robo por partido | 20 | Peligro creado tras robar con Pachuca | contra | con Atlas"
- definiciones: D-26b, D-03, D-07
- decision: "Staff: lo que un club contrata con Mora es un equipo de balón largo y centro que defiende bien la pérdida pero no castiga al robar y concede en el córner; eso no cambió con tres plantillas. La presión y el dominio los pone la plantilla. Rival: preparar siempre lo mismo contra cualquier equipo suyo: segunda pelota, defender el centro, cobrar córners abiertos"
Cuatro rasgos se repiten en Atlas, Querétaro y Pachuca con cifras casi iguales: portero largo, más de un centro por llegada, peligro tras robo abajo de la liga y peligro por córner en contra arriba. Con Pachuca el ataque es mejor en todo lo demás (1.33 de peligro creado, 16 llegadas al área) y aun así el contragolpe sigue abajo: es el modelo, no los jugadores. La presión tras pérdida bajó de Atlas a Pachuca (32 a 27 por partido), señal de que la mejor plantilla no presiona más.

## Partidos y rivales

### Gana más de lo que merece: 7 triunfos con menos peligro que el rival y nunca le ha ganado a Monterrey (0-0-5)
- bloque: M-2
- escenario: rival
- metrica: xgd
- cifra: "Ganó con xGD menor a -0.3 en 7 partidos; perdió con xGD mayor a 0.3 en 3. Rachas: 3 victorias seguidas como máximo, 8 sin perder, 4 derrotas seguidas. Monterrey 0-0-5, Tijuana 0-2-3, León 0-2-3, Toluca 0-2-2, América 0-2-2, Tigres 1-0-3. Contra Larcamón 0-2-2 (xG 0.81 a favor, 1.33 en contra), contra Jardine 0-2-1 (0.51 a favor, 1.79 en contra), contra Paunovic 1-1-2 (1.52 a favor, 1.14 en contra). Peor partido: Toluca 0-5 de visita (xG 0.36 contra 2.66); mejor: 3-3 con Guadalajara de local (3.03 contra 1.35)"
- kpi: "7 | 3 | partidos en 80 | 24 | Partidos ganados con menos peligro que el rival | neutro | partidos perdidos creando más"
- definiciones: D-25
- decision: "Rival: su techo es corto (nunca pasó de 3 victorias seguidas) y los grandes con balón lo tienen dominado; Monterrey le ha ganado los 5. Contra Paunovic creó más que el rival (1.52 contra 1.14) y aun así perdió 2 de 4: el peligro que crea no se convierte. Staff: 7 victorias con menos peligro en 80 partidos no es suerte sostenible; el récord real del modelo está más cerca del balance de peligro (-0.34) que del 25-21-34"
Nunca hiló más de 3 victorias en 80 partidos y sí hiló 4 derrotas. Su mejor partido por balance de peligro fue un 3-3 contra Guadalajara (3.03 contra 1.35) y su peor, el 0-5 en Toluca con Querétaro. Contra los técnicos que más ha enfrentado no tiene saldo positivo con ninguno de los dos primeros: 0-2-2 con Larcamón y 1-1-2 con Paunovic.
