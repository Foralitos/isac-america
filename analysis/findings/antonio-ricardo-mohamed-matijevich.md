# Hallazgos — Turco Mohamed en la Liga MX (Clausura 2023 → Apertura 2026, 102 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Antonio Mohamed con datos: Pumas UNAM (Clausura 2023 → Apertura 2023, 25) y Toluca (Clausura 2025 → Apertura 2026, 77). Récord 53-26-23. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas, "presión tras pérdida" = contrapresión); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia. Aviso de datos: en la vuelta de la final del Apertura 2025 (Toluca 2-1 Tigres, 2025-12-15) la tanda de penales quedó contada como juego (10.33 xG de balón parado a favor, 9.66 en contra, 9.65 en transición); los cortes que incluyen ese partido (local, ganó, top 6, liguilla, final, vuelta perdiendo, Apertura 2025) traen el peligro de balón parado y tras robo inflado, y aquí se señala cada vez que pesa.

## Identidad (M-1, M-2, M-3)

### Crea 1.56 goles esperados por partido, de los más altos de la liga, y con tiros de mejor calidad
- bloque: M-1
- metrica: np_xg
- cifra: "xG sin penales 1.56 vs 1.14 de liga (p95); 15.7 tiros (p87); 0.10 xG por tiro (p85); 16.3 entradas al área vs 14.0 (p83); 17.8 % de las secuencias terminan en tiro vs 15.3 % (p89); con Pumas 1.28 (p72), con Toluca 1.65 (p97)"
- kpi: "1.56 | 1.14 | goles esperados por partido | 95 | Peligro creado por partido | favor | liga"
- definiciones: D-02, D-12
- decision: "Rival: no es un equipo que tire desde lejos por volumen; hay que negar la llegada al área, porque cada tiro suyo vale más que el promedio. Staff: el ataque ya produce arriba de la liga; lo que decide los partidos es sostenerlo de visita y contra el top 6, donde cae"
Tira más y mejor: 15.7 tiros por partido y 0.10 goles esperados por tiro, las dos arriba de la liga, cuando lo normal es ganar en una y perder en la otra. Casi 18 de cada 100 ataques terminan en tiro, de los más altos de la liga. Con Toluca el peligro creado sube a 1.65 por partido; con Pumas era 1.28, arriba de la liga pero sin ser de los más altos.

### Llega al área por dentro: 0.71 centros por cada llegada, de los más bajos de la liga
- bloque: M-1
- metrica: cross_ratio
- cifra: "cross ratio 0.71 vs 0.94 de liga (p8); 16.3 entradas al área (p83); 15.6 regates (p75); 111 pases progresivos vs 100 (p79); 42 % de tiros fuera del área (p49, como la liga); con Pumas 0.79 (p16), con Toluca 0.69 (p7)"
- kpi: "0.71 | 0.94 | centros por cada llegada al área | 8 | Centros por cada llegada al área | neutro | liga"
- definiciones: D-12, D-14
- decision: "Rival: cerrar el carril central y la zona 14 con el doble pivote; obligarlo a centrar es sacarlo de su juego. Staff: el perfil de los extremos debe ser de conducción y pase interior, no de centro; el centro solo aparece cuando va perdiendo"
Llega mucho al área (16 veces por partido, arriba de la liga) y lo hace casi siempre con el balón al pie o con pase interior: 0.71 centros por llegada cuando la liga centra casi una vez por llegada. El rasgo viaja: con Pumas y con Toluca está entre los más bajos de la liga. Los centros suben solo cuando va perdiendo (12.7 por 90 minutos contra 7.0 cuando va ganando), que es el único momento en que se vuelve un equipo de centro.

### No roba más que la liga, pero cada robo pesa: 0.79 goles esperados tras robo por partido
- bloque: M-3
- metrica: transition_xg
- cifra: "xG en transición 0.79 vs 0.51 (p95); transiciones 64.9 vs 63.2 (p68, como la liga); 4.8 tiros en transición vs 3.8 (p88); conversión 7.9 % vs 6.3 % (p89); recuperaciones altas 14.1 vs 11.9 (p85); con Pumas 0.78 (p95), con Toluca 0.79 (p95)"
- kpi: "0.79 | 0.51 | goles esperados tras robo por partido | 95 | Peligro creado tras robar el balón | favor | liga"
- definiciones: D-03
- decision: "Rival: la pérdida en campo propio es lo que más castiga; salir en largo contra su presión y no arriesgar el pase interior en salida. Staff: el modelo convierte robos, no acumula robos; conviene medir cuántas recuperaciones altas acaban en tiro antes que la cantidad de presiones"
Sus ataques tras robo son los normales de la liga (65 por partido), pero terminan en tiro casi 8 de cada 100 veces y generan más peligro que el 95 % de la liga. La vuelta de la final del Apertura 2025 contra Tigres tiene la tanda de penales contada como juego; sin ese partido el peligro tras robo queda en 0.70 por partido, todavía por arriba del cuarto superior de la liga (0.60). Es el rasgo que más viaja: con Pumas y con Toluca marca lo mismo.

### Presión tras pérdida que recupera: 31 % de las veces, la liga 27 %; roba 14 balones en campo rival
- bloque: M-2
- metrica: cp_regain_pct
- cifra: "contrapresiones con regain 30.7 % vs 27.4 % (p89); 35.8 contrapresiones vs 32.0 (p81); fases de presión con recuperación 33.9 % vs 31.2 % (p81); 14.1 recuperaciones altas (p85); PPDA 12.0 vs 14.0 (p25 del valor, p75 bueno); altura de presión 56.5 m vs 55.8 (p58); 19.5 % de fases altas (p73); con Pumas regain 27.3 % (p50) y fases con recuperación 28.4 % (p15); con Toluca 31.8 % (p93) y 35.7 % (p93)"
- kpi: "31 % | 27 % | de las presiones tras pérdida recuperan el balón | 89 | Presiones tras pérdida que recuperan | favor | liga"
- definiciones: D-06, D-05, D-05b, D-13
- decision: "Rival: tras robarle, el primer pase tiene que ser largo o hacia atrás; en los 5 segundos después de la pérdida su equipo recupera más que casi nadie. Staff: la eficacia de la presión es de Toluca, no del modelo: con Pumas corría igual y robaba como la liga; cuidar los perfiles de los mediocampistas que la sostienen"
No es una presión especialmente alta (presiona a 56 metros de su portería, como la liga) ni de volumen (159 presiones, como la liga), sino una presión que recupera: el 31 % de las presiones tras pérdida y el 34 % de las rachas de presión terminan con el balón de vuelta, las dos arriba de la liga. Deja dar 12 pases antes de robar frente a 14 de la liga. Con Pumas la presión era de volumen y no de eficacia: 38.6 presiones tras pérdida por partido pero solo 27 % recuperaba, y las rachas de presión robaban el 28 % de las veces, de las más bajas.

