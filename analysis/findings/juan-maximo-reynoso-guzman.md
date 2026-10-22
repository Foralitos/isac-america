# Hallazgos — Reynoso en la Liga MX (Apertura 2021 → Apertura 2026, 42 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Juan Reynoso con datos: Cruz Azul (Apertura 2021, 18, y Clausura 2022, 20) y Necaxa (Apertura 2026, 4). Récord 13-14-15. Los 4 partidos con Necaxa se tratan como indicio en cada hallazgo que los usa. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas, "presión tras pérdida" = contrapresión); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Tira poco pero de cerca: 11 tiros por partido, abajo de la liga, y solo 37 % desde fuera del área
- bloque: M-1
- metrica: shots_outside_box_pct
- cifra: "36.9 % de tiros fuera del área vs 42.8 % de liga (p12); 11.0 tiros sin penal vs 13.2 (p14); xG por tiro 0.10 vs 0.09 (p80); 13.3 % de secuencias terminan en tiro vs 15.3 (p14); xG sin penal 1.08 vs 1.14 (p38); 12.6 entradas al área vs 14.0 (p32)"
- kpi: "37 % | 43 % | de sus tiros | 12 | Tiros desde fuera del área | neutro"
- definiciones: D-12, D-02
- decision: "Rival: cerrar el área y no regalar faltas cerca; no castiga desde lejos, así que el bloque puede estar más junto y más bajo sin miedo al tiro exterior. Staff: la selección de tiro es buena y la calidad de cada tiro está arriba de la liga; el problema es el volumen, 2 tiros menos por partido que la liga. Hay que generar más llegadas sin perder esa paciencia en la definición"
Es el rasgo que viaja: con Cruz Azul tiró 37.7 % desde fuera (abajo de la liga) y con Necaxa 29.4 % en 4 partidos, de los más bajos de la liga. El peligro creado total queda como la liga porque lo poco que tira lo tira desde buena zona: apenas 13 de cada 100 ataques terminan en tiro, pero cada tiro vale más que el promedio.

### Pocos ataques tras robo, pero mata en 2.8 segundos: de los más rápidos de la liga del robo al tiro
- bloque: M-3
- metrica: rec_to_shot_s
- cifra: "2.77 s de recuperación a tiro vs 3.30 de liga (p10, menos es más rápido); xG en transición 0.62 vs 0.51 (p80); 59.8 transiciones ofensivas vs 63.2 (p25); 3.14 tiros en transición vs 3.76 (p23); 18.8 % de secuencias nacen en el último tercio vs 17.2 (p80); 11.4 recuperaciones altas vs 11.9 (p41)"
- kpi: "2.8 | 3.3 | segundos del robo al tiro | 10 | Segundos que tarda en tirar después de robar el balón | favor"
- definiciones: D-03, D-10
- decision: "Rival: la pérdida en salida se paga en menos de 3 segundos; con el balón en campo propio, pase seguro o despeje, nunca regate ni pase horizontal. Staff: el equipo ataca tras robo menos veces que la liga pero cada ataque vale más; subir el número de robos en campo rival, que hoy está como la liga, es la palanca más barata para crear más peligro"
Más de la mitad de su peligro creado nace de un robo: 0.62 de los 1.08 goles esperados por partido. Con Cruz Azul el peligro tras robo fue 0.58 por partido (arriba de la liga) y con Necaxa 1.04 en 4 partidos, así que el rasgo viaja. El tramo donde más produce tras robar es del minuto 30 al 60, con 0.64 por 90 minutos, arriba de la liga.

### Equipo que progresa poco: 76 ataques por partido y 33 conducciones que avanzan, abajo de la liga
- bloque: M-1
- metrica: prog_carries
- cifra: "32.9 conducciones progresivas vs 39.0 de liga (p20); 76.0 secuencias ofensivas vs 80.3 (p20); 12.1 regates vs 14.0 (p22); 66.47 % de pases completados bajo presión vs 70.05 (p16); 96.4 pases progresivos vs 100.4 (p37); OBV ofensivo 1.30 vs 1.42 (p32); precisión de pase 77.4 % vs 78.7 (p36)"
- kpi: "32.9 | 39.0 | conducciones que avanzan por partido | 20 | Conducciones que avanzan al menos 10 metros, por partido | contra"
- definiciones: D-14, D-02
- decision: "Rival: presionarlo en salida rinde: completa menos pases bajo presión que el 84 % de la liga y no tiene regateadores que rompan líneas. Staff: falta un conductor; sin un jugador que avance con el balón en los pies, el equipo depende del robo y del balón parado para llegar al área, y por eso ataca 4 veces menos por partido que la liga"
Es el rasgo que más le pesa y también viaja: con Cruz Azul 12.2 regates por partido (abajo de la liga) y con Necaxa 11.0 en 4 partidos, de los más bajos. Los pases que avanzan están apenas abajo de la media, así que la progresión existe, pero es toda con pase: cuando el rival le cierra las líneas de pase no hay plan B por conducción.

### Presiona poco y recupera menos: 25 % de sus presiones tras pérdida recuperan el balón, abajo de la liga
- bloque: M-2
- metrica: cp_regain_pct
- cifra: "25.4 % de contrapresiones con regain vs 27.4 de liga (p21); 30.1 contrapresiones vs 32.0 (p31); 141.3 presiones vs 151.5 (p32); 26.8 fases de presión vs 29.3 (p33); 14.7 % de fases altas vs 16.9 (p34); PPDA propio 12.3 vs 14.0 (p30); altura de presión 56.3 m (p54); 2.43 tiros rivales en 10 s tras pérdida vs 2.21 (p74)"
- kpi: "25 % | 27 % | de sus presiones tras pérdida recuperan el balón | 21 | Presiones tras pérdida que recuperan | contra"
- definiciones: D-06, D-05, D-05b
- decision: "Rival: al robarle, el primer pase hacia adelante sale limpio porque su presión tras pérdida no muerde; preparar esa primera salida con un receptor fijo a la espalda de su medio campo. Staff: hay que elegir, o se presiona tras pérdida con todos o se repliega ordenado; hoy presiona a medias y concede más tiros justo después de perder el balón que el 74 % de la liga"
Deja dar 12 pases antes de robar, un poco menos que la liga (14), así que la intensidad en bloque es normal; lo que falta es volumen: menos presiones, menos rachas de presión y menos rachas en campo rival que la liga. El rasgo viaja: las presiones tras pérdida recuperaron 25.5 % con Cruz Azul y 24.4 % con Necaxa. Presiona a 56 metros y defiende a 47, un bloque medio sin señas de presión alta.

