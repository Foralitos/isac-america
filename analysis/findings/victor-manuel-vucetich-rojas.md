# Hallazgos — Vucetich en la Liga MX (Apertura 2021 → Apertura 2026, 105 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Vucetich con datos: Guadalajara (Apertura 2021, 9), Monterrey (Clausura 2022 → Clausura 2023, 54), Mazatlán (Apertura 2024 → Clausura 2025, 34) y Tigres UANL (Apertura 2026, 8). Récord 43-33-29. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Mata al robar: 7 de cada 100 robos terminan en tiro, arriba de la liga
- bloque: M-3
- metrica: transition_conv_pct
- cifra: "Conversión de transición 7.42 % vs 6.34 de liga (p83); 4.28 tiros en transición vs 3.76 (p77); xG en transición 0.57 vs 0.51 (p69); 64.5 transiciones vs 63.2 (p65). Por equipo: Monterrey 8.25 % (p93), Tigres 9.59 % (p99), Guadalajara 7.12 % (p77), Mazatlán 5.67 % (p31)"
- kpi: "7.4 % | 6.3 % | de sus robos acaban en tiro | 83 | Robos que terminan en tiro en los 10 segundos siguientes | favor | liga"
- definiciones: D-03
- decision: "Rival: no perder el balón en zona de medios con la defensa abierta; su primer pase tras robar busca al delantero de inmediato. Staff: el modelo rinde cuando hay dos puntas que corren al espacio; es el rasgo que más hay que proteger al armar el once"
No ataca más veces que la liga ni domina el territorio (50 % del juego en campo rival, 49 % de posesión): lo que lo separa es lo que hace con cada robo. El rasgo viajó a tres de sus cuatro equipos y con Tigres es donde más alto está; con Mazatlán, la plantilla más corta que dirigió, se cayó a la media de la liga.

### Casi nunca lo cazan tras perderla: 0.12 de peligro rival en los 10 segundos siguientes
- bloque: M-3
- metrica: vuln_xg
- cifra: "xG rival en 10 s tras pérdida 0.12 vs 0.18 (p13); tiros rivales tras pérdida 1.87 vs 2.21 (p22); xG concedido en transición 0.43 vs 0.52 (p28); contrapresiones 32.3 (p58), regain 27.4 % (p51). Guadalajara 0.08 (p2), Monterrey 0.12 (p15), Mazatlán 0.13 (p22), Tigres 0.07 (p1)"
- kpi: "0.12 | 0.18 | goles esperados por partido | 13 | Peligro del rival justo después de que su equipo pierde el balón | favor | liga"
- definiciones: D-04, D-06
- decision: "Rival: el contragolpe directo contra Vucetich rinde poco; conviene atacarlo con posesión larga y balón parado. Staff: la estructura detrás del balón es la base del modelo; cualquier cambio de dibujo debe conservar los dos pivotes que la sostienen"
Es el rasgo más estable de su carrera: con los cuatro equipos está abajo de la liga, y con Tigres y Guadalajara entre los más bajos. Se explica más por posición que por presión: su presión tras pérdida es la normal (32 por partido) y recupera con ella lo normal (27 %), pero el equipo pierde pocos balones peligrosos porque ataca con pocos hombres y rápido.

### Concede 0.97 de peligro por partido, abajo de la liga, sin presionar más que nadie
- bloque: M-2
- metrica: np_xg_conceded
- cifra: "xG concedido 0.97 vs 1.17 (p24); 12.1 tiros concedidos vs 13.6 (p26); 12.6 entradas al área del rival vs 14.2 (p29); 56.2 % de tiros concedidos desde el área vs 58.2 (p35); PPDA 14.29 (p61) y 15.4 % de fases altas (p38). Monterrey 0.81 (p7), Guadalajara 0.86 (p11), Mazatlán 1.16 (p50), Tigres 1.36 (p79)"
- kpi: "0.97 | 1.17 | goles esperados en contra por partido | 24 | Peligro concedido por partido | favor | liga"
- definiciones: D-12, D-05b
- decision: "Rival: la vía es acumular llegadas desde banda y balón parado, no esperar errores en salida; las ocasiones claras contra él son pocas. Staff: la solidez se construye en bloque medio, no con presión alta; subir la línea sin la plantilla para hacerlo es lo que está pasando con Tigres"
Defiende con menos presión que la liga (deja dar 14 pases antes de robar, y solo 15 de cada 100 rachas de presión son en campo rival) y aun así concede menos tiros, menos llegadas al área y tiros peores. Con Monterrey fue de los equipos que menos concedieron en cinco años; con Tigres, en 8 partidos, el equipo presiona más alto y concede lo contrario.

### La presión depende de la plantilla: de 8 pases por robo con Chivas a 18 con Mazatlán
- bloque: M-2
- metrica: ppda_own
- cifra: "PPDA propio 14.29 vs 14.03 de liga (p61); fases altas 15.4 % vs 16.9 (p38); altura de presión 55.5 m (p46); presiones en último tercio 32.3 vs 33.9 (p47). Por equipo: Guadalajara 8.35 (p1), Monterrey 13.29 (p45), Tigres 13.08 (p43), Mazatlán 17.72 (p88); presiones por partido Monterrey 143.5 (p37), Mazatlán 173.1 (p85); recuperaciones altas con tiro Mazatlán 28.2 % (p13)"
- kpi: "14.3 | 14.0 | pases que deja dar al rival antes de robar | 61 | Intensidad de presión: menos pases es más intensa | neutro | liga"
- definiciones: D-05b, D-05, D-13
- decision: "Rival: no hay que preparar una salida contra presión alta; preparar la salida contra un bloque medio a 55 metros y vigilar la segunda pelota. Staff: la intensidad de presión no es parte del modelo; si se quiere presionar alto hay que decidirlo por plantilla, como ocurrió con Chivas"
Con Mazatlán presionó más veces que casi toda la liga (173 presiones por partido) pero con la menor intensidad de su carrera: muchas presiones sueltas y pocos robos útiles (28 % de robos en campo rival con tiro, abajo de la liga). Con Chivas, en 9 partidos, fue lo contrario: la presión más intensa de la liga con 56 % de posesión. Lo que sí viaja es la altura del bloque: entre 55 y 57 metros con los cuatro equipos.

