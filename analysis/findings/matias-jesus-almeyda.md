# Hallazgos — Matías Almeyda en la Liga MX (Apertura 2026 → Apertura 2026, 11 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Almeyda con datos: Monterrey (Apertura 2026, 11). Récord 5-2-4, 19 goles a favor y 16 en contra. Este técnico tiene 11 partidos en la Liga MX con datos y el análisis se hizo con esos; las cifras son orientativas y los cortes por contexto, con pocas jornadas, pueden moverse. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Presiona poco pero alto y roba: 37 % de sus rachas de presión recuperan el balón, de las más altas de la liga
- bloque: M-2
- metrica: press_success_pct
- cifra: "press_success_pct 36.6 % vs 31.2 % (p96); cp_regain_pct 34.1 % vs 27.4 % (p98); press_high_pct 23 % vs 16.9 % (p94); altura de presión 59.5 m vs 55.8 (p93); línea defensiva 52.8 m vs 47.9 (p96); pero 24.7 fases de presión vs 29.3 (p19), 135.3 presiones vs 151.5 (p22) y PPDA 11.8 vs 14.0 (p23)"
- kpi: "37 % | 31 % | de sus rachas de presión | 96 | Rachas de presión que terminan robando el balón | favor"
- definiciones: D-05, D-05b, D-06, D-13
- decision: "Rival: no salir jugando corto por el centro contra su primera línea; salida larga a la espalda de una defensa que se para a 53 metros de su portería. Staff: la presión es selectiva y rinde; el riesgo no es la intensidad sino los metros a la espalda de la línea cuando la racha no roba"
Con 11 partidos, el rasgo más claro de Almeyda es la calidad de la presión, no la cantidad: presiona menos veces que la liga (135 presiones y 25 rachas por partido, abajo de la liga) pero una de cada cuatro rachas ocurre en campo rival y más de una de cada tres termina en robo. Tras perder el balón recupera el 34 % de las veces, lo más alto de la liga. La defensa se para a 53 metros de su portería, la más adelantada de la liga, y eso es lo que sostiene la presión alta.

### Concede pocos tiros, 11 por partido, pero cada uno vale mucho: peligro concedido arriba de la liga (1.36)
- bloque: M-2
- metrica: np_xg_conceded
- cifra: "np_xg_conceded 1.36 vs 1.17 (p80, malo) con 10.8 tiros concedidos vs 13.6 (p9) y 11.0 entradas al área rival vs 14.2 (p10); 60 % de los tiros concedidos desde el área (p73); directness del rival 0.61 vs 0.59 (p86); xG concedido en transición 0.26 (p3); de balón parado 0.39 (p28); en las 4 derrotas 2.05"
- kpi: "1.36 | 1.17 | goles esperados en contra por partido | 80 | Peligro concedido por partido | contra"
- definiciones: D-12, D-13, D-04
- decision: "Rival: no hace falta llegar mucho; un balón largo a la espalda de la línea de 53 metros genera un tiro de alta calidad. Staff: el problema no es el volumen de llegadas sino la clase de tiro que concede; trabajar la cobertura de la espalda y la vigilancia del segundo central cuando el equipo está en campo rival"
Es la contradicción del equipo: concede menos tiros y menos llegadas al área que el 90 % de la liga, y aun así el peligro concedido está arriba de la liga. El tiro rival promedio vale casi el doble que en la liga, y no viene del contragolpe (el peligro que concede en transición es de los más bajos de la liga) ni del balón parado, sino de ataques directos: la verticalidad que permite al rival está arriba de la liga porque los rivales le juegan largo a la espalda. Perdió 4 de 11 y en esas derrotas concedió 2.05 por partido.

### Transiciones en los dos sentidos: 5.2 tiros tras robo por partido y 0.26 de peligro concedido al contragolpe
- bloque: M-3
- metrica: transition_shots
- cifra: "transition_shots 5.18 vs 3.76 (p94); transition_conv_pct 7.9 % vs 6.3 % (p89); transition_xg 0.62 vs 0.51 (p79); high_recoveries 14.5 vs 11.9 (p88); transitions 67.7 vs 63.2 (p85); transition_xg_conceded 0.26 vs 0.52 (p3); vuln_shots 1.73 vs 2.21 (p12); en los primeros 30 minutos transition_xg 0.81 por 90 (p99)"
- kpi: "5.2 | 3.8 | tiros tras robo por partido | 94 | Tiros que nacen en los 10 segundos después de robar el balón | favor"
- definiciones: D-03, D-04
- decision: "Rival: no perder el balón en salida ante su primera línea, porque el robo alto se convierte en tiro una de cada trece veces; y no esperar contragolpes fáciles, porque los corta. Staff: el modelo ya funciona en transición; el margen está en el ataque largo, donde el tiro vale lo normal"
Robar arriba y tirar rápido es el camino más corto a la portería de este Monterrey: 14.5 robos en campo rival por partido y 5.2 tiros en los 10 segundos siguientes, los dos arriba de la liga. Del otro lado, el peligro que concede en contragolpe es de los más bajos de la liga, consecuencia de una presión tras pérdida que recupera el 34 % de los balones. En la primera media hora el peligro tras robo sube a 0.81 por cada 90 minutos, de los más altos de la liga.