### Concede de cerca: 61 % de los tiros rivales son desde dentro del área, arriba de la liga
- bloque: M-2
- metrica: shots_conceded_in_box_pct
- cifra: "60.8 % de tiros concedidos desde el área vs 58.2 de liga (p76); 13.5 tiros concedidos vs 13.6 (p51); 14.1 entradas al área del rival vs 14.2 (p50); xG concedido sin penal 1.11 vs 1.17 (p42); OBV concedido 1.41 vs 1.44 (p46); xG por córner concedido 0.04 (p79)"
- kpi: "61 % | 58 % | de los tiros que concede | 76 | Tiros concedidos desde dentro del área | contra"
- definiciones: D-12
- decision: "Rival: no tirar de fuera; el equipo deja entrar al área lo normal, pero una vez dentro no bloquea bien. Llegar con dos jugadores al segundo palo y al punto penal. Staff: el peligro concedido queda como la liga porque el rival llega lo normal, no porque defienda bien el área; trabajar el bloqueo del tiro dentro del área y la marca en los córners cerrados, que es donde más goles ha concedido"
En las derrotas la cifra sube a 61.7 % de tiros desde dentro del área y en las victorias baja a 54.6 %, abajo de la liga: cuando cierra el área gana. Cuando va ganando el rival le entra 16.4 veces al área por 90 minutos; ese es el contexto donde más se nota.

### Partidos cerrados: 11 tiros a favor y 13.5 en contra por partido, con balance de peligro apenas positivo
- bloque: M-2
- metrica: xgd
- cifra: "Diferencia de xG +0.06 vs -0.03 de liga (p60); xG sin penal 1.08 (p38) y xG concedido 1.11 (p42); 11.0 tiros sin penal (p14) y 13.5 concedidos (p51); posesión 49.1 % (p44); field tilt 49.4 (p46); directness 0.58 (p41); 14.3 faltas vs 13.6 (p74)"
- kpi: "0.06 | -0.03 | goles esperados de diferencia por partido | 60 | Balance de peligro creado menos concedido | neutro"
- definiciones: D-01, D-12
- decision: "Rival: el partido va a tener pocos tiros; un gol temprano lo obliga a salir y ahí es cuando más concede. Staff: el equipo ni domina ni es dominado, con posesión, dominio territorial y verticalidad como la liga; el balance lo deciden el balón parado y el primer gol, no el juego abierto, y por eso 14 de 42 partidos terminaron en empate"
Un tercio de sus partidos fueron empates. Con Cruz Azul el balance fue +0.12 por partido (como la liga, arriba de la media); con Necaxa -0.49 en 4 partidos. Comete más faltas que el 74 % de la liga, señal de un equipo que defiende más a destiempo que con presión organizada.

## Consistencia y variabilidad (D-20, D-21, D-22, D-23, D-25, D-26)

### De local domina y pierde: 11 derrotas en 22 partidos en casa, con mejor balance de peligro que de visita
- bloque: M-1
- escenario: localia
- metrica: xgd
- cifra: "Local (22): 7 ganados, 4 empatados, 11 perdidos; xGD +0.19 (p70), xG 1.05, xG concedido 1.01 (p26), posesión 52.8 % (p72), field tilt 53.7 (p67), 107.3 pases progresivos (p71), 5.27 córners (p68), OBV concedido 1.19 (p15). Visita (20): 6 ganados, 10 empatados, 4 perdidos; xGD -0.08 (p43), xG 1.11, xG concedido 1.23 (p62), posesión 45.1 % (p16), field tilt 44.6, 84.5 pases progresivos (p11), xG por tiro 0.11 (p96), línea defensiva 44.6 m (p9), salida larga 57.5 % (p83) vs 42.5 % de local"
- kpi: "0.19 | -0.08 | goles esperados de diferencia por partido | 70 | Balance de peligro de local | neutro | de visita"
- definiciones: D-20, D-14, D-13
- decision: "Rival: visitarlo no asusta; dejarle el balón, cerrarse y salir rápido, porque de local concede poco pero convierte menos de lo que crea y ha perdido la mitad de sus partidos en casa. Staff: el problema de local no es el juego sino el marcador en contra; empatando en casa crea 0.86 y concede 1.32 por 90 minutos. Conviene un plan específico para abrir el marcador en casa, no más dominio"
Las 11 derrotas de local incluyen el 1-2 con Santos creando 2.37 goles esperados contra 1.23, y el 0-2 del debut con Mazatlán creando 1.17 contra 0.56. De visita es otro equipo: se repliega a 44.6 metros (de los más bajos de la liga), saca largo el 57.5 % de las veces contra 42.5 % en casa, presiona 3 metros más abajo y sus presiones tras pérdida recuperan 22.6 %, de las más bajas; con esa versión replegada perdió solo 4 de 20.

