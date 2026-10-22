# Hallazgos — Gustavo Lema en la Liga MX (Clausura 2024 → Apertura 2026, 54 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Lema con datos: Pumas UNAM (Clausura 2024 → Clausura 2025, 48) y Juárez (Apertura 2026, 6). Récord 20-15-19. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas, "presión tras pérdida" = contrapresión); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Presiona arriba: 40 presiones cerca del área rival por partido, arriba de la liga, con la defensa a 50 metros
- bloque: M-2
- metrica: pressures_final_third
- cifra: "40.3 presiones en último tercio vs 33.9 de liga (p83); altura de presión 57.5 m vs 55.8 (p77); línea defensiva 50.4 m vs 47.9 (p81); 20 % de fases de presión altas vs 17 % (p78); 32.8 fases de presión vs 29.3 (p75); 164.9 presiones vs 151.5 (p74); con Pumas 41.5 (p84), con Juárez 30.5 (p38)"
- kpi: "40.3 | 33.9 | presiones cerca del área rival por partido | 83 | Presiones cerca del área rival por partido | neutro"
- definiciones: D-05, D-13
- decision: "Rival: salir con balón largo a la espalda de una defensa que está 2.5 metros más arriba que la liga; no intentar jugar corto en campo propio. Staff: el modelo exige centrales rápidos y un portero que cubra la espalda; la altura viajó a Juárez (56.8 metros) pero el volumen no (30.5 presiones cerca del área contra 41.5 con Pumas)"
Es el rasgo que más lo separa de la liga: una de cada cinco rachas de presión ocurre en campo rival y la línea defensiva es de las más adelantadas. Lo llamativo es que, con esa altura, al rival le cuesta llegar: concede 12.6 llegadas al área por partido contra 14.2 de la liga y el rival juega menos directo contra él que contra el promedio. La altura se sostiene con cualquier marcador salvo cuando va ganando, que la baja 9 metros.

### Presiona mucho y roba poco: 28 % de sus rachas de presión recuperan el balón, abajo de la liga
- bloque: M-2
- metrica: press_success_pct
- cifra: "28.0 % de fases de presión con recuperación vs 31.2 % de liga (p14); 14.4 faltas por partido vs 13.6 (p76); 32.7 contrapresiones (p61) con 29.0 % de regain vs 27.4 % (p74); con Pumas 28.8 % (p20), con Juárez 21.7 % (p0)"
- kpi: "28 % | 31 % | de sus rachas de presión terminan robando el balón | 14 | Rachas de presión que roban el balón | contra"
- definiciones: D-05, D-06
- decision: "Rival: aguantar la primera oleada con un pase más, la presión llega pero no roba, y buscar la falta: comete 14 por partido, arriba de la liga. Staff: la presión tras pérdida sí recupera (29 %, arriba de la media); lo que falla es la racha organizada; revisar el gatillo y la cobertura del segundo hombre antes que pedir más intensidad"
El contraste es claro: cuando pierde el balón y presiona en los cinco segundos siguientes recupera más que la liga, pero cuando arma una racha de presión sobre la salida rival la termina robando menos que casi todos. El precio es la falta: 14.4 por partido, y entre el minuto 15 y el 30 llega a 15 por cada 90 minutos, de los más altos de la liga. En Juárez el problema se agravó: 22 % de rachas con robo en 6 partidos, el valor más bajo de la liga.

### Ataca por la izquierda: 34 % de sus ataques nacen por ese lado, arriba de la liga; por la derecha 30 %, abajo
- bloque: M-1
- metrica: seq_lane_izquierdo_pct
- cifra: "34.3 % de secuencias que nacen por izquierda vs 31.7 % de liga (p87); 30.1 % por derecha vs 32.3 % (p13); 35.6 % por el centro (p42); con Pumas 34.8 % (p92) y 29.9 % (p11); con Juárez 30.6 % (p32) y 32.1 % (p47); 57 % de sus córners se cobran desde la izquierda"
- kpi: "34 % | 32 % | de sus ataques nacen por la izquierda | 87 | Ataques que nacen por la izquierda | neutro"
- definiciones: D-02, D-11
- decision: "Rival: cargar la marca sobre el carril izquierdo de Lema y obligarlo a salir por el otro lado, donde arma menos. Staff: el sesgo era de plantilla (Huerta, Quispe y Ergas jugaban por izquierda en Pumas); en Juárez no existe, conviene decidir si se reconstruye con un perfil parecido o se equilibra"
En Pumas el sesgo fue de los más marcados de la liga y se explica con nombres: César Huerta (32 titularidades como extremo izquierdo), Piero Quispe (33 como interior izquierdo) y Robert Ergas (24 como carrilero izquierdo). Con Juárez, en 6 partidos, el reparto es el de la liga. Es el rasgo ofensivo que menos viajó con él.