### Sale corto y progresa con el pase: 122 pases que avanzan por partido, de los más altos de la liga
- bloque: M-1
- metrica: prog_passes
- cifra: "prog_passes 121.6 vs 100.4 (p93); gk_long_pct 36 % vs 47 % (p14); possession_pct 55.3 % vs 49.8 % (p85); field_tilt 58.1 vs 49.6 (p85); obv_offense 1.72 vs 1.42 (p91); prog_carries 46.6 vs 39.0 (p87); seq_start_defensivo_pct 41.6 % vs 44.5 % (p17); directness 0.57 vs 0.59 (p32)"
- kpi: "122 | 100 | pases que avanzan por partido | 93 | Pases que ganan al menos 10 metros hacia la portería rival | neutro"
- definiciones: D-14, D-10, D-01
- decision: "Rival: presionar al portero sí tiene sentido, porque juega corto dos de cada tres veces; cerrar las líneas de pase a los dos pivotes. Staff: la salida corta produce dominio territorial (58 %) y ataques que nacen alto; el costo son las pérdidas en campo propio cuando el rival presiona bien, como pasó en Necaxa"
Monterrey con Almeyda tiene el balón más que el 85 % de la liga y lo avanza sobre todo con pases, no con juego directo: la verticalidad está como la liga o un poco abajo. Solo el 42 % de sus ataques nacen en su propio tercio, menos que la liga, porque la presión alta hace que muchos arranquen ya en medio campo. El valor de sus acciones con balón está entre los más altos de la liga. Con 11 partidos es un rasgo estable: en 8 de 11 tuvo más balón que el rival.

### Volumen sin calidad de tiro: 16 tiros y 16 llegadas al área por partido, y cada tiro vale lo mismo que en la liga
- bloque: M-1
- metrica: xg_per_shot
- cifra: "xg_per_shot 0.08 vs 0.09 (p44) con np_shots 16.0 vs 13.2 (p89), box_entries 16.5 vs 14.0 (p83), np_xg 1.38 vs 1.14 (p83); shots_outside_box_pct 38.9 % vs 42.8 % (p24); seq_shot_pct 16.8 % vs 15.3 % (p80); cross_ratio 0.91 vs 0.94 (p47); 40 tiros de córner con 4.4 xG en 11 partidos"
- kpi: "0.08 | 0.09 | goles esperados por tiro | 44 | Calidad de cada tiro | contra"
- definiciones: D-12, D-02, D-07
- decision: "Rival: cerrar el área y regalar el tiro de media distancia no sirve aquí, porque tira desde dentro; lo que sí sirve es defender el córner, donde nace buena parte de su peligro. Staff: con 16 tiros por partido, subir la calidad del tiro a la media de la liga vale más que seguir sumando tiros; buscar el pase atrás y menos remate forzado tras centro"
Crea peligro arriba de la liga (1.38 por partido) a base de volumen: 16 tiros y 16.5 llegadas al área, los dos arriba de la liga, y solo el 39 % de los tiros desde fuera del área, menos que la liga. Aun así la calidad del tiro promedio es la de la liga. Parte de la explicación está en el córner: casi 3 de cada 10 goles esperados sin penal que crea nacen de un córner, y el remate de córner es por naturaleza de baja calidad. Sin penales creó 15.1 goles esperados en 11 partidos y anotó 19 goles (2 de penal): va convirtiendo por arriba de lo esperado.

### Carga por la derecha: 34 % de sus ataques nacen por ese costado y 65 % de sus córners se cobran desde ahí
- bloque: M-1
- metrica: seq_lane_derecho_pct
- cifra: "seq_lane_derecho_pct 34.3 % vs 32.3 % (p84); izquierdo 31.1 % (p38); centro 34.6 % (p29); 65 % de los córners desde la derecha; dribbles_completed_pct 57.9 % vs 53.9 % (p79) con 13.4 regates vs 14.0 (p44); contra el top 6 el carril derecho cae a 30.3 % (p15)"
- kpi: "34 % | 32 % | de sus ataques | 84 | Ataques que nacen por la derecha | neutro"
- definiciones: D-11, D-02, D-07
- decision: "Rival: cargar la ayuda defensiva al costado derecho de Monterrey (Chávez y Orellano) y dejarle el lado izquierdo, donde nacen menos ataques. Staff: el desequilibrio es moderado; el dato útil es que el regate que intenta le sale (58 %), así que vale la pena buscar más el uno contra uno de Ocampos y Corona por la izquierda"
No es un equipo de regate (13 intentos por partido, como la liga) pero cuando lo intenta le sale más que al 79 % de la liga, con Ocampos, Corona y Orellano como extremos. El lado derecho, con Ricardo Chávez como titular más frecuente (9 de 11), concentra el arranque de los ataques y casi dos de cada tres córners. Con 11 partidos el sesgo de costado es un indicio, no una ley: contra el top 6 el arranque por la derecha cayó al 30 %.

