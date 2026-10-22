# Hallazgos — Esteban González en la Liga MX (Clausura 2026 → Apertura 2026, 28 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de González con datos: Querétaro (Clausura 2026, 17; Apertura 2026, 11). Récord 10-10-8. Este técnico tiene 28 partidos en la Liga MX con datos y el análisis se hizo con esos; las cifras son orientativas y los cortes por contexto, con pocas jornadas, pueden moverse. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Juega sin el balón: 38 % de posesión, de los más bajos de la liga, y aun así crea más peligro que la liga
- bloque: M-1
- metrica: possession_pct
- cifra: "Posesión 38.1 % vs 49.8 de liga (p3); precisión de pase 70.7 % vs 78.7 (p2); directness 0.64 vs 0.59 (p97); field tilt 40.2 vs 49.6 (p14); 75.3 secuencias vs 80.3 (p15); xG sin penal 1.34 vs 1.14 (p79); xG por tiro 0.10 vs 0.09 (p81); 16.6 % de secuencias con tiro vs 15.3 (p76)"
- kpi: "38 % | 50 % | de posesión | 3 | Posesión | neutro"
- definiciones: D-01, D-02
- decision: "Rival: el balón va a ser tuyo aunque no lo busques; prepararse para atacar un bloque y no para presionar una salida corta. Staff: el modelo no necesita más posesión, necesita que cada ataque siga valiendo 0.10 por tiro cuando el rival se cierra"
En 28 partidos con Querétaro ningún corte sube de 42 % de posesión salvo el único partido sin nada en juego. Es el equipo más vertical de la liga y de los que menos ataques arma, pero sus ataques terminan en tiro más que la media y cada tiro vale más que el promedio. El balón no es el plan; el plan es qué hace con los pocos que tiene.

### Vive del robo: 8 de cada 100 robos acaban en tiro y la mitad de su peligro nace en el contragolpe
- bloque: M-3
- metrica: transition_conv_pct
- cifra: "Conversión de transición 8.31 % vs 6.34 (p94); 4.89 tiros en transición vs 3.76 (p89); xG en transición 0.68 vs 0.51 (p87), la mitad de su xG total de 1.34; 13.43 recuperaciones altas vs 11.91 (p76); 37.74 % de ellas con tiro en 10 s vs 33.25 (p84); 64.6 transiciones vs 63.2 (p65)"
- kpi: "8.3 % | 6.3 % | de los robos terminan en tiro | 94 | Robos que acaban en tiro | favor"
- definiciones: D-03
- decision: "Rival: no perder el balón en su medio campo con la defensa desordenada; el peligro no viene de su posesión sino de tu pérdida. Staff: es la fuente de peligro más fiable del equipo; proteger la velocidad de los dos de arriba y del extremo izquierdo en el mercado antes que buscar un creador"
No roba más que la liga (sus ataques tras robo son los normales), pero convierte cada robo mejor que casi todos: los 10 partidos que ganó los ganó con 1.05 goles esperados tras robo por partido, de los más altos de la liga, contra 0.42 en los 8 que perdió. Cuando el robo no produce el equipo no tiene otra fuente: el peligro de balón parado está en la media y el de posesión larga es escaso. 28 partidos.

### Deja dar 20 pases antes de robar (la liga 14) y solo 29 % de sus rachas de presión recuperan el balón
- bloque: M-2
- metrica: ppda_own
- cifra: "PPDA propio 19.81 vs 14.03 (p96, de los menos intensos); 164.3 presiones vs 151.5 (p73); 32.7 fases de presión vs 29.3 (p75); 19.8 % altas vs 16.9 (p74); fases con recuperación 29.44 % vs 31.16 (p28); altura de presión 54.3 m vs 55.8 (p28); 26.89 contrapresiones vs 32.02 (p10); contrapresiones con regain 27.0 % (p46)"
- kpi: "19.8 | 14.0 | pases que deja dar al rival antes de robar | 96 | Intensidad de presión: menos pases es más intensa | neutro"
- definiciones: D-05b, D-05, D-06
- decision: "Rival: salir jugando corto es seguro, su presión llega tarde y en bloque medio; mover el balón de lado a lado hasta abrir el centro. Staff: hay muchas presiones sueltas y pocas rachas que roben; definir un gatillo (pase atrás, control orientado al lateral) para que las 164 presiones por partido se agrupen en robos"
Corre mucho sin robar: está arriba de la liga en presiones y en rachas de presión, pero deja dar más pases que el 96 % de los equipos y sus rachas recuperan menos que la liga. La presión tras pérdida es de las más bajas: cuando pierde el balón retrocede en vez de ir por él. En 28 partidos el único estado en que presiona de verdad es yendo perdiendo (14.7 pases por robo).

