# Hallazgos — Gandolfi en la Liga MX (Clausura 2026 → Apertura 2026, 18 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Javier Marcelo Gandolfi con datos: León (Clausura 2026, 6; Apertura 2026, 12). Récord 9-3-6. Este técnico tiene 18 partidos en la Liga MX con datos y el análisis se hizo con esos; las cifras son orientativas y los cortes por contexto, con pocas jornadas, pueden moverse. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Presiona poco pero elige bien: 125 presiones por partido, de las más bajas, y 34 % de rachas que roban
- bloque: M-2
- metrica: pressures
- cifra: "125.22 presiones vs 151.51 de liga (p8); 21.61 fases de presión (p6); 25.67 contrapresiones (p6); PPDA propio 13.36 vs 14.03 (p47); 33.58 % de fases de presión con recuperación vs 31.16 (p79); altura de presión 56.20 m (p54); 18.22 % de fases altas (p65)"
- kpi: "125 | 152 | presiones por partido | 8 | Presiones por partido | neutro | liga"
- definiciones: D-05, D-05b, D-06, D-13
- decision: "Rival: no esperar una presión continua; el equipo de Gandolfi salta en momentos elegidos, así que la salida corta es viable si se evita el pase lateral lento en campo propio, que es donde arma la racha. Staff: la selectividad funciona (roba arriba de la liga por racha), pero con tan pocas presiones tras pérdida el equipo depende de que el bloque llegue; medir la presión tras pérdida por partido como señal de desgaste"
Es un equipo que presiona poco en volumen, de los más bajos de la liga en presiones, rachas de presión y presión tras pérdida, pero cuando presiona recupera más que la mayoría. La intensidad medida por los pases que deja dar es la de cualquier equipo de la liga, porque compensa el poco volumen con rachas que sí roban. Con 18 partidos el rasgo es estable entre torneos: 124 presiones en el Apertura y 127 en el Clausura.

### Concede tiros desde lejos: 52 % de los tiros en contra salen del área, de los más bajos de la liga
- bloque: M-2
- metrica: shots_conceded_in_box_pct
- cifra: "51.58 % de tiros concedidos desde el área vs 58.18 % (p7, el lado bueno); xG concedido sin penales 1.05 vs 1.17 (p34); 13.94 tiros concedidos (p58); 13.89 entradas al área del rival (p46); línea defensiva 48.27 m (p54); OBV concedido 1.45 (p53)"
- kpi: "52 % | 58 % | de los tiros en contra | 7 | Tiros concedidos desde dentro del área | favor | liga"
- definiciones: D-12, D-13
- decision: "Rival: tirar de fuera contra León es regalarle el plan; hay que llegar por dentro con pared o con centro atrás, no con remate lejano. Staff: la defensa del área es la base de que el peligro concedido esté abajo de la liga; conviene no cambiarla al ajustar la presión"
Concede tantos tiros como cualquiera, pero casi la mitad llegan desde fuera del área, y por eso el peligro concedido queda abajo de la liga sin presionar mucho. El bloque se defiende cerrando el área, no robando arriba. El punto débil no está en el juego abierto sino en el balón parado y los penales (ver abajo). Muestra de 18 partidos.

### Domina con el pase, no con el regate: 57 % de dominio territorial y solo 10 regates por partido
- bloque: M-1
- metrica: field_tilt
- cifra: "field tilt 57.32 % vs 49.60 (p81); 112.11 pases progresivos vs 100.39 (p83); posesión 53.11 % (p73); 10.33 regates vs 14.03 (p7); 41.56 conducciones progresivas (p63); salida larga del portero 36.20 % vs 46.78 (p15); precisión de pase 80.47 % (p65); directness 0.59 (p51)"
- kpi: "57 % | 50 % | del juego en campo rival | 81 | Dominio territorial | neutro | liga"
- definiciones: D-14, D-10, D-01
- decision: "Rival: quitarle el pase progresivo cerrando los pasillos interiores y dejarle el uno contra uno, que casi no usa. Staff: el equipo avanza por pase y portero corto; si falta el pivote o el lateral derecho que inician, no hay plan de progresión alterno"
Juega en campo rival más que el 81 % de la liga y lo hace a base de pases que avanzan: está arriba de la liga en pases progresivos y de los más bajos en regates, con el portero jugando corto (36 % de salida larga, abajo de la liga). El regate casi no existe en el modelo ni en el Clausura ni en el Apertura (10.0 y 10.5 por partido). Es un equipo de circulación y llegada, no de desborde. Muestra de 18 partidos.

