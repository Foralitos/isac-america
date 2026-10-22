# Hallazgos — Piojo Herrera en la Liga MX (Apertura 2021 → Apertura 2026, 119 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Miguel Herrera con datos: Tigres UANL (Apertura 2021 → Apertura 2022, 62), Tijuana (Clausura 2023 → Clausura 2024, 45) y Atlante (Apertura 2026, 12). Récord 44-31-44. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas, "presión tras pérdida" = contrapresión); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga; en las métricas donde menos es mejor se anota el percentil "bueno"). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Vive del robo en campo rival: 14.4 recuperaciones altas por partido, arriba de la liga
- bloque: M-3
- metrica: high_recoveries
- cifra: "14.4 recuperaciones altas vs 11.9 de liga (p87); 68.55 transiciones ofensivas vs 63.2 (p87); 4.2 tiros en transición vs 3.76 (p75); 3.07 s de recuperación a tiro vs 3.30 (p72 bueno); xG en transición 0.49 (p50); xG concedido en transición 0.44 vs 0.52 (p68 bueno); xG rival en 10 s tras pérdida 0.16 vs 0.18. Por equipo: Tigres 12.8, Tijuana 16.7 (p99), Atlante 14.1 (p85)"
- kpi: "14.4 | 11.9 | balones robados en campo rival por partido | 87 | Recuperaciones en el último tercio, por partido | favor"
- definiciones: D-03, D-04, D-10
- decision: "Rival: no salir jugando en corto contra su primera línea; el balón que pierdes en tu campo se convierte en tiro en 3 segundos. Staff: el robo alto es lo que mejor viaja entre sus tres equipos; proteger a los dos delanteros que lo disparan y seguir las recuperaciones altas como señal de forma semana a semana"
Es el rasgo que viaja con él: con Tigres 12.8 robos altos por partido, con Tijuana 16.7 (de los más altos de la liga) y con Atlante 14.1. Lo que cambia es qué hace con ellos: con Atlante el 44.6 % de sus robos altos termina en tiro en 10 segundos, el valor más alto de la liga, y tarda 2.6 segundos del robo al tiro; con Tijuana solo el 33 %. Y no se expone al hacerlo: concede 0.44 de peligro en ataques rápidos del rival contra 0.52 de la liga, y 0.16 en los 10 segundos que siguen a una pérdida suya.

### Avanza conduciendo, no pasando: 47 conducciones progresivas por partido, arriba de la liga
- bloque: M-1
- metrica: prog_carries
- cifra: "47.0 conducciones progresivas vs 39.0 (p88); 16.5 regates vs 14.0 (p83), 55.7 % completados (p68); pases progresivos 104.0 vs 100.4 (p63); precisión de pase 78.6 % (p47). Por equipo: conducciones Tigres 50.4 (p96), Tijuana 43.5 (p73), Atlante 42.8 (p68); regates Tigres 18.1 (p90), Tijuana 15.5 (p74), Atlante 12.4 (p29)"
- kpi: "47.0 | 39.0 | conducciones hacia adelante por partido | 88 | Conducciones que avanzan 10 metros o meten el balón en el último tercio | neutro"
- definiciones: D-14
- decision: "Rival: cerrar el carril de conducción con la línea de medios y cortar con falta antes del último tercio; su pase hacia adelante es el de la liga, su conducción no. Staff: el regate lo pone la plantilla (18 por partido con Tigres, 12 con Atlante); sin regateadores el avance hay que buscarlo con el pase, que hoy está apenas en la media"
La conducción viaja con los tres equipos (todas arriba de la liga), el regate no: con Tigres regateaba más que el 90 % de la liga, con Atlante menos que la media. Con Atlante, eso sí, el regate que intenta lo completa el 64 % de las veces, de los más altos de la liga: pocos regateadores, pero buenos. El pase hacia adelante nunca ha sido su herramienta: 104 por partido, como la liga, y con Atlante 89, abajo de la liga.

### Tira mucho y desde lejos: 14.7 tiros por partido, pero el peligro creado es el de la liga
- bloque: M-1
- metrica: xg_per_shot
- cifra: "14.65 tiros sin penal vs 13.21 (p78); xG 1.18 vs 1.14 (p58); xG por tiro 0.08 vs 0.09 (p40); 44.35 % de tiros fuera del área vs 42.77 % (p61); centros por entrada al área 1.11 vs 0.94 (p83); 15.0 entradas al área vs 14.0 (p67); 16.0 % de secuencias terminan en tiro (p64). Perdió: xG por tiro 0.07 (p0)"
- kpi: "0.08 | 0.09 | goles esperados por tiro | 40 | Calidad media de cada tiro | contra"
- definiciones: D-12, D-02
- decision: "Rival: dejarlo tirar de fuera y cerrar el área; con un tiro más por partido que la liga apenas crea lo normal. Staff: el volumen ya está (tiros, llegadas, centros arriba de la liga); lo que falta es la selección del tiro, que en los partidos perdidos cae a 0.07 por intento, lo más bajo de la liga"
Es el rasgo que más le pesa: su ataque produce mucho y de poca calidad. Centra más que la liga por cada vez que entra al área (1.11 centros por entrada, arriba de la liga) y tira 1.5 veces más por partido que la media, pero el peligro por tiro queda abajo de la liga. Con Tijuana fue peor: 0.08 por tiro (p20) y 47 % de los tiros desde fuera del área. Con Atlante mejora a 0.09 por tiro, pero con menos llegadas al área (13.8, como la liga).

### Presión intensa pero a media altura: deja dar 12 pases antes de robar y solo 16 % de sus rachas son en campo rival
- bloque: M-2
- metrica: ppda_own
- cifra: "PPDA propio 12.06 vs 14.03 (p75 bueno); fases de presión con recuperación 33.07 % vs 31.16 % (p76); contrapresiones 34.6 vs 32.0 (p75), 28.4 % con regain (p67); altura de presión 56.0 m vs 55.8 (p51); fases altas 15.65 % vs 16.92 % (p40); 30.3 fases de presión por partido (p61); línea defensiva 48.25 m (p54); 154.5 presiones vs 151.5 (p55)"
- kpi: "12.1 | 14.0 | pases que deja dar al rival antes de robar | 75 | Intensidad de presión: menos pases es más intensa | favor"
- definiciones: D-05b, D-05, D-06, D-13
- decision: "Rival: la presión le llega en medio campo, no en tu área: el pase corto del portero al central es seguro, el riesgo está en el tercer pase. Staff: la racha de presión roba más que la liga (33 %) sin subir la línea; subirla 2 metros, como de local (58 m), es donde ya ha funcionado"
Su presión es efectiva sin ser alta: deja dar 12 pases antes de robar (la liga 14) y una de cada tres rachas de presión termina en robo (arriba de la liga), pero las arma a 56 metros de su portería, como cualquier equipo, y solo el 16 % ocurre en campo rival (abajo de la media). La presión tras pérdida sí es un rasgo: 34.6 por partido y 28 % con robo, ambas arriba de la liga. El resultado es que concede menos llegadas que la liga: 12.7 entradas al área del rival contra 14.2.