### Concede 17 llegadas al área y 16 tiros por partido, arriba de la liga; el peligro concedido es el de la liga
- bloque: M-2
- metrica: opp_box_entries
- cifra: "17.11 entradas al área del rival vs 14.20 (p86); 15.93 tiros concedidos vs 13.60 (p84); OBV concedido 1.64 vs 1.44 (p79); xG concedido sin penal 1.28 vs 1.17 (p66); 57.7 % de tiros concedidos desde el área vs 58.2 (p45); xG rival en 10 s tras pérdida 0.14 vs 0.18 (p31); xG concedido en transición 0.59 vs 0.52 (p73)"
- kpi: "17.1 | 14.2 | llegadas al área del rival por partido | 86 | Llegadas al área que concede | contra"
- definiciones: D-12, D-04
- decision: "Rival: la llegada al área está garantizada; lo que falta es calidad del tiro, así que buscar el pase atrás y el segundo palo en vez del remate forzado. Staff: el bloque aguanta por volumen, no por calidad; en el Apertura 2026 (18 tiros concedidos por partido, 64 % desde el área) la cuenta empezó a salir mal"
Es un equipo que concede mucho y lo defiende con el cuerpo: tiros desde fuera del área y pocos espacios tras pérdida (el peligro del rival justo después de que pierde el balón está abajo de la liga). Con 28 partidos la cuenta cuadra en promedio, pero los dos peores partidos (0-4 en Monterrey, 0-5 en Torreón) muestran lo que pasa cuando el volumen se convierte en calidad.

### Sin regate ni conducción: 9 regates por partido, de los más bajos; avanza con salida larga y centro
- bloque: M-1
- metrica: dribbles
- cifra: "8.71 regates vs 14.03 (p2); 29.18 conducciones progresivas vs 38.99 (p7); 85.9 pases progresivos vs 100.4 (p13); salida larga del portero 57.9 % vs 46.8 (p85); 1.09 centros por entrada al área vs 0.94 (p81); pases bajo presión completados 64.1 % vs 70.1 (p5); 56.1 % de regates completados (p69)"
- kpi: "8.7 | 14.0 | regates por partido | 2 | Regates intentados por partido | neutro"
- definiciones: D-14
- decision: "Rival: no hace falta duplicar en banda; cerrar el centro y ganar la segunda pelota del pelotazo del portero. Staff: con 64 % de pases completados bajo presión, el pelotazo es defensa propia; si se quiere salir corto hay que fichar un central o un pivote que aguante presión, no un extremo"
Casi 6 de cada 10 pases del portero son largos y el equipo progresa poco con balón al pie. En 28 partidos los regates no pasan de 11 por partido en ningún corte; los partidos que perdió fueron los de más regates (10.9), señal de que el uno contra uno aparece cuando el plan se rompió, no como plan.

### Ataca por la izquierda: 35 % de sus ataques nacen por ese lado (arriba de la liga), solo 29 % por derecha
- bloque: M-1
- metrica: seq_lane_izquierdo_pct
- cifra: "34.51 % de secuencias por izquierda vs 31.66 (p89); 29.44 % por derecha vs 32.25 (p8); 36.0 % por el centro (p51); 46.9 % de secuencias nacen en tercio defensivo vs 44.5 (p79); 35.9 % en tercio medio (p11); Daniel Parra Durán lateral izquierdo titular en 20 de 28; en el lateral derecho se alternan Bayron Duarte (17 titularidades), Jaime Gómez (9) y Enzo Giménez (200 min)"
- kpi: "35 % | 32 % | de sus ataques | 89 | Ataques que nacen por la izquierda | neutro"
- definiciones: D-11, D-10, D-02
- decision: "Rival: cargar la presión sobre el lateral derecho de Querétaro, que es el costado por donde menos sale y el que más rota; dejar la izquierda para el repliegue. Staff: el costado derecho cambió tres veces de dueño en 28 partidos; definir uno antes de la liguilla da la salida alternativa que hoy no existe"
La izquierda es la única zona con dueño fijo: Parra Durán es núcleo del Apertura 2026 (11 de 11 titular) y Julio Palacios o Paulo Barbosa juegan adelante de él. La derecha es también por donde más corrige: el lateral derecho sale de cambio 7 veces yendo perdiendo y 7 empatando. Con 28 partidos es un rasgo de plantilla tanto como de plan.

## Consistencia y variabilidad (D-20 a D-26)

