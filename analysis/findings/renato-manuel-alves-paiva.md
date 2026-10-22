# Hallazgos — Renato Paiva en la Liga MX (Apertura 2022 → Apertura 2026, 68 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Renato Paiva con datos: León (Apertura 2022, 18), Toluca (Clausura 2024 → Apertura 2024, 38) y Santos Laguna (Apertura 2026, 12). Récord 30-16-22. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas, "presión tras pérdida" = contrapresiones); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Tira lo normal pero mejor: 0.10 de gol por tiro, de los más altos de la liga, y solo 37 % desde fuera del área
- bloque: M-1
- metrica: xg_per_shot
- cifra: "xG por tiro 0.10 vs 0.09 de liga (p92); 13.3 tiros sin penal vs 13.2 (p54); 37.3 % desde fuera del área vs 42.8 % (p13); xG sin penal 1.40 vs 1.14 (p86); por equipo: León 0.09, Toluca 0.11, Santos 0.10"
- kpi: "0.10 | 0.09 | goles esperados por tiro | 92 | Calidad de cada tiro | favor"
- definiciones: D-12
- decision: "Rival: no regalarle el área; su peligro no viene de tirar mucho sino de tirar desde dentro. Cerrar el espacio entre líneas y el borde del área chica y dejarlo tirar de lejos. Staff: el filtro de tiro funciona; con 13 tiros por partido, la vía para crear más es llegar más veces al área, no soltar antes"
Tira lo mismo que cualquiera (13.3 por partido, como la liga) pero crea 1.40 goles esperados, arriba de la liga, porque elige mejor: 63 % de sus tiros salen desde dentro del área. El rasgo viaja con él: con León 0.09 por tiro, con Toluca 0.11, con Santos 0.10, los tres arriba de la liga. Cuando gana, la calidad sube a 0.13 por tiro, la más alta de todos sus cortes.

### Llega al área por abajo: 16.5 llegadas por partido y solo 0.76 centros por cada una, abajo de la liga
- bloque: M-1
- metrica: cross_ratio
- cifra: "0.76 centros por entrada al área vs 0.94 de liga (p13); 16.5 entradas al área vs 14.0 (p83); 44.3 conducciones progresivas vs 39.0 (p75); 108.7 pases progresivos (p73); 12.3 regates (p26); con Toluca 0.65 (p4), con León 0.89 y con Santos 0.89"
- kpi: "0.76 | 0.94 | centros por cada llegada al área | 13 | Centros por cada llegada al área | neutro"
- definiciones: D-12, D-14
- decision: "Rival: cerrar el carril interior y la zona 14 con el doble pivote y obligarlo a centrar, que es lo que menos hace y peor le sale (perdiendo centra 1.00 por llegada). Staff: la plantilla necesita interiores que conduzcan y un 9 que juegue de espaldas, no centradores"
Es un equipo de pase corto y conducción: 82 % de pases completados y 44 conducciones hacia adelante por partido, arriba de la liga, con pocos regates (12.3, menos que la liga). Con Toluca la entrada por abajo fue extrema (0.65 centros por llegada, de los más bajos de la liga); con León y Santos subió a 0.89, como la liga, así que depende en parte de la plantilla. Cuando pierde centra 1.00 por llegada y el peligro cae: el centro es su plan B, no su plan A.

### Salida limpia desde atrás: 82 % de pases completados y 47 % de sus ataques nacen en su propio campo
- bloque: M-1
- metrica: pass_pct
- cifra: "Precisión de pase 82.4 % vs 78.7 % (p82); 46.9 % de secuencias nacen en tercio defensivo vs 44.5 % (p79) y solo 35.4 % en tercio medio vs 38.3 % (p7); salida larga del portero 41.0 % vs 46.8 % (p27); pases bajo presión 72.4 % (p71); posesión 53.0 % (p73); por equipo: León 80.4 %, Toluca 83.6 %, Santos 81.5 %"
- kpi: "82 % | 79 % | de sus pases llegan | 82 | Pases que llegan | neutro"
- definiciones: D-02, D-10
- decision: "Rival: presionar la salida en bloque alto rinde más que contra la media, porque él insiste en salir corto (41 % largo del portero) y casi nunca arranca ataques desde medio campo. Staff: el modelo exige centrales y portero cómodos con el balón; si el rival sube la línea, la segunda pelota no es un recurso que tenga entrenado"
Sus ataques nacen abajo y se construyen con pase: la parte de ataques que arranca en medio campo es de las más bajas de la liga porque casi no roba ahí (139 presiones por partido, menos que la liga). Llega cerca del área en 57 % de sus ataques, como la liga, pero con 53 % de posesión y 82 % de precisión. El rasgo viaja: 80 % con León, 84 % con Toluca, 82 % con Santos.

### No vive del robo: 59 ataques tras recuperar por partido, abajo de la liga, y tarda 3.9 segundos en tirar
- bloque: M-3
- metrica: transitions
- cifra: "58.8 transiciones ofensivas vs 63.2 de liga (p15); 3.89 s de recuperación a tiro vs 3.30 (p92); 3.4 tiros en transición vs 3.8 (p40); pero xG en transición 0.59 vs 0.51 (p72); 12.2 recuperaciones altas (p58); León 54.6 (p3), Toluca 60.6 (p31), Santos 59.0 (p16)"
- kpi: "58.8 | 63.2 | ataques tras robo por partido | 15 | Ataques que arrancan al robar el balón, por partido | neutro"
- definiciones: D-03
- decision: "Rival: perder el balón contra él cuesta menos que contra la media de la liga; se puede arriesgar en salida. Staff: el contragolpe que sí lanza vale (0.59 goles esperados por partido, arriba de la liga); el margen está en lanzar más, con un extremo que ataque el espacio en vez de esperar la segunda pared"
Roba poco y, cuando roba, prefiere acomodarse a correr: sus segundos de robo a tiro están entre los más altos de la liga. Aun así el poco contragolpe que lanza es bueno, y cuando gana se dispara a 0.86 goles esperados tras robo, el dato que mejor separa sus victorias de sus derrotas. Con León fue aún menos (54.6 ataques tras robo, de los más bajos de la liga) y con Toluca 60.6, como la liga.