### Balance de peligro de 0.68 por partido, de los más altos: concede 0.93 y el rival apenas vale 1.15
- bloque: M-2
- metrica: xgd
- cifra: "xGD 0.68 vs -0.03 (p94); xG concedido 0.93 vs 1.17 (p18 del valor, p82 bueno); OBV concedido 1.15 vs 1.44 (p9 del valor, p91 bueno); 11.7 tiros concedidos vs 13.6 (p21); 54 % desde el área vs 58 % (p19); 13.0 entradas al área del rival vs 14.2 (p35); con Pumas xGD 0.48 (p86), con Toluca 0.75 (p95)"
- kpi: "0.68 | -0.03 | goles esperados de diferencia por partido | 94 | Balance entre el peligro que crea y el que concede | favor | liga"
- definiciones: D-12
- decision: "Rival: para ganarle hay que tirar desde dentro del área, porque de fuera no entra y él casi no concede ahí; el 46 % de los tiros que permite nacen fuera. Staff: la defensa no es el problema; la diferencia entre sus torneos buenos y malos está en la localía y en el rival, no en el bloque"
Concede 0.93 goles esperados por partido y 11.7 tiros, las dos abajo de la liga, y además de peor calidad: solo 54 % de los tiros que permite salen desde el área, cuando la liga permite 58 %. El valor de lo que hace el rival con balón en su contra (1.15 por partido) está entre los más bajos de la liga. El balance entre lo que crea y lo que concede es positivo con los dos equipos; con Toluca es de los cinco mejores registros de la liga.

### Con el balón es un equipo normal: 57 % de sus ataques llegan cerca del área, como la liga
- bloque: M-1
- metrica: seq_final_third_pct
- cifra: "secuencias que llegan al último tercio 56.9 % vs 55.0 % (p64); directness 0.58 vs 0.59 (p48); 83.3 secuencias (p72); field tilt 53.8 % (p67); 41.9 conducciones progresivas (p65); salida larga 43.6 % (p40); cuando perdió: xG 1.13 (p48), xG en transición 0.32 (p11), 0.17 goles de balón parado (p3)"
- kpi: "57 % | 55 % | de sus ataques llegan al último tercio | 64 | Ataques que llegan cerca del área | contra | liga"
- definiciones: D-02, D-10
- decision: "Rival: quitarle el robo y el balón parado y queda un equipo de posesión promedio; bloque medio ordenado, sin pérdidas en salida, y aceptar que tenga el balón. Staff: falta un plan contra bloque bajo; cuando el partido se cierra, la posesión no se convierte en peligro por arriba de la liga"
Su posesión (54 %, arriba de la liga) no se traduce en un ataque posicional superior: la verticalidad, la cantidad de ataques, el porcentaje que llega cerca del área y las conducciones están todas como la liga. El peligro de más viene del robo y del balón parado. En sus 23 derrotas, con esas dos armas apagadas, el peligro creado fue 1.13 por partido, exactamente la media de la liga.

## Consistencia y variabilidad (D-20, D-21, D-22, D-23, D-24, D-25, D-26)

### En casa 33-11-6 y concede 0.75 goles esperados, de los más bajos; de visita 20-15-17 y concede 1.10
- bloque: M-2
- escenario: localia
- metrica: np_xg_conceded
- cifra: "Local 33-11-6: xG concedido 0.75 (p4), xG 1.80, 20.0 % de secuencias con tiro (p99), OBV ofensivo 1.88 (p99), field tilt 57.9 (p85), 11.3 entradas al área del rival (p14), 52 % de tiros concedidos desde el área (p7), 0.88 goles de balón parado (p99). Visita 20-15-17: xG concedido 1.10 (p39), xG 1.32, field tilt 49.9 (p50), 14.7 entradas del rival (p55), 0.46 goles de balón parado (p54), 40.3 contrapresiones (p96), xG rival tras pérdida 0.21 (p71) vs 0.11 de local (p10)"
- kpi: "0.75 | 1.10 | goles esperados en contra por partido | 4 | Peligro concedido de local | favor | de visita"
- definiciones: D-20, D-12, D-06, D-04
- decision: "Rival: de visita en su cancha, no hay que salir a jugar; de local contra él, provocarle pérdidas en salida, porque fuera de casa el peligro justo después de perderla se le duplica. Staff: la versión de visita corre más (171 presiones y 40 presiones tras pérdida) pero recupera peor y queda expuesta; conviene bajar el ímpetu de la presión tras pérdida fuera de casa y cerrar antes"
Es el corte que más lo parte en dos. De local es uno de los equipos que menos concede en la liga y uno de cada cinco ataques termina en tiro; de visita concede 47 % más peligro y el dominio territorial cae de 58 % a 50 %. La diferencia no es de pasividad: de visita presiona más (171 presiones y 40 presiones tras pérdida por partido, de las más altas) pero el rival le genera el doble de peligro en los 10 segundos después de cada pérdida suya. El 0.88 de goles de balón parado en casa trae la tanda de la final contra Tigres; sin ella sigue arriba del 0.46 de visita.

### Ganando se repliega a 53 metros y deja dar 13 pases; perdiendo presiona a 61 y deja dar 9
- bloque: M-2
- escenario: marcador
- metrica: ppda_own
- cifra: "Por 90 minutos. Ganando (3723 min): PPDA 13.3 (p41), altura de presión 52.7 m, 138.7 presiones, 89.6 pérdidas, 12.7 entradas al área del rival (p23), 11.6 tiros concedidos (p20), 8.1 recuperaciones altas, 7.0 centros. Perdiendo (1739 min): PPDA 8.8 (p27 del valor), altura 60.8 m (p79), 14.1 recuperaciones altas (p87), 43.3 conducciones progresivas, 15.0 regates, 12.7 centros, 10.6 entradas del rival, 9.3 tiros concedidos. Empatando: PPDA 10.5 (p16), 151.2 presiones (p77), 34.9 contrapresiones (p89)"
- kpi: "8.8 | 13.3 | pases que deja dar antes de robar | 73 | Intensidad de presión cuando va perdiendo | neutro | cuando va ganando"
- definiciones: D-21, D-05b, D-13
- decision: "Rival: si va ganando, su línea de presión baja 8 metros y te deja tener el balón; es el momento de meter gente al área, porque concede más llegadas y tiros que en cualquier otro estado. Si va perdiendo, salir en largo: presiona a 61 metros y roba 14 balones altos. Staff: el repliegue con ventaja concede más tiros y llegadas que el partido abierto; sostener la altura un cuarto de hora más después del gol"
El marcador le cambia la altura del equipo más que a casi nadie: ocho metros de diferencia entre ir ganando e ir perdiendo. Con ventaja es cuando más llegadas (12.7) y más tiros (11.6) concede por 90 minutos; yendo abajo concede menos de las dos, porque recupera el balón arriba. Perdiendo también cambia el cómo: casi el doble de centros y más conducciones y regates. El peligro tras robo y de balón parado con ventaja (1.04 y 0.70 por 90) traen la tanda de la final contra Tigres y no se usan aquí.