### Carga la derecha: 34 % de los ataques nacen por ese lado y los 3 goles de córner llegaron desde ahí
- bloque: M-1
- metrica: seq_lane_derecho_pct
- cifra: "33.87 % de secuencias nacen por derecha vs 32.25 (p78); 29.89 % por izquierda vs 31.66 (p20); 56.18 % de los córners cobrados desde la derecha; de visita 35.33 % por derecha (p93) y 27.13 % por izquierda (p1); Moreno Füguemann 16 titularidades y 1173 minutos de lateral derecho; cross ratio 0.78 (p16)"
- kpi: "34 % | 32 % | de los ataques nacen por la derecha | 78 | Ataques que nacen por la derecha | neutro | liga"
- definiciones: D-11, D-07
- decision: "Rival: cargar la ayuda defensiva al costado donde ataca Moreno Füguemann y obligarlo a jugar por su izquierda, que es su lado menos natural; de visita el sesgo es todavía más marcado. Staff: la izquierda nace poco y el once ahí rota (tres laterales izquierdos distintos con 8 a 11 titularidades); fijar ese puesto es la forma más barata de equilibrar el ataque"
El sesgo es más de origen que de remate: los ataques nacen por la derecha arriba de la liga y por la izquierda abajo, y fuera de casa la izquierda cae a 27 %, de las más bajas de la liga. El córner refuerza la lectura: 56 % se cobran desde la derecha y los 3 goles de córner salieron del cobro abierto desde ese lado. Son 18 partidos, pero el sesgo aparece de local y de visita.

### Robo que acaba en tiro: 7.4 % de los ataques tras robo terminan en remate, arriba de la liga
- bloque: M-3
- metrica: transition_conv_pct
- cifra: "conversión de transición 7.42 % vs 6.34 (p83); 37.02 % de recuperaciones altas con tiro en 10 s vs 33.25 (p81); 3.68 s de recuperación a tiro vs 3.30 (p81, más lento); 59.89 transiciones vs 63.24 (p25); 4.11 tiros en transición (p68); xG en transición 0.52 (p56); 11.06 recuperaciones altas (p34)"
- kpi: "7.4 % | 6.3 % | de los ataques tras robo terminan en tiro | 83 | Robos que acaban en tiro | favor | liga"
- definiciones: D-03
- decision: "Rival: tras perder el balón contra León no hay que correr hacia atrás a ciegas: el equipo tarda más que la liga en tirar, así que una contrapresión de 4 segundos corta el ataque antes del remate. Staff: el robo se aprovecha bien; el techo está en robar más (está abajo de la liga en robos en campo rival), no en rematar mejor"
Hace pocos ataques tras robo, pero los termina en tiro más que la liga, y cuando roba en campo rival también remata arriba de la liga. Es un contragolpe paciente: tarda 3.7 segundos del robo al tiro, más lento que la mayoría, porque busca la llegada ordenada y no el remate inmediato. Con 18 partidos el porcentaje puede moverse con dos o tres partidos; la lectura de fondo (pocos robos, bien aprovechados) sí es consistente con el poco volumen de presión.

### Llega mucho y remata lo normal: 15.7 llegadas al área, arriba de la liga, para 1.26 de peligro creado
- bloque: M-1
- metrica: box_entries
- cifra: "15.72 entradas al área vs 13.99 (p76); xG sin penales 1.26 vs 1.14 (p69); 14.56 tiros sin penal (p77); xG por tiro 0.09 (p64); 0.78 centros por entrada al área vs 0.94 (p16); 16.29 % de secuencias con tiro (p72); 41.61 % de tiros fuera del área (p46)"
- kpi: "1.26 | 1.14 | goles esperados por partido | 69 | Peligro creado por partido | contra | liga"
- definiciones: D-12, D-02
- decision: "Rival: dejarlo entrar al área por fuera y cerrar el pase atrás; sus llegadas no se convierten en tiros de calidad. Staff: el problema no es llegar sino qué pasa después: el centro se usa poco y el regate casi nada, así que la última acción es casi siempre un pase más; trabajar el remate de primera en zona 14 y el centro atrás"
Entra al área y tira arriba de la liga, pero el peligro creado queda como el de cualquier equipo porque cada tiro vale lo mismo que el promedio. Es el rasgo que más le pesa: domina territorio, llega y remata, y la calidad de la ocasión no acompaña. Con 18 partidos la brecha entre llegadas y peligro es pequeña pero constante en los dos torneos (en el Clausura llegó 18.8 veces por partido y creó 1.40; en el Apertura 14.2 y 1.19).

## Consistencia y variabilidad (D-20, D-21, D-22, D-23, D-25, D-26)