### Presión tibia y bloque ordenado: deja dar 15 pases antes de robar y concede 12.9 tiros, menos que la liga
- bloque: M-2
- metrica: ppda_own
- cifra: "PPDA propio 15.1 vs 14.0 (p69); 138.5 presiones vs 151.5 (p28); 30.1 contrapresiones vs 32.0 (p31); altura de presión 55.9 m (p51); 27.3 fases de presión (p35) con 30.8 % de recuperación (p47); concede 12.85 tiros vs 13.6 (p36) y 13.4 entradas al área vs 14.2 (p39); xG concedido 1.21 (p60); PPDA por equipo: León 12.3, Toluca 15.0, Santos 19.7 (p96)"
- kpi: "15.1 | 14.0 | pases que deja dar al rival antes de robar | 69 | Intensidad de presión: menos pases es más intensa | neutro"
- definiciones: D-05b, D-05, D-06
- decision: "Rival: se puede salir jugando contra él; su presión no castiga la circulación en campo propio, el peligro está en entrar a su área, no en cruzar medio campo. Staff: el equipo defiende con posición, no con presión; si la plantilla no tiene balón (Santos, 50 % de posesión) el bloque se expone porque no tiene la presión como red"
Presiona menos que la liga en todo: menos presiones, menos presión tras pérdida, rachas de presión a la altura normal y que roban lo normal. Lo compensa con balón (53 % de posesión, 55 % de dominio territorial) y con un bloque que concede pocas llegadas. La intensidad no viaja: con León dejaba dar 12.3 pases, con Toluca 15.0, con Santos 19.7, de las presiones más bajas de la liga.

### Lo que concede llega desde el área: 62 % de los tiros en contra son de adentro, arriba de la liga
- bloque: M-2
- metrica: shots_conceded_in_box_pct
- cifra: "62.4 % de tiros concedidos desde el área vs 58.2 % de liga (p84); 12.4 faltas por partido vs 13.55 (p22); 2.31 tiros rivales en 10 s tras pérdida (p64); xG concedido 1.21 vs 1.17 (p60); con León 68.6 % (p98), con Toluca 59.85 %, con Santos 61.0 %"
- kpi: "62 % | 58 % | de los tiros que concede son desde el área | 84 | Tiros concedidos desde el área | contra"
- definiciones: D-12, D-04
- decision: "Rival: no tirar de lejos contra él; paciencia hasta entrar al área, porque su bloque deja llegar a la zona buena y no corta con falta (12.4 faltas, abajo de la liga). Staff: hacen falta más faltas tácticas en medio campo y un pivote que corte la conducción antes del área; el peligro concedido es normal en volumen pero malo en calidad"
Concede menos tiros que la liga, pero de peor calidad: 6 de cada 10 salen desde dentro del área. Es la cara mala de un equipo que no presiona ni hace falta: el rival avanza sin fricción y la línea de cuatro termina defendiendo en su área. Con León el dato fue de los más altos de la liga; con Toluca bajó a 60 % y con Santos vuelve a subir a 61 %, con 16.8 llegadas al área del rival por partido.

## Consistencia y variabilidad (D-20, D-21, D-22, D-23, D-24, D-25, D-26)

### De local domina, de visita pierde: 21-6-6 en casa con 0.92 de peligro concedido, 9-10-16 fuera con 1.48
- bloque: M-2
- escenario: localia
- metrica: np_xg_conceded
- cifra: "Local 21-6-6: xG concedido 0.92 (p18), xG 1.58 (p95), xGD 0.80 (p97), 10.9 tiros concedidos (p11), 11.5 entradas al área del rival (p16), field tilt 59.2 (p88), xG en transición 0.77 (p94), PPDA 15.5. Visita 9-10-16: xG concedido 1.48 (p89), xG 1.22 (p66), xGD -0.28 (p29), 14.7 tiros concedidos (p70), 15.2 entradas al área del rival (p65), field tilt 51.45, xG de balón parado 0.28 (p6), PPDA 14.7"
- kpi: "1.48 | 0.92 | goles esperados en contra por partido | 89 | Peligro concedido de visita | contra | de local"
- definiciones: D-20, D-03, D-07
- decision: "Rival: en su cancha, esperarlo y salir rápido es lo que más le cuesta; de visita, ir por él, porque concede 60 % más peligro y su balón parado desaparece. Staff: el problema de visita no es de ataque (crea 1.22, como la liga) sino de lo que concede: 14.7 tiros y 15.2 llegadas al área. El bloque de visita necesita otro plan, no el mismo más bajo"
Es la mayor diferencia de todo su perfil. En casa gana 21 de 33 y concede menos tiros que casi toda la liga; fuera gana 9 de 35 y concede más que la mayoría. La intensidad de presión casi no cambia (15.5 pases que deja dar en casa, 14.7 fuera): lo que cambia es la posición del bloque y el balón parado, que de local vale 0.60 goles esperados por partido y de visita 0.28. Perdiendo de visita concede 1.51 por cada 90 minutos; perdiendo de local, 0.71.