## Consistencia y variabilidad (D-20, D-21, D-22, D-23, D-25)

### De local domina y de visita se le voltea: balance de peligro +0.83 en casa y -0.64 fuera (6 y 5 partidos)
- bloque: M-2
- escenario: localia
- metrica: xgd
- cifra: "Local 4-1-1: xgd 0.83 (p98), np_xg 1.74 (p98), np_xg_conceded 1.04 (p30), altura de presión 61.2 m, press_success_pct 43.0 % (p100), press_high_pct 26.6 %, field_tilt 63.8, 8.8 tiros concedidos, 7.3 córners, sp_xg_conceded 0.20 (p0). Visita 1-1-3: xgd -0.64 (p9), np_xg 0.94 (p22), np_xg_conceded 1.74 (p98), altura 57.5 m, press_success_pct 28.9 % (p20), press_high_pct 18.6 %, field_tilt 51.3, 13.2 tiros concedidos, sp_xg_conceded 0.61 (p81), 2.8 cambios de dibujo (p99)"
- kpi: "-0.64 | 0.83 | goles esperados de diferencia por partido | 9 | Balance de peligro de visita | contra | de local"
- definiciones: D-20, D-05, D-13, D-07
- decision: "Rival: de visita en el BBVA no hay cómo quitarle el partido con balón; esperar y castigar la espalda. En casa contra Monterrey, presionarlo: su presión baja 4 metros y roba un tercio menos. Staff: lo que no viaja es la presión alta (de 27 % a 19 % de rachas en campo rival) y el balón parado defensivo (de 0.20 a 0.61); el plan de visita necesita una versión más baja y compacta, no más cambios de dibujo"
Son 6 partidos de local y 5 de visita, así que el corte es un indicio fuerte, no una ley. En casa Monterrey es de lo mejor de la liga en casi todo: crea 1.74, concede 1.04 y roba en el 43 % de sus rachas de presión. Fuera crea casi la mitad, concede 70 % más y la presión deja de robar. Las tres derrotas de visita (Necaxa, León, Atlante) concedieron 3.07, 1.04 y 2.53 de peligro; de visita además cambia el dibujo casi el doble de veces (2.8 por partido, de los más altos de la liga), señal de que va buscando el partido sobre la marcha.

### Perdiendo se vuelca: 1.75 de peligro creado y 21 llegadas al área por 90 minutos, y el contragolpe rival sube a 0.71
- bloque: M-1
- escenario: marcador
- metrica: np_xg
- cifra: "Perdiendo (4 partidos, 245 min): np_xg 1.75 por 90 (p97), box_entries 21.3 (p96), shots 20.9 (p99), crosses 21.7 (p97), possession_pct 69.4 % (p99), field_tilt 79.6, prog_passes 153.8, prog_carries 60.9 (p99); pressures 92.8 (p5), counterpressures 24.6 (p23); transition_xg_conceded 0.71 (p85) vs 0.01 ganando (p0) y 0.20 empatando. Ganando (6 partidos, 471 min): np_xg 1.16, possession_pct 52.7 %, shots_conceded 9.7 (p3)"
- kpi: "1.75 | 1.16 | goles esperados por cada 90 minutos | 97 | Peligro creado cuando va perdiendo | favor | cuando va ganando"
- definiciones: D-21, D-03, D-04
- decision: "Rival: si le anotas, no te encierres a defender centros (manda 22 por 90); déjalo venir y ataca el espacio a la espalda, porque perdiendo concede 0.71 al contragolpe y ganando casi nada (0.01). Staff: la reacción ofensiva existe y es de las más fuertes de la liga; falta un seguro atrás cuando el equipo se vuelca, por ejemplo un pivote que no suba"
Son 4 partidos y 245 minutos perdiendo, así que es un indicio. Pero el patrón es nítido y distinto al de la mayoría: cuando va abajo Monterrey tiene el 69 % del balón, juega el 80 % del partido en campo rival y crea 1.75 por 90 minutos, de los más altos de la liga. Lo paga atrás: presiona menos (93 presiones por 90, de las más bajas de la liga) y el poco contragolpe que sufre vale 0.71 por 90. Ganando ocurre lo contrario: concede 9.7 tiros por 90 y prácticamente nada al contragolpe.

