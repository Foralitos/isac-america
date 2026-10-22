# Hallazgos — Huiqui en la Liga MX (Clausura 2026 → Apertura 2026, 19 partidos)

Cifras de `data/out/` (export 2026-10-22). Todos los partidos de Joel Adrián Huiqui Andrade con datos: Cruz Azul (Clausura 2026, 7: una jornada regular y los 6 de liguilla; Apertura 2026, 12). Récord 11-4-4, del 27 de abril al 18 de octubre de 2026. Este técnico tiene 19 partidos en la Liga MX con datos y el análisis se hizo con esos; las cifras son orientativas y los cortes por contexto, con pocas jornadas, pueden moverse. El texto visible va en lenguaje llano ("peligro creado" = xG, "intensidad de presión" = PPDA, "dominio territorial" = field tilt, "ataques tras robo" = transiciones ofensivas, "presión tras pérdida" = contrapresión); la versión técnica queda en `cifra`. Percentil = posición entre 198 medias de equipo-torneo de la Liga MX 2021/22–2025/26 (p90 = más alto que el 90 % de la liga). Formato parseable por `isac.export.findings`: `kpi` = valor | referencia | unidad | percentil | etiqueta | tono | etiqueta de la referencia.

## Identidad (M-1, M-2, M-3)

### Tira 18 veces por partido, de los más altos de la liga, pero cada tiro vale lo mismo que el promedio
- bloque: M-1
- metrica: np_shots
- cifra: "17.8 tiros sin penal vs 13.2 de liga (p98); 18.8 % de secuencias terminan en tiro vs 15.3 (p94); xG 1.50 vs 1.14 (p92); 17.7 entradas al área vs 14.0 (p92); xG por tiro 0.09 (p48); 44.9 % de tiros desde fuera del área (p64); OBV ofensivo 1.69 (p90)"
- kpi: "17.8 | 13.2 | tiros por partido | 98 | Tiros sin penal por partido | neutro"
- definiciones: D-02, D-12
- decision: "Rival: el peligro viene por volumen, no por calidad; cerrar el área y conceder el tiro lejano, que es casi la mitad de los suyos. Staff: con 18 llegadas al área por partido el margen está en elegir mejor el tiro: menos disparos de fuera y más pase atrás en el área subiría el peligro sin tocar el modelo"
Es el rasgo que más lo separa de la liga en ataque, con 19 partidos de muestra: casi uno de cada cinco ataques termina en tiro, cuando en la liga es uno de cada seis y medio. El peligro creado (1.50 goles esperados por partido) sale de la cantidad, porque la calidad de cada tiro es idéntica a la media. Del minuto 60 en adelante el volumen se dispara aún más (ver momento del partido).

### Juega en campo rival: 61 % de dominio territorial y solo 4 de cada 10 ataques nacen en su campo
- bloque: M-1
- metrica: field_tilt
- cifra: "Field tilt 61.0 % vs 49.6 (p92); posesión 53.7 % (p76); 87.3 secuencias por partido vs 80.3 (p91); 40.6 % nacen en tercio defensivo vs 44.5 (p9), 40.2 % en tercio medio (p81) y 19.15 % en el último (p85); salida larga del portero 34.7 % vs 46.8 (p11); 34.0 % de secuencias nacen por derecha (p80) y 33.35 % por el centro (p13)"
- kpi: "61 % | 50 % | del juego en campo rival | 92 | Dominio territorial | neutro"
- definiciones: D-10, D-11, D-02
- decision: "Rival: el partido se va a jugar en tu campo; defender ordenado y buscar su espalda, no competirle el balón. Staff: la salida corta del portero (solo 35 % largo) es lo que mete al equipo arriba; si el rival presiona al portero, tener preparada la salida al carrilero derecho, por donde nacen más ataques"
El equipo vive en campo contrario y arma más ataques que casi toda la liga (87 por partido). Menos de la mitad de sus posesiones empiezan en su propio tercio, de los más bajos de la liga, porque el portero saca corto y porque roba arriba (ver robos en campo rival). Los ataques nacen más por la derecha y menos por el centro que en la liga; el centro del campo se usa para llegar, no para empezar.

### Regatea poco pero casi todo le sale: 72 % de regates completados, el más alto de la liga, con 12 intentos por partido
- bloque: M-1
- metrica: dribbles_completed_pct
- cifra: "Regates completados 72.5 % vs 53.9 (p99); 11.8 regates intentados vs 14.0 (p20); 45.8 conducciones progresivas vs 39.0 (p84); 105.4 pases progresivos vs 100.4 (p69); 0.79 centros por entrada al área vs 0.94 (p19)"
- kpi: "72 % | 54 % | de los regates le salen | 99 | Regates completados | favor"
- definiciones: D-14
- decision: "Rival: no regalar el uno contra uno en banda, porque lo gana siete de cada diez veces; duplicar marca al que conduce. Staff: el regate es selectivo y rinde; subir el volumen con los carrileros (hoy 12 intentos, abajo de la liga) es una palanca barata para generar más superioridades"
Avanza más conduciendo que centrando: las conducciones hacia adelante están arriba de la liga y los centros por cada llegada al área, abajo. Llega al área por el suelo y con el balón controlado, no con envíos. De visita el regate casi desaparece (9.4 intentos, de los más bajos) y en los partidos que perdió intentó más (16.25) y no le alcanzó. Son 19 partidos: el porcentaje es alto pero la base es chica (unos 225 regates).

