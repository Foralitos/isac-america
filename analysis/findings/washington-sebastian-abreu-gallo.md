# Hallazgos — Sebastián Abreu en la Liga MX (Apertura 2025 → Apertura 2026, 48 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Abreu con datos: Tijuana (Apertura 2025, 20; Clausura 2026, 17; Apertura 2026, 11), 48 en total. Récord 17-18-13. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" o "pases que deja dar antes de robar" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas, "presión tras pérdida" = contrapresión); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3, M-4)

### Defiende más atrás que nadie: presiona a 50 metros de su portería y deja dar 18 pases antes de robar
- bloque: M-2
- metrica: press_height
- cifra: "Altura de presión 50.2 m vs 55.8 de liga (p1); línea defensiva 42.7 m vs 47.9 (p3); PPDA propio 17.7 vs 14.0 (p88, menos intenso); 25.8 presiones en último tercio vs 33.9 (p13); 13.5 % de fases de presión altas vs 16.9 (p24); 28.7 contrapresiones vs 32.0 (p18); concede 1.24 xG vs 1.17 (p62) y 60.6 % de los tiros desde el área (p74); directness permitida al rival 0.60 (p77)"
- kpi: "50.2 | 55.8 | metros desde su portería | 1 | Altura a la que presiona | contra"
- definiciones: D-13, D-05, D-05b, D-06, D-12
- decision: "Rival: no hay presión que saltar; tener el balón en campo de Tijuana es gratis, lo caro es entrar al área, así que mover el bloque de lado a lado y tirar desde la zona 14 antes de que cierre. Staff: el bloque bajo no está dando lo que promete: concede como la liga y 6 de cada 10 tiros rivales salen desde el área; hay que subir la línea 3 o 4 metros o aceptar que la portería la salva Rodríguez"
Es el rasgo que más lo aparta de la liga en los tres torneos: la altura de presión nunca pasó de 50.6 metros en un torneo completo. Sus rachas de presión son normales en cantidad (30.2 por partido) y en robo (31.8 % terminan recuperando), pero ocurren en su propio campo: solo 13.5 % son en campo rival. Tras perder el balón tampoco persigue (28.7 presiones tras pérdida, abajo de la liga), aunque cuando lo hace recupera algo más que el promedio (28.6 %). El precio es que el rival le juega vertical y le tira desde adentro.

### Juega sin el balón: 39 % de dominio territorial y 73 ataques por partido, de los más bajos de la liga
- bloque: M-1
- metrica: field_tilt
- cifra: "Field tilt 39.0 % vs 49.6 (p11); posesión 46.0 % vs 49.8 (p20); 73.1 secuencias ofensivas vs 80.3 (p8); 49.6 % llegan al último tercio vs 55.0 (p8); 11.7 entradas al área vs 14.0 (p19); 11.8 tiros sin penal vs 13.2 (p27); xG sin penal 1.02 vs 1.14 (p31); 14.9 % de secuencias terminan en tiro (p42); 0.09 xG por tiro (p62)"
- kpi: "39 % | 50 % | del juego en campo rival | 11 | Dominio territorial | contra"
- definiciones: D-01, D-02, D-10, D-12
- decision: "Rival: el balón va a ser tuyo aunque no lo quieras; preparar el partido contra bloque bajo con amplitud y tiro de media distancia, no esperar espacios. Staff: el problema ofensivo es de volumen, no de calidad: llega al área 2 veces menos por partido que la liga y cada llegada vale lo mismo; cualquier ganancia viene de llegar más, no de tirar mejor"
Es la otra cara del bloque bajo. Con menos ataques que casi toda la liga, y menos que llegan al último tercio, el peligro creado se queda cerca de la media porque lo que llega convierte igual que el promedio: 14.9 % de sus ataques terminan en tiro y cada tiro vale 0.09. Por torneo el dominio territorial no se movió (40, 38 y 38), así que no depende de la plantilla sino del plan.

### Sale jugando desde atrás y por el centro: 48 % de sus ataques nacen en su propio tercio
- bloque: M-1
- metrica: seq_start_defensivo_pct
- cifra: "48.4 % de las secuencias nacen en tercio defensivo vs 44.5 (p90); 38.3 % nacen por el carril central vs 36.1 (p81); 30.4 % por derecha vs 32.3 (p17); salida larga del portero 42.6 % vs 46.8 (p35); 92.3 pases progresivos vs 100.4 (p26); 32.0 conducciones progresivas vs 39.0 (p16); 78.4 % de precisión de pase (p46)"
- kpi: "48 % | 45 % | de sus ataques | 90 | Ataques que nacen en su propio campo | neutro"
- definiciones: D-02, D-10, D-11, D-14
- decision: "Rival: la salida corta es donde se le puede presionar; el portero juega corto y el equipo progresa poco conduciendo, así que presionar alto a los centrales y al pivote rinde más que esperar. Staff: si la idea es salir jugando, faltan conductores: 32 conducciones progresivas por partido es abajo de la liga; buscar un central o un interior que rompa líneas con el balón"
Encaja con el bloque: recupera abajo y arranca desde ahí, con el pivote Iván Tona (46 titularidades) como salida. Progresa por pase más que por conducción y evita la banda derecha en la construcción aunque por ahí juegan Fernández y Árciga, dos de sus fijos. Cuando el ataque nace por el centro, el peligro llega después por centro al área, no por regate.