### Del 30 al 60 le hacen daño: 1.79 de peligro concedido por 90 minutos; en la primera media hora 0.81 y en la última 1.12
- bloque: M-2
- escenario: momento
- metrica: xg_conceded
- cifra: "30-60: xg_conceded 1.79 por 90 (p97), obv_conceded 1.69 (p93), 12.6 tiros concedidos (p56), 14.7 faltas (p95); 45-60: xg_conceded 1.99 (p93), obv_conceded 1.97 (p95). 0-30: xg_conceded 0.81 (p26), 7.1 tiros concedidos (p3), transition_xg 0.81 (p99), transition_shots 6.0 (p100). 60-90: xg_conceded 1.12 (p30), 8.7 tiros concedidos (p2). Empatando concede 1.59 por 90 (p89), ganando 1.06, perdiendo 1.09"
- kpi: "1.79 | 0.81 | goles esperados en contra por cada 90 minutos | 97 | Peligro concedido del minuto 30 al 60 | contra | en los primeros 30 minutos"
- definiciones: D-22, D-21, D-03
- decision: "Rival: aguantar la primera media hora, cuando su contragolpe es letal (6 tiros tras robo por 90), y atacar entre el 30 y el 60, sobre todo el cuarto de hora después del descanso. Staff: el bache coincide con la caída del contragolpe propio (de 0.81 a 0.31) y con el pico de faltas (14.7 por 90); revisar la altura del bloque cuando baja la energía de la presión inicial"
Los 11 partidos cuentan en los tres tramos, así que aquí la muestra no es el problema. Monterrey arranca cerrado y punzante: en la primera media hora concede 7 tiros por 90 y crea 0.81 tras robo, de los más altos de la liga. Entre el 30 y el 60 el peligro concedido se duplica y el peligro tras robo cae a 0.31; el cuarto de hora posterior al descanso es el peor del partido (1.99 por 90). Buena parte de ese daño llega empatando, el estado en el que más concede (1.59 por 90, arriba de la liga).

### Del 60 al 90 cierra con el balón: 68 % de dominio territorial, de lo más alto, y 91 presiones por 90, de lo más bajo
- bloque: M-1
- escenario: momento
- metrica: field_tilt
- cifra: "60-90: field_tilt 67.6 (p99), possession_pct 59.3 % (p99), pressures 90.8 por 90 (p1), counterpressures 19.6 (p5), PPDA 10.7, shots_conceded 8.7 (p2), opp_box_entries 9.3 (p3), obv_conceded 0.76 (p0), sp_xg 0.88 (p93), np_xg 1.25, losses 104.3 (p91). 75-90: field_tilt 76.4 (p100), recoveries_high 15.4 (p99), crosses 18.0 (p99), box_entries 18.0 (p93), pressures 78.5 (p0). 0-30: field_tilt 57.2"
- kpi: "68 % | 57 % | del juego en campo rival | 99 | Dominio territorial del minuto 60 al 90 | favor | en los primeros 30 minutos"
- definiciones: D-22, D-05b, D-07
- decision: "Rival: en el último tramo no esperes espacios al contragolpe; Monterrey encierra con el balón y el último cuarto de hora es casi todo en tu campo (76 %). Si necesitas el gol hay que ir a presionarlo, porque él ya no presiona. Staff: el cierre con balón funciona (concede 8.7 tiros por 90 y casi nada de valor), pero vive de centros (18 por 90 en el último cuarto) y de córners; conviene medir cuánto de ese dominio es estéril"
Entre el 60 y el 90 Monterrey presiona menos que casi cualquier equipo de la liga y, al mismo tiempo, juega más en campo rival que casi cualquiera. No es contradicción: el rival casi no tiene el balón (41 %) y cuando lo tiene no llega (9 entradas al área por 90, de las más bajas de la liga). El peligro de balón parado en ese tramo (0.88 por 90) es de los más altos de la liga porque los córners se acumulan al final. El costo son las pérdidas: 104 por 90, arriba de la liga, en un tramo donde ya no hay presión tras pérdida que las cubra.