### Pierde creando lo normal: 1.13 de peligro, con el balón parado en 0.17 goles y el robo en 0.32
- bloque: M-3
- escenario: resultado
- metrica: transition_xg
- cifra: "Perdió 23: xG 1.13 (p48), xG en transición 0.32 (p11), 0.17 goles de balón parado (p3), xG concedido 1.25 (p64), xG rival tras pérdida 0.26 (p91), xG concedido en transición 0.63 (p80), 2.35 tiros rivales tras pérdida (p66), 3.2 % de córners cortos (p7), primer cambio al 51.2' (p26), 12.7 faltas (p27). Ganó 53: xG 1.85 (p100), xG concedido 0.85 (p11), fases de presión con recuperación 36.1 % (p95), 0.11 xG por tiro (p98), primer cambio al 58.2'. Empató 26: xG concedido 0.81 (p7), xG concedido en transición 0.25 (p3)"
- kpi: "0.32 | 0.51 | goles esperados tras robo por partido | 11 | Peligro creado tras robar el balón cuando pierde | contra | liga"
- definiciones: D-03, D-04, D-07
- decision: "Rival: la receta de sus derrotas es no regalarle el robo (su peligro tras robo cae a un tercio) y castigar sus pérdidas, no encerrarse: en sus derrotas el rival le generó 0.26 en los 10 segundos después de cada pérdida, de los más altos. Staff: cuando el partido no se gana con robo ni balón parado, el equipo no tiene tercera vía; el peligro posicional de las derrotas es el de la media de la liga"
Las derrotas no vienen de un ataque que se apaga del todo (1.13 goles esperados, la media de la liga), sino de que las dos armas que lo ponen arriba de la liga dejan de funcionar: el peligro tras robo cae de 0.79 a 0.32 y los goles de balón parado de 0.67 a 0.17. Al mismo tiempo se vuelve vulnerable al revés: el peligro del rival justo después de sus pérdidas sube a 0.26, de los más altos, y el contragolpe en contra a 0.63. En los empates, en cambio, es cuando menos concede (0.81), un equipo que no pierde pero tampoco rompe.

### Arranca con el balón (56 % de posesión, 155 presiones por 90) y del 60 al 90 concede 1.19
- bloque: M-2
- escenario: momento
- metrica: possession_pct
- cifra: "Por 90 minutos. 0-30: posesión 55.9 % (p83), 106.3 pases progresivos (p85), field tilt 57.3 (p77), 155.1 presiones, 36.2 contrapresiones (p82), 39.0 presiones en último tercio, xG concedido 0.89, 10.4 entradas del rival. 30-60: posesión 54.5 %, xG concedido 0.97. 60-90: posesión 52.3 % (p64), 89.7 pases progresivos, field tilt 52.2 (p58), 133.0 presiones, 28.6 contrapresiones, xG concedido 1.19, 12.5 entradas del rival, OBV ofensivo 1.68 (p90). Por tramos de 15: xG 0.97 en 0-15 y 1.53 en 45-60 (p93); 0.86 concedido en 0-15 y 1.35 en 75-90"
- kpi: "56 % | 52 % | de posesión | 83 | Posesión en la primera media hora | neutro | del minuto 60 al 90"
- definiciones: D-22, D-01, D-06, D-14
- decision: "Rival: aguantar la primera media hora sin salir a jugar, porque ahí presiona y domina más que en ningún tramo; del 60 en adelante el partido se abre y es cuando se le puede llegar: concede un tercio más de peligro y dos llegadas más por 90. Staff: la caída de la presión tras pérdida (de 36 a 29 por 90) coincide con el tramo en que más concede; los cambios del 60 deberían reponer piernas en el mediocampo, no solo arriba"
Abre los partidos como un equipo de posesión y presión: 56 % del balón, 106 pases hacia adelante y 36 presiones tras pérdida por 90 minutos en la primera media hora. Todo eso baja a partir del minuto 60 (52 %, 90 pases, 29 presiones tras pérdida) y el peligro que concede sube de 0.89 a 1.19 por 90. Su propio peligro no cae (del 45 al 60 es cuando más crea, 1.53 por 90), así que el último tercio del partido es el más abierto de los tres, para los dos lados. Los números de balón parado del 75-90 traen la tanda de la final contra Tigres y no se usan.

### Persiguiendo la liguilla directa sube la presión a 62 metros y la defensa a 53, lo más alto de sus cortes
- bloque: M-2
- escenario: tabla
- metrica: press_height
- cifra: "Directa alcanzable (9 partidos, 6-0-3): altura de presión 61.6 m (p100), línea defensiva 53.5 m (p98), field tilt 58.4 (p86), xG por tiro 0.07 (p5), xG concedido en transición 0.49 (p48). En zona directa (46, 27-10-9): altura 56.2 m (p54), xG por tiro 0.11 (p97), 61 % de regates completados (p89), 75.9 % de saques de banda retenidos (p97). Arranque J1-J4 (20, 9-8-3): línea defensiva 51.1 m (p87), 0.15 goles concedidos de balón parado (p2), xG concedido en transición 0.30 (p5), OBV concedido 1.10 (p6); empatando en arranque 175.8 presiones y 38.5 contrapresiones por 90. Liguilla (18, 7-4-7): altura 54.1 m (p26), field tilt 48.5 (p43)"
- kpi: "62 | 56 | metros desde su portería | 100 | Altura de la presión cuando la liguilla directa es alcanzable | neutro | con la liguilla directa en la mano"
- definiciones: D-23, D-13
- decision: "Rival: cuando su equipo necesita puntos para la directa, la línea sube 5 metros y la calidad de sus tiros cae; hay espacio a la espalda y conviene un delantero rápido más que un bloque bajo. Staff: la reacción de urgencia funciona en resultados (6 de 9) pero con tiros de peor calidad; vigilar que la línea alta no se vuelva el plan por default cuando llegue la liguilla, donde la presión es la más baja de todos los cortes"
Son nueve partidos, así que es un indicio: con la liguilla directa al alcance pero no asegurada, el equipo juega su versión más alta (presión a 62 metros, defensa a 53) y gana seis de nueve, pero la calidad de cada tiro cae a 0.07, de las más bajas. Su mejor versión es con la liguilla directa en la mano (46 partidos, 27 ganados): tiros de 0.11, regates que salen y balón parado que retiene. En las primeras cuatro jornadas arranca presionando como nunca (176 presiones por 90 empatando) y concediendo casi nada (0.15 goles de balón parado en contra), pero empata 8 de 20.

