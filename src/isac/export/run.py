"""Orquesta los exports: lo global (definiciones, línea base de liga) una vez y lo de cada técnico en data/out/<coach_key>/."""

import pandas as pd

from isac.config import MIN_MATCHES, short_name, slug
from isac.export.baseline import team_tournament_means
from isac.export.common import (
    GLOBAL_DIR,
    coach_dir,
    coach_mask,
    load_all,
    select_pairs,
    set_out_dir,
    write_json,
)
from isac.export.definitions import export_definitions
from isac.export.findings import export_findings
from isac.export.matches import export_matches
from isac.export.players import export_players
from isac.export.profile import export_profile
from isac.export.scenarios import (
    export_match_scenarios,
    export_segment_scenarios,
    export_state_by_stakes,
)
from isac.export.set_pieces import export_set_pieces
from isac.metrics.registry import METRICS


def list_coaches(mm: pd.DataFrame | None = None, min_matches: int = MIN_MATCHES) -> pd.DataFrame:
    """Técnicos con partidos en la base, de más a menos, con equipos y fechas."""
    mm = mm if mm is not None else load_all()["mm"]
    g = (
        mm.groupby("coach")
        .agg(
            n=("match_id", "nunique"),
            teams=("team", lambda s: ", ".join(sorted(set(s)))),
            desde=("match_date", "min"),
            hasta=("match_date", "max"),
        )
        .reset_index()
        .sort_values("n", ascending=False)
    )
    g = g[g["n"] >= min_matches].copy()
    g["key"] = g["coach"].map(slug)
    g["short"] = g["coach"].map(short_name)
    return g


def resolve_coach(mm: pd.DataFrame, query: str) -> str:
    """Nombre completo a partir de una clave, un nombre completo o un trozo del nombre (sin acentos, sin mayúsculas)."""
    q = slug(query)
    coaches = mm["coach"].dropna().unique()
    exact = [c for c in coaches if slug(c) == q or c == query]
    if exact:
        return exact[0]
    partial = [c for c in coaches if q in slug(c)]
    if len(partial) == 1:
        return partial[0]
    if not partial:
        raise SystemExit(f"no encuentro al técnico '{query}'; usa `isac coaches`")
    raise SystemExit(f"'{query}' es ambiguo: {', '.join(partial)}")


def export_globals(mm: pd.DataFrame, log=print) -> None:
    """Definiciones y línea base de la liga: iguales para todos los técnicos."""
    set_out_dir(GLOBAL_DIR)
    export_definitions()
    baseline = team_tournament_means(mm)
    cols = [c for c in METRICS if c in baseline.columns]
    stats = {
        c: {
            "mean": baseline[c].mean(),
            "sd": baseline[c].std(),
            "p25": baseline[c].quantile(0.25),
            "p50": baseline[c].quantile(0.5),
            "p75": baseline[c].quantile(0.75),
        }
        for c in cols
    }
    write_json(
        "league.json",
        {
            "units": len(baseline),
            "league_matches": int(mm["match_id"].nunique()),
            "teams": int(mm["team_id"].nunique()),
            "tournaments": sorted(mm["tournament"].dropna().unique().tolist()),
            "period": {"from": mm["match_date"].min(), "to": mm["match_date"].max()},
            "metrics": stats,
        },
        [],
    )
    log(f"global: definiciones y línea base ({len(baseline)} equipo-torneo) en data/out/global/")


def run_export(coach_query: str, log=print, d: dict | None = None) -> str:
    """Exporta todo lo de un técnico a data/out/<coach_key>/. Devuelve la clave."""
    d = d or load_all()
    mm, ctx = d["mm"], d["ctx"]
    coach = resolve_coach(mm, coach_query)
    key = slug(coach)
    rows = mm[coach_mask(mm, coach)].copy()
    if rows.empty:
        raise SystemExit(f"sin partidos para {coach}")
    rows["opp_coach_key"] = rows["opp_coach"].map(lambda c: slug(c) if isinstance(c, str) else None)
    set_out_dir(coach_dir(key))
    teams = (
        rows.groupby("team")
        .agg(n=("match_id", "nunique"), desde=("match_date", "min"), hasta=("match_date", "max"))
        .reset_index()
        .sort_values("desde")
    )
    baseline = team_tournament_means(mm)
    log(
        f"{coach} [{key}]: {len(rows)} partidos en {len(teams)} equipos; línea base {len(baseline)} equipo-torneo"
    )

    meta_common = {
        "coach": coach,
        "key": key,
        "short": short_name(coach),
        "period": {"from": rows["match_date"].min(), "to": rows["match_date"].max()},
        "teams": teams.to_dict("records"),
    }
    overall = export_profile(rows, baseline, "profile.json", extra={**meta_common, "team": "todos"})
    export_match_scenarios(rows, baseline, overall)
    seg = d["seg"].merge(
        ctx[["match_id", "team_id", "tournament"]], on=["match_id", "team_id"], how="left"
    )
    export_segment_scenarios(select_pairs(seg, rows), seg)
    export_state_by_stakes(select_pairs(seg, rows), rows)
    export_set_pieces(
        select_pairs(d["corners"], rows),
        d["corners"],
        select_pairs(d["sp_shots"], rows),
        d["sp_shots"],
        len(rows),
        len(baseline),
        rows,
        select_pairs(d["free_kicks"], rows),
        select_pairs(d["throwins"], rows),
    )
    export_players(
        rows,
        d["formations"],
        d["subs"],
        d["lineups"],
        None,
        d["formation_minutes"],
        d["positions"],
        d["pass_pairs"],
    )
    export_matches(rows)
    export_findings(key)
    chapters = []
    for other_team, g in rows.groupby("team"):
        if len(g) >= 5:
            export_profile(
                g,
                baseline,
                f"profile_{slug(other_team)}.json",
                extra={**meta_common, "team": other_team, "team_key": slug(other_team)},
            )
            chapters.append({"team": other_team, "team_key": slug(other_team), "n": len(g)})
    write_json(
        "meta.json",
        {
            **meta_common,
            "team": "todos",
            "n_matches": len(rows),
            "record": {k: int((rows["result"] == k).sum()) for k in "WDL"},
            "other_chapters": chapters,
            "league_units": len(baseline),
            "league_matches": int(mm["match_id"].nunique()),
            "opp_coaches": sorted(rows["opp_coach_key"].dropna().unique().tolist()),
        },
        [],
    )
    log(f"export listo en data/out/{key}/")
    return key


def run_export_all(log=print, min_matches: int = MIN_MATCHES) -> list[str]:
    d = load_all()
    keys = []
    for _, r in list_coaches(d["mm"], min_matches).iterrows():
        keys.append(run_export(r["coach"], log=log, d=d))
    return keys