### Llega poco al área y cuando llega es por centro: 1.14 centros por cada entrada
- bloque: M-1
- metrica: cross_ratio
- cifra: "Cross ratio 1.14 vs 0.94 de liga (p86); 11.7 entradas al área (p19); 10.7 regates intentados vs 14.0 (p10) con 59.5 % completados vs 53.9 (p85); 43.0 % de tiros desde fuera del área (p54); Clausura 2026: cross ratio 1.32 (p98) y 8.8 regates (p3)"
- kpi: "1.14 | 0.94 | centros por cada llegada al área | 86 | Centros por cada llegada al área | neutro"
- definiciones: D-12, D-14
- decision: "Rival: defender el área con dos centrales fuertes por arriba y no salir a los laterales; el uno contra uno casi no existe. Staff: el regate es poco pero bueno (6 de cada 10 completados, arriba de la liga); dar más balones en banda a quien regatea sube las llegadas sin tocar el modelo"
Regatea poco pero bien: de los más bajos de la liga en intentos y arriba en efectividad, lo que apunta a que el regate se reserva para situaciones ganadas. Perdiendo, el centro se dispara (16 por cada 90 minutos) y el regate cae a 8.3, el más bajo de todos los cortes. En el Clausura 2026, su torneo sin ataque, se centró más que en ningún otro torneo de la liga.

### Pocos ataques tras robo pero fulminantes: 2.8 segundos de robo a tiro y más peligro por contra que la liga
- bloque: M-3
- metrica: rec_to_shot_s
- cifra: "57.3 transiciones ofensivas vs 63.2 (p10); 3.0 tiros en transición vs 3.8 (p19); 2.84 s de recuperación a tiro vs 3.30 (p13, más rápido); xG en transición 0.57 vs 0.51 (p68); 10.0 recuperaciones altas vs 11.9 (p19); 31.4 % de recuperaciones altas con tiro en 10 s (p33); conversión 5.6 % vs 6.3 (p28)"
- kpi: "2.8 | 3.3 | segundos de robo a tiro | 13 | Segundos que tarda en tirar después de robar el balón | favor"
- definiciones: D-03
- decision: "Rival: la pérdida en campo de Tijuana se castiga en menos de 3 segundos; con el balón en su mitad, mantener dos jugadores por detrás del balón y no dejar que el pase largo encuentre al 9 solo. Staff: la contra es el arma que mejor funciona; el límite está en robar más alto (10 recuperaciones altas, abajo de la liga), no en correr más rápido"
Roba abajo y corre: tiene menos ataques tras robo que casi toda la liga porque recupera lejos de la portería rival, pero cada uno vale más (0.57 de peligro por partido, arriba de la liga con menos volumen). En los partidos que gana el peligro tras robo sube a 0.75 (de los más altos) y en el Apertura 2026 llegó a 0.84 por partido, con el equipo que menos persigue tras pérdida de su etapa.

### Balón parado de los más altos de la liga, pero la mitad son penales: 20 en 48 partidos
- bloque: M-4
- metrica: sp_xg
- cifra: "xG de balón parado 0.64 por partido vs 0.47 de liga (p90); 20 penales a favor, 16 goles, xG 15.7; xG de córner 0.17 vs 0.18 (p47); xG de tiro libre indirecto 0.10 vs 0.07 (p81); 0.52 goles de balón parado por partido vs 0.44 (p71); 10 penales en contra, 8 goles"
- kpi: "0.64 | 0.47 | goles esperados de balón parado por partido | 90 | Peligro de balón parado por partido | favor"
- definiciones: D-07, D-12
- decision: "Rival: no hacer falta dentro del área; 20 penales en 48 partidos es casi uno cada dos partidos y 16 entraron. Staff: sin penales, el balón parado es como la liga; el margen está en el córner, que rinde 0.17 por partido con la liga en 0.18"
Los 16 goles de penal son casi una cuarta parte de todo lo que anotó. El tiro libre cobrado al área sí está arriba de la liga; el córner no. Los penales explican también por qué el peligro creado total luce mejor que el peligro creado en juego: sin ellos crea 1.02 por partido, como la liga.

## Consistencia y variabilidad (D-20, D-21, D-22, D-23, D-24, D-25, D-26)

### Dos equipos: de local 13-10-3 con el mejor balance de la liga, de visita 4-8-10 y concede el doble
- bloque: M-2
- escenario: localia
- metrica: np_xg_conceded
- cifra: "Local (26 pj): 13 ganados, 10 empatados, 3 perdidos; xGD 0.58 (p89); xG concedido 0.90 (p17); 11.2 tiros concedidos (p13); PPDA 14.9; field tilt 45.8; xG concedido de balón parado 0.25 (p4); 0.12 goles concedidos de balón parado (p2); 43 goles a favor y 19 en contra. Visita (22 pj): 4 ganados, 8 empatados, 10 perdidos; xGD -0.80 (p4); xG concedido 1.63 (p96); 16.2 tiros concedidos (p86); PPDA 20.9 (p97); altura de presión 47.8 m (p0); field tilt 31.0 (p1); posesión 42.1 % (p7); xG 0.83 (p9); 45.4 % de secuencias al último tercio (p1); xG concedido de balón parado 0.75 (p95); 0.64 goles concedidos de balón parado (p80); 26 goles a favor y 41 en contra"
- kpi: "1.63 | 0.90 | goles esperados en contra por partido | 96 | Peligro concedido de visita | contra | de local"
- definiciones: D-20, D-05b, D-07, D-13
- decision: "Rival: de visita en Tijuana, no regalar el balón parado y aceptar un partido cerrado; en tu casa, presionarle la salida y centrar: ahí concede de los más altos de la liga en balón parado y en tiros. Staff: el equipo de visita renuncia a todo a la vez (presión, balón, llegada); el punto de partida es el balón parado defensivo, que pasa de 0.25 en casa a 0.75 fuera sin que cambie la plantilla"
Fuera de casa el bloque baja todavía más (47.8 metros, el más bajo de todos sus cortes), deja dar 21 pases antes de robar y apenas 45 % de sus ataques llegan al último tercio. Tres de sus cuatro victorias de visita llegaron creando menos peligro que el rival (Pachuca 2-0, Querétaro 2-1 y Juárez 2-1); la cuarta, León 3-0, fue pareja. De local concede 0.12 goles de balón parado por partido; de visita 0.64, más de cinco veces más.