### Vive del robo más que del balón: 66 ataques tras recuperar por partido, arriba de la liga, con posesión como la liga
- bloque: M-3
- metrica: transitions
- cifra: "66.2 transiciones ofensivas vs 63.2 de liga (p77); 3.96 tiros en transición vs 3.76 (p66); 3.1 s de recuperación a tiro vs 3.3 (p32); xG en transición 0.50 (p51); posesión 49.6 % (p47); field tilt 49.8 % (p49); con Pumas 67.0 (p80), con Juárez 60.2 (p28)"
- kpi: "66.2 | 63.2 | ataques tras robo por partido | 77 | Ataques que arrancan al robar el balón, por partido | neutro"
- definiciones: D-03, D-01
- decision: "Rival: no perder el balón en el tercio medio; sus ataques más rápidos nacen ahí y llegan al tiro en 3 segundos. Staff: muchos ataques tras robo pero peligro normal (0.50 por partido, como la liga); falta la última decisión; trabajar el tercer hombre en la transición más que el volumen de robos"
No es un equipo de posesión ni de dominio territorial: los dos están exactamente en la media de la liga. Lo que lo distingue es cuántas veces ataca justo después de robar y qué tan rápido tira. El peligro de esos ataques se dispara en el último tramo: 0.70 por cada 90 minutos del 60 al 90, arriba de la liga, contra 0.26 en la primera media hora.

### Al rival le cuesta llegar: concede 12.6 llegadas al área por partido, la liga 14.2, y 1.04 de peligro
- bloque: M-2
- metrica: opp_box_entries
- cifra: "12.6 entradas al área del rival vs 14.2 de liga (p29); 12.4 tiros concedidos vs 13.6 (p30); xG concedido 1.04 vs 1.17 (p32); 56 % de tiros concedidos desde el área vs 58 % (p34); directness permitida 0.58 vs 0.59 (p22); xG creado 1.16 (p54); diferencia de xG 0.09 vs -0.03 (p63); con Pumas 0.97 concedido (p24), con Juárez 1.64 (p97)"
- kpi: "12.6 | 14.2 | llegadas al área del rival por partido | 29 | Llegadas al área que concede por partido | favor"
- definiciones: D-12, D-04
- decision: "Rival: no vas a llegar mucho; cada llegada tiene que ser con el balón dentro del área, no tirando de fuera. Staff: la base del balance positivo es lo que concede, no lo que crea; si el ataque es de liga, no se puede ceder atrás como pasó en Juárez, donde el peligro concedido subió a 1.64"
Con la línea adelantada y la presión alta uno esperaría espacios a la espalda, pero el rival llega al área menos que contra la liga y tira menos. El balance de peligro es positivo (0.09 por partido) porque la defensa sostiene a un ataque que es promedio en todo. Con Pumas fue así en 48 partidos; con Juárez, en 6, se invirtió.

### Su ataque es de liga en todo: 1.16 de peligro creado, 13.6 tiros y 14 llegadas al área por partido
- bloque: M-1
- metrica: np_xg
- cifra: "xG sin penales 1.16 vs 1.14 de liga (p54); 13.6 tiros vs 13.2 (p58); 14.1 entradas al área vs 14.0 (p55); 56 % de secuencias que llegan al último tercio (p57); 103.8 pases progresivos (p63); 40.9 conducciones progresivas (p59); xG por tiro 0.08 vs 0.09 (p45); OBV ofensivo 1.37 vs 1.42 (p42); 13.7 regates (p47); de local 1.37 (p83), de visita 0.95 (p22)"
- kpi: "1.16 | 1.14 | goles esperados por partido | 54 | Peligro creado por partido | neutro"
- definiciones: D-02, D-12, D-14
- decision: "Rival: no hay un arma ofensiva que anular en juego abierto; el partido se decide en si le dejas robar y en el balón parado. Staff: el margen está en la calidad del tiro (0.08 por tiro, abajo de la media) y en el balón parado, que ya rinde arriba de la liga: menos tiros de fuera, más llegadas con el balón controlado"
Tiros, llegadas, pases y conducciones hacia adelante, regates: todo entre el 40 y el 65 por ciento de la liga. La única excepción es la localía: en casa crea arriba de la liga y de visita abajo, con los mismos jugadores. Por eso sus torneos buenos y malos se explican por lo que concede y por el balón parado, no por el ataque.

## Consistencia y variabilidad (D-20 a D-26)

### Dos equipos según la cancha: de local gana 15 de 27 creando 1.37; de visita gana 5 de 27 creando 0.95
- bloque: M-1
- escenario: localia
- metrica: np_xg
- cifra: "Local 15-6-6: xG 1.37 (p83), xG concedido 0.87 (p13), diferencia de xG 0.38 (p81), 52 % de tiros concedidos desde el área (p7), 11.1 entradas al área del rival (p12), altura de presión 58.5 m (p89), 5.6 córners (p79), 42 % de salida larga del portero. Visita 5-9-13: xG 0.95 (p22), concedido 1.21 (p60), diferencia -0.20 (p35), 60 % desde el área (p73), 15.1 faltas (p87), 174.4 presiones (p87), 34.3 contrapresiones (p72), posesión 48.4 %, 50 % de salida larga"
- kpi: "0.95 | 1.37 | goles esperados por partido | 22 | Peligro creado de visita | contra | de local"
- definiciones: D-20, D-12, D-13
- decision: "Rival: en su cancha, cerrar el área y aceptar que presione; ahí crea arriba de la liga y concede poco. En la tuya, tener el balón: fuera corre más (174 presiones), roba igual y crea abajo de la liga. Staff: el déficit de visita no es de esfuerzo sino de producto: más presiones, más faltas, menos peligro; revisar la salida de visita, donde el portero juega largo la mitad de las veces contra 42 % en casa"
El cambio de estadio invierte el balance completo. Empatando de local crea 1.21 por cada 90 minutos y concede 0.72; empatando de visita crea 0.79 y concede 1.31. Perdiendo de visita concede 1.41 por 90 y perdiendo de local 1.12. De visita presiona más veces y comete más faltas, pero los tiros que concede vienen más desde dentro del área: 60 % contra 52 %.

