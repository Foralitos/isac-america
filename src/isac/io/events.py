"""Eventos v11: aplana el JSON de un partido a columnas seleccionadas; construye el parquet de toda la liga."""

import gzip
import json
from concurrent.futures import ProcessPoolExecutor

import pandas as pd

from isac.config import PROCESSED, RAW
from isac.io.common import match_time

EVENTS_DIR = RAW / "events"
EVENTS_OUT = PROCESSED / "events"

ON_BALL = {"Pass", "Carry", "Dribble", "Shot"}


def _name(d: dict | None, key: str = "name"):
    return d.get(key) if isinstance(d, dict) else None


def _loc(loc, i):
    return float(loc[i]) if isinstance(loc, list) and len(loc) > i and loc[i] is not None else None


def flatten(e: dict, match_id: int) -> dict:
    p = e.get("pass") or {}
    sh = e.get("shot") or {}
    car = e.get("carry") or {}
    end = p.get("end_location") or car.get("end_location") or sh.get("end_location")
    typ = e["type"]["name"]
    row = {
        "match_id": match_id,
        "id": e["id"],
        "index": e["index"],
        "period": e["period"],
        "t": match_time(e["period"], e["timestamp"]),
        "minute": e["minute"],
        "second": e["second"],
        "type": typ,
        "team_id": _name(e.get("team"), "id"),
        "team": _name(e.get("team")),
        "player_id": _name(e.get("player"), "id"),
        "player": _name(e.get("player")),
        "position": _name(e.get("position")),
        "possession": e.get("possession"),
        "possession_team_id": _name(e.get("possession_team"), "id"),
        "play_pattern": _name(e.get("play_pattern")),
        "x": _loc(e.get("location"), 0),
        "y": _loc(e.get("location"), 1),
        "end_x": _loc(end, 0),
        "end_y": _loc(end, 1),
        "location_bucket": e.get("location_bucket"),
        "is_transition": e.get("is_transition"),
        "is_controlled": e.get("is_controlled_possession"),
        "control_degree": e.get("control_degree"),
        "directness": e.get("possession_directness"),
        "set_piece_phase": e.get("set_piece_phase"),
        "counterpress": bool(e.get("counterpress", False)),
        "under_pressure": bool(e.get("under_pressure", False)),
        "duration": e.get("duration"),
        "obv_for_net": e.get("obv_for_net"),
        "obv_against_net": e.get("obv_against_net"),
        "obv_total_net": e.get("obv_total_net"),
        "on_ball": typ in ON_BALL,
        # pass
        "pass_outcome": _name(p.get("outcome")) if p else None,  # None = completo
        "pass_type": _name(p.get("type")) if p else None,  # None = regular
        "pass_height": _name(p.get("height")),
        "pass_length": p.get("length"),
        "pass_cross": bool(p.get("cross", False)),
        "pass_cut_back": bool(p.get("cut_back", False)),
        "pass_switch": bool(p.get("switch", False)),
        "pass_through_ball": bool(p.get("through_ball", False)),
        "pass_inswinging": bool(p.get("inswinging", False)),
        "pass_outswinging": bool(p.get("outswinging", False)),
        "pass_shot_assist": bool(p.get("shot_assist", False)),
        "pass_technique": _name(p.get("technique")),
        "pass_cluster": p.get("pass_cluster_label"),
        "pass_success_prob": p.get("pass_success_probability"),
        "pass_recipient_id": _name(p.get("recipient"), "id"),
        # shot
        "shot_xg": sh.get("statsbomb_xg"),
        "shot_type": _name(sh.get("type")),
        "shot_outcome": _name(sh.get("outcome")),
        "shot_body_part": _name(sh.get("body_part")),
        "shot_technique": _name(sh.get("technique")),
        "shot_first_time": bool(sh.get("first_time", False)),
        "shot_key_pass_id": sh.get("key_pass_id"),
        # otros
        "dribble_outcome": _name((e.get("dribble") or {}).get("outcome")),
        "duel_type": _name((e.get("duel") or {}).get("type")),
        "duel_outcome": _name((e.get("duel") or {}).get("outcome")),
        "foul_card": _name((e.get("foul_committed") or {}).get("card")),
        "recovery_failure": bool((e.get("ball_recovery") or {}).get("recovery_failure", False)),
        "interception_outcome": _name((e.get("interception") or {}).get("outcome")),
        "sub_outcome": _name((e.get("substitution") or {}).get("outcome")),
        "sub_replacement_id": _name((e.get("substitution") or {}).get("replacement"), "id"),
        "sub_replacement": _name((e.get("substitution") or {}).get("replacement")),
        "formation": (e.get("tactics") or {}).get("formation"),
    }
    return row


def load_events(match_id: int) -> pd.DataFrame:
    """Eventos planos de un partido, ordenados por index."""
    with gzip.open(EVENTS_DIR / f"{match_id}.json.gz", "rt", encoding="utf-8") as f:
        raw = json.load(f)
    df = pd.DataFrame([flatten(e, match_id) for e in raw])
    return df.sort_values("index").reset_index(drop=True)


def _events_rows(args):
    match_id, season_id = args
    df = load_events(match_id)
    df["season_id"] = season_id
    return df


def build_all_events(matches: pd.DataFrame, workers: int = 8, log=print) -> None:
    """data/raw/events/*.json.gz -> data/processed/events/season_id=X/part.parquet"""
    EVENTS_OUT.mkdir(parents=True, exist_ok=True)
    for season_id, grp in matches.groupby("season_id"):
        out_dir = EVENTS_OUT / f"season_id={season_id}"
        if (out_dir / "part.parquet").exists():
            log(f"  season {season_id}: ya existe, se salta")
            continue
        out_dir.mkdir(parents=True, exist_ok=True)
        args = [(int(m), int(season_id)) for m in grp["match_id"]]
        with ProcessPoolExecutor(max_workers=workers) as ex:
            parts = list(ex.map(_events_rows, args, chunksize=4))
        df = pd.concat(parts, ignore_index=True)
        df.to_parquet(out_dir / "part.parquet", index=False)
        log(f"  season {season_id}: {len(args)} partidos, {len(df):,} eventos")


def read_events(
    season_ids: list[int] | None = None, match_ids: list[int] | None = None, columns=None
) -> pd.DataFrame:
    """Lee el parquet de eventos (todas las temporadas o algunas) con filtro opcional por partido."""
    parts = []
    for d in sorted(EVENTS_OUT.glob("season_id=*")):
        sid = int(d.name.split("=")[1])
        if season_ids and sid not in season_ids:
            continue
        filters = [("match_id", "in", match_ids)] if match_ids else None
        parts.append(pd.read_parquet(d / "part.parquet", columns=columns, filters=filters))
    return pd.concat(parts, ignore_index=True) if parts else pd.DataFrame()