### La presión se apagó del Clausura al Apertura: de 10 a 15 pases que deja dar antes de robar
- bloque: M-2
- escenario: torneo
- metrica: ppda_own
- cifra: "Clausura 2026 (6 pj, 4-0-2): PPDA 10.03 (p5), field tilt 69.77 (p100), posesión 58.75 % (p97), altura de presión 59.34 m (p92), línea defensiva 51.57 m (p89), 17.83 tiros (p98), 14.17 recuperaciones altas (p86), 29.00 contrapresiones, xG 1.40 y concedido 0.85 (p11). Apertura 2026 (12 pj, 5-3-4): PPDA 15.02 (p68), field tilt 51.09 (p55), posesión 50.29 %, altura 54.64 m (p33), línea 46.62 m (p32), 12.92 tiros (p46), 9.50 recuperaciones altas (p9), 24.00 contrapresiones (p3), xG 1.19 y concedido 1.15"
- kpi: "15.0 | 10.0 | pases que deja dar antes de robar | 68 | Intensidad de presión en el Apertura 2026 | contra | en el Clausura 2026"
- definiciones: D-26, D-05b, D-13
- decision: "Rival: el León de hoy no es el del Clausura; se le puede jugar desde atrás y esperar que ceda el balón. Staff: la versión que llegó en marzo (presión de las más intensas de la liga, línea 5 metros más alta, 70 % del territorio) ganó 4 de 6 y concedía 0.85; la del Apertura concede 1.15 y domina la mitad. Recuperar la altura de la línea defensiva antes que cualquier otro ajuste"
Son dos equipos. Los 6 partidos del Clausura (muestra chica, pero son todos los que dirigió) muestran un León que presionaba como los más intensos de la liga, con la defensa 5 metros más arriba y robando 14 balones en campo rival por partido. En el Apertura la presión cayó a la media, los robos altos a 9.5, de los más bajos, y el peligro concedido subió un tercio. Lo que no cambió: pocos regates, salida corta y la derecha como lado dominante.

### En casa 6 ganados de 9: la presión tras pérdida recupera 32 % y concede 12 tiros; fuera 23 % y 16
- bloque: M-2
- escenario: localia
- metrica: cp_regain_pct
- cifra: "Local 6-0-3: contrapresiones con regain 31.76 % (p93), 12.11 tiros concedidos (p26), 11.89 entradas al área del rival (p21), 40.04 % de recuperaciones altas con tiro (p95), xG 1.36 (p82), xG rival en 10 s tras pérdida 0.10 (p6); pero xG concedido de balón parado 0.67 (p90) y en transición 0.71 (p88). Visita 3-3-3: regain 22.82 % (p6), 15.78 tiros concedidos (p83), 15.89 entradas al área del rival (p76), xG 1.15, xG concedido 1.03, 27.13 % de secuencias por izquierda (p1); PPDA 13.70 local vs 13.01 visita"
- kpi: "31.8 % | 22.8 % | de las presiones tras pérdida recuperan el balón | 93 | Presión tras pérdida que recupera, de local | favor | de visita"
- definiciones: D-20, D-06, D-03
- decision: "Rival de visita en León: el partido se gana a balón parado y al contragolpe largo, no en juego abierto; es donde concede en casa. Rival recibiendo a León: atacarlo por su derecha defensiva tras pérdida, su presión tras pérdida fuera de casa recupera de las menos de la liga. Staff: el equipo viaja con la misma intensidad de presión pero sin la recuperación tras pérdida; revisar las distancias entre líneas fuera de casa"
De local el equipo cierra el área (12 tiros y 12 entradas concedidas, abajo de la liga) y recupera tras pérdida como los mejores; de visita concede 16 tiros y 16 entradas, arriba de la liga, y la presión tras pérdida deja de funcionar. Las 3 derrotas de local (América dos veces y Atlas) llegaron con el balón parado y el contragolpe en contra, no con dominio rival. Son 9 y 9 partidos: el patrón es claro pero una jornada lo mueve.

### Ganando se repliega como nadie: 96 presiones por cada 90 minutos, las más bajas de la liga
- bloque: M-2
- escenario: marcador
- metrica: pressures
- cifra: "Ganando (12 pj, 539 min, por 90): 96.07 presiones vs 122.55 de liga (p1), 17.54 presiones en último tercio (p19), 21.22 contrapresiones (p11), field tilt 45.54, posesión 46.45 %, xG concedido 1.45 (p69), 14.87 tiros concedidos, xG concedido en transición 0.65 (p82); a cambio 5.01 tiros en transición (p90) y xG en transición 0.59 (p72). Perdiendo (6 pj, 397 min): altura de presión 62.25 m (p89), 117.21 pérdidas (p95), field tilt 74.79 (p90), xG 1.32 (p76), xG concedido 0.89 (p25). Ganando de visita (168 min en 6 partidos): 20.32 tiros concedidos y 1.65 xG concedido por 90"
- kpi: "96 | 123 | presiones por cada 90 minutos | 1 | Presiones cuando va ganando | contra | liga"
- definiciones: D-21, D-05, D-03, D-04
- decision: "Rival: si León se adelanta, el partido se abre a favor del que ataca: cede el balón, baja la presión y concede 1.45 por 90; empujar con llegadas por dentro y cuidar la pérdida, porque castiga al contragolpe (5 tiros tras robo por 90). Staff: ganando el equipo pasa de 120 a 96 presiones y el peligro concedido sube de 1.17 a 1.45; el repliegue es decisión, no cansancio, y se nota más fuera de casa (20 tiros concedidos por 90). Bajar la línea no debe significar dejar de presionar al portador"
Con ventaja el equipo cambia de modelo: cede el territorio (46 % de dominio, 46 % de posesión), presiona menos que cualquier equipo de la liga y vive del contragolpe, que sí produce. El costo es claro: concede más peligro ganando que empatando o perdiendo. Perdiendo hace lo contrario, sube la presión 10 metros y pierde más balones que nadie, pero concede poco. Los 6 partidos perdiendo son muestra chica; los 12 ganando son más sólidos.