### Ganando se encierra: 35 % de dominio territorial y concede 1.28 goles esperados por 90 minutos, más que perdiendo
- bloque: M-2
- escenario: marcador
- metrica: xg_conceded
- cifra: "Ganando (25 partidos, 1173 min): field tilt 35.15 (p36), posesión 39.9 % (p34), xG concedido 1.28 por 90 (p54), 14.8 tiros concedidos (p64), 16.4 entradas al área del rival (p69), OBV concedido 1.65 (p80), xG concedido de balón parado 0.74 (p82), 23.25 contrapresiones (p26), PPDA 13.07, xG 0.75 (p23), 7.37 tiros (p14). Perdiendo (999 min): xG concedido 0.90 (p27), 9.64 tiros concedidos, PPDA 9.00. Empatando: 28.66 contrapresiones, xG concedido de balón parado 0.43"
- kpi: "1.28 | 0.90 | goles esperados en contra por cada 90 minutos | 54 | Peligro concedido cuando va ganando | contra | cuando va perdiendo"
- definiciones: D-21, D-13, D-06
- decision: "Rival: si Reynoso se pone arriba, el partido se juega en su área; meter centros y buscar balón parado, que ganando concede casi el doble de peligro de balón parado que empatando. Staff: el repliegue ganando es demasiado bajo y demasiado pronto; con la liguilla directa en juego y ganando concede 1.51 por 90 y 18.6 llegadas al área. Sostener la presión tras pérdida, que cae de 29 a 23 por 90 al ponerse arriba, es más barato que defender 15 tiros"
Ganando crea 0.75 por 90 minutos y tira 7 veces, y no hay contragolpe que lo saque de su campo: el peligro tras robo baja a 0.49. Tuvo minutos con ventaja en 25 partidos y solo ganó 13. Los cambios con ventaja llegan tarde (al minuto 70.6 de media) y sacan delanteros, no defensas, pero el equipo ya está metido atrás antes de que entren.

### Perdiendo se vuelca por las bandas: 18 centros por 90 minutos, arriba de la liga, y sube la presión a 9 pases antes de robar
- bloque: M-1
- escenario: marcador
- metrica: crosses
- cifra: "Perdiendo (19 partidos, 999 min): 17.83 centros por 90 vs 14.42 de liga (p82), 15.22 tiros (p70), 15.67 entradas al área (p63), xG 1.24 (p68), posesión 60.15 % (p65), field tilt 63.89, PPDA 9.00, altura de presión 59.69 m, 14.41 recuperaciones altas (p89), 40.62 conducciones progresivas. Empatando (2019 min): 9.18 centros (p24), 9.49 tiros (p12), xG 0.97 (p53), 10.25 entradas al área (p23)"
- kpi: "17.8 | 9.2 | centros por cada 90 minutos | 82 | Centros cuando va perdiendo | neutro | cuando va empatando"
- definiciones: D-21, D-05b, D-12
- decision: "Rival: con ventaja contra Reynoso, poblar el área con dos centrales altos y dejarle la banda; el centro es su única vía de remontada y crea apenas 1.24 por 90 minutos con 60 % del balón. Staff: la reacción perdiendo es de volumen, no de calidad; el peligro por 90 sube solo 0.27 sobre el empate. Preparar una salida por dentro con el mediapunta, no más centros"
Empatando es cuando menos genera: 0.97 goles esperados y 9.5 tiros por 90 minutos, abajo de la liga, y eso explica los 14 empates. Perdiendo dobla las llegadas al área y los tiros, y la presión se vuelve la más intensa de todos los cortes (9 pases antes de robar, 14 robos en campo rival por 90). Perdiendo de local llega a 16.7 tiros y 18.8 centros por 90; perdiendo en zona directa a 1.71 goles esperados por 90.

### El tramo final se le abre: del 60 al 90 concede 16 llegadas al área por 90 minutos, arriba de la liga
- bloque: M-2
- escenario: momento
- metrica: opp_box_entries
- cifra: "60-90 (1520 min): 16.05 entradas al área del rival por 90 vs 13.49 de liga (p80), 14.69 tiros concedidos (p76), xG concedido 1.40 (p55), xG concedido de balón parado 0.68 (p80), 22.86 contrapresiones (p22), 13.98 faltas (p82), PPDA 9.91. 0-30 (1260 min): 9.86 entradas (p29), 10.43 tiros concedidos, 30.29 contrapresiones. 75-90: 15.78 tiros concedidos (p81), xG concedido en transición 0.80 (p76), 21.45 contrapresiones (p15)"
- kpi: "16.05 | 9.86 | llegadas al área del rival por cada 90 minutos | 80 | Llegadas al área que concede del minuto 60 al 90 | contra | en los primeros 30 minutos"
- definiciones: D-22, D-12, D-06
- decision: "Rival: guardar piernas y un cambio ofensivo para después del 60; ahí el equipo de Reynoso deja llegar al área y tirar más que en todo el partido, y el peligro de balón parado en contra se duplica. Staff: la presión tras pérdida cae de 30 a 23 por 90 en el último tramo y las faltas suben; los cambios, 4.6 por partido, están reponiendo piernas para defender, no intensidad para presionar"
También es su mejor tramo a favor: 0.75 de peligro de balón parado por 90 minutos (arriba de la liga) y del 60 al 75 crea 1.26 por 90, su mejor cuarto de hora. El partido se rompe en los dos sentidos: los últimos 15 minutos son donde más tiros concede (15.8 por 90) y donde más peligro de contragolpe sufre (0.80).