### Contra los seis de arriba se cae: 7-4-13, concede 1.55 de peligro y su córner no vale nada
- bloque: M-2
- escenario: rival
- metrica: np_xg_conceded
- cifra: "Top 6: 7-4-13, xG concedido 1.55 (p93), xG 1.05 (p34), xGD -0.40 (p20), field tilt 48.4, PPDA 17.0 (p83), 14.8 tiros concedidos (p73), 16.1 entradas al área del rival (p78), xG de córner 0.09 (p5), goles de balón parado 0.12 (p2), primer cambio 61.7' (p97). Resto: 23-12-9, xG concedido 1.02 (p28), xG 1.59 (p95), xGD 0.60 (p91), field tilt 58.9 (p87), xG de córner 0.27 (p90), goles de balón parado 0.48 (p66)"
- kpi: "1.55 | 1.02 | goles esperados en contra por partido | 93 | Peligro concedido contra rivales del top 6 | contra | contra el resto"
- definiciones: D-25, D-05b, D-07
- decision: "Rival grande: presionarle la salida y tener el balón; contra los de arriba su dominio territorial cae 10 puntos, deja dar 17 pases antes de robar y no tiene balón parado que lo rescate. Staff: contra top 6 el plan A (balón, llegada por abajo) no alcanza; hace falta un plan de partido distinto, con contragolpe preparado y cambios antes del minuto 60, no al 62"
Contra el resto de la liga es un equipo de arriba: crea 1.59, de los más altos de la liga, y concede 1.02. Contra los seis primeros se invierte todo: crea 1.05, concede 1.55 y además tarda más en mover el banquillo (primer cambio al 62, de los más tardíos de la liga). El balón parado, que contra el resto le da 0.48 goles por partido, contra los grandes le da 0.12. Nunca le ha ganado a Cruz Azul (0-1-4) ni a Guadalajara (0-3-3).

### Gana con el contragolpe y el balón parado: 0.86 de peligro tras robo cuando gana, 0.39 cuando pierde
- bloque: M-3
- escenario: resultado
- metrica: transition_xg
- cifra: "Ganó 30: xG en transición 0.86 (p98), conversión de transición 7.9 % (p89), xG por tiro 0.13 (p100), xG 1.77 (p100), goles de balón parado 0.57 (p80), xG concedido 1.02 (p27), centros por entrada 0.64 (p3), posesión 51.4 %. Perdió 22: xG en transición 0.39 (p21), 2.6 tiros en transición (p6), xG 1.07 (p37), goles de balón parado 0.09 (p1), xG concedido 1.56 (p94), centros por entrada 1.00 (p65), 22.3 % de fases de presión altas (p92), posesión 53.4 %"
- kpi: "0.86 | 0.39 | goles esperados tras robo por partido | 98 | Peligro creado tras robar cuando gana | favor | cuando pierde"
- definiciones: D-03, D-07, D-12
- decision: "Rival: para ganarle, quitarle el contragolpe (no perderla en campo propio) y defender bien el córner; cuando esas dos vías no le dan, su ataque se vuelve de centros y rinde la mitad. Staff: en las derrotas el equipo presiona más arriba (22 % de rachas en campo rival, de las más altas de la liga) y centra más; es la señal de que el plan se desordena. La corrección no es presionar más sino volver a la entrada por abajo"
La posesión apenas cambia entre ganar (51 %) y perder (53 %); lo que cambia es la calidad: cuando gana, cada tiro vale 0.13, el contragolpe produce más del doble y el balón parado mete 0.57 goles por partido. Cuando pierde, el balón parado casi desaparece (0.09 goles), pasa a centrar 1.00 por cada llegada y concede 1.56 goles esperados, de los más altos de la liga. Perdió creando más peligro que el rival en 5 partidos y ganó creando menos en 4: el resultado suele reflejar el juego.

### Ganando se repliega: deja dar 16 pases y presiona 19 veces cerca del área rival; perdiendo, 11 y 34
- bloque: M-2
- escenario: marcador
- metrica: ppda_own
- cifra: "Ganando (1949 min): PPDA 16.3 (p77), 19.3 presiones en último tercio (p23), altura de presión 50.7 m (p36), 7.2 centros por 90, 11.8 tiros concedidos (p22), xG concedido 1.11 (p34), 85.5 pérdidas (p15). Perdiendo (1615 min): PPDA 10.8 (p52), 34.0 presiones en último tercio (p57), altura 59.7 m (p66), 15.8 centros (p63), 10.4 tiros concedidos (p56), xG concedido 1.25 (p65), 48.1 conducciones progresivas (p79), 9.3 faltas (p11)"
- kpi: "16.3 | 10.8 | pases que deja dar antes de robar, por cada 90 minutos | 77 | Intensidad de presión cuando va ganando | neutro | cuando va perdiendo"
- definiciones: D-21, D-05b, D-13
- decision: "Rival: si vas abajo contra él hay balón y tiempo; su bloque baja 9 metros y presiona la mitad cerca de tu área, y además concede más tiros ganando (11.8 por 90) que perdiendo (10.4), así que insistir paga. Staff: el repliegue con ventaja es consciente y funciona en peligro concedido (1.11 contra 1.25), pero regala 12 tiros por 90; conviene sostener la presión alta hasta el 60 y replegar después, no desde el gol"
Es un técnico que cambia de equipo con el marcador. Con ventaja baja la línea de presión de 60 a 51 metros, deja de presionar arriba y casi no pierde balones (85 por 90, de los que menos pierden en la liga). Abajo en el marcador presiona como un equipo de arriba, conduce más (48 por 90) y duplica los centros. El reverso: ganando concede 11.8 tiros por 90, más que perdiendo, aunque de menos peligro.