### El cuarto de hora tras el descanso es su agujero: 1.80 de peligro concedido por 90 minutos
- bloque: M-2
- escenario: momento
- metrica: transition_xg_conceded
- cifra: "Por 90 minutos. 45-60: xG concedido 1.80 vs 1.43 de liga (p90), xG concedido en transición 1.11 (p97), 11.33 recuperaciones altas propias (p76). 30-60 agregado: xG concedido 1.55 (p86), xG concedido en transición 0.75 (p92), xG concedido de balón parado 0.60 (p86), 104.51 presiones (p5). 0-30: xG concedido 0.77 (p21), xG concedido en transición 0.32. 60-75: PPDA 18.68 (p96), OBV concedido 1.70 (p87), 60.01 m de altura de presión (p96). Primer cambio al 45' en 12 de 18 partidos"
- kpi: "1.80 | 1.43 | goles esperados en contra por cada 90 minutos | 90 | Peligro concedido del minuto 45 al 60 | contra | liga"
- definiciones: D-22, D-04, D-05b
- decision: "Rival: salir del descanso a atacar de inmediato y buscar el contragolpe en esos 15 minutos; es cuando León está más expuesto y cuando acaba de meter su primer cambio. Staff: el equipo arranca la segunda parte más alto y más partido; revisar qué pide en el descanso y escalonar el primer cambio (hoy casi siempre al 45') para no reacomodar todo el bloque en el tramo que más concede"
En la primera media hora concede abajo de la liga; entre el 45 y el 60 concede más del doble, y la mayor parte llega al contragolpe (1.11 por 90, de los más altos de la liga). Coincide con dos cosas: el primer cambio entra al descanso en 12 de 18 partidos y el equipo sale a robar más arriba (11 robos altos por 90 en ese tramo, contra 5 en el arranque). Después, entre el 60 y el 75, la presión se apaga por completo (19 pases antes de robar, de los más bajos). Muestra de 18 partidos: el tramo son 270 minutos.

### Mata al final: 5.6 tiros tras robo por 90 minutos del 75 al 90, de los más altos de la liga
- bloque: M-3
- escenario: momento
- metrica: transition_shots
- cifra: "Por 90 minutos. 75-90 (401 min): 5.62 tiros en transición vs 3.52 de liga (p96), xG en transición 0.96 (p85), 16.40 entradas al área (p83), 14.60 tiros (p75), 10.56 recuperaciones altas (p66). 0-15: 1.67 tiros en transición (p12), xG en transición 0.17 (p29), 5.00 recuperaciones altas (p8), 9.67 tiros. 60-90 agregado: 4.70 tiros en transición (p87), xG en transición 0.69 (p73), 16.24 entradas al área (p87), 98.91 presiones (p7), 20.80 contrapresiones (p10)"
- kpi: "5.6 | 1.7 | tiros tras robo por cada 90 minutos | 96 | Tiros tras robo del minuto 75 al 90 | favor | en los primeros 15 minutos"
- definiciones: D-22, D-03
- decision: "Rival: en el último cuarto de hora no regalar balones en salida aunque se vaya ganando; León no presiona (99 presiones por 90 en el último tramo), pero cada robo lo convierte en tiro. Staff: el final es el mejor tramo ofensivo; los cambios ganando salen al 68' en promedio y refrescan justo para ese tramo, mantenerlo"
El equipo empieza frío (1.7 tiros tras robo por 90 en los primeros 15 minutos, de los más bajos, con apenas 5 robos altos) y termina como uno de los equipos más peligrosos de la liga al robar. No es por presionar más al final, presiona menos que nadie, sino por los espacios que deja el rival y por los cambios: ganando saca lateral derecho y delantero centro para meter piernas frescas. Con 18 partidos el tramo 75-90 suma 401 minutos, suficiente para la tendencia.