### Pierde por lo que concede, no por lo que crea: 1.82 en contra en las derrotas, 0.79 en las victorias
- bloque: M-2
- escenario: resultado
- metrica: np_xg_conceded
- cifra: "Ganó 17: xG 1.15 (p53), xG concedido 0.79 (p7), xG en transición 0.75 (p92), 0.82 goles de balón parado (p97), 35.8 % de fases de presión con recuperación (p94), 10.8 tiros concedidos (p9). Perdió 13: xG 1.02 (p31), xG concedido 1.82 (p99), xG concedido en transición 0.91 (p99), xG rival en 10 s tras pérdida 0.38 (p98), 70.4 % de tiros concedidos desde el área (p99), 19.5 entradas al área del rival (p98), primer cambio al 45.8' (p3). Empató 18: PPDA 20.0 (p96), xG 0.89 (p16), field tilt 35.4 (p5), 10.4 entradas al área (p6)"
- kpi: "1.82 | 0.79 | goles esperados en contra por partido | 99 | Peligro concedido cuando pierde | contra | cuando gana"
- definiciones: D-03, D-04, D-05, D-07, D-12
- decision: "Rival: para ganarle no hace falta cerrarse; hace falta correr tras su pérdida y entrar al área: en sus derrotas el rival llega 19 veces al área y tira 7 de cada 10 desde adentro. Staff: el peligro creado se mueve 0.13 entre ganar y perder; el concedido se mueve 1.03. El trabajo de la semana es la transición defensiva, no el ataque"
Lo que separa sus victorias de sus derrotas está casi todo en su propia área. Cuando pierde, el peligro del rival en los 10 segundos tras una pérdida suya se multiplica por cuatro respecto a cuando gana, y el ataque tras robo se le apaga del otro lado (de 0.75 a 0.53). El empate, su resultado más frecuente (18 de 48), es el partido pasivo: deja dar 20 pases, crea 0.89 y llega al área 10 veces, de lo más bajo de la liga.

### Ganando se encierra: 28 % de dominio territorial, 8 tiros por 90 minutos y concede más que empatando
- bloque: M-2
- escenario: marcador
- metrica: np_xg_conceded
- cifra: "Ganando (1634 min): field tilt 28.4 (p19), posesión 40.9 %, altura de presión 45.8 m (p7), PPDA 16.6, 8.4 tiros por 90, 8.6 entradas al área, 68.6 pases progresivos, 7.3 centros, xG concedido 1.38 (p62), 13.7 tiros concedidos. Empatando (2518 min): field tilt 37.9, PPDA 15.9, xG concedido 1.02 (p36), 11.0 tiros concedidos. Perdiendo (727 min): field tilt 47.8, posesión 52.4 %, PPDA 13.4, 16.0 centros, 8.3 regates (p5), xG 1.12 (p55), xG concedido 1.69 (p92), xG concedido de balón parado 0.58 (p90)"
- kpi: "1.38 | 1.02 | goles esperados en contra por cada 90 minutos | 62 | Peligro concedido cuando va ganando | contra | cuando va empatando"
- definiciones: D-21, D-05b, D-13
- decision: "Rival: si Tijuana se adelanta, no desesperarse: va a regalar el balón y el campo, y concede más ganando que empatando; cargar el área con centros y segundas jugadas. Staff: con ventaja el equipo baja la presión a 46 metros y deja de tirar (8 por 90); mantener un delantero fijando a los centrales rivales es la forma barata de no vivir 30 minutos en el área propia"
Perdiendo hace lo contrario de lo que se esperaría de un equipo de contra: presiona más (13 pases), tiene más balón (52 %) y centra el doble, pero regatea menos que nunca y el peligro creado sube apenas a 1.12 por 90, mientras que lo que concede (1.69) es de lo más alto de la liga. El equipo tiene un solo plan, esperar y correr, y cuando el marcador lo obliga a salir no tiene con qué.

### Del minuto 60 al 90 el partido se le va: concede 1.58 por 90 minutos y deja de avanzar
- bloque: M-2
- escenario: momento
- metrica: np_xg_conceded
- cifra: "60-90: xG concedido 1.58 por 90 (p70), OBV concedido 1.64 (p83), 14.3 tiros concedidos (p70), 15.2 entradas al área del rival (p73), 74.0 pases progresivos (p16), 10.2 entradas al área (p14), posesión 44.0 % (p13), 8.3 regates (p7). 75-90: 68.9 pases progresivos (p9), 9.5 entradas al área (p7), OBV concedido 1.75 (p87), 14.5 tiros concedidos (p71). 0-30: xG concedido 0.85 (p31), 9.0 tiros concedidos (p20), 12.3 centros (p86)"
- kpi: "1.58 | 0.85 | goles esperados en contra por cada 90 minutos | 70 | Peligro concedido del minuto 60 al 90 | contra | en los primeros 30 minutos"
- definiciones: D-22, D-12, D-14
- decision: "Rival: guardar piernas y cambios para el último tramo; después del 75 Tijuana ya no progresa (69 pases hacia adelante por 90, de los más bajos) y concede de los más altos. Staff: el desgaste del bloque bajo se paga al final; el primer cambio ganando llega al 63 y después del cambio se concede más, no menos. Adelantar ese cambio al 55 y meter piernas atrás, no arriba"
El peligro concedido casi se duplica entre la primera media hora y la última, y el ataque se apaga al mismo tiempo: las entradas al área bajan a 9.5 por 90 y las conducciones a 25.7. Es el tramo donde más goles le hacen y coincide con los cambios ganando, que no cierran el partido (ver jugadores y cambios).