### Defiende 5 metros más arriba que la liga pero arma menos rachas de presión: 23 contra 29
- bloque: M-2
- metrica: press_height
- cifra: "Altura de presión 59.8 m vs 55.8 (p95); línea defensiva 52.5 m vs 47.9 (p93); 23.5 fases de presión por partido vs 29.3 (p12); 131.8 presiones vs 151.5 (p16); 20.45 % de fases altas vs 16.9 (p78); 39.3 presiones en último tercio vs 33.9 (p77); PPDA 13.0 vs 14.0 (p42); 31.6 % de fases con recuperación (p57); 12.2 faltas vs 13.6 (p18)"
- kpi: "60 | 56 | metros desde su portería | 95 | Altura de la presión | neutro"
- definiciones: D-13, D-05, D-05b
- decision: "Rival: la línea defensiva está a 52 metros de su portería y presiona pocas veces; el pase largo a la espalda de los centrales y el delantero que se descuelga antes de que salte la presión son el camino. Staff: la presión es selectiva (pocas rachas, pero en campo rival); si el equipo va a defender a 52 metros, el portero y los centrales necesitan trabajar la cobertura del espacio largo"
No es un equipo que presione todo el tiempo: las presiones totales y las rachas de presión están abajo de la liga, y la intensidad (13 pases que deja dar antes de robar) es la de cualquiera. Lo que lo distingue es dónde pone el bloque: la presión y la línea defensiva, ambas de las más altas de la liga, y una de cada cinco rachas ocurre en campo rival. Comete pocas faltas: defiende con posición, no con contacto. Con 19 partidos, la altura es el rasgo más estable de todos; se mantiene entre 55 y 70 metros en 17 de los 19.

### Recupera el balón en 33 % de sus presiones tras pérdida, de los más altos de la liga; la liga, 27 %
- bloque: M-2
- metrica: cp_regain_pct
- cifra: "32.9 % de contrapresiones con regain vs 27.4 (p96) con 30.3 contrapresiones por partido vs 32.0 (p35); concede 11.2 entradas al área vs 14.2 (p13) y 54.0 % de tiros desde dentro del área vs 58.2 (p14); directness permitida al rival 0.56 vs 0.59 (p6); xG concedido 1.07 vs 1.17 (p37); 12.95 tiros concedidos (p38)"
- kpi: "33 % | 27 % | de sus presiones tras pérdida recuperan el balón | 96 | Presiones tras pérdida que recuperan | favor"
- definiciones: D-06, D-12
- decision: "Rival: al robarle, no tocar hacia adelante de inmediato en zona de pérdida; el primer pase tiene que salir de la zona de presión, porque una de cada tres veces lo vuelve a perder. Staff: la contrapresión es la mejor pieza defensiva del equipo; conviene protegerla con el pivote cerca del balón en lugar de bajarlo"
Presiona tras pérdida lo normal (30 por partido) pero recupera como casi nadie, y eso explica que el rival llegue poco al área (11 veces contra 14 de la liga) y tire más desde fuera: solo 54 % de los tiros que concede son desde dentro del área, de los más bajos. También obliga al rival a jugar menos directo que cualquier otro equipo de la liga. Con 19 partidos el porcentaje puede moverse, pero la cadena es coherente: recupera rápido, el rival no avanza, los tiros llegan de lejos.

### Roba 15 balones en campo rival por partido, de los más altos de la liga, y saca 4.6 tiros tras robo
- bloque: M-3
- metrica: high_recoveries
- cifra: "14.8 recuperaciones altas vs 11.9 (p91); 4.6 tiros en transición vs 3.8 (p84); conversión de transición 7.35 % vs 6.34 (p81); 66.4 transiciones vs 63.2 (p78); xG en transición 0.54 vs 0.51 (p62); 32.95 % de recuperaciones altas con tiro en 10 s (p45); 3.4 s de robo a tiro (p60)"
- kpi: "14.8 | 11.9 | robos en campo rival por partido | 91 | Robos en campo rival por partido | favor"
- definiciones: D-03, D-10
- decision: "Rival: salir jugando contra Cruz Azul cuesta 15 robos arriba por partido; la salida directa a un delantero que aguante es más segura que la corta. Staff: roba mucho arriba pero el peligro que crea tras robar es el de la liga (0.54); falta que el primer pase tras el robo busque el área y no la posesión"
Los robos altos son consecuencia de la presión alta y la contrapresión eficaz; el equipo convierte más robos en tiro que la liga (7 de cada 100 contra 6). Lo que no destaca es la calidad de esos tiros: el peligro creado tras robo está en la media. Cuando va perdiendo, ese peligro casi se triplica (ver marcador en vivo). Son 19 partidos; el volumen de robos es consistente en los dos torneos (15.7 en fase regular).

### Le pesa la pérdida: 2.5 tiros rivales en los 10 segundos después de perder el balón, arriba de la liga
- bloque: M-3
- metrica: vuln_shots
- cifra: "2.47 tiros rivales en 10 s tras pérdida vs 2.21 (p76); xG rival tras pérdida 0.17 vs 0.18 (p46); xG concedido en transición 0.43 vs 0.52 (p29); línea defensiva 52.5 m (p93); 111.6 pérdidas por 90 empatando y 118.4 en los primeros 30 minutos (p91); en las 4 derrotas, 4.0 tiros rivales tras pérdida (p99)"
- kpi: "2.47 | 2.21 | tiros del rival en los 10 segundos tras perderla, por partido | 76 | Tiros del rival justo tras perderla | contra"
- definiciones: D-04, D-13
- decision: "Rival: tirar rápido al robar, antes de que se reorganice; el tiro que llega en los primeros 10 segundos es el que más le cuesta cubrir. Staff: las pérdidas en los primeros 30 minutos son de las más altas de la liga y la línea está a 52 metros; en ese tramo conviene un pivote fijo detrás del balón para que la pérdida no sea tiro"
Es el costo de jugar tan arriba: cada pérdida encuentra al equipo lejos de su portería y el rival tira rápido. Los tiros son de poca calidad (el peligro justo tras la pérdida es el de la liga y el peligro concedido en contragolpe está abajo), así que el problema es de volumen, no de goles esperados. Pero en los 4 partidos que perdió ese número se duplicó a 4 por partido: cuando la pérdida se convierte en tiro, pierde. Muestra de 19 partidos.

