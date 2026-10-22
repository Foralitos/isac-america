# Hallazgos — Milito en la Liga MX (Apertura 2025 → Apertura 2026, 52 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Gabriel Milito con datos: Guadalajara (Apertura 2025, 19; Clausura 2026, 21; Apertura 2026, 12). Récord 26-12-14. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas, "presión tras pérdida" = contrapresión); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Vive en campo rival: 62 % de dominio territorial y 18 llegadas al área por partido, de los más altos de la liga
- bloque: M-1
- metrica: field_tilt
- cifra: "field tilt 61.97 % vs 49.60 de liga (p94); posesión 57.27 % vs 49.77 (p94); 18.04 entradas al área vs 13.99 (p93); 117.13 pases progresivos vs 100.39 (p89); 59.27 % de secuencias llegan al último tercio vs 54.96 (p87); 84.6 secuencias por partido vs 80.3 (p82)"
- kpi: "62 % | 50 % | del juego en campo rival | 94 | Dominio territorial: parte del juego que pasa cerca del área rival | neutro | liga"
- definiciones: D-01, D-02, D-10, D-14
- decision: "Rival: no intentar quitarle el balón en su campo; esperarlo ordenado, hacerle el partido largo y aceptar que va a tener 57 % de posesión. Staff: el dominio ya está construido; el margen está en que esa posesión produzca más tiros desde dentro del área cuando el rival se cierra con diez"
Es el rasgo más estable del ciclo: el dominio territorial fue 57, 64 y 65 en los tres torneos y la posesión 54, 59 y 60 %. Avanza con 117 pases que ganan metros por partido (arriba de la liga) y 6 de cada 10 ataques llegan cerca del área rival. No es un equipo de contragolpe ni de regate: es un equipo que empuja al rival a su área y se queda ahí.

### Peligro creado 1.58 por partido con tiros de calidad: 0.10 de peligro por tiro, de los más altos de la liga
- bloque: M-1
- metrica: np_xg
- cifra: "xG sin penal 1.58 vs 1.14 (p95); 15.92 tiros sin penal vs 13.21 (p88); xG por tiro 0.10 vs 0.09 (p91); 17.35 % de secuencias terminan en tiro vs 15.32 (p87); 40.84 % de tiros fuera del área vs 42.77 (p38); OBV ofensivo 1.69 vs 1.42 (p90); Clausura 2026 xG 1.77 y 39 goles en 21 partidos"
- kpi: "1.58 | 1.14 | goles esperados por partido | 95 | Peligro creado por partido | favor | liga"
- definiciones: D-02, D-12
- decision: "Rival: defender el área con gente y no la línea de medio campo; lo que le hace daño es el tiro cercano, no el disparo lejano. Staff: la calidad del tiro es la ventaja estructural; no cambiarla por volumen desde fuera cuando el partido se cierra"
No tira más que nadie, tira mejor: 16 tiros por partido (arriba de la liga) con 4 de cada 10 desde fuera del área, menos que la liga. En el Clausura 2026 el peligro subió a 1.77 por partido y el equipo anotó 39 goles en 21 partidos. El techo lo marcó el 5-0 a León del 19 de marzo de 2026 con 5.07 de peligro creado contra 0.10.

### Concede 10.6 tiros y 10.4 llegadas al área por partido, de los más bajos de la liga
- bloque: M-2
- metrica: shots_conceded
- cifra: "10.58 tiros concedidos vs 13.60 (p7); 10.42 entradas al área del rival vs 14.20 (p7); xG concedido sin penal 0.85 vs 1.17 (p11); OBV concedido 1.09 vs 1.44 (p5); diferencia de xG 0.73 vs -0.03 (p95); 58.06 % de tiros concedidos desde el área vs 58.18 (p47); directness permitida 0.57 vs 0.59 (p13)"
- kpi: "10.6 | 13.6 | tiros en contra por partido | 7 | Tiros que concede por partido | favor | liga"
- definiciones: D-12, D-04
- decision: "Rival: las llegadas van a ser pocas, hay que hacerlas valer: llegar con dos o tres jugadores al área y no centrar por centrar. Staff: la defensa es el balón; cuando el rival lo tiene más (de visita con ventaja, contra los de arriba) las cifras se acercan a la liga"
El balance de peligro (creado menos concedido) es de 0.73 por partido, de los más altos de la liga. Defiende con volumen bajo, no con calidad: el tiro que concede sale desde el área en la misma proporción que al resto (58 %). Lo que no deja es llegar: 10 entradas al área del rival por partido contra 14 de la liga, porque el rival casi no tiene el balón.