### En liguilla el peligro creado cae un tercio: 1.10 en cuartos y 1.08 en semis frente a 1.66 en fase regular
- bloque: M-1
- escenario: fase
- metrica: np_xg
- cifra: "Fase regular (84, 46-22-16): xG 1.66, xG en transición 0.73 (p91), 0.10 xG por tiro (p91), 5.4 córners, 0.58 goles de balón parado. Cuartos (8, 3-1-4): xG 1.10, xG en transición 0.36 (p17), xG rival tras pérdida 0.30 (p94), primer cambio al 60.6' (p96), 5.9 córners, 0.50 goles de balón parado. Semis (6, 2-2-2): xG 1.08, primer cambio al 41.5' (p0), fases con recuperación 26.8 % (p8), 42.7 % de regates completados (p2), 4.0 córners. Final (4, 2-1-1): xG 1.01, 8 % de fases altas (p0), 0.06 xG por tiro (p0)"
- kpi: "1.10 | 1.66 | goles esperados por partido | | Peligro creado en cuartos de final | contra | en fase regular"
- definiciones: D-24, D-03, D-05
- decision: "Rival en cuartos: su peligro tras robo se apaga (0.36) y es el momento en que más castiga el rival sus pérdidas (0.30 en 10 segundos); hay que jugarle de tú a tú y no esperarlo. Staff: en liguilla el equipo cambia tarde en cuartos (minuto 61) y temprano en semis (41); unificar el gatillo del primer cambio y recuperar el robo alto, que es lo que desaparece"
Son 18 partidos de liguilla (7-4-7) contra 84 de fase regular, y hay que leerlos con esa cautela. El patrón es claro en la creación: baja un tercio en cualquier fase de liguilla, y lo que más baja es el peligro tras robo en cuartos (0.36 contra 0.73). En semis la presión deja de recuperar (27 % de las rachas, de las más bajas) y el regate deja de salir (43 %). En finales el equipo renuncia a la presión alta (8 % de las rachas en campo rival, lo más bajo de todos sus cortes). Los números de balón parado y contragolpe de finales traen la tanda de penales contra Tigres contada como juego y no sirven.

### Pierde las idas (1-2-6) con 0.24 de peligro tras robo y remonta las vueltas yendo abajo (4-1-1)
- bloque: M-3
- escenario: ida_vuelta
- metrica: transition_xg
- cifra: "Ida (9): 1-2-6, xG en transición 0.24 (p1), OBV ofensivo 1.15 (p12), 50.5 % de secuencias al último tercio (p13), field tilt 45.3 (p33), 4.9 córners, 13.6 recuperaciones altas. Vuelta perdiendo el global (6): 4-1-1, OBV ofensivo 1.92 (p100), field tilt 51.8, posesión 51.1 %, línea defensiva 44.6 m (p9). Vuelta empatado (2): 2-0-0. Vuelta ganando (1): 0-1-0"
- kpi: "0.24 | 0.51 | goles esperados tras robo por partido | 1 | Peligro creado tras robar el balón en partidos de ida | contra | liga"
- definiciones: D-24, D-03
- decision: "Rival: la ida es el partido para ganarle; su equipo no roba ni llega (la mitad de sus ataques no pasa del medio campo). En la vuelta, si va abajo, se viene con todo con la defensa a 45 metros: ahí el contragolpe es el camino. Staff: las series se ganan en la vuelta, pero cuatro de las seis idas perdidas fueron por un gol; planear la ida para no perderla ya resolvería la mitad de las series"
Con 9 idas y 6 vueltas yendo abajo, es patrón y no ley, pero se repite con los dos equipos: Pumas perdió la ida con Chivas y remontó 3-0; Toluca perdió las idas con Monterrey (dos veces) y Tigres y ganó las tres vueltas, y solo contra Pachuca en 2026 la ida perdida terminó en eliminación. En las idas el equipo es irreconocible: el peligro tras robo es de los más bajos de la liga y apenas la mitad de sus ataques llega cerca del área. Yendo abajo en la vuelta, el valor de sus acciones con balón es de los más altos de la liga y la defensa baja a 45 metros para ir con todo.

### Contra el top 6 (19-10-12) el dominio se va: 48 % del territorio y 12 robos altos; contra el resto 58 % y 15
- bloque: M-2
- escenario: rival
- metrica: high_recoveries
- cifra: "Top 6 (41): 19-10-12, field tilt 48.1 (p41), 12.1 recuperaciones altas (p58), 53.5 % de secuencias al último tercio (p35), altura de presión 55.0 m (p38), posesión 50.9 %, salida larga 50.5 % (p67), primer cambio al 53.9', xG 1.32. Resto (61): 34-16-11, field tilt 57.6 (p84), 15.4 recuperaciones altas (p95), 59.2 % al último tercio (p86), altura 57.6 m (p77), posesión 55.9 % (p88), salida larga 39.0 % (p22), 0.16 xG de tiro libre indirecto (p98), primer cambio al 57.8', xG 1.71. Rivales con peor récord: Pachuca 1-3-2, América 2-2-3, Mazatlán 1-1-2, Cruz Azul 1-3-1"
- kpi: "12.1 | 15.4 | robos en campo rival por partido | 58 | Robos en campo rival contra rivales del top 6 | contra | contra el resto"
- definiciones: D-25, D-03, D-13
- decision: "Rival de arriba: salir jugando contra él funciona; contra el top 6 su presión se queda a 55 metros y roba tres balones altos menos. Rival de abajo: no salir jugando; es donde más roba (15 por partido) y más llega. Staff: contra rivales que saben salir de la presión el equipo renuncia a la altura y juega más largo con el portero (50 % de salida larga); hace falta un plan de presión específico, porque el récord contra el top 6 (19-10-12) es el de un equipo normal"
Contra los seis de arriba deja de ser el equipo dominante: el dominio territorial cae 10 puntos, los robos en campo rival caen de 15 a 12, la presión baja 2.6 metros y el portero juega en largo la mitad de las veces. El peligro creado baja de 1.71 a 1.32 y el récord pasa de ganar más de la mitad a ganar menos de la mitad. Los números de balón parado y contragolpe en contra ante el top 6 traen la tanda de la final contra Tigres y no se usan.