## Consistencia y variabilidad (D-20, D-21, D-22, D-23, D-24, D-25, D-26)

### De visita presiona menos tras perderla, de los más bajos de la liga: 25 contra 34 en casa, y el rival le crea el doble
- bloque: M-2
- escenario: localia
- metrica: counterpressures
- cifra: "Local 6-3-2 (11 partidos): 34.2 contrapresiones (p71), xG rival tras pérdida 0.12 (p16), 4.2 s de robo a tiro (p97), 13.6 regates (p47), primer cambio al 60.1' (p95), 51.3 % de tiros concedidos desde el área (p6). Visita 5-1-2 (8 partidos): 25.0 contrapresiones (p4), xG rival tras pérdida 0.23 (p81), 2.33 s de robo a tiro (p2), 9.4 regates (p4), 49.9 % de tiros fuera del área (p91), 23.15 % de fases de presión altas (p95), 67.1 % de pases bajo presión completados (p20), 35.8 % de secuencias por derecha (p97)"
- kpi: "25.0 | 34.2 | presiones tras pérdida por partido | 4 | Presión tras pérdida de visita | contra | de local"
- definiciones: D-20, D-06, D-04
- decision: "Rival que lo recibe: su equipo no persigue la pérdida fuera de casa; al robar, salir rápido porque hay 10 segundos de ventana real. Staff: de visita el equipo deja de contrapresionar y tira de lejos; mantener el gatillo de 5 segundos tras la pérdida es la corrección más clara entre casa y fuera"
Fuera de casa el récord es bueno (5 ganados, 1 empatado, 2 perdidos) pero el estilo es otro: presiona tras pérdida como los equipos que menos lo hacen, el rival le crea el doble de peligro justo tras la pérdida y la mitad de sus tiros son desde fuera del área. También es más vertical: tira 2 segundos después de robar, contra 4 en casa. De local, perdiendo crea 1.76 goles esperados por 90 minutos y 1.37 de ellos tras robo; ganando concede 1.44 y 16 tiros por 90. Son 11 y 8 partidos: patrón, no ley.

### Ganando se mete atrás: deja dar 16 pases antes de robar y concede 15.5 tiros por 90 minutos; perdiendo, 10
- bloque: M-2
- escenario: marcador
- metrica: shots_conceded
- cifra: "Ganando (539 min en 12 partidos): PPDA 16.1 (p76), 15.5 tiros concedidos por 90 (p73), xG concedido 1.35 (p61), xG concedido en transición 0.63 (p80), de balón parado 0.72 (p79), 5.5 recuperaciones altas (p23), 63.7 pases progresivos (p27), 87.05 pérdidas (p20). Perdiendo (465 min en 10): PPDA 8.4 (p21), 9.9 tiros concedidos (p47), 16.8 recuperaciones altas (p94). Empatando (918 min): xG concedido 0.79 (p8), 10.0 tiros concedidos (p19)"
- kpi: "15.5 | 9.9 | tiros concedidos por cada 90 minutos | 73 | Tiros que concede cuando va ganando | contra | cuando va perdiendo"
- definiciones: D-21, D-05b, D-07
- decision: "Rival: si Cruz Azul se adelanta, el partido se abre a tu favor: tendrás el balón, el córner y el contragolpe; insistir, porque concede más que nunca. Staff: con ventaja el equipo deja de robar arriba (5.5 robos por 90 contra 17 perdiendo) y concede en contragolpe y balón parado; defender la ventaja presionando, no replegando, es la decisión táctica pendiente"
Es el cambio más grande de todo el perfil. Empatando es el equipo más seguro del corte (0.79 goles esperados concedidos por 90 minutos, de los más bajos); en cuanto se pone arriba, el peligro concedido casi se duplica y los tiros en contra pasan de 10 a 15.5. Los tres 3-3 y 4-3 del Apertura (América, Toluca, Pumas) son la foto de esto. En la liguilla del Clausura la fórmula aguantó (ganando concedió 16.5 tiros y 1.73 goles esperados por 90 y no perdió), pero la muestra son 539 minutos con ventaja.

### Perdiendo se vuelve vertical: 0.87 goles esperados tras robo por 90 minutos, de los más altos, más del doble que con ventaja
- bloque: M-3
- escenario: marcador
- metrica: transition_xg
- cifra: "Perdiendo (465 min en 10 partidos): xG en transición 0.87 por 90 (p94), 22.6 entradas al área (p97), OBV ofensivo 2.15 (p98), directness 0.59 (p95), 117.05 pases progresivos (p85), 49.7 conducciones progresivas (p83), 4.45 tiros en transición (p91); concede xG 1.42 (p80) y OBV 1.50 (p89). Ganando: xG en transición 0.37 (p37), 10.4 entradas al área (p46), directness 0.49 (p23)"
- kpi: "0.87 | 0.37 | goles esperados tras robo por cada 90 minutos | 94 | Peligro creado tras robo cuando va perdiendo | favor | cuando va ganando"
- definiciones: D-21, D-03, D-14
- decision: "Rival que va ganando: no pasarle el balón para que lo pierda; Cruz Azul abajo roba y llega al área 23 veces por 90, así que la ventaja se defiende con posesión larga, no con despeje. Staff: la versión que va perdiendo es la más vertical y la que más vale por acción; convendría arrancar así más seguido en vez de esperar al gol en contra"
Cuando va abajo el equipo cambia de marcha: pasa de 10 llegadas al área por 90 minutos a 23, se vuelve más directo y sus acciones con balón valen casi el doble. Lo paga en la otra área (1.42 goles esperados concedidos por 90, arriba de la liga), pero el saldo es a favor. Tres de sus cuatro derrotas fueron por un gol (Atlante 2-3, Tijuana 1-2, Monterrey 0-1): la reacción existe, lo que faltó fue rematarla. Son 465 minutos perdiendo en 10 partidos.