### Presiona muy arriba pero pocas veces: a 60 metros, 1 de cada 4 rachas en campo rival y solo 134 presiones por partido
- bloque: M-2
- metrica: press_height
- cifra: "altura de presión 60.26 m vs 55.81 (p97); fases de presión altas 24.49 % vs 16.92 (p96); línea defensiva 52.64 m vs 47.89 (p94); presiones 133.77 vs 151.51 (p18); fases de presión 25.13 vs 29.32 (p22); PPDA 14.01 vs 14.03 (p56); fases con recuperación 33.08 % vs 31.16 (p76); presiones en último tercio 39.23 vs 33.90 (p77)"
- kpi: "60 | 56 | metros desde su portería | 97 | Altura a la que presiona | neutro | liga"
- definiciones: D-05, D-05b, D-13
- decision: "Rival: la presión es alta pero no constante; salir jugando con paciencia funciona si se aguanta la primera racha, y la pelota larga regala el balón a una línea de 53 metros que tiene todo el campo por delante. Staff: la defensa adelantada depende de ganar la segunda pelota; medir los balones a la espalda como riesgo propio del modelo"
No es un equipo de presión, es un equipo de posición que defiende lejos de su portería. Presiona menos veces que la liga porque el rival tiene el balón menos tiempo, pero cuando arranca una racha lo hace en campo rival (24 % de las rachas, de los más altos) y roba en 33 % de ellas, arriba de la liga. La línea defensiva a 53 metros es de las más adelantadas de la liga: achica el campo y expone la espalda.

### Salida corta: solo 34 % de los pases del portero son largos, de los más bajos de la liga
- bloque: M-1
- metrica: gk_long_pct
- cifra: "salida larga 34.09 % vs 46.78 (p9); 41.67 % de secuencias nacen en tercio defensivo vs 44.52 (p18); 19.10 % nacen en último tercio vs 17.18 (p84); precisión de pase 82.46 % vs 78.70 (p83); pases bajo presión completados 72.49 % vs 70.05 (p72); directness 0.57 vs 0.59 (p30)"
- kpi: "34 % | 47 % | de los pases del portero | 9 | Salida larga del portero | neutro | liga"
- definiciones: D-02, D-10
- decision: "Rival: presionar a Rangel y a los tres centrales hombre a hombre en la salida es la forma más barata de generarle peligro; contra los seis de arriba y en liguilla es donde más lo sufre. Staff: la salida corta es identidad; ensayar la segunda opción (lateral largo al carrilero) para cuando lo vienen a buscar"
Rangel juega corto y el equipo construye desde atrás con 82 % de pases completados, arriba de la liga. Aun así, menos ataques que la liga nacen en su propio campo (42 %) y más nacen cerca del área rival (19 %): la posesión empieza abajo pero se asienta arriba y se recicla ahí. La verticalidad está por debajo de la liga: prefiere dar una vuelta más que jugar directo.

### Lo que concede llega en contragolpe: 0.54 de los 0.85 goles esperados en contra, con presión tras pérdida en la media
- bloque: M-3
- metrica: transition_xg_conceded
- cifra: "xG concedido en transición 0.54 vs 0.52 (p59) sobre un xG concedido sin penal de 0.85; tiros rivales en 10 s tras pérdida 2.12 vs 2.21 (p44); xG rival en 10 s tras pérdida 0.18 vs 0.18 (p61); contrapresiones 30.62 vs 32.02 (p40); contrapresiones con regain 26.50 % vs 27.39 (p41); en derrotas 0.96 (p99); Apertura 2026 xG rival tras pérdida 0.25 (p90) y contrapresiones 25.42 (p5)"
- kpi: "0.54 | 0.52 | goles esperados en contragolpe por partido | 59 | Peligro concedido en contragolpe | contra | liga"
- definiciones: D-04, D-06
- decision: "Rival: el plan es uno: aguantar, robar y correr a la espalda de la línea de 53 metros antes de que el equipo se arme; casi dos de cada tres goles esperados que concede nacen así. Staff: la presión tras pérdida es el punto flaco del modelo; con tanta posesión debería estar arriba de la liga y está en la media, y en el Apertura 2026 bajó a de las más bajas"
Concede poco en total, pero lo que concede tiene una sola forma: el contragolpe. La presión tras pérdida (31 por partido) y la recuperación tras esa presión (27 %) están en la media de la liga, que es poco para un equipo que pierde el balón en campo rival. En las 14 derrotas el peligro en contragolpe fue 0.96 por partido, de los más altos de la liga; en las 26 victorias, 0.32.

### Roba 14 balones en campo rival por partido, arriba de la liga, pero solo uno de cada tres acaba en tiro
- bloque: M-3
- metrica: high_recoveries
- cifra: "recuperaciones altas 13.96 vs 11.91 (p85); recuperaciones altas con tiro en 10 s 33.29 % vs 33.25 (p49); xG en transición 0.57 vs 0.51 (p70) sobre 1.58 de xG total; transiciones 63.15 vs 63.24 (p49); 3.13 s de recuperación a tiro vs 3.30 (p34); conversión de transición 6.91 % vs 6.34 (p72); empatando xG en transición 0.61 por 90 (p82), ganando 0.45"
- kpi: "14.0 | 11.9 | robos en campo rival por partido | 85 | Robos en campo rival por partido | neutro | liga"
- definiciones: D-03, D-10
- decision: "Rival: tras perderla cerca del área propia, lo peligroso no es el tiro inmediato sino que el equipo de Milito reinicia la posesión desde ahí; cerrar el pase atrás más que el tiro. Staff: un tercio de los robos altos no termina en nada; un gatillo de ataque directo tras robo (dos pases máximo) convertiría dominio en peligro"
Su ataque no vive del robo: del 1.58 de peligro por partido, solo 0.57 llega en los diez segundos siguientes a recuperar, como la liga. Roba alto más que el 85 % de la liga porque defiende a 53 metros, pero convierte esos robos en tiro en la misma proporción que cualquiera. Cuando el marcador está empatado el peligro tras robo sube a 0.61 por 90; cuando va ganando baja a 0.45.