### Muchos ataques y por la izquierda: 85 secuencias por partido, 33 % nacen por ese lado
- bloque: M-1
- metrica: sequences
- cifra: "85.17 secuencias ofensivas vs 80.28 (p85); 58.28 % llegan al último tercio vs 54.96 % (p78); 33.0 % nacen por izquierda vs 31.66 % (p77), 31.31 % por derecha vs 32.25 % (p33); 39.66 % nacen en tercio medio (p77); 15.95 % terminan en tiro (p64); field tilt 54.5 % vs 49.6 % (p70); posesión 51.15 % (p61)"
- kpi: "85.2 | 80.3 | secuencias ofensivas por partido | 85 | Ataques de tres o más acciones, o que terminan en tiro, por partido | neutro"
- definiciones: D-02, D-11, D-10
- decision: "Rival: cargar la marca sobre el carrilero y el interior de su izquierda (con Tigres, Aquino y Quiñones) y obligarlo a construir por su derecha, donde arma menos que la liga. Staff: el 58 % de llegada al último tercio es el activo; el 16 % de remate por secuencia es el de la liga, falta el último pase"
Sus ataques son muchos y cortos: 85 secuencias por partido (arriba de la liga) que llegan al último tercio más que la media, con casi el 40 % naciendo en medio campo, donde roba. El sesgo a la izquierda se repite en los tres equipos (33.0 % con Tigres, 33.2 % con Tijuana, 32.4 % con Atlante), y en sus partidos ganados y empatados sube al 34 %. Con Tijuana las secuencias fueron todavía más (87.2, de las más altas de la liga) y llegaron más al último tercio (59.3 %), sin que eso se tradujera en resultados: 10-13-22.

### Quiere el balón pero depende de la plantilla: 51 % de posesión; 55 % con Tigres y 44 % con Atlante
- bloque: M-1
- metrica: possession_pct
- cifra: "Posesión 51.15 % vs 49.77 % (p61); precisión de pase 78.59 % (p47); salida larga del portero 43.56 % vs 46.78 % (p40); 42.95 % de secuencias nacen en tercio defensivo (p33). Por equipo: posesión Tigres 54.55 % (p81), Tijuana 48.30 % (p37), Atlante 44.26 % (p11); precisión Tigres 80.75 % (p72), Tijuana 76.70 % (p28), Atlante 74.48 % (p12); pases progresivos Atlante 88.67 (p18); salida larga Atlante 30.09 % (p4)"
- kpi: "44 % | 55 % | de posesión | 11 | Posesión con Atlante | contra | con Tigres"
- definiciones: D-01, D-10
- decision: "Rival del Atlante: dejarle el balón no le sirve de nada, presionarle la salida sí: su portero saca corto (30 % largo, de los más bajos de la liga) y el equipo completa 74 % de pases, abajo de la liga. Staff: con esta plantilla el modelo de posesión no sale; conviene aceptar el juego sin balón, que es donde el Atlante rinde (45 % de robos altos con tiro, lo más alto de la liga)"
El dominio del balón no es parte del modelo, es parte de la plantilla: con Tigres tenía el 55 % (arriba de la liga), con Tijuana el 48 % y con Atlante el 44 %, de los más bajos. Lo que sí mantiene con los tres es la salida corta del portero: con Atlante solo el 30 % de los saques son largos, pese a tener la peor precisión de pase de su carrera. Es una contradicción: insiste en salir jugando con el equipo que peor pasa.

### Concede menos que la liga y desde más lejos: 12.7 entradas rivales al área y 56 % de tiros desde dentro
- bloque: M-2
- metrica: opp_box_entries
- cifra: "Entradas al área del rival 12.70 vs 14.20 (p71 bueno); tiros concedidos 12.78 vs 13.60 (p64 bueno); 55.91 % desde el área vs 58.18 % (p68 bueno); xG concedido 1.09 vs 1.17 (p62 bueno); OBV concedido 1.38 vs 1.44 (p58 bueno); xGD 0.10 vs -0.03 (p63). Por equipo: xG concedido Tigres 0.93 (p19), Tijuana 1.29 (p68); tiros desde el área Tigres 52.61 % (p9), Tijuana 59.07 % (p61), Atlante 61.14 % (p78); entradas rivales Atlante 15.08 (p64)"
- kpi: "12.7 | 14.2 | entradas al área del rival por partido | 71 | Llegadas del rival a su área, por partido | favor"
- definiciones: D-12, D-04
- decision: "Rival: contra la versión Tigres el área estaba cerrada (53 % de los tiros desde dentro, de los más bajos de la liga) y había que tirar de fuera o buscar balón parado; contra Atlante el área se abre (61 %). Staff: la solidez va con los centrales (Pizarro, Reyes, Díaz), no con el sistema; con Atlante concede 15 entradas al área y 61 % de tiros desde dentro, abajo de la liga en ambas"
En el agregado concede menos que la liga en todo: menos llegadas, menos tiros, menos peligro y menos tiros desde el área. Pero es el rasgo que menos viaja: con Tigres concedía 0.93 de peligro por partido (abajo del 81 % de la liga) y con Tijuana 1.29 (arriba de la liga), y el porcentaje de tiros desde el área pasó del 53 % al 59 %, y al 61 % con Atlante. La presión y el robo alto son suyos; el área cerrada era de los centrales de Tigres.

## Consistencia y variabilidad (D-20 a D-26)

### Dos equipos según la cancha: de local gana 28 de 59 y crea 1.43; de visita pierde 32 de 60 y crea 0.94
- bloque: M-1
- escenario: localia
- metrica: np_xg
- cifra: "Local 28-19-12: xG 1.43 (p88), 17.88 entradas al área (p92), 16.68 tiros (p94), PPDA 9.66 (p97 bueno), fases con recuperación 36.48 % (p96), 74.41 transiciones (p98), 6.08 córners (p91), xGD 0.51 (p86), altura de presión 57.96 m (p81), línea defensiva 50.39 m. Visita 16-12-32: xG 0.94 (p21), 12.25 entradas (p26), 12.65 tiros (p38), PPDA 14.42 (p37 bueno), 29.71 % con recuperación (p30), xGD -0.31 (p26), altura 54.07 m (p25), línea 46.16 m. Empatando: xG por 90 de local 1.21 y concedido 0.80; de visita 0.65 y 1.33"
- kpi: "0.94 | 1.43 | goles esperados por partido | 21 | Peligro creado de visita | contra | de local"
- definiciones: D-20, D-05b, D-12, D-03
- decision: "Rival: en su casa no te abras, espera y sal al contragolpe, su presión ahí deja dar 10 pases y domina el área. En la tuya presiónalo alto: de visita su presión baja 4 metros, deja dar 14 pases y crea menos que el 79 % de la liga. Staff: el déficit de visita es de presión y de llegada, no de orden: empatando fuera de casa crea 0.65 por 90 y concede 1.33; empatando en casa crea 1.21 y concede 0.80. El partido parejo de visita lo juega el rival"
Es el corte más grande de todo su perfil, y lo lleva con los tres equipos. Con Tijuana fue extremo: 8-9-5 en casa y 2-4-17 fuera, concediendo 1.64 de peligro por partido de visita contra 0.93 de local, con la presión pasando de 9 pases a 16 pases antes de robar. Con Tigres, 19-7-5 de local y 13-6-12 de visita. Con Atlante, 1-3-2 y 1-2-3, con la misma caída de 1.32 a 1.01 de peligro creado. De visita presiona 4 metros más atrás, roba menos en sus rachas (30 % contra 36 %) y arma 12 ataques tras robo menos por partido.

