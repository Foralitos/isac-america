# Hallazgos — Crespo en la Liga MX (Apertura 2026 → Apertura 2026, 11 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Hernán Crespo con datos: Atlas (Apertura 2026, 11). Récord 5-3-3, 16 goles a favor y 16 en contra. Este técnico tiene 11 partidos en la Liga MX con datos y el análisis se hizo con esos; las cifras son orientativas y los cortes por contexto, con pocas jornadas, pueden moverse. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Tira poco pero de cerca: solo 31 % de sus tiros son desde fuera del área, lo más bajo de la liga
- bloque: M-1
- metrica: xg_per_shot
- cifra: "xG por tiro 0.11 vs 0.09 de liga (p95); 30.6 % de tiros fuera del área vs 42.8 % (p1); 12.6 tiros sin penal por partido (p38); xG sin penales 1.31 vs 1.14 (p75); 13.2 % de secuencias terminan en tiro (p13); 14.9 entradas al área (p65); 0.80 centros por entrada al área (p20)"
- kpi: "0.11 | 0.09 | goles esperados por tiro | 95 | Calidad de cada tiro | favor"
- definiciones: D-12, D-02
- decision: "Rival: cerrar el área y dejarlo tirar de lejos no sirve, porque no tira de lejos; hay que negarle la entrada al área y la pared en zona 14. Staff: el equipo elige bien el tiro pero llega poco a tirar; subir el volumen sin bajar la calidad es el margen que queda"
Es el rasgo más claro de su Atlas en 11 partidos: tira menos que la liga (12.6 por partido) pero casi todo desde dentro del área, y por eso cada tiro vale 0.11 goles esperados, de los más altos de la liga. El peligro creado queda arriba de la liga (1.31 por partido) con menos ataques que terminan en tiro que casi todos (13 %, abajo de la liga). Entra al área como la liga y con pocos centros: 0.80 por cada llegada, abajo de la liga. Es un ataque que busca la jugada terminada, no el remate a la primera.

### Sin uno contra uno: 9.7 regates por partido, de los más bajos de la liga, y salida corta del portero
- bloque: M-1
- metrica: dribbles
- cifra: "9.7 regates vs 14.0 de liga (p5), 55.6 % completados (p68); salida larga del portero 34.8 % vs 46.8 % (p11); 36.4 conducciones progresivas (p36); 99.5 pases progresivos (p51); precisión de pase 77.7 % (p39); 67.6 % de pases bajo presión completados (p27); posesión 51.3 % (p61)"
- kpi: "9.7 | 14.0 | regates por partido | 5 | Regates intentados por partido | neutro"
- definiciones: D-14, D-10
- decision: "Rival: presionar la salida corta del portero paga; no hay regateador que rompa la primera línea, así que una presión alta ordenada lo obliga a jugar largo, cosa que no quiere hacer. Staff: si no hay regate, la progresión depende del pase bajo presión, y ahí está abajo de la liga (68 %): trabajar apoyos del pivote o aceptar la salida larga"
Atlas avanza con pase, no con conducción ni regate: 9.7 regates por partido, menos que el 95 % de la liga, y el portero juega corto en dos de cada tres saques. Las conducciones y los pases hacia adelante están como la liga, pero los pases bajo presión se completan menos que en la liga. Con 11 partidos el rasgo es estable: en ningún partido superó los 26 regates y en cuatro se quedó en 7 o menos.

### Presiona poco pero bien tras perderla: 34 % de sus presiones tras pérdida recuperan, de las más altas
- bloque: M-2
- metrica: cp_regain_pct
- cifra: "Contrapresiones con regain 34.4 % vs 27.4 % (p98) con solo 28.3 contrapresiones por partido vs 32.0 (p15); 134.9 presiones vs 151.5 (p20); 23.8 fases de presión vs 29.3 (p14); 29.4 % de fases con recuperación (p28); PPDA propio 14.4 vs 14.0 (p63); altura de presión 55.5 m (p45); 19.7 % de fases altas (p74); 13.0 recuperaciones altas (p71)"
- kpi: "34 % | 27 % | de sus presiones tras pérdida recuperan el balón | 98 | Presiones tras pérdida que recuperan | favor"
- definiciones: D-06, D-05, D-05b
- decision: "Rival: tras robarle el balón, el primer pase tiene que salir rápido y lejos de la zona de pérdida; si se demora, Atlas lo recupera una de cada tres veces. Staff: la presión tras pérdida es lo que mejor funciona del equipo y se hace poco; subir el volumen de contrapresiones es el ajuste más barato para reducir los contragolpes que concede"
Es un equipo de baja intensidad defensiva: presiones, rachas de presión y presiones tras pérdida están abajo de la liga, y deja dar 14 pases antes de robar, como la liga. Lo que lo distingue es la eficacia de la presión tras pérdida: recupera el 34 % de las veces, más que el 98 % de la liga. Las rachas de presión organizadas, en cambio, roban como la liga o menos. Con 11 partidos, es una señal de que el equipo reacciona bien a la pérdida inmediata y mal cuando el rival ya se acomodó.