## Consistencia y variabilidad (D-20 a D-26)

### Ganando de visita se encierra: crea 0.60 y concede 1.29 por cada 90 minutos, el doble que ganando en casa
- bloque: M-2
- escenario: localia
- metrica: np_xg_conceded
- cifra: "Visita ganando (753 min en 16 partidos): xG 0.60, xG concedido 1.29, 12.31 tiros concedidos, 13.98 entradas al área del rival, 8.48 entradas propias, 72.16 pases progresivos, 107.05 presiones por 90. Local ganando (1022 min en 15 partidos): xG 1.54, xG concedido 0.81, 10.47 tiros concedidos, 8.45 entradas rivales, 99.91 pases progresivos. Visita empatando: xG 1.35, 94.34 pases progresivos. Récord local 15-5-6, visita 11-7-8; xG concedido en transición local 0.41 (p25), visita 0.67 (p85)"
- kpi: "1.29 | 0.81 | goles esperados en contra por cada 90 minutos | | Peligro concedido cuando va ganando de visita | contra | ganando de local"
- definiciones: D-20, D-21, D-04
- decision: "Rival: si Milito se pone arriba en tu cancha el partido no está perdido: el equipo se mete atrás, deja 14 llegadas al área por 90 y concede en contragolpe; meter gente y cargar el segundo palo. Staff: de visita con ventaja el equipo pasa de 94 pases que avanzan por 90 a 72 y se queda sin salida; hace falta un plan de tener el balón arriba, no de proteger el resultado"
De local gana 15 de 26 y de visita 11 de 26, y la diferencia está en cómo administra la ventaja. En casa, ganando, sigue creando 1.54 por 90 y concede 0.81; fuera, ganando, el peligro creado se cae a 0.60 y el concedido sube a 1.29, con 14 llegadas al área del rival por 90, más que cualquier otro estado del partido. El peligro concedido en contragolpe de visita (0.67) está arriba de la liga; de local (0.41), abajo.

### Perdiendo presiona el doble: deja dar 7 pases antes de robar, ganando deja 17
- bloque: M-2
- escenario: marcador
- metrica: ppda_own
- cifra: "PPDA perdiendo 6.90 (p8), empate 12.62 (p44), ganando 17.00 (p82); recuperaciones altas por 90: perdiendo 16.79 (p94), empate 11.19 (p84), ganando 7.25 (p55); presiones en último tercio perdiendo 38.96 vs ganando 26.56; presiones totales ganando 110.64 (p9), empate 130.71; contrapresiones perdiendo 29.63 vs ganando 23.52"
- kpi: "6.9 | 17.0 | pases que deja dar antes de robar | 8 | Intensidad de presión cuando va perdiendo | neutro | cuando va ganando"
- definiciones: D-21, D-05b, D-10
- decision: "Rival: con ventaja contra Milito, no salir jugando: va a presionar con todo y roba 17 balones por 90 en campo rival; pelota larga y pelear la segunda jugada. Staff: la versión que presiona existe y es de las más intensas de la liga; hoy solo aparece cuando va abajo en el marcador"
Es el corte con más diferencia de todo el perfil. Ganando, el equipo deja dar 17 pases antes de robar (arriba de la liga en permisividad), hace 111 presiones por 90 (de las más bajas) y roba 7 balones en campo rival. Perdiendo, deja dar 7, roba 17 en campo rival y presiona 39 veces por 90 cerca del área rival. No es un equipo que presione por identidad; presiona por necesidad.

### Perdiendo se vuelve un equipo de centros: 22 por cada 90 minutos, de los más altos de la liga, y 8 cuando gana
- bloque: M-1
- escenario: marcador
- metrica: cross_ratio
- cifra: "Perdiendo (1254 min en 23 partidos): 21.95 centros por 90 (p98), 53.09 conducciones progresivas (p94), directness 0.57 (p90), 20.16 entradas al área (p93), 18.94 tiros (p93), 14.42 regates (p63), xG 1.49 (p89). Empate (2244 min): xG 1.56 (p96), 13.96 centros (p90), OBV ofensivo 1.61 (p96). Ganando (1776 min en 31 partidos): 7.81 centros, 10.64 tiros, 12.62 entradas al área, xG 1.14 (p66)"
- kpi: "22 | 7.8 | centros por cada 90 minutos | 98 | Centros cuando va perdiendo | neutro | cuando va ganando"
- definiciones: D-21, D-14, D-12
- decision: "Rival: ganándole, defender el área contra el centro con los centrales de cara al balón y un hombre fijo en el segundo palo; llega el doble pero el peligro por 90 no sube. Staff: perdiendo el equipo llega 20 veces al área, pero el peligro por 90 (1.49) es menor que empatando (1.56): el centro es la vía fácil, no la mejor"
Cuando va abajo cambia la forma de atacar: triplica los centros, duplica las conducciones que ganan metros y se vuelve más vertical (de los más directos de la liga en ese estado). Tira 19 veces por 90, pero cada tiro vale menos: el peligro total perdiendo es menor que empatando, cuando el equipo juega su fútbol de posición. Ganando se apaga: 11 tiros y 13 llegadas por 90.