### Gana replegado y pierde con la línea 7 metros más arriba: 53 metros en victorias, 59 en derrotas
- bloque: M-2
- escenario: resultado
- metrica: press_height
- cifra: "Ganó 10: altura de presión 53.24 m (p13), línea defensiva 44.84 m (p13), 17.6 % de fases altas, PPDA 23.23 (p99), 55.1 % de tiros concedidos desde el área (p24), xG concedido en transición 0.48, xG en transición 1.05 (p100), xG 1.81 (p100), xG por tiro 0.13 (p100), 17.4 tiros concedidos (p96). Perdió 8: altura 58.67 m (p90), línea 51.80 m (p91), 26.7 % de fases altas (p99), 44.6 presiones en último tercio (p92), 66.2 % de tiros concedidos desde el área (p96), xG concedido en transición 0.82 (p95), xG 1.03 (p31), 15.88 recuperaciones altas (p97)"
- kpi: "59 | 53 | metros desde su portería | 90 | Altura de la presión cuando pierde | contra | cuando gana"
- definiciones: D-13, D-05, D-04, D-12
- decision: "Rival: provocarle que suba, con posesión paciente en campo propio y el portero involucrado; cuando su línea pasa de la mitad, el pase a la espalda de los centrales es lo que más daño le hace. Staff: el equipo gana cuando espera y pierde cuando persigue; si va perdiendo, la reacción de subir 7 metros concede casi el doble en contragolpe (0.82 contra 0.48) y hay que buscar el gol de otra forma"
Es el corte más limpio de los 28 partidos: en las 10 victorias concedió 17 tiros por partido, de los más altos de la liga, pero desde fuera; en las 8 derrotas concedió menos tiros y dos de cada tres desde dentro del área. Parte del efecto es consecuencia (cuando va perdiendo sube la línea), pero la diferencia en calidad del tiro concedido y en contragolpes recibidos es lo que separa ganar de perder. Son 10 y 8 partidos: patrón fuerte, muestra chica.

### Ganando se encierra: concede 19 tiros y 21 llegadas al área por cada 90 minutos, de los más altos de la liga
- bloque: M-2
- escenario: marcador
- metrica: shots_conceded
- cifra: "Ganando (12 partidos, 570 min): PPDA 28.32 (p98), posesión 32.6 %, field tilt 25.9 (p13), 18.96 tiros concedidos por 90 (p94), 20.86 entradas al área del rival (p96), OBV concedido 1.92 (p90), xG concedido de balón parado 0.90 (p94), xG concedido en transición 0.69 (p86); pero xG 1.28 (p76) y 4.74 tiros en transición (p87). Perdiendo (14, 599 min): altura de presión 60.88 m (p80), 43.46 presiones en último tercio (p90), xG 1.44 (p87), xG en transición 0.88 (p94), 16.84 centros, 9.92 tiros concedidos"
- kpi: "19.0 | 9.9 | tiros concedidos por cada 90 minutos | 94 | Tiros que concede cuando va ganando | contra | cuando va perdiendo"
- definiciones: D-21, D-05b, D-12, D-07
- decision: "Rival: si Querétaro se pone adelante no hay que desesperarse, el partido se juega en su área; meter centros al segundo palo y balón parado, que es donde más concede ganando (0.90). Staff: ganando el equipo baja la posesión a 33 % y deja 21 llegadas al área por 90 minutos; un pivote que retenga el balón vale más que un central extra"
El marcador le cambia el equipo por completo: perdiendo presiona 14 metros más arriba que ganando y crea 0.88 tras robo contra 0.64; ganando se mete a 26 % de dominio territorial. De visita ganando la cuenta es extrema: 23 tiros concedidos por cada 90 minutos. La reacción perdiendo funciona en peligro creado (1.44), pero en los partidos que terminó perdiendo esa misma línea alta fue lo que lo hundió (ver victorias contra derrotas). 12 y 14 partidos con minutos en cada estado.

### El último tramo es suyo: 1.48 de peligro creado del minuto 60 al 90, de los más altos de la liga
- bloque: M-1
- escenario: momento
- metrica: np_xg
- cifra: "60-90: xG 1.48 por 90 (p91) vs 0.96 en 0-30 (p64) y 1.04 en 30-60; 75-90: xG 1.76 (p96); 14.0 centros por 90 en 60-90 (p85); OBV ofensivo 1.53 (p74). Pero 60-90: 20.1 contrapresiones (p7, desde 27.4 en 0-30), 15.0 tiros concedidos (p84), xG concedido 1.55, xG concedido en transición 0.70 (p74); 60-75: 6.00 tiros en transición (p98) y 8.14 faltas (p5); altura de presión 57.9 m en 0-30 y 51.9 m en 60-90"
- kpi: "1.48 | 0.96 | goles esperados por cada 90 minutos | 91 | Peligro creado del minuto 60 al 90 | favor | en los primeros 30 minutos"
- definiciones: D-22, D-03, D-06
- decision: "Rival: el partido con Querétaro se decide después del 60; guardar un cambio de piernas para la última media hora y no abrir el partido si va empatado, porque abierto lo gana él. Staff: la última media hora produce pero también concede más (1.55); el bajón de presión tras pérdida al final (20 por 90) es la grieta que se puede tapar con los cambios"
Arranca presionando más alto (58 metros en los primeros 30, 52 después del 60) y crea poco; cuando el partido se estira, deja de ir tras la pérdida y vive del centro y del contragolpe largo: del 60 al 75 mete 6 tiros tras robo por cada 90 minutos, de los más altos de la liga. Casi todo lo que crea en los últimos 15 (1.76) llega con los cambios ya hechos: su primer cambio entra al 53 de media y el resto alrededor del 70. En 28 partidos, es el patrón más estable por tramo.