### Contra los seis de arriba se hunde: 10 ganados, 12 empatados y 24 perdidos, con saldo de peligro en contra
- bloque: M-2
- escenario: rival
- metrica: np_xg_conceded
- cifra: "Top 6: 10-12-24, xG concedido 1.32 (p72), xG 1.02 (p31), xGD -0.37 (p21), 55.48 % de secuencias al último tercio (p51), xG concedido en transición 0.54 (p61), 13.93 tiros concedidos, contrapresiones con regain 30.73 % (p89), directness permitida 0.61 (p86), primer cambio 50.76'. Resto: 34-19-20, xG concedido 0.95 (p20), xG 1.29 (p73), xGD 0.39 (p81), 60.04 % al último tercio (p92), 12.05 tiros concedidos (p25), 15.89 entradas al área (p78)"
- kpi: "1.32 | 0.95 | goles esperados en contra por partido | 28 | Peligro concedido contra rivales del top 6 | contra | contra el resto"
- definiciones: D-25, D-02, D-04, D-06
- decision: "Rival grande: dejarle el balón y salir rápido y directo; contra ellos sus ataques no llegan al último tercio (55 % contra 60 %) y, aunque su presión tras pérdida roba más que nunca (31 %, arriba de la liga), concede 0.54 de peligro al contragolpe y 1.32 en total. Staff: el problema contra los grandes es de concesión, no de presión: el área se abre y el rival le juega más directo que a nadie. Hace falta un plan de repliegue para esos 8 a 10 partidos por torneo"
Con Tigres fue 7-5-11 contra el top 6 y 25-8-6 contra el resto; con Tijuana 2-4-12 y 8-9-10. Contra los grandes crea 1.02 por partido (abajo de la liga) y concede 1.32 (arriba): el saldo se invierte por completo. El dato que mejor lo explica es la verticalidad que permite: contra el top 6 el rival le juega más directo que casi a nadie en la liga, y el 44 % de sus derrotas totales (24 de 44) son contra estos equipos aunque solo sean el 39 % de sus partidos.

### Ganando suelta el balón: 44 % de dominio territorial contra 61 % perdiendo, y concede más tiros
- bloque: M-1
- escenario: marcador
- metrica: field_tilt
- cifra: "Por 90 min. Ganando (2697 min): field tilt 44.33 (p65), posesión 45.07 %, pases progresivos 79.99, xG 1.23 (p75), xG en transición 0.57 (p69), 4.20 tiros en transición (p82), 12.65 tiros concedidos (p31), 13.01 entradas rivales al área (p28), 25.90 presiones en último tercio. Perdiendo (3251 min): field tilt 60.54 (p52), posesión 56.01 %, pases progresivos 101.50, xG 1.14 (p57), 15.62 entradas al área, 10.69 tiros concedidos (p60), 45.88 conducciones progresivas. Empatando (5991 min): xG 0.94 (p44), 111.35 pérdidas (p83), 32.99 contrapresiones (p77)"
- kpi: "44 % | 61 % | del juego en campo rival | 65 | Dominio territorial cuando va ganando | neutro | cuando va perdiendo"
- definiciones: D-21, D-03, D-12
- decision: "Rival: si vas abajo contra él vas a tener el balón y el campo; el riesgo es su contragolpe, 0.57 de peligro tras robo por 90 minutos y 4.2 tiros rápidos. Si vas arriba, él tendrá el balón, llegará más al área (15.6 por 90) pero creará apenas lo normal. Staff: el peligro por minuto es mayor ganando (1.23) que perdiendo (1.14): el plan de contragolpe funciona. Lo que no funciona es el empate, donde crea 0.94 por 90 y pierde 111 balones; ahí hay que decidir si se presiona o se espera, no las dos cosas"
La paradoja de su equipo: perdiendo tiene el 56 % del balón, mete 22 pases progresivos más por 90 minutos y crea menos peligro por minuto que cuando va ganando con el 45 %. Ganando concede 2 tiros más por 90 (12.7 contra 10.7) y 2.6 entradas al área más, pero vive del espacio: 4.2 tiros en transición por 90, arriba de la liga. Empatando, su estado más frecuente (5991 de 9939 minutos), es donde peor rinde: 0.94 de peligro por 90 y 111 pérdidas. Cuando además va cómodo en la tabla la receta se dispara: en zona directa y ganando crea 1.69 por 90 con 5 tiros en transición.

### Arranca presionando y termina atacando: de 11 a 15 llegadas al área por 90 entre el inicio y el final
- bloque: M-3
- escenario: momento
- metrica: box_entries
- cifra: "Por 90 min. 0-30: 153.60 presiones (p63), 35.82 contrapresiones (p80), 11.22 entradas al área (p56), xG 0.89, xG concedido 0.93, 9.25 entradas rivales (p25), 2.97 tiros en transición (p47), 10.21 recuperaciones altas. 60-90: 121.79 presiones (p47), 27.47 contrapresiones (p68), 15.46 entradas al área (p81), 12.24 recuperaciones altas (p94), xG 1.20 (p63), xG concedido 1.29, 4.05 tiros en transición (p76), xG de balón parado 0.53. Tramo 0-15: 165.78 presiones, 38.87 contrapresiones, 122.42 pérdidas (p82), 8.67 entradas rivales (p25)"
- kpi: "15.5 | 11.2 | llegadas al área por cada 90 minutos | 81 | Llegadas al área del minuto 60 al 90 | favor | en los primeros 30 minutos"
- definiciones: D-22, D-12, D-06, D-03
- decision: "Rival: los primeros 15 minutos son de choque (166 presiones y 122 pérdidas por 90): no regalar la salida pero tampoco apurarse, su presión cae un 20 % después del minuto 60 y la presión tras pérdida un 23 %. Al final cuidado con su robo alto: 12 por 90 minutos, de los más altos de la liga. Staff: el peligro concedido sube de 0.93 a 1.29 por 90 en el último tramo mientras la presión baja; los cambios ofensivos cuestan atrás"
El partido tiene dos mitades distintas. En la primera media hora presiona y pierde mucho el balón (122 pérdidas por 90 en los primeros 15 minutos, arriba del 82 % de la liga) pero no concede nada: 9 entradas rivales al área por 90, de las más bajas de la liga. Después del 60 presiona 30 veces menos por 90, roba más arriba (12.2 recuperaciones altas, de las más altas de la liga) y llega al área 4 veces más por 90, pero el peligro que concede sube casi 40 %. El balón parado a favor también crece con el reloj: de 0.21 por 90 al inicio a 0.53 al final.

### Cuando pierde, sus tiros son los peores de la liga: 0.07 de peligro por tiro, y le corren al contragolpe
- bloque: M-1
- escenario: resultado
- metrica: xg_per_shot
- cifra: "Ganó 44: xG por tiro 0.10 (p85), xG 1.41 (p87), xG concedido 0.87 (p12), xG concedido en transición 0.27 (p4), 51.12 % de tiros concedidos desde el área (p5), goles de balón parado 0.61 (p89), primer cambio 58.52', 1.41 cambios de dibujo (p19), xG rival tras pérdida 0.10 (p7). Perdió 44: xG por tiro 0.07 (p0), xG 0.97 (p26), xG concedido 1.41 (p85), en transición 0.64 (p80), 60.90 % desde el área (p76), balón parado 0.18 (p7), 2.23 cambios de dibujo (p82), xG rival tras pérdida 0.22 (p77), primer cambio 49.70'. Empató 31: xGD 0.31 (p78)"
- kpi: "0.07 | 0.10 | goles esperados por tiro | 0 | Calidad de cada tiro en los partidos que perdió | contra | en los que ganó"
- definiciones: D-12, D-04, D-07, D-21
- decision: "Rival: ciérrale el área y déjalo tirar de fuera, y castiga cada pérdida suya en salida: en sus derrotas el peligro que concede al contragolpe se multiplica por más de dos y el que concede tras pérdida propia también. Staff: las derrotas no vienen de crear poco volumen sino de tirar desde donde no hay gol y de perder el balón mal; antes de mover el dibujo (2.2 veces por partido perdido, arriba de la liga) hay que revisar la selección de tiro y la cobertura tras pérdida"
El partido que pierde es reconocible: tira desde donde no hay gol (0.07 por tiro, lo más bajo de la liga), el balón parado no entra (0.18 goles por partido contra 0.61 cuando gana) y el rival le corre: 0.64 de peligro al contragolpe contra 0.27 en los triunfos. Además pierde más de lo que merece: 8 derrotas creando más peligro que el rival (Puebla 0-2 y León 0-1 con Tigres, Querétaro 1-2 y Pachuca 2-3 con Tijuana, América 0-2 en 2024 creando 1.83 contra 0.70) y solo 4 triunfos con menos. Los empates, en cambio, los merece ganar: saldo de 0.31 a favor, arriba de la liga.