### En casa cobra corto uno de cada cuatro córners (25 %), de visita uno de cada diez
- bloque: M-4
- escenario: localia
- metrica: corner_short_pct
- cifra: "Córners cortos de local 24.6 % (p88) vs visita 9.4 % (p42), liga 13.4 %; xG tras saque de banda local 0.08 (p99) vs visita 0.02 (p49); xG de tiro libre indirecto local 0.09 (p70) vs visita 0.04 (p25); xG de balón parado local 0.50 (p63) vs visita 0.59 (p83); goles de balón parado 0.52 local vs 0.48 visita"
- kpi: "25 % | 9 % | de sus córners son cortos | 88 | Córners cortos de local | neutro | de visita"
- definiciones: D-07, D-20
- decision: "Rival: en su estadio defender el corto con dos hombres en el vértice del área; fuera de casa casi no lo usa y va directo al área. Staff: el corto es un recurso de dominio, lo usa cuando tiene el partido; de visita el balón parado rinde igual o más (0.59 de peligro), así que no hace falta forzarlo"
El balón parado es casi lo único que no se cae fuera de casa: crea más peligro de visita que de local. Lo que cambia es la forma de cobrar: en casa, donde domina el territorio (53 %), juega corto y saca de banda al área con el peligro más alto de la liga; de visita centra. El tiro libre al área sí rinde menos fuera.

### Contra los seis de arriba gana 3 de 19 y su balón parado se apaga: 0.21 goles por partido contra 0.66
- bloque: M-4
- escenario: rival
- metrica: sp_goals
- cifra: "Top 6: 3-6-10, goles de balón parado 0.21 (p8), xG de balón parado 0.28 (p6), xG por córner 0.02 (p5), field tilt 39.5 % (p12), posesión 44.6 % (p13), xG 0.94 (p20), xG concedido 1.33 (p75), PPDA 16.4 (p79), goles concedidos de balón parado 0.58 (p73), diferencia de xG -0.55 (p12). Resto: 17-9-9, 0.66 (p93), 0.69 (p94), 0.05 (p90), field tilt 55.3 % (p73), xG 1.28 (p72), concedido 0.89 (p15), PPDA 12.1 (p26), concedidos de balón parado 0.26 (p17), diferencia 0.44 (p84)"
- kpi: "0.21 | 0.66 | goles de balón parado por partido | 8 | Goles de balón parado contra rivales del top 6 | contra | contra el resto"
- definiciones: D-25, D-07, D-05b
- decision: "Rival de arriba: quitarle el balón (se queda con 45 %) y defender bien los córners basta; su presión baja a 16 pases antes de robar y su balón parado no aparece. Staff: contra grandes el equipo deja de dominar y pierde la fuente de goles que lo sostiene contra el resto; hace falta un plan de balón parado contra bloques físicos, el peligro por córner cae de 0.05 a 0.02"
Contra el resto de la liga es otro equipo: domina el 55 % del territorio, deja dar 12 pases antes de robar y crea 1.28 por partido, arriba de la liga. Contra el top 6 pierde el balón, la intensidad y el córner, y además le marcan a balón parado el doble (0.58 por partido). Sin victoria contra Cruz Azul (0-2-3) ni Monterrey (0-1-3), que son los que lo eliminaron en las dos liguillas.

### Gana cuando concede 0.70 de peligro y pierde cuando concede 1.50; lo que crea apenas cambia
- bloque: M-2
- escenario: resultado
- metrica: np_xg_conceded
- cifra: "Ganó 20: xG concedido 0.70 (p1), 10.9 tiros concedidos (p12), 52 % desde el área (p7), 0.05 goles concedidos de balón parado (p0), xG concedido en transición 0.29 (p4), xG rival tras pérdida 0.10 (p7), xG creado 1.34 (p79), goles de balón parado 0.65 (p92). Perdió 19: concedido 1.50 (p91), 13.6 tiros, 63 % desde el área (p85), 0.53 de balón parado (p66), en transición 0.66 (p84), tras pérdida 0.22 (p75), xG creado 0.99 (p28), goles de balón parado 0.26 (p14). Empató 15: xG concedido de balón parado 0.69 (p91), 0.60 goles concedidos (p78)"
- kpi: "1.50 | 0.70 | goles esperados en contra por partido | 91 | Peligro concedido cuando pierde | contra | cuando gana"
- definiciones: D-12, D-07, D-04
- decision: "Rival: para ganarle, meter el balón al área y castigar el contragolpe y el balón parado; sus derrotas vienen de ahí, no de crear poco. Staff: la señal de alarma es la zona del tiro concedido (52 % desde el área cuando gana, 63 % cuando pierde); bloquear el centro al área y la segunda jugada del córner vale más que atacar más"
En las 20 victorias concedió un solo gol de balón parado y el contragolpe rival casi no existió. En las derrotas el peligro concedido se duplica, el contragolpe en contra se dispara y el rival tira desde dentro del área. Los empates tienen su propia firma: ahí es donde más le marcan de balón parado (0.60 por partido) aunque en juego abierto concede poco.