### Ataca por la derecha: 34 de cada 100 ataques nacen por ese lado, arriba de la liga
- bloque: M-1
- metrica: seq_lane_derecho_pct
- cifra: "Secuencias por derecha 33.9 % vs 32.25 (p79); por izquierda 30.3 % vs 31.7 (p28); por el centro 35.8 % (p46). Mazatlán 35.1 % por derecha (p92) y 28.8 % por izquierda (p8); Monterrey 33.3 % (p68); Guadalajara y Tigres reparten: izquierda 33.7 % (p81) y 33.4 % (p79). Medina 48 titularidades de lateral derecho, Meza 42 de volante derecho, Romo 49 de pivote derecho"
- kpi: "34 % | 32 % | de sus ataques nacen por la derecha | 79 | Ataques que arrancan por el carril derecho | neutro | liga"
- definiciones: D-11, D-02
- decision: "Rival: cargar la ayuda defensiva al costado izquierdo propio y obligarlo a salir por su izquierda, donde arranca menos que la liga. Staff: el lado izquierdo necesita un lateral que progrese; hoy la salida se recarga en Medina, Meza y Romo"
El sesgo es de Monterrey y Mazatlán: en esos 88 partidos el lado derecho fue la salida natural, con el trío Medina, Meza y Romo en Monterrey. Con Chivas y con Tigres el reparto se invierte y nace más por la izquierda, así que es un rasgo de plantilla más que de pizarrón.

### Cuando lo presionan pierde el balón: 68 % de pases bajo presión, y 65 % contra los de arriba
- bloque: M-1
- metrica: pup_success_pct
- cifra: "Pases bajo presión completados 67.9 % vs 70.05 de liga (p30); regates completados 50.9 % vs 53.9 (p33); precisión de pase 78.0 % vs 78.7 (p42); salida larga del portero 49.4 % (p64). Contra rivales del top 6: 65.1 % (p8), posesión 45.2 % (p18), xGD -0.15; con Tigres 63.3 % (p4); con Guadalajara 71.4 % (p63)"
- kpi: "68 % | 70 % | de los pases bajo presión le llegan | 30 | Pases que completa cuando el rival lo presiona | contra | liga"
- definiciones: SB, D-25
- decision: "Rival: presionarlo con el balón en los pies es la forma de generar; contra presión alta su equipo regala salidas, sobre todo si es rival de arriba. Staff: el equipo está armado para jugar sin balón; conviene un plan de salida corta ensayado o asumir la salida larga del portero (49 %) como regla"
Es la otra cara del modelo: un equipo hecho para correr sin balón no está hecho para tenerlo bajo presión. El dato empeora justo cuando más importa, contra los seis de arriba, y es el más bajo de su carrera con Tigres (8 partidos). Con los equipos que lo presionan, su posesión cae a 45 % y el balance de peligro se vuelve negativo.

### Gana el balance de peligro sin dominar: +0.21 por partido con 49 % de posesión
- bloque: M-1
- metrica: xgd
- cifra: "Diferencia de xG 0.21 vs -0.03 de liga (p71); xG 1.20 (p63) y xG concedido 0.97 (p24); posesión 49.0 % (p43); field tilt 50.3 (p53); 16.0 % de secuencias con tiro (p66); OBV ofensivo 1.55 vs 1.42 (p74); 13.7 tiros (p59). Local 0.54 (p89), visita -0.14 (p38); Monterrey 0.63 (p92), Mazatlán -0.30 (p26)"
- kpi: "0.21 | -0.03 | goles esperados de diferencia por partido | 71 | Balance de peligro: lo que crea menos lo que concede | favor | liga"
- definiciones: SB, D-01
- decision: "Rival: tener el balón contra él no es ganarle; hay que convertirlo en llegadas al área, que es donde concede menos que la liga. Staff: no perseguir posesión; medir al equipo por balance de peligro y por el porcentaje de ataques que acaban en tiro"
El balance sale de conceder poco, no de crear mucho: su ataque está apenas arriba de la media y su defensa, abajo de lo que concede la liga. El valor de sus acciones con balón está arriba de la media con la mitad de la posesión, señal de que cada posesión busca portería rápido. La cifra, eso sí, es toda de local y de Monterrey; de visita y con Mazatlán el balance fue negativo.

## Consistencia y variabilidad (D-20 a D-26)

### En casa crea 1.42 de peligro y gana 29 de 54; de visita crea 0.97 y gana 14 de 51
- bloque: M-1
- escenario: localia
- metrica: np_xg
- cifra: "Local 29-15-10: xG 1.42 (p87), xGD 0.54 (p89), 16.1 entradas al área (p81), 17.7 % de secuencias con tiro (p89), 13.0 recuperaciones altas (p72), PPDA 12.29 (p29), xG de balón parado 0.62 (p88). Visita 14-18-19: xG 0.97 (p25), xGD -0.14 (p38), 11.8 entradas (p21), 9.8 recuperaciones altas (p11), PPDA 16.41 (p79), balón parado 0.34 (p17); xG concedido empatando de visita 0.96 por 90"
- kpi: "0.97 | 1.42 | goles esperados por partido | 25 | Peligro creado de visita | contra | de local"
- definiciones: D-20, D-05b, D-07
- decision: "Rival: de local contra Vucetich, salir a buscarlo; su equipo visitante presiona poco, roba poco arriba y vive de 12 llegadas al área. Staff: el déficit de visita es de presión y de balón parado, no de dibujo; llevar la intensidad de casa (12 pases por robo) a la visita vale más que cualquier cambio de sistema"
La diferencia no está en lo que concede (0.97 de local y casi lo mismo de visita empatando) sino en lo que crea: de visita roba 3 balones menos en campo rival, llega 4 veces menos al área y su balón parado produce la mitad. Son 54 y 51 partidos, así que no es ruido de muestra.

### Ganando de visita se encierra: concede 1.47 de peligro y 16.6 tiros por cada 90 minutos
- bloque: M-2
- escenario: localia
- metrica: shots_conceded
- cifra: "Visita ganando (736 min en 20 partidos): xG concedido 1.47 por 90, 16.63 tiros concedidos, 15.16 entradas al área del rival, xG propio 0.87, 66.88 pases progresivos, 5.75 centros. Local ganando (1824 min en 34): xG concedido 1.03, 11.15 tiros, 12.73 entradas. Visita empatando (3327 min): 0.96 concedido, 11.12 tiros"
- kpi: "16.6 | 11.2 | tiros concedidos por cada 90 minutos | 34 | Tiros que concede cuando va ganando de visita | contra | ganando de local"
- definiciones: D-20, D-21, D-12
- decision: "Rival: si Vucetich se adelanta en tu casa, el partido sigue abierto; va a conceder llegadas al área a ritmo alto, así que meter centros y segundos palos. Staff: el repliegue de visita con ventaja concede más de lo que ahorra; sostener la línea a la altura de local, donde ganando concede 11 tiros"
Con ventaja fuera de casa el equipo deja de atacar (67 pases hacia adelante y 6 centros por 90 minutos) y el rival llega al área 15 veces. Es el único estado de partido en el que concede claramente más que la liga, y explica que de visita empate 18 partidos y pierda 19 con solo 14 ganados.