### Instalado en zona de liguilla directa presiona más arriba y roba más: 19 % de rachas altas y 35 % con robo
- bloque: M-2
- escenario: tabla
- metrica: press_high_pct
- cifra: "Zona directa 12-5-7 (24): 19.02 % de fases altas (p71), 34.62 % con recuperación (p88), 0.25 goles de balón parado en contra (p16), xG por córner 0.04 (p61), primer cambio 55.79' (p68). Directa alcanzable 15-16-19 (50): 14.47 % altas (p32), 32.93 % con recuperación (p74), primer cambio 50.32' (p20), xG por córner 0.03 (p17), 36.52 contrapresiones (p84). Arranque J1-J4 8-8-8 (24): 39.06 % de robos altos con tiro (p92), 35.50 contrapresiones (p80). Perdiendo con la directa alcanzable (33 partidos, 1364 min): 17.35 tiros, 18.54 centros, 16.50 entradas al área, xG 1.31 por 90; ganando (1139 min): 8.85 centros, 10.90 tiros"
- kpi: "19.0 % | 14.5 % | de sus rachas de presión son en campo rival | 71 | Presión en campo rival cuando ya está en zona de liguilla directa | favor | cuando la liguilla directa solo es alcanzable"
- definiciones: D-23, D-05, D-07, D-21
- decision: "Rival: cuando su equipo viene cómodo en la tabla espera presión alta y rachas que roban; cuando persigue la liguilla se repliega y, si va perdiendo, llena el área de centros (18.5 por 90 contra 8.9 ganando): defender el segundo palo y salir por fuera. Staff: 50 partidos persiguiendo la liguilla con 15-16-19: ahí el equipo pierde la presión alta, adelanta el primer cambio al 50 y el córner deja de producir. Conservar el plan de presión alta también bajo presión de tabla"
Es su corte de tabla más claro: con la liguilla directa asegurada por posición presiona en campo rival el 19 % de las veces (arriba de la liga) y una de cada tres rachas roba; persiguiéndola, la presión alta cae al 14 % (abajo de la liga) y el plan pasa a ser el centro. Arranca bien los torneos: en las jornadas 1 a 4 va 8-8-8, pero el 39 % de sus robos altos terminan en tiro, de los más altos de la liga. Los cortes de play-in, sin nada en juego y directa asegurada tienen 4, 3 y 3 partidos: no se leen.

### En liguilla no empata: 5-0-5 en 10 partidos; en cuartos crea 0.85 y en semifinales 1.61
- bloque: M-1
- escenario: fase
- metrica: np_xg
- cifra: "Regular 38-31-39 (108): xG 1.18 (p58). Cuartos 3-0-3 (6): xG 0.85 (p11), xG por tiro 0.06 (p0), xG de córner 0.12 (p15), 61.60 % de tiros concedidos desde el área (p80), 32.70 % de secuencias por el centro (p8). Semis 2-0-2 (4): xG 1.61 (p97), 5.50 tiros en transición (p96), xG en transición 0.81 (p96), conversión de transición 8.44 % (p95), 16.25 faltas (p95), xG concedido en transición 0.66 (p84), 9.75 saques de banda en zona de peligro (p93). Play-in 1-0-0 (1): Necaxa 2-0, xG de córner 0.67"
- kpi: "0.85 | 1.61 | goles esperados por partido | 11 | Peligro creado en cuartos de final | contra | en semifinales"
- definiciones: D-24, D-03, D-07
- decision: "Rival en cuartos: su equipo llega apretado, tira desde lejos y mal (0.06 por tiro, lo más bajo de la liga) y concede el 62 % de los tiros desde dentro del área: defender el área y atacarla. En semis el partido se rompe: 16 faltas, 5.5 tiros en transición y 0.81 de peligro tras robo por partido; hay que cuidar la pérdida. Staff: son 6 y 4 partidos, todos con Tigres; es indicio, no ley. Pero el patrón es claro: la liguilla la juega a contragolpe y falta, no con el plan de posesión de la fase regular"
Los 10 partidos de liguilla son con Tigres (Apertura 2021 semifinalista, Clausura 2022 semifinalista, Apertura 2022 eliminado en cuartos) y ninguno terminó empatado. En cuartos el equipo se encoge: 0.85 de peligro, de los más bajos de la liga, y el peor tiro de su carrera. En semis se abre y gana o pierde a lo grande: León 2-1 y 1-2, Atlas 0-3 y 4-2. Con 6 y 4 partidos las cifras son orientativas, pero la diferencia entre fases es de casi el doble de peligro creado.

### Las tres vueltas que jugó con ventaja las perdió: concede 1.68 y su presión roba solo 19 %, lo más bajo
- bloque: M-2
- escenario: ida_vuelta
- metrica: np_xg_conceded
- cifra: "Ida 3-0-2 (5): xG concedido 0.61 (p0), xGD 0.51 (p86), posesión 55.27 %, fases de presión con recuperación 38.27 % (p98), altura de presión 58.03 m (p82), primer cambio 63'. Vuelta ganando el global 0-0-3 (3): xG concedido 1.68 (p97), 18.88 % con recuperación (p0), 71.42 % de tiros concedidos desde el área (p100), xG rival tras pérdida 0.29 (p93), posesión 44.96 % (p15), altura de presión 52.54 m (p7), línea defensiva 43.75 m (p7), primer cambio 45', 2.33 cambios de dibujo (p88). Vuelta perdiendo 2-0-0 (2): xGD 0.99 (p99), posesión 61.75 % (p100), xG de balón parado 0.87 (p98), 49.34 % con recuperación (p100)"
- kpi: "1.68 | 0.61 | goles esperados en contra por partido | 3 | Peligro concedido en la vuelta cuando llega con ventaja en el global | contra | en los partidos de ida"
- definiciones: D-24, D-05, D-13, D-21
- decision: "Rival: si Herrera llega a la vuelta con ventaja, atácalo: su equipo baja la línea 7 metros, su presión deja de robar y concede casi todo desde dentro del área. Si llega abajo, espera un equipo con 62 % del balón, presión que roba una de cada dos veces y balón parado. Staff: son 3 y 2 partidos, todos con Tigres (León 2021, Cruz Azul y Pachuca 2022), pero las tres vueltas con ventaja se perdieron y dos series se fueron: proteger el global cambiando al 45 y bajando la línea no le ha funcionado nunca"
La muestra es mínima, pero el patrón es el mismo tres veces: ida ganada (León 2-1, Cruz Azul 1-0, Pachuca 1-0), vuelta perdida (1-2, 0-1, 1-2) con la línea defensiva 7 metros más atrás que en la ida, la presión 5.5 metros más baja y el primer cambio al descanso. Contra León y Pachuca eso significó la eliminación por posición en la tabla. Al revés, cuando llegó abajo (Santos 2021, Atlas 2022) se fue arriba: 62 % de posesión, 0.87 de peligro de balón parado y 0.99 de saldo de peligro a favor, y ganó las dos.