### De local el balón parado va y viene: 0.71 de peligro creado y 0.74 concedido; de visita 0.30 y 0.52
- bloque: M-4
- escenario: localia
- metrica: sp_xg
- cifra: "Local 5-5-4: xG de balón parado 0.71 (p95), xG de córner 0.28 (p93), xG por córner 0.04 (p76), goles concedidos de balón parado 0.64 (p80), xG concedido de balón parado 0.74 (p95), xG concedido en transición 0.69 (p87), OBV ofensivo 1.73 (p93), xG 1.44 (p89), 41.4 % de recuperaciones altas con tiro (p98), 5.36 córners, 14.71 faltas. Visita 5-5-4: xG de balón parado 0.30 (p10), xG de córner 0.11 (p12), goles concedidos de balón parado 0.14 (p2), xG concedido de balón parado 0.52 (p65), xG 1.24, xG concedido 1.32, 5.5 tiros en transición (p96), 4.79 córners, 12.43 faltas; PPDA 18.53 local y 21.1 visita"
- kpi: "0.71 | 0.30 | goles esperados de balón parado por partido | 95 | Peligro de balón parado de local | neutro | de visita"
- definiciones: D-20, D-07
- decision: "Rival: en el Corregidora el balón parado es la mitad del partido en los dos arcos; defender el córner cerrado y cobrar los propios con dos hombres al segundo palo, que ahí concede 0.64 goles por partido. Staff: fuera de casa el balón parado desaparece (0.30) y el equipo vive solo del contragolpe; llevar el cobrador y la rutina del Corregidora a la carretera es el ajuste más barato"
El récord es idéntico en casa y fuera (5-5-4 y 5-5-4) y la presión también (deja dar 18.5 pases de local, 21.1 de visita). Lo que cambia es el partido parado: en casa saca más córners (5.4 contra 4.8), los cobra mejor y comete más faltas (14.7 contra 12.4), y concede 0.64 goles de balón parado por partido, arriba de la liga. De visita el ataque tras robo sube a 5.5 tiros por partido y el peligro total baja poco (1.24 contra 1.44). 14 partidos de cada lado.

### Contra el top 6 presiona igual pero el ataque se apaga: 1.23 de valor con balón contra 1.70 ante el resto
- bloque: M-1
- escenario: rival
- metrica: obv_offense
- cifra: "Top 6 (10 partidos, 3-4-3): OBV ofensivo 1.23 (p19), xG 1.18 (p58), 11.5 tiros (p23), 4.0 córners (p13), xG de balón parado 0.30 (p9), xG de córner 0.10 (p8), field tilt 36.4 (p5), 18.1 tiros concedidos (p99), 18.7 entradas al área del rival (p95), PPDA 19.81 (p96), contrapresiones con regain 35.1 % (p99). Resto (18, 7-6-5): OBV ofensivo 1.70 (p91), xG 1.43 (p88), 14.7 tiros, 5.67 córners (p83), xG de balón parado 0.62 (p88), PPDA 19.82, contrapresiones con regain 22.5 % (p4), field tilt 42.4"
- kpi: "1.23 | 1.70 | goles de valor por partido | 19 | Valor de sus acciones con balón contra el top 6 | contra | contra el resto"
- definiciones: D-25, D-05b, D-06, D-07
- decision: "Rival de arriba: Querétaro no te va a presionar distinto, pero deja de sacar córners y de llegar; con 18 tiros concedidos por partido, insistir por volumen. Rival del resto: contra equipos de su nivel llega a 1.43 de peligro y saca casi 6 córners, no hay que abrirse. Staff: la diferencia contra el top 6 no está en la presión (idéntica) sino en que el balón no cruza la mitad; hace falta un plan de salida específico contra rivales que presionan alto"
La presión no se mueve ni un pase entre los dos grupos (19.81 contra 19.82), lo que confirma que el bloque medio es decisión y no reacción al rival. Contra los grandes la presión tras pérdida recupera más que casi nadie (35 %), pero el equipo no logra convertir eso en ataques: baja a 36 % de dominio territorial y el balón parado casi desaparece. El récord contra el top 6 (3-4-3) es mejor de lo que dicen las cifras: le ganó a Toluca, Atlas y Guadalajara, y empató con Pumas, Pachuca, Atlas y Cruz Azul. 10 partidos, muestra chica.

