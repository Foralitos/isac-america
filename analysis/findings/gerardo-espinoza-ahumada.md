# Hallazgos — Gerardo Espinoza en la Liga MX (Clausura 2025 → Apertura 2026, 18 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Espinoza con datos: Guadalajara (Clausura 2025, 6 partidos) y Puebla (Apertura 2026, 12 partidos). Récord 5-7-6. Este técnico tiene 18 partidos en la Liga MX con datos y el análisis se hizo con esos; las cifras son orientativas y los cortes por contexto, con pocas jornadas, pueden moverse. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas, "presión tras pérdida" = contrapresión); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Presión de las menos intensas de la liga: deja dar 19 pases antes de robar, la liga deja 14
- bloque: M-2
- metrica: ppda_own
- cifra: "PPDA propio 18.7 vs 14.0 de liga (p92, de los más altos); 27.7 contrapresiones vs 32.0 (p14); 146.6 presiones (p41); altura de presión 54.3 m vs 55.8 (p27); 27.8 fases de presión (p38), 15.6 % en campo rival (p40); con Guadalajara PPDA 15.2, con Puebla 20.4"
- kpi: "18.7 | 14.0 | pases que deja dar al rival antes de robar | 92 | Intensidad de presión: más pases es menos intensa | neutro"
- definiciones: D-05b, D-06, D-13
- decision: "Rival: salir jugando desde atrás con calma; su equipo no salta a presionar al portero ni a los centrales. Staff: si la presión baja es decisión, el bloque tiene que compensar cerrando el área, y hoy concede 15 tiros por partido"
Es el rasgo que más lo separa de la liga y viaja con él: con Guadalajara dejaba dar 15 pases y con Puebla 20, los dos arriba de la liga. No es un equipo que presione tras perder el balón (28 presiones tras pérdida por partido, abajo de la liga), pero cuando lo hace recupera arriba de la liga: 30 % de esas presiones terminan en robo. La altura de presión queda como la liga, es decir, no se mete atrás del todo: espera a media cancha sin saltar. Con 18 partidos, el patrón se repite en los dos equipos y es lo más sólido del perfil.

### Llega poco al área y tira desde lejos: 11 llegadas al área por partido y la mitad de los tiros desde fuera
- bloque: M-1
- metrica: box_entries
- cifra: "11.1 entradas al área vs 14.0 de liga (p12); 49.2 % de tiros desde fuera del área vs 42.8 % (p88); xG por tiro 0.08 vs 0.09 (p20); xG sin penales 0.93 vs 1.14 (p20); 12.7 tiros (p40); 1.04 centros por entrada al área (p74); OBV ofensivo 1.26 (p24)"
- kpi: "11.1 | 14.0 | llegadas al área por partido | 12 | Llegadas al área por partido | contra"
- definiciones: D-12, D-02
- decision: "Rival: cerrar el área y dejarlo tirar de fuera; la calidad de cada tiro ya es de las más bajas de la liga. Staff: el problema no es el volumen de tiros (13, como la liga) sino de dónde salen; trabajar la última entrega al área, hoy tira un centro por cada vez que entra"
Tira casi lo mismo que la liga pero desde peor zona, y por eso el peligro creado queda abajo de la liga. Con Puebla se agrava: 54 % de los tiros desde fuera, de los más altos de la liga, y 0.79 de peligro creado por partido, de los más bajos. Con Guadalajara el reparto era normal (39 % desde fuera) y el peligro creado estaba arriba de la media, así que el dato pesa más sobre la plantilla de Puebla que sobre el técnico; son 18 partidos y 12 son con Puebla.

### No vive del robo: 0.28 de peligro creado tras robar por partido, de los más bajos de la liga
- bloque: M-3
- metrica: transition_xg
- cifra: "xG en transición 0.28 vs 0.51 de liga (p5); 61.2 transiciones (p34); 3.28 tiros en transición (p30); conversión 5.5 % vs 6.3 % (p22); 10.8 recuperaciones altas (p30); 3.49 s de recuperación a tiro (p67); concede 0.42 en transición (p26)"
- kpi: "0.28 | 0.51 | goles esperados tras robo por partido | 5 | Peligro creado en los segundos después de robar el balón | contra"
- definiciones: D-03, D-04
- decision: "Rival: no hay castigo por perder el balón en campo propio; se puede arriesgar en la salida. Staff: con poca presión y pocos robos en campo rival, el contragolpe no existe; o se sube la línea de robo o se trabaja el ataque posicional, porque hoy no hay ninguna de las dos"
Roba poco arriba (11 recuperaciones en campo rival por partido, abajo de la media) y cuando roba tarda en tirar: 3.5 segundos, más lento que la liga. Es coherente con la presión baja: un equipo que espera no genera robos en zona de tiro. Lo que concede en contragolpe está como la liga (0.42), así que la cuenta en transiciones es neutra, pero sin ganancia. En sus 5 victorias el peligro tras robo tampoco subió: ganó por otra vía, el balón parado.