### Concede 1.10 goles esperados por partido en contragolpes, el peor registro de la liga
- bloque: M-3
- metrica: transition_xg_conceded
- cifra: "xG concedido en transición 1.10 vs 0.52 de liga (p100); xG rival en 10 s tras pérdida 0.26 vs 0.18 (p91); 2.45 tiros rivales tras pérdida (p74); OBV concedido 1.88 vs 1.44 (p98); 63.2 % de tiros concedidos desde el área vs 58.2 % (p86); xG concedido sin penales 1.31 (p72); 14.4 tiros concedidos (p64); línea defensiva 47.3 m (p45)"
- kpi: "1.10 | 0.52 | goles esperados concedidos en contragolpe por partido | 100 | Peligro concedido en contragolpe | contra"
- definiciones: D-04, D-03, D-12
- decision: "Rival: el plan es robar y correr; no hace falta presionar alto, basta esperar la pérdida en medio campo y atacar el espacio a la espalda de los centrales con dos o tres jugadores. Staff: el problema no es la cantidad de tiros que concede (como la liga) sino de dónde y cómo: desde el área y tras robo. Hace falta un pivote que cubra la pérdida y menos jugadores por delante del balón en ataque posicional"
Es el rasgo que más le pesa y el que más lo aparta de la liga: 1.10 goles esperados por partido en contragolpes, más del doble que la liga y el valor más alto de las 198 temporadas de equipo comparadas. El peligro del rival en los 10 segundos que siguen a una pérdida también está entre los más altos. Como las presiones tras pérdida recuperan bien pero son pocas, el rival que supera la primera reacción encuentra el campo abierto. El valor que concede al rival por partido (1.88) es de los más altos de la liga, y 63 % de los tiros que concede salen desde dentro del área, arriba de la liga. Con 11 partidos la magnitud puede bajar, pero la dirección es clara.

### Cuando roba tira en 2.6 segundos, de los más rápidos, pero crea poco peligro tras robo: 0.37
- bloque: M-3
- metrica: rec_to_shot_s
- cifra: "Segundos de recuperación a tiro 2.62 vs 3.30 (p6, n=10 partidos con dato); xG en transición 0.37 vs 0.51 (p19); 59.6 transiciones ofensivas vs 63.2 (p22); 3.18 tiros en transición (p26); conversión de transición 6.0 % (p41); 13.0 recuperaciones altas vs 11.9 (p71); 31.3 % de recuperaciones altas con tiro en 10 s (p32)"
- kpi: "2.6 | 3.3 | segundos entre robar y tirar | 6 | Segundos de robo a tiro | neutro"
- definiciones: D-03
- decision: "Rival: después de perderla, lo urgente es tapar el tiro inmediato, no el pase; Atlas remata de primera. Staff: los robos altos están arriba de la liga pero los ataques tras robo son pocos y valen poco; convertir la primera reacción en ataque de dos o tres pases, no en tiro apresurado, subiría el peligro por robo"
Atlas recupera alto como la liga o algo más (13 por partido), pero arma pocos ataques tras robo y crea poco con ellos: 0.37 goles esperados por partido, abajo de la liga. Lo que sí hace es tirar rápido: 2.6 segundos entre robar y tirar, de los más rápidos de la liga. Es un contragolpe de un toque, que termina antes de generar superioridad. La comparación con lo que concede en transición (1.10) resume el problema: pierde el intercambio de contragolpes tres a uno. Son 11 partidos y en uno no hubo dato de robo a tiro.

### Sin penales empata el peligro con el rival; con penales el balance es de los más bajos de la liga
- bloque: M-2
- metrica: xgd
- cifra: "Diferencia de xG -0.43 vs -0.03 de liga (p18); xG sin penales 1.31 (p75) y xG concedido sin penales 1.31 (p72); 7 penales en contra (xG 5.5, 4 goles) y 1 a favor (xG 0.8, 1 gol) en 11 partidos; 16 goles a favor y 16 en contra; récord 5-3-3"
- kpi: "-0.43 | -0.03 | goles esperados de diferencia por partido | 18 | Balance de peligro con penales incluidos | contra"
- definiciones: D-12, D-07
- decision: "Rival: buscar el contacto dentro del área, sobre todo en los primeros 45 minutos; Atlas comete faltas de penal a un ritmo de uno cada partido y medio. Staff: la diferencia entre un equipo parejo y uno con balance negativo son los 7 penales; revisar cómo defiende el área en el uno contra uno (entradas por detrás, brazos) antes que el sistema"
En juego abierto Atlas crea exactamente lo que concede: 1.31 goles esperados por partido en cada sentido, ambos arriba de la liga. El balance total queda abajo de la liga (-0.43) y la diferencia la explican los penales: 7 en contra en 11 partidos, que valen 5.5 goles esperados y produjeron 4 goles, contra 1 a favor. Es un equipo que concede desde dentro del área (63 % de los tiros, arriba de la liga) y eso se traduce en faltas. El marcador global, 16 a favor y 16 en contra, es el reflejo exacto del peligro.