### La presión creció torneo a torneo: de 122 presiones por partido con Tigres en 2022 a 190 con Tijuana en 2023
- bloque: M-2
- escenario: torneo
- metrica: pressures
- cifra: "Presiones por torneo: Apertura 2021 143.0 (p37), Clausura 2022 142.9 (p36), Apertura 2022 122.05 (p6), Clausura 2023 180.27 (p93), Apertura 2023 190.12 (p99), Clausura 2024 162.12 (p70), Apertura 2026 164.08 (p72). Contrapresiones: Apertura 2022 28.40 (p16), Apertura 2023 41.82 (p100), Clausura 2023 40.45 (p96), Clausura 2024 38.88 (p94). Fases de presión: Apertura 2022 23.05 (p11), Apertura 2023 38.06 (p95). xG rival tras pérdida: Apertura 2022 0.11 (p10), Clausura 2023 0.32 (p96)"
- kpi: "190.1 | 122.05 | presiones por partido | 99 | Presiones por partido en el Apertura 2023 con Tijuana | neutro | en el Apertura 2022 con Tigres"
- definiciones: D-26, D-05, D-06
- decision: "Staff: más presiones no significó más robo ni menos peligro concedido: el Tigres del Apertura 2022, el que menos presionó de su carrera (122 por partido, de los más bajos de la liga), dejaba dar 10.8 pases antes de robar y concedía 0.95 de peligro; el Tijuana del Apertura 2023, con 190 presiones (de las más altas), dejaba dar 13.3 y concedía 1.29. La intensidad se mide por pases que deja dar, no por presiones que corre. Rival: contra sus equipos corredores (Tijuana, Atlante) la salida en corto que atrae presión y rompe con el tercer hombre paga; contra el Tigres de 2022 no pagaba"
Su torneo más efectivo presionando fue el que menos presiones acumuló: con Tigres en el Apertura 2022 corrió 122 presiones por partido y 23 rachas, ambas de las más bajas de la liga, porque tenía el balón el 54 % del tiempo. Con Tijuana el equipo corrió 50 % más (190 presiones, 42 presiones tras pérdida por partido, lo más alto de la liga), y aun así concedió más que nunca; en el Clausura 2023 el peligro rival tras pérdida propia fue 0.32, de los más altos de la liga. Con Atlante vuelve a 164 presiones y 34 tras pérdida, arriba de la liga, con el peor robo de su carrera (16 pases).

### Atlante, Apertura 2026: crea lo mismo que concede y va 2-5-5, con cinco empates y cuatro de ellos 1-1
- bloque: M-1
- escenario: torneo
- metrica: np_xg
- cifra: "Apertura 2026, 12 partidos, 2-5-5, 13 goles a favor y 19 en contra; xG 1.17 (p55), xGD -0.06 (p49); posesión 44.26 % (p11), PPDA 16.02 (p21 bueno), field tilt 47.16 (p38); 44.60 % de robos altos con tiro (p100), 2.60 s de robo a tiro (p94 bueno), xG en transición 0.60 (p76), 4.50 tiros en transición (p82), regates completados 64.11 % (p94); córners cortos 49.84 % (p99), xG de córner 0.13 (p18), saques cerca del área retenidos 33.51 % (p0), goles de balón parado 0.17 (p2); 3-5-2 en 12 de 12; primer cambio 57.25' (p80)"
- kpi: "1.17 | 1.14 | goles esperados por partido | 55 | Peligro creado con el Atlante en el Apertura 2026 | neutro | liga"
- definiciones: D-26, D-03, D-07
- decision: "Staff: el equipo no está siendo superado (peligro creado y concedido parejos, saldo -0.06) pero regala lo barato: balón parado a favor casi nulo (0.17 goles por partido, de los más bajos de la liga) y dos de cada tres saques de banda cerca del área perdidos. Antes de tocar el modelo, arreglar esas dos cosas; es gol barato. Rival: Atlante juega sin balón y a la contra con el 45 % de sus robos altos convertidos en tiro, lo más alto de la liga: ordenarse tras pérdida es la única exigencia; en el balón parado hoy no hay castigo"
Doce partidos son pocos, pero el dibujo ya está: 3-5-2 en todos, 44 % del balón, presión que no roba (16 pases, su peor cifra) y un equipo que sí es peligroso cuando roba (0.60 de peligro en transición, arriba de la liga; 2.6 segundos del robo al tiro, de los más rápidos). Los dos triunfos vinieron con menos peligro que el rival (Cruz Azul 3-2 de visita con 0.72 contra 2.02) o a lo grande (Monterrey 4-2 con 2.53); las cinco derrotas, por un gol o dos. Es un equipo que vive al filo y hoy el balón parado, su único margen fácil, no aporta.

## Balón parado (M-4)

### Córner corto como firma: 25 % de sus córners, el doble que la liga, y con Atlante la mitad
- bloque: M-4
- metrica: corner_short_pct
- cifra: "Córners cortos 24.96 % vs 13.42 % (p88); Tigres 21.42 %, Tijuana 23.08 %, Atlante 49.84 % (p99). 639 córners a favor (5.37 por partido, p73), 12 goles; cortos: 74 por izquierda (26 tiros, xG 1.68, 1 gol) y 66 por derecha (17 tiros, xG 1.82, 1 gol). Mejor envío: derecha inswinging, 116 córners, 48 tiros, xG 6.29, 4 goles; peor: izquierda inswinging, 94 córners, 32 tiros, xG 2.20, 0 goles; izquierda outswinging 117, xG 3.65, 2 goles. xG por córner 0.03 vs 0.04 (p40); xG de córner 0.18 por partido (p57), Atlante 0.13 (p18)"
- kpi: "25 % | 13 % | de sus córners | 88 | Córners cortos | neutro"
- definiciones: D-07
- decision: "Staff: el corto es firma pero no produce (0.03 por córner, abajo de la liga, 2 goles en 140); con Atlante, que cobra corto la mitad de las veces, el peligro por córner cayó a 0.13 por partido, abajo de la liga. Volver al cerrado desde la derecha, su único envío que entra: 4 goles y 6.3 de peligro en 116, el doble por córner que el resto. Rival: dos hombres al corto en ambos lados y cerrar el primer palo en el cerrado desde la derecha"
Cobra 5.4 córners por partido (arriba de la liga) y uno de cada cuatro es corto, el doble que la media; con Atlante uno de cada dos, lo más alto de la liga. El problema es que el corto rinde poco (2 goles en 140 córners) y el cerrado desde la izquierda nada (0 goles en 94). Todo el rendimiento está en un solo envío, el cerrado desde la derecha al centro del área: 4 de sus 12 goles de córner y 6.3 de peligro en 116 cobros. En total son 12 goles de córner en 119 partidos, mientras concede 15 en 541 córners en contra.