### Equipo sin balón que arranca desde atrás: 45 % de posesión y casi la mitad de sus ataques nacen en su campo
- bloque: M-1
- metrica: possession_pct
- cifra: "Posesión 45.3 % vs 49.8 % de liga (p18); 47.15 % de secuencias nacen en tercio defensivo vs 44.5 % (p81); 36.5 % en tercio medio (p18); salida larga del portero 53 % vs 47 % (p76); field tilt 44.6 vs 49.6 (p30); 76.6 secuencias (p26); pases progresivos 91.9 vs 100.4 (p25)"
- kpi: "45 % | 50 % | de posesión | 18 | Posesión del balón | neutro"
- definiciones: D-01, D-10, D-02
- decision: "Rival: tener el balón contra él es lo normal, no una victoria; lo que decide es si se puede entrar al área sin regalar la segunda pelota de su salida larga. Staff: con 53 % de salida larga y un equipo que no presiona, la segunda pelota en medio campo es el duelo que define sus partidos; medirla y entrenarla"
El equipo cede el balón y arranca sus ataques desde su propio campo, muchas veces con pelotazo del portero. El dominio territorial queda como la liga pero por abajo (45 % del juego en campo rival) y los pases hacia adelante también. Es un estilo que viaja: con Guadalajara tuvo 49 % de posesión, con Puebla 43 %. Lo que no cambia es que el portero juega largo más que la liga, en los dos equipos.

### Defiende sin faltas: 11 por partido, de las más bajas de la liga, y cuando aprieta tras perderla recupera 30 %
- bloque: M-2
- metrica: fouls
- cifra: "11.4 faltas vs 13.6 de liga (p7); contrapresiones con regain 29.8 % vs 27.4 % (p81); 54.4 % de tiros concedidos desde el área vs 58.2 % (p21); concede 14.9 tiros (p73) pero 1.11 xG sin penales (p42); 15.1 entradas al área rival (p64); línea defensiva 45.9 m (p28)"
- kpi: "11.4 | 13.6 | faltas por partido | 7 | Faltas cometidas por partido | favor"
- definiciones: D-06, D-12, D-13
- decision: "Rival: no esperar tiros libres cerca del área, hay que crear el peligro en juego; sus defensas no cortan con falta. Staff: la selectividad es una virtud; el riesgo es que concede 15 tiros por partido y casi la mitad desde fuera, un rival con buen pegador lejano lo castiga"
Es la cara buena de la presión baja: un bloque ordenado que no pierde la forma y no regala tiros libres (84 tiros libres en contra en 18 partidos, 0 goles). Concede más tiros que la liga, pero los empuja fuera del área: por eso el peligro concedido queda como la liga aunque los tiros estén arriba. Con Guadalajara el peligro concedido estaba abajo de la liga (0.91) y con Puebla arriba (1.22); lo que viaja es la poca falta, lo que cambia es la calidad del bloque.

### Partidos cerrados: 16 de 18 se decidieron por un gol o menos y el balance de peligro es negativo
- bloque: M-2
- metrica: xgd
- cifra: "Diferencia de xG -0.27 por partido vs -0.03 de liga (p30); 5 ganados, 7 empatados y 6 perdidos; 16 goles a favor y 19 en contra; perdió creando más peligro 1 vez (Cruz Azul, xG 1.90 contra 0.47) y ganó creando menos 1 vez (Pachuca, 1.03 contra 1.96); mejor racha 4 partidos sin perder"
- kpi: "-0.27 | -0.03 | goles esperados de diferencia por partido | 30 | Balance de peligro: creado menos concedido | contra"
- definiciones: D-21
- decision: "Rival: los partidos contra él se deciden por detalles; el primer gol pesa más que contra otros porque su equipo ganando se repliega. Staff: con 7 empates en 18, convertir dos de esos empates en victorias cambia la temporada; el margen está en el balón parado, donde gana cuando anota"
Las 5 victorias fueron por un gol y 7 de los 18 partidos terminaron empatados. El balance de peligro es negativo por lo que crea (0.93, abajo de la liga), no por lo que concede (1.11, como la liga). Los marcadores suelen coincidir con el peligro: solo una vez ganó mereciendo perder (Pachuca, 3-2 de visita) y solo una vez perdió mereciendo ganar (Cruz Azul, 0-1 de local). Con 18 partidos el balance de peligro se mueve con dos o tres resultados.