### Sale a morder: 50 presiones cerca del área rival por 90 en los primeros 15 minutos, 27 en los últimos
- bloque: M-2
- escenario: momento
- metrica: pressures_final_third
- cifra: "Presiones en último tercio por 90: 0-15 50.19 (p87), 15-30 37.38 (p78), 30-45 29.18, 45-60 40.62 (p88), 60-75 29.54, 75-90 27.19. Presiones totales 0-30 134.08 (p24) vs 60-90 104.39 (p14). xG por 90: 0-15 1.57 (p97), 30-45 1.57 (p94), 60-75 1.05 (p52), 75-90 1.43 (p86). xG concedido por 90: 0-30 0.85, 30-60 0.95, 60-90 0.95. xG concedido en transición 75-90 0.36 (p24)"
- kpi: "50.2 | 27.2 | presiones cerca del área rival por cada 90 minutos | 87 | Presión cerca del área rival en los primeros 15 minutos | neutro | del minuto 75 al 90"
- definiciones: D-22, D-05, D-10
- decision: "Rival: los primeros 15 minutos no son para salir jugando: despejar, aguantar y atacar del 60 al 75, cuando su peligro cae a la media de la liga. Staff: la presión alta dura un cuarto de hora y vuelve al arranque del segundo tiempo; el tramo 60-75 es donde el equipo menos produce y donde entran los cambios"
Después de cada silbatazo inicial la presión en campo rival se dispara (50 por 90 al arranque, 41 al salir del descanso) y luego baja de forma constante. El peligro creado sigue la misma curva: de los más altos de la liga en la primera media hora, en la media entre el 60 y el 75, y repunta al final. Lo que concede casi no cambia por tramo (0.85 a 0.95 por 90), y el contragolpe en contra es más bajo al final del partido, no más alto.

### Pierde por el contragolpe: concede 0.96 tras robo rival en las derrotas, de los más altos, y 0.32 en las victorias
- bloque: M-3
- escenario: resultado
- metrica: transition_xg_conceded
- cifra: "Perdió 14: xG concedido en transición 0.96 (p99), xG rival en 10 s tras pérdida 0.32 (p96), goles concedidos de balón parado 0.71 (p91), 62.76 % de tiros concedidos desde el área (p85), PPDA 9.73 (p3), 69.64 transiciones (p90), 1.16 centros por entrada al área (p87), goles de balón parado a favor 0.14 (p2). Ganó 26: 0.32 (p7), 0.10 (p9), 0.19 (p7), PPDA 16.45 (p80), goles de balón parado 0.65 (p93), xG en transición 0.71 (p89). Perdió creando más peligro que el rival en 6 partidos"
- kpi: "0.96 | 0.32 | goles esperados en contragolpe por partido | 99 | Peligro concedido en contragolpe en los partidos que perdió | contra | en los que ganó"
- definiciones: D-04, D-07, D-05b
- decision: "Rival: la receta contra Milito está escrita: cerrarse, no concederle balón parado y correr al robar; sus derrotas son partidos donde presionó más (deja dar 10 pases) y lo castigaron a la espalda. Staff: cuando va abajo el equipo sube la presión y se desordena atrás; el balón parado a favor (0.65 goles cuando gana, 0.14 cuando pierde) es el segundo termómetro del resultado"
En las derrotas presiona más que en las victorias, no menos: deja dar 10 pases contra 16. Lo que se rompe es la transición defensiva: el peligro justo después de perder el balón se triplica (0.10 a 0.32), el contragolpe en contra se triplica (0.32 a 0.96) y los goles concedidos de balón parado casi se cuadruplican. Seis de las 14 derrotas fueron creando más peligro que el rival.

### En liguilla el equipo se desarma: 1 ganado de 6, 65 % de pases bajo presión y con ventaja concede 2 goles esperados por 90
- bloque: M-1
- escenario: tabla
- metrica: pup_success_pct
- cifra: "Liguilla (6 partidos, 1-2-3): pases bajo presión completados 65.28 % (p8), conducciones progresivas 32.17 (p17), 51.41 % de secuencias llegan al último tercio (p19), recuperaciones altas 10.67 (p27), 47.54 % de secuencias nacen en tercio defensivo (p84), recuperaciones altas con tiro 42.38 % (p99). Ganando en liguilla (119 min en 4 partidos): xG 0.60, xG concedido 1.99, 15.13 tiros concedidos, 17.40 entradas al área del rival por 90. Semis (2, 0-1-1): PPDA 7.53, 53.99 % de secuencias nacen en tercio defensivo. Arranque de torneo (12, 7-2-3): recuperaciones altas 15.17 (p93), pases bajo presión 74.35 % (p87)"
- kpi: "65 % | 74 % | de los pases bajo presión que llegan | 8 | Pases que llegan bajo presión en liguilla | contra | en las primeras cuatro jornadas"
- definiciones: D-23, D-24, D-21
- decision: "Rival en liguilla: presionarlo alto; en sus seis partidos de liguilla la salida se rompió como en ningún otro corte y, con ventaja, concedió 2 goles esperados por 90. Staff: seis partidos son indicio, no ley, pero el patrón coincide con el de los rivales de arriba; el plan de liguilla necesita una salida alternativa y una forma de defender la ventaja sin meterse atrás"
Son seis partidos y hay que leerlos como indicio. En liguilla el equipo completa 65 % de los pases bajo presión (de los más bajos de la liga, contra 74 % en las primeras jornadas), la mitad de los ataques nacen en su propio campo y solo la mitad llegan cerca del área rival. Cuando se pone arriba se encierra más que nunca: 17 llegadas del rival por 90. Contra Tigres en liguilla ganó 2-0 de local con 2.60 de peligro creado y perdió 1-3 de visita con 0.97.