### Ganando cede el territorio (43 %) y pega al contragolpe; perdiendo tiene el balón y crea menos
- bloque: M-1
- escenario: marcador
- metrica: np_xg
- cifra: "Ganando (2560 min): xG 1.25 por 90 (p75), field tilt 43.5, 4.01 tiros en transición (p76), 8.97 centros (p80), 12.73 tiros concedidos. Perdiendo (1965 min): xG 0.94 (p34), field tilt 57.75, 2.79 tiros en transición (p38), 13.15 centros, 14.29 entradas al área, xG de balón parado 0.62 (p76), 9.53 tiros concedidos. Empatando (6124 min): xG 1.03, 4.03 tiros en transición (p77)"
- kpi: "0.94 | 1.25 | goles esperados por cada 90 minutos | 34 | Peligro creado cuando va perdiendo | contra | cuando va ganando"
- definiciones: D-21, D-03, D-12
- decision: "Rival: adelantarse y obligarlo a atacar con el balón; perdiendo llega al área 14 veces por 90 pero convierte poco y recurre al centro y al balón parado. Staff: el plan de remontada hoy es volumen de centros; hace falta una vía por dentro o un cambio de delanteros que no sea solo más altura"
Es un equipo de marcador a favor: ganando cede 56.5 % del territorio, tira al contragolpe 4 veces por 90 y genera más que la liga; perdiendo invierte el territorio, pierde el contragolpe (de 4.0 a 2.8 tiros) y el peligro cae a la zona baja de la liga. Lo que crece perdiendo es el balón parado, que llega a 0.62 por 90, arriba de la liga.

### Arranca presionando a 58 metros y se va bajando: del 60 al 90 concede 1.20 por cada 90
- bloque: M-2
- escenario: momento
- metrica: press_height
- cifra: "0-30: altura de presión 57.79 m, 155.29 presiones por 90, 31.91 contrapresiones, 34.77 presiones en último tercio, 111.54 pérdidas (p75), xG concedido 0.90, 4.14 tiros en transición (p85). 30-60: 55.02 m, 136.54 presiones, 0.96 concedido. 60-90: 53.03 m, 120.84 presiones, 24.56 presiones en último tercio, xG concedido 1.20, 11.71 tiros concedidos; xG propio 1.17 y balón parado 0.63 (p73). Por 15: 0-15 169.54 presiones y 120.57 pérdidas; 60-75 9.20 tiros concedidos (p10); 75-90 13.40 (p55), balón parado 0.83 (p78)"
- kpi: "53 | 58 | metros desde su portería | 36 | Altura de la presión del minuto 60 al 90 | contra | en los primeros 30 minutos"
- definiciones: D-22, D-13, D-05
- decision: "Rival: aguantar la primera media hora sin regalar pérdidas; después del 60 su bloque baja 5 metros y presiona 35 veces menos por 90, es cuando hay que tener el balón. Staff: la caída de la presión en el tramo final es física; el primer cambio ganando llega al 63 y podría adelantarse para sostener la altura"
El equipo gasta la intensidad al inicio: en los primeros 15 minutos presiona 170 veces por 90 y pierde 121 balones, más que la liga en ambas; del 60 al 90 presiona 121 veces y baja a 53 metros. El peligro que concede sube con cada tramo, y el último cuarto de hora es el más abierto: 13.4 tiros concedidos por 90 contra 9.2 del 60 al 75, aunque es también donde más crea de balón parado (0.83).

### Sus derrotas se explican por el balón parado en contra: 0.90 goles por partido contra 0.09 cuando gana
- bloque: M-4
- escenario: resultado
- metrica: sp_goals_conceded
- cifra: "Perdió 29: goles concedidos de balón parado 0.90 (p99), xG concedido de balón parado 0.62 (p85), xG por córner concedido 0.05 (p84), 62.1 % de tiros concedidos desde el área (p83), PPDA 18.08 (p89), xG por tiro 0.07 (p3), xG en transición 0.34 (p15). Ganó 43: balón parado concedido 0.09 (p1), xG por tiro 0.11 (p96), goles de balón parado 0.70 (p95), PPDA 12.40 (p33), xG en transición 0.66 (p82). Empató 33: 0.33 (p31)"
- kpi: "0.90 | 0.09 | goles de balón parado en contra por partido | 99 | Goles concedidos de balón parado cuando pierde | contra | cuando gana"
- definiciones: D-07, D-05b, D-03
- decision: "Rival: el camino para ganarle pasa por el córner y el tiro libre al área; en sus derrotas concede casi un gol de balón parado por partido. Staff: cuando el equipo pierde, la presión se apaga (18 pases por robo) y el balón parado defensivo falla a la vez; revisar las marcas en córner en contra antes que el dibujo"
En el juego abierto la diferencia entre ganar y perder es de calidad de tiro (0.11 contra 0.07 por tiro) y de contragolpe (0.66 contra 0.34), pero el salto más grande es el balón parado: diez veces más goles en contra cuando pierde. Es consistente con lo que concede contra los rivales de arriba, 0.67 goles de balón parado por partido.

### En zona de liguilla directa es otro equipo: 15-6-4 y balance de peligro +0.72 por partido
- bloque: M-2
- escenario: tabla
- metrica: xgd
- cifra: "Zona directa (25 partidos): 15-6-4, xGD 0.72 (p95), xG 1.29 (p74), xG concedido de balón parado 0.22 (p1), goles concedidos de balón parado 0.12 (p2), 17.66 % de secuencias con tiro (p89), 46.46 % de secuencias desde tercio defensivo (p77), primer cambio al 57.64, 2.36 cambios de dibujo (p90). Directa alcanzable (40): 15-15-10, xGD 0.10 (p64), xG 1.19 (p60). Arranque (21): 9-5-7, xGD 0.14 (p67), xG en transición 0.70 (p88), conversión 8.41 % (p95), balón parado en contra 0.62 (p80)"
- kpi: "0.72 | 0.10 | goles esperados de diferencia por partido | 95 | Balance de peligro cuando llega en zona de liguilla directa | favor | cuando la liguilla directa es alcanzable"
- definiciones: D-23, D-07
- decision: "Rival: contra un Vucetich que viene en zona directa, el balón parado no le hace daño y el partido se juega en su campo medio; toca paciencia y evitar el contragolpe. Staff: la versión de arriba de la tabla defiende más atrás (46 % de ataques nacen en su campo) y no concede de balón parado; es la referencia a sostener cuando el equipo va bien"
Con la liguilla directa en la mano el equipo se vuelve conservador y eficaz: nace más desde su campo, remata 18 de cada 100 ataques y casi no concede a balón parado. Cuando la liguilla es alcanzable pero no está asegurada empata 15 de 40 y el balance baja a la media. En arranque de torneo gana con el contragolpe (0.70 de peligro tras robo) pero concede 0.62 goles de balón parado por partido.