### Apertura 2026: 6 ganados de 11 viviendo del contragolpe (0.92) y concediendo 18 tiros por partido
- bloque: M-3
- escenario: torneo
- metrica: transition_xg
- cifra: "Apertura 2026 (11, 6-2-3, del lugar 14 al 3 antes del 0-5): xG en transición 0.92 (p99), 5.82 tiros en transición (p99), 41.5 % de recuperaciones altas con tiro (p98), PPDA 21.59 (p98), 17.91 tiros concedidos (p97), 19.0 entradas al área del rival (p97), 64.0 % de tiros concedidos desde el área (p88), xG concedido de balón parado 0.84 (p98), xGD -0.17, GF 15 GA 13, 4-2-3-1 en 10 de 11, primer cambio 56.7'. Clausura 2026 (17, 4-8-5): xG en transición 0.52 (p56), PPDA 18.67 (p92), 14.65 tiros concedidos, 53.7 % desde el área (p13), xG concedido de balón parado 0.49, xGD 0.16, GF 17 GA 21, 36.1 fases de presión (p88), 175.1 presiones (p87), primer cambio 50.5'"
- kpi: "0.92 | 0.52 | goles esperados tras robo por partido | 99 | Peligro creado tras robo en el Apertura 2026 | favor | en el Clausura 2026"
- definiciones: D-26, D-03, D-05b, D-12
- decision: "Rival en el Apertura 2026: el Querétaro de hoy concede más que el del Clausura (18 tiros, 64 % desde el área) y vive de 0.92 tras robo; no regalar contragolpes y el partido se gana por acumulación. Staff: el récord del Apertura (6-2-3) va por delante de las cifras (balance de peligro negativo); el 0-5 en Torreón no es un accidente sino el primer cobro. Recuperar las 36 rachas de presión por partido del Clausura sin perder el contragolpe"
Son dos equipos con el mismo dibujo base. El del Clausura 2026 (17 partidos) presionaba más (175 presiones, 36 rachas por partido) y concedía menos, pero empató 8 y anotó menos de lo que creaba (17 goles con 1.35 de peligro por partido). El del Apertura (11 partidos) fijó el 4-2-3-1, cambió más tarde (minuto 57 contra 51) y convirtió el contragolpe en el mejor de la liga, a cambio de conceder de los más altos en tiros, llegadas y balón parado. Ganó más con menos; con 11 partidos, la regresión ya empezó.

### Con la liguilla directa alcanzable (15 partidos) toca fondo en balón: 35 % de posesión, lo más bajo de la liga
- bloque: M-1
- escenario: tabla
- metrica: possession_pct
- cifra: "Directa alcanzable (15, 5-6-4): posesión 35.1 % (p0), field tilt 35.9 (p5), precisión de pase 68.3 % (p0), 78.7 pases progresivos (p4), PPDA 19.78 (p96), xG de balón parado 0.61 (p87), 17.73 entradas al área del rival (p90); ganando en ese estado concede 1.89 xG y 16.9 tiros por 90, perdiendo 1.09 y 10.0. Arranque J1-J4 (8, 2-3-3): posesión 41.4 % (p7), PPDA 16.57 (p82), 36.6 fases de presión (p92), 175.8 presiones (p89), 28.8 % de recuperaciones altas con tiro (p17). En zona directa (4, 2-1-1, indicio): PPDA 29.36 (p100), xG en transición 1.04 (p100), xG concedido de balón parado 0.91 (p100), 67.0 % de tiros concedidos desde el área (p97)"
- kpi: "35 % | 41 % | de posesión | 0 | Posesión cuando la liguilla directa es alcanzable | neutro | en las primeras cuatro jornadas"
- definiciones: D-23, D-01, D-05b
- decision: "Rival: cuanto más se juega Querétaro, menos balón quiere; en jornadas de presión de tabla, tener el balón no es un logro sino lo que él busca, y hay que atacarlo con llegadas de segunda línea. Staff: el equipo arranca los torneos presionando (16.6 pases por robo, 37 rachas) y a partir de la jornada 5 se repliega; si el plan es el bloque bajo, que sea desde la jornada 1, porque en el arranque va 2-3-3"
La situación en la tabla le quita balón en vez de dárselo: en el arranque presiona arriba de la liga y tiene 41 % de posesión; cuando la liguilla directa está a tiro baja a 35 % y a 36 % de dominio territorial, de lo más bajo que registra la liga. Los 4 partidos ya en zona directa (todos del Apertura 2026) llevan eso al extremo: deja dar 29 pases antes de robar y vive de 1.04 de peligro tras robo, pero concede 0.91 de balón parado y dos de cada tres tiros desde el área, hasta el 0-5 con Santos. Con 4 partidos es un indicio, no una ley.