### Pierde concediendo, no dejando de crear: 2.05 de peligro en contra en las 4 derrotas, 1.01 en las 5 victorias
- bloque: M-2
- escenario: resultado
- metrica: np_xg_conceded
- cifra: "Perdió 4: np_xg_conceded 2.05 (p100), np_xg 1.38 (p83), vuln_xg 0.48 (p100), vuln_shots 3.0 (p93), press_high_pct 30.2 % (p99), press_success_pct 29.5 % (p29), seq_start_ultimo_pct 22.2 % (p100), cross_ratio 1.25 (p95), sp_goals 0.75 (p97), 2.75 cambios de dibujo (p99), primer cambio 48'. Ganó 5: np_xg_conceded 1.01 (p26), np_xg 1.60 (p96), vuln_xg 0.04 (p0), press_success_pct 43.4 % (p100), transition_xg 0.91 (p98), xg_per_shot 0.10 (p88), dribbles_completed_pct 71 % (p99), 1.0 cambios de dibujo (p4)"
- kpi: "2.05 | 1.01 | goles esperados en contra por partido | 100 | Peligro concedido en los partidos que perdió | contra | en los que ganó"
- definiciones: D-04, D-05, D-07, D-02
- decision: "Rival: para ganarle no hace falta cerrarle el ataque (en sus derrotas creó 1.38, arriba de la liga); hace falta castigar el segundo después de su pérdida, porque ahí concede 12 veces más peligro cuando pierde que cuando gana. Staff: en las derrotas la presión fue más alta que nunca (30 % de rachas en campo rival) pero robó menos (29 %); presionar más arriba sin robar es la receta de la derrota, y los cambios de dibujo (2.75 por partido) llegaron sin corregirlo"
Cinco victorias y cuatro derrotas: muestras chicas, pero la separación es enorme. En las derrotas Monterrey creó más que la liga, anotó de balón parado (0.75 por partido) y hasta centró más por cada llegada; lo que lo hundió fue el peligro concedido, el más alto de la liga, y sobre todo el peligro del rival en los 10 segundos después de perderla: 0.48 por partido contra 0.04 cuando gana. En las victorias el contragolpe propio (0.91) y la calidad del tiro (0.10) fueron de los más altos de la liga, y el regate le salió 7 de cada 10 veces.

### Con la liguilla en juego cuida peor la ventaja: ganando concede 13.2 tiros por 90; en las primeras 4 jornadas, 7.0
- bloque: M-2
- escenario: tabla
- metrica: shots_conceded
- cifra: "Directa alcanzable (6 partidos, 2-2-2), ganando 212 min en 3 partidos: shots_conceded 13.17 por 90, opp_box_entries 14.45, xg_conceded 1.25, np_xg 0.85, shots 9.35, transition_shots 3.82. Arranque J1 a J4 (4 partidos, 3-0-1), ganando 259 min en 3 partidos: shots_conceded 6.95, opp_box_entries 9.38, xg_conceded 0.92, np_xg 1.41, shots 17.02. Perfil directa alcanzable: transitions 76.5 (p99), sp_goals 0.33 (p25) vs 1.00 en arranque (p100); sp_xg_conceded 0.20 (p0)"
- kpi: "13.2 | 7.0 | tiros en contra por cada 90 minutos | | Tiros que concede ganando cuando la liguilla directa es alcanzable | contra | ganando en las primeras cuatro jornadas"
- definiciones: D-23, D-21, D-07
- decision: "Rival: cuando Monterrey va ganando con algo en juego, se puede ir a buscarlo: concede el doble de tiros y de llegadas que al inicio del torneo y crea apenas 0.85 por 90 en ese estado. Staff: proteger la ventaja replegándose no le sale a este equipo; con ventaja le fue mejor cuando siguió atacando (17 tiros por 90 en el arranque)"
Son 3 partidos con ventaja en cada corte, así que es un indicio. En el arranque del torneo Monterrey ganaba atacando: 17 tiros por 90 con ventaja y un gol de balón parado por partido (4 en 4 jornadas). Desde la jornada 5, con la liguilla directa al alcance, el equipo con ventaja baja a 9 tiros por 90 y concede 13, con 14.5 llegadas rivales al área por 90. Los goles de balón parado también se apagaron: 2 en los últimos 7 partidos.

### Contra el top 6 se guarda y no pierde (2-1-0); contra el resto domina y pierde 4 de 8 concediendo 1.44 de peligro
- bloque: M-2
- escenario: rival
- metrica: np_xg_conceded
- cifra: "Top 6 (3 partidos: Atlas, Cruz Azul, América): np_xg 0.91 (p18), np_xg_conceded 1.14 (p45), possession_pct 47.8 % (p34), field_tilt 47.7, press_high_pct 15.7 %, vuln_xg 0.05 (p0), transition_xg_conceded 0.02 (p0), 17.0 faltas (p98), primer cambio al 60' (p95), seq_lane_centro_pct 39.6 % (p92). Resto (8 partidos, 3-1-4): np_xg 1.55 (p95), np_xg_conceded 1.44 (p87), possession_pct 58.1 %, field_tilt 62.0, press_high_pct 25.7 %, corners 6.9 (p99), prog_passes 131.6 (p99), high_recoveries 15.8 (p96)"
- kpi: "1.44 | 1.14 | goles esperados en contra por partido | 87 | Peligro concedido contra rivales fuera del top 6 | contra | contra el top 6"
- definiciones: D-25, D-04, D-11
- decision: "Rival de media tabla para abajo: Monterrey te va a dominar (62 % del territorio, 7 córners) y aun así es ahí donde pierde; el plan es cederle el balón y esperar el error en su espalda. Staff: la versión conservadora contra los grandes (menos presión alta, 17 faltas, cambios al 60) funcionó; el problema es que contra el resto el equipo se abre y concede 1.44, con 8 partidos de muestra"
Tres partidos contra el top 6 es poca muestra, pero el contraste es consistente con todo lo demás: contra Atlas, Cruz Azul y América Monterrey cedió el balón (48 %), bajó la presión alta a 16 % de las rachas y arrancó con un dibujo distinto al 4-2-3-1 las tres veces; no concedió nada al contragolpe y sacó 7 puntos de 9. Contra los otros ocho rivales impuso su modelo completo (132 pases que avanzan, 16 robos en campo rival por partido) y perdió la mitad, porque el peligro concedido subió a 1.44, arriba de la liga.