### Ganando baja la presión 9 metros y concede más tiros que perdiendo: 12.6 contra 10.0 por cada 90 minutos
- bloque: M-2
- escenario: marcador
- metrica: press_height
- cifra: "Por 90 min. Ganando: altura de presión 52.4 m (p55), 25.5 presiones en último tercio (p61), field tilt 40.7 %, posesión 43.6 %, 12.6 tiros concedidos (p30), xG concedido 1.14, xG creado 1.01, 8.8 regates (p18). Perdiendo: 61.1 m (p81), 40.6 presiones en último tercio (p85), field tilt 55.8 %, posesión 54.6 %, 10.0 tiros concedidos (p49), xG concedido 1.31 (p72), xG creado 1.11, 14.9 regates (p68). Empatando: 57.9 m, 37.4 presiones en último tercio, xG concedido 1.02"
- kpi: "52.4 | 61.1 | metros desde su portería | 55 | Altura de la presión cuando va ganando | contra | cuando va perdiendo"
- definiciones: D-21, D-13, D-05
- decision: "Rival: si Lema se pone arriba, el equipo se repliega 9 metros y cede el balón (44 % de posesión): atacar con centros y segundas jugadas, concede más tiros ganando que perdiendo. Staff: el repliegue con ventaja no protege; el peligro concedido por 90 minutos ganando (1.14) es mayor que empatando (1.02); mantener la altura o pasar antes a un plan con balón"
El cruce con la situación en la tabla lo confirma: en las primeras cuatro jornadas, ganando, concede 17.6 tiros por cada 90 minutos contra 9.5 empatando; con la liguilla directa alcanzable, ganando crea 0.58 y concede 1.34. Y el primer cambio con ventaja empeora las cosas: en los 15 minutos siguientes el peligro creado cae de 0.46 a 0.16 y el territorio de 40 a 31 por ciento.

### La primera media hora es presión sin producto: 173 presiones por cada 90 minutos y 0.72 de peligro; del 60 al 90 crea 1.17
- bloque: M-2
- escenario: momento
- metrica: pressures
- cifra: "Por 90 min. 0-30: 172.8 presiones (p89), 45.6 en último tercio (p88), altura de presión 60.0 m (p75), xG 0.72 (p25), 9.1 tiros (p23), xG en transición 0.26 (p35), xG concedido 0.84 (p30). 30-60: 141.6 presiones (p68), xG 1.14 (p69). 60-90: 128.7 presiones (p62), 28.6 en último tercio (p65), altura 55.1 m, xG 1.17 (p60), 13.9 tiros (p68), xG en transición 0.70 (p76), 10.6 tiros concedidos (p19), 11.0 entradas al área del rival (p19). 15-30: 15.0 faltas (p92). 75-90: xG en transición 0.85 (p79), 14.6 tiros (p75)"
- kpi: "172.8 | 128.7 | presiones por cada 90 minutos | 89 | Presiones en los primeros 30 minutos | neutro | del minuto 60 al 90"
- definiciones: D-22, D-05, D-03
- decision: "Rival: aguantar la primera media hora sin regalar faltas ni pérdidas en campo propio; después del 60 su presión cae 44 presiones por cada 90 minutos y el partido se decide en el ida y vuelta, donde él crea más tras robo. Staff: la energía de salida no se convierte en tiros (9 por cada 90 minutos); bajar un escalón la presión inicial y guardar piernas para el tramo donde el equipo sí produce"
La curva es la misma en los dos equipos: presión máxima al arranque, peligro mínimo; presión normal al final, peligro máximo. Del 60 al 90 además concede menos tiros y menos llegadas al área que la liga, así que el partido se le abre a favor. Entre el 15 y el 30 comete 15 faltas por cada 90 minutos, de las más altas de la liga: es el tramo donde la presión que no roba se convierte en falta.

### Con la liguilla directa alcanzable gana 9 de 23 y concede al contragolpe el doble que en zona directa: 0.66 contra 0.29
- bloque: M-3
- escenario: tabla
- metrica: transition_xg_conceded
- cifra: "Directa alcanzable 9-5-9: xG concedido en transición 0.66 (p84), xG concedido 1.20 (p57), 11.9 entradas al área (p21), field tilt 46.0 % (p34), xG 1.08 (p38), diferencia de xG -0.26 (p31), PPDA 14.2 (p60). Zona directa 5-4-5: 0.29 (p4), concedido 0.77 (p4), 14.7 entradas al área (p64), diferencia 0.31 (p78). Arranque 6-4-2: xG 1.50 (p92), 17.2 entradas al área (p88), xG de córner 0.42 (p100), 0.08 goles concedidos de balón parado (p1), diferencia 0.65 (p92), PPDA 11.0 (p15)"
- kpi: "0.66 | 0.29 | goles esperados en contragolpe en contra por partido | 84 | Peligro concedido en contragolpe cuando la liguilla directa es alcanzable | contra | cuando ya está en zona directa"
- definiciones: D-23, D-04, D-12
- decision: "Rival: cuando el equipo de Lema persigue la liguilla, esperar y correr; concede en contragolpe arriba de la liga y llega al área 5 veces menos por partido que en el arranque. Staff: el equipo juega mejor sin presión de tabla (arranque y zona directa); con la liguilla en juego se parte y pierde las llegadas; proteger el balance con el pivote antes que empujar laterales"
Arranca los torneos a tope: en las primeras cuatro jornadas crea 1.50 por partido, llega 17 veces al área y su córner es el más peligroso de la liga. Cuando ya está en zona directa se cierra y casi no concede. El problema es la zona intermedia, 23 partidos, donde perdiendo concede 1.65 por cada 90 minutos y ganando crea apenas 0.58: el equipo se abre en los dos sentidos.