## Consistencia y variabilidad (D-20, D-21, D-22, D-23, D-25)

### De visita 4 ganados de 5 y 1.73 de peligro creado; en casa 1 de 6 y 0.96
- bloque: M-1
- escenario: localia
- metrica: np_xg
- cifra: "Visita 4-0-1 (5 partidos): xG 1.73 (p98), xGD 0.16 (p68), xG por tiro 0.13 (p100), goles de balón parado 0.80 (p97), OBV ofensivo 1.63 (p83), 39.2 % de recuperaciones altas con tiro (p92), 17.2 entradas al área del rival (p88), 26.6 % de fases de presión con recuperación (p7). Local 1-3-2 (6 partidos): xG 0.96 (p23), xGD -0.92 (p2), xG por tiro 0.08 (p43), goles de balón parado 0.33 (p25), 24.6 % de recuperaciones altas con tiro (p3), 12.7 entradas del rival (p29)"
- kpi: "1.73 | 0.96 | goles esperados por partido | 98 | Peligro creado de visita | favor | de local"
- definiciones: D-20, D-03, D-07
- decision: "Rival: en el Jalisco, tener el balón sin miedo y esperar a que Atlas se frustre; fuera, no abrirse, porque de visita Atlas remata mejor y castiga con balón parado. Staff: en casa el equipo tiene el balón pero no lo convierte en tiros de calidad; el primer cambio llega al 42 de local y al 60 de visita, señal de que el plan de casa se corrige sobre la marcha"
Dos equipos distintos en 11 partidos, con 6 en casa y 5 fuera, así que es un indicio fuerte pero no una ley. De visita crea 1.73 goles esperados por partido, de los más altos de la liga, con tiros de mejor calidad y 0.80 goles de balón parado por partido. En casa crea 0.96, abajo de la liga, y el balance de peligro (-0.92) está entre los más bajos. Cuatro de sus cinco mejores partidos por balance fueron de visita y cuatro de los cinco peores, en casa. Curiosamente de visita concede más entradas al área (17.2) y sus rachas de presión roban menos (27 %), pero el ataque lo compensa.

### Cuando se pone en ventaja se encierra: concede 20 tiros por cada 90 minutos, el doble que empatando
- bloque: M-2
- escenario: marcador
- metrica: shots_conceded
- cifra: "Ganando (334 min en 7 partidos): 19.96 tiros concedidos por 90 (p97), 19.15 entradas al área del rival (p90), xG concedido 2.51 (p99), OBV concedido 2.42 (p99), posesión 42.7 %, altura de presión 49.7 m (p24), 8.09 entradas al área propias (p21), 5.40 centros. Empatando (517 min): 9.04 tiros concedidos (p10), 8.87 entradas del rival (p10), xG concedido 0.99, posesión 55.2 %. Perdiendo (285 min en 5 partidos): xG concedido 1.56 (p87), PPDA 16.69 (p96), altura de presión 60.8 m (p79), 47.4 conducciones progresivas (p77)"
- kpi: "20.0 | 9.0 | tiros concedidos por cada 90 minutos | 97 | Tiros que concede cuando va ganando | contra | cuando va empatando"
- definiciones: D-21, D-13, D-12
- decision: "Rival: si Atlas se adelanta no es el fin; el equipo baja la presión 10 metros, cede el balón y concede 19 entradas al área por 90 minutos. Meter un atacante más y centrar desde la línea de fondo. Staff: ganando se defiende demasiado cerca de la portería y con el peor peligro concedido de todos los cortes; mantener la altura de presión del empate (57 metros) es la instrucción concreta"
Con 334 minutos en ventaja repartidos en 7 partidos, la diferencia es demasiado grande para ignorarla: empatando concede 9 tiros por 90 minutos, de los más bajos de la liga; ganando, 20, de los más altos. La altura de presión baja de 57.6 metros empatando a 49.7 ganando, la posesión cae a 43 % y el peligro concedido (2.51 por 90) es de los más altos de la liga. En casa es peor: ganando en el Jalisco concede 4.09 goles esperados por 90 en 116 minutos de 3 partidos. Perdiendo sube la línea a 61 metros y conduce más, pero la presión se vuelve de las menos intensas (17 pases que deja dar).