### Su peligro llega entre el 30 y el 60: balón parado y contragolpe en su punto más alto de la liga
- bloque: M-4
- escenario: momento
- metrica: sp_xg
- cifra: "30-60: xG de balón parado 0.72 por 90 (p96), xG en transición 0.69 (p90), xG sin penal 0.95. 45-60: xG de balón parado 0.82 (p97), xG en transición 0.70 (p89). 0-15: xG en transición 0.07 (p8), xG sin penal 0.54 (p20), 8.3 tiros (p22), xG concedido 0.65 (p21). 15-30: xG sin penal 1.09 (p71), 11.6 tiros (p63)"
- kpi: "0.72 | 0.28 | goles esperados de balón parado por cada 90 minutos | 96 | Peligro de balón parado del minuto 30 al 60 | favor | en los primeros 30 minutos"
- definiciones: D-22, D-07, D-03
- decision: "Rival: los primeros 15 minutos son los más seguros contra Tijuana (0.54 de peligro creado por 90, abajo de la liga); el riesgo real está en las faltas y los robos entre el 30 y el 60. No regalar faltas cerca del área en ese tramo. Staff: el arranque es lento por los dos lados; el plan de partido se enciende tarde y hay media hora de partido en la que no pasa nada"
Arranca frío de los dos lados: en el primer cuarto de hora crea 0.54 y concede 0.65 por 90, los dos abajo de la liga, y casi no hay ataques tras robo (0.07). Entre el 30 y el 60 el equipo da su mejor versión en las dos armas que lo definen, el balón parado y la contra, y a partir del 60 vuelve a caer en lo ofensivo mientras sube lo que concede.

### Cuando persigue la liguilla se vuelve pasivo: 20 pases antes de robar y 1.53 concedido en 23 partidos
- bloque: M-2
- escenario: tabla
- metrica: ppda_own
- cifra: "Directa alcanzable (23 pj): 6 ganados, 11 empatados, 6 perdidos; PPDA 19.9 (p96); xG concedido 1.53 (p92); xGD -0.37 (p21); 14.9 tiros concedidos (p73); xG 0.93 (p20); 2.35 cambios de dibujo por partido (p89); ganando en ese estado concede 1.85 por 90 y 15.7 tiros. Zona directa (9 pj): 3 ganados, 1 empatado, 5 perdidos; xG 1.48 (p92); xGD 0.56 (p89); xG de balón parado 0.91 (p99); xG rival tras pérdida 0.35 (p98); perdiendo en ese estado 21.5 tiros y 23.4 centros por 90. Arranque, jornadas 1 a 4 (12 pj): 5 ganados, 6 empatados, 1 perdido; xG 0.84 (p9); xG concedido 0.84 (p11); 68.0 secuencias (p1); 9.6 entradas al área (p3)"
- kpi: "19.9 | 14.0 | pases que deja dar antes de robar | 96 | Intensidad de presión cuando la liguilla directa es alcanzable | contra"
- definiciones: D-23, D-05b, D-21
- decision: "Rival: cuando Tijuana llega con la liguilla directa al alcance, es el momento de atacarlo; concede más que casi toda la liga y empata la mitad de esos partidos. Staff: la pasividad bajo presión de tabla es el patrón más caro: 11 empates en 23 partidos con la clasificación en juego. Fijar un umbral de presión (no más de 16 pases) y revisarlo en video cada lunes de esa fase"
Las tres situaciones de tabla son tres equipos. En las primeras cuatro jornadas juega partidos cerrados por los dos lados (0.84 creado, 0.84 concedido) y casi no pierde. Con la liguilla directa alcanzable, el corte más grande de su etapa, deja dar 20 pases y concede 1.53. Y ya en zona directa pasa lo contrario: crea más que el 92 % de la liga, con el balón parado en su máximo, pero cada pérdida suya es un tiro rival (0.35 en 10 segundos, de los más altos) y pierde 5 de 9, incluida la derrota 0-1 con Querétaro en casa creando 2.33 contra 0.72.

### Contra los seis de arriba: 4-6-8, 32 % del territorio y cada pérdida es un tiro rival
- bloque: M-3
- escenario: rival
- metrica: vuln_xg
- cifra: "Top 6 (18 pj): 4 ganados, 6 empatados, 8 perdidos; field tilt 31.7 (p1); PPDA 19.9 (p96); 46.2 % de secuencias al último tercio (p4); xG concedido 1.37 (p80); xG rival en 10 s tras pérdida 0.29 (p93); 38.7 % de recuperaciones altas con tiro (p90); 17.9 entradas al área del rival (p90); 15.8 tiros concedidos (p83); 66.3 % de pases bajo presión completados (p15); 0.33 goles de balón parado (p25); xG por tiro 0.11 (p94). Resto (30 pj): 13 ganados, 12 empatados, 5 perdidos; field tilt 43.4; PPDA 16.4; xG concedido 1.16 (p49); xG rival tras pérdida 0.11 (p10); 73.5 % de pases bajo presión (p81); 0.63 goles de balón parado (p91)"
- kpi: "0.29 | 0.11 | goles esperados del rival en 10 segundos tras una pérdida suya, por partido | 93 | Peligro concedido tras perder el balón contra el top 6 | contra | contra el resto"
- definiciones: D-25, D-04, D-05b, D-07
- decision: "Rival de arriba: presionarle la salida, porque bajo presión completa 66 % de los pases (abajo de la liga) y cada pérdida se convierte en tiro; con la pelota, paciencia, el bloque va a estar a 48 metros. Staff: contra los grandes el balón parado se le apaga (0.33 goles por partido contra 0.63) y la pérdida se le castiga el triple; ensayar la salida bajo presión con el pivote y los dos centrales es el ajuste con más retorno"
Contra los seis de arriba el equipo se encierra más que de costumbre, pierde el balón saliendo y lo pagan al instante: el peligro del rival en los 10 segundos tras una pérdida suya casi se triplica y solo 46 % de sus ataques llegan al último tercio. Lo que sí sube es la calidad de los pocos tiros (0.11 por tiro, de los más altos) y las recuperaciones altas con tiro (39 %). Contra el Tigres de Pizarro va 2-0-2: las dos victorias en casa (3-0 y 3-1), las dos derrotas fuera (0-2 y 0-5).