### Crece con el partido: 1.03 de peligro por 90 en la primera media hora, 1.39 del 60 al 90
- bloque: M-1
- escenario: momento
- metrica: np_xg
- cifra: "0-30: xG 1.03 por 90 (p72), 9.9 tiros, OBV ofensivo 1.07 (p44), 29.1 contrapresiones (p29), 32.4 presiones en último tercio, xG concedido 1.02. 30-60: xG 1.28 (p81), xG concedido 1.23, OBV concedido 1.46 (p72). 60-90: xG 1.39 (p86), 13.2 tiros, OBV ofensivo 1.51 (p72), 23.9 contrapresiones, 24.2 presiones en último tercio, xG concedido 1.23 (p40). Por tramos de 15: pico de xG creado en 30-45 (1.42, p90) con 10.95 recuperaciones altas; pico de xG concedido en 45-60 (1.47, p73)"
- kpi: "1.39 | 1.03 | goles esperados por cada 90 minutos | 86 | Peligro creado del minuto 60 al 90 | favor | en los primeros 30 minutos"
- definiciones: D-22, D-03, D-06
- decision: "Rival: el tramo para hacerle daño es el arranque del segundo tiempo (45 a 60), cuando más concede, y hay que llegar vivo al 60 porque después su ataque sube un tercio. Staff: el arranque es blando (menos de 10 tiros por 90, con la presión tras pérdida más alta del partido pero sin producir); adelantar el plan de los últimos 30 (más conducción, más gente en el área) al primer tiempo"
Empieza controlando y termina atacando: del primer al último tercio del partido suben el peligro creado, el valor de sus acciones con balón y los tiros, mientras la presión tras pérdida baja de 29 a 24 por 90. El rival lo aprovecha justo después del descanso: entre el 45 y el 60 concede 1.47 goles esperados por 90, su peor tramo, y después del 60 vuelve a cerrar. El pico ofensivo del cierre del primer tiempo (1.42 entre el 30 y el 45) coincide con el tramo en que más balones roba en campo rival (10.95 por 90).

### Ya instalado en zona de liguilla directa domina: 12-4-2 y 1.56 de peligro; peleándola, 13-3-9
- bloque: M-1
- escenario: tabla
- metrica: np_xg
- cifra: "En zona directa (18): 12-4-2, xG 1.56 (p95), xGD 0.57 (p89), field tilt 61.1 (p92), altura de presión 57.7 m (p78), xG en transición 0.75 (p92), 0.61 centros por entrada (p2), primer cambio 59.2'. Directa alcanzable (25): 13-3-9, xG 1.37 (p83), xG concedido 1.30 (p70), xGD 0.14 (p67), 28.4 contrapresiones (p17), 28.2 presiones en último tercio (p23), altura 54.4 m (p30), xG de córner 0.30 (p96); perdiendo en esas jornadas: 23.8 entradas al área, 17.6 centros y 95.2 presiones por 90. Arranque J1 a J4 (16): 4-7-5, xGD 0.09 (p63), primer cambio 48.7'"
- kpi: "1.56 | 1.37 | goles esperados por partido | 95 | Peligro creado cuando ya está en zona de liguilla directa | favor | cuando la liguilla directa es alcanzable pero no la tiene"
- definiciones: D-23, D-13, D-06
- decision: "Rival: cuando su equipo persigue la liguilla directa, el bloque está 3 metros más bajo y la presión tras pérdida es de las más bajas de la liga; hay tiempo para salir jugando. Staff: el equipo juega mejor sin presión de tabla; en las jornadas de pelea pierde la presión tras pérdida antes que el ataque, y eso es lo primero a vigilar"
Con la clasificación en la mano sube la línea, domina 61 % del territorio y lleva el balón al área sin centrar. Con la liguilla al alcance pero sin asegurar, el ataque aguanta (1.37, arriba de la liga) pero la fase sin balón afloja: menos presión tras pérdida, menos presiones cerca del área rival y 1.30 goles esperados concedidos. Y perdiendo en esas jornadas se abre todo: 23.8 llegadas al área y 17.6 centros por 90 con 95 presiones por 90, las más bajas de todos sus cortes. Arranca los torneos lento: 4 ganados en 16 partidos de las jornadas 1 a 4.

### En liguilla nunca ha ganado: 0-1-4 en cinco partidos, 0.94 de peligro y el contragolpe apagado (indicio)
- bloque: M-1
- escenario: fase
- metrica: np_xg
- cifra: "Cuartos (4): 0-1-3, xG 0.94 (p21), xG concedido 0.86 (p11), 8.75 tiros concedidos (p1), xG en transición 0.21 (p1), xG de córner 0.04 (p0), posesión 58.3 % (p97), xG por tiro 0.07 (p14), primer cambio 67.5', 8.5 faltas. Play-in (1): 0-0-1, 0-1 en Cruz Azul, xG 0.54 vs 2.87. Fase regular (63): 30-15-18, xG 1.44 (p89), xG por tiro 0.11 (p94)"
- kpi: "0.94 | 1.44 | goles esperados por partido | 21 | Peligro creado en cuartos de final | contra | en fase regular"
- definiciones: D-24, D-03, D-07
- decision: "Rival en liguilla: cederle el balón funciona; con 58 % de posesión crea abajo de la liga, no tiene contragolpe y su primer cambio llega al 68. Staff: con 5 partidos es un indicio, no una ley, pero la tendencia es clara: el equipo de liguilla es más conservador (concede 8.75 tiros) y menos punzante. Preparar la eliminatoria como un partido contra top 6, no como uno de fase regular"
Son 5 partidos y hay que leerlo como indicio. Los cuatro cuartos de final, todos con Toluca (dos contra Guadalajara, dos contra América, 0-2 y 0-2), fueron partidos cerrados: tuvo el balón, concedió poco y no creó. La calidad de cada tiro, su rasgo más fuerte en fase regular, cae de 0.11 a 0.07, y el córner, con 0.04 de peligro por partido, no apareció. El play-in con León en Cruz Azul (0-1, 2.87 concedidos) es su peor partido por balance de peligro de los 68.