### Su mejor torneo (Apertura 2024, 9-4-6) fue con 3-5-2 y el peligro concedido más bajo de la liga: 0.69 por partido
- bloque: M-2
- escenario: torneo
- metrica: np_xg_conceded
- cifra: "Apertura 2024, 19 pj, 9-4-6, GF 24 GA 19: xG concedido 0.69 (p1), xG 1.38 (p84), diferencia de xG 0.69 (p94), altura de presión 59.2 m (p91), línea 52.2 m (p92), 177.8 presiones (p91), 3-5-2 en 10 de 19, primer cambio 47.5' (p4). Clausura 2024, 20 pj, 7-8-5: 4-2-3-1 en 11 de 20, concedido 1.15 (p48), diferencia -0.24 (p32), 151.3 presiones (p50). Clausura 2025, 9 pj, 3-2-4: 188.1 presiones (p98), 40.9 contrapresiones (p97), 38.7 fases de presión (p96) pero 27 % de rachas con robo (p8), 24 % de robos altos con tiro (p2), diferencia -0.04 (p51). Apertura 2026 con Juárez, 6 pj, 1-1-4: concedido 1.64 (p97)"
- kpi: "0.69 | 1.17 | goles esperados en contra por partido | 1 | Peligro concedido en el Apertura 2024 | favor | liga"
- definiciones: D-26, D-13, D-05
- decision: "Staff de Juárez: la mejor versión de Lema es la de línea alta (52 metros) con tres centrales y presión de volumen que además concedía poco; el Clausura 2025 muestra el riesgo, presionó más que nunca y no produjo nada. Rival: contra un Lema con 3-5-2 y línea a 52 metros, el balón a la espalda es el camino; contra el 4-2-3-1 del Clausura 2024 el partido fue más parejo"
El 3-5-2 debutó en la ida de cuartos del Clausura 2024 contra Cruz Azul y se quedó: con él arrancó el Apertura 2024 en el lugar 13 y llegó a la última jornada cuarto. Un torneo después presionó todavía más (188 presiones por partido, 41 tras pérdida, de los más altos de la liga) pero las rachas robaron menos que casi nadie y los robos altos no terminaron en tiro: la presión dejó de ser rentable. De ahí salió con cinco derrotas seguidas, las tres últimas de Pumas y las dos primeras de Juárez.

### En liguilla sube la línea a 55 metros y lo castigan tras pérdida: 0.42 de peligro por partido y 4 cuartos sin ganar
- bloque: M-3
- escenario: fase
- metrica: vuln_xg
- cifra: "Cuartos, 4 pj, 0-1-3 (Cruz Azul 0-2 y 2-2 en el Clausura 2024; Monterrey 0-1 y 3-5 en el Apertura 2024): xG rival en 10 s tras pérdida 0.42 (p100) vs 0.14 en fase regular (p31); línea defensiva 55.0 m (p100) vs 50.2; altura de presión 61.4 m (p100); xG concedido 1.62 (p95) vs 1.01; 69 % de tiros concedidos desde el área (p99); xG concedido en transición 0.87 (p97); 18.3 entradas al área (p95); 16.8 recuperaciones altas (p99); xG 1.24 (p69); diferencia de xG -0.57 (p11). Play-in, 1 pj (Pachuca 0-0): altura de presión 44.3 m, field tilt 25.2 %, PPDA 18.1"
- kpi: "0.42 | 0.14 | goles esperados del rival en los 10 segundos tras perderla, por partido | 100 | Peligro del rival justo tras perderla, en cuartos de final | contra | en fase regular"
- definiciones: D-24, D-04, D-13
- decision: "Rival en liguilla: dejarlo subir y atacar el espacio en cuanto pierda; en 4 cuartos concedió 1.62 por partido. Staff: en la liguilla el equipo se va todavía más arriba de lo que ya va, llega más al área pero se desprotege; es un indicio de 4 partidos, pero las dos eliminatorias se perdieron igual"
Muestra chica, pero las dos series cuentan lo mismo: contra Cruz Azul y contra Monterrey Pumas llegó más al área que en la fase regular, robó más arriba y concedió el triple justo después de perder el balón. En las vueltas, abajo en el global, se fue a 61 % de posesión y 67 % de territorio con 0.78 de peligro rival tras pérdida. En el play-in contra Pachuca hizo lo contrario: se replegó a 44 metros, cedió el 75 % del territorio y avanzó con el 0-0.

## Balón parado (M-4)