### Tres torneos, tres equipos: la presión se aflojó de 15 a 20 pases y el Clausura 2026 fue el torneo sin ataque
- bloque: M-1
- escenario: torneo
- metrica: np_xg
- cifra: "Apertura 2025 (20 pj, 8-6-6): PPDA 15.1 (p69), xG 1.15 (p52), xG concedido 1.17 (p52), 35 goles a favor y 29 en contra, 4-2-3-1 en 9. Clausura 2026 (17 pj, 5-8-4): PPDA 19.4 (p94), xG 0.81 (p7), xG concedido 1.37 (p81), 8.8 regates (p3), 10.7 entradas al área (p7), 51.0 % de tiros desde fuera del área (p94), cross ratio 1.32 (p98), xGD -0.47 (p17). Apertura 2026 (11 pj, 4-4-3): PPDA 19.6 (p95), xGD 0.40 (p82), xG de balón parado 1.01 (p99), 0.73 goles de balón parado (p96), xG en transición 0.84 (p97), 23.6 contrapresiones (p2), OBV ofensivo 1.67 (p88), 4-1-4-1 en 9 de 11"
- kpi: "0.81 | 1.15 | goles esperados a favor por partido | 7 | Peligro creado en el Clausura 2026 | contra | en el Apertura 2025"
- definiciones: D-26, D-05b, D-07, D-03
- decision: "Rival: la versión actual (Apertura 2026) ya no presiona ni persigue tras pérdida; vive del balón parado y de la contra, así que no hay que hacerle faltas ni regalar pérdidas, y el resto del partido se puede tener el balón sin castigo. Staff: la presión bajó de 15 a 20 pases en un año y nada la compensó en el Clausura 2026; en el Apertura 2026 la compensa el balón parado, que es lo menos repetible del fútbol. Recuperar algo de intensidad antes de que el balón parado se enfríe"
El Apertura 2025 fue el torneo más parecido a la liga en presión y creación; de ahí en adelante la presión se aflojó y no volvió. En el Clausura 2026 el ataque desapareció (0.81 de peligro creado, de los más bajos; la mitad de los tiros desde fuera del área; 8.8 regates), con 8 empates en 17. En el Apertura 2026 el balance es positivo (0.40 por partido) con la menor presión tras pérdida de toda su etapa: el equipo crea más con menos, pero lo hace con el balón parado en su máximo histórico y la contra, dos armas que dependen mucho de pocas acciones.

### En el play-in se transformó: presionó a 64 metros con 67 % del balón; en cuartos volvió al bloque bajo y Tigres lo goleó
- bloque: M-2
- escenario: fase
- metrica: press_height
- cifra: "Play-in vs Juárez (1 pj, 3-1): altura de presión 64.5 m (p100), PPDA 8.9 (p1), posesión 66.8 % (p100), field tilt 69.8 (p100), 31.0 % de fases altas (p99), xG 1.72 (p98), xG concedido 0.15 (p0), 4 tiros concedidos. Cuartos vs Tigres (2 pj, 3-0 en casa y 0-5 fuera): altura 46.7 m (p0), xG 0.45 (p0), xG concedido 1.91 (p100), 21.0 tiros concedidos (p100), 25.0 entradas al área del rival (p100), xGD -2.24 (p0), 76.7 % de tiros concedidos desde el área (p100). Fase regular (45 pj): 15 ganados, 18 empatados, 12 perdidos"
- kpi: "64.5 | 50.2 | metros desde su portería | 100 | Altura de presión en el play-in, un solo partido | neutro | en toda su etapa"
- definiciones: D-24, D-13, D-05b
- decision: "Rival en liguilla: a un partido, esperar a un Tijuana distinto, que presiona arriba y quiere el balón; a doble partido, la vuelta fuera de casa es donde se le puede golear. Staff: el play-in demuestra que el equipo sabe presionar alto cuando el plan lo pide; la pregunta es por qué no se repite. Son 3 partidos: patrón, no ley"
Es muestra chica (1 y 2 partidos) y hay que leerlo como indicio. En el único partido a un solo juego de su etapa el equipo hizo todo lo contrario de su identidad: presión más alta que cualquier media de la liga, 67 % del balón y 4 tiros concedidos. Ante Tigres regresó al bloque bajo: ganó la ida 3-0 creando menos peligro que el rival (0.69 contra 1.13) y en la vuelta, con el global a favor, concedió 2.70 de peligro, 4.02 por 90 cuando iba perdiendo, y cayó 0-5.

## Balón parado (M-4)