### En las primeras cuatro jornadas, ganando concede 1.65 por cada 90 y 16.3 tiros
- bloque: M-2
- escenario: tabla
- metrica: shots_conceded
- cifra: "Arranque (J1 a J4), ganando: 513 min en 11 partidos, xG concedido 1.65 por 90, 16.32 tiros concedidos, 13.16 entradas al área del rival, xG propio 0.94, 8.95 tiros, 69.83 pases progresivos. Arranque perdiendo: 564 min en 13, xG 1.34, 14.36 tiros, 16.27 entradas al área, 0.76 concedido. En zona directa ganando (791 min en 17): 0.78 concedido, 10.58 tiros concedidos, xG 1.52"
- kpi: "1.65 | 0.78 | goles esperados en contra por cada 90 minutos | | Peligro concedido ganando en las primeras cuatro jornadas | contra | ganando en zona de liguilla directa"
- definiciones: D-23, D-21, D-12
- decision: "Rival: en las primeras jornadas, ir abajo contra Vucetich no es grave; su equipo con ventaja temprana en el torneo se repliega y concede el doble que avanzado el torneo. Staff: el repliegue con ventaja en arranque es un hábito de pretemporada, no de modelo; en zona directa el mismo equipo ganando concede 0.78"
Es un indicio con 11 partidos y 513 minutos, pero apunta en la misma dirección que el repliegue de visita: cuando el equipo todavía no está rodado, la ventaja lo encierra. Perdiendo en arranque pasa lo contrario, crea 1.34 por 90 y llega 16 veces al área, el mejor registro de su ataque perdiendo en cualquier situación de tabla.

### En liguilla gana 2 de 8: el contragolpe baja a 0.33 y espera al 62 para el primer cambio
- bloque: M-3
- escenario: fase
- metrica: transition_xg
- cifra: "Liguilla (8 partidos, muestra chica): 2-3-3; cuartos 2-2-0, semis 0-1-3, play-in 0-1-0. xG en transición 0.33 (p13) vs 0.56 en fase regular (p63); 3.38 tiros en transición (p35) vs 4.28 de carrera; conversión 6.26 % (p50); regates completados 42.44 % (p2); primer cambio al 62.38 (p98); 60.98 % de secuencias al último tercio (p95); xG 1.10 (p41). Semis: goles concedidos de balón parado 1.00, regates completados 38.75 % (p0); cuartos: 0.00 concedidos de balón parado, 18.0 presiones en último tercio (p0), línea defensiva 42.15 m (p1), 22.5 contrapresiones (p1)"
- kpi: "0.33 | 0.56 | goles esperados tras robo por partido | 13 | Peligro creado tras robar en liguilla | contra | en fase regular"
- definiciones: D-24, D-03, D-13
- decision: "Rival en liguilla: su arma principal se apaga en estos partidos; defenderle el contragolpe con dos y obligarlo a atacar con el balón, que llega al último tercio pero no remata. Staff: en liguilla el equipo espera demasiado para mover el banquillo (minuto 62, el más tardío de todos los cortes); adelantar el primer cambio y no encerrarse en cuartos, donde defendió a 42 metros"
Son 8 partidos y hay que leerlos como indicio, pero el patrón es claro: en liguilla llega al último tercio más que nunca (61 % de sus ataques) y remata menos que nunca con la transición, su mejor arma. En cuartos se encerró (línea a 42 metros, 18 presiones en último tercio por partido, lo más bajo de su carrera) y sacó 2 victorias y 2 empates; en semifinales, con 1 gol de balón parado concedido por partido, no ganó ninguna de 4.

### Contra los seis de arriba pierde la salida: 65 % de pases bajo presión y récord 8-10-15
- bloque: M-1
- escenario: rival
- metrica: pup_success_pct
- cifra: "Top 6 (33 partidos): 8-10-15, pases bajo presión 65.09 % (p8), posesión 45.22 % (p18), field tilt 43.69 (p27), 11.58 entradas al área (p18), xG 1.01 (p31), xGD -0.15 (p37), 15.12 entradas del rival (p65), 94.85 pases progresivos (p33), 29.58 % de recuperaciones altas con tiro (p22). Resto (72): 35-23-14, 69.19 % bajo presión (p43), 15.17 entradas (p69), xG 1.29 (p73), xGD 0.37 (p81), xG concedido 0.88 (p14), 35.31 % (p65)"
- kpi: "65 % | 69 % | de los pases bajo presión le llegan | 8 | Pases que completa bajo presión contra rivales del top 6 | contra | contra el resto"
- definiciones: D-25, SB
- decision: "Rival de arriba: presionarlo alto desde el primer minuto; sus pases bajo presión caen a lo más bajo de la liga y su posesión a 45 %. Staff: el equipo le gana al resto de la liga por balance (35 victorias en 72) pero no compite arriba; contra top 6 hace falta una salida directa decidida o un tercer central que dé un hombre libre"
Contra el resto de la liga su modelo rinde como uno de los mejores (balance +0.37, 0.88 concedido); contra los seis de arriba no es solo que cree menos, es que no logra salir: completa 4 puntos menos bajo presión, llega 4 veces menos al área y concede 3.7 llegadas más. El ataque tras robo también baja: 29.6 % de robos altos con tiro contra 35.3 %.

### Los de arriba le anotan de balón parado: 0.67 goles por partido contra 0.26 con el resto
- bloque: M-4
- escenario: rival
- metrica: sp_goals_conceded
- cifra: "Top 6: goles concedidos de balón parado 0.67 (p86), 4.42 córners a favor (p30), xG de córner 0.14 (p29), OBV concedido 1.51 (p60), xG concedido 1.16 (p51). Resto: 0.26 (p18), 5.62 córners (p82), xG de córner 0.20 (p69), OBV concedido 1.16 (p11). Total carrera: 0.39 (p43), xG concedido de balón parado 0.47 (p51); 9 goles de córner en contra en 481 córners; 19 goles de 26 penales en contra"
- kpi: "0.67 | 0.26 | goles de balón parado en contra por partido | 86 | Goles concedidos de balón parado contra rivales del top 6 | contra | contra el resto"
- definiciones: D-07, D-25
- decision: "Rival de arriba: insistir con el balón parado al área; contra el resto de la liga Vucetich concede 0.26 por partido, contra ustedes casi el triple. Staff: el balón parado defensivo contra plantillas con más altura es el punto débil medible; asignar marcas individuales a los rematadores de los grandes antes de cada partido"
En toda su carrera su balón parado defensivo es normal (0.39 goles por partido, 0.47 de peligro concedido), pero la media esconde dos equipos distintos según el rival: contra los seis de arriba está arriba de la liga en goles concedidos, contra el resto abajo. También genera menos: 4.4 córners por partido contra los grandes, contra 5.6 con el resto.