### Del minuto 60 en adelante suelta el balón: posesión 46 % y 2.44 de peligro concedido del 75 al 90
- bloque: M-1
- escenario: momento
- metrica: possession_pct
- cifra: "60-90 por 90: posesión 45.7 % (p20), pases progresivos 70.2 (p7), entradas al área 10.9 (p17), centros 8.80 (p10), OBV ofensivo 1.05 (p13), PPDA 15.4 (p92), faltas 9.44 (p3), xG 0.96 (p33), tiros concedidos 14.6 (p75), xG de balón parado 0.62 (p73). 75-90: xG concedido 2.44 (p97), 17.0 tiros concedidos (p91), posesión 42.1 % (p6), pases progresivos 66.1 (p5), OBV concedido 2.01 (p99). 0-30: posesión 54.5 % (p79), pases progresivos 100.4 (p73)"
- kpi: "45.7 % | 54.5 % | de posesión | 20 | Posesión del minuto 60 al 90 | contra | en los primeros 30 minutos"
- definiciones: D-22, D-14, D-05b
- decision: "Rival: guardar piernas para la última media hora; Atlas deja de progresar, deja de hacer faltas y concede 17 tiros por 90 del 75 en adelante. Cambios ofensivos al 65, no al 80. Staff: el bajón del último tercio es físico y de plan: cae la posesión, caen los pases hacia adelante y la presión se afloja a 15 pases; con 4.4 cambios por partido, usarlos antes y en el medio campo, no en la delantera"
Es el patrón de momento más claro en los 11 partidos. En la primera media hora Atlas tiene el balón (55 %) y lo mueve hacia adelante como pocos; del 60 al 90 la posesión cae a 46 %, abajo de la liga, los pases que avanzan bajan a 70 por 90 (de los más bajos) y las faltas a 9 por 90 (de las más bajas, señal de que no llega a disputar). El último cuarto de hora es el tramo donde más concede: 2.44 goles esperados por 90, de los más altos de la liga. Las llegadas al área del rival suben de 9.6 en la primera media hora a 14.8 en la última.

### Primer cuarto de hora de dominio (1.49 creado, 0.39 concedido) y luego 2.01 concedidos por 90 hasta el 45
- bloque: M-2
- escenario: momento
- metrica: np_xg
- cifra: "0-15 por 90: xG 1.49 (p95), xG concedido 0.39 (p2), posesión 58.2 % (p91), pases progresivos 118.4 (p94), tiros concedidos 7.09 (p8), OBV concedido 0.70 (p3), pérdidas 130.4 (p95). 15-30: xG concedido 2.01 (p97), de balón parado 1.11 (p99), 13.6 tiros concedidos (p84), PPDA 19.25 (p90). 30-45: xG concedido 2.14 (p98), de balón parado 1.49 (p99), 14.7 tiros concedidos (p82), altura de presión 50.3 m (p5), 19.1 presiones en último tercio (p9)"
- kpi: "1.49 | 1.11 | goles esperados por cada 90 minutos | 95 | Peligro creado en los primeros 15 minutos | favor | liga"
- definiciones: D-22, D-07, D-13
- decision: "Rival: aguantar los primeros 15 minutos sin regalar balón parado ni espacios, porque ahí Atlas sale a dominar; del 15 al 45 el partido se le abre y es el tramo para golpear, sobre todo a balón parado. Staff: el arranque es el mejor tramo del equipo; lo que sigue es una caída de la presión (19 pases que deja dar del 15 al 30, altura de 50 metros del 30 al 45) que no se explica por cansancio. Revisar qué pasa después del primer gol o la primera ocasión"
En los primeros 15 minutos Atlas es de los mejores de la liga en los dos sentidos: 1.49 goles esperados creados y 0.39 concedidos por 90, con 58 % de posesión y una salida rapidísima hacia adelante (118 pases progresivos por 90, aunque con muchas pérdidas). Entre el 15 y el 45 el peligro concedido se multiplica por cinco (2.01 y 2.14 por 90) y la mitad llega de balón parado: 1.11 y 1.49 por 90, de los más altos de la liga. Es el tramo donde cayeron los penales. Son 11 partidos y 165 minutos por tramo de 15: la forma del patrón es más fiable que los decimales.

### Gana replegado y pierde presionando arriba: presiona a 52 metros en las victorias y a 59 en las derrotas
- bloque: M-2
- escenario: resultado
- metrica: press_height
- cifra: "Ganó 5: altura de presión 52.0 m (p5), línea defensiva 43.1 m (p4), 18.0 tiros concedidos (p98), 3.20 tiros del rival tras pérdida (p97), xG 1.68 (p97), xG por tiro 0.13 (p100), 62.8 % de regates completados (p92), xG por córner 0.07 (p98), primer cambio al 60.4' (p96). Perdió 3: altura 59.0 m (p91), 26.4 % de fases altas (p99), xG 0.80 (p6), xG por tiro 0.07 (p17), conversión de transición 3.1 % (p0), 22.2 % de recuperaciones altas con tiro (p1), xG de balón parado 0.27 (p4), primer cambio al 33.3' (p0)"
- kpi: "52 | 59 | metros desde su portería | 5 | Altura de presión en los partidos que ganó | neutro | en los que perdió"
- definiciones: D-13, D-05, D-03
- decision: "Rival: un Atlas que presiona arriba es un Atlas que se puede correr; si sale a presionar, jugar directo a la espalda. Si se repliega, paciencia, porque concede muchos tiros pero de mala calidad y remata con eficacia. Staff: el equipo ha ganado replegado y rematando bien, y ha perdido cuando sube la línea; antes de empujar hacia un modelo de presión alta, resolver la cobertura a la espalda"
Con 5 victorias y 3 derrotas la lectura es un indicio, pero coincide con el resto del perfil. En los partidos ganados Atlas defendió a 43 metros, concedió 18 tiros (de los más altos de la liga) y ganó con calidad de remate: 0.13 por tiro y 1.68 de peligro creado. El caso extremo es el 2-1 a Tigres en casa con 0.53 contra 2.06 de peligro. En las derrotas presionó más arriba que casi toda la liga (26 % de rachas en campo rival), creó 0.80 por partido y apenas convirtió robos en tiros (3 %). El 2-5 en Toluca, con 0.79 contra 1.84, es la versión más dura de esa receta.