### Pocos córners y el gol viene del abierto por derecha: 4 de sus 6 goles de córner en 48 partidos
- bloque: M-4
- metrica: corners
- cifra: "182 córners a favor (3.79 por partido vs 4.88 de liga, p10), 6 goles, xG 8.0 en 101 tiros; derecha outswinging al centro: 47 córners, 30 tiros, xG 2.19, 4 goles; izquierda inswinging al centro: 50 córners, 23 tiros, xG 2.15, 1 gol; corto desde la izquierda: 13 córners, 6 tiros, xG 0.83, 0 goles; córners cortos 11.4 % vs 13.4 (p49); inswinging 34.1 % vs 34.9 (p49); xG por córner 0.04 (p71); xG de córner 0.17 por partido vs 0.18 (p47); Apertura 2026: xG de córner 0.30 (p95)"
- kpi: "3.8 | 4.9 | córners por partido | 10 | Córners a favor por partido | contra"
- definiciones: D-07, D-12
- decision: "Rival: el córner peligroso de Tijuana es el abierto desde la derecha al centro del área; poner al mejor cabeceador en el punto de penal en esos cobros y no gastar dos hombres en el corto, que no produce. Staff: con 3.8 córners por partido (de los más bajos) cada cobro cuenta; el envío abierto desde la derecha rinde 4 goles en 47 y el cerrado desde la izquierda 1 en 50 con el mismo peligro acumulado: cobrar más abierto también desde la izquierda"
Saca pocos córners porque llega poco al área, y los que saca valen lo normal (0.04 por córner). El reparto de goles no sigue al peligro: los dos envíos principales acumulan casi lo mismo (2.19 y 2.15) pero uno dio 4 goles y el otro 1. En el Apertura 2026 el córner despertó (0.30 por partido, de los más altos de la liga), parte del salto del balón parado de ese torneo.

### Concede 5.2 córners por partido y 8 goles, más de los que saca y anota: el cerrado desde la izquierda es el que más peligro le genera
- bloque: M-4
- metrica: xg_per_corner_conceded
- cifra: "251 córners en contra (5.2 por partido) contra 182 a favor (3.8); 8 goles en contra contra 6 a favor; xG concedido de córner 10.8 en 104 tiros; izquierda inswinging al centro: 51 córners, 26 tiros, xG 3.78, 1 gol; derecha outswinging al centro: 53, 25 tiros, xG 2.84, 2 goles; derecha inswinging al centro: 44, 19 tiros, xG 2.32, 2 goles; xG por córner concedido 0.04 (p72); xG concedido de balón parado 0.48 (p57); 0.35 goles concedidos de balón parado por partido vs 0.45 (p37); de visita 0.06 por córner concedido (p94) y de local 0.03 (p26)"
- kpi: "5.2 | 3.8 | córners por partido | 72 | Córners en contra por partido | contra | córners a favor"
- definiciones: D-07, D-12
- decision: "Rival: cobrar cerrado desde la izquierda al centro del área, donde Tijuana concede 3.78 de peligro en 51 córners; de visita en su cancha rinde la mitad. Staff: el bloque bajo regala córners (1.4 más por partido de los que saca); el peligro por córner es normal pero el volumen no, y de visita se duplica por córner: revisar la marca en el primer palo y al cabeceador rival en el cerrado desde la izquierda"
El balón parado defensivo, visto en conjunto, está como la liga: concede 0.48 de peligro y 0.35 goles por partido. El problema es de cantidad y de localía: defiende 69 córners más de los que saca, y fuera de casa cada córner rival vale el doble que en Tijuana. Los 10 penales en contra, con 8 goles, pesan tanto como los 8 goles de córner en lo que concede a balón parado.

### Tiros libres: cobrar al área sí, tirar a portería no; 44 tiros y 2 goles del indirecto, 31 directos y 1 gol
- bloque: M-4
- metrica: fk_indirect_xg
- cifra: "224 tiros libres a favor (4.7 por partido), xG 6.2, 4 goles, 31 directos; xG de tiro libre indirecto 0.10 por partido vs 0.07 de liga (p81): 44 tiros, xG 5.0, 2 goles; tiro libre directo: 31 tiros, xG 0.9, 1 gol (0.02 por partido, p64); en contra 276 (5.8 por partido), 3 goles, xG 4.1, 28 directos con 2 goles"
- kpi: "0.10 | 0.07 | goles esperados por partido | 81 | Peligro de tiro libre cobrado al área | favor"
- definiciones: D-07, D-12
- decision: "Rival: la falta lateral cerca del área es su mejor balón parado después del penal; hacer las faltas lejos y por el centro, donde su directo vale 0.9 de peligro en 31 intentos. Staff: el directo no rinde (1 gol en 31, como la liga); cuando la falta esté a menos de 25 metros, cobrar al área o jugada ensayada en lugar del disparo"
El tiro libre cobrado al área es el balón parado donde mejor está respecto a la liga sin contar penales: arriba de la media, con 5.0 de peligro acumulado y 2 goles. El directo produce poco y el rival le ha hecho más goles de tiro libre directo (2 en 28) de los que él anota (1 en 31). Concede 5.8 tiros libres por partido, uno más de los que recibe, consecuencia de defender tanto en su campo.

### Saques de banda: pocos cerca del área, retiene 56 %, y 2 de sus 5 goles salen de 7 saques lanzados al frente del área
- bloque: M-4
- metrica: throwin_retention_pct
- cifra: "314 saques de banda en zona de peligro (6.5 por partido vs 7.7 de liga, p16); retención 56.1 % vs 61.1 (p27), 52.5 % en el total; 5 goles, xG 1.1 en 18 tiros; desde la derecha al frente del área: 7 saques, 3 tiros, xG 0.65, 2 goles; derecha lejos: 113 saques, 18 tiros, xG 2.81, 1 gol; en contra 411 (8.6 por partido), el rival retiene 64.2 %, 4 goles; Apertura 2026 retención 72.1 % (p92) contra 46.7 % en el Apertura 2025 (p3)"
- kpi: "56 % | 61 % | de los saques cerca del área que conserva | 27 | Saques de banda cerca del área que retiene | contra | liga"
- definiciones: D-07, D-12
- decision: "Rival: presionar el saque de banda de Tijuana en campo propio; pierde casi la mitad y su único saque que produce es el largo al frente del área desde la derecha, que se defiende con un hombre delante del lanzador. Staff: la retención mejoró de 47 % a 72 % entre el primer torneo y el último; conservarla y ensayar más el saque largo al frente, que en 7 intentos dio 2 goles"
Recibe más saques de banda en zona de peligro de los que saca (8.6 contra 6.5 por partido), otra consecuencia del bloque bajo, y el rival los conserva mejor que él (64 % contra 56 %). Los 5 goles tras saque de banda son muchos para el peligro acumulado (1.1): el que funciona es el lanzamiento largo al frente del área desde la banda derecha, 7 intentos, 3 tiros y 2 goles.