### Del 60 al 90 llega al área 19 veces por cada 90 minutos, de los más altos, y entre el 15 y el 30 se apaga
- bloque: M-1
- escenario: momento
- metrica: box_entries
- cifra: "60-90 (694 min): 19.5 entradas al área por 90 (p99), xG 1.58 (p94), 14.4 recuperaciones altas (p99), 16.1 centros (p97), posesión 56.5 % (p93), 44.4 conducciones progresivas (p95), PPDA 10.4 (p30); concede xG 1.18 (p35) y 0.64 de balón parado (p76). 0-30 (570 min): xG 0.91 (p58), 11.5 entradas (p62), 118.4 pérdidas (p91); altura de presión 65.7 m en el 0-15 (p97). Tramo 15-30: xG 0.55 (p13), 9.2 tiros (p22), 6.95 regates (p6)"
- kpi: "19.5 | 11.5 | llegadas al área por cada 90 minutos | 99 | Llegadas al área del minuto 60 al 90 | favor | en los primeros 30 minutos"
- definiciones: D-22, D-12, D-03
- decision: "Rival: el tramo para hacerle daño es del 15 al 30, cuando su peligro cae a la mitad y pierde más balones que casi nadie; del 60 en adelante hay que defender el área con todo porque llega 19 veces por 90 y roba 14 arriba. Staff: el arranque es a tope (presiona a 66 metros en el 0-15) y el equipo se cae del 15 al 30; dosificar la presión inicial o preparar un segundo arranque al 15"
Es un equipo de segundo tiempo: todo lo ofensivo sube con los minutos (llegadas, centros, robos arriba, posesión) y la intensidad de presión también (deja dar 10 pases antes de robar del 60 al 90, 13 al inicio), sin que el peligro concedido suba. El hueco está entre el 15 y el 30: 0.55 goles esperados por 90, menos de la mitad del resto del partido. Lo que sí concede tarde es el balón parado: del 60 al 75, 0.81 goles esperados por 90, de los más altos. Muestra de 19 partidos, pero el patrón de tramos es consistente en los dos torneos.

### Pierde cuando le castigan la pérdida: 4 tiros rivales justo tras perderla en las derrotas, 2 en las victorias
- bloque: M-3
- escenario: resultado
- metrica: vuln_shots
- cifra: "Perdió 4: 4.0 tiros rivales en 10 s tras pérdida (p99), xG rival tras pérdida 0.30 (p94), xG concedido 1.42 (p86), OBV concedido 1.69 (p86), 19.4 % de recuperaciones altas con tiro (p0), 0 goles de balón parado, xG de córner 0.06 (p1), 16.25 regates (p81). Ganó 11: 2.0 tiros rivales tras pérdida (p34), xG rival tras pérdida 0.14 (p33), xG concedido 0.91 (p17), xG concedido en transición 0.30 (p5), conversión de transición 8.36 % (p95), 0.55 goles de balón parado (p77). Empató 4: 40.6 % de recuperaciones altas con tiro (p97), directness 0.66 (p100)"
- kpi: "4.0 | 2.0 | tiros del rival en los 10 segundos tras perderla, por partido | 99 | Tiros del rival justo tras la pérdida en los partidos que perdió | contra | en los que ganó"
- definiciones: D-04, D-03, D-07
- decision: "Rival: la receta contra Huiqui es castigar la pérdida en 10 segundos y neutralizar el córner; cuando le sale eso, el resto de su juego no alcanza. Staff: en las derrotas no creó menos (Atlante 2.02, Atlas 1.36, Monterrey 1.36 goles esperados); concedió el doble justo tras perderla y su córner no produjo nada. El trabajo del lunes es la transición defensiva, no el ataque"
Las 4 derrotas (Atlante 2-3, Tijuana 1-2, Atlas 0-2, Monterrey 0-1) son muestra chica, pero cuentan la misma historia: el rival tira el doble justo tras la pérdida, el peligro concedido sube a 1.42 y los robos altos dejan de producir tiro (19 % contra 35 % cuando gana). En las victorias pasa lo contrario: robo que se convierte en tiro (8.4 % de conversión, de los más altos) y casi nada concedido en contragolpe. El balón parado también separa: 0.55 goles por partido cuando gana, cero cuando pierde.

### Instalado en zona de liguilla directa concede 20 tiros por partido, el doble que cuando la persigue: indicio con 3 partidos
- bloque: M-2
- escenario: tabla
- metrica: shots_conceded
- cifra: "En zona directa (3 partidos, 1-1-1: América 4-3, Monterrey 0-1, Toluca 3-3): 20.3 tiros concedidos (p100), 4.33 tiros rivales tras pérdida (p100), 50.9 % de secuencias nacen en tercio defensivo (p96), 19.7 fases de presión (p2), conversión de transición 3.79 % (p3), xG concedido de balón parado 0.82 (p98); ganando en ese estado concede 22.3 tiros y 1.97 xG por 90. Directa alcanzable (5 partidos, 3-1-1): 10.2 tiros concedidos (p6), xG de córner 0.36 (p99), OBV ofensivo 2.11 (p100), xG concedido de balón parado 0.21 (p1), 0 goles concedidos de balón parado"
- kpi: "20.3 | 10.2 | tiros concedidos por partido | 100 | Tiros que concede cuando ya está en zona de liguilla directa | contra | cuando la persigue"
- definiciones: D-23, D-05, D-07
- decision: "Rival: si Cruz Azul llega instalado en zona directa, va a conceder; apostar a un partido abierto. Staff: con la clasificación directa en la mano el equipo deja de presionar (20 rachas contra 23 de media) y empieza más ataques desde su campo; es el único corte donde pierde su identidad de campo rival. Vale la pena nombrarlo en el vestuario antes de las jornadas 13 a 15"
Son 3 partidos contra 5, así que es un indicio y no una ley, pero la diferencia es enorme y coherente: con la directa asegurable en la mano, el equipo retrocede 10 puntos en dónde nacen sus ataques, presiona menos y concede el doble de tiros y cuatro veces más peligro de balón parado. Cuando la persigue es la mejor versión del Apertura: 3 ganados de 5, el córner produce (0.36 goles esperados por partido, de los más altos) y no concede goles de balón parado.