### Contra los seis de arriba su presión deja de robar: 22 % de rachas con recuperación contra 34 % ante el resto
- bloque: M-2
- escenario: rival
- metrica: press_success_pct
- cifra: "Top 6 (4 partidos, 1-1-2: Cruz Azul, Querétaro, Toluca, Guadalajara): fases de presión con recuperación 22.0 % (p0), recuperaciones altas con tiro 17.9 % (p0), 4.22 s de robo a tiro (p97), 2.25 tiros en transición (p2), 10.25 tiros sin penal (p7), goles de balón parado 0.25 (p13), xG de balón parado 0.30 (p10), córners cortos 22.8 % (p85), saques en zona de peligro retenidos 48.7 % (p7), línea defensiva 50.3 m (p80). Resto (7 partidos, 4-2-1): 33.7 % (p79), 38.9 % (p91), 1.94 s (p1), 3.71 tiros en transición, 14.0 tiros, 0.71 goles de balón parado (p95), 0.61 xG de balón parado (p87), 5.0 % de córners cortos"
- kpi: "22 % | 34 % | de sus rachas de presión roban el balón | 0 | Rachas de presión que roban el balón contra rivales del top 6 | contra | contra el resto"
- definiciones: D-25, D-05, D-03, D-07
- decision: "Rival de arriba: salir jugando con calma, su presión no roba; cuidar el balón parado propio, que contra los grandes Atlas no lo convierte. Staff: contra equipos que saben salir, el plan de robo alto y tiro rápido desaparece (4 segundos de robo a tiro contra 2); hace falta un plan de ataque posicional para esos partidos, que son los de liguilla"
Son 4 partidos contra rivales que terminaron en el top 6 y 7 contra el resto, así que es un indicio. Contra el resto Atlas convierte 39 % de sus robos altos en tiro en 10 segundos, de los más altos de la liga, y anota 0.71 goles de balón parado por partido; contra el top 6 convierte 18 %, el valor más bajo de la liga, sus rachas de presión roban una de cada cinco y el balón parado produce 0.25 goles. Hasta el córner cambia: 23 % cortos contra los grandes, 5 % contra el resto. La única victoria contra un grande fue el 2-0 en Cruz Azul, con 31 % de dominio territorial: ganó cediendo el campo.

### Instalado en zona de liguilla directa, el balance de peligro es negativo: -0.57 en 6 partidos
- bloque: M-1
- escenario: tabla
- metrica: xgd
- cifra: "Zona directa (6 partidos, 2-2-2): xGD -0.57 (p11), 48.4 % de secuencias que llegan al último tercio (p6), xG de balón parado 0.29 (p6), 39.4 % de secuencias por el centro (p92), 60.8 % de regates completados (p89); ganando en zona directa (246 min en 4 partidos) concede 2.05 xG y 18.65 tiros por 90. Arranque J1 a J4 (3 partidos, 2-0-1): xGD -0.86 (p2), field tilt 40.3 (p14), 9.33 tiros (p4), 1.67 tiros en transición (p0). Directa alcanzable (2 partidos, 1-1-0): xGD 0.63 (p92), field tilt 73.6 (p100), 23.5 entradas al área (p100), xG en transición 1.06 (p100)"
- kpi: "-0.57 | -0.03 | goles esperados de diferencia por partido | 11 | Balance de peligro en partidos jugados desde zona de liguilla directa | contra | liga"
- definiciones: D-23, D-02, D-21
- decision: "Rival: cuando Atlas llega al partido instalado en zona de liguilla juega a administrar y llega menos al último tercio; presionarlo en salida y obligarlo a jugar con el balón. Staff: los dos partidos en que la liguilla directa estaba en juego (Pumas, Tijuana) son los de mejor ataque de todo el torneo, 73 % de dominio territorial; el equipo responde a la urgencia y se duerme con la comodidad"
Cortes de 6, 3 y 2 partidos: indicios, no conclusiones. Aun así el contraste es grande. Con la liguilla directa al alcance pero no asegurada (Pumas 1-1, Tijuana 3-2) el equipo dominó 74 % del territorio, entró 23.5 veces al área y creó 1.06 goles esperados en contragolpes, los máximos de cualquier corte. Instalado en zona directa (6 partidos) solo el 48 % de sus ataques llegan al último tercio, de los más bajos de la liga, y cuando se adelanta concede 2.05 goles esperados por 90. En las primeras cuatro jornadas ganó dos de tres con el peor balance de peligro del torneo (-0.86): el arranque fue de resultados, no de juego.