### Arranca frío: 7 llegadas al área por 90 minutos en el primer cuarto de hora, de los más bajos de la liga
- bloque: M-1
- escenario: momento
- metrica: box_entries
- cifra: "0-15 (630 min): 7.00 entradas al área por 90 vs 13.56 de liga (p9), 7.71 tiros (p13), 1.29 tiros en transición (p7), OBV ofensivo 0.89 (p27), xG 0.88 (p57); xG concedido 1.18 (p79) y 0.54 en transición (p86); altura de presión 60.82 m (p75), PPDA 14.72, 32.71 contrapresiones. 15-30: 11.57 entradas al área (p52), 9.57 tiros"
- kpi: "7.0 | 13.6 | llegadas al área por cada 90 minutos | 9 | Llegadas al área en los primeros 15 minutos | contra | la liga en ese tramo"
- definiciones: D-22, D-12, D-03
- decision: "Rival: salir a buscarlo de inicio; en el primer cuarto de hora presiona alto pero no llega al área y concede más peligro de contragolpe que en ningún otro tramo salvo el final. Staff: el arranque tiene presión, a 61 metros, pero no tiene salida; preparar las dos primeras jugadas ensayadas de ataque, porque hoy la primera llegada clara tarda"
El peligro creado en ese tramo no es bajo porque las pocas llegadas son buenas, pero el volumen es de los más bajos de la liga y el tiro tras robo casi no existe (1.3 por 90). Del 15 al 30 las llegadas se normalizan a 11.6. En defensa, el primer cuarto de hora es su peor tramo después del final: concede 1.18 goles esperados por 90, arriba de la liga.

### Las derrotas vienen del balón parado en contra: 0.80 goles concedidos por partido cuando pierde, 0.08 cuando gana
- bloque: M-4
- escenario: resultado
- metrica: sp_goals_conceded
- cifra: "Perdió 15: 0.80 goles concedidos de balón parado (p96), xG por córner concedido 0.06 (p94), 61.66 % de tiros concedidos desde el área (p80), 5.67 córners a favor (p83), xG 1.23 (p67), posesión 53.22 % (p74). Ganó 13: 0.08 goles concedidos de balón parado (p1), xG concedido 0.82 (p7), xG concedido en transición 0.24 (p2), xG rival en 10 s tras pérdida 0.10 (p9), 54.64 % de tiros concedidos desde el área (p22). Empató 14: xG concedido de balón parado 0.74 (p95), 0.43 goles concedidos de balón parado"
- kpi: "0.80 | 0.08 | goles de balón parado en contra por partido | 96 | Goles de balón parado que concede cuando pierde | contra | cuando gana"
- definiciones: D-07, D-04, D-12
- decision: "Rival: para ganarle, el camino más corto es el balón parado, córner cerrado y falta lateral, no el juego abierto. Staff: 12 de los 19 goles de balón parado que concedió en 42 partidos cayeron en derrotas; es el dato que mejor separa ganar de perder, más que el peligro creado. La marca en el córner en contra debe ser el primer punto del lunes"
Cuando pierde crea más que cuando gana (1.23 contra 1.04) y tiene más balón; cuando gana concede menos de todo, sobre todo en contragolpe (0.24) y justo después de perder el balón (0.10). Los empates son el otro agujero: concede 0.74 de peligro de balón parado por partido, más que el 95 % de la liga, y ahí se le fueron 14 partidos.

### Con la liguilla directa en la mano se cayó: 1 triunfo en 7 partidos pese a crear 1.51 goles esperados, indicio por muestra
- bloque: M-1
- escenario: tabla
- metrica: np_xg
- cifra: "En zona directa (7 partidos): 1 ganado, 2 empatados, 4 perdidos; xG 1.51 (p93), xGD +0.53 (p88), 16.14 entradas al área (p81), 6.14 córners (p92), xG de balón parado 0.83 (p98), 0.86 goles de balón parado (p99), 13.14 tiros (p51), xG concedido 1.32 (p74), 15.29 tiros concedidos (p78), 3.71 tiros rivales en 10 s tras pérdida (p99), xG rival tras pérdida 0.28 (p92), primer cambio al 44.57' (p2). Directa alcanzable (23): 6 ganados, 9 empatados, 8 perdidos; xG 1.03 (p31)"
- kpi: "1.51 | 1.03 | goles esperados a favor por partido | 93 | Peligro creado cuando ya estaba en zona de liguilla directa | neutro | con la directa alcanzable"
- definiciones: D-23, D-04, D-07
- decision: "Rival: cuando el Cruz Azul de Reynoso iba arriba en la tabla atacaba más y se exponía más tras pérdida; esperar y correr a su espalda funcionó: perdió 1-2 con Necaxa, 1-2 con Santos y 1-3 con Puebla estando tercero o cuarto. Staff: la muestra es de 7 jornadas, pero la señal es clara: con la presión de la tabla el equipo se vuelve más ofensivo y más vulnerable justo después de perder el balón. Sostener el plan reactivo que lo subió"
Son 7 partidos entre la jornada 5 y la 16 del Clausura 2022, todos estando entre el tercero y el cuarto lugar: perdió con Necaxa, Santos, Puebla y Atlético San Luis, bajó del segundo al sexto puesto y terminó yendo al play-in. En esos partidos concedió casi 4 tiros rivales en los 10 segundos siguientes a una pérdida, de lo más alto de la liga, y el primer cambio llegó al descanso. Es indicio por la muestra, pero coincide con el patrón de las derrotas: pierde cuando domina.

### Arranca los torneos cerrado y gana: 5 triunfos en 8 partidos de las primeras cuatro jornadas con 44 % de posesión
- bloque: M-2
- escenario: tabla
- metrica: np_xg_conceded
- cifra: "Arranque, J1 a J4 (8 partidos): 5 ganados, 2 empatados, 1 perdido; xG concedido 0.79 (p6), xG 0.86 (p11), 8.12 tiros (p1), xG por tiro 0.11 (p97), posesión 43.87 % (p11), field tilt 40.43 (p15), salida larga 62.71 % (p95), línea defensiva 44.79 m (p13), 3.00 córners (p1), 0.12 goles de balón parado (p2), xG en transición 0.63 (p80), 55.25 transiciones (p4). Directa alcanzable (23): xG concedido 1.20 (p57), posesión 49.04 %, salida larga 47.62 %"
- kpi: "0.79 | 1.20 | goles esperados en contra por partido | 6 | Peligro concedido en las primeras cuatro jornadas | favor | con la liguilla directa alcanzable"
- definiciones: D-23, D-13, D-03
- decision: "Rival en las jornadas 1 a 4: va a encontrar un equipo largo, replegado a 45 metros y que vive del contragolpe; no regalar la pelota en campo propio y obligarlo a jugar corto. Staff: la versión de arranque es la más efectiva del ciclo: menos balón, menos tiros y mejor balance que en cualquier otro momento. A medida que el torneo avanza el equipo toma más balón y concede más; vale la pena preguntarse si el modelo de arranque debería ser el modelo"
El Clausura 2022 arrancó ganando a Tijuana, Juárez y León y empatando con Monterrey, y lo puso segundo; el Apertura 2021 arrancó con derrota ante Mazatlán, empate con Santos y triunfos con Necaxa y Toluca. En esas jornadas saca largo 63 % de las veces, de lo más alto de la liga, y casi no cobra córners (3 por partido). Cuando la liguilla directa es alcanzable, el equipo sube a 49 % de posesión y el peligro concedido sube a 1.20.