## Balón parado (M-4)

### Un gol en 142 córners: 58 % cerrados, de los más altos, y el abierto desde la izquierda rinde el triple
- bloque: M-4
- metrica: corner_inswing_pct
- cifra: "142 córners a favor (5.07 por partido, p60), 60 tiros, xG 5.6, 1 gol; inswinging 58.14 % vs 34.86 de liga (p97); cortos 4.09 % vs 13.42 (p12); xG por córner 0.03 vs 0.04 (p39); goles de balón parado 0.25 por partido vs 0.44 (p13). Por tipo: derecha cerrado al centro 41 córners, 11 tiros, xG 0.89; izquierda cerrado al centro 28, 12 tiros, xG 0.53; izquierda abierto al centro 25, 13 tiros, xG 1.95; derecha abierto al centro 5, 6 tiros, xG 0.73; cortos 5, 4 tiros, xG 0.39"
- kpi: "58 % | 35 % | de sus córners | 97 | Córners cerrados | contra"
- definiciones: D-07, D-12
- decision: "Staff: cambiar el cobro por defecto. El abierto desde la izquierda genera 0.078 de peligro por córner y el cerrado desde la derecha 0.022; con 5 córners por partido, solo invertir la proporción vale cerca de un gol esperado cada 6 partidos. Rival: el cerrado al centro es previsible; portero que salga y un hombre en el primer palo bastan, y el corto casi no existe (4 %)"
Siete goles de balón parado en 28 partidos, y 6 son penales (8 cobrados, 6 anotados): del juego parado real salió un solo gol, de córner. Los tiros libres al área (24 tiros, 1.7 de peligro) y los directos (12 tiros, 0.3) no anotaron ninguno. El volumen de córners es el de la liga; el problema es el envío: cierra casi 6 de cada 10 cuando la liga cierra 1 de cada 3, y es justo el que menos rinde por cobro.

### Concede 0.63 de balón parado por partido, arriba de la liga: 9 penales en contra en 28 partidos
- bloque: M-4
- metrica: sp_xg_conceded
- cifra: "xG concedido de balón parado 0.63 vs 0.48 (p85); 9 penales en contra (xG 7.1, 7 goles) vs 8 a favor (6 goles); 176 córners en contra (6.3 por partido), 76 tiros, xG 5.5, 2 goles; xG por córner concedido 0.03 vs 0.04 (p28); 164 tiros libres en contra (5.9 por partido) vs 114 a favor; de tiro libre al área 38 tiros, xG 4.0, 1 gol, y 20 directos, xG 0.6, 1 gol; goles concedidos de balón parado 0.39 vs 0.45 (p44); 13.57 faltas vs 13.55 (p48)"
- kpi: "0.63 | 0.48 | goles esperados de balón parado en contra por partido | 85 | Peligro concedido de balón parado | contra"
- definiciones: D-07, D-12
- decision: "Rival: buscar el penal y el tiro libre al área más que el córner: concede un penal cada tres partidos y regala 50 tiros libres más de los que recibe. Staff: 7.1 de los 17.5 de peligro concedido a balón parado son penales; el problema no es la defensa del córner (0.03 por córner, abajo de la liga) sino la falta dentro del área y la cantidad de tiros libres que concede cerca de ella"
Concede 6.3 córners por partido pero cada uno vale poco: de 176 solo 2 terminaron en gol. Lo que sube la cuenta son los penales (9 en 28 partidos, 7 goles) y los tiros libres: recibe 164 en contra por 114 a favor, y de ellos el rival sacó 2 goles y 4.6 de peligro. Son 11 goles concedidos de balón parado en 28 partidos, casi uno de cada tres de los 34 que recibió. Ganando concede 0.90 de balón parado por cada 90 minutos: cuando se encierra, el rival lo castiga en el córner y en la falta lateral.