## Balón parado (M-4)

### Concede 0.85 goles esperados de balón parado por partido, lo más alto de la liga, y 7 penales en 11 partidos
- bloque: M-4
- metrica: sp_xg_conceded
- cifra: "xG concedido de balón parado 0.85 vs 0.48 de liga (p99); 7 penales en contra, xG 5.5, 4 goles; 67 córners en contra (6.1 por partido), 31 tiros, xG 2.9, 2 goles; xG por córner concedido 0.06 vs 0.04 (p94); 0.55 goles concedidos de balón parado por partido (p70); 57 tiros libres en contra, 9 tiros al área, xG 0.4, 0 goles; 5 directos, xG 0.2; 84 saques de banda en contra, 0 goles; 6 goles concedidos de balón parado en 11 partidos"
- kpi: "0.85 | 0.48 | goles esperados concedidos de balón parado por partido | 99 | Peligro concedido de balón parado | contra"
- definiciones: D-07, D-12
- decision: "Rival: provocar el contacto en el área y cobrar córners al centro del área chica, donde Atlas concede 0.06 por córner, arriba de la liga. Staff: separar los dos problemas. Los penales (7, con 4 goles) son disciplina individual en el área y se corrigen con video; el córner en contra es de marca: 31 tiros en 67 córners es casi uno de cada dos"
El peor registro de balón parado defensivo de la liga se explica casi todo con los penales: valen 5.5 de los 9.4 goles esperados concedidos de balón parado en el torneo. Sin ellos, el peligro concedido de balón parado quedaría cerca de 0.35 por partido, abajo de la liga. El córner en contra sí es un problema real aunque menor: concede un tiro cada dos córners y 0.06 goles esperados por córner, arriba de la liga, con los cerrados desde la izquierda como el envío más peligroso (11 córners, 7 tiros, 0.67 goles esperados). Los tiros libres y saques de banda en contra no le han costado un solo gol en 11 partidos.

### Córner abierto desde la derecha: 16 cobros, 11 tiros y 2 de sus 3 goles de córner en 11 partidos
- bloque: M-4
- metrica: corner_xg
- cifra: "6.0 córners por partido vs 4.88 (p90); xG de córner 0.30 vs 0.18 (p96); 0.05 por córner (p89); 66 córners, 36 tiros, xG 3.3, 3 goles; derecha abierto al centro: 16 córners, 11 tiros, xG 1.63, 2 goles; izquierda abierto al centro: 14 córners, 12 tiros, xG 0.79, 0 goles; izquierda cerrado al centro: 6 córners, 7 tiros, xG 0.64, 1 gol; cerrados 20.5 % vs 34.9 % (p12); cortos 11.5 % (p49); goles de balón parado 0.55 por partido (p77)"
- kpi: "0.30 | 0.18 | goles esperados de córner por partido | 96 | Peligro de córner | favor"
- definiciones: D-07, D-12
- decision: "Rival: el córner de Atlas se cobra abierto (alejándose de la portería) y al centro del área; marcar en zona el punto de penal y adelantar la línea al primer palo no sirve, hay que ganar el duelo en el centro. Staff: el abierto desde la derecha rinde el doble que desde la izquierda (0.10 contra 0.06 por córner); cobrar más desde la derecha o cambiar al cobrador de la izquierda"
Es su mejor arma de balón parado: 6 córners por partido, de los más altos de la liga, y 0.30 goles esperados por partido de córner, también de los más altos. Cobra abierto en 32 de 66 córners y casi no usa el cerrado (21 %, abajo de la liga). El abierto desde la derecha al centro del área es la jugada: 16 cobros, 11 tiros, 1.63 goles esperados y 2 goles. Desde la izquierda produce tiros (12 en 14) pero de menos calidad. De visita cobra más en corto (19 % contra 5 % en casa) y anota más de balón parado (0.80 contra 0.33 por partido).