### La presión tras pérdida se fue apagando: 35 por partido en el Clausura 2024, 26 en el Apertura 2026
- bloque: M-2
- escenario: torneo
- metrica: counterpressures
- cifra: "Apertura 2022 (León): 27.4 contrapresiones (p13), PPDA 12.3 (p30), xGD -0.33, 6-4-8. Clausura 2024 (Toluca): 35.2 contrapresiones (p79), 35.3 % de fases de presión con recuperación (p92), PPDA 13.5 (p49), altura de presión 57.85 m (p79), 10.2 tiros concedidos (p5), xGD 0.58 (p90), 9-6-4. Apertura 2024 (Toluca): 30.2 (p32), PPDA 16.4 (p80), xGD 0.43 (p84), 10-5-4. Apertura 2026 (Santos): 26.1 contrapresiones (p8), 27.9 % de fases con recuperación (p14), PPDA 19.7 (p96), 16.25 tiros concedidos (p87), xG 1.51 (p92), xGD 0.29 (p77), 5-1-6"
- kpi: "26.1 | 35.2 | presiones tras pérdida por partido | 8 | Presión tras pérdida en el Apertura 2026 con Santos | contra | en el Clausura 2024 con Toluca"
- definiciones: D-26, D-06, D-05b
- decision: "Staff de Santos: la mejor versión de Paiva (Clausura 2024, del lugar 18 al 2 de la tabla) fue la que más presionó tras pérdida y la que más robó en sus rachas de presión; hoy el equipo deja dar 20 pases y presiona tras pérdida menos que casi toda la liga. Recuperar la presión tras pérdida es la palanca más barata. Rival: contra el Santos de Paiva se puede circular en campo propio sin castigo"
Con León presionó más que con nadie en intensidad y le fue peor, así que la intensidad sola no explica los resultados; lo que sí los explica es la presión tras pérdida: en el Clausura 2024 fue de las más altas de la liga y el equipo concedió 10 tiros por partido, de los menos de la liga. Dos torneos después, con Santos, la presión tras pérdida es de las más bajas y concede 16 tiros, de los que más. El ataque no se ha caído (1.51 goles esperados, de los más altos de la liga); lo que se cayó fue la red detrás de la pérdida.

## Balón parado (M-4)

### 369 córners y 13 goles: el cerrado desde la izquierda es su mejor cobro y el corto por izquierda el más rentable
- bloque: M-4
- metrica: corner_inswing_pct
- cifra: "5.43 córners por partido vs 4.88 (p74); 42.5 % inswinging vs 34.9 % (p74), 9.3 % cortos vs 13.4 % (p41); xG de córner 0.20 (p71), xG por córner 0.04 (p59). 369 córners, 150 tiros, xG 13.9, 13 goles. Izquierda inswinging: 61 córners, 29 tiros, xG 3.12, 4 goles. Derecha inswinging: 73, 27 tiros, xG 2.43, 2 goles. Derecha outswinging: 64, 29 tiros, xG 2.96, 2 goles. Izquierda outswinging: 47, xG 1.49, 2 goles. Izquierda corto: 22 córners, 9 tiros, xG 2.24, 2 goles. Derecha corto: 14, xG 0.45, 0 goles"
- kpi: "43 % | 35 % | de sus córners | 74 | Córners cerrados | neutro"
- definiciones: D-07
- decision: "Rival: el córner cerrado desde la izquierda al centro del área es el que hay que defender con el portero saliendo; el corto por derecha no produce nada y se puede dejar. Staff: el corto por izquierda rinde 0.10 por córner, más del doble que el abierto por ese lado (47 córners, 1.49 de peligro en total); vale la pena cobrar más cortos por izquierda y menos abiertos"
Saca más córners que la liga y cobra cerrado más que la liga, pero el peligro por córner es el normal: mucho volumen, rendimiento medio. La asimetría es clara: desde la izquierda produce 4 goles en 61 cerrados y 2 en 22 cortos; desde la derecha, 2 goles en 73 cerrados y ninguno en 14 cortos. Con Santos el patrón cambió: 7.0 córners por partido, de los más altos de la liga, pero solo 26 % cerrados, y el peligro por córner bajó a 0.03.

### Concede 0.39 de balón parado, menos que la liga, pero el córner abierto desde la derecha le hizo 4 de 10 goles
- bloque: M-4
- metrica: sp_xg_conceded
- cifra: "xG concedido de balón parado 0.39 vs 0.48 (p31); goles concedidos de balón parado 0.35 vs 0.45 (p36); 319 córners en contra, 142 tiros, xG 11.7, 10 goles. Derecha outswinging: 82 córners, 47 tiros, xG 4.77, 4 goles. Izquierda inswinging: 65, 30 tiros, xG 2.34, 3 goles. Tiro libre directo en contra: 26 tiros, 0 goles; tiro libre al área en contra: 47 tiros, 6 goles. 9 penales en contra (6 goles) vs 14 a favor (9 goles). Por equipo: León 0.65 (p88), Toluca 0.25 (p4), Santos 0.45 (p48) con 0.58 goles concedidos así por partido"
- kpi: "0.39 | 0.48 | goles esperados en contra por partido | 31 | Peligro concedido de balón parado | favor"
- definiciones: D-07
- decision: "Rival: cobrar abierto desde la derecha del atacante, donde 47 de 82 córners terminaron en remate, y tiros libres al área antes que directos (6 goles en 47 contra 0 en 26). Staff: el balón parado defensivo fue de los mejores de la liga con Toluca y es normal con Santos; el punto débil es el abierto que viene al segundo palo; ajustar la marca zonal ahí antes que nada"
En conjunto defiende bien el balón parado: concede menos peligro y menos goles que la liga, y el tiro libre directo en contra nunca le ha hecho gol en 26 intentos. El problema es específico: el córner abierto cobrado desde la derecha del rival le genera casi la mitad de los remates que concede de córner. Con Toluca el balón parado en contra fue de los más bajos de la liga; con León, de los más altos, y con Santos ya concede 0.58 goles por partido por esa vía, arriba de la liga.