### Balón parado en contra: 15 goles de córner en 541; con Tigres concedía 0.23 por partido y con Tijuana 0.56
- bloque: M-4
- metrica: sp_goals_conceded
- cifra: "Goles concedidos de balón parado 0.37 vs 0.45 (p60 bueno); xG concedido de balón parado 0.40 vs 0.48 (p65 bueno); xG por córner concedido 0.03 vs 0.04 (p60 bueno). Córners en contra 541 (4.5 por partido), 194 tiros, xG 16.5, 15 goles; izquierda inswinging 107, 3 goles; derecha inswinging 82, 3 goles; izquierda outswinging 76, 3 goles; corto por derecha 22, 6 tiros, 2 goles. Por equipo: Tigres 0.23 (p11), Tijuana 0.56 (p71), Atlante 0.42 (p50); Clausura 2023 1.00 por partido (p100), Apertura 2021 0.19 (p6). Penales: 21 en contra (15 goles), 22 a favor (18 goles). Ganó: 0.18 (p6); perdió: 0.59 (p78)"
- kpi: "0.56 | 0.23 | goles de balón parado en contra por partido | 29 | Goles de balón parado concedidos con Tijuana | contra | con Tigres"
- definiciones: D-07
- decision: "Staff: el córner le pesa más de lo que le rinde: concede 15 goles de córner y mete 12 pese a cobrar 100 más. Con Tijuana el balón parado en contra se duplicó respecto a Tigres y en el Clausura 2023 llegó a un gol por partido, lo más alto de la liga; con plantilla corta, la sesión de córner defensivo es semanal, no opcional. Rival: el córner cerrado desde la izquierda al centro del área (3 goles en 107) y el corto por la derecha (2 goles en 22 cobros, uno de cada 11) ya le entraron"
En el agregado defiende el balón parado mejor que la liga (0.37 goles concedidos por partido contra 0.45), pero la cifra la sostiene Tigres: 0.23 por partido en 62 partidos, de los más bajos de la liga. Con Tijuana subió a 0.56 y en el Clausura 2023 a 1.00, el máximo de la liga. Los penales van parejos (22 a favor, 21 en contra) y se convierten casi todos. Lo que le decide partidos es el córner: en los partidos que pierde concede 0.59 goles de balón parado, en los que gana 0.18.

### Pierde el balón en el saque de banda cerca del área: retiene 58 %, la liga 61 %; con Atlante 34 %, lo más bajo
- bloque: M-4
- metrica: throwin_retention_pct
- cifra: "Saques de banda en zona de peligro 8.28 vs 7.72 por partido (p67); retenidos 57.52 % vs 61.06 % (p34); Tigres 64.96 % (p63), Tijuana 53.85 % (p23), Atlante 33.51 % (p0). 985 saques a favor en total (8.3 por partido), 10 goles, 44 tiros, xG 3.6; por derecha lejos del área 384 saques, 51 tiros, xG 4.28, 5 goles; por izquierda lejos 363, 39 tiros, 2 goles. En contra 787 saques (6.6 por partido), 11 goles, 37 tiros, xG 3.5; por su izquierda lejos 262 saques, 37 tiros, xG 3.48, 6 goles. xG tras saque de banda 0.03 vs 0.02 (p71)"
- kpi: "58 % | 61 % | de los saques cerca del área que conserva | 34 | Saques de banda en zona de peligro que no pierde | contra"
- definiciones: D-07
- decision: "Staff del Atlante: dos de cada tres saques cerca del área los regala; es la cifra más baja de la liga y es barato de arreglar con una rutina (apoyo corto, tercer hombre a la espalda del marcador). Rival: presionar su saque de banda en campo propio, sobre todo en Atlante, y cuidar el saque largo por su derecha, de donde salieron 5 de sus 10 goles de banda. Por tu lado izquierdo le han hecho 6 de los 11 que ha recibido"
Tiene más saques de banda cerca del área rival que la liga (8.3 por partido) y los aprovecha algo mejor que la media en peligro, pero los pierde más: retiene el 58 % contra el 61 % de la liga, y con Atlante solo el 34 %, el valor más bajo de la liga. El saque de banda le ha dado 10 goles y le ha costado 11: los suyos salen por la derecha (5 de 10 desde el saque largo por ese lado); los que recibe entran por su izquierda (6 de 11). Con Tigres retenía el 65 %: otra vez, la plantilla.

### Tiro libre directo que rinde de más: 6 goles con 1.8 de peligro esperado en 67 intentos; el indirecto, abajo de la liga
- bloque: M-4
- metrica: fk_indirect_xg
- cifra: "Tiros libres a favor 680 (5.7 por partido), 14 goles, xG 9.0, 67 directos. Directo: 67 tiros, xG 1.8, 6 goles; xG de tiro libre directo 0.02 vs 0.02 (p45), Tijuana 0.02 (p77), Atlante 0.00 (p0). Indirecto al área: 95 tiros, xG 5.7, 6 goles; xG de tiro libre indirecto 0.05 vs 0.07 (p29), Tigres 0.03 (p12), Tijuana 0.07 (p59), Atlante 0.02 (p4). En contra: 658 tiros libres, 13 goles, xG 14.7, 73 directos; indirecto 98 tiros, xG 9.4, 7 goles; directo 73 tiros, xG 2.1, 5 goles"
- kpi: "6 | 1.8 | goles de tiro libre directo contra los que se esperaban | 45 | Goles de tiro libre directo en 119 partidos | favor | goles esperados de esos 67 tiros"
- definiciones: D-07, SB
- decision: "Staff: el directo son los pies del cobrador, no el modelo: 6 goles donde se esperaban 2, y con Atlante cero peligro de tiro libre directo. El indirecto es donde hay margen: 95 tiros y 6 goles en 119 partidos, abajo de la liga, y con Atlante casi no existe (0.02 por partido, de los más bajos). Rival: no hacer falta en la frontal contra sus equipos con cobrador; contra Atlante, el tiro libre hoy no es amenaza, el peligro está en el córner cerrado desde la derecha"
Con el tiro libre directo ha triplicado lo esperado (6 goles con 1.8 de peligro), y en contra le han hecho 5 con 2.1: el directo es ruleta de cobrador. El indirecto, que sí depende del trabajo, está abajo de la liga con los tres equipos salvo Tijuana: 0.05 de peligro por partido contra 0.07 de la liga, y con Atlante 0.02, de los más bajos. En contra, en cambio, el tiro libre al área le genera 9.4 de peligro y 7 goles en 98 tiros, más de lo que él produce con el mismo recurso.

## Jugadores y cambios (M-5)