## Balón parado (M-4)

### El córner es su mejor arma: 0.40 de peligro por partido, el más alto de la liga, y 3 goles en 68 córners
- bloque: M-4
- metrica: corner_xg
- cifra: "corner_xg 0.40 vs 0.18 (p100); xg_per_corner 0.06 vs 0.04 (p95); corners 6.18 vs 4.88 (p92); 68 córners, 40 tiros, 4.4 xG, 3 goles; inswinging 48.5 % (liga 35.6 %), outswinging 26.5 %, corto 14.7 %; por tipo: inswinging 33 córners, 2.07 xG, 3 goles; outswinging 18 córners, 1.66 xG, 0 goles; corto 10 córners, 0.14 xG; desde la izquierda cerrado al centro: 15 córners, 11 tiros, 1.48 xG, 2 goles; sp_xg 0.68 (p94)"
- kpi: "0.40 | 0.18 | goles esperados de córner por partido | 100 | Peligro creado de córner | favor"
- definiciones: D-07, D-12
- decision: "Rival: el córner cerrado desde la izquierda de Monterrey al centro del área es el envío a defender (11 tiros en 15 cobros); poner al mejor cabeceador en el punto de penal y no conceder córners baratos en el último tramo. Staff: el corto no rinde (10 cobros, 0.14 de peligro); cobrar más cerrados y más desde la izquierda, que produce el doble de peligro por córner que la derecha"
En 11 partidos Monterrey cobró 68 córners, más que el 92 % de la liga, y generó con ellos 4.4 goles esperados y 3 goles: el peligro de córner por partido es el más alto de la liga, y también el peligro por cada córner. Prefiere el cerrado (49 % contra 36 % de la liga), y es el que entra: los 3 goles. El abierto genera tiros (15 en 18 cobros) pero no gol. El balón parado completo, con 3 penales (2 goles) y 1 gol de tiro libre, aporta 0.68 de peligro por partido, de los más altos de la liga.

### Concede pocos córners (3.5 por partido) pero le cuestan: 4 goles en 39, uno de cada diez
- bloque: M-4
- metrica: xg_per_corner_conceded
- cifra: "39 córners en contra (3.5 por partido), 14 tiros, 2.38 xG, 4 goles; xg_per_corner_conceded 0.05 vs 0.04 (p90, malo); outswinging desde la derecha al centro: 13 córners, 6 tiros, 1.28 xG, 2 goles; inswinging desde la derecha al centro: 7 córners, 0.60 xG, 1 gol; sp_goals_conceded 0.55 vs 0.45 (p70); sp_xg_conceded 0.39 vs 0.48 (p28); 1 gol concedido tras saque de banda (1 saque con 2 tiros y 0.63 xG); de local sp_xg_conceded 0.20, de visita 0.61"
- kpi: "4 | 3 | goles de córner en 11 partidos | 90 | Goles de córner en contra | contra | a favor"
- definiciones: D-07, D-12
- decision: "Rival: córner abierto desde la derecha al centro del área: en 13 cobros le hicieron 2 goles y 6 tiros. Staff: el peligro concedido de balón parado en total es bajo (0.39, mejor que la liga); el problema es puntual, la defensa del envío abierto al centro; revisar la marca en zona entre el primer poste y el punto de penal"
Monterrey concede 39 córners en 11 partidos, poco más de la mitad de los que cobra, pero cada uno vale más que en la liga: 4 goles en contra, uno de cada diez, cuando a favor anotó 3 en 68. Es una muestra chica (14 tiros concedidos de córner) y un gol puede mover todo, pero 3 de los 4 llegaron del mismo envío, al centro del área desde la derecha. De visita el peligro concedido de balón parado sube a 0.61 contra 0.20 de local.