## Consistencia y variabilidad (D-20 a D-26b)

### De visita concede 17 tiros por partido y 0.72 de peligro de balón parado; de local, 13 y 0.20
- bloque: M-2
- escenario: localia
- metrica: shots_conceded
- cifra: "Visita (10 partidos, 3 ganados, 3 empatados y 4 perdidos): 16.70 tiros concedidos (p89), 60.27 % desde el área (p70), OBV concedido 1.70 (p86), xG concedido de balón parado 0.72 (p93), xG concedido en transición 0.52. Local (8 partidos, 2 ganados, 4 empatados y 2 perdidos): 12.75 tiros (p35), 47.07 % desde el área (p1), OBV concedido 1.16 (p11), balón parado 0.20 (p1), transición 0.29 (p4). Ganando de visita concede 1.75 xG por 90; ganando de local 0.64"
- kpi: "16.7 | 12.8 | tiros concedidos por partido | 89 | Tiros que concede de visita | contra | de local"
- definiciones: D-20, D-07, D-12
- decision: "Rival: si lo recibes, cargar el balón parado ofensivo y buscar tiros desde dentro del área, de visita su bloque se abre. Staff: de visita el equipo se encierra sin cerrar el área; el balón parado defensivo fuera de casa es el primer entrenamiento de la semana"
El récord apenas cambia (de visita incluso gana más), pero lo que concede sí: de visita los tiros suben, entran más desde el área, y el peligro de balón parado en contra se multiplica por tres y medio. En casa regatea más (17.6 por partido contra 10.9) y tira más tras robo (4.25 contra 2.50). También cambia la mano del técnico: en casa hace el primer cambio al 62.6', fuera al 54.0'. Son 8 y 10 partidos: dirección clara, cifras orientativas.

### Ganando se encierra: 30 % de dominio territorial, 7 llegadas al área por 90 y concede más que perdiendo
- bloque: M-1
- escenario: marcador
- metrica: field_tilt
- cifra: "Ganando (391 min en 9 partidos): field tilt 29.9 (p24), 7.13 entradas al área por 90 (p10), 57.0 pases progresivos (p13), posesión 39.5 %, altura de presión 48.75 m (p18), xG concedido 1.36, 15.4 entradas al área del rival, xG concedido de balón parado 0.68 (p77), 13.8 faltas. Perdiendo (373 min): field tilt 65.2, 17.1 entradas al área (p77), 112.0 pases progresivos (p78), posesión 57.2 %, xG concedido 0.86, xG en transición 0.11 (p3), 15.9 centros, 8.45 faltas. Empatando (1033 min): PPDA 18.9 (p97), xG concedido 1.13"
- kpi: "30 % | 65 % | del juego en campo rival | 24 | Dominio territorial cuando va ganando | contra | cuando va perdiendo"
- definiciones: D-21, D-13, D-12
- decision: "Rival: si va abajo, insistir; su equipo con ventaja baja la presión a 49 metros de su portería y concede más peligro que cuando pierde. Staff: la ventaja se defiende con balón o con área cerrada, no con 7 llegadas propias y 15 del rival; el repliegue hoy cuesta más de lo que protege"
Cuando se adelanta el equipo se parte: la posesión cae a 39 %, el bloque se mete diez metros y el peligro concedido sube a 1.36 por 90, más que empatando (1.13) y que perdiendo (0.86). Perdiendo pasa lo contrario: domina 65 % del territorio y llega al área más del doble, pero crea sin robar (0.11 tras robo por 90) y a base de centros. La intensidad de presión es la más baja empatando, que es el estado en que pasa más de la mitad de sus minutos: deja dar 18.9 pases, de los más altos de la liga. Son 391 minutos ganando en 9 partidos.