### Contra los seis de arriba pierde el balón parado y el contragolpe: 0.31 goles de balón parado por partido contra 0.69
- bloque: M-4
- escenario: rival
- metrica: sp_goals
- cifra: "Top 6 (16 partidos): 4 ganados, 5 empatados, 7 perdidos; 0.31 goles de balón parado (p21), xG de balón parado 0.30 (p8), 3.56 córners (p6), xG en transición 0.41 (p27), OBV ofensivo 1.04 (p2), xG 0.93 (p20), xGD -0.36 (p21), 16.81 faltas (p98), xG rival en 10 s tras pérdida 0.24 (p89), 2.81 tiros rivales tras pérdida (p86). Resto (26): 9 ganados, 9 empatados, 8 perdidos; 0.69 goles de balón parado (p95), xG de balón parado 0.67 (p93), xG en transición 0.76 (p93), xGD +0.32 (p78), 12.81 faltas (p30)"
- kpi: "0.31 | 0.69 | goles de balón parado por partido | 21 | Goles de balón parado contra rivales del top 6 | contra | contra el resto"
- definiciones: D-25, D-07, D-03
- decision: "Rival grande: negarle el córner y la falta lateral y no perder el balón en su campo; sin balón parado ni contragolpe no tiene tercera vía, y las 16.8 faltas por partido dicen que termina defendiendo a destiempo. Staff: contra los de arriba el equipo deja de llegar (3.6 córners por partido) y comete 4 faltas más; falta un plan con balón para cuando el rival no se deja correr"
Contra los técnicos que más enfrentó no ganó casi nunca: 1 triunfo, 2 empates y 1 derrota con Miguel Herrera (Tigres, incluida la liguilla), 0-1-2 con Guillermo Almada y 0-2-1 con Javier Aguirre, contra quien creó 0.77 y concedió 1.12 por partido. Los rivales que peor le van son Monterrey (0 ganados, 2 empatados, 1 perdido, incluido el 1-4 del play-in de 2021) y Atlético San Luis (0-1-2, con el 0-2 reciente del Necaxa).

### Del Apertura 2021 al Clausura 2022 se volvió más vertical y concedió 3.5 tiros más por partido
- bloque: M-2
- escenario: torneo
- metrica: shots_conceded
- cifra: "Apertura 2021 (18, 5 ganados, 8 empatados, 5 perdidos): 11.44 tiros concedidos (p18), xG concedido 0.86 (p11), xG 0.91 (p18), posesión 51.89 % (p65), directness 0.56 (p13), 11.21 % de fases de presión altas (p5), 28.17 contrapresiones (p15), PPDA 11.02 (p15), 0.39 goles de balón parado (p38), 10.17 tiros (p6). Clausura 2022 (20, 8 ganados, 5 empatados, 7 perdidos): 14.90 tiros concedidos (p73), xG concedido 1.14 (p46), xG 1.13 (p48), posesión 47.08 % (p27), directness 0.60 (p70), 15.74 % altas (p42), 32.65 contrapresiones (p61), PPDA 12.82 (p40), 0.65 goles de balón parado (p92), 11.00 tiros (p14)"
- kpi: "14.9 | 11.4 | tiros en contra por partido | 73 | Tiros que concedió en el Clausura 2022 | contra | en el Apertura 2021"
- definiciones: D-26, D-05, D-06
- decision: "Rival: contra la versión vertical de Reynoso el espacio está a la espalda de su medio campo tras pérdida; contra la versión de posesión, el partido es de pocos tiros y se decide en balón parado. Staff: el modelo del Apertura 2021 (más balón, menos tiros en contra, siete dibujos distintos en 18 partidos) terminó séptimo y fuera en el play-in; el del Clausura 2022 (4-2-3-1 fijo, más vertical, más presión tras pérdida y más balón parado) creó más pero concedió más y terminó sexto. Ninguna de las dos versiones resolvió el volumen de tiros a favor, que se quedó en 10 y 11 por partido"
En el Apertura 2021 arrancó con 4-4-2 cinco veces, 3-4-1-2 cuatro y 3-5-2 tres; en el Clausura 2022, 4-2-3-1 en 10 de 20. El equipo pasó de empatar 8 de 18 a ganar 8 de 20, pero también a perder más. Los goles a favor fueron 22 en los dos torneos; los que cambiaron fueron el balón parado (de 0.39 a 0.65 goles por partido, de los más altos de la liga) y los tiros concedidos, que subieron de abajo de la liga a arriba.

## Partidos y rivales