### Su mejor torneo y el peor se separan en el contragolpe: 0.76 de peligro tras robo en 2023, 0.26 en 2025
- bloque: M-3
- escenario: torneo
- metrica: transition_xg
- cifra: "Clausura 2023 (Monterrey, 14-3-4, xG 1.40 / 0.69 concedido): xG en transición 0.76 (p93), 4.57 tiros en transición (p83), 39.46 % de recuperaciones altas con tiro (p94), OBV ofensivo 1.86 (p97), 16.65 % de secuencias con tiro (p77), goles concedidos de balón parado 0.14 (p2), PPDA 14.24 (p60). Clausura 2025 (Mazatlán, 4-5-8, xG 0.71 / 1.11): 0.26 (p3), 2.29 tiros (p2), conversión 4.00 % (p3), 24.46 % (p2), OBV 1.11 (p7), 10.28 % con tiro (p0), primer cambio al 45.06 (p2), PPDA 18.22 (p90), 179.47 presiones (p93). Apertura 2024: 0.42 (p30), 2-8-7. Apertura 2026: 0.59 (p73), 3-4-1"
- kpi: "0.26 | 0.76 | goles esperados tras robo por partido | 3 | Peligro creado tras robar en el Clausura 2025 con Mazatlán | contra | en el Clausura 2023 con Monterrey"
- definiciones: D-26, D-03, D-05b
- decision: "Staff: la señal temprana de que el modelo se rompe es el contragolpe, no el resultado; si los tiros tras robo bajan de 3 por partido y los ataques con tiro de 13 %, el equipo está presionando mucho sin robar (Clausura 2025: 179 presiones, 18 pases por robo). Rival: contra un Vucetich que no convierte robos, basta con no regalar el balón parado"
El Clausura 2023 es su torneo modelo: equipo que presiona lo normal, concede 0.69 de peligro y remata 4.6 veces por partido tras robar. El Clausura 2025 es la versión invertida: presionó más que casi toda la liga en volumen, con la peor intensidad de su carrera, y el equipo dejó de rematar: una de cada 10 secuencias acabó en tiro, lo más bajo de la liga. Entre medio, el Apertura 2024 ya mostraba la caída (0.42 tras robo, 2-8-7).

### Las idas de liguilla no las gana: 0-3-1 en 4 partidos creando 0.76 de peligro
- bloque: M-1
- escenario: ida_vuelta
- metrica: np_xg
- cifra: "Ida (4 partidos, muestra chica): 0-3-1, xG 0.76 (p4), 3.0 córners (p1), 24.5 contrapresiones (p4), conversión de transición 3.45 % (p1), 74 secuencias (p9), 30 % de córners cortos (p97), goles concedidos de balón parado 0.75 (p92). Vuelta con el global empatado (3): 2-0-1, conversión 9.52 % (p99), 49.70 % de recuperaciones altas con tiro (p100), 18.67 faltas (p99). Vuelta perdiendo el global (1): 0-0-1, xG 2.30, 102 secuencias, 42 contrapresiones"
- kpi: "0.76 | 1.20 | goles esperados por partido | 4 | Peligro creado en los partidos de ida de liguilla | contra | en toda su carrera"
- definiciones: D-24, D-03, D-06
- decision: "Rival: a la ida Vucetich especula (3 córners, 24 presiones tras pérdida, casi ningún robo con tiro); es el partido para sacar ventaja. Staff: son 4 partidos, indicio y no ley, pero la ida se juega a no perder y se termina empatando 3 de 4; en la vuelta con el global empatado el equipo sí sale a presionar y ganó 2 de 3"
Con 4 idas, 3 vueltas empatadas y 1 vuelta perdiendo, todo esto es indicio. Lo que se ve: a la ida el equipo juega al contragolpe sin contragolpe (3.45 % de robos con tiro, lo más bajo de su carrera) y concede de balón parado; en la vuelta con el global igualado cambia el chip, roba arriba y remata la mitad de esos robos. La única vuelta que jugó perdiendo el global (Pachuca, octubre de 2022) la atacó con 2.30 de peligro y 102 ataques, y aun así la perdió 0-1.

## Balón parado (M-4)

### 17 goles de córner en 551: el abierto desde la izquierda rinde más (6 en 81) y el corto no dio ninguno
- bloque: M-4
- metrica: xg_per_corner
- cifra: "551 córners (5.25 por partido, p67), 17 goles, 242 tiros, xG 19.1; xG por córner 0.03 vs 0.04 de liga (p39); inswinging 35.2 % (p52), cortos 12.0 % (p52). Derecha outswinging al centro: 164 córners, 85 tiros, xG 6.55, 5 goles. Izquierda outswinging al centro: 81, 41 tiros, xG 3.44, 6 goles. Izquierda inswinging: 97, 40 tiros, xG 4.22, 3 goles. Derecha inswinging: 61, 21 tiros, xG 2.47, 2 goles. Cortos: derecha 35 (12 tiros, xG 0.40, 0 goles), izquierda 21 (11 tiros, xG 0.59, 0 goles). Local xG de córner 0.22 (p79), visita 0.14 (p29)"
- kpi: "0.03 | 0.04 | goles esperados por cada córner | 39 | Peligro que genera cada córner | contra | liga"
- definiciones: D-07
- decision: "Staff: cobrar más abiertos desde la izquierda (su mejor envío por gol) y menos cerrados desde ese lado, que generan menos tiros por córner; eliminar el corto, 56 córners sin un gol. Rival: defender el segundo palo y la frontal en los córners desde la derecha, de donde salen 85 tiros"
Saca más córners que la liga pero cada uno vale menos: su peligro por córner está abajo de la media. El cobro base es el abierto desde la derecha al centro del área (164), que genera medio tiro por córner pero solo 5 goles; el mismo envío desde la izquierda, con la mitad de volumen, produjo 6. De local el córner rinde arriba de la liga y de visita abajo, como todo su balón parado.