### Córner con peligro arriba de la liga: 0.23 por partido y 8 goles en 281; el cerrado rinde más y es el que menos usa
- bloque: M-4
- metrica: corner_xg
- cifra: "xG de córner 0.23 vs 0.18 de liga (p82); 5.2 córners por partido (p66); 281 córners, 121 tiros, 12.4 xG, 8 goles; 57 % desde la izquierda; abierto 45 % (liga 41 %), cerrado 30 % (liga 36 %, p30), corto 18 % (liga 13 %, p71); xG por córner: cerrado 0.055 en 83 cobros con 4 goles, abierto 0.043 en 127 con 3, corto 0.033 en 51 con 1; liga 0.039 cerrado, 0.039 abierto, 0.032 corto; en contra 238 córners y 5 goles"
- kpi: "0.23 | 0.18 | goles esperados de córner por partido | 82 | Peligro creado de córner por partido | favor"
- definiciones: D-07, D-12
- decision: "Staff: el cerrado es su mejor envío (0.055 por córner, arriba de la liga) y el que menos cobra; subirlo del 30 al 40 por ciento no cambia el estilo y suma peligro. Rival: el primer contacto se concentra en el área chica y el punto de penal; cuidar el cerrado desde la izquierda, que es por donde más le entra, 3 goles en 46 cobros"
Cobra más desde la izquierda, coherente con su ataque, y prefiere el abierto. El corto desde la derecha es un recurso vacío: 14 cobros, 2 tiros y casi nada de peligro. Contra el top 6 el córner se apaga por completo (0.02 por córner, de los más bajos de la liga) y contra el resto es de los más productivos (0.05).

### Peligro tras saque de banda de los más altos de la liga: 0.05 por partido y 7 goles en 398 saques
- bloque: M-4
- metrica: throwin_xg
- cifra: "xG tras saque de banda 0.05 vs 0.02 de liga (p92); 398 saques en zona de peligro (7.4 por partido, p38), 7 goles, retiene 61.8 %; izquierda al área (izq) 29 saques, 10 tiros, 1.30 xG, 3 goles; derecha al área (der) 38 saques, 11 tiros, 1.55 xG, 2 goles; de local 0.08 (p99), de visita 0.02 (p49); Apertura 2024 0.09 (p100); con Pumas 0.05 (p93), con Juárez 0.01 (p24)"
- kpi: "0.05 | 0.02 | goles esperados tras saque de banda por partido | 92 | Peligro tras saque de banda | favor"
- definiciones: D-07
- decision: "Rival: el saque de banda cerca del área es jugada ensayada, sobre todo en su estadio; marcarlo como si fuera córner, con referencia en el primer palo. Staff: el arma no viajó a Juárez (0.01 en 6 partidos); recuperarla es barato: un lanzador largo y dos bloqueos"
La mayoría de sus saques en zona de peligro van lejos del área (158 por izquierda, 136 por derecha) y producen poco; el peligro está en los 67 que van directo al área, que dieron 5 de los 7 goles. Es un recurso de dominio: de local rinde cuatro veces más que de visita, y en el Apertura 2024, su mejor torneo, fue el más productivo de la liga.

### Sin cobrador: 18 tiros libres directos, 0 goles y 0.01 de peligro por partido, abajo de la liga
- bloque: M-4
- metrica: fk_direct_xg
- cifra: "xG de tiro libre directo 0.01 vs 0.02 de liga (p15); 18 tiros libres directos, 0.5 xG, 0 goles; tiros libres al área: 44 tiros, 3.5 xG, 3 goles, 0.07 por partido (p50); 257 tiros libres a favor, 5 goles; penales a favor 13 tiros, 12 goles; en contra 15 penales, 13 goles; con Juárez 0.00 (p1)"
- kpi: "0.01 | 0.02 | goles esperados de tiro libre directo por partido | 15 | Peligro de tiro libre directo | contra"
- definiciones: D-07
- decision: "Staff: dejar de tirar directo desde lejos (18 intentos, medio gol esperado en total) y cobrar al área, donde cada tiro libre vale casi el triple; o fichar un cobrador. Rival: la falta en tres cuartos no cuesta; cuidar la falta dentro del área, convirtió 12 de 13 penales"
El tiro libre es el balón parado que menos le rinde: 257 cobros a favor en 54 partidos y 5 goles. Del lado defensivo la fuga real no es el córner (5 goles en 238) sino el penal: 15 en contra en 54 partidos, 13 convertidos, consecuencia de defender tan arriba y de una presión que termina en falta.

## Jugadores y cambios (M-5)

### Del 4-2-3-1 al 3-5-2 en mayo de 2024: tres centrales en 19 de 54 partidos y en 5 de los 6 de Juárez
- bloque: M-5
- metrica: tactical_shifts
- cifra: "Dibujo inicial: 3-5-2 en 19 (35 %), 4-2-3-1 en 15 (28 %), 4-1-4-1 en 6, 3-4-3 en 4, 3-4-2-1 en 4. Clausura 2024: 4-2-3-1 en 11 de 20; Apertura 2024: 3-5-2 en 10 de 19; Clausura 2025: 3-5-2 en 3 de 9; Apertura 2026: 3-5-2 en 5 de 6. Cambio real de dibujo en 36 de 54 partidos; 1.91 cambios de formación por partido vs 1.80 (p57), 2.47 empatando (p94). Cambio más repetido: 3-5-2 a 3-4-3 ganando (4 veces); perdiendo pasa a 4-2-3-1 (30 % de los minutos del tramo 60-65) y a 4-4-2 después del 70 (23 %)"
- kpi: "35 % | 28 % | de los partidos | 57 | Partidos que arranca en 3-5-2 | neutro | en 4-2-3-1"
- definiciones: SB, D-21, D-26
- decision: "Rival: esperar 3-5-2 con carrileros largos; si Lema va perdiendo después del 60, el equipo pasa a línea de cuatro sacando un central o un carrilero, y ahí queda espacio por fuera. Staff: el 3-5-2 es la versión que mejor rindió (Apertura 2024) y la que llevó a Juárez; el plan de remontada a 4-2-3-1 o 4-4-2 existe pero no ha mejorado el peligro creado después del cambio"
El 3-5-2 apareció por primera vez en la ida de cuartos contra Cruz Azul (mayo de 2024) y desde entonces es la base: con él hizo su mejor torneo y con él llegó a Juárez. Mueve el dibujo en dos de cada tres partidos, pero en direcciones distintas: ganando quita un medio y pone un atacante (3-4-3); perdiendo deshace la línea de tres y saca lateral derecho (11 veces), carrilero derecho (8) o central izquierdo (7).