### Saques de banda: conserva 69 %, arriba de la liga, pero 461 saques cerca del área dieron 6 goles
- bloque: M-4
- metrica: throwin_retention_pct
- cifra: "Saques en zona de peligro retenidos 69.0 % vs 61.1 % (p80); 6.78 saques en zona de peligro por partido vs 7.72 (p22); xG tras saque de banda 0.01 vs 0.02 (p21); 461 saques, 36 tiros desde la derecha (xG 3.10) y 19 desde la izquierda (xG 1.80), 6 goles; en contra concede 7.6 por partido y el rival retiene 64.6 %; con Toluca 74.2 % (p94), con Santos 69.35 % (p82), con León 57.75 % (p35)"
- kpi: "69 % | 61 % | de los saques cerca del área que conserva | 80 | Saques de banda que conserva | neutro"
- definiciones: D-07
- decision: "Rival: no gastar presión en su saque de banda; lo conserva pero no lo convierte en nada, mejor cerrar la recepción y esperar. Staff: el saque es una posesión segura y nada más; con 6.8 por partido, un saque largo al área trabajado valdría más que la retención"
Trata el saque de banda como un pase más: lo juega corto, lo conserva (con Toluca mejor que casi toda la liga) y rara vez tira después. Por eso crea desde el saque menos peligro que la liga a pesar de retenerlo más. Además tiene menos saques en zona de peligro que la liga porque sus ataques entran por el centro, no por la banda.

### El balón parado solo le funciona en casa: 0.60 de peligro por partido de local, 0.28 de visita
- bloque: M-4
- escenario: localia
- metrica: sp_xg
- cifra: "Local: xG de balón parado 0.60 (p86), goles de balón parado 0.52 (p71), xG de córner 0.25 (p89), xG por córner 0.05 (p84), 5.73 córners (p84). Visita: xG de balón parado 0.28 (p6), goles 0.20 (p8), xG de córner 0.16 (p42), xG por córner 0.03 (p29), 5.14 córners (p62)"
- kpi: "0.28 | 0.60 | goles esperados de balón parado por partido | 6 | Peligro de balón parado de visita | contra | de local"
- definiciones: D-20, D-07
- decision: "Rival de local contra él: su córner es inofensivo fuera de casa (0.03 por córner); se puede defender con menos gente y dejar dos arriba para salir. Staff: la diferencia no es de volumen (5.7 córners en casa, 5.1 fuera) sino de rendimiento por córner; revisar quién cobra y qué se cobra de visita, porque el cobro cambia con el estadio"
De local el balón parado es de los más productivos de la liga; de visita, de los más pobres, con menos de la mitad del peligro por cada córner. Es una parte de la diferencia entre su versión de casa y la de fuera: el resto está en lo que concede. Con un córner que vale 0.05 en casa y 0.03 fuera, los goles de balón parado caen de 0.52 a 0.20 por partido.

## Jugadores y cambios (M-5)

### 4-2-3-1 en 35 de 68; con León jugó 4-4-2 (14 de 18) y con Santos prueba la línea de cinco
- bloque: M-5
- metrica: tactical_shifts
- cifra: "4-2-3-1 en 35 (51 %), 4-4-2 en 15 (22 %), 3-4-3 en 8 (12 %), 3-5-2 en 4, 5-4-1 en 3. Apertura 2022: 4-4-2 en 14; Clausura 2024: 4-2-3-1 en 15; Apertura 2024: 4-2-3-1 en 14; Apertura 2026: 4-2-3-1 en 4, 5-4-1 en 3, 3-4-3 en 3. Cambio real de dibujo en 28 de 68; 1.63 cambios de formación por partido vs 1.80 (p34). Perdiendo del 85 en adelante: 4-4-2 en 34 % de los minutos; ganando del 75 en adelante: 3-4-3 entre 19 y 26 %"
- kpi: "51 % | | de los partidos | | Partidos que arranca en 4-2-3-1 | neutro"
- definiciones: SB, D-21
- decision: "Rival: contra Toluca el dibujo era uno; contra el Santos de hoy hay que preparar dos (4-2-3-1 y línea de cinco), porque en 12 partidos ha usado cinco dibujos. Si va perdiendo al final, esperar dos puntas; si va ganando, tres centrales. Staff: el 4-2-3-1 es la casa del modelo (los dos torneos con 4-2-3-1 fijo son los de mejor balance de peligro); la línea de cinco con Santos todavía no tiene resultados que la respalden"
El dibujo depende de la plantilla más que del técnico: con León, 4-4-2 casi todo el torneo; con Toluca, 4-2-3-1 fijo (29 de 38 partidos) y su mejor balance de peligro; con Santos ha alternado cinco dibujos en doce partidos, señal de que sigue buscando. Dentro del partido cambia menos que la liga, pero el patrón de cierre es claro: con ventaja pasa a tres centrales y con desventaja mete un segundo punta.