### Del minuto 60 al 90 concede 0.62 de peligro de balón parado por 90, casi el triple que en la primera media hora
- bloque: M-4
- escenario: momento
- metrica: sp_xg_conceded
- cifra: "xG concedido de balón parado por 90: minutos 0 a 30 0.23 (p34), 30 a 60 0.44 (p60), 60 a 90 0.62 (p74); tramo 60 a 75 0.82 (p92). Contrapresiones 29.7 por 90 en la primera media hora y 22.3 en la última (p18); presiones 153.2 y 122.9; recuperaciones altas 6.3 y 11.0 (p78); xG sin penales 0.81, 0.87 y 0.84 por tramo; directness 0.62 del 75 al 90 (p95)"
- kpi: "0.62 | 0.23 | goles esperados de balón parado en contra por cada 90 minutos | 74 | Peligro concedido de balón parado del minuto 60 al 90 | contra | en los primeros 30 minutos"
- definiciones: D-22, D-07, D-06
- decision: "Rival: guardar las jugadas ensayadas de córner y tiro libre para después del 60, sobre todo entre el 60 y el 75. Staff: la caída de la presión tras pérdida en el último tramo (de 30 a 22 por 90) coincide con el pico de balón parado en contra; el primer cambio al 58' llega tarde para frenarlo"
Su equipo arranca con energía (153 presiones por 90 en la primera media hora, 30 presiones tras pérdida) y la va perdiendo; el peligro que crea no cambia por tramo, pero lo que concede a balón parado sube tramo a tramo. En los últimos 15 minutos el juego se vuelve directo (verticalidad de las más altas de la liga): un equipo que tira el balón largo para cerrar. Son 18 partidos; el pico del 60 al 75 pueden ser dos córners bien pegados, la tendencia de los tres tramos es lo sólido.

### Gana con el córner y sin regalar contragolpes: 0.80 goles de balón parado en las victorias, 0 en las derrotas
- bloque: M-4
- escenario: resultado
- metrica: sp_goals
- cifra: "Ganó 5: 0.80 goles de balón parado (p97), xG de córner 0.40 (p100), 0.09 xG por córner, 1.00 tiros rivales tras pérdida (p0), 11.8 tiros concedidos (p22), 43.8 % de recuperaciones altas con tiro (p99), 71.0 secuencias (p3), 53.6 transiciones (p1), OBV ofensivo 1.53. Empató 7: 0.14 goles de balón parado (p2), 17.3 tiros concedidos (p95), OBV ofensivo 1.06 (p3), 4.34 s de robo a tiro (p97). Perdió 6: 0.00 goles de balón parado, 3.33 tiros rivales tras pérdida (p99), 84.0 secuencias (p77), 9.33 saques de banda en zona de peligro (p92)"
- kpi: "0.80 | 0.00 | goles de balón parado por partido | 97 | Goles de balón parado cuando gana | favor | cuando pierde"
- definiciones: D-07, D-04, D-03
- decision: "Rival: para ganarle, neutralizar su córner cerrado y castigar sus pérdidas; en sus derrotas el rival tiró 3.3 veces por partido justo después de robarle, el triple que en sus victorias. Staff: el equipo gana con pocos ataques y con los córners; pierde cuando ataca más (84 ataques) y se expone tras pérdida; el plan de los partidos ganados es el que hay que repetir"
Sus victorias son partidos con menos ataques que nunca (71 ataques, de los más bajos de la liga) y mucho rendimiento del córner: 0.40 de peligro de córner por partido, 0.09 por córner, el doble de la liga. Las derrotas son lo contrario: ataca más, llega menos tras robo y concede tiros justo después de perderla. Los empates son los partidos en que más tiros concede (17.3) y menos valor genera con el balón. Son 5, 7 y 6 partidos: indicio claro de dirección, no una ley.

### Contra el top 6 no gana (0-2-4 en 6 partidos) y concede 3.3 tiros justo después de perder el balón
- bloque: M-3
- escenario: rival
- metrica: vuln_shots
- cifra: "Rival top 6 (6 partidos, 0 ganados, 2 empatados y 4 perdidos): 3.33 tiros rivales en 10 s tras pérdida (p99), xG rival tras pérdida 0.22 (p75), contrapresiones con regain 25.1 % (p20), 13.2 recuperaciones altas (p73), 4.33 tiros en transición (p79), altura de presión 56.7 m, 0.00 goles de balón parado, 0.02 xG por córner (p13). Resto (12 partidos, 5 ganados, 5 empatados y 2 perdidos): 1.83 (p22), 0.10 (p6), 32.1 % (p94), 9.58, 2.75, 53.0 m, 0.42 goles de balón parado, 0.06 xG por córner (p94)"
- kpi: "3.3 | 1.8 | tiros del rival en los 10 segundos después de perder el balón, por partido | 99 | Tiros del rival justo tras perderla, contra rivales del top 6 | contra | contra el resto"
- definiciones: D-25, D-04, D-06, D-07
- decision: "Rival de arriba: presionarlo alto y esperar su pérdida; contra los grandes su equipo sube la línea y se expone. Staff: contra el top 6 el equipo abandona el plan que le funciona (esperar y córner) y sale a presionar; el córner no produjo nada en esos 6 partidos; hay que decidir si ese cambio de plan es voluntario"
Contra los de arriba el equipo presiona más alto (56.7 metros contra 53.0) y roba más arriba (13.2 contra 9.6), pero la presión tras pérdida recupera menos (25 % contra 32 %) y el rival le tira casi el doble justo después de robarle. El balón parado, su vía de gol contra el resto (0.42 goles por partido), desaparece: 0 goles y 0.02 de peligro por córner. Las cuatro derrotas con el top 6 fueron contra Cruz Azul (dos), América y Toluca, tres de ellas por un gol. Son 6 partidos: indicio.