### Pierde dominando: 68 % del territorio y un gol de balón parado en contra por partido perdido
- bloque: M-4
- escenario: resultado
- metrica: sp_goals_conceded
- cifra: "Perdió 6: field tilt 67.51 (p100), posesión 56.29 % (p90), 6.83 córners (p98), 12.50 saques de banda en zona de peligro (p100), altura de presión 59.32 m (p92), 34.47 % de secuencias nacen en tercio defensivo (p0); concede 1.00 goles de balón parado por partido (p100), xG concedido de balón parado 0.83 (p98), xG concedido en transición 0.97 (p99); xG sin penales 1.24 vs 1.00 concedido, xGD -0.42 con penales. Ganó 9: 48.51 % de secuencias desde tercio defensivo (p91), 17.96 % acaban en tiro (p90), 0.22 goles de balón parado concedidos (p11), xG concedido en transición 0.43 (p28), field tilt 53.91"
- kpi: "1.0 | 0.22 | goles de balón parado en contra por partido | 100 | Goles concedidos de balón parado cuando pierde | contra | cuando gana"
- definiciones: D-07, D-04, D-10
- decision: "Rival: para ganarle a León hay que dejarle el balón y el territorio, defender el área y pegarle en dos sitios: balón parado y contragolpe. Es la receta exacta de sus 6 derrotas. Staff: las derrotas no vienen de crear menos (crea 1.24, como cuando gana) sino de 6 goles de balón parado en 6 partidos perdidos y de conceder al contragolpe el doble que en las victorias; el trabajo del lunes es el balón parado defensivo y el equilibrio al perder el balón en campo rival"
Cuando pierde, León domina más que nunca: 68 % del territorio, 7 córners y 12 saques de banda cerca del área rival por partido, todo de lo más alto de la liga. Y pierde porque el partido se le rompe atrás: un gol de balón parado por partido perdido (incluidos los penales), peligro concedido al contragolpe el doble que cuando gana. Cuando gana, en cambio, sus ataques nacen más desde su propio campo (48 %, arriba de la liga): juega más largo y más a la espera. Son 6 derrotas: el patrón es nítido pero la muestra es chica.

### Con la liguilla al alcance remata 18 % de sus ataques; ya dentro de zona directa, 11 %
- bloque: M-1
- escenario: tabla
- metrica: seq_shot_pct
- cifra: "Directa alcanzable (10 pj, 6-1-3): 18.23 % de secuencias terminan en tiro (p93), 16.10 tiros (p90), field tilt 58.59 (p87), xGD 0.23 (p72), OBV concedido 1.24 (p22), 73.41 % de pases bajo presión completados (p81), 4.13 s de robo a tiro (p96). Zona directa (4 pj, 1-2-1): 11.28 % (p3), 10.75 tiros (p10), xG por tiro 0.13 (p100), OBV concedido 1.79 (p95), xG en transición 0.79 (p95), 0.75 goles de balón parado (p97), 64.02 % bajo presión (p4). Arranque (4 pj, 2-0-2): 42.25 % de fases de presión con recuperación (p100), xG concedido de balón parado 0.79 (p97), xGD -0.50"
- kpi: "18.2 % | 11.3 % | de sus ataques terminan en tiro | 93 | Ataques que terminan en tiro cuando la liguilla directa es alcanzable | favor | ya en zona directa"
- definiciones: D-23, D-02
- decision: "Rival: cuando León ya está en zona de liguilla directa remata la mitad de lo normal y concede más valor al rival; es el momento para presionarle la salida, porque sus pases bajo presión caen a los más bajos de la liga. Staff: persiguiendo la liguilla el equipo es el más vertical y el más sólido (concede abajo de la liga); al asegurarla se vuelve conservador y tira menos; el plan debe ser el mismo con y sin la liguilla en la mano"
Con la liguilla directa alcanzable León jugó sus mejores 10 partidos: 6 ganados, 16 tiros por partido y la mejor relación de peligro. Los 4 partidos en zona directa (Querétaro, Juárez, Puebla y América, 1 ganado) son muestra chica y van como indicio: la mitad de tiros, menos remate por ataque y más valor concedido, aunque cada tiro fue de más calidad. Los 4 partidos de arranque de torneo también son indicio: presión que roba como nadie pero balón parado en contra de lo más alto.