### En liguilla cambió de piel: en cuartos presionó a 51 metros y se replegó; en la final, a 63 y dominó
- bloque: M-2
- escenario: fase
- metrica: press_height
- cifra: "Liguilla 4-2-0 en el Clausura 2026 (ida 1-2-0, vuelta 3-0-0). Cuartos (2 partidos, Atlas 3-2 y 1-0): línea defensiva 43.0 m (p3), altura de presión 51.1 (p4), 9.5 tiros (p4), 8.0 entradas al área (p1), 42.5 transiciones (p0), 10.1 % de fases altas (p1). Semis (2, Guadalajara 2-2 y 2-1): 17.0 faltas (p98), 47.8 % de secuencias al último tercio (p5), 31.25 % de saques de banda retenidos (p0). Final (2, Pumas 0-0 y 2-1): altura de presión 63.15 m (p100), línea defensiva 57.1 (p100), 21.0 recuperaciones altas (p100), 24.0 entradas al área (p100), 21.0 tiros (p100), 62.5 conducciones progresivas (p100). Fase regular 7-2-4: altura 60.5 (p97)"
- kpi: "63 | 51 | metros desde su portería | 100 | Altura de la presión en la final | neutro | en cuartos de final"
- definiciones: D-24, D-13, D-03
- decision: "Rival en liguilla: contra Huiqui en cuartos espera un bloque a 43 metros que te deja el balón y vive del balón parado; en semis un partido de faltas; en la final, presión máxima. No preparar un solo plan. Staff: ganó la liguilla con tres versiones distintas en tres llaves; la plantilla ya demostró que puede jugar replegada y presionando, y eso es un activo para el Apertura"
Cada categoría son 2 partidos, así que es descripción más que patrón, pero el contraste es nítido. En cuartos contra Atlas el equipo defendió 10 metros más atrás que en la temporada, llegó 8 veces al área y ganó la vuelta 1-0 creando menos peligro que el rival (0.64 contra 1.25). En la final contra Pumas hizo lo opuesto: la presión más alta de la liguilla, 21 robos arriba y 24 llegadas por partido. A la ida fue 1-2-0 y en las tres vueltas ganó: cerró las tres llaves fuera de casa o con el global abierto.

### Contra los seis de arriba suelta el balón: 48 % de posesión y 1.11 goles esperados; contra el resto, 59 % y 1.85
- bloque: M-1
- escenario: rival
- metrica: np_xg
- cifra: "Top 6 (9 partidos, 5-3-1): 86.7 pases progresivos (p14), 75.8 % de precisión de pase (p17), 65.1 % de pases bajo presión completados (p8), posesión 48.1 % (p35), xG 1.11 (p44), 15.4 % de fases altas (p38), salida larga del portero 46.2 % (p52), PPDA 15.0 (p68), 14.9 tiros concedidos (p73); conversión de transición 8.83 % (p97), xG rival tras pérdida 0.11 (p10). Resto (10 partidos, 6-1-3): xG 1.85 (p100), posesión 58.8 % (p97), 122.2 pases progresivos (p94), salida larga 24.4 % (p1), 25.0 % de fases altas (p96), 11.2 tiros concedidos (p14), 83.0 % de precisión de pase (p88)"
- kpi: "1.11 | 1.85 | goles esperados por partido | 44 | Peligro creado contra rivales del top 6 | contra | contra el resto"
- definiciones: D-25, D-05b, D-03
- decision: "Rival de arriba: presionarle la salida funciona; contra el top 6 el portero duplica el pase largo y el equipo completa solo 65 % de sus pases bajo presión. Rival del resto: no presionarlo alto, porque ahí domina (59 % de posesión, 1.85 de peligro) y mejor esperarlo. Staff: contra los grandes el equipo se vuelve un equipo de contragolpe y le funciona (1 derrota en 9); el riesgo es que la salida corta se rompa, no el plan"
Contra los seis primeros de la tabla pierde la identidad de balón pero no los resultados: 5 ganados, 3 empatados, 1 perdido, y el robo que acaba en tiro sube a 8.8 % (de los más altos). Contra el resto domina como pocos equipos de la liga, y sin embargo ahí están 3 de sus 4 derrotas (Atlante, Tijuana, Monterrey). El dato que más se mueve es la salida del portero: 46 % largo contra los grandes, 24 % contra el resto. Son 9 y 10 partidos.