### El tiro libre al área es su mejor balón parado: arriba de la liga, 10 goles en 98 tiros
- bloque: M-4
- metrica: fk_indirect_xg
- cifra: "xG de tiro libre indirecto 0.09 vs 0.07 de liga (p75); 477 tiros libres a favor (4.5 por partido), 15 goles, xG 11.5, 46 directos. Tiros tras tiro libre al área: 98 tiros, xG 9.9, 10 goles; directos: 47 tiros, xG 1.3, 4 goles, xG de tiro libre directo 0.01 (p28). Local 0.13 (p90), visita 0.05 (p36); ganó 0.14 (p93), perdió 0.05 (p29). Monterrey 0.11 (p82), Mazatlán 0.10 (p76), Tigres 0.09 (p75), Guadalajara 0.01 (p1)"
- kpi: "0.09 | 0.07 | goles esperados por partido | 75 | Peligro creado con tiros libres cobrados al área | favor | liga"
- definiciones: D-07
- decision: "Rival: no hacer faltas entre 25 y 40 metros de la portería propia; su tiro libre al área convierte 1 de cada 10 tiros, mejor que su córner. Staff: es el único balón parado que viaja con él (Monterrey, Mazatlán y Tigres, arriba de la liga en los tres); vale la pena buscar la falta en zona de centro más que el córner"
El tiro libre directo apenas aporta (4 goles en 47 tiros, abajo de la liga), pero el servicio al área es su balón parado más rentable: con 98 tiros produjo 10 goles, mientras el córner necesitó 242 tiros para 18. Como todo su juego, pesa más de local, donde está de los más altos de la liga, y en las victorias (0.14 por partido) que en las derrotas (0.05).

### Penales: 12 goles de 23 a favor y 19 de 26 en contra, el peor balance de su balón parado
- bloque: M-4
- metrica: sp_goals
- cifra: "Penales a favor: 23 tiros, xG 18.0, 12 goles. Penales en contra: 26 tiros, xG 20.4, 19 goles. Goles de balón parado 0.44 por partido vs 0.44 de liga (p53); goles concedidos de balón parado 0.39 vs 0.45 (p43); xG de balón parado 0.49 (p60), concedido 0.47 (p51). Córners en contra: 481, 9 goles; saques de banda en contra: 34 tiros, xG 2.3, 0 goles"
- kpi: "12 | 19 | goles de penal en 105 partidos | | Goles de penal a favor | contra | en contra"
- definiciones: D-07
- decision: "Staff: con 23 penales a favor se esperaban 18 goles y entraron 12; definir un cobrador fijo es el ajuste de balón parado con más goles por hora de trabajo. Rival: el resto de su balón parado defensivo es normal; el penal en contra sí lo castiga (19 de 26), así que buscar el contacto en el área rinde"
Fuera del penal, su balón parado es de media tabla en ambas direcciones: anota 0.44 por partido como la liga y concede 0.39, abajo. El desbalance está en los once pasos: a favor falló 11 de 23 y en contra le convirtieron 19 de 26. Los saques de banda en contra no le han costado un gol en 105 partidos.

### Saque de banda ofensivo: 8.3 cerca del área por partido y 7 goles en 874; con Tigres retiene la mitad
- bloque: M-4
- metrica: throwins_danger
- cifra: "Saques de banda en zona de peligro 8.32 vs 7.72 de liga (p67); retiene 62.1 % (p53); xG tras saque 0.03 (p65). 874 saques a favor, 7 goles, retiene 60.9 %; derecha lejos 433 (58 tiros, xG 4.12, 4 goles), izquierda lejos 273 (43 tiros, 2 goles), izquierda al frente 24 (10 tiros, xG 1.71, 1 gol), derecha corto 48 (7 tiros, xG 0.38). Tigres: 9.75 por partido (p93), retiene 49.72 % (p9), xG 0.05 (p92). En contra: 797, 8 goles, retiene 63.5 %"
- kpi: "8.3 | 7.7 | saques de banda cerca del área rival por partido | 67 | Saques de banda en zona de peligro | neutro | liga"
- definiciones: D-07
- decision: "Rival: en sus saques de banda largos por la derecha (433) disputar la segunda pelota, no el primer salto; es de donde salen 4 de sus 7 goles. Staff: con Tigres se pierde la mitad de los saques cerca del área (50 % retenidos, de los más bajos de la liga); ensayar dos salidas cortas antes que el saque largo"
Llega a saque de banda cerca del área más que la liga, casi siempre por la derecha, y lo convierte poco: 7 goles en 874, con 0.03 de peligro por partido. El saque al frente desde la izquierda, con solo 24 intentos, generó más peligro que los 48 saques cortos por la derecha. En 8 partidos con Tigres el volumen subió a casi 10 por partido pero la retención se desplomó, señal de un saque largo sin receptor.

## Jugadores y cambios (M-5)

### Sin dibujo fijo: 4-4-2 y 4-2-3-1 a partes iguales (31 % cada uno) y cambio de dibujo en 69 de 105 partidos
- bloque: M-5
- metrica: tactical_shifts
- cifra: "Dibujo inicial: 4-4-2 en 33 (31 %), 4-2-3-1 en 33 (31 %), 3-4-3 en 17 (16 %), 3-5-2 en 6, 3-4-2-1 en 5, 4-4-1-1 en 4. Cambios de formación 2.18 por partido vs 1.80 de liga (p79); 229 en 105 partidos; cambio real en 69 de 105. Por torneo: Apertura 2022 4-4-2 en 12 y 4-2-3-1 en 7; Clausura 2023 4-4-2 en 14; Apertura 2024 3-4-3 en 7 y 3-4-2-1 en 3; Clausura 2025 3-4-3 en 8 y 3-5-2 en 3; Apertura 2026 4-2-3-1 en 7 de 8. Mazatlán 2.44 cambios (p94), Monterrey 2.19 (p80), Tigres 2.25 (p83), Guadalajara 1.11 (p6)"
- kpi: "2.2 | 1.8 | cambios de dibujo por partido | 79 | Veces que mueve el dibujo dentro del partido | neutro | liga"
- definiciones: SB, D-26b
- decision: "Rival: no preparar el partido contra un dibujo sino contra dos: 4-4-2 cuando quiere correr y 4-2-3-1 cuando quiere el balón entre líneas, y esperar un tercer dibujo después del 60. Staff: la flexibilidad es real pero cara en automatismos; con Mazatlán, donde más cambió (2.4 por partido), fue donde peor rindió"
Con Monterrey alternó 4-4-2 y 4-2-3-1 según el rival; con Mazatlán pasó a tres centrales (3-4-3, 3-4-2-1, 3-5-2) en 24 de 34 partidos; con Tigres volvió al 4-2-3-1. Dentro del partido mueve el dibujo arriba de la liga, y ganando en el último tramo aparece el 4-3-3 (entre 16 y 20 % de los minutos del 70 al 90) para cerrar con un hombre más en medio. El único torneo en que casi no tocó el dibujo fue el de Chivas (1.1 por partido).