### Con la liguilla directa al alcance va 2-4-4: 11 llegadas al área y 0.20 goles de balón parado por partido
- bloque: M-1
- escenario: tabla
- metrica: box_entries
- cifra: "Directa alcanzable (10 partidos, 2 ganados, 4 empatados y 4 perdidos): 10.90 entradas al área (p11), 12.2 tiros (p33), 0.20 goles de balón parado (p8) y 0.20 concedidos (p7), 5.10 córners, primer cambio al 56.8'; empatando (669 min) xG 0.75 por 90 y 7.81 entradas al área; perdiendo (285 min en 7 partidos) xG 0.89, 14.22 entradas, 14.54 centros, 0.05 xG en transición. Arranque J1 a J4 (4 partidos, 2 ganados, 1 empatado y 1 perdido): 54.4 % de secuencias nacen en tercio defensivo (p100), 9.0 entradas al área (p1), 67.25 secuencias (p0), 0.75 goles de balón parado (p97), altura de presión 52.2 m (p6); ganando en el arranque (202 min) concede 1.86 xG por 90 con 100.7 presiones y 5.79 entradas al área"
- kpi: "10.9 | 14.0 | llegadas al área por partido | 11 | Llegadas al área cuando la liguilla directa es alcanzable | contra | liga"
- definiciones: D-23, D-21, D-12, D-07
- decision: "Rival: cuando su equipo se juega la liguilla, los partidos son de pocas llegadas; el que meta el balón parado se lo lleva. Staff: el córner que lo salvó en el arranque (0.75 goles por partido) se apagó a 0.20 en el tramo largo del torneo; revisar si cambió el pateador o la jugada"
Arranca los torneos encerrado (más de la mitad de sus ataques nacen en su campo, 9 llegadas al área por partido, de las más bajas de la liga) y aun así suma, porque el balón parado entra. Cuando el torneo avanza y la liguilla directa está al alcance, las llegadas suben poco (11), el balón parado deja de rendir y el récord se cae a 2 ganados en 10. Ganando en el arranque el repliegue es extremo: 1.86 de peligro concedido por 90 con apenas 101 presiones. Las categorías con 4 o menos partidos son indicio, no patrón.

## Balón parado (M-4)

### El córner cerrado desde la derecha es su arma: 45 % de córners cerrados y el peligro por córner arriba de la liga
- bloque: M-4
- metrica: corner_inswing_pct
- cifra: "84 córners a favor (4.7 por partido, p42); inswinging 44.64 % vs 34.86 % de liga (p80); cortos 7.79 % vs 13.42 % (p32); xG por córner 0.05 vs 0.04 (p84); xG de córner 0.21 (p73). Derecha inswinging al centro: 23 córners, 13 tiros, xG 1.22, 1 gol. Izquierda outswinging al centro: 15, 9 tiros, xG 0.72, 1 gol. Izquierda inswinging: 14, 3 tiros, xG 0.30, 1 gol. De visita 54.88 % cerrados (p94); en sus victorias 0.40 xG de córner por partido"
- kpi: "45 % | 35 % | de sus córners | 80 | Córners cerrados, con el balón girando hacia la portería | neutro"
- definiciones: D-07, D-12
- decision: "Rival: en los córners desde su derecha, un hombre en el primer palo y el portero atento al balón que va hacia la portería; es su envío más productivo (13 tiros en 23 córners). Staff: el cerrado desde la derecha produce; el cerrado desde la izquierda no (3 tiros en 14); cambiar de pateador o de tipo de envío en ese lado"
Saca córners como la liga pero los pega distinto: casi la mitad cerrados, casi nunca cortos. El envío cerrado desde la derecha es el más productivo (13 tiros en 23 córners, 1.22 de peligro acumulado); el mismo envío desde la izquierda rinde cuatro veces menos. El peligro por córner está arriba de la liga y en los partidos ganados se dispara (0.40 por partido, 0.09 por córner). Con Puebla el córner mejoró respecto a Chivas: 0.05 por córner contra 0.03. Son 84 córners: un gol más o menos mueve las cifras.