### Contra los seis de arriba tiene más balón y pierde: 65 % de dominio y 3.2 tiros rivales tras pérdida
- bloque: M-2
- escenario: rival
- metrica: vuln_shots
- cifra: "Top 6 (5 pj, 1-1-3): field tilt 64.89 (p97), posesión 57.75 % (p96), 93.80 secuencias (p100), OBV ofensivo 1.80 (p94), 50.60 conducciones progresivas (p96), xG 1.40 (p86), PPDA 11.56 (p20); 3.20 tiros rivales en 10 s tras pérdida (p97), 62.71 % de pases bajo presión completados (p4), OBV concedido 1.69 (p86), xG concedido 1.16, 0.80 goles de balón parado (p97). Resto (13 pj, 8-2-3): field tilt 54.41, 1.77 tiros rivales tras pérdida (p16), 72.10 % bajo presión (p70), xG concedido 1.00 (p26), 57.23 transiciones (p10)"
- kpi: "3.2 | 1.8 | tiros del rival en los 10 segundos tras una pérdida, por partido | 97 | Tiros del rival justo tras perderla, contra rivales del top 6 | contra | contra el resto"
- definiciones: D-25, D-04, D-01
- decision: "Rival de arriba: dejarle el balón a León y presionarle la salida; contra los grandes pierde 4 de cada 10 pases bajo presión y cada pérdida suya es un tiro rápido. Staff: contra los de arriba el equipo ataca más y mejor que nunca (94 ataques, el valor ofensivo más alto) pero regala contragolpes; el problema es la estructura al perder el balón, no el ataque. Un pivote más y una conducción menos cuando el rival es top 6"
Son 5 partidos (Atlas dos veces, Toluca, Querétaro y América), muestra chica, pero el patrón es coherente con el resto del perfil: contra los grandes León domina el balón y el territorio como nadie en la liga y crea 1.40 de peligro, y aun así pierde 3 de 5 porque sus pérdidas se convierten en tiros rivales al doble de ritmo que contra el resto. Contra el América suma 0 ganados y 2 perdidos con 8 goles en contra creando 1.43 y 2.02 de peligro.

## Balón parado (M-4)

### Córner flojo: 0.14 de peligro por partido, abajo de la liga, y los 3 goles vienen del mismo cobro
- bloque: M-4
- metrica: corner_xg
- cifra: "89 córners (4.94 por partido, p55), 3 goles; xG de córner 0.14 vs 0.18 (p25); xG por córner 0.03 vs 0.04 (p29). Abiertos (outswinging) 50.56 % vs 41.48 de liga: 45 córners, 23 tiros, 1.60 xG, 3 goles; cerrados (inswinging) 38.20 %: 34 córners, 9 tiros, 0.72 xG, 0 goles; cortos 4.44 % vs 13.42 (p13). Derecha abierto al centro: 27 córners, 12 tiros, 1.05 xG, 3 goles. En contra: 89 córners, 3 goles, 0.03 xG por córner concedido (p24)"
- kpi: "0.14 | 0.18 | goles esperados de córner por partido | 25 | Peligro creado de córner | contra | liga"
- definiciones: D-07
- decision: "Rival: el cobro a vigilar es uno solo, el abierto desde la derecha al centro del área; defenderlo con un hombre más en el segundo palo y zona en el punto de penal. El cerrado y el corto casi no producen. Staff: el cerrado lleva 34 córners sin gol y la mitad de peligro por cobro que el abierto; cobrar casi todo abierto y meter el corto (hoy 4 %, de los más bajos) como variante contra rivales que defienden en zona"
Saca los córners de cualquier equipo pero crea abajo de la liga con ellos, y los 3 goles en 89 córners salieron del mismo envío: abierto desde la derecha al centro. El cerrado, que es más de un tercio de sus cobros, no ha dado un gol. Defensivamente el córner no es el problema: 3 goles concedidos en 89, con peligro por córner concedido abajo de la liga. Muestra de 18 partidos: 89 cobros son pocos para afinar por zona, suficientes para ver qué tipo funciona.

### 7 penales en contra en 18 partidos, 6 goles: el balón parado defensivo se rompe por la falta en el área
- bloque: M-4
- metrica: sp_goals_conceded
- cifra: "7 penales en contra (xG 5.48, 6 goles) vs 3 a favor (xG 2.35, 3 goles) en 18 partidos; goles concedidos de balón parado 0.50 por partido vs 0.45 (p64); xG concedido de balón parado 0.55 vs 0.48 (p69); 97 tiros libres en contra (5.4 por partido), 14 tiros al área, 0 goles; 13.67 faltas por partido (p54); 51.58 % de tiros concedidos desde el área (p7)"
- kpi: "7 | 3 | penales en 18 partidos | 64 | Penales en contra | contra | a favor"
- definiciones: D-07, D-12
- decision: "Rival: buscar el contacto dentro del área, sobre todo en el cuarto de hora tras el descanso y en los partidos que León domina; el equipo que apenas deja tirar desde dentro del área concede el penal. Staff: 6 de los 26 goles en contra son de penal; es la prioridad defensiva número uno y no se arregla con estructura sino con el defensor que llega tarde al área. Revisar quién comete las faltas y a qué altura del partido"
Un penal en contra cada 2.6 partidos, casi todos convertidos, en un equipo que por lo demás concede tiros desde lejos. Es la paradoja del modelo: cierra el área en juego abierto y la abre con la falta. El córner en contra (3 goles) y el tiro libre en contra (0 goles en 97) están controlados; el gol de balón parado concedido está apenas arriba de la liga y lo explican los penales. Con 18 partidos, 7 penales pueden ser racha; con 6 goles de 26 no se puede esperar a comprobarlo.