### Contra los seis de arriba gana 4 de 18: concede 1.06 y el doble de peligro justo tras perderla
- bloque: M-2
- escenario: rival
- metrica: np_xg_conceded
- cifra: "Top 6 (18 partidos, 4-6-8): xG concedido 1.06 (p34), 12.89 entradas al área del rival (p32), xG rival en 10 s tras pérdida 0.27 (p92), 2.56 tiros rivales tras pérdida (p77), 47.30 % de tiros fuera del área (p78), 1.05 centros por entrada (p76), goles de balón parado 0.22 (p8), saques en zona de peligro retenidos 50.69 % (p12), 2.69 s de robo a tiro (p9). Resto (34, 22-6-6): xG concedido 0.75 (p3), 9.12 entradas (p1), 0.14 tras pérdida (p26), 37.41 % fuera del área (p14), 0.53 goles de balón parado (p76). Toluca 0-0-3, Cruz Azul 0-2-4, Tigres UANL 1-2-2"
- kpi: "1.06 | 0.75 | goles esperados en contra por partido | 34 | Peligro concedido contra rivales del top 6 | contra | contra el resto"
- definiciones: D-25, D-04, D-12
- decision: "Rival de arriba: el plan ya funciona: robarle y correr (0.27 de peligro justo tras pérdida), obligarlo a tirar de fuera (47 %) y no concederle balón parado. Staff: contra los grandes el equipo se vuelve previsible: más centros, más tiros lejanos, menos balón parado a favor y la mitad de los saques de banda perdidos; hace falta un plan de ataque específico, no solo defensivo"
Contra el resto de la liga es casi perfecto (22 ganados de 34, concede 0.75, de los más bajos). Contra los seis de arriba el peligro concedido sube 40 % y la mitad de los tiros propios salen desde fuera del área. No ha ganado a Toluca en tres partidos ni a Cruz Azul en seis. Lo que cambia no es el dominio, es lo que pasa al perder el balón: 0.27 de peligro en los diez segundos siguientes, de los más altos de la liga.

### Cada torneo presiona menos: de 157 presiones por partido en el Apertura 2025 a 110 en el Apertura 2026, de las más bajas
- bloque: M-2
- escenario: torneo
- metrica: pressures
- cifra: "Apertura 2025 (19, 9-3-7): presiones 157.37 (p62), fases de presión 32.00 (p69), contrapresiones 36.26 (p82), PPDA 15.6, xG 1.51, xG concedido 0.83, posesión 54 %. Clausura 2026 (21, 12-4-5): 125.86 (p8), 22.71 (p8), 28.48 (p17), PPDA 12.7, xG 1.77, concedido 0.78, fases con recuperación 36.40 % (p96), posesión 59 %, field tilt 64. Apertura 2026 (12, 5-5-2): 110.25 (p1), 18.50 (p0), 25.42 (p5), PPDA 13.8, xG 1.36, concedido 1.02, xG rival tras pérdida 0.25 (p90), posesión 60 %, field tilt 65"
- kpi: "110 | 157 | presiones por partido | 1 | Presiones por partido en el Apertura 2026 | contra | en el Apertura 2025"
- definiciones: D-26, D-05, D-06
- decision: "Staff: el mejor torneo (Clausura 2026, líder en la última jornada) fue el de presión más eficaz, no el de más presión: 36 % de rachas con robo, de los más altos. En el Apertura 2026 la presión bajó otro escalón, el peligro concedido subió de 0.78 a 1.02 y el equipo tiene más balón pero defiende peor sin él. Rival: a la versión actual se le puede salir jugando; a la de hace un año no"
El modelo se movió de presionar a tener el balón: la posesión subió de 54 a 60 % y las presiones cayeron un tercio. En medio quedó el Clausura 2026, el torneo del título de la fase regular, con la intensidad de presión más alta del ciclo (deja dar 12.7 pases) y 36 % de rachas que terminan en robo. El Apertura 2026 es el torneo con menos presión tras pérdida (25 por partido, de las más bajas) y el de más peligro concedido justo tras perder el balón.

## Balón parado (M-4)