### Balón parado a favor abajo de la liga: 5 goles en 18 partidos y ninguno de tiro libre en 85 cobros
- bloque: M-4
- metrica: sp_goals
- cifra: "0.28 goles de balón parado por partido vs 0.44 de liga (p15); xG de balón parado 0.36 vs 0.47 (p21); 68 tiros de balón parado: córner 41 tiros, xG 3.7, 4 goles; penal 1, 1 gol; tiro libre indirecto 15 tiros, xG 1.6, 0 goles; tiro libre directo 9 tiros, xG 0.3, 0 goles; saque de banda 2 tiros, 0 goles. 85 tiros libres a favor, xG 2.0, 0 goles; xG de tiro libre indirecto 0.09 (p70): con Guadalajara 0.22 (p100), con Puebla 0.03 (p5). Saques de banda en zona de peligro 7.33 (p37), retenidos 67.50 % (p75), xG tras saque 0.01 (p24)"
- kpi: "0.28 | 0.44 | goles de balón parado por partido | 15 | Goles de balón parado a favor | contra"
- definiciones: D-07
- decision: "Staff: el córner produce y el tiro libre no; 85 tiros libres con 0 goles y solo 15 tiros al área es desperdicio, sobre todo con Puebla, donde el peligro de tiro libre al área es de los más bajos de la liga. Diseñar dos jugadas de tiro libre lateral. Rival: sus tiros libres no asustan; sus córners sí"
El balón parado es donde su equipo ha marcado cuando gana (ver el corte por resultado), y aun así en el total está abajo de la liga. La diferencia la hace el tiro libre: con Chivas el tiro libre al área generaba más peligro que cualquier equipo de la liga, con Puebla casi nada. Los saques de banda cerca del área los conserva arriba de la liga (68 %) pero no producen tiros: 2 en 132 saques. Cinco goles en 18 partidos: cada gol mueve el promedio.

### Concede 6.4 córners por partido, más de los que saca, pero solo 3 goles; los 3 penales en contra entraron
- bloque: M-4
- metrica: sp_xg_conceded
- cifra: "116 córners en contra (6.44 por partido) vs 84 a favor; 3 goles de córner en contra; xG por córner concedido 0.03 vs 0.04 de liga (p49); xG concedido de balón parado 0.49 vs 0.48 (p60); goles concedidos de balón parado 0.33 vs 0.45 (p31); 94 tiros de balón parado en contra: córner 53 tiros, xG 3.8, 2 goles; penal 3 tiros, xG 2.4, 3 goles; tiro libre 19 tiros, xG 1.5, 1 gol; directo 14 tiros, 0 goles. Local 0.20 (p1), visita 0.72 (p93); ganando 0.68 por 90, perdiendo 0.18; del minuto 60 al 90, 0.62 por 90"
- kpi: "6.4 | 4.7 | córners por partido | 49 | Córners en contra | neutro | córners a favor"
- definiciones: D-07, D-20, D-21
- decision: "Rival: el volumen de córners contra él viene solo (6.4 por partido); el rendimiento está en pegarlos de visita y después del 60, cuando su área se abre. Staff: el córner defensivo está en la media; el agujero es el contexto: ganando y fuera de casa el peligro concedido de balón parado se triplica. El penal en contra es raro (3) pero siempre fue gol"
Un equipo que cede el balón y defiende cerca de su área acaba concediendo más córners de los que saca; aun así el peligro por córner en contra queda como la liga y los goles concedidos de balón parado abajo. El problema no es el promedio sino cuándo: de visita, ganando y en el último tramo el balón parado en contra se dispara. Con Chivas concedía 0.17 goles de balón parado por partido, de los más bajos de la liga; con Puebla 0.42.

## Jugadores y cambios (M-5)