### El tiro libre al área rinde (0.11, arriba de la liga); el directo no existe: 2 intentos y 0.03 de peligro
- bloque: M-4
- metrica: fk_indirect_xg
- cifra: "xG de tiro libre indirecto 0.11 vs 0.07 (p82); xG de tiro libre directo 0.00 vs 0.02 (p2); 55 tiros libres a favor (5.0 por partido), 12 tiros al área, xG 1.2, 1 gol; 2 directos, xG 0.03, 0 goles; saques de banda en zona de peligro 8.64 vs 7.72 (p76), 95 saques, 59.5 % retenidos (p42), 1 gol; derecha lejos: 41 saques, 5 tiros, xG 0.70; derecha de frente: 4 saques, 3 tiros, 1 gol; xG de balón parado total 0.50 (p64)"
- kpi: "0.11 | 0.07 | goles esperados de tiro libre al área por partido | 82 | Peligro de tiro libre al área | favor"
- definiciones: D-07, D-12
- decision: "Rival: no regalar faltas laterales cerca del área, es donde Atlas saca provecho; el tiro libre frontal no es amenaza. Staff: con 5 tiros libres por partido y dos cobradores que no tiran a puerta, tiene sentido convertir todo tiro libre frontal en servicio al área; en saques de banda, los de la derecha producen 0.70 de peligro y los de la izquierda casi nada (0.09 en 38 saques)"
De sus 55 tiros libres en 11 partidos, solo 2 fueron directos a portería y sumaron 0.03 goles esperados: el disparo de tiro libre no está en el repertorio. El servicio al área sí: 12 tiros, 1.2 goles esperados y un gol, arriba de la liga por partido. Los saques de banda cerca del área son muchos (8.6 por partido, arriba de la liga) y se retienen como la liga, pero el peligro viene casi todo del lado derecho; en 38 saques largos desde la izquierda se generaron 2 tiros.

## Jugadores y cambios (M-5)

### Seis dibujos iniciales en 11 partidos: 4-2-3-1 y 4-2-2-2 tres veces cada uno, línea de tres en cinco
- bloque: M-5
- metrica: tactical_shifts
- cifra: "4-2-3-1 en 3 partidos, 4-2-2-2 en 3, 3-5-2 en 2, 3-4-1-2, 3-4-3 y 3-4-2-1 en 1 cada uno; cambio real de dibujo en 5 de 11 partidos; 1.45 cambios de dibujo por partido vs 1.80 (p21); 16 cambios en 11 partidos; perdiendo del 75 al 90 juega 4-4-1-1 entre 44 % y 60 % de los minutos; ganando del 85 al 90 juega 3-5-1-1 el 49 % y el 41 %; empatando del 55 al 85 juega 3-5-2 entre 33 % y 51 %"
- kpi: "6 | | dibujos distintos en 11 partidos | | Dibujos iniciales usados | neutro"
- definiciones: SB, D-21
- decision: "Rival: no preparar el partido contra un dibujo sino contra dos: salida con cuatro atrás y doble pivote, o línea de tres con carrileros; lo que no cambia es el delantero fijo y el portero. Staff: once partidos y seis dibujos de inicio es búsqueda, no plan; el 3-5-2 ha sido el refugio del empate y el 4-4-1-1 el de la remontada, conviene fijar uno como base y el otro como variante"
Crespo no tiene todavía un dibujo base en Atlas: en 11 partidos arrancó con seis distintos, repartidos casi por igual entre línea de cuatro (6 partidos) y línea de tres (5). Dentro del partido cambia de dibujo menos que la liga (1.45 por partido, abajo de la liga) pero con dirección clara: empatando se va al 3-5-2 a partir del minuto 55, perdiendo termina en 4-4-1-1 y ganando cierra con 3-5-1-1, es decir, cinco atrás. Ese último dato cruza con lo que concede en ventaja: 20 tiros por 90 minutos.

### Ganando cambia al 66 y el equipo se apaga: el peligro creado cae de 0.55 a 0.04 en los 15 minutos siguientes
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio al 50.6' vs 53.9' de liga (p23); ganando 66.0' (n=4), perdiendo 45.5' (n=4), empatando 37.0' (n=3, uno al 9' contra Querétaro); local 42.5', visita 60.4'. Ganando, 15 min antes vs después del primer cambio: xG 0.55 a 0.04, xG concedido 0.13 a 0.37, tiros 3.2 a 0.5, field tilt 34 a 24. Perdiendo: tiros 2.2 a 4.0, xG 0.23 a 0.31, PPDA 13.8 a 29.2, field tilt 62 a 76, altura de presión 53 a 65. 4.4 cambios por partido, 41 tácticos y 7 por lesión; a quién saca ganando: mediapunta (3), pivote derecho (2), interior derecho (2), pivote izquierdo (2), carrilero derecho (2); perdiendo: pivote izquierdo (4), central (3)"
- kpi: "0.04 | 0.55 | goles esperados en 15 minutos | | Peligro creado en los 15 minutos después del primer cambio, ganando | contra | antes del cambio"
- definiciones: D-21, SB
- decision: "Staff: el primer cambio en ventaja (mediapunta o pivote por un defensor, al 66) coincide con el apagón: el equipo deja de tirar y el peligro concedido se triplica. Hacer el cambio para sostener el balón, no para cerrarse. Rival: cuando Atlas gana y hace su primer cambio, viene el tramo de ataque; adelantar laterales y cargar el área"
Son 4 partidos en cada estado, así que es un indicio, pero coincide con el resto del perfil. Ganando, Crespo espera hasta el 66 y saca al mediapunta o a un pivote; en los 15 minutos siguientes el equipo pasa de 3.2 tiros a 0.5 y el dominio territorial cae de 34 % a 24 %. Perdiendo cambia al 45, saca pivote izquierdo o central, y el equipo sube: de 2.2 a 4.0 tiros y de 62 % a 76 % de dominio territorial, aunque la presión se desactiva (deja dar 29 pases). En casa el primer cambio llega 18 minutos antes que fuera, señal de que el plan de local se corrige más seguido.