### 9 saques de banda cerca del área rival por partido, arriba de la liga, y cero goles con ellos
- bloque: M-4
- metrica: throwins_danger
- cifra: "8.94 saques de banda en zona de peligro por partido vs 7.72 (p85); 161 en total, 3 tiros, 0.26 xG, 0 goles; retiene 64.13 % vs 61.06 (p60); xG tras saque 0.01 (p46); xG total de balón parado 0.35 vs 0.47 (p19); tiro libre directo 0.01 xG (p12), 5 tiros, 0 goles; en derrotas 12.50 saques en zona de peligro por partido (p100)"
- kpi: "8.9 | 7.7 | saques de banda cerca del área rival por partido | 85 | Saques de banda en zona de peligro | neutro | liga"
- definiciones: D-07
- decision: "Rival: el saque de banda de León es volver a empezar, no un ataque; no gastar hombres en marcarlo y mantener la estructura. Staff: hay 9 saques por partido cerca del área y producen nada; una jugada ensayada (segundo palo o devolución al lanzador) es el gol más barato que le falta al balón parado, que en total está abajo de la liga"
El equipo llega mucho a la banda rival, por eso saca arriba de la liga cerca del área, pero el saque no se convierte en nada: 3 tiros en 161 saques. Sumado al córner flojo y al tiro libre directo casi inexistente, el balón parado ofensivo es el más pobre de su perfil (0.35 de peligro por partido, abajo de la liga). En las derrotas el volumen se dispara a 12.5 saques por partido: cuando no puede entrar, insiste por banda. Muestra de 18 partidos.

## Jugadores y cambios (M-5)