### Sin dibujo fijo: 10 sistemas en 119 partidos, el 3-5-2 en 37; con Atlante 12 de 12 en 3-5-2
- bloque: M-5
- metrica: tactical_shifts
- cifra: "3-5-2 en 37 (31 %), 4-1-4-1 en 17 (14 %), 3-4-3 en 16 (13 %), 4-2-3-1 en 14 (12 %), 4-4-2 en 13 (11 %), 4-3-3 en 11 (9 %), 4-4-1-1 en 5, 4-1-2-1-2 en 4. Apertura 2021: 3-5-2 en 15 de 21; Clausura 2022: 3-4-3 en 7 de 21; Apertura 2023: 4-1-4-1 en 7 de 17; Apertura 2026: 3-5-2 en 12 de 12. Cambio real de dibujo en 64 de 119; 1.66 cambios por partido vs 1.80 (p36); 198 cambios en total. Perdiendo, tramo 75: 4-4-2 25 %, 3-5-2 19 %; tramo 85: 4-4-2 25 %, 4-1-2-1-2 18 %. Ganando, tramo 80: 3-5-2 24 %, 4-4-2 13 %"
- kpi: "31 % | | de los partidos | | Partidos que arranca en 3-5-2 | neutro"
- definiciones: SB, D-21, D-26
- decision: "Rival: no prepares un dibujo, prepara dos: el 3-5-2 con carrileros es la base, pero cambia de sistema de un torneo a otro y, perdiendo después del 65, pasa a 4-4-2 o al rombo quitando un central. Staff: 64 cambios reales de dibujo en 119 partidos; el 4-3-3 es el que más peligro le ha dado (1.55 por partido en 11, con 6-2-3) y el rombo el que menos (0.58 en 4 partidos, 0-1-3). Si hay que remontar, el dato apunta al 4-3-3, no al rombo"
Es un técnico de sistemas, no de sistema: en el Clausura 2022, su mejor torneo (12-3-6, subcampeón), usó 8 dibujos distintos en 21 partidos. El 3-5-2 fue la base en Tigres 2021 y lo es hoy en Atlante (12 de 12), pero en Tijuana la base fue el 4-1-4-1. Lo que sí es constante es el plan de remontada: perdiendo, a partir del minuto 65, el 3-5-2 cede ante el 4-4-2 (25 % de los minutos en el tramo 75) y el rombo 4-1-2-1-2 (18 % en el 85), es decir, un central menos y dos puntas. Ganando sostiene el 3-5-2 hasta el final, con 3-4-3 como variante en los últimos 10 minutos.

### Perdiendo cambia al descanso: primer cambio al 45 de mediana, y el equipo pasa de 53 a 62 de dominio territorial
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio perdiendo: media 50.2', mediana 45' (n=44); empatando media 50.2', mediana 56' (n=45); ganando media 61.2', mediana 64' (n=30). Perdiendo, 15 min antes vs después: xG 0.17 a 0.25, xG concedido 0.34 a 0.19, tiros 2.4 a 2.9, PPDA 13.1 a 10.1, field tilt 53 a 62, altura de presión 57 a 58. A quién saca perdiendo: interior derecho 19, pivote derecho 15, central derecho 15, lateral izquierdo 12, carrilero derecho 11, lateral derecho 11. 4.2 cambios por partido; 460 tácticos y 40 por lesión. Primer cambio Tijuana 47.93' (p7), Tigres 55.79' (p68), Atlante 57.25' (p80)"
- kpi: "62 | 53 | por ciento del juego en campo rival | | Dominio territorial en los 15 minutos después del primer cambio, perdiendo | favor | antes del cambio"
- definiciones: D-21, D-13, SB
- decision: "Rival: si lo tienes abajo al descanso, espera un cambio de dibujo y un central menos al 45; los 15 minutos siguientes son suyos (concede la mitad, presiona 3 pases más intenso y domina el 62 % del campo). Aguantar hasta el 60 y después atacar la espalda de los carrileros. Staff: el gatillo del descanso funciona; adelantarlo al 40 cuando va perdiendo de visita, donde el equipo no reacciona solo (0.97 de peligro por 90 perdiendo fuera contra 1.44 en casa)"
Perdiendo no espera: la mitad de sus primeros cambios perdiendo llegan al descanso o antes (mediana 45, media 50.2), y es su mejor decisión dentro del partido: en los 15 minutos siguientes el peligro creado sube de 0.17 a 0.25, el concedido cae de 0.34 a 0.19, la presión pasa de 13 a 10 pases antes de robar y el dominio territorial de 53 a 62. A quién saca lo confirma: interior derecho, pivote derecho y central derecho, es decir, sacrifica un hombre de contención por un atacante. Con Tijuana cambiaba antes que nadie (47.9 de media, de los más tempranos de la liga, 39 en el Clausura 2023); con Atlante espera más (57.3).

### Ganando cambia tarde y el cambio lo mete atrás: del 41 al 36 de dominio territorial y concede más
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio ganando: media 61.2', mediana 64' (n=30); por resultado final, ganó 58.52' (p88), empató 49.71' (p16), perdió 49.70' (p16). Ganando, 15 min antes vs después: xG 0.22 a 0.18, xG concedido 0.16 a 0.20, tiros 2.1 a 1.8, field tilt 41 a 36, PPDA 17.0 a 14.2, altura de presión 54 a 53. Todos los cambios ganando: 172, minuto medio 74.7'. A quién saca ganando: interior izquierdo 16, interior derecho 14, extremo derecho 13, delantero centro 13, pivote derecho 12, extremo izquierdo 12. Todos: xG 0.17 a 0.23, xG concedido 0.25 a 0.19"
- kpi: "36 | 41 | por ciento del juego en campo rival | | Dominio territorial en los 15 minutos después del primer cambio, ganando | contra | antes del cambio"
- definiciones: D-21, D-13, SB
- decision: "Staff: ganando, el primer cambio llega al 64 y saca piernas de ataque (interiores, extremo, delantero): el equipo cede 5 puntos de territorio, tira menos y concede más. Cambiar por el mismo perfil, no por un contención, y hacerlo antes del 60, cuando el rival ya empuja. Rival: entre el 64 y el 75, cuando entra su primer cambio ganando, es la ventana para empatar: su equipo baja 5 puntos de territorio y, aunque presiona más intenso (de 17 a 14 pases), ya domina solo el 36 % del campo"
Es el espejo del hallazgo anterior: el mismo técnico que cambia al descanso perdiendo espera hasta el 64 ganando, y ese cambio no mejora nada. En los 15 minutos siguientes crea menos (0.22 a 0.18), concede más (0.16 a 0.20) y pierde territorio (41 a 36). En el agregado de los 119 partidos el primer cambio sí funciona (peligro creado de 0.17 a 0.23, concedido de 0.25 a 0.19), lo que confirma que el problema es el cambio ganando, no el cambio. La lectura es consistente con el corte por marcador: ganando su equipo ya está con el 44 % del campo, y el cambio lo hunde otro poco.

### Once estable: 2.3 titulares nuevos por partido y un núcleo en Tigres de cuatro arriba del 80 % de titularidades
- bloque: M-5
- metrica: xi_stability
- cifra: "Estabilidad del once (Jaccard entre onces consecutivos) 0.68; 2.3 titulares distintos de un partido al siguiente. Más usados en los 119 partidos: Nahuel Guzmán 61 titularidades (51 %), 5206 min; Javier Aquino 53 (45 %), 4390 min; André-Pierre Gignac 52 (44 %), 4393 min; Guido Pizarro 51 (43 %), 4330 min; Rafael de Souza Carioca 49 (41 %), 4061 min; Luis Quiñones 46 (39 %); Juan Pablo Vigón 44 (37 %). Tijuana: Carlos González 46 (39 %), 3932 min; José Antonio Rodríguez 39; Nicolás Díaz 39; Christian Rivera 32; Kevin Balanta 31; Lucas Rodríguez 30. Núcleo por torneo: Clausura 2022 10 jugadores, Apertura 2022 7, Apertura 2023 9, Apertura 2026 9 en 12 partidos"
- kpi: "2.3 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB
- decision: "Staff: con Tigres el once se escribía solo (Guzmán, Aquino, Gignac y Pizarro titulares en más de 4 de cada 5 partidos) y fue su mejor ciclo; con Atlante repite 9 jugadores del núcleo en 12 partidos pese a ir 2-5-5: la estabilidad es decisión suya, no consecuencia de ganar. Rival: puedes preparar el partido contra nombres; el once del fin de semana será el de la semana pasada con dos cambios"
Rota poco: 2.3 titulares nuevos por partido y un parecido del 68 % entre onces consecutivos, con los tres equipos. En Tigres cuatro jugadores fueron titulares en más del 80 % de sus 62 partidos (Guzmán 61, Aquino 53, Gignac 52, Pizarro 51), y Carioca y Quiñones cerca. En Tijuana el núcleo también se mantuvo de un torneo al otro: Rivera, González, Balanta, Díaz, Rodríguez en portería y Lucas Rodríguez repiten en Apertura 2023 y Clausura 2024. En Atlante, con 12 partidos, ya hay 9 jugadores con 70 % o más de titularidades (Fabela, Méndez, Puga, Palacios, Portales, Santillán, Prado, Quiroz).