### Mueve tarde el banquillo: primer cambio al 57, arriba de la liga; perdiendo lo adelanta al descanso
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio 57.2' vs 53.9' de liga (p79). Perdiendo 50.7' (mediana 45'), empatando 56.8' (mediana 60'), ganando 63.8' (mediana 63'). Contra top 6: 61.7' (p97); en jornadas 1 a 4: 48.7'; en zona directa: 59.2'; de local 55.2', de visita 59.1'. 4.4 cambios por partido, 291 tácticos y 11 por lesión"
- kpi: "57' | 54' | minuto del primer cambio | 79 | Minuto del primer cambio | neutro"
- definiciones: SB, D-21, D-25
- decision: "Rival: si va empatando o ganando, el banquillo de Paiva no entra antes del 60; hay una ventana de 15 minutos tras el descanso para cambiar el partido antes que él. Staff: contra los de arriba espera hasta el 62 y es justo contra ellos donde más pierde; adelantar el primer cambio al 55 en esos partidos cuesta poco, y el impacto del cambio perdiendo (abajo) dice que el banquillo le funciona"
Es de los técnicos que más esperan para hacer el primer cambio, salvo cuando va perdiendo: ahí la mediana es el minuto 45, es decir, en la mitad de esos partidos cambia en el vestidor. Contra rivales del top 6 y de visita espera más, y en las primeras cuatro jornadas, cuando prueba plantilla, cambia antes que nadie (48.7). Casi todos los cambios son tácticos: 291 de 302.

### El primer cambio perdiendo funciona: peligro creado de 0.23 a 0.36 y concedido de 0.45 a 0.22
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Perdiendo (21), 15 min antes vs después del primer cambio: xG 0.23 a 0.36, xG concedido 0.45 a 0.22, tiros 2.5 a 3.0, PPDA 11.0 a 15.0, field tilt 59 a 69. Ganando (22): xG 0.37 a 0.23, xG concedido 0.13 a 0.21, tiros 2.7 a 1.6, field tilt 48 a 44. Empatando (25): xG 0.18 a 0.17, xG concedido 0.24 a 0.16. A quién saca perdiendo: pivote derecho 12, lateral derecho 11, pivote izquierdo 11; ganando: extremo derecho 16, extremo izquierdo 16, mediapunta 13"
- kpi: "0.36 | 0.23 | goles esperados en 15 minutos | | Peligro creado en los 15 minutos después del primer cambio, perdiendo | favor | antes del cambio"
- definiciones: D-21, SB
- decision: "Staff: el cambio perdiendo es su mejor decisión de partido; el equipo sube 10 puntos de dominio territorial y concede la mitad. El de ganando es el que hay que revisar: después del cambio crea menos, concede más y pierde territorio. Rival: cuando Paiva cambia yendo arriba es el momento de ir por él; cuando cambia yendo abajo, apretar la marca porque el empuje viene"
Perdiendo saca pivotes (23 entre los dos) y lateral derecho (11): quita un contención o un defensor, mete gente de ataque, y el equipo responde con más territorio y más llegadas. Ganando saca extremos (32) y mediapunta (13), pero el efecto es el contrario al que busca: baja el peligro creado y sube el concedido en los 15 minutos siguientes. Empatando el cambio no mueve nada en ataque y sí baja un poco lo que concede.

### Once estable: 2.4 titulares nuevos por partido; con Toluca el núcleo fue Volpi, Ruiz, García, Baeza y Pereira
- bloque: M-5
- metrica: xi_stability
- cifra: "Jaccard entre onces consecutivos 0.67; 2.4 titulares distintos de un partido al siguiente. Más usados en 68 partidos: Tiago Volpi 38 titularidades (56 %), Marcel Ruiz 35 (51 %), Brian García 34 (50 %), Andrés Pereira 31 (46 %), Claudio Baeza 30 (44 %), Alexis Vega 29 (43 %). Núcleo (titular en 70 % o más) por torneo: León 9 jugadores, Toluca 7 y 8, Santos 6"
- kpi: "2.4 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB
- decision: "Staff: Paiva construye sobre un núcleo de 6 a 9 jugadores por torneo y rota el resto; en Santos el núcleo es de seis (Bullaude, Carlos López, Cuevas, Felipe Sánchez, Pardo, Rodrigo) y hay que protegerlo de lesiones porque la plantilla no tiene recambio del mismo perfil. Rival: el once se adivina; preparar el partido sobre esos seis"
Es un técnico de once estable y sus equipos tienen columna: con Toluca, portero, doble pivote, lateral derecho y central zurdo fueron los mismos en dos torneos, y es el tramo de mejores resultados. Con León el núcleo fue más amplio (9) pero el equipo peor; con Santos es más corto (6) y el equipo arrancó 0-1-6 antes de hilar cinco victorias.

## Por equipo: qué viaja con Paiva (León 18, Toluca 38, Santos Laguna 12 partidos)