### Gana sin dominar y pierde dominando: 3 victorias creando menos peligro que el rival, 6 derrotas creando más
- bloque: M-1
- escenario: resultado
- metrica: xgd
- cifra: "Ganó 13: 9.62 tiros (p5), xG por tiro 0.11 (p97), posesión 46.66 % (p22), field tilt 49.63, xGD +0.34 (p79), salida larga 56.10 % (p79), primer cambio al 56.62' (p75), 2.30 s de robo a tiro (p1). Perdió 15: 13.60 tiros (p58), posesión 53.22 % (p74), field tilt 53.52 (p66), xGD +0.10 (p63), salida larga 36.54 % (p16), primer cambio al 49.40' (p13), 105.20 pases progresivos (p68). Partidos ganados con xGD menor a -0.3: 3; perdidos con xGD mayor a 0.3: 6"
- kpi: "0.10 | 0.34 | goles esperados de diferencia por partido | 63 | Balance de peligro en los partidos que perdió | neutro | en los que ganó"
- definiciones: D-12, D-01
- decision: "Rival: no hay que dominarlo para ganarle; sus derrotas llegan con él teniendo el balón. Cederle la posesión y esperar su pérdida es un plan con historial. Staff: cuando el equipo juega largo (56 % de salida larga) y tira poco pero de cerca, gana; cuando se queda con el balón (53 % de posesión, 36 % de salida larga) pierde con balance positivo. El modelo que gana es el reactivo"
Perdió creando más que el rival contra Santos (1-2, con 2.37 goles esperados contra 1.23, su mejor partido por balance), Mazatlán en el debut (0-2, 1.17 contra 0.56), León (0-1, 1.13 contra 0.71), Pumas (3-4, 2.40 contra 1.58) y Tigres en la ida de cuartos (0-1, 0.62 contra 0.29). Ganó creando menos contra Tijuana (2-0, 0.54 contra 0.97) y Pumas (2-1, 0.88 contra 1.36). Su mejor racha fue de 7 partidos sin perder en el Apertura 2021, pero con 5 empates; la peor, 3 derrotas seguidas para cerrar ese torneo, incluido el 1-4 del play-in.

## Balón parado (M-4)

### Casi todo córner es abierto: solo 17 % cerrados, de los más bajos de la liga, y con ellos no marcó ni un gol
- bloque: M-4
- metrica: corner_inswing_pct
- cifra: "183 córners a favor (4.36 por partido, p29), 7 goles; inswinging 17.48 % vs 34.86 de liga (p7); outswinging 53.55 % vs 41.48; corto 11.31 % (p49); 60.66 % desde la derecha. Derecha outswinging al centro: 68 córners, 32 tiros, xG 2.74, 3 goles. Inswinging: 36 córners, 18 tiros, xG 1.40, 0 goles. Outswinging: 98 córners, 37 tiros, xG 3.27, 3 goles. xG por córner 0.03 vs 0.04 (p30); xG de córner 0.14 vs 0.18 (p28)"
- kpi: "17 % | 35 % | de sus córners | 7 | Córners cerrados, los que van girando hacia la portería | neutro"
- definiciones: D-07, D-12
- decision: "Rival: defender el córner de Reynoso es defender el abierto desde la derecha al centro del área; el portero puede quedarse en la línea y el primer palo se puede aflojar. Staff: el córner rinde menos que la liga (0.03 por córner) y el abierto, que es más de la mitad de los cobros, dio 3 goles en 98; probar más cerrado, que en la liga rinde más, y variar el lado: 6 de cada 10 salen por la derecha"
Siete goles de córner en 42 partidos es uno cada seis partidos; la liga mete uno cada tres. El primer contacto se concentra en la franja central del área, entre el punto penal y el área chica, que es donde el abierto cae; casi no busca el primer palo ni el borde del área. Con Necaxa cobró 5.25 córners por partido en 4 partidos, más que con Cruz Azul (4.26).

### Sus goles de balón parado son penales: 13 de 23; el tiro libre directo no dio ninguno en 19 intentos
- bloque: M-4
- metrica: sp_goals
- cifra: "0.55 goles de balón parado por partido vs 0.44 de liga (p77); xG de balón parado 0.53 vs 0.47 (p71). Por tipo: penal 15 tiros, xG 11.8, 13 goles; córner 80 tiros, xG 5.9, 7 goles; tiro libre al área 43 tiros, xG 3.7, 3 goles; tiro libre directo 19 tiros, xG 0.6, 0 goles; saque de banda 4 tiros, 0 goles. xG de tiro libre indirecto 0.09 vs 0.07 (p70); directo 0.01 vs 0.02 (p42); tras saque de banda 0.01 vs 0.02 (p31); 329 saques de banda a favor, 1 gol, retiene 66.0 %"
- kpi: "13 | 23 | goles | 77 | Goles de penal dentro de sus goles de balón parado | neutro | goles de balón parado en total"
- definiciones: D-07
- decision: "Rival: el balón parado de Reynoso asusta en la estadística, no en el área: sin penales son 10 goles en 42 partidos. Lo que hay que evitar es la falta dentro del área, 15 penales a favor en 42 partidos. Staff: dejar de tirar libres directos (19 tiros, ningún gol, 0.6 de peligro acumulado) y cobrar al área, donde el tiro libre al área rinde arriba de la liga; el saque de banda tampoco es arma, 4 tiros en 42 partidos"
En la liga los penales son cuatro de cada diez goles de balón parado; en el equipo de Reynoso son casi seis de cada diez. Quitando el penal, su balón parado está abajo de la liga: 10 goles de córner, tiro libre y saque de banda en 42 partidos. La buena noticia es la proporción de penales: 15 a favor contra 10 en contra, y de esos 10 el rival falló 4.