### Córners: 6.4 por partido, de los más altos de la liga, y 13 goles en 52 partidos con tres cobros distintos
- bloque: M-4
- metrica: corner_xg
- cifra: "córners 6.37 vs 4.88 (p94); xG de córner 0.27 vs 0.18 (p90); xG por córner 0.04 vs 0.04 (p76); 331 córners, 13 goles; 150 tiros de córner, xG 14.0, 12 goles; inswinging 34.95 % (p51), cortos 20.84 % (p80). Derecha inswinging al centro: 62 córners, 20 tiros, xG 2.76, 3 goles. Izquierda outswinging al centro: 54, 30 tiros, xG 2.35, 1 gol. Derecha corto: 34, 21 tiros, xG 1.49, 3 goles. Izquierda inswinging al centro: 29, 15 tiros, xG 2.05, 0 goles. Local 7.58 córners (p99), visita 5.15 (p62)"
- kpi: "0.27 | 0.18 | goles esperados de córner por partido | 90 | Peligro de córner por partido | favor | liga"
- definiciones: D-07
- decision: "Rival: el córner de Milito es volumen (uno y medio más que la liga por partido) y tres cobros distintos; el corto por derecha es el que más tiro genera por cobro (21 en 34): defenderlo con dos hombres. Staff: el cobro cerrado desde la izquierda lleva 29 cobros, 2 goles esperados y ningún gol; es mala suerte, no mal cobro, no cambiarlo"
Doce de los 22 goles de balón parado del ciclo son de córner. El cobro más usado es el cerrado desde la derecha (62), pero el que más remate produce por cobro es el corto desde la derecha, 21 tiros en 34 cobros. Uno de cada cinco córners es corto, arriba de la liga. De local saca 7.6 córners por partido, de los más altos de la liga, consecuencia directa del dominio territorial.

### El saque de banda es un arma: 10 goles en jugadas que nacen de un saque y peligro de los más altos de la liga
- bloque: M-4
- metrica: throwin_xg
- cifra: "xG tras saque de banda 0.05 vs 0.02 (p91); 391 saques de banda en zona de peligro (7.52 por partido, p45), 10 goles, retiene 62.4 % (p56); izquierda lejos 162 saques, 27 tiros, xG 2.85, 4 goles; derecha lejos 133, 21 tiros, xG 2.65, 3 goles; local 0.07 (p98), visita 0.03 (p65); Clausura 2026 0.08 (p98); contra top 6 retiene 50.69 % (p12), contra el resto 69.23 % (p81)"
- kpi: "0.05 | 0.02 | goles esperados tras saque de banda por partido | 91 | Peligro tras saque de banda | favor | liga"
- definiciones: D-07
- decision: "Rival: el saque de banda cerca del área es jugada ensayada: marcar al que recibe de espaldas y al tercer hombre, no al que saca; contra los de arriba pierde la mitad de esos saques y ahí se le puede robar. Staff: el saque de banda produce más que el tiro libre (10 goles contra 2); vale tener un segundo receptor ensayado para cuando le cierran el primero"
No saca más veces que la liga cerca del área (7.5 por partido, como la liga), pero lo que pasa después vale más del doble: 10 goles en 52 partidos en jugadas que arrancan con un saque de banda. La banda izquierda, la de Bryan González, es la más productiva (4 goles). En el Clausura 2026 el peligro tras saque fue 0.08 por partido, de los más altos de la liga.

### Balón parado en contra: de local concede 0.23 de peligro, de los más bajos de la liga, y de visita el doble
- bloque: M-4
- escenario: localia
- metrica: sp_xg_conceded
- cifra: "xG concedido de balón parado local 0.23 (p1), visita 0.46 (p48), total 0.34 vs 0.48 (p19); goles concedidos de balón parado local 0.19 (p7), visita 0.46 (p56), total 0.33 (p29); 180 córners en contra (3.5 por partido), 4 goles; 75 tiros de córner concedidos, xG 5.0; 12 penales en contra, 9 goles; 217 tiros libres en contra (4.2 por partido), 4 goles; xG por córner concedido 0.03 vs 0.04 (p28)"
- kpi: "0.23 | 0.46 | goles esperados de balón parado en contra por partido | 1 | Peligro concedido de balón parado de local | favor | de visita"
- definiciones: D-20, D-07
- decision: "Rival: de visita en Guadalajara el balón parado no es camino: 4 goles de córner en 180 cobros; de local contra el Guadalajara sí vale cargar el área, concede el doble. Staff: 9 de los 17 goles concedidos a balón parado fueron penales; el problema no es defender el córner sino la falta dentro del área"
Concede 3.5 córners por partido porque el rival casi no llega, y los defiende bien: 4 goles en 180. De los 17 goles concedidos a balón parado en el ciclo, 9 son penales (12 señalados), 4 de córner, 2 de tiro libre directo y 1 de tiro libre al área. La diferencia de local a visita es la más grande del perfil en balón parado: en casa el peligro concedido es de los más bajos de la liga, fuera es el de la liga.