### Pierde la mitad de sus saques de banda cerca del área: conserva 50 %, la liga 61 %
- bloque: M-4
- metrica: throwin_retention_pct
- cifra: "Saques en zona de peligro retenidos 50.0 % vs 61.06 (p10); 8.25 saques en zona de peligro por partido vs 7.72 (p65); 231 saques en total, retiene 49.8 %; xG tras saque de banda 0.01 vs 0.02 (p41); desde la izquierda al área 29 saques, 6 tiros, xG 1.29; el rival retiene 56.9 % de sus 209 saques; de visita retiene 46.7 % (p4) y de local 53.3 % (p21)"
- kpi: "50 % | 61 % | de los saques de banda cerca del área | 10 | Saques de banda que conserva | contra"
- definiciones: D-07
- decision: "Rival: presionar el saque de banda de Querétaro en campo propio es robo barato; uno de cada dos vuelve, y de ahí nace el contragolpe contra una defensa adelantada. Staff: 8 saques por partido en zona de peligro que se pierden a la mitad son 4 pérdidas regaladas; una rutina de dos apoyos cortos y el lateral que recibe de espaldas es el entrenamiento de menor costo que hay"
Es coherente con el resto: un equipo que no completa pases bajo presión (64 %) tampoco conserva el saque de banda. Lo único que funciona es el saque largo desde la izquierda al área: 29 lanzamientos y 1.29 de peligro, lo mejor que tiene a balón parado por acción después del penal. De visita conserva 47 %, de los más bajos de la liga, justo donde el contragolpe rival más le cuesta. 28 partidos, 231 saques.

## Jugadores y cambios (M-5)

### 4-2-3-1 en 17 de 28; en el Apertura 2026 lo fijó (10 de 11) y ganando termina con tres centrales
- bloque: M-5
- metrica: tactical_shifts
- cifra: "Dibujo inicial 4-2-3-1 en 17 (61 %), 4-4-2 en 7 (25 %), 4-4-1-1 en 3, 3-4-3 en 1; Clausura 2026: 4-2-3-1 en 7, 4-4-2 en 6, 4-4-1-1 en 3, 3-4-3 en 1; Apertura 2026: 4-2-3-1 en 10, 4-4-2 en 1; cambio real de dibujo en 15 de 28; 1.93 cambios de dibujo vs 1.80 (p58); ganando del 85 al 90: 3-4-3 el 25 % y el 32 % de los minutos; perdiendo al 90: 4-4-2 el 43 %; empatando al 85: 3-4-2-1 el 21 %"
- kpi: "17 | 28 | partidos | | Partidos que arranca en 4-2-3-1 | neutro | partidos en total"
- definiciones: SB, D-21, D-26
- decision: "Rival: en el Apertura el dibujo ya no es una duda; si Querétaro va ganando después del 85, esperar línea de tres con carrileros y atacarlo con dos puntas y centros largos, que es cuando más tiros concede. Staff: el Clausura con cuatro dibujos en 17 partidos fue 4-8-5 y el Apertura con uno fue 6-2-3; la estabilidad del sistema es parte de la mejora. El cierre con tres centrales ganando coincide con los 19 tiros por 90 que concede en ese estado; probar cerrar con el 4-2-3-1 y un pivote más"
El primer semestre fue de búsqueda: 4-4-2 en 6 de 17 y dos dibujos más, con cambio real de sistema en más de la mitad de los partidos. En el Apertura 2026 el 4-2-3-1 con Homenchenko y García Prades de doble pivote y Coronel de enganche quedó fijo. El cambio típico es de cierre: ganando pasa a tres centrales (3-4-3 o 3-4-2-1) en el último tramo, y perdiendo mete dos puntas (4-4-2). 28 partidos, 15 con cambio de dibujo.

### Cambia al 51' si va ganando o perdiendo y al 56' si empata; perdiendo, el cambio duplica los tiros
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio: ganando media 50.9' (n 7), perdiendo 50.7' (n 10), empatando 56.4' (n 11); liga 53.9'; local 51.0' vs visita 54.9'; Clausura 50.5' vs Apertura 56.7'. Perdiendo, 15 min antes vs después: xG 0.15 a 0.35, tiros 1.6 a 3.3, PPDA 29.6 a 25.4. Ganando: xG concedido 0.33 a 0.22, PPDA 27.3 a 31.4, field tilt 19 a 27. Empatando: xG 0.27 a 0.29, xG concedido 0.13 a 0.22. 4.7 cambios por partido, 126 tácticos y 6 por lesión; minuto medio de todos los cambios 67.7' perdiendo y 72.9' ganando"
- kpi: "0.35 | 0.15 | goles esperados en 15 minutos | | Peligro creado en los 15 minutos después del primer cambio, perdiendo | favor | antes del cambio"
- definiciones: D-21, SB
- decision: "Staff: el gatillo al 51 perdiendo funciona (tiros de 1.6 a 3.3 en 15 minutos) y ganando también calma (peligro concedido de 0.33 a 0.22); lo que no funciona es esperar al 56 empatando, donde el cambio no mueve nada (0.27 a 0.29) y el rival concede menos. Adelantar el cambio en empate al mismo minuto 51. Rival: si Querétaro va perdiendo, el cambio llega antes del 53 y el equipo tira el doble; defender los 15 minutos siguientes como si fueran los últimos"
El cambio perdiendo es su mejor decisión de partido: saca pivote derecho (9 veces) o lateral derecho (7) y mete piernas arriba, y el equipo pasa a presionar más (deja dar 25 pases en vez de 30). Ganando hace lo contrario: baja la presión y sube 8 puntos el dominio territorial porque el rival se le viene encima. Empatando (11 partidos) el cambio es tarde y neutro: mismo peligro creado, más peligro concedido (0.13 a 0.22). 28 primeros cambios, ninguno antes del 28'.