### De presionar a tener el balón: de 184 presiones y 52 % de posesión en el Clausura 2025 a 127 y 60 % en el Apertura 2026
- bloque: M-2
- escenario: torneo
- metrica: pressures
- cifra: "Clausura 2025 (23, 14-6-3, campeón): 184.0 presiones (p96), 39.4 fases de presión (p98), posesión 52.4 %, field tilt 50.0, PPDA 13.3, xG 1.55, xG concedido 0.90. Apertura 2025 (23, 14-5-4, campeón): 157.4 presiones, posesión 55.1 %, field tilt 55.9, xG 1.74. Clausura 2026 (19, 8-6-5): 145.6 presiones, 28.7 fases, posesión 59.0 % (p98), field tilt 64.4 (p97), PPDA 11.5, xG 1.61. Apertura 2026 (12, 6-3-3): 127.2 presiones (p9), 23.1 fases (p11), 40.0 % de fases con recuperación (p99), 26.4 % de fases altas (p98), posesión 59.9 % (p99), field tilt 61.7 (p93), PPDA 10.0, 20.5 entradas al área (p99), 6.5 córners (p96), xG 1.71, xG concedido 1.06. Pumas, Apertura 2023 (21, 9-5-7): PPDA 10.3, posesión 48.7 %, field tilt 46.0, 4-4-2 en 11 partidos"
- kpi: "127 | 184 | presiones por partido | 9 | Presiones por partido en el Apertura 2026 | neutro | en el Clausura 2025"
- definiciones: D-26, D-05, D-01
- decision: "Staff: el Toluca campeón era un equipo de volumen de presión (184 presiones, 39 rachas) con la mitad del balón; el de 2026 tiene el 60 % del balón, presiona la mitad y recupera mejor cuando presiona, pero el récord bajó de 14 ganados por torneo a 8 y 6. Más dominio no está dando más puntos; revisar si el equipo necesita el balón o el robo. Rival en 2026: dejarle el balón ya no lo incomoda; hay que quitárselo"
En torneo y medio Toluca cambió de piel. Las presiones por partido cayeron de 184 (de las más altas de la liga) a 127 (de las más bajas), mientras la posesión subió de 52 % a 60 % y el dominio territorial de 50 % a 62 %. Las rachas de presión son menos pero mejores: en el Apertura 2026 el 40 % recupera el balón y el 26 % ocurre en campo rival, las dos de las más altas. La creación se mantuvo (1.55 a 1.71), lo que concede subió un poco (0.90 a 1.06) y los puntos bajaron. Con Pumas en 2023 era otro equipo: 4-4-2, menos balón que el rival y presión intensa (10.3 pases antes de robar).

## Balón parado (M-4)

### 0.67 goles de balón parado por partido, de los más altos de la liga; 0.58 en fase regular
- bloque: M-4
- metrica: sp_goals
- cifra: "goles de balón parado 0.67 vs 0.44 (p94); xG de balón parado 0.66 vs 0.47 (p91); fase regular 0.58, cuartos 0.50, semis 0.67. Tiros de balón parado a favor por tipo: córner 244 tiros, xG 22.5, 19 goles; tiro libre al área 143 tiros, xG 12.9, 15 goles; penal 37 tiros, xG 29.0, 32 goles; tiro libre directo 33 tiros, 1 gol; saque de banda 13 tiros, 1 gol. Con Pumas 0.64 (p91), con Toluca 0.68 (p94). Cuando ganó 1.06 (p100), cuando perdió 0.17 (p3)"
- kpi: "0.67 | 0.44 | goles de balón parado por partido | 94 | Goles de balón parado por partido | favor | liga"
- definiciones: D-07
- decision: "Rival: no hacer faltas a 25 metros ni conceder córners baratos; el balón parado es el segundo motor del equipo y decide sus victorias (1.06 goles cuando gana, 0.17 cuando pierde). Staff: el penal y el tiro libre al área son los que rinden; el tiro libre directo (33 tiros, 1 gol) sobra"
Es la segunda arma del equipo junto con el robo y viaja con él: con Pumas y con Toluca está entre los más altos de la liga. El total trae la tanda de penales de la final contra Tigres contada como juego, por eso la referencia más honesta es la de fase regular, 0.58 goles por partido, todavía arriba de la liga (0.44). Los 37 penales a favor con 32 goles incluyen esa tanda; aun descontándola, el penal es su tiro de balón parado más rentable, seguido del tiro libre colgado al área (15 goles en 143 tiros).

### 542 córners, 20 goles: 55 % abiertos, 26 % cerrados, y el cerrado desde la izquierda es el que más rinde
- bloque: M-4
- metrica: corner_inswing_pct
- cifra: "542 córners (5.3 por partido, p69), 20 goles; mezcla: outswinging 55.4 % (liga 41.5 %), inswinging 26.2 % (p24, liga 34.9 %), corto 12.5 % (p54, liga 13.3 %); lado derecha 51.5 %. Derecha outswinging al centro: 135 cobros, 67 tiros, xG 5.78, 6 goles. Izquierda outswinging al centro: 108, 62 tiros, xG 5.11, 3 goles. Izquierda inswinging al centro: 61, 30 tiros, xG 4.03, 4 goles. Derecha inswinging: 44, 18 tiros, 1 gol. Izquierda outswinging al primer palo: 25, 11 tiros, 0 goles. xG por córner 0.04 (p69); xG de córner 0.22 (p79). En contra: 455 córners (4.5 por partido), 11 goles, xG por córner concedido 0.03 (p42). Con Pumas xG de córner 0.15 (p31), con Toluca 0.24 (p86)"
- kpi: "26 % | 35 % | de sus córners son cerrados | 24 | Córners cerrados | neutro | liga"
- definiciones: D-07, D-12
- decision: "Staff: el cerrado desde la izquierda genera más por cobro (4 goles en 61) que el abierto desde la izquierda (3 en 108); cobrar más cerrados desde ese lado y dejar el primer palo (25 cobros, cero goles). Rival: defender el segundo palo y el centro del área chica contra el abierto desde la derecha, que es el que más repite y el que más goles le ha dado"
Es un equipo de córner abierto: más de la mitad de sus cobros salen alejándose de la portería, cuando la liga reparte 41 % abiertos y 35 % cerrados. Por cobro rinde como la liga (0.04 goles esperados por córner), así que el peligro de córner arriba de la liga viene del volumen con Toluca (0.24 por partido) y no de la ejecución. Defendiendo es normal: 11 goles de córner en contra en 455 cobros y 0.03 por córner concedido. El córner corto lo usa como la liga y desaparece en sus derrotas (3 % de los córners).