## Por equipo: qué viaja con Herrera (Tigres 62, Tijuana 45, Atlante 12)

### Más presiones no es más presión: Tigres corría 136 y robaba a los 11 pases; Atlante corre 164 y roba a los 16
- bloque: M-2
- escenario: equipo
- metrica: ppda_own
- cifra: "Tigres: 136.21 presiones (p25), PPDA 10.82 (p86 bueno), posesión 54.55 %, xG concedido 0.93 (p19), 30.52 contrapresiones (p39), 26.68 fases de presión (p32), 28.13 presiones en último tercio (p23). Tijuana: 177.13 presiones (p90), PPDA 12.71 (p63 bueno), 40.38 contrapresiones (p96), 35.07 fases (p84), 39.29 presiones en último tercio (p77), xG concedido 1.29 (p68), xG rival tras pérdida 0.22 (p75). Atlante: 164.08 presiones (p72), PPDA 16.02 (p21 bueno), posesión 44.26 % (p11), 34.33 contrapresiones (p72), 36.92 presiones en último tercio (p66), 32.48 % de fases con recuperación"
- kpi: "16.0 | 10.8 | pases que deja dar antes de robar | 21 | Intensidad de presión con Atlante | contra | con Tigres"
- definiciones: D-26b, D-05b, D-06, D-01
- decision: "Staff del Atlante: el equipo corre casi tanto como el Tijuana (164 presiones por partido, arriba de la liga) pero el rival le da 16 pases antes de perderla, abajo de la liga; la presión no está coordinada, es persecución. Trabajar los gatillos (pase atrás, control orientado al lateral) antes que la intensidad. Rival del Atlante: aceptar la pelota y mover al equipo de lado a lado; se cansa sin robar"
La intensidad de presión, medida en pases que deja dar, fue de las mejores de la liga con Tigres (10.8), normal con Tijuana (12.7) y floja con Atlante (16.0), en orden inverso a cuánto corre el equipo. Con Tigres el balón hacía el trabajo: 55 % de posesión y el rival con poco tiempo para encadenar pases. Con Tijuana el volumen de presión fue de los más altos de la liga (177 presiones, 40 tras pérdida, 39 en último tercio) y aun así concedió 1.29 de peligro. Con Atlante la presión tras pérdida sigue arriba de la liga (34), pero sin balón y sin robo: el mismo esfuerzo, la mitad del efecto.

### Lo que viaja con él: robo alto, ataques tras robo y córner corto; lo que no: regate, posesión, pase y área cerrada
- bloque: M-3
- escenario: equipo
- metrica: transitions
- cifra: "Viaja (Tigres / Tijuana / Atlante): transiciones 65.44 (p72) / 72.71 (p96) / 69.00 (p88); recuperaciones altas 12.82 / 16.73 / 14.08; tiros en transición 3.90 / 4.58 / 4.50; córners cortos 21.42 % / 23.08 % / 49.84 %; centros por entrada 1.17 / 1.04 / 1.06; secuencias por izquierda 32.99 % / 33.18 % / 32.37 %; tiros sin penal 14.81 / 14.47 / 14.50. No viaja: regates 18.11 / 15.47 / 12.42; posesión 54.55 % / 48.30 % / 44.26 %; precisión de pase 80.75 % / 76.70 % / 74.48 %; conducciones 50.40 / 43.51 / 42.83; field tilt 57.69 / 52.05 / 47.16; xG concedido 0.93 / 1.29; xGD 0.31 / -0.15 / -0.06"
- kpi: "69.0 | 63.2 | ataques tras robo por partido | 88 | Ataques que arrancan al robar el balón, con Atlante | neutro | liga"
- definiciones: D-26b, D-03, D-14, D-07
- decision: "Staff: al armar plantilla para él, priorizar delanteros que presionen y corran al espacio, carrileros que lleguen y un cobrador para el corto; el regate, la posesión y el área cerrada son del jugador, no del modelo. Rival: el plan de robo y ataque rápido lo vas a encontrar siempre, con cualquier plantilla; el dominio del balón solo cuando la plantilla lo permite"
Lo que se repite con los tres equipos está arriba de la liga en los tres: ataques tras robo (65 a 73 por partido), recuperaciones altas (13 a 17), tiros en transición (3.9 a 4.6), tiros por partido (14.5 a 14.8), el sesgo a la izquierda y el córner corto. Lo que baja escalón a escalón de Tigres a Tijuana a Atlante es lo que depende del pie: regate (18 a 12), posesión (55 a 44 %), precisión de pase (81 a 74 %), conducciones (50 a 43) y dominio territorial (58 a 47). El saldo de peligro siguió la misma escalera: 0.31 con Tigres, -0.15 con Tijuana, -0.06 con Atlante.

## Rivales y partidos

### Nunca le ha ganado al América: 0-1-6 en 7 partidos, y contra Almada 3-2-6 en 11 duelos
- bloque: M-2
- escenario: rival
- metrica: xgd
- cifra: "América 0-1-6: 2021 0-1 de visita; 2022 0-2 de local y 1-2 de visita; 2023 1-2 y 0-3 de visita; 2024 0-2 de local; 2026 1-1 de local. Almada 11 partidos, 3-2-6, xG 1.03 a favor / 1.23 en contra. Fernando Ortiz 5, 0-1-4, xG 0.77 / 1.53. Larcamón 5, 0-2-3, xG 1.18 / 1.09. Ambriz 5, 3-2-0, xG 1.86 / 0.81. Cocca 5, 2-2-1, xG 1.38 / 0.77. Vucetich 4, 1-1-2, xG 0.66 / 1.52. Peor récord por rival: América 0-1-6, Puebla 1-2-4, Pachuca 3-0-6, Necaxa 1-3-3"
- kpi: "0 | 7 | partidos ganados al América | | Triunfos contra el América en 7 partidos | contra | partidos jugados"
- definiciones: D-25
- decision: "Rival (América, Pachuca): el patrón se repite con tres plantillas: contra equipos que le dejan el balón y salen rápido, su equipo crea 1.0 y concede 1.2 o más. Staff: antes del próximo América revisar los 7 partidos; 4 fueron de visita y el 0-3 de 2023 es su peor partido con datos (0.38 contra 3.49), pero el 0-2 en casa de 2024 lo perdió creando 1.83 contra 0.70: no es solo plantilla, es selección de tiro y cobertura tras pérdida"
Contra el América ha jugado con los tres equipos y con cuatro técnicos rivales distintos (Solari, Ortiz, Jardine, Almada) y nunca ganó; contra Fernando Ortiz en particular va 0-1-4 creando 0.77 y concediendo 1.53 por partido. Almada es su rival más frecuente: 11 duelos, 3-2-6, y de los 6 perdidos 4 fueron de visita y 2 de local con Tijuana creando más peligro que Pachuca (2-3 en 2023). Contra Ambriz, en cambio, 3-2-0 creando 1.86 por partido, su mejor cifra contra cualquier técnico con 4 o más duelos.