### El tiro libre no existe: 60 cobros en 11 partidos, 0.38 de peligro acumulado y 1 gol, de los más bajos de la liga
- bloque: M-4
- metrica: fk_indirect_xg
- cifra: "fk_indirect_xg 0.02 vs 0.07 (p1); fk_direct_xg 0.02 (p57); 60 tiros libres (5.5 por partido), 5 directos, 8 tiros desde cobro al área con 0.18 xG y 1 gol, 5 tiros directos con 0.20 xG y 0 goles; saques de banda: 82 (7.5 por partido), 7.45 en zona de peligro (p42), retiene 62 % (p53), 1 gol; en contra 65 saques y retiene 53.8 %"
- kpi: "0.02 | 0.07 | goles esperados por partido | 1 | Peligro de tiro libre al área | contra"
- definiciones: D-07, D-12
- decision: "Rival: la falta lejos del área no es castigo; la que sí hay que evitar es el córner. Staff: con 5.5 tiros libres por partido hay un activo sin usar; diseñar dos jugadas de tiro libre lateral al segundo palo y dejar el disparo directo, que en 5 intentos sumó 0.20 de peligro"
Monterrey saca 5.5 tiros libres por partido y casi no hace nada con ellos: de 60 cobros salieron 13 tiros y 1 gol, y el peligro de tiro libre al área es el más bajo de la liga. 23 cobros desde lejos no produjeron ni un tiro. El saque de banda es normal: 7.5 por partido, 62 % retenidos cerca del área rival, 1 gol en 82. Para un equipo que vive del córner, el tiro libre es la parte del balón parado que falta trabajar.

## Jugadores y cambios (M-5)

### 4-2-3-1 en 8 de 11, pero contra los tres rivales del top 6 cambió el dibujo de inicio y no perdió
- bloque: M-5
- metrica: tactical_shifts
- cifra: "4-2-3-1 en 8 de 11 (73 %); 3-4-2-1 vs Atlas (2-0), 3-5-2 vs Cruz Azul (1-0), 4-1-4-1 vs América (1-1); tactical_shifts 2.18 vs 1.80 (p80), 24 en 11 partidos; cambio real de dibujo en 6 de 11; perdiendo pasa del 4-2-3-1 a 3-4-1-2, 4-1-2-1-2 o 4-2-2-2 después del minuto 65; 1.0 cambios de dibujo cuando ganó (p4), 2.75 cuando perdió (p99) y 4.0 cuando empató (p100)"
- kpi: "2.2 | 1.8 | cambios de dibujo por partido | 80 | Cambios de dibujo dentro del partido | neutro"
- definiciones: SB, D-21, D-25
- decision: "Rival grande: no prepares el 4-2-3-1; contra Atlas, Cruz Azul y América arrancó con tres centrales o con un solo pivote y más gente en medio. Rival del resto: sí verás el 4-2-3-1, y si vas ganando después del 65 espera una línea de tres atrás con dos puntas. Staff: el cambio de dibujo contra los grandes dio 7 de 9 puntos; los 4 cambios por partido en los empates sugieren que ahí busca sin encontrar"
La base es el 4-2-3-1 con doble pivote (Óliver Torres y Pineda) y Cuypers de nueve. Los tres partidos sin ese dibujo fueron exactamente los tres contra rivales del top 6, con 2 triunfos y 1 empate: es el plan específico para los grandes. Dentro del partido mueve el dibujo más que la liga (2.2 por partido), casi siempre perdiendo o empatando; cuando gana casi no toca nada (1 cambio). Son 11 partidos: el patrón contra el top 6 son tres casos, pero tres de tres.