### El tiro libre colgado al área es su mejor cobro: 0.13 goles esperados por partido, casi el doble de la liga
- bloque: M-4
- metrica: fk_indirect_xg
- cifra: "xG de tiro libre indirecto 0.13 vs 0.07 (p89); 568 tiros libres (5.6 por partido), 15 goles, xG 15.9, 33 directos; tiro libre al área 143 tiros, 15 goles; directo 33 tiros, xG 1.5, 1 gol, xG de tiro libre directo 0.01 (p44). Mejores paquetes al área: 42 cobros, 19 tiros, xG 1.54, 4 goles; 19 cobros, 19 tiros, xG 2.87, 3 goles. En contra: 520 tiros libres, 5 goles, 44 directos, tiro libre al área 64 tiros y 3 goles. Con Pumas 0.13 (p90), con Toluca 0.13 (p89); contra el resto 0.16 (p98), contra el top 6 0.08 (p61)"
- kpi: "0.13 | 0.07 | goles esperados por partido | 89 | Peligro de tiro libre colgado al área | favor | liga"
- definiciones: D-07, D-12
- decision: "Rival: la falta entre 25 y 35 metros, por los costados, es la que no hay que hacer; su tiro libre directo no asusta (1 gol en 33), el colgado sí (15 en 143). Staff: quitar el tiro directo del repertorio salvo distancia corta y centrar todos los cobros lejanos al área; es lo que ya funciona y viaja entre equipos"
Rinde el mismo 0.13 con Pumas y con Toluca, así que es trabajo del cuerpo técnico y no de un cobrador. Quince goles desde tiro libre colgado al área en 143 tiros contra uno desde tiro directo en 33: el cobro directo apenas suma. En contra está bien defendido: 5 goles de tiro libre en 520 faltas concedidas. Contra el top 6 el peligro de tiro libre al área cae a la mitad (0.08), lo que sugiere que los equipos de arriba le conceden menos faltas en zona de centro.

### Saques de banda: pocos cerca del área (6.7 por partido) pero conserva el 70 %, arriba de la liga
- bloque: M-4
- metrica: throwin_retention_pct
- cifra: "saques en zona de peligro retenidos 69.7 % vs 61.1 % (p82); saques en zona de peligro 6.7 por partido vs 7.7 (p20); 686 saques a favor, 9 goles, retiene 69.4 %; derecha lejos: 312 saques, 46 tiros, xG 4.66, 5 goles; izquierda lejos: 273 saques, 27 tiros, xG 1.17, 0 goles. En contra: 793 saques (7.8 por partido), 7 goles, el rival retiene 53.3 %. Con Pumas 52.8 % (p19), con Toluca 75.2 % (p96); en zona directa 75.9 % (p97), en liguilla 60.4 % (p46)"
- kpi: "70 % | 61 % | de los saques de banda cerca del área que conserva | 82 | Saques de banda cerca del área que conserva | favor | liga"
- definiciones: D-07
- decision: "Rival: el saque de banda por la derecha de Mohamed es el que produce (46 tiros y 5 goles contra 27 tiros y cero por la izquierda); marcar al receptor del lado derecho y dejar el izquierdo. Staff: la retención alta es de Toluca (75 %), con Pumas se perdía casi la mitad; el saque por la izquierda no genera nada y vale revisar la rutina de ese lado"
Tiene pocos saques de banda cerca del área rival (6.7 por partido, abajo de la liga) porque llega por dentro y no por la banda, pero los que tiene los conserva: 70 % contra 61 % de la liga, y con Toluca 75 %, de los más altos. El rendimiento es muy asimétrico: por la derecha 9 de cada 10 tiros tras saque de banda y los 5 goles de ese lado; por la izquierda, con casi los mismos saques, ningún gol. Defendiendo roba casi la mitad de los saques peligrosos del rival (que retiene 53 %) y ha concedido 7 goles en 793.

## Jugadores y cambios (M-5)

### Cambia de dibujo 2.3 veces por partido, arriba de la liga; el 4-2-3-1 es base solo en 45 % de los partidos
- bloque: M-5
- metrica: tactical_shifts
- cifra: "cambios de formación 2.27 vs 1.80 (p84); cambio real de dibujo en 71 de 102 partidos; dibujo inicial 4-2-3-1 en 46 (45 %), 4-4-2 en 23 (23 %), 3-4-2-1 en 9 (9 %), 4-1-4-1 en 5, 3-4-3 en 5, 3-5-2 en 4. Pumas Apertura 2023: 4-4-2 en 11, 4-2-3-1 en 6. Toluca Clausura 2026: 4-2-3-1 en 12, 3-4-3 en 4. Perdiendo, tramo 65: 4-4-2 31 % de los minutos, 4-2-3-1 24 %. Empatando, tramo 45: 4-2-3-1 41 %, 3-4-2-1 18 %. Ganando, tramo 85: 4-2-3-1 18 %, 4-4-2 16 %"
- kpi: "2.3 | 1.8 | cambios de dibujo por partido | 84 | Cambios de dibujo dentro del partido | neutro | liga"
- definiciones: SB, D-21
- decision: "Rival: el dibujo de salida no dice mucho; esperar un cambio de estructura en el descanso (empatando pasa a tres centrales con 3-4-2-1) y dos delanteros después del 60 si va perdiendo. Staff: la flexibilidad es real y consistente en los dos equipos; el riesgo es que ganando, en el último cuarto de hora, el equipo ya no está en ninguno de sus dos dibujos principales (34 % entre los dos)"
Doce dibujos iniciales distintos en 102 partidos y cambio real de estructura en 7 de cada 10. Con Pumas el 4-4-2 fue el dibujo principal (11 de 21 en el Apertura 2023); con Toluca es el 4-2-3-1, con el 3-4-3 como variante del Clausura 2026. El cambio tiene lógica por marcador: empatando, en el descanso, aparece la línea de tres (3-4-2-1); perdiendo, del 65 en adelante, el 4-4-2 pasa a ser el dibujo más usado; ganando, al final, el equipo se deshace en estructuras de cierre que no son ninguna de las dos.