### Con Toluca fue el mejor Paiva: +0.51 de balance de peligro y 49 conducciones por partido; con León, -0.33
- bloque: M-1
- escenario: equipo
- metrica: xgd
- cifra: "Toluca (38, 19-11-8): xGD 0.51 (p86), xG 1.43 (p88), xG concedido 1.07 (p36), 49.3 conducciones progresivas (p94), 0.65 centros por entrada (p4), 17.2 entradas al área (p88), precisión de pase 83.6 % (p94), field tilt 58.4 (p86), xG concedido de balón parado 0.25 (p4). León (18, 6-4-8): xGD -0.33 (p24), xG concedido 1.41 (p85), 54.6 transiciones (p3), directness permitida al rival 0.63 (p100), 68.6 % de tiros concedidos desde el área (p98), xG de córner 0.31 (p96). Santos (12, 5-1-6): xGD 0.29 (p77), xG 1.51 (p92), xG concedido 1.35 (p78)"
- kpi: "0.51 | -0.33 | goles esperados de diferencia por partido | 86 | Balance de peligro con Toluca | favor | con León"
- definiciones: D-26b, D-14, D-12
- decision: "Staff: lo que viaja con Paiva es el ataque por abajo con tiros de calidad (los tres equipos arriba de la liga en calidad de tiro y precisión de pase); lo que no viaja es la defensa, que depende de la plantilla: con León concedió como los peores de la liga y con Toluca como los mejores. Rival: contra su Santos, atacar como atacaban a su León, directo y con llegadas al área"
Con Toluca tuvo plantilla para su idea: conducciones hacia adelante de las más altas de la liga, casi nada de centros, 84 % de pases completados y el balón parado defensivo más sólido de los tres ciclos. Con León el rival le jugó directo (la verticalidad que permitió fue la más alta de la liga) y lo castigó desde el área. Santos se parece hoy más al León en lo defensivo (16.8 llegadas al área del rival, 3.0 tiros rivales justo tras perderla) y al Toluca en lo ofensivo (1.51 de peligro creado).

### Santos, 12 partidos: el ataque llegó (1.51 de peligro), la presión tras pérdida no (26 por partido)
- bloque: M-2
- escenario: equipo
- metrica: counterpressures
- cifra: "Santos vs Toluca: PPDA 19.7 (p96) vs 15.0; contrapresiones 26.1 (p8) vs 32.7 (p61); tiros concedidos 16.25 (p87) vs 11.9 (p25); entradas al área del rival 16.8 (p84) vs 12.0 (p21); tiros rivales en 10 s tras pérdida 3.00 (p93) vs 2.50; fases de presión con recuperación 27.9 % (p14) vs 32.25 %; xG 1.51 (p92) vs 1.43; regates completados 69.4 % (p98); 7.0 córners (p99); posesión 50.0 % vs 55.84 %; field tilt 48.4 vs 58.4"
- kpi: "26.1 | 32.7 | presiones tras pérdida por partido | 8 | Presión tras pérdida con Santos | contra | con Toluca"
- definiciones: D-26b, D-06, D-05b, D-04
- decision: "Staff de Santos: el ataque ya es el de Toluca (crea más, incluso); la diferencia está en los cinco segundos después de perder el balón, donde el equipo presiona menos que casi toda la liga y concede 3 tiros por partido justo tras perderla. Es trabajo de entrenamiento, no de fichajes. Rival: robar y salir en los primeros cinco segundos; el Santos de Paiva no te persigue"
Doce partidos y confianza media por la muestra, pero el patrón es nítido: Santos tiene menos balón (50 % contra 56 % con Toluca) y menos territorio, y cuando lo pierde no lo recupera. Concede 16 tiros por partido, arriba de la liga, 4 más que con Toluca. La parte buena es que los regates le salen como a nadie (69 %) y el peligro creado por partido es el más alto de sus tres ciclos; el equipo arrancó 0-1-6 y lleva cinco victorias seguidas, con el 5-0 a Querétaro como su tercer mejor partido por balance de peligro.

## Partidos y rivales

### Cruz Azul y Guadalajara son su pared: 0-1-4 y 0-3-3; a Jardine le perdió 3 de 5
- bloque: M-2
- escenario: rival
- metrica: xgd
- cifra: "Cruz Azul 0-1-4; Guadalajara 0-3-3; América 2-0-4; Monterrey 1-1-2. Técnicos: André Jardine 5 pj 2-0-3 (xG 1.53 a favor, 1.70 en contra), Guillermo Almada 4 pj 1-1-2 (1.21 / 1.43), Fernando Gago 4 pj 0-2-2 (0.99 / 0.86), Gustavo Lema 3 pj 2-1-0 (1.86 / 0.87), Mauro Gerk 3 pj 2-1-0 (1.57 / 1.05). Peores partidos por xGD: 1-5 en América con Toluca (xG 1.03 / 4.41), 1-5 en Monterrey con León (1.15 / 3.69), 0-1 en Cruz Azul con León (0.54 / 2.87) y con Santos (0.51 / 2.31). Rachas: 10 sin perder, 5 victorias seguidas, 7 derrotas seguidas"
- kpi: "7 | 11 | derrotas en los 11 partidos contra Cruz Azul y Guadalajara | | Derrotas contra Cruz Azul y Guadalajara | contra | partidos jugados"
- definiciones: D-25, D-03
- decision: "Rival: Cruz Azul y Chivas le han ganado cerrando el partido y saliendo rápido; los tres 0-1 contra Cruz Azul son el molde: cederle el balón, cerrar el área y castigar una salida rápida. Staff: contra Jardine y Almada el equipo creó peligro (1.53 y 1.21) pero concedió más; contra Gago creó menos de 1 por partido. El plan contra bloque bajo con salida rápida es el que falta"
Sus rachas van por ciclos: 10 partidos sin perder con Toluca en el Clausura 2024 (cortados por el 1-5 en el Azteca), 7 derrotas seguidas entre la liguilla del Apertura 2024 con Toluca y el arranque con Santos, y 5 victorias consecutivas ahora. Ganó con menos peligro que el rival en 4 partidos y perdió creando más en 5, así que el resultado suele seguir al juego; sus cuatro peores partidos por balance de peligro son todos de visita.
