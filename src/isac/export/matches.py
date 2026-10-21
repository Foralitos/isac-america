"""matches.json: lista de partidos del técnico con contexto y métricas clave (línea de tiempo)."""

from isac.export.common import write_json

KEY = [
    "np_xg",
    "np_xg_conceded",
    "xgd",
    "ppda_own",
    "press_height",
    "directness",
    "field_tilt",
    "possession_pct",
    "dribbles",
    "sp_xg",
    "sp_xg_conceded",
    "transition_xg",
    "formation",
    "first_sub_minute",
    "tactical_shifts",
]


def export_matches(rows) -> None:
    cols = [
        "match_id",
        "match_date",
        "tournament",
        "tkey",
        "phase_kind",
        "round",
        "leg",
        "agg_before",
        "week",
        "is_home",
        "opponent",
        "opp_coach",
        "opp_top6",
        "opp_final_pos",
        "pos_before",
        "pts_before",
        "stakes",
        "gf",
        "ga",
        "result",
        "stadium",
    ] + KEY
    out = rows.sort_values("match_date")[cols].to_dict("records")
    write_json(
        "matches.json", {"n": len(out), "matches": out}, ["D-20", "D-23", "D-24", "D-25", "D-26"]
    )