### Perdiendo cambia al 52' (mediana en el descanso) y el peligro creado se cuadruplica después del cambio
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio perdiendo: 22 partidos, media 52.3', mediana 47'; empatando 54.6' (mediana 58'); ganando 59.6' (mediana 61'). Perdiendo, 15 min antes vs después del primer cambio: xG 0.14 a 0.60, tiros 2.3 a 4.3, xG concedido 0.27 a 0.21, field tilt 60 a 74, altura de presión 60 a 63. Empatando: xG 0.22 a 0.29, PPDA 13.4 a 12.0, field tilt 47 a 54. A quién saca perdiendo: pivote derecho 11, pivote izquierdo 9, extremo derecho 9, mediapunta 9, lateral izquierdo 8, lateral derecho 8. Cuando perdió el partido, primer cambio al 51.2' (p26); cuando ganó, 58.2' (p85). 4.5 cambios por partido, 434 tácticos y 27 por lesión"
- kpi: "0.60 | 0.14 | goles esperados en 15 minutos | | Peligro creado en los 15 minutos después del primer cambio, perdiendo | favor | antes del cambio"
- definiciones: D-21, SB
- decision: "Staff: el cambio perdiendo es la mejor decisión del partido y el gatillo ya está en el descanso; mantenerlo y preparar al que entra para empujar el dominio de 60 a 74 %, que es lo que pasa. Rival: si va perdiendo al descanso, esperar un cambio en el vestidor que saca un pivote o un lateral, no un delantero; el equipo que vuelve es más alto y más ofensivo"
Perdiendo no espera: la mitad de las veces el primer cambio llega en el descanso. Y funciona como pocos: en el cuarto de hora siguiente el peligro creado pasa de 0.14 a 0.60, los tiros casi se duplican, el dominio territorial sube 14 puntos y el peligro concedido baja. A quién saca dice el cómo: perdiendo sacrifica un pivote (20 veces entre los dos) o un lateral (16), no a los de arriba. Empatando el cambio también suma, aunque menos; es la versión ganando la que se revisa aparte.

### Ganando cambia al 60' y el equipo empeora: el peligro concedido sube de 0.14 a 0.22 y el creado cae a la mitad
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio ganando: 44 partidos, media 59.6', mediana 61'; 15 min antes vs después: xG 0.42 a 0.26, xG concedido 0.14 a 0.22, tiros 2.5 a 2.1, PPDA 16.7 a 16.6, field tilt 46 a 45, altura de presión 54 a 52. A quién saca ganando: delantero centro 27, extremo derecho 25, pivote izquierdo 18, extremo izquierdo 17, segundo delantero 17, volante derecho 14. Todos los cambios ganando: 221, minuto medio 73.3'. Ganando por 90 min: PPDA 13.3, altura de presión 52.7 m, 12.7 entradas al área del rival"
- kpi: "0.22 | 0.14 | goles esperados en contra en 15 minutos | | Peligro concedido en los 15 minutos después del primer cambio, ganando | contra | antes del cambio"
- definiciones: D-21, SB
- decision: "Staff: ganando saca a los de arriba (delantero centro y extremos, 86 veces entre los cuatro) y el equipo pierde la salida de presión: concede más y crea la mitad. Probar el primer cambio con ventaja en el mediocampo o la defensa y dejar la referencia ofensiva para conservar el contragolpe. Rival: después del minuto 60, si va ganando, su equipo baja dos metros y deja de amenazar; es el momento de volcarse"
Es el espejo del cambio perdiendo. Con ventaja el primer cambio llega al minuto 60 y refresca a los de arriba; en el cuarto de hora siguiente el peligro creado cae de 0.42 a 0.26 y el concedido sube de 0.14 a 0.22, con la presión dos metros más abajo. No es un cambio defensivo que cierre el partido (el dominio y la intensidad de presión no cambian), es un cambio que quita amenaza sin añadir solidez. Cruza con el corte de marcador: ganando, por 90 minutos, es cuando más llegadas y tiros concede.

### Rota 3.6 titulares por partido y nadie pasa del 60 %; los dos títulos vinieron con un núcleo de 6 y 7 fijos
- bloque: M-5
- metrica: xi_stability
- cifra: "Jaccard entre onces consecutivos 0.55; 3.6 titulares distintos de un partido al siguiente; ninguno llega al 70 % de titularidades en 102 partidos: Andrés Pereira 61 (60 %, 5198 min), Franco Romero 56 (55 %), Jesús Angulo 56 (55 %), Jesús Gallardo 55 (54 %), Paulinho 53 (52 %), Marcel Ruiz 51 (50 %), Alexis Vega 50 (49 %), Diego Barbosa 46 (45 %), Bruno Méndez 44 (43 %). Núcleo por torneo (titular en 70 % o más): Apertura 2023 con Pumas 8 jugadores; Clausura 2025 6 (Vega, Ruiz, Gallardo, Paulinho, Pereira, Angulo); Apertura 2025 7 (los mismos más Castro y Romero, sin Vega); Clausura 2026 0; Apertura 2026 3 (Pereira, Vega, Romero). 4.5 cambios por partido, 434 tácticos"
- kpi: "3.6 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB, D-26
- decision: "Staff: los dos torneos ganados tuvieron 6 y 7 jugadores titulares en 7 de cada 10 partidos; el Clausura 2026, sin ningún fijo, fue el peor de Toluca (8-6-5). La rotación es parte del modelo, pero el núcleo de mediocampo y defensa (Pereira, Romero, Ruiz, Gallardo) parece la condición. Rival: el once cambia en tres o cuatro nombres cada semana; preparar el partido por estructura y por roles, no por jugadores"
Ningún jugador es titular en más del 60 % de sus 102 partidos, y de un partido al siguiente cambian 3.6 nombres. La estabilidad no es constante: en los dos torneos campeones con Toluca hubo un núcleo de seis y siete jugadores (el central Pereira, el pivote Romero, Marcel Ruiz, Gallardo, Paulinho y Angulo como eje); en el Clausura 2026, con lesiones y rotación, ningún jugador llegó al 70 % y el equipo tuvo su peor torneo con Toluca. El cambio es casi siempre táctico (434 de 461) y no por lesión.