### Once fijo: 1.3 titulares distintos por partido y 8 jugadores núcleo; Abascia y Homenchenko en 26 de 28
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Jaccard entre onces consecutivos 0.79; 1.3 cambios de titular por partido; núcleo (70 % o más): Lucas Abascia 26 titularidades (93 %, 2263 min), Santiago Homenchenko 26 (93 %), Diego Reyes 25 (89 %), Mateo Coronel 24 (86 %), Ali Ávila 24 (86 %), Carlo García Prades 24 (86 %), Guillermo Allison 21 (75 %), Daniel Parra Durán 20 (71 %); Apertura 2026: 6 jugadores con 11 de 11. A quién saca: perdiendo pivote derecho 9 y lateral derecho 7; ganando pivote derecho 6 y extremo izquierdo 6; empatando mediapunta 10 y extremo derecho 9"
- kpi: "1.3 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB
- decision: "Rival: el once se puede preparar con una semana de anticipación; la marca sobre Coronel (enganche, 24 titularidades) y Ávila (delantero, 24) desarma lo poco que construye. Staff: el bloque es estable y eso explica parte del salto del Apertura, pero la rotación cae sobre dos puestos (lateral derecho y extremo) y el pivote derecho sale de cambio 19 veces en 28 partidos; ahí hace falta un relevo del nivel del titular"
Es el reverso de la plantilla: la columna (Allison, Reyes, Abascia, Homenchenko, García Prades, Coronel, Ávila) jugó casi todo, y el once del Apertura 2026 tuvo a seis con todas las titularidades. Donde no hay dueño es en el lateral derecho (Duarte 17, Gómez 9, Giménez 200 minutos ahí) y en los extremos (Unjanque 13, Giménez 10, Julio Palacios 10, Barbosa 7). El primer puesto que sacrifica, gane o pierda, es el pivote derecho, el puesto de García Prades (1826 minutos ahí). 28 partidos.

## Partidos y rivales

### Ocho sin perder para cerrar el Clausura y del lugar 14 al 3 en el Apertura, hasta el 0-5 en Torreón
- bloque: M-1
- metrica: xgd
- cifra: "Balance de xG 0.03 por partido vs -0.03 de liga (p57); rachas: 8 sin perder (3-5-0, del 15 de marzo al 25 de abril), 2 victorias seguidas como máximo, 2 derrotas seguidas; ganó con menos peligro que el rival 1 vez (Tijuana 1-0 de visita, xG 0.72 contra 2.33) y perdió creando más 2 (Tijuana 1-2 de local, 0.95 contra 0.50; Toluca 1-2, 1.14 contra 0.75); peores: Santos 0-5 (1.43 contra 2.19), Monterrey 0-4 (0.36 contra 1.57); mejores: Puebla 2-1 (3.44 contra 0.93), Santos 2-2 (3.42 contra 1.23); contra América 0-0-2, contra Pumas 0-2-0"
- kpi: "8 | 28 | partidos sin perder seguidos | | Mejor racha sin perder, del 15 de marzo al 25 de abril de 2026 | neutro | partidos en total"
- definiciones: D-26, D-25
- decision: "Rival: Querétaro no roba puntos con suerte (una sola victoria con menos peligro que el rival) ni los regala (dos derrotas creando más); el partido se gana en el balance de peligro, y su techo de peligro concedido lo marcaron Monterrey y Santos (1.57 y 2.19) llegando por el área con centros. Staff: el balance de peligro es neutro (0.03) y el récord es neutro (10-10-8); con 28 partidos el equipo es lo que dicen sus números, y la mejora pasa por el balón parado (abajo de la liga a favor, arriba en contra), no por el juego"
La racha de 8 cerró el Clausura con 3 victorias y 5 empates, el tipo de partido que más repite (10 empates en 28). En el Apertura 2026 subió del lugar 14 al 3 en 11 jornadas con 6 victorias, hasta el 0-5 en Torreón, su peor partido en balance de peligro. Los técnicos que más enfrentó (Abreu, Milito, Solari y Mohamed, 2 partidos cada uno) le dejaron 3-2-3; contra Solari no pasó del empate. Con 28 partidos las rachas pesan poco; lo sólido es que gana y pierde con las cifras a favor o en contra.