### En el Apertura 2026 crea 1.76 goles esperados por partido, de los más altos, y perdió 4 de 12; en el Clausura creó 1.05 y no perdió
- bloque: M-1
- escenario: torneo
- metrica: np_xg
- cifra: "Apertura 2026 (12 partidos, 6-2-4, 27 GF 21 GA): xG 1.76 (p99), posesión 56.8 % (p92), 92.2 secuencias (p99), OBV ofensivo 1.91 (p99), 117.1 pases progresivos (p89), 22.8 % de fases altas (p93), 69.8 transiciones (p92), xG concedido 1.15; 2.83 tiros rivales tras pérdida (p88), xG rival tras pérdida 0.21 (p72), xG de córner 0.22 (p80). Clausura 2026 (7 partidos, 5-2-0, 14 GF 7 GA): xG 1.05 (p34), posesión 48.3 % (p38), 85.3 pases progresivos (p12), xG concedido 0.93, conversión de transición 8.99 % (p97), 1.86 tiros rivales tras pérdida (p22), xG de córner 0.07 (p2)"
- kpi: "1.76 | 1.05 | goles esperados por partido | 99 | Peligro creado en el Apertura 2026 | neutro | en el Clausura 2026"
- definiciones: D-26, D-03, D-04
- decision: "Staff: la versión del Clausura (6 de 7 partidos de liguilla) era de menos balón y más contragolpe y no perdió; la del Apertura domina como nadie y concede 21 goles en 12 partidos. El modelo de campo rival necesita arreglar la pérdida (2.83 tiros rivales tras perderla, arriba de la liga) o volverá a regalar puntos. Rival: en el Apertura hay que esperarlo y correr a su espalda; el equipo está abierto"
Los dos torneos cuentan dos equipos. El del Clausura, casi todo liguilla, tuvo el balón menos de la mitad del tiempo, creó poco y ganó la final; el del Apertura es el más dominante del perfil (92 ataques por partido, 57 % de posesión, 1.76 de peligro) y aun así perdió 4 partidos de 12 porque concede 1.15 goles esperados y el rival le tira más tras cada pérdida. Con 7 partidos de un lado y 12 del otro, la lectura es de tendencia: a más balón, más exposición.

## Balón parado (M-4)

### Saca 6 córners por partido, arriba de la liga, y los convierte poco: 5 goles en 112 cobros
- bloque: M-4
- metrica: corners
- cifra: "112 córners (5.89 por partido vs 4.88, p88), 5 goles; xG por córner 0.03 vs 0.04 (p29), xG de córner 0.17 por partido (p46); 7.24 % cortos vs 13.42 (p31), 37.48 % cerrados (p61). Derecha cerrado al centro: 23 cobros, 8 tiros, xG 1.30, 1 gol. Derecha abierto al centro: 23 cobros, 12 tiros, xG 0.56, 0 goles. Izquierda abierto al centro: 19 cobros, 7 tiros, xG 0.33, 1 gol. Izquierda cerrado al centro: 16 cobros, 3 tiros, xG 0.09, 0 goles. 45 tiros de córner, xG 3.2, 3 goles"
- kpi: "5.89 | 4.88 | córners por partido | 88 | Córners a favor por partido | neutro"
- definiciones: D-07
- decision: "Rival: el único córner que le produce es el cerrado desde la derecha al centro del área (1.30 goles esperados en 23 cobros); marcar ese primer palo y la zona del penal. Casi no saca en corto (7 %), no hace falta cubrirlo con dos. Staff: el cerrado desde la izquierda es el cobro a cambiar (0.09 en 16 cobros, 3 tiros); probarlo abierto o cambiar de cobrador. Con 6 córners por partido, igualar el rendimiento de la derecha vale medio gol por torneo"
Gana muchos córners porque vive en el área rival, pero cada uno rinde menos que en la liga: 0.03 goles esperados por cobro contra 0.04. La diferencia por lado es brutal en 19 partidos: desde la derecha, el cerrado al centro produjo más peligro (1.30) que los otros tres tipos juntos. El corto casi no existe (8 cobros) y el cerrado es apenas más frecuente que en la liga. Con la directa alcanzable el córner sí produjo (0.36 por partido); en liguilla, casi nada (0.07).

### Conserva 73 % de los saques de banda cerca del área, de los más altos, y casi nunca los convierte en tiro rápido
- bloque: M-4
- metrica: throwin_retention_pct
- cifra: "147 saques de banda en zona de peligro (7.74 por partido, p49), retiene 72.79 % vs 61.06 (p92), xG tras saque de banda 0.00 (p6), 4 goles; por lado: 67 desde la derecha lejos del área (12 tiros, xG 0.73, 1 gol), 61 desde la izquierda lejos (9 tiros, xG 1.33, 2 goles), 6 desde la izquierda frente al área (4 tiros, xG 0.27, 1 gol). En contra: 111 saques (5.8 por partido), el rival retiene 60.4 %, 2 goles. Contra el resto de la liga retiene 81.7 % (p100), contra el top 6 62.9 % (p56)"
- kpi: "73 % | 61 % | de los saques de banda cerca del área | 92 | Saques de banda que conserva | favor"
- definiciones: D-07
- decision: "Staff: el saque de banda es una posesión más, no una jugada; con 8 por partido y 73 % de retención, trabajar dos rutinas al área (la izquierda frente al área produjo 4 tiros en 6 saques) convertiría posesión en peligro. Rival: no presionar el saque de banda de Cruz Azul, que lo conserva casi siempre; cerrar el pase hacia adentro y esperar"
El saque de banda confirma el estilo: prefiere no perder el balón a arriesgarlo, y lo logra más que casi toda la liga. El costo es que el peligro inmediato tras el saque es de los más bajos. Los 4 goles que llegaron tras saque de banda vinieron en jugada larga, no en la acción directa. Contra el top 6 la retención cae 19 puntos: los grandes sí le disputan el saque. Son 147 saques en 19 partidos.