## Jugadores y cambios (M-5)

### Del 4-2-3-1 al 4-1-4-1: 9 de 11 partidos en el Apertura 2026; perdiendo termina en 4-4-2
- bloque: M-5
- metrica: tactical_shifts
- cifra: "Dibujo inicial: 4-1-4-1 en 20 de 48 (42 %), 4-2-3-1 en 14 (29 %), 4-4-2 en 9 (19 %), 3-5-2 en 2; Apertura 2025: 4-2-3-1 en 9, 4-4-2 en 6, 4-1-4-1 en 4; Clausura 2026: 4-1-4-1 en 7, 4-2-3-1 en 4, 4-4-2 en 3, 3-5-2 en 2; Apertura 2026: 4-1-4-1 en 9 de 11; cambio real de dibujo en 27 de 48; 1.96 cambios de dibujo por partido vs 1.80 de liga (p66); perdiendo del minuto 75 al 90 el 4-4-2 ocupa 41 a 49 % de los minutos; ganando del 85 en adelante 4-2-3-1 31 %, 4-4-1-1 23 %, 3-4-3 17 %"
- kpi: "42 % | 29 % | de los partidos | 66 | Partidos que arranca en 4-1-4-1 | neutro | en 4-2-3-1"
- definiciones: SB, D-21, D-26
- decision: "Rival: esperar un 4-1-4-1 con un solo pivote (Tona) y dos líneas de cuatro muy juntas; si Tijuana va perdiendo después del 75, llegan dos delanteros y el 4-4-2 deja espacio entre líneas a la espalda del doble pivote. Staff: el cambio al 4-1-4-1 coincide con el torneo de mejor balance (Apertura 2026, 0.40 por partido); el plan de remontada con 4-4-2 existe pero llega tarde, en el último cuarto de hora"
El dibujo cambió con los torneos: del 4-2-3-1 y el 4-4-2 del Apertura 2025 al 4-1-4-1 casi fijo del Apertura 2026, con un pivote solo y cuatro volantes para cerrar el bloque. Dentro del partido mueve el dibujo más que la liga (27 de 48 partidos con cambio real) pero las variaciones son pocas: 4-4-2 para remontar, 4-2-3-1 o 4-4-1-1 para aguantar. Los experimentos con tres centrales (3-5-2 y 3-4-2-1) se quedaron en el Clausura 2026: 1 ganado, 1 empatado y 1 perdido.

### Primer cambio al descanso si no va ganando y al 63 si va ganando; perdiendo, el cambio transforma al equipo
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio: empatando media 45.8' (mediana 45', 18 partidos), perdiendo 46.9' (mediana 45', 9 partidos), ganando 60.3' (mediana 63', 21 partidos); liga 53.9'; en los partidos que perdió 45.8' (p3). Perdiendo, 15 min antes vs después del primer cambio: xG 0.13 a 0.31, xG concedido 0.53 a 0.26, tiros 1.6 a 3.7, PPDA 24.1 a 17.0, field tilt 29 a 57, altura de presión 45 a 59 m. Empatando: xG 0.11 a 0.35, xG concedido 0.26 a 0.11, tiros 1.6 a 2.5, field tilt 36 a 41. 4.3 cambios por partido, 187 tácticos y 18 por lesión; perdiendo saca Right Midfield (5), Left Defensive Midfield (4), Left Midfield (4), Left Back (4)"
- kpi: "45' | 63' | minuto del primer cambio (mediana) | 34 | Primer cambio cuando va empatando | neutro | cuando va ganando"
- definiciones: D-21, SB
- decision: "Staff: el primer cambio perdiendo o empatando es la mejor decisión que toma dentro del partido: el dominio territorial perdiendo pasa de 29 a 57 y el peligro concedido se parte a la mitad. Mantener el gatillo al descanso y, si se puede, adelantarlo cuando el partido ya está torcido al 30. Rival: si Tijuana no va ganando, al descanso cambia y sube 14 metros la presión; preparar la salida de los primeros 15 minutos del segundo tiempo"
Es el técnico que más usa el descanso como momento de cambio: la mediana del primer cambio empatando y perdiendo es el minuto 45, casi 9 minutos antes que la liga. Y funciona: después del cambio, perdiendo, el equipo pasa de defender a 45 metros a presionar a 59, triplica los tiros y reduce a la mitad lo que concede. Perdiendo no saca al delantero sino a un volante o al lateral izquierdo, es decir, mete un atacante por un defensor.