### Once en obra: 3.3 titulares distintos de un partido al siguiente y solo cinco fijos
- bloque: M-5
- metrica: xi_stability
- cifra: "Jaccard entre onces consecutivos 0.56; 3.3 titulares distintos por partido; núcleo de 5 con 70 % o más de titularidades: Camilo Vargas 11 (100 %, 932 min), Florián Monzón 9 (82 %, 759 min), Luís Esteves 9 (82 %, 723 min), Milton Valenzuela 8 (73 %, 698 min), Manuel Capasso 8 (73 %, 607 min); Arturo González 7 (64 %); 8 jugadores con 6 titularidades (55 %): Ramírez Barboza, Schlegel, Sánchez Purata, Jorge Sánchez, Mmaee, Zaldívar, Luís Henrique; Montiel 4 (36 %), Aguirre 3 (27 %)"
- kpi: "3.3 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB
- decision: "Staff: el núcleo son el portero, el 9 (Monzón), el mediapunta izquierdo (Esteves), el lateral izquierdo (Valenzuela) y un central (Capasso); la defensa derecha y el doble pivote rotan cada semana, justo las zonas por donde entran los contragolpes. Fijar el pivote antes que el dibujo. Rival: el lado derecho de Atlas cambia de nombres cada partido; atacar por ahí"
En 11 partidos solo cinco jugadores fueron titulares en al menos 7 de cada 10: Vargas, Monzón, Esteves, Valenzuela y Capasso. El resto del once sale de un grupo de ocho jugadores que han sido titulares en 6 partidos cada uno, con tres centrales izquierdos (Schlegel, Sánchez Purata) y dos pivotes izquierdos (Ramírez Barboza, Zaldívar) turnándose. La estabilidad del once (0.56) y los 3.3 cambios por partido dicen lo mismo que los seis dibujos: todavía está eligiendo. La zona más estable es la izquierda del ataque; la más inestable, el pivote y la derecha de la defensa.

## Partidos y rivales

### Cuatro de sus cinco mejores partidos por balance de peligro fueron de visita; cuatro de los peores, en casa
- bloque: M-1
- metrica: xgd
- cifra: "Mejores: Necaxa 2-0 de visita (xG 2.55 contra 1.39), Pumas 1-1 de local (1.83 contra 0.79), Santos 1-0 de visita (1.54 contra 0.80), Cruz Azul 2-0 de visita (1.86 contra 1.36), Tijuana 3-2 de visita (1.91 contra 1.68). Peores: Tigres 2-1 de local (0.53 contra 2.06), Toluca 2-5 de visita (0.79 contra 1.84), Guadalajara 1-1 de local (0.85 contra 1.50), Querétaro 1-3 de local (0.85 contra 1.11), Monterrey 0-2 de local (0.75 contra 0.99). Ganó creando menos peligro que el rival en 1 partido, perdió creando más en 0; racha máxima de 4 sin perder y 2 victorias seguidas; 10 técnicos rivales distintos, ninguno repetido"
- kpi: "4 | 1 | de sus 5 mejores partidos | | Mejores partidos por balance de peligro jugados de visita | neutro | de local"
- definiciones: D-20, D-12
- decision: "Rival: en el Jalisco Atlas ha sumado 6 puntos de 18 y ha sido superado en peligro en cinco de seis partidos; es el escenario para ir a ganarle. Staff: el resultado ha seguido al peligro casi siempre (una sola victoria sin merecerla, contra Tigres), así que lo que se ve en casa no es mala suerte: es el plan de local el que falla"
En 11 partidos el marcador ha sido honesto con el juego: una sola victoria creando menos que el rival (Tigres, 0.53 contra 2.06) y ninguna derrota creando más. Por eso la lectura de casa y fuera pesa: los cuatro partidos de visita que ganó están entre sus cinco mejores por balance de peligro y cuatro de sus cinco peores fueron en el Jalisco, donde el único partido bueno fue el 1-1 con Pumas. Enfrentó a 10 técnicos distintos sin repetir ninguno; la derrota más amplia fue contra Mohamed (2-5 en Toluca) y la única victoria contra un rival del top 6, contra Huiqui (2-0 en Cruz Azul).