### Concede 0.32 goles de balón parado por partido, como la liga, y 4 de los 6 fueron penales
- bloque: M-4
- metrica: sp_goals_conceded
- cifra: "0.32 goles de balón parado concedidos por partido vs 0.45 (p28); xG concedido de balón parado 0.44 vs 0.48 (p43); 94 córners en contra (4.9 por partido), 48 tiros de córner concedidos, xG 3.7, 0 goles; penales en contra 4 tiros, 4 goles; tiro libre directo 4 tiros, 1 gol; saque de banda 4 tiros, 1 gol; xG por córner concedido 0.03 (p48). Ganando concede 0.72 de balón parado por 90 (p79) y del 60 al 75, 0.81 (p92); de visita concede 0.05 por córner (p85) y de local 0.02 (p9)"
- kpi: "0.32 | 0.45 | goles de balón parado concedidos por partido | 28 | Goles concedidos de balón parado | favor"
- definiciones: D-07, D-21, D-22
- decision: "Rival: el córner contra Cruz Azul no entra (48 tiros, ningún gol en 19 partidos); buscar el contacto en el área, porque el penal sí (4 de 4). Staff: el balón parado defensivo aguanta en el córner y falla en el penal; y hay dos momentos a vigilar: con ventaja (0.72 por 90) y del minuto 60 al 75 (0.81), cuando concede el doble que en el resto del partido"
El rival le tira de córner lo normal (48 tiros, 3.7 goles esperados) y no le marca; los 6 goles de balón parado en contra fueron 4 penales, 1 tiro libre directo y 1 tras saque de banda. El problema no es la defensa del córner sino la falta dentro del área, consecuencia de defender tan arriba y tener que recular. De visita cada córner en contra vale más del doble que en casa (0.05 contra 0.02). Son 19 partidos, con 6 goles concedidos la base es chica.

## Jugadores y cambios (M-5)

### Nueve dibujos de inicio en 19 partidos: 4-2-3-1 cuando pierde, 3-4-3 cuando gana, y 2.2 cambios de dibujo por partido
- bloque: M-5
- metrica: tactical_shifts
- cifra: "9 dibujos iniciales en 19 partidos: 4-2-3-1 en 6 (32 %), 3-4-3 en 5 (26 %), 3-4-2-1 en 2 (11 %), y 4-3-3, 4-1-2-1-2, 3-5-2, 4-1-4-1, 5-4-1 y 3-4-1-2 una vez cada uno; cambio real de dibujo en 10 de 19; 2.16 cambios de formación por partido vs 1.80 (p79), 41 en total; cambios de dibujo por estado: 7 empatando, 3 ganando, 4 perdiendo. Ganando del 45 al 70 juega 3-4-3 el 54 a 65 % de los minutos (3-4-2-1 segundo); perdiendo del 45 al 65, 4-2-3-1 el 42 a 53 % con 3-5-2 como segunda opción. Apertura 2026: 8 dibujos distintos en 12 partidos"
- kpi: "2.16 | 1.80 | cambios de dibujo por partido | 79 | Cambios de dibujo durante el partido | neutro"
- definiciones: SB, D-21, D-26
- decision: "Rival: no preparar el partido contra un dibujo sino contra dos: línea de cuatro con mediapunta si va abajo o empata, tres centrales con carrileros si va arriba. El cambio llega al 45 o al 60. Staff: la flexibilidad es real pero cuesta: en el Apertura usó 8 dibujos en 12 partidos y concedió 21 goles; fijar dos sistemas y pulirlos reduce los errores de ajuste"
No hay un dibujo base: el más usado apenas llega a uno de cada tres partidos. Lo que sí es estable es la lógica: línea de tres cuando tiene ventaja (3-4-3 o 3-4-2-1, con los carrileros Campos y Márquez como alas) y línea de cuatro con doble pivote cuando persigue el marcador. Cambia de dibujo durante el partido más que la liga, y en la mitad de los partidos el cambio es real (no solo un ajuste de nombres). Con 19 partidos, el dato es descriptivo pero consistente entre torneos.