### Tiro libre sin premio: 274 cobros, 34 remates desde tiro libre al área y 2 goles, los dos directos
- bloque: M-4
- metrica: fk_indirect_xg
- cifra: "xG de tiro libre indirecto 0.05 vs 0.07 (p33); xG de tiro libre directo 0.02 vs 0.02 (p63); 274 tiros libres a favor (5.3 por partido), 30 directos, xG 3.7, 2 goles; remates desde tiro libre al área 34, xG 2.6, 0 goles; tiros libres directos 30, xG 1.0, 2 goles; local 0.08 (p63), visita 0.02 (p2)"
- kpi: "2 | 13 | goles en 52 partidos | 33 | Goles de tiro libre | contra | goles de córner"
- definiciones: D-07
- decision: "Rival: la falta lejos del área no castiga; cortar la jugada antes de que llegue a zona de centro es barato. Staff: 34 remates de tiro libre al área sin gol en 52 partidos; con el volumen de córner que tiene, el tiro libre es el balón parado donde más hay que ganar"
Es el único balón parado donde está por debajo de la liga. Cobra 5.3 tiros libres por partido, la mayoría lejos del área, y el peligro que generan los cobros al área (0.05 por partido) está abajo de la liga. Los dos goles del ciclo llegaron de tiro directo; los 34 remates tras cobro al área no produjeron ninguno. De visita el tiro libre al área casi desaparece: 0.02 de peligro por partido, de los más bajos.

## Jugadores y cambios (M-5)

### Línea de tres siempre: 3-4-2-1 en 29 de 52 partidos, 3-5-2 en 10, y cambia de dibujo en 24
- bloque: M-5
- metrica: tactical_shifts
- cifra: "Dibujo inicial 3421 en 29 (56 %), 352 en 10 (19 %), 3412 en 5 (10 %), 4231 en 3 (6 %), 343 en 2, 442 en 2, 4141 en 1; cambio real de dibujo en 24 de 52; 85 cambios de dibujo en 52 partidos (1.63 por partido vs 1.80, p34); ganando tramo 80: 352 42 %, 3421 38 %; ganando tramo 90: 352 48 %; perdiendo tramo 60: 3412 23 %, 352 22 %; perdiendo tramo 90: 3412 30 %; Clausura 2026 3421 en 13 de 21"
- kpi: "29 | 52 | partidos | 34 | Partidos que arranca en 3-4-2-1 | neutro | partidos totales"
- definiciones: SB, D-21
- decision: "Rival: siempre tres centrales y dos carrileros; atacar la espalda de los carrileros es atacar su dibujo. Con ventaja después del 75 pasa a 3-5-2 (quita un mediapunta, mete un medio); perdiendo pasa a 3-4-1-2 con dos puntas. Staff: el cambio a 3-5-2 ganando coincide con el tramo en que de visita concede más; revisar si protege o solo cede terreno"
Arranca con línea de tres en 46 de 52 partidos; el 3-4-2-1 es el dibujo base en los tres torneos (8 de 19, 13 de 21, 8 de 12). Cambia de dibujo menos que la liga (1.6 por partido, como la liga) y cuando lo hace es tarde: ganando, el 3-5-2 pasa a ser el dibujo principal a partir del minuto 80; perdiendo, el 3-4-1-2 con dos delanteros aparece desde el minuto 60.

### Perdiendo cambia al descanso: primer cambio al minuto 45 de mediana, y saca a un central
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio perdiendo n=15 media 50.9' mediana 45'; empate n=15 media 53.1' mediana 58'; ganando n=22 media 57.0' mediana 56'; total 54.13' vs 53.87 (p52). Perdiendo saca Left Center Back 13, Right Wing Back 12, Right Center Back 7, Left Wing Back 7, Center Forward 6. Perdiendo, 15 min antes vs después del primer cambio: xG 0.19 a 0.24, xG concedido 0.22 a 0.12, tiros 2.7 a 3.7, PPDA 14.2 a 12.7, field tilt 74 a 69. Directa alcanzable: primer cambio al 50.1'; arranque de torneo 56.8'. Todos los cambios perdiendo n=81, minuto medio 62.0'; ganando n=113, 69.4'"
- kpi: "45' | 56' | minuto del primer cambio (mediana) | | Minuto del primer cambio cuando va perdiendo | favor | cuando va ganando"
- definiciones: D-21, SB
- decision: "Rival: si Milito va perdiendo al descanso, el segundo tiempo arranca con otro equipo: un central menos y dos puntas; ajustar la marca en el entretiempo, no al minuto 60. Staff: el cambio perdiendo funciona (más tiros y la mitad de peligro concedido en los 15 minutos siguientes); mantener el gatillo al descanso"
Hace 4.9 cambios por partido, 239 tácticos y 16 por lesión. Perdiendo no espera: la mitad de las veces el primer cambio entra al descanso, y los que salen son centrales (20 de los cambios perdiendo sacan a un central) y carrileros. El efecto es el que busca: los tiros suben de 2.7 a 3.7 en 15 minutos y el peligro concedido baja a la mitad. Cuando la liguilla directa es alcanzable el primer cambio llega antes (50') que en el arranque del torneo (57').