### Perdiendo cambia en el descanso (mediana al 45) y saca pivotes y defensas; el cambio baja lo que concede
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio perdiendo: n=22, media 50.1, mediana 45; empatando n=51, media 51.0, mediana 57; ganando n=32, media 62.8, mediana 64. Carrera: 54.42 vs 53.87 de liga (p55); 4.6 cambios por partido, 437 tácticos y 44 por lesión. Perdiendo, 15 min antes vs después: xG 0.13 a 0.20, xG concedido 0.30 a 0.23, PPDA 14.3 a 13.1, altura de presión 57 a 59. Empatando: xG 0.14 a 0.23, field tilt 47 a 57. A quién saca perdiendo: pivote derecho 16, lateral izquierdo 14, pivote izquierdo 11, central izquierdo 10, extremo derecho 8. Por tabla: pelea play-in 38.3, sin nada 43.0, liguilla 62.4"
- kpi: "45' | 64' | minuto del primer cambio | 26 | Minuto del primer cambio cuando va perdiendo (mediana) | favor | cuando va ganando (mediana)"
- definiciones: D-21, SB
- decision: "Rival: si Vucetich va perdiendo al descanso, el segundo tiempo arranca con otro once: sale un pivote o un defensa y entra un atacante; ajustar marcas en el túnel. Staff: el cambio al descanso perdiendo funciona (concede menos y presiona 2 metros más arriba después); mantener el gatillo y no retrasarlo como en liguilla, donde esperó al 62"
Perdiendo no refresca a los de arriba: sacrifica a un pivote (27 veces entre los dos) o a un defensor para meter un atacante más, y el equipo mejora en las dos áreas durante el cuarto de hora siguiente. Empatando el cambio llega más tarde (mediana 57) y saca delanteros y extremos; el impacto es el mayor de los tres estados: el peligro propio sube de 0.14 a 0.23 y el dominio territorial de 47 a 57 %.

### Ganando espera al 63 y el cambio es para cerrar: el dominio cae de 55 % a 40 %
- bloque: M-5
- metrica: field_tilt
- cifra: "Primer cambio ganando: media 62.8, mediana 64; todos los cambios ganando (168) minuto medio 74.2. Ganando, 15 min antes vs después del primer cambio: field tilt 55 a 40, xG 0.34 a 0.17, tiros 2.5 a 1.7, PPDA 17.5 a 20.5, altura de presión 57 a 53, xG concedido 0.12 a 0.13. A quién saca ganando: volante izquierdo 15, delantero centro 14, pivote izquierdo 13, segundo delantero 13, extremo izquierdo 12. Monterrey primer cambio 59.48 (p93), Mazatlán 47.26 (p4); cuando ganó, 59.28 (p91)"
- kpi: "40 % | 55 % | del juego en campo rival | | Dominio territorial en los 15 minutos después del primer cambio, ganando | neutro | en los 15 minutos antes del cambio"
- definiciones: D-21, D-13, SB
- decision: "Rival: después de su primer cambio con ventaja, el equipo de Vucetich se entrega al repliegue (deja dar 20 pases, cede el 60 % del territorio); es el momento de meter un delantero más y cargar el área. Staff: el cierre funciona en lo que concede (0.13 después), pero deja de generar; conviene que al menos un cambio ganando sea un delantero que corra para sostener el contragolpe"
El cambio con ventaja es el más tardío y el más conservador: salen los de arriba (delanteros y volantes izquierdos) y entra gente para aguantar. El peligro propio se parte a la mitad y la presión se afloja 3 pases, pero lo que concede no sube: el repliegue le ha funcionado como seguro. Con Monterrey, donde más ganaba, el primer cambio llegaba al 59.5 de media, de los más tardíos de la liga.

### Rota 3 titulares por partido y nadie pasa de la mitad de titularidades en 105 partidos
- bloque: M-5
- metrica: xi_stability
- cifra: "Jaccard entre onces consecutivos 0.61; 3.0 titulares distintos por partido. Más usados: Romo 49 titularidades (47 %, 4058 min, pivote derecho), Medina 48 (46 %, 4091 min, lateral derecho), Andrada 45 (43 %), Celso Ortiz 45 (43 %, pivote izquierdo), Meza 42 (40 %), Gallardo 39 (37 %), Arturo González 38 (36 %), Berterame 33 (31 %). Núcleo (titular en 70 % o más) por torneo: Clausura 2023 11 jugadores, Clausura 2022 10, Apertura 2022 7, Clausura 2025 7, Apertura 2026 7, Apertura 2024 5, Apertura 2021 4"
- kpi: "3.0 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB
- decision: "Staff: el modelo se sostuvo sobre un doble pivote fijo (Romo y Ortiz) más Medina y Meza; cuando no hubo núcleo (Apertura 2024 con Mazatlán, 5 jugadores fijos) el equipo terminó 2-8-7. Priorizar la continuidad del medio sobre la del ataque. Rival: el ataque rota, el medio no; preparar el plan contra los dos pivotes, que son los que arman el contragolpe"
Su torneo más estable fue el Clausura 2023, con 11 titulares fijos y récord 14-3-4; su torneo con menos núcleo, el Apertura 2024, fue el peor. Con Tigres, en 8 partidos, ya tiene 7 jugadores en el 70 % o más de titularidades (Alan Franco, Palomeque, Brunetta, Fontes, Joaquim, Leyva y Rodrigo Aguirre), el núcleo más rápido que ha armado.

## Por equipo: qué viaja con Vucetich (Guadalajara 9, Monterrey 54, Mazatlán 34, Tigres UANL 8)

### El modelo es el de Monterrey: balance +0.63 y 18 % de ataques con tiro; con Mazatlán se invirtió a -0.30
- bloque: M-3
- escenario: equipo
- metrica: transition_xg
- cifra: "Monterrey (54): 31-12-11, xGD 0.63 (p92), xG 1.38 (p85), xG concedido 0.81 (p7), 10.65 tiros concedidos (p8), 18.16 % de secuencias con tiro (p93), xG en transición 0.69 (p88), 4.83 tiros en transición (p88), OBV ofensivo 1.76 (p93), primer cambio 59.48 (p93). Mazatlán (34): 6-13-15, xGD -0.30 (p26), xG 0.97 (p25), concedido 1.16 (p50), 12.75 % con tiro (p6), transición 0.34 (p15), 3.21 tiros (p26), 173.09 presiones (p85), PPDA 17.72 (p88), primer cambio 47.26 (p4). Viaja: cambios de dibujo 2.19 y 2.44; tiro libre al área 0.11 y 0.10; xG rival tras pérdida 0.12 y 0.13"
- kpi: "0.34 | 0.69 | goles esperados tras robo por partido | 15 | Peligro creado tras robar con Mazatlán | contra | con Monterrey"
- definiciones: D-26b, D-03, D-05b
- decision: "Staff: lo que viaja con Vucetich es la seguridad tras pérdida, la flexibilidad de dibujo y el tiro libre al área; lo que no viaja es el contragolpe, que necesita delanteros con velocidad (Berterame, Rodrigo Aguirre, Funes Mori en Monterrey). Sin ese perfil el equipo presiona más y remata menos. Rival: medir al Vucetich del momento por sus delanteros, no por su historial"
Con Monterrey tuvo al mismo tiempo la mejor defensa de su carrera y el mejor contragolpe; con Mazatlán conservó la defensa en la media de la liga pero el ataque se cayó a la zona baja en cada medida: la mitad de peligro tras robo, 4 tiros menos por partido y la conversión de robos a la media. El primer cambio también se movió 12 minutos (del 59.5 al 47.3), síntoma de un técnico que corregía desde temprano.