### El córner cerrado en contra es su agujero: 6 de los 9 goles de córner que concedió llegaron con envíos cerrados
- bloque: M-4
- metrica: xg_per_corner_conceded
- cifra: "198 córners en contra, 9 goles, 87 tiros, xG 9.0; xG por córner concedido 0.04 vs 0.04 de liga (p79, más es peor); 0.45 goles de balón parado concedidos por partido (p55); xG concedido de balón parado 0.52 vs 0.48 (p65). Izquierda inswinging al centro: 36 córners, 17 tiros, xG 2.19, 5 goles; derecha inswinging al centro: 24 córners, 11 tiros, xG 2.49, 1 gol. Derecha outswinging: 36 córners, 18 tiros, xG 1.15, 2 goles; izquierda outswinging: 28 córners, xG 1.06, 1 gol. Penales en contra: 10 tiros, 6 goles; saques de banda en contra: 346, 17 tiros, 3 goles"
- kpi: "6 | 9 | goles de córner en contra | 79 | Goles de córner en contra que llegaron con envíos cerrados hacia la portería | contra | goles de córner en contra en total"
- definiciones: D-07, D-12
- decision: "Rival: córner cerrado al centro del área chica, sobre todo desde la izquierda del ataque: es el cobro que más le ha costado. Staff: en 60 córners cerrados en contra concedió 4.7 de peligro y 6 goles; en 64 abiertos, 2.2 y 3 goles. El problema es la marca al primer movimiento hacia la portería; cambiar a marca zonal en el área chica o poner un hombre fijo en el primer palo"
Concedió 9 goles de córner y marcó 7; le tiraron 87 veces de córner y él tiró 80. Con Necaxa la cifra se dispara: 0.15 de peligro por córner concedido y 1.5 goles de balón parado en contra por partido en 4 partidos, lo más alto de la liga, y ahí está buena parte de los 12 goles que recibió en ese arranque.

## Jugadores y cambios (M-5)

### Diez dibujos en 42 partidos: el 4-2-3-1 solo en 1 de cada 4; ganando pasa al 4-4-2 y empatando al final al 3-5-2
- bloque: M-5
- metrica: tactical_shifts
- cifra: "Dibujo inicial: 4231 en 11 (26 %), 442 en 9 (21 %), 3412 en 4, 4141 en 4, 352 en 3, 433 en 3, 4411 en 3, 343 en 2, 3421 en 2, 451 en 1. Apertura 2021: 7 dibujos en 18 partidos (442 en 5, 3412 en 4, 352 en 3); Clausura 2022: 4231 en 10 de 20; Apertura 2026: 4141 en 4 de 4. Cambio real de dibujo en 21 de 42 partidos (10 ganando, 9 perdiendo, 6 empatando); 1.86 cambios de formación por partido vs 1.80 (p54). Ganando, minuto 55: 442 el 50 % de los minutos; empatando, minuto 80: 352 el 31 %; perdiendo, minuto 50: 4231 el 40 %"
- kpi: "26 % | | de los partidos | | Partidos que arranca en 4-2-3-1, su dibujo más usado | neutro"
- definiciones: SB, D-21, D-26
- decision: "Rival: no hay un dibujo que preparar, hay tres: línea de cuatro con doble pivote de inicio, 4-4-2 con dos puntas cuando va ganando y tres centrales con carrileros cuando empata después del 75. Preparar la marca de los carrileros para el último cuarto de hora. Staff: tanta variación de dibujo no dio estabilidad, con 3.5 titulares nuevos por partido; fijar un sistema base por torneo, como en el Clausura 2022, es la versión que más ganó"
En el Apertura 2021 usó siete dibujos distintos en 18 partidos y en el play-in de ese torneo arrancó con 4-5-1 y perdió 1-4. Perdiendo casi no cambia de dibujo: sigue en 4-2-3-1 hasta el minuto 85. Con Necaxa jugó los 4 partidos en 4-1-4-1, un dibujo que nunca usó con Cruz Azul, y desde ahí pasó a 4-4-2 o a tres centrales cuando iba perdiendo.

### Cambia al descanso: el primer cambio llega al 45' en 17 de 42 partidos, y empatando el peligro creado se triplica después
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio 52.76' vs 53.87 de liga (p37); mediana 45' empatando (media 50.83', n=18) y perdiendo (media 50.45', n=11), mediana 56' ganando (media 57.38', n=13); en zona directa 44.57', play-in 41.0', directa alcanzable 55.39', arranque 55.88'. 4.57 cambios por partido, 184 tácticos y 8 por lesión. 15 min antes y después del primer cambio: empatando xG 0.11 a 0.33, tiros 1.39 a 2.17, PPDA 16.92 a 14.66; perdiendo tiros 1.64 a 2.82, PPDA 12.66 a 10.06, field tilt 54 a 59; ganando xG 0.38 a 0.07, tiros 1.69 a 1.15, altura de presión 54.77 a 51.60"
- kpi: "45' | 56' | minuto del primer cambio | 37 | Minuto del primer cambio cuando va empatando (mediana) | favor | cuando va ganando"
- definiciones: D-21, D-22, SB
- decision: "Rival: si al descanso no va ganando, Reynoso mueve el banquillo en el vestidor; el inicio del segundo tiempo trae un equipo distinto, con más tiros y más presión. Guardar el ajuste propio para el minuto 50, después de ver el suyo. Staff: el cambio al descanso funciona empatando y perdiendo; ganando, el primer cambio (al 57') apaga al equipo: el peligro creado cae de 0.38 a 0.07 en 15 minutos y la presión baja 3 metros. Ganando conviene cambiar para sostener, no para cerrar"
A quién saca lo confirma: ganando salen delanteros (delantero centro 9, segundo delantero 9, volante izquierdo 9) y los cambios llegan al minuto 70.6 de media; perdiendo sale el delantero centro (8) pero también el pivote izquierdo (7), el lateral derecho (5) y el lateral izquierdo (4), y los cambios llegan al 63.0. Ningún partido se quedó sin primer cambio y solo 8 de 192 cambios fueron por lesión: el banquillo es una herramienta táctica, y la usa pronto.

