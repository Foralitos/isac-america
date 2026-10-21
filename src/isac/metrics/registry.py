"""Diccionario de métricas: bloque, etiqueta, definiciones (D-xx), unidad, dirección y si se escala por 90."""

# direction: +1 más es mejor, -1 menos es mejor, 0 descriptiva
METRICS = {
    # M-1
    "np_xg": ("M-1", "xG sin penales", ["SB"], "xG/partido", +1, True),
    "np_shots": ("M-1", "Tiros sin penales", ["SB"], "/partido", +1, True),
    "xg_per_shot": ("M-1", "xG por tiro", ["SB"], "xG", +1, False),
    "shots_outside_box_pct": ("M-1", "Tiros fuera del área", ["D-12"], "%", 0, False),
    "obv_offense": (
        "M-1",
        "OBV ofensivo (pase+conducción+regate)",
        ["SB"],
        "OBV/partido",
        +1,
        True,
    ),
    "directness": ("M-1", "Directness de posesión", ["SB", "D-01"], "0–1", 0, False),
    "dribbles": ("M-1", "Regates intentados", ["SB"], "/partido", 0, True),
    "dribbles_completed_pct": ("M-1", "Regates completados", ["SB"], "%", +1, False),
    "sequences": ("M-1", "Secuencias ofensivas", ["D-02"], "/partido", 0, True),
    "seq_final_third_pct": (
        "M-1",
        "Secuencias que llegan al último tercio",
        ["D-02", "D-10"],
        "%",
        +1,
        False,
    ),
    "seq_shot_pct": ("M-1", "Secuencias que terminan en tiro", ["D-02"], "%", +1, False),
    "seq_start_defensivo_pct": (
        "M-1",
        "Secuencias que nacen en tercio defensivo",
        ["D-02", "D-10"],
        "%",
        0,
        False,
    ),
    "seq_start_medio_pct": (
        "M-1",
        "Secuencias que nacen en tercio medio",
        ["D-02", "D-10"],
        "%",
        0,
        False,
    ),
    "seq_start_ultimo_pct": (
        "M-1",
        "Secuencias que nacen en último tercio",
        ["D-02", "D-10"],
        "%",
        0,
        False,
    ),
    "seq_lane_izquierdo_pct": (
        "M-1",
        "Secuencias que nacen por izquierda",
        ["D-02", "D-11"],
        "%",
        0,
        False,
    ),
    "seq_lane_centro_pct": (
        "M-1",
        "Secuencias que nacen por el centro",
        ["D-02", "D-11"],
        "%",
        0,
        False,
    ),
    "seq_lane_derecho_pct": (
        "M-1",
        "Secuencias que nacen por derecha",
        ["D-02", "D-11"],
        "%",
        0,
        False,
    ),
    "pass_pct": ("M-1", "Precisión de pase", ["SB"], "%", +1, False),
    "prog_passes": ("M-1", "Pases progresivos", ["D-14"], "/partido", +1, True),
    "prog_carries": ("M-1", "Conducciones progresivas", ["D-14"], "/partido", +1, True),
    "box_entries": ("M-1", "Entradas al área", ["D-12"], "/partido", +1, True),
    "cross_ratio": ("M-1", "Centros por entrada al área", ["D-12"], "ratio", 0, False),
    "field_tilt": ("M-1", "Field tilt", ["D-10"], "%", +1, False),
    "pup_success_pct": ("M-1", "Pases bajo presión completados", ["SB"], "%", +1, False),
    "gk_long_pct": ("M-1", "Salida larga del portero", ["SB"], "%", 0, False),
    "possession_pct": ("M-1", "Posesión (proxy por eventos)", ["D-01"], "%", 0, False),
    # M-2
    "ppda_own": ("M-2", "PPDA propio", ["D-05b"], "pases/acción", -1, False),
    "press_height": ("M-2", "Altura de presión", ["D-13"], "m", +1, False),
    "def_line": ("M-2", "Línea defensiva", ["D-13"], "m", 0, False),
    "press_phases": ("M-2", "Fases de presión", ["D-05"], "/partido", 0, True),
    "press_high_pct": ("M-2", "Fases de presión altas", ["D-05"], "%", +1, False),
    "press_success_pct": ("M-2", "Fases de presión con recuperación", ["D-05"], "%", +1, False),
    "pressures": ("M-2", "Presiones", ["SB"], "/partido", 0, True),
    "pressures_final_third": (
        "M-2",
        "Presiones en último tercio",
        ["SB", "D-10"],
        "/partido",
        +1,
        True,
    ),
    "counterpressures": ("M-2", "Contrapresiones", ["D-06"], "/partido", +1, True),
    "cp_regain_pct": ("M-2", "Contrapresiones con regain", ["D-06"], "%", +1, False),
    "np_xg_conceded": ("M-2", "xG concedido sin penales", ["SB"], "xG/partido", -1, True),
    "shots_conceded": ("M-2", "Tiros concedidos", ["SB"], "/partido", -1, True),
    "shots_conceded_in_box_pct": (
        "M-2",
        "Tiros concedidos desde el área",
        ["D-12"],
        "%",
        -1,
        False,
    ),
    "opp_box_entries": ("M-2", "Entradas al área del rival", ["D-12"], "/partido", -1, True),
    "obv_conceded": ("M-2", "OBV concedido", ["SB"], "OBV/partido", -1, True),
    "opp_directness": ("M-2", "Directness permitida al rival", ["SB"], "0–1", 0, False),
    "fouls": ("M-2", "Faltas cometidas", ["SB"], "/partido", 0, True),
    "xgd": ("M-2", "Diferencia de xG", ["SB"], "xG/partido", +1, True),
    # M-3
    "transitions": ("M-3", "Transiciones ofensivas", ["D-03"], "/partido", 0, True),
    "transition_shots": ("M-3", "Tiros en transición", ["D-03"], "/partido", +1, True),
    "transition_xg": ("M-3", "xG en transición", ["D-03"], "xG/partido", +1, True),
    "transition_conv_pct": ("M-3", "Conversión de transición", ["D-03"], "%", +1, False),
    "high_recoveries": ("M-3", "Recuperaciones altas", ["D-03", "D-10"], "/partido", +1, True),
    "high_rec_shot_pct": ("M-3", "Recuperaciones altas con tiro en 10 s", ["D-03"], "%", +1, False),
    "rec_to_shot_s": ("M-3", "Segundos de recuperación a tiro", ["D-03"], "s", -1, False),
    "vuln_shots": ("M-3", "Tiros rivales en 10 s tras pérdida", ["D-04"], "/partido", -1, True),
    "vuln_xg": ("M-3", "xG rival en 10 s tras pérdida", ["D-04"], "xG/partido", -1, True),
    "transition_xg_conceded": (
        "M-3",
        "xG concedido en transición",
        ["D-04"],
        "xG/partido",
        -1,
        True,
    ),
    # M-4
    "corners": ("M-4", "Córners", ["D-07"], "/partido", 0, True),
    "corner_xg": ("M-4", "xG de córner", ["D-07"], "xG/partido", +1, True),
    "xg_per_corner": ("M-4", "xG por córner", ["D-07"], "xG", +1, False),
    "corner_short_pct": ("M-4", "Córners cortos", ["D-07"], "%", 0, False),
    "corner_inswing_pct": ("M-4", "Córners inswinging", ["D-07"], "%", 0, False),
    "fk_direct_xg": ("M-4", "xG de tiro libre directo", ["D-07"], "xG/partido", +1, True),
    "fk_indirect_xg": ("M-4", "xG de tiro libre indirecto", ["D-07"], "xG/partido", +1, True),
    "throwins_danger": ("M-4", "Saques de banda en zona de peligro", ["D-07"], "/partido", 0, True),
    "throwin_retention_pct": (
        "M-4",
        "Saques en zona de peligro retenidos",
        ["D-07"],
        "%",
        +1,
        False,
    ),
    "throwin_xg": ("M-4", "xG tras saque de banda", ["D-07"], "xG/partido", +1, True),
    "sp_xg": ("M-4", "xG de balón parado", ["D-07"], "xG/partido", +1, True),
    "sp_goals": ("M-4", "Goles de balón parado", ["D-07"], "/partido", +1, True),
    "sp_xg_conceded": ("M-4", "xG concedido de balón parado", ["D-07"], "xG/partido", -1, True),
    "xg_per_corner_conceded": ("M-4", "xG por córner concedido", ["D-07"], "xG", -1, False),
    "sp_goals_conceded": (
        "M-4",
        "Goles concedidos de balón parado",
        ["D-07"],
        "/partido",
        -1,
        True,
    ),
    # M-5
    "tactical_shifts": ("M-5", "Cambios de formación", ["SB"], "/partido", 0, True),
    "first_sub_minute": ("M-5", "Minuto del primer cambio", ["SB"], "min", 0, False),
}


def block(metric: str) -> str:
    return METRICS[metric][0]


def definitions(metric: str) -> list[str]:
    return METRICS[metric][2]


def direction(metric: str) -> int:
    return METRICS[metric][4]


def label(metric: str) -> str:
    return METRICS[metric][1]