### Con Tigres presiona más arriba que nunca (24 % de rachas en campo rival) y concede 17 tiros por partido
- bloque: M-2
- escenario: equipo
- metrica: press_high_pct
- cifra: "Tigres (8 partidos, muestra chica): 3-4-1, fases de presión altas 24.10 % (p96) vs 15.40 de carrera (p38), 13.62 recuperaciones altas (p79), contrapresiones con regain 31.39 % (p92), 5.38 tiros en transición (p94), conversión 9.59 % (p99); pero 16.88 tiros concedidos (p90), xG concedido 1.36 (p79), 16.25 entradas del rival (p78), xG concedido en transición 0.59 (p73), xGD -0.44 (p18), pases bajo presión 63.31 % (p4), saques de banda retenidos 49.72 % (p9); goles concedidos de balón parado 0.12 (p2); directness 0.62 (p91). Peor partido: 2026-10-17 visita vs Guadalajara 1-1, xG 0.47 contra 2.22"
- kpi: "24 % | 15 % | de sus rachas de presión son en campo rival | 96 | Presión en campo rival con Tigres | neutro | en toda su carrera"
- definiciones: D-26b, D-05, D-12
- decision: "Staff de Tigres: la presión alta está dando robos y tiros tras robo (los más altos de su carrera) pero el equipo detrás no está cerrado: concede 17 tiros y 16 llegadas por partido, cerca del doble de lo que concedía con Monterrey. Elegir: bajar el bloque a los 55 metros de siempre o cerrar la espalda de la presión con los pivotes. Rival: superar la primera línea con un pase largo; detrás hay espacio, algo que contra Vucetich nunca había pasado"
Son 8 partidos y todo es indicio, pero el perfil de Tigres rompe con el de sus otros tres equipos: es el más vertical (0.62) y el que más presiona arriba, y a cambio es el que más concede en juego abierto, con el balance de peligro más bajo de su carrera. Lo que sí se mantiene es la seguridad a balón parado (0.12 goles concedidos, de los más bajos) y la conversión del robo en tiro.

### Con Chivas presionó como nadie (8 pases por robo) y tuvo 56 % del balón, pero tiró de lejos: 52 %
- bloque: M-1
- escenario: equipo
- metrica: possession_pct
- cifra: "Guadalajara (9 partidos, muestra chica): 3-4-2, GF 8, GA 8, PPDA 8.35 (p1), posesión 56.21 % (p90), field tilt 55.25 (p73), 18.33 regates (p93), 52.14 % de tiros desde fuera del área (p97), 1.09 centros por entrada al área (p81), OBV ofensivo 1.15 (p12), xG 1.08, concedido 0.86 (p11), 9.89 entradas del rival (p4), 65.14 % de tiros concedidos desde el área (p94), xG rival tras pérdida 0.08 (p2), córners inswinging 52.91 % (p94), cambios de dibujo 1.11 (p6)"
- kpi: "56 % | 49 % | de posesión | 90 | Posesión con Guadalajara | neutro | en toda su carrera"
- definiciones: D-26b, D-05b, D-12
- decision: "Staff: la versión de Chivas demuestra que Vucetich puede dirigir un equipo de presión alta y balón (lo hizo 9 partidos y concedió lo más bajo de su carrera); lo que faltó fue remate: la mitad de los tiros desde fuera y el valor ofensivo más bajo de su carrera. Rival: nada de esto se ha repetido después; no preparar al Vucetich de Chivas"
Es su capítulo más corto y el más distinto: presión más intensa de la liga, 56 % del balón, 18 regates por partido y un córner cerrado como cobro base (53 %), todo lo contrario de lo que hizo después. El equipo concedía poquísimo (9.9 llegadas al área del rival) pero no producía con tanto balón: 8 goles en 9 partidos. Es la evidencia de que el estilo lo pone la plantilla, y el técnico el orden sin balón.

## Partidos y rivales

### Contra Almada pierde creando más: 2-3-3 con 1.20 de peligro contra 0.96 en 8 partidos
- bloque: M-2
- metrica: xgd
- cifra: "Almada: 8 partidos, 2-3-3, xG 1.20 / 0.96. Jardine: 5, 2-1-2, 1.18 / 1.74. Larcamón 4, 2-1-1, 0.98 / 1.11. Lillini 4, 1-2-1, 1.33 / 0.76. Miguel Herrera 4, 2-1-1, 1.52 / 0.66. Ambriz 4, 1-3-0, 1.10 / 0.77. Raúl Gutiérrez 4, 3-1-0, 1.30 / 0.85. Rivales con peor récord: Pumas 1-2-3, Guadalajara 1-2-3, León 1-2-2, América 2-0-3. Ganó con menos peligro que el rival en 7 partidos; perdió creando más en 5. Rachas: 7 victorias seguidas, 12 sin perder, 3 derrotas seguidas. Peores partidos: 2025-04-19 visita vs América 0-5 (xG 0.21-3.08) y 2024-11-02 local vs América 0-5 (0.57-3.03); mejor: 2022-08-07 local vs León 5-1 (3.69-1.15)"
- kpi: "1.20 | 0.96 | goles esperados por partido | 71 | Peligro creado contra equipos de Almada | neutro | peligro concedido en esos partidos"
- definiciones: D-25
- decision: "Rival: los técnicos que le ganan por peligro son los de presión alta y plantilla de arriba (Jardine, 1.74 concedido en 5 partidos, con dos 0-5 del América a su Mazatlán). Staff: contra Almada el problema no es el juego sino la definición y el balón parado; la serie de semifinales del Apertura 2022 contra Pachuca (2-5 y 0-1 creando 2.30) es la referencia a revisar"
Su peor rival por marcador es el América: 2 victorias y 3 derrotas, dos de ellas 0-5 con Mazatlán (noviembre de 2024 y abril de 2025), los dos peores partidos de su carrera por diferencia de peligro. Contra Almada el balance es el contrario: crea más de lo que concede y aun así pierde 3 de 8, aunque le ganó 3-0 con Mazatlán al Pachuca en agosto de 2024, su tercer mejor partido. Sus tres rachas (7 victorias seguidas, 12 sin perder, 3 derrotas seguidas) son todas del Clausura 2023 con Monterrey, el torneo en que terminó primero.