### 4-2-3-1 en 12 de 18 partidos; perdiendo no toca el dibujo, ganando cierra con tres centrales
- bloque: M-5
- metrica: tactical_shifts
- cifra: "Dibujo inicial 4231 en 12 de 18 (67 %), 442 en 2, 3421, 352, 41212 y 4411 una vez; con Puebla 4231 en 10 de 12, con Guadalajara en 2 de 6. Cambios de formación 1.44 por partido vs 1.80 de liga (p21); cambio real de dibujo en 12 de 18: 7 empatando, 5 ganando, 1 perdiendo. Perdiendo del minuto 10 al 70: 4231 el 100 % de los minutos. Ganando del 65 en adelante: 352 y 3511 25 % cada uno; al 90, 3511 37 % y 343 31 %. Empatando al 80: 541 14 %; al 90: 343 26 %"
- kpi: "67 % | | de los partidos | 21 | Partidos que arranca en 4-2-3-1 | neutro"
- definiciones: SB, D-21, D-26b
- decision: "Rival: si va perdiendo, su equipo no cambia de dibujo, cambia de nombres; si va ganando después del 65, esperar línea de tres centrales y carrileros. Staff: el 4-2-3-1 es la casa; con Chivas probó cinco dibujos en seis partidos y no asentó ninguno. El plan para remontar es de piezas, no de estructura"
Cambia de dibujo menos que la liga y casi nunca cuando pierde: en los 373 minutos que fue abajo el 4-2-3-1 se mantuvo entero y solo al final apareció un 4-4-1-1. Ganando sí mueve la estructura para cerrar: tres centrales (3-5-2, 3-5-1-1) o 3-4-3 en los últimos minutos. Empatando en el tramo final aparecen 5-4-1 y 3-4-3, según aguante o busque. Son 18 partidos y apenas 391 minutos con ventaja: el patrón ganando es indicio.

### Cambia tarde: primer cambio al 58', arriba de la liga; perdiendo lo adelanta al 54' y el cambio funciona
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio 57.8' vs 53.9' de liga (p83); perdiendo 54.0' (mediana 49.5', 6 partidos), empatando 59.5' (mediana 63', 8), ganando 60.25' (4); local 62.6', visita 54.0'; con la liguilla directa alcanzable 56.8', en pelea por el play-in 65.0'. 15 min antes y después del primer cambio perdiendo: xG 0.12 y 0.27, xG concedido 0.41 y 0.12, field tilt 56 y 64, altura de presión 57 y 64 m. Empatando: xG 0.17 y 0.06, field tilt 45 y 33. Ganando: tiros 1.25 y 3.75, PPDA 17.75 y 12.26. 4.8 cambios por partido, 83 tácticos y 3 por lesión"
- kpi: "58' | 54' | minuto del primer cambio | 83 | Minuto en que hace el primer cambio | neutro | liga"
- definiciones: SB, D-21, D-20
- decision: "Staff: perdiendo el primer cambio funciona (el peligro creado se duplica y el concedido cae a menos de un tercio); empatando lo hace tarde y después el equipo retrocede, el dominio territorial cae de 45 a 33. Adelantar el cambio empatando al 55 y que sea ofensivo. Rival: en casa espera hasta el 63; hay un tramo del 45 al 60 en que su banca no interviene"
Espera más que la liga para mover el banquillo, sobre todo de local y cuando el partido está empatado, que es como pasa más de la mitad de sus minutos. Cuando pierde adelanta y acierta: la presión sube siete metros y el equipo se instala en campo rival. A quién saca: empatando, al delantero centro (6 veces), al mediapunta (5) y al pivote derecho (5); perdiendo sacrifica laterales (derecho 5, izquierdo 4) y al pivote izquierdo (4) para meter gente de ataque. Son 6, 8 y 4 partidos por estado: indicio.

### Con Puebla la columna no se toca: portero, dos centrales, pivote y lateral izquierdo titulares en los 12 partidos
- bloque: M-5
- metrica: xi_stability
- cifra: "Estabilidad del once 0.67 (Jaccard), 2.6 titulares distintos de un partido al siguiente; Ricardo Gutiérrez (portero), Facundo Almada y Juan Pablo Vargas (centrales), Alejandro Organista (pivote derecho) y Fernando Monárrez (lateral izquierdo) 12 titularidades en 12 partidos con Puebla, 1044, 1044, 1044, 984 y 960 minutos; Brayan Garnica 9 (689 min), Íker Moreno 8, Sergio Sanabria 7, Kevin Velasco 7, Carlos Baltazar 7, Mathías Borges 5. Núcleo con Guadalajara (6 partidos): Roberto Alvarado, Gilberto Sepúlveda, Mateo Chávez, José Rangel y Raúl Martínez, 6 de 6"
- kpi: "2.6 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB
- decision: "Rival: el eje defensivo de Puebla es siempre el mismo; estudiar a Almada y Vargas en el córner en contra y la espalda de Monárrez rinde más que estudiar al ataque, que cambia. Staff: la rotación está toda del medio hacia adelante (mediapunta y extremos cambian cada dos partidos); si el peligro creado es el problema, la falta de continuidad arriba es parte"
La estabilidad general del once está en lo normal, pero repartida de forma desigual: atrás no cambia nada y adelante cambia casi todo. Garnica es el único atacante con más de la mitad de las titularidades; el mediapunta se repartió entre Velasco y Borges y la izquierda entre Baltazar y otros. Con Chivas, en 6 partidos, también tuvo un núcleo de seis que jugó todo. Son 12 partidos con Puebla: el núcleo defensivo es un hecho, lo de adelante puede ser lesiones o búsqueda.