### Dos fijos en 42 partidos: Rivero (79 %) y Domínguez (76 %); 3.5 titulares nuevos de un partido al siguiente
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Estabilidad del once (Jaccard) 0.56; 3.51 titulares distintos por partido; José Ignacio Rivero 33 titularidades (79 %, 2824 min), Julio César Domínguez 32 (76 %, 2677 min), Rafael Baca 29 (69 %, 2292 min), Pablo Aguilar 27 (64 %, 2343 min), Juan Escobar 27 (64 %, 2287 min); porteros Jesús Corona 18 titularidades (1491 min) y Sebastián Jurado 14 (1183 min); delanteros Santiago Giménez 13 titularidades (1490 min) y Bryan Angulo 18 (1274 min). Núcleo por torneo: 6 jugadores en el Apertura 2021, 7 en el Clausura 2022, 9 en el Apertura 2026"
- kpi: "3.5 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB, D-26
- decision: "Rival: la banda izquierda (Rivero) y el central zurdo (Domínguez) son los únicos nombres seguros en su once; el resto rota, incluidos el portero y el nueve. Atacar al lateral derecho, que cambia de nombre y de perfil según el dibujo. Staff: 3.5 cambios de titular por partido y dos porteros repartidos es demasiado para un equipo que ya varía el dibujo; definir portero y nueve es la decisión de plantilla más urgente, porque el peligro creado depende de pocos tiros de calidad"
Con Cruz Azul el arco se repartió entre Corona (18 titularidades) y Jurado (14), y el nueve entre Giménez (13 titularidades, pero 1490 minutos) y Angulo (18 titularidades, 1274 minutos): Giménez jugó más minutos por partido cuando fue titular. El núcleo cambió de un torneo al otro: en el Apertura 2021 eran Rivero, Domínguez, Fernández, Escobar, Aguilar y Baca; en el Clausura 2022 entraron Lira, Antuna y Aldrete y salió Fernández. Con Necaxa, 9 jugadores repitieron en los 4 partidos.

## Por equipo: qué viaja con Reynoso (Necaxa, Apertura 2026, 4 partidos, confianza baja por la muestra)

### Con Necaxa el equipo es otro: 15 tiros por partido pero concede 2.09 goles esperados, en 4 partidos
- bloque: M-2
- escenario: equipo
- metrica: np_xg_conceded
- cifra: "Necaxa (4 partidos: 0 ganados, 1 empatado, 3 perdidos; 6 goles a favor, 12 en contra): xG concedido 2.09 (p100), 16.0 tiros concedidos (p86), OBV concedido 1.85 (p98), 1.50 goles concedidos de balón parado (p100), xG por córner concedido 0.15 (p100), xG concedido en transición 0.83 (p95), 25.66 % de fases de presión altas (p97), PPDA 15.86 (p75), 26.0 contrapresiones (p8), field tilt 41.91 (p20), xG 1.60 (p96), 15.0 tiros (p81), 17.90 % de secuencias con tiro (p90), xGD -0.49 (p16). Cruz Azul (38): xG concedido 1.01 (p26), 0.34 goles concedidos de balón parado, 13.59 % altas, PPDA 11.97, xGD +0.12 (p65)"
- kpi: "2.09 | 1.01 | goles esperados en contra por partido | 100 | Peligro concedido con Necaxa | contra | con Cruz Azul"
- definiciones: D-26b, D-05, D-07
- decision: "Rival: presionado alto por el Necaxa de Reynoso, salir largo a la espalda; su presión alta no viene acompañada de presión tras pérdida y cada pérdida suya se convierte en contragolpe. Staff de Necaxa: el equipo presiona más arriba que nunca (26 % de rachas en campo rival) pero con menos gente detrás (26 presiones tras pérdida por partido, de las más bajas) y paga cada pérdida: 0.83 de peligro de contragolpe y 1.5 goles de balón parado en contra por partido. Antes de subir la línea hay que arreglar el córner defensivo"
Son 4 partidos y la cifra es orientativa: 1-3 con Atlético San Luis de visita, 2-4 con América, 3-3 con Pachuca y 0-2 con Atlas. Lo ofensivo mejoró con esta plantilla (15 tiros por partido, 1.60 de peligro creado, 18 de cada 100 ataques terminan en tiro, todo arriba de la liga), pero el balance es -0.49 por partido porque concede el doble que con Cruz Azul y el balón parado en contra se multiplicó por cuatro.

### Lo que viaja con Reynoso es la selección de tiro: 29 % desde fuera del área con Necaxa, 38 % con Cruz Azul
- bloque: M-1
- escenario: equipo
- metrica: shots_outside_box_pct
- cifra: "Tiros fuera del área: Cruz Azul 37.73 % (p18), Necaxa 29.40 % (p1); xG por tiro 0.09 (p77) y 0.11 (p97); regates 12.18 (p24) y 11.00 (p12); pases completados bajo presión 66.79 % (p20) y 63.43 % (p4); contrapresiones con regain 25.48 % (p23) y 24.42 % (p15); altura de presión 56.29 m y 55.97; primer cambio 52.18' (p32) y 58.25' (p85); xG en transición 0.58 (p70) y 1.04 (p100); posesión 49.36 % y 46.70 %"
- kpi: "29 % | 38 % | de sus tiros | 1 | Tiros desde fuera del área con Necaxa | neutro | con Cruz Azul"
- definiciones: D-26b, D-12, D-14
- decision: "Rival: con cualquier plantilla, Reynoso no tira de lejos y crea más tras robo que con posesión larga; cerrar el área y cuidar la pérdida sigue siendo la regla. Staff: lo que no cambia de un club a otro es la falta de regate y de salida bajo presión, y la presión tras pérdida que no recupera; eso es del técnico, no de la plantilla, y es donde hay que reforzar o entrenar"
Con 4 partidos es indicio, pero los rasgos del técnico se repiten en el mismo sentido en los dos clubes: pocos regates, pases bajo presión abajo de la liga, altura de presión media (56 metros en ambos) y tiros de cerca. Lo que sí cambió es el reloj del banquillo: con Necaxa el primer cambio llega al 58, 6 minutos más tarde que con Cruz Azul, y el dibujo base pasó al 4-1-4-1, nunca usado antes.