### Ganando, los cambios no cierran el partido: tras el primer cambio concede más (0.17 a 0.27) y el equipo no se mueve
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Ganando (21 partidos con primer cambio en ese estado), 15 min antes vs después: xG 0.24 a 0.23, xG concedido 0.17 a 0.27, tiros 1.7 a 1.9, PPDA 17.6 a 14.6, field tilt 36 a 37, altura de presión 48 a 50 m; a quién saca ganando: Center Forward (16), Right Midfield (12), Right Center Midfield (8), Center Attacking Midfield (7), Left Defensive Midfield (7); todos los cambios ganando: 98, minuto medio 71.1'; ganando concede 1.38 por 90 contra 1.02 empatando"
- kpi: "0.27 | 0.17 | goles esperados en contra en 15 minutos | | Peligro concedido en los 15 minutos después del primer cambio, ganando | contra | antes del cambio"
- definiciones: D-21, SB
- decision: "Staff: ganando saca primero al 9 (16 veces) y al volante derecho (12) y el equipo pierde la referencia arriba sin ganar nada atrás: el peligro concedido sube 60 % en el cuarto de hora siguiente. Probar cambios que mantengan al delantero y refresquen la línea de cuatro volantes, o un central por volante para pasar a cinco atrás. Rival: después del primer cambio de Tijuana con ventaja, el equipo se hunde sin delantero que fije; adelantar la línea y cargar el área"
Es el espejo del hallazgo anterior. Perdiendo, el cambio es un interruptor; ganando, es un parche que no cierra nada: el dominio territorial se queda en 36 a 37 y el peligro concedido sube. Coincide con que ganando concede más que empatando y con el tramo final del partido, donde más le hacen gol. Sacar al centro delantero quita la única salida del bloque bajo, el pase largo a la contra.

### Once estable con la espina dorsal fija: 7 jugadores titulares en 70 % o más y solo 2 titulares nuevos por partido
- bloque: M-5
- metrica: xi_stability
- cifra: "Jaccard entre onces consecutivos 0.71; 2.0 titulares distintos de un partido al siguiente; núcleo de 7: José Antonio Rodríguez (portero, 47 titularidades, 98 %, 3935 min), Iván Tona (pivote, 46, 96 %, 3678 min), Jackson Porozo (central derecho, 45, 94 %, 3649 min), Rafael Fernández (lateral derecho, 41, 85 %, 3288 min), Ramiro Árciga (volante derecho, 41, 85 %, 3021 min), Jesús Gómez (central izquierdo, 37, 77 %, 3117 min), Kevin Castañeda (mediapunta, 35, 73 %, 2710 min); izquierda rotada: Adonis Preciado 31 y Domingo Blanco 11 como volantes, Jesús Vega 32 y Pablo Ortíz 15 como laterales, Unai Bilbao 24 como central; Morad Daoudi 28 titularidades (58 %) como delantero; Gilberto Mora 23 titularidades (48 %) y 1828 min"
- kpi: "7 | 11 | jugadores del once | | Titulares en 70 % o más de los partidos | neutro"
- definiciones: SB
- decision: "Rival: la banda derecha (Fernández y Árciga) y el eje portero, Porozo y Tona son fijos, así que su comportamiento se puede estudiar con 40 partidos de video; la izquierda cambia de nombres cada torneo y es donde conviene atacar. Staff: la estabilidad es un activo para un bloque bajo que vive de las coberturas; el hueco está en el lateral izquierdo y el 9, donde nadie pasa del 67 % de titularidades"
Abreu repite nombres: el portero, el pivote, el central derecho, el lateral y el volante derechos y el mediapunta son fijos en los tres torneos, y de un partido al siguiente cambia dos titulares. Toda la rotación se concentra en el costado izquierdo y en el delantero centro, que además es el primero que saca cuando va ganando o empatando. Gilberto Mora, con 1828 minutos, fue titular en menos de la mitad de los partidos.

## Partidos y rivales

### Gana sin merecerlo más de lo que pierde mereciendo: 5 victorias con menos peligro que el rival y 2 derrotas creando más
- bloque: M-1
- metrica: xgd
- cifra: "Récord 17-18-13, xGD -0.05 por partido vs -0.03 de liga (p51); victorias con xGD menor a -0.3 (5): Pachuca fuera 2-0 (xGD -1.04), Tigres en casa 3-0 (-0.43), Querétaro fuera 2-1 (-1.24), Tigres en casa 1-0 (-0.80), Juárez fuera 2-1 (-1.13); derrotas con xGD mayor a 0.3 (2): Atlas fuera 1-2 (0.52), Querétaro en casa 0-1 (1.61, xG 2.33 contra 0.72); rachas: 3 victorias seguidas, 9 sin perder, 2 derrotas seguidas; técnicos más enfrentados: Pizarro 4 pj 2-0-2 (xG 0.69 contra 1.70), Varini 3 pj 1-1-1, Milito 3 pj 0-2-1 (xG 1.18 contra 1.75); peor récord por rival: Santos Laguna 0-0-2, Guadalajara 0-2-1, Puebla 0-2-1, América 0-1-1, Toluca 0-1-1"
- kpi: "5 | 2 | partidos | 51 | Victorias con menos peligro que el rival | neutro | derrotas creando más"
- definiciones: D-20, D-25
- decision: "Rival: no confiarse si domina el partido; Tijuana ha ganado 5 veces siendo peor, 3 de ellas fuera de casa, con penal o contra. Staff: el balance de peligro es exactamente el de la liga (-0.05), y el récord 17-18-13 también; el equipo no es peor ni mejor que sus números, pero tres de sus cuatro victorias de visita fueron sin merecerlas, y eso no se sostiene"
Es un equipo que vive de pocas acciones (penal, balón parado, contra), y por eso gana partidos sin dominarlos: las 5 victorias con menos peligro incluyen 3 de sus 4 triunfos de visita. Su mejor racha fueron 9 partidos sin perder a caballo entre el final del Clausura 2026 y el arranque del Apertura 2026 (5 ganados y 4 empatados), cortada por el 2-5 en Guadalajara. Contra el Tigres de Pizarro el patrón de localía es absoluto: dos victorias en casa, dos derrotas fuera incluida la goleada 0-5 de cuartos. Nunca le ha ganado a Santos Laguna, Guadalajara, Puebla, América ni Toluca.