## Por equipo: qué viaja con Mohamed (Pumas UNAM 25 partidos, Toluca 77)

### Lo que viaja: el peligro tras robo (0.78 y 0.79), los robos altos (14 y 14) y el tiro libre al área (0.13 y 0.13)
- bloque: M-3
- escenario: equipo
- metrica: transition_xg
- cifra: "Pumas vs Toluca: xG en transición 0.78 (p95) vs 0.79 (p95); recuperaciones altas 14.1 (p86) vs 14.1 (p85); xG de tiro libre indirecto 0.13 (p90) vs 0.13 (p89); goles de balón parado 0.64 (p91) vs 0.68 (p94); xG concedido 0.90 (p15) vs 0.94 (p19); cross ratio 0.79 (p16) vs 0.69 (p7); altura de presión 56.4 vs 56.6 m; cambios de formación 2.12 (p78) vs 2.32 (p88); xGD 0.48 (p86) vs 0.75 (p95)"
- kpi: "0.78 | 0.79 | goles esperados tras robo por partido | 95 | Peligro creado tras robar el balón con Pumas | neutro | con Toluca"
- definiciones: D-26b, D-03, D-07
- decision: "Staff de cualquier club que lo contrate: lo que llega con él desde el primer torneo es el ataque tras robo, el robo alto, el balón parado ofensivo y una defensa que concede poco; eso no dependió de la plantilla. Rival: esas cuatro cosas hay que prepararlas igual contra cualquier equipo suyo"
Con una plantilla que terminó 13.ª antes de llegar (Pumas, Apertura 2023) y con la del campeón (Toluca), cuatro rasgos marcan idéntico: el peligro tras robo (de los más altos de la liga con los dos), los 14 robos en campo rival por partido, el tiro libre colgado al área y el balón parado a favor. También viaja lo que concede: alrededor de 0.9 goles esperados por partido con los dos, abajo de la liga. El dato de transición con Toluca trae la tanda de la final contra Tigres; sin ella queda en 0.67, todavía arriba de la liga y cerca del de Pumas.

### Lo que depende de la plantilla: con Pumas 47 % de posesión y juego directo, con Toluca 56 % y presión que recupera
- bloque: M-1
- escenario: equipo
- metrica: possession_pct
- cifra: "Pumas vs Toluca: posesión 47.5 % (p28) vs 56.0 % (p88); field tilt 43.5 (p25) vs 57.1 (p80); directness 0.63 (p96) vs 0.57 (p23); salida larga del portero 55.6 % (p78) vs 39.7 % (p24); precisión de pase 76.0 % (p18) vs 82.6 % (p84); 97.8 pases progresivos (p46) vs 115.2 (p86); fases de presión con recuperación 28.4 % (p15) vs 35.7 % (p93); contrapresiones 38.6 (p91) vs 34.9 (p78) con regain 27.3 % (p50) vs 31.8 % (p93); regates completados 45.3 % (p2) vs 59.4 % (p85); saques de banda retenidos 52.8 % (p19) vs 75.2 % (p96); secuencias con tiro 15.5 % (p54) vs 18.6 % (p93)"
- kpi: "47 % | 56 % | de posesión | 28 | Posesión con Pumas | neutro | con Toluca"
- definiciones: D-26b, D-01, D-05, D-06
- decision: "Staff: el modelo no necesita el balón; con Pumas fue un equipo directo, con salida larga y menos posesión que el rival, y aun así creó y concedió parecido. Lo que sí cambió con mejores jugadores es la eficacia: la presión recupera, el regate sale y el pase llega. Rival: contra un Mohamed con plantilla corta, esperar juego directo y segunda pelota; con plantilla larga, esperar posesión y presión que roba"
Con Pumas era uno de los equipos más directos de la liga (verticalidad 0.63, de los más altos), con el portero jugando largo más de la mitad de las veces, 47 % de posesión y 43 % de dominio territorial. Con Toluca es lo contrario en todo eso. Y la presión cambió de naturaleza: con Pumas corría más tras pérdida (38.6 por partido, de las más altas) pero recuperaba como la liga y las rachas de presión robaban el balón solo el 28 % de las veces, de las más bajas; con Toluca corre un poco menos y recupera entre los mejores. El regate que sale (45 % contra 59 %) y el saque de banda que conserva (53 % contra 75 %) son calidad individual, no modelo.

## Partidos y rivales

### Casi nunca pierde con el peligro a favor: 5 derrotas creando más en 102 partidos, y nunca 3 seguidas
- bloque: M-2
- metrica: xgd
- cifra: "Perdió creando más (xGD > 0.3): 5 de 23 derrotas; ganó creando menos (xGD < -0.3): 3 de 53 victorias. Rachas: 7 victorias seguidas, 13 sin perder, máximo 2 derrotas seguidas. Técnicos más enfrentados: Jardine 7 pj 3-1-3 (xG 1.16 / 1.15), Varini 6 pj 5-1-0 (2.26 / 0.53), Pizarro 6 pj 2-2-2 (1.28 / 0.76), Torrent 5 pj 4-0-1 (1.61 / 1.05), Solari 4 pj 0-1-3 (0.70 / 0.93), Vucetich 3 pj 0-0-3 (1.10 / 1.58). Mejor partido: Pumas 3-0 Atlas, xG 4.52 a 0.24; peor: América 1-0 Pumas, xG 0.74 a 1.97"
- kpi: "5 | 3 | partidos en 102 | | Derrotas creando más peligro que el rival | neutro | victorias creando menos"
- definiciones: D-25
- decision: "Rival: no hay forma barata de ganarle; sus derrotas casi siempre fueron merecidas en el peligro, así que el plan tiene que generar de verdad y no esperar un día malo. Staff: los dos técnicos que le ganan todo (Solari 0-1-3, Vucetich 0-0-3) lo hicieron con equipos que le quitaron el robo (contra Solari creó 0.70 por partido, la mitad de lo normal); ahí está el plan que hay que anticipar"
El marcador casi siempre va con el peligro: en 102 partidos perdió creando claramente más solo 5 veces y ganó creando claramente menos solo 3. Su mejor racha fue del 30 de agosto al 30 de noviembre de 2025: 7 victorias seguidas dentro de 13 partidos sin perder. Nunca ha perdido tres seguidos. Contra Varini y Torrent es dominante (9 ganados en 11); contra Jardine se reparte; contra Solari (Pachuca y Pumas) y Vucetich no ha ganado, y contra Solari el equipo creó 0.70 por partido, la cifra más baja contra cualquier técnico que haya enfrentado tres veces o más.
