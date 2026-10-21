"""Orquesta todos los exports para el técnico objetivo (config.COACH / config.TEAM)."""

from isac.config import COACH, TEAM, TEAM_ALL_LABEL
from isac.export.baseline import team_tournament_means
from isac.export.common import coach_mask, load_all, select_pairs, write_json
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


def run_export(log=print, coach: str = COACH, team: str | None = TEAM) -> None:
    d = load_all()
    mm, ctx = d["mm"], d["ctx"]
    rows = mm[coach_mask(mm, coach, team)].copy()
    if rows.empty:
        raise SystemExit(f"sin partidos para {coach} / {team}")
    scope = team or TEAM_ALL_LABEL
    teams = (
        rows.groupby("team")
        .agg(n=("match_id", "nunique"), desde=("match_date", "min"), hasta=("match_date", "max"))
        .reset_index()
        .sort_values("desde")
    )
    baseline = team_tournament_means(mm)
    log(
        f"{coach} / {scope}: {len(rows)} partidos en {len(teams)} equipos; línea base {len(baseline)} equipo-torneo"
    )

    export_definitions()
    overall = export_profile(
        rows,
        baseline,
        "profile.json",
        extra={
            "coach": coach,
            "team": scope,
            "period": {"from": rows["match_date"].min(), "to": rows["match_date"].max()},
            "teams": teams.to_dict("records"),
        },
    )
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
    export_findings()
    # perfil por equipo (capítulos): Santos, Pachuca, América...
    chapters = []
    for other_team, g in rows.groupby("team"):
        if len(g) >= 5:
            export_profile(
                g,
                baseline,
                f"profile_{other_team.lower().replace(' ', '_')}.json",
                extra={"coach": coach, "team": other_team},
            )
            chapters.append({"team": other_team, "n": len(g)})
    write_json(
        "meta.json",
        {
            "coach": coach,
            "team": scope,
            "n_matches": len(rows),
            "teams": teams.to_dict("records"),
            "other_chapters": chapters,
            "league_units": len(baseline),
            "league_matches": int(mm["match_id"].nunique()),
        },
        [],
    )
    log("export listo en data/out/")