### Perdiendo cambia al minuto 50 y acierta: el peligro creado se duplica y el concedido baja a la mitad en 15 minutos
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Primer cambio al 58.3' vs 53.9 de liga (p85); perdiendo 49.6' (mediana 45'), empatando 64.0' (mediana 62'), ganando 62.9' (mediana 69'); de visita 55.8', de local 60.1'. Perdiendo, 15 min antes vs después del primer cambio: xG 0.18 a 0.42, xG concedido 0.43 a 0.20, tiros 2.7 a 4.0, PPDA 12.4 a 8.4, field tilt 60 a 77, altura de presión 54 a 66 m. Saca perdiendo: delantero centro 3, pivote derecho 3, lateral derecho 3, interior izquierdo 3. 4.8 cambios por partido, 88 tácticos y 3 por lesión"
- kpi: "0.42 | 0.18 | goles esperados en 15 minutos | | Peligro creado en los 15 minutos después del primer cambio, perdiendo | favor | antes del cambio"
- definiciones: D-21, SB
- decision: "Staff: el primer cambio perdiendo es la mejor decisión de partido del cuerpo técnico; conviene mantener el gatillo al descanso (mediana al 45) y no esperar. Rival: si vas ganando al descanso, el cambio llega en el vestuario y Cruz Azul sale 12 metros más arriba; preparar los primeros 15 minutos del segundo tiempo como el tramo más peligroso"
En general cambia tarde (minuto 58, arriba de la liga), pero cuando va perdiendo adelanta el cambio al descanso y el efecto es claro en las seis cifras: más peligro creado, menos concedido, presión más intensa (de 12 a 8 pases que deja dar) y 17 puntos más de dominio territorial. Perdiendo saca un defensor o un contención tanto como un delantero: sacrifica equilibrio por empuje. Son 7 primeros cambios perdiendo; la dirección del efecto es la misma en casi todos.

### Ganando, el primer cambio lo mete atrás: el dominio territorial cae de 48 a 34 y la presión baja 9 metros
- bloque: M-5
- metrica: first_sub_minute
- cifra: "Ganando (7 primeros cambios, media 62.9', mediana 69'): 15 min antes vs después, xG 0.42 a 0.17, xG concedido 0.22 a 0.32, PPDA 26.3 a 14.45, field tilt 48 a 34, altura de presión 59 a 50 m. Saca ganando: delantero centro 8, extremo derecho 5, carrilero izquierdo 4, carrilero derecho 3, pivote derecho 3, pivote izquierdo 3. 35 cambios ganando con minuto medio 73.2', contra 31 perdiendo al 66.4'. Empatando (5): xG 0.45 a 0.21, PPDA 10.0 a 19.2"
- kpi: "34 % | 48 % | del juego en campo rival | | Dominio territorial en los 15 minutos después del primer cambio, ganando | contra | antes del cambio"
- definiciones: D-21, SB
- decision: "Staff: con ventaja saca al 9 y al extremo derecho cerca del 70 y el equipo pierde la salida: 14 puntos menos de territorio y 9 metros menos de presión, y concede más. Si la idea es cerrar, que entre un delantero que corra, no un defensor más. Rival: el momento para empatarle es justo después de su primer cambio con ventaja, entre el 70 y el 85; subir líneas ahí"
Es el espejo del hallazgo anterior y conecta con el repliegue ganando: el cambio con ventaja empeora al equipo en todo menos en la intensidad de presión, que sube porque presiona más cerca de su portería. Saca a los de arriba (delantero centro 8 veces, extremo derecho 5) y el equipo se queda sin referencia para salir. Empatando el efecto también es negativo en peligro creado (0.45 a 0.21) y la intensidad de presión se desploma (de 10 a 19 pases que deja dar). Son 7 y 5 primeros cambios.

### Siete fijos y un 9 que rota: Rodríguez y Campos titulares en 18 de 19, tres delanteros se reparten el puesto
- bloque: M-5
- metrica: xi_stability
- cifra: "Estabilidad del once 0.68 (Jaccard entre onces consecutivos), 2.3 titulares distintos de un partido al siguiente; núcleo de 7 jugadores con 70 % o más de titularidades: Carlos Rodríguez 18 (95 %, 1505 min), Omar Campos 18 (95 %, 1407 min), Agustín Palavecino 17 (89 %), Willer Ditta 16 (84 %), Kevin Mier 16 (84 %), José Paradela 15 (79 %), Jeremy Márquez 14 (74 %). Delantero centro repartido: Christian Ebere 10 titularidades, Nicolás Ibáñez 10, Gabriel Fernández 5; centrales rotados: Amaury García 11, Gonzalo Piovi 12, Jesús Orozco 10. Núcleo Clausura 2026 10 jugadores en 7 partidos; Apertura 2026, 8 en 12"
- kpi: "2.3 | | titulares distintos | | Cambios en el once de un partido al siguiente | neutro"
- definiciones: SB
- decision: "Rival: la columna es fija y se puede estudiar: Mier, Ditta, Rodríguez, Palavecino, Campos por izquierda, Márquez y Paradela por derecha. Lo que cambia es el 9 y el tercer central; preparar el partido sobre los siete y ajustar el resto el día del juego. Staff: la rotación del delantero centro (tres jugadores con 5 a 10 titularidades) coincide con que el equipo tira mucho y define normal; definir un 9 titular es la decisión de plantilla pendiente"
El once es más estable que el dibujo: cambia 2.3 titulares por partido y siete jugadores arrancan en tres de cada cuatro partidos o más. Rodríguez y Palavecino son el doble pivote (Rodríguez también jugó de mediapunta 288 minutos), Campos y Márquez las bandas, Ditta el central fijo. Donde no hay dueño es en el área rival: Ebere, Ibáñez y Fernández se reparten 25 titularidades, y el tercer central cambia con el dibujo. Con 19 partidos el núcleo es claro, pero la rotación del 9 también puede ser lesión o mercado, no solo decisión.

## Partidos y rivales

### Balance de peligro de +0.47 por partido, arriba de la liga; solo 2 de 19 resultados contradicen al juego
- bloque: M-2
- metrica: xgd
- cifra: "Diferencia de xG 0.47 por partido vs -0.03 de liga (p86); 11-4-4; racha de 9 sin perder (del 4-1 al Necaxa el 27 de abril al 2-1 al Puebla el 22 de julio, con la liguilla ganada en medio), luego 3 derrotas seguidas (Atlante 2-3, Tijuana 1-2, Atlas 0-2) y 3 victorias seguidas (Necaxa 3-1, Santos 1-0, América 4-3). Ganó con menos peligro que el rival 1 vez (Atlas 1-0, xG 0.64-1.25) y perdió creando más 1 vez (Atlante 2-3, xG 2.02-0.72). Mejor partido: Juárez 5-0, xG 2.47-0.65; más peligro creado: 3.46 en el 3-3 con Pumas. Contra Atlas 2-0-1, contra Pumas 1-2-0; Varini y Cocca 2-0-0, Milito y Juárez 1-1-0"
- kpi: "0.47 | -0.03 | goles esperados de diferencia por partido | 86 | Balance de peligro | favor"
- definiciones: D-24, D-25
- decision: "Rival: Cruz Azul casi siempre gana los partidos que merece; para sacarle puntos hay que ganarle el peligro, no esperar un robo de resultado. Staff: los resultados reflejan el juego, así que las 4 derrotas son derrotas de juego (pérdida castigada, córner sin peligro) y se corrigen en cancha, no con suerte"
Diecinueve partidos no alcanzan para hablar de regularidad, pero el perfil es sano: crea 1.50 y concede 1.07 goles esperados por partido, y el marcador acompañó al juego en 17 de 19. El tramo malo fue el arranque del Apertura (jornadas 3 a 5, tres derrotas seguidas, dos de ellas contra rivales fuera del top 6) y el bueno la liguilla completa del Clausura más las dos primeras jornadas. Los rivales que más enfrentó le cayeron bien: contra Varini y Cocca ganó los cuatro partidos; Atlas es el único equipo al que le ganó dos y perdió uno, y el 3-3 con Pumas fue su partido de más peligro creado sin ganar.