### Cambia antes que la liga, minuto 50, y perdiendo al descanso; pero el cambio no mueve el partido: el peligro creado sigue en 0.14
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio al 50.4' vs 53.9 de liga (p20); perdiendo 46.8' (mediana 45'), empatando 49.6', ganando 57.8' (mediana 62'); en zona directa 47.2', con la directa alcanzable 50.7', en liguilla 54.0'; 4.7 cambios por partido, 236 tácticos y 17 por lesión. 15 min antes vs después del primer cambio perdiendo (n=17): xG 0.14 y 0.14, xG concedido 0.30 y 0.38, tiros 2.3 y 2.0, PPDA 14.1 y 11.9. Ganando (n=11): xG 0.46 y 0.16, field tilt 40 y 31, PPDA 26.3 y 13.4. Empatando (n=26): xG 0.20 y 0.25, tiros 2.2 y 3.0"
- kpi: "0.14 | 0.14 | goles esperados en 15 minutos | 20 | Peligro creado en los 15 minutos después del primer cambio, perdiendo | contra | antes del cambio"
- definiciones: D-21, D-23, SB
- decision: "Staff: el primer cambio perdiendo llega al descanso pero no cambia nada, mismo peligro creado y más concedido; revisar qué se cambia, no cuándo: saca defensas (lateral derecho 11 veces, carrilero derecho 8, central izquierdo 7) y pasa a línea de cuatro, y el equipo queda más expuesto. Rival: tras el cambio de Lema perdiendo, el equipo presiona más (de 14 a 12 pases antes de robar) pero concede más; atacar los primeros 15 minutos después del cambio"
Con ventaja el cambio llega más tarde (mediana al 62) y le sale peor: en los 15 minutos siguientes el peligro creado cae de 0.46 a 0.16 y el territorio de 40 a 31 por ciento, porque saca al delantero centro (8 veces) o al interior izquierdo (8) para cerrarse. El único estado donde el primer cambio suma es el empate: los tiros suben de 2.2 a 3.0. Casi todos sus cambios son tácticos, 236 de 253.

### El equipo se arma desde atrás: Caicedo (80 % de titularidades), Nathan Silva (76 %) y Magallán (70 %) son los únicos fijos
- bloque: M-5
- metrica: xi_stability
- cifra: "Jaccard entre onces consecutivos 0.66; 2.4 titulares distintos de un partido al siguiente; núcleo (70 % o más de titularidades): Caicedo 43 (80 %, 3591 min, pivote), Nathan Silva 41 (76 %, 3374 min, central derecho), Magallán 38 (70 %, 3211 min, central izquierdo); después Bennevendo 37 (69 %), Julio González 35 (65 %), Quispe 33 (61 %), Huerta 32 (59 %), Guillermo Martínez 31 (57 %), Ulises Rivas 30 (56 %). Núcleo por torneo: 9 jugadores en Clausura 2024, 8 en Apertura 2024, 6 en Clausura 2025, 7 en Apertura 2026 con Juárez, todos nuevos"
- kpi: "2.4 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB
- decision: "Rival: la estructura fija es el pivote y los dos centrales; sacar a Caicedo de zona arrastrándolo con el mediapunta desordena la salida más que presionar a los centrales. Staff: la rotación va por delante, medios, carrileros y delanteros cambian cada semana; en Juárez el núcleo es nuevo por completo, así que lo primero es fijar los tres de atrás"
Dos titulares y medio distintos por partido es una rotación media, pero concentrada: los tres de atrás no se tocan y el resto del once gira. Ningún delantero llega al 60 % de titularidades. El sesgo por la izquierda de Pumas vivía en Huerta, Quispe y Ergas, ninguno titular fijo; cuando faltaban, el equipo atacaba distinto.

## Por equipo: qué viaja con Lema (Juárez, Apertura 2026, 6 partidos, indicio por la muestra)

### En Juárez viaja la altura (57 metros) y el 3-5-2 pero no la presión: 134 presiones por partido contra 169 con Pumas
- bloque: M-2
- escenario: equipo
- metrica: pressures
- cifra: "Juárez 6 pj, 1-1-4: 134.2 presiones (p19) vs Pumas 168.7 (p79); contrapresiones 24.2 (p4) vs 33.8 (p68); 30.5 presiones en último tercio (p38) vs 41.5 (p84); rachas con robo 21.7 % (p0) vs 28.8 % (p20); altura de presión 56.8 m (p65) vs 57.6 (p78); línea 47.8 m (p49) vs 50.7 (p84); 21 % de fases altas (p80) vs 20 % (p77); PPDA 14.3 vs 13.5; xG concedido 1.64 (p97) vs 0.97 (p24); 68 % de tiros concedidos desde el área (p97) vs 55 % (p23); xG rival tras pérdida 0.29 (p93) vs 0.14 (p32); 14.8 faltas (p83); primer cambio 51.3' vs 50.3'"
- kpi: "134.2 | 168.7 | presiones por partido | 19 | Presiones por partido con Juárez | contra | con Pumas"
- definiciones: D-26b, D-05, D-06, D-13
- decision: "Staff de Juárez: la idea llegó (presión en campo rival, 3-5-2, primer cambio temprano) pero no las piernas: 35 presiones menos por partido y la presión tras pérdida de las más bajas de la liga; el resultado es que concede 1.64 por partido y dos de cada tres tiros desde el área. Antes que ajustar el dibujo, elegir a los que pueden correr el modelo. Rival: el Juárez de Lema presiona por rachas pero no sostiene; salir jugando con paciencia es rentable"
Seis partidos, así que es indicio. Pero el patrón es coherente: la presión arranca en campo rival igual que en Pumas (una de cada cinco rachas es alta) y se cae en volumen, en la reacción tras pérdida y en el robo. Con la línea 3 metros más abajo y menos presión, el rival llega y tira desde dentro: 1-2 con Santos creando 0.93 contra 2.99, 0-5 con Cruz Azul creando 0.65 contra 2.47.