### Ganando, el primer cambio le apaga el ataque: el peligro creado cae de 0.51 a 0.11 en los 15 minutos siguientes
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Ganando (n=22), 15 min antes vs después del primer cambio: xG 0.51 a 0.11, tiros 2.8 a 1.4, xG concedido 0.16 a 0.14, PPDA 20.9 a 20.3, field tilt 55 a 50, altura de presión 58 a 54; primer cambio ganando al 57.0'; saca Right Wing Back 16, Center Forward 16, Right Defensive Midfield 11, Left Attacking Midfield 10, Left Wing Back 8. Todos los partidos: xG 0.33 a 0.19, altura de presión 62 a 58. Empate: PPDA 14.5 a 7.7, field tilt 57 a 67, xG concedido 0.10 a 0.23"
- kpi: "0.11 | 0.51 | goles esperados en 15 minutos | | Peligro creado en los 15 minutos después del primer cambio, ganando | contra | antes del cambio"
- definiciones: D-21, SB
- decision: "Rival: el primer cambio de Milito con ventaja (cerca del minuto 57) es la señal para ir por el partido: su equipo deja de tirar, retrocede 4 metros y cede el dominio territorial. Staff: el cambio ganando saca al carrilero derecho o al 9 y el equipo pierde el balón arriba; probar cambios que refresquen la presión sin quitar la salida"
Con ventaja, los 15 minutos anteriores al primer cambio son de los mejores del partido (0.51 de peligro creado); los 15 posteriores, de los peores (0.11), con la mitad de tiros y el dominio territorial de 55 a 50. El peligro concedido no baja (0.16 a 0.14): el cambio no protege, solo apaga. Empatando pasa lo contrario: el primer cambio sube la presión (de 14.5 a 7.7 pases antes de robar) y el dominio a 67, a cambio de conceder el doble.

### Once estable: 1.8 cambios de titular por partido y ocho jugadores núcleo, con Rangel en 45 de 52
- bloque: M-5
- metrica: xi_stability
- cifra: "Jaccard entre onces consecutivos 0.74; 1.8 titulares distintos por partido; núcleo (70 % o más): Rangel 45 titularidades (87 %, 3664 min), Bryan González 44 (85 %, 3526 min), Campillo 39 (75 %), Alvarado 38 (73 %), Romo 38 (73 %), Efraín Álvarez 38 (73 %), Fernando González 37 (71 %), Ledezma 37 (71 %); Govea 36 (69 %), Castillo 36 (69 %), Aguirre 33 (63 %), Armando González 33 (63 %); núcleo por torneo: Apertura 2025 6 jugadores, Clausura 2026 10, Apertura 2026 6"
- kpi: "1.8 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB
- decision: "Rival: el once se puede anticipar: portero, carrilero izquierdo y los tres centrales casi fijos; la variación está en los dos mediapuntas y el 9. Staff: el torneo con más núcleo (Clausura 2026, diez jugadores) fue el mejor; en el Apertura 2026 el núcleo volvió a seis y el equipo concede más"
Repite el once: de un partido al siguiente cambia menos de dos titulares. La espina dorsal es fija (Rangel, Campillo, Romo, Bryan González por izquierda, Ledezma por derecha, Fernando González en el medio) y los que rotan son los de arriba: Alvarado y Efraín Álvarez son núcleo, pero el 9 se reparte entre Armando González (33), Marín (13) y Sepúlveda (11). El Clausura 2026, con diez jugadores núcleo, fue el torneo de más goles y menos peligro concedido.

## Partidos y rivales

### Seis derrotas creando más peligro que el rival y solo dos triunfos al revés: Larcamón le ganó 3 de 4
- bloque: M-2
- metrica: xgd
- cifra: "Diferencia de xG 0.73 (p95); perdió creando más peligro que el rival (xGD mayor a 0.3): 6 partidos; ganó con menos peligro (xGD menor a -0.3): 2. Larcamón 4 pj 0-1-3, xG 1.43 a favor y 0.85 en contra; Mohamed 3 pj 0-0-3, 1.07 y 1.67; Pizarro 4 pj 1-1-2, 1.30 y 1.16; Varini 2 pj 0-1-1, 1.54 y 0.26; Abreu 3 pj 1-2-0, 1.75 y 1.18. Toluca 0-0-3, Cruz Azul 0-2-4, Querétaro 1-0-2. Rachas: 6 victorias seguidas, 8 sin perder, 2 derrotas seguidas. Peor partido: Toluca 0-2 de visita, xG 0.69 contra 1.51"
- kpi: "6 | 2 | partidos en 52 | 95 | Derrotas creando más peligro que el rival | contra | triunfos creando menos"
- definiciones: D-25
- decision: "Rival: el manual de Larcamón funciona: dejarlo crear (1.43 por partido) y ganarle con 0.85; se le gana cediendo el balón y acertando, no peleándole la posesión. Staff: seis derrotas con más peligro que el rival en 52 partidos es la factura del contragolpe y del balón parado en contra; no es un problema de creación"
Su balance de peligro es de los más altos de la liga y aun así perdió seis partidos creando más que el rival, el triple de los que ganó creando menos. Los técnicos que le ganan lo hacen con poco: Larcamón, 3 victorias en 4 con 0.85 de peligro por partido; Varini le sacó un empate y una victoria concediéndole 1.54 y creando 0.26. El Toluca de Mohamed es el único que lo supera en peligro (1.67 contra 1.07) y le ganó los tres partidos. Su mejor racha fue de 6 victorias seguidas y 8 partidos sin perder.