### Cambia al descanso: primer cambio al 47', de los más tempranos de la liga, 12 de 18 veces al 45'
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio al 47.44' vs 53.87 de liga (p4); al 45' en 12 de 18 partidos y nunca después del 66'; empatando media 41.33' (mediana 45'), ganando 53.14' (mediana 56'), perdiendo 46.8' (mediana 45'); de visita 43.78', de local 51.11'. 4.78 cambios por partido, 83 tácticos y 3 por lesión. Perdiendo (5 pj), 15 min antes vs después: xG 0.10 a 0.33, tiros 1.4 a 3.0, PPDA 19.0 a 10.67, field tilt 56.32 a 68.27. Ganando (7 pj): xG 0.31 a 0.23, PPDA 17.07 a 22.15"
- kpi: "47' | 54' | minuto del primer cambio | 4 | Minuto del primer cambio | neutro | liga"
- definiciones: SB, D-21, D-20
- decision: "Rival: el primer cambio de León llega al descanso casi siempre; preparar el ajuste de marcas para el arranque del segundo tiempo, no para el 60. Staff: perdiendo el cambio al descanso funciona (el peligro creado se triplica y la presión se duplica en los 15 minutos siguientes); ganando el cambio relaja la presión y baja el peligro creado. Perdiendo, mantener; ganando, pensar si el primer cambio debe ser de piernas y no de estructura"
Es el técnico que más temprano cambia: el primer cambio entra al descanso en dos de cada tres partidos, y de visita o empatando todavía antes. Casi todos los cambios son tácticos (83 de 86). El efecto depende del marcador: perdiendo, los 15 minutos después del cambio traen el triple de peligro creado y una presión mucho más intensa (de 19 a 11 pases antes de robar); ganando, el cambio enfría al equipo. Son 5 y 7 partidos por estado: tendencia, no ley.

### 4-1-4-1 en la mitad de los partidos y casi no lo toca: 1.1 cambios de dibujo por partido, de los más bajos
- bloque: M-5
- metrica: tactical_shifts
- cifra: "Dibujo inicial 4141 en 9 de 18 (50 %), 4231 en 4 (22 %), 433 en 2, 41212 en 2, 442 en 1; 1.11 cambios de dibujo por partido vs 1.80 (p6); cambio real de dibujo en 6 de 18 partidos, 4 empatando y 2 ganando; el más repetido es 4141 a 4411 empatando (2). Perdiendo, del minuto 50 al 65 juega en 4231 el 66 %, 64 %, 50 % y 49 % del tiempo; ganando, al minuto 90 termina en 4231 el 30 % y en 4141 el 21 %. Clausura 2026: 4141 en 3, 433 en 2; Apertura 2026: 4141 en 6, 4231 en 3"
- kpi: "1.1 | 1.8 | cambios de dibujo por partido | 6 | Cambios de dibujo dentro del partido | neutro | liga"
- definiciones: SB, D-21, D-26
- decision: "Rival: el dibujo con el que arranca es el que va a defender casi todo el partido; si va perdiendo después del 50 esperar un mediapunta más (4-2-3-1), nunca dos delanteros. Staff: la estabilidad del dibujo es coherente con un modelo de circulación; el ajuste al perder ya existe (adelantar un interior) y es el mismo con el que arrancó el Apertura, conviene formalizarlo como plan B"
Arranca en 4-1-4-1 la mitad de los partidos y es de los técnicos que menos tocan el dibujo durante el partido: 1.1 cambios de forma, de los más bajos de la liga, y cambio real de sistema solo en 6 de 18. Cuando va perdiendo, pasado el minuto 50, la respuesta es siempre la misma: adelantar un interior y jugar 4-2-3-1 dos tercios del tiempo. No usa 4-4-2 ni línea de tres para remontar. Con 18 partidos el 4-1-4-1 como base está claro en los dos torneos; la respuesta perdiendo sale de 6 partidos.

### Once en obra: 3 titulares distintos por partido y un núcleo de 6 que cambió de torneo a torneo
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Jaccard entre onces consecutivos 0.59; 3.0 titulares distintos de un partido al siguiente; núcleo (70 % o más de titularidades): García Herrera 16 titularidades y 1325 min, Rodríguez Rebollar 16 y 1285, Moreno Füguemann 16 y 1173, Echeverría 14 y 1165, Cambindo 14 y 1118, Beltrán 13 y 820. Núcleo del Clausura 2026: 10 jugadores en 6 pj; del Apertura 2026: 7 en 12 pj. Ganando saca lateral derecho (7) y delantero centro (6); perdiendo saca pivote izquierdo (3), lateral derecho (3), volante derecho (3) y lateral izquierdo (3)"
- kpi: "3.0 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB, D-26
- decision: "Staff: la columna es portero, pivote, lateral derecho y delantero (García Herrera, Rodríguez Rebollar, Moreno Füguemann, Cambindo); todo lo demás rota, sobre todo el costado izquierdo y la pareja de centrales, que cambió entera entre torneos. Rival: el lateral derecho y el pivote son los que inician; si uno falta, León pierde la progresión. Ganando saca a Moreno Füguemann y a Cambindo, los que más corren"
Tres titulares distintos cada partido y una estabilidad del once en la mitad de la escala. El núcleo real son seis jugadores, y de ellos solo cuatro (portero, pivote, lateral derecho, delantero) fueron núcleo en los dos torneos: el Clausura tuvo diez fijos en seis partidos (Solís, Cruz, Reyes Chávez, Díaz de León) y el Apertura siete en doce (Guevara, Romaña, Arcila). Los centrales cambiaron por completo de un torneo al otro. Ganando saca al lateral derecho y al delantero: refresca piernas en los dos puestos que más recorren, no cierra con un defensor.

## Partidos y rivales

### Balance de peligro parejo (0.03) con partidos de extremos: 4 triunfos seguidos y luego 4 derrotas
- bloque: M-1
- metrica: xgd
- cifra: "xGD 0.03 vs -0.03 de liga (p57); récord 9-3-6; rachas: 4 victorias seguidas, 4 sin perder, 4 derrotas seguidas; ganó con menos peligro que el rival 1 vez (Monterrey 2-0: xG 1.04 vs 1.63, field tilt 21, posesión 35 %) y nunca perdió creando más de 0.3 que el rival; América 0-0-2 (xG 1.43 vs 0.73 y 2.02 vs 1.44); Cocca 1-0-1 con xG 1.24 / 0.81; top 6: 1-1-3"
- kpi: "0.03 | -0.03 | goles esperados de diferencia por partido | 57 | Balance de peligro por partido | neutro | liga"
- definiciones: SB, D-25
- decision: "Rival: el resultado contra León lo deciden el balón parado y los penales, no el peligro en juego abierto, que es parejo; preparar el partido ahí. Staff: los resultados siguen al peligro salvo contra el América, donde creó más y perdió dos veces con 8 goles en contra; ese partido merece un análisis aparte de los goles concedidos (penales y contragolpes) antes de una posible liguilla"
Llegó en marzo y ganó sus primeros 4 partidos con el León más presionante; luego encadenó 4 derrotas (América, Toluca, Atlas y Tijuana) entre el cierre del Clausura y el arranque del Apertura, y desde entonces alterna. El balance de peligro es neutro y casi todos los resultados lo respetan: solo una vez ganó creando menos (Monterrey, con 21 % del territorio y 35 % de posesión, su partido más replegado) y nunca perdió creando claramente más. La excepción es el América: dos derrotas creando más peligro que el rival. Muestra de 18 partidos.