### El ataque de Juárez llega al área 9 veces por partido, de los más bajos de la liga, y centra 1.49 por llegada, de los más altos
- bloque: M-1
- escenario: equipo
- metrica: box_entries
- cifra: "Juárez: 9.2 entradas al área (p2) vs Pumas 14.7 (p64); 10.0 tiros (p6) vs 14.1 (p68); 8.0 regates (p1) vs 14.4 (p58), con 69 % completados (p98); 49 % de secuencias que llegan al último tercio (p7) vs 57 % (p66); 85.5 pases progresivos (p13) vs 106.1 (p69); centros por entrada al área 1.49 (p99) vs 0.87 (p36); xG por tiro 0.10 (p92) vs 0.08; xG 1.00 (p30) vs 1.18 (p58); xG de balón parado 0.68 (p94) vs 0.53 (p69); 12.4 % de secuencias con tiro (p5) vs 16.1 % (p68); por la izquierda 30.6 % (p32) vs 34.8 % (p92)"
- kpi: "9.2 | 14.7 | llegadas al área por partido | 2 | Llegadas al área por partido con Juárez | contra | con Pumas"
- definiciones: D-26b, D-12, D-14
- decision: "Staff de Juárez: el peligro de 1.00 por partido se sostiene en balón parado (0.68, de los más altos de la liga) y en tiros de buena calidad, no en volumen; sin regate (8 por partido) y sin progresión el equipo depende de centrar. Buscar un extremo que encare o abrir el carril izquierdo que en Pumas era la salida. Rival: cerrar el centro al área y el córner; en juego abierto Juárez casi no llega"
Con Pumas el ataque era de liga; con Juárez, en 6 partidos, es de los más pobres en llegar, tirar y regatear, y de los más dependientes del centro. Lo que compensa es la calidad del tiro (0.10 por tiro, arriba de la liga) y el balón parado, que ya es la primera fuente de peligro. El sesgo por la izquierda tampoco viajó.

## Partidos y rivales

### Cruz Azul y Monterrey: 0 victorias en 9 partidos; con Vucetich 3 de 3; perdió 6 partidos creando más que el rival
- bloque: M-2
- escenario: rival
- metrica: xgd
- cifra: "Cruz Azul 0-2-3 (incluye 0-2 y 2-2 en cuartos del Clausura 2024 y 0-5 con Juárez); Monterrey 0-1-3 (0-1 y 3-5 en cuartos del Apertura 2024); contra Anselmi 0-2-2 con xG 0.80 a favor y 1.36 en contra; Demichelis 0-1-2, 1.25 y 1.11; Paiva 0-1-2, 0.87 y 1.86; Almada 2-1-1, 0.68 y 1.12; Vucetich 3-0-0, 0.74 y 0.86; Jardine 2-0-1, 0.79 y 1.09. Ganó con menos peligro que el rival 3 partidos; perdió creando más 6; rachas: 3 victorias seguidas, 6 sin perder, 5 derrotas seguidas; diferencia de xG total 0.09 (p63) con récord 20-15-19"
- kpi: "0 | 9 | victorias en partidos contra Cruz Azul y Monterrey | | Récord contra Cruz Azul y Monterrey: 0 ganados, 3 empatados, 6 perdidos | contra"
- definiciones: D-25
- decision: "Rival: los que le ganan son los que le aguantan la presión y lo castigan al contragolpe (Anselmi, Demichelis, Paiva); los que le dejan el balón y esperan atrás (Vucetich) pierden. Staff: perder creando más, 6 veces, es el patrón de sus derrotas; el problema no es generar sino cerrar los partidos; priorizar portero y defensa del área en liguilla, donde volvió a caer con Cruz Azul y Monterrey"
Con un balance de peligro positivo en el total (0.09 por partido) su récord es apenas de uno arriba: los partidos que pierde creando más que el rival son el doble de los que gana creando menos. Sus peores partidos por balance son todos contra rivales que corren: Toluca 0-3 creando 0.68 contra 2.04, Santos 1-2 creando 0.93 contra 2.99, América 0-2 creando 0.42 contra 2.25 y Cruz Azul 0-5 creando 0.65 contra 2.47. La racha de cinco derrotas seguidas cruza los dos equipos: Pachuca, América y Tijuana con Pumas en febrero de 2025, Pachuca y Santos con Juárez en septiembre de 2026.