### Perdiendo cambia al descanso y funciona: el peligro creado pasa de 0.11 a 0.45 en los 15 minutos siguientes
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio: 53.1' en promedio (p41); perdiendo 49.0' (mediana 45'), empatando 49.0' (mediana 45'), ganando 58.0' (mediana 61'); contra top 6 al 60', contra el resto al 50.5'. Perdiendo, 15 min antes vs después (3 partidos): xG 0.11 a 0.45, tiros 2.0 a 4.3, xG concedido 0.42 a 0.32, PPDA 14.3 a 6.1, field tilt 73 a 67. Empatando (3): xG 0.30 a 0.03, tiros 3.3 a 1.0, PPDA 10.8 a 19.9. Ganando (5): xG 0.15 a 0.28, xG concedido 0.08 a 0.21. 4.9 cambios por partido, 51 tácticos y 3 por lesión; perdiendo saca al extremo izquierdo (4) y a defensores (lateral derecho 2, central derecho 2, lateral izquierdo 2); ganando saca al mediapunta (4)"
- kpi: "0.45 | 0.11 | goles esperados en 15 minutos | | Peligro creado en los 15 minutos después del primer cambio, perdiendo | favor | antes del cambio"
- definiciones: D-21, D-25, SB
- decision: "Staff: el primer cambio perdiendo (al descanso, sacando un defensor o al extremo izquierdo) es su mejor decisión del partido; mantener el gatillo. El cambio empatando es el que no funciona: el equipo deja de tirar y de presionar después; revisar a quién mete ahí. Rival: si Monterrey va abajo al descanso, los primeros 15 minutos del segundo tiempo son los más peligrosos; sale un defensor y la presión se duplica"
Tres partidos perdiendo y tres empatando al momento del primer cambio: indicio, no ley. Perdiendo, Almeyda no espera: cambia al descanso (mediana al 45) y quita un defensor o al extremo izquierdo; en el cuarto de hora siguiente el equipo tira el doble, crea cuatro veces más y deja dar 6 pases antes de robar en vez de 14. Empatando también cambia al 45, pero el efecto es el inverso: el peligro creado casi desaparece (0.30 a 0.03) y la presión se afloja (10.8 a 19.9). Ganando espera al 61 y saca al mediapunta o al extremo izquierdo para refrescar.

### Once inestable: 3.8 titulares distintos de un partido al siguiente y dos porteros repartidos, Cárdenas 6 y Andrada 5
- bloque: M-5
- metrica: xi_stability
- cifra: "Jaccard entre onces consecutivos 0.53; 3.8 cambios de titular por partido; núcleo (70 % o más de titularidades) de 7 jugadores: Ricardo Chávez 9 titularidades y 695 min, Jesús Corona 9 y 611, Hugo Cuypers 8 y 728, Óliver Torres 8 y 721, Lucas Ocampos 8 y 698, Diego Rossi 8 y 681, Gerardo Arteaga 8 y 671; Pineda, Orellano, Guzmán y Salcedo 7; porteros Cárdenas 6 y Andrada 5; centrales izquierdos Salcedo 7, Aceves 5, Rodríguez 4"
- kpi: "3.8 | | titulares distintos | | Cambios en el once de un partido al siguiente | contra"
- definiciones: SB
- decision: "Staff: la rotación es alta para un modelo que depende de la coordinación de la presión; fijar al portero y a la pareja de centrales (Guzmán con Salcedo o Aceves) sería el primer paso. Rival: el ataque sí es fijo (Cuypers, Rossi, Ocampos, Corona); la zaga y la portería cambian, ahí está el punto débil de coordinación"
El núcleo está arriba: Cuypers, Rossi, Ocampos, Corona, Óliver Torres y los dos laterales (Chávez y Arteaga) son titulares en 8 o 9 de 11. Lo que no se fija es la zaga central ni la portería: dos porteros casi a partes iguales y tres centrales izquierdos distintos (Salcedo, Aceves, Rodríguez). Parte de la rotación viene de los cambios de dibujo contra el top 6 (tres centrales), parte es búsqueda. Con 11 partidos, una estabilidad del once de 0.53 significa que de un partido al siguiente cambian casi 4 de los 11 nombres.

## Partidos y rivales

### Récord 5-2-4 con balance de peligro +0.16: ningún triunfo con menos peligro que el rival y una derrota creando más
- bloque: M-2
- metrica: xgd
- cifra: "xgd 0.16 vs -0.03 (p70); 19 goles a favor y 16 en contra; mejor partido 6-1 a Juárez (xG 2.51 a 0.17); peor 1-2 en Necaxa (0.19 a 3.07, 33 % de posesión, field tilt 19); única derrota creando más: 1-3 con Atlético San Luis (2.12 a 1.56); rachas máximas de 2 triunfos y 2 derrotas seguidas; 10 técnicos rivales distintos, 1 partido con cada uno"
- kpi: "0.16 | -0.03 | goles esperados de diferencia por partido | 70 | Balance entre el peligro que crea y el que concede | neutro"
- definiciones: D-20, D-25
- decision: "Rival: el plan de Necaxa (quitarle el balón y el territorio: 33 % de posesión para Monterrey) es el único que lo hundió por completo. Staff: los resultados reflejan el juego, sin suerte de por medio; en 3 de las 4 derrotas se concedió más de 1.5 de peligro (1.56, 2.53 y 3.07) y la cuarta, en León, se perdió creando 1.63"
Con 11 partidos, el equipo está donde su juego dice: creó 15.1 goles esperados sin penal y concedió 14.9, y el récord es apenas positivo. Enfrentó a 10 técnicos distintos y a ninguno dos veces. Contra los tres rivales del top 6 (Atlas, Cruz Azul, América) no perdió; las cuatro derrotas fueron contra equipos del resto de la tabla. El partido en Necaxa es el único donde el rival le quitó el balón: 33 % de posesión y 19 % del juego en campo rival.