## Por equipo: qué viaja con Espinoza (Guadalajara 6 partidos, Puebla 12; comparación orientativa)

### Con Puebla el peligro creado cae a 0.79 por partido, de los más bajos de la liga; con Chivas era 1.22
- bloque: M-1
- escenario: equipo
- metrica: np_xg
- cifra: "Guadalajara (6 partidos, 1 ganado, 3 empatados y 2 perdidos): xG sin penales 1.22 (p66), xG por tiro 0.10 (p86), 39.46 % de tiros fuera del área (p26), 59.22 % de secuencias al último tercio (p86), regates completados 45.97 % (p5), 38.79 % de ataques por izquierda (p100), diferencia de xG 0.18 (p70), 4 goles a favor. Puebla (12 partidos, 4 ganados, 4 empatados y 4 perdidos): 0.79 (p5), 0.07 (p1), 54.06 % (p99), 52.80 % (p32), 65.10 % (p96), 29.87 % por izquierda (p20) y 39.04 % por el centro (p90), diferencia de xG -0.50 (p16), 12 goles a favor"
- kpi: "0.79 | 1.22 | goles esperados por partido | 5 | Peligro creado con Puebla | contra | con Guadalajara"
- definiciones: D-26b, D-12, D-11, D-14
- decision: "Rival de Puebla: cerrar el centro y dejar el tiro lejano; el equipo entra poco al área y tira desde fuera más que casi toda la liga. Staff de Puebla: el regate sí le sale a esta plantilla (65 % completados, de los más altos de la liga) y no se convierte en llegadas; acercar a los regateadores al área en vez de pedirles el tiro"
Lo que menos viaja de un equipo a otro es la calidad del ataque. Con Chivas el equipo llegaba cerca del área arriba de la liga y atacaba por la izquierda más que nadie; con Puebla el ataque pasa por el centro, se queda lejos y termina en tiros de fuera (54 %, de los más altos de la liga). La posesión baja, la salida larga y la presión poco intensa sí viajan; el peligro creado depende de la plantilla. Seis partidos con Chivas son pocos para una comparación limpia.

### Las rachas de presión no viajaron: 36 por partido con Chivas, 24 con Puebla, y el peligro concedido subió de 0.91 a 1.22
- bloque: M-2
- escenario: equipo
- metrica: press_phases
- cifra: "Guadalajara: 35.50 fases de presión (p86), 163.50 presiones (p71), 32.78 % de fases con recuperación (p73), xG concedido sin penales 0.91 (p17), 13.00 tiros concedidos (p39), 0.17 goles concedidos de balón parado (p4), xG rival tras pérdida 0.09 (p4), PPDA 15.2. Puebla: 23.92 fases (p14), 28.33 presiones en último tercio (p23), 29.91 % con recuperación (p33), xG concedido 1.22 (p61), 15.92 tiros (p84), 0.42 goles de balón parado concedidos (p50), 0.16 tras pérdida (p44), PPDA 20.4, contrapresiones con regain 31.33 % (p91)"
- kpi: "23.9 | 35.5 | rachas de presión por partido | 14 | Rachas de presión con Puebla | contra | con Guadalajara"
- definiciones: D-26b, D-05, D-05b, D-06
- decision: "Staff de Puebla: la presión poco intensa ya era el estilo con Chivas, pero ahí el equipo encadenaba rachas y recuperaba; con Puebla ni encadena ni recupera y concede 16 tiros por partido. Rival: contra Puebla se puede circular en campo propio sin prisa; contra la versión de Chivas no"
La intensidad de presión fue baja en los dos equipos (deja dar 15 pases con Chivas, 20 con Puebla), pero la forma de presionar cambió: con Chivas eran 36 rachas por partido, arriba de la liga, y una de cada tres terminaba en robo; con Puebla son 24, abajo de la liga. El resultado se ve en lo que concede: tiros, peligro y goles de balón parado en contra suben con Puebla. Lo único que mejoró es la presión tras pérdida, que recupera más (31 %), aunque se hace menos veces. Seis partidos con Chivas: comparación orientativa.
