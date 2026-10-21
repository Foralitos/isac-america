"""Une todo el contexto en una fila por (partido, equipo)."""

import pandas as pd

from isac.config import era_rules
from isac.context.legs import add_legs
from isac.context.stakes import stakes_category
from isac.context.standings import final_table, standings_before
from isac.context.tournament import add_tournament

TOP_N_RIVAL = 6


def build_match_context(matches: pd.DataFrame) -> pd.DataFrame:
    m = add_legs(add_tournament(matches))
    reg = m[m["phase_kind"] == "regular"]
    st = standings_before(reg)
    fin = final_table(st)
    st_idx = st.set_index(["tournament", "week", "team_id"])
    pts_by = {
        k: g.sort_values("pos")["pts"].tolist() for k, g in st.groupby(["tournament", "week"])
    }
    fin_pos = fin.set_index(["tournament", "team_id"])["pos"].to_dict()

    rows = []
    for r in m.itertuples(index=False):
        for side in ("home", "away"):
            opp = "away" if side == "home" else "home"
            tid, oid = getattr(r, f"{side}_team_id"), getattr(r, f"{opp}_team_id")
            gf, ga = getattr(r, f"{side}_score"), getattr(r, f"{opp}_score")
            row = {
                "match_id": r.match_id,
                "season_id": r.season_id,
                "match_date": r.match_date,
                "tournament": r.tournament,
                "tkey": r.tkey,
                "phase_kind": r.phase_kind,
                "round": r.round,
                "week": r.match_week,
                "team_id": tid,
                "team": getattr(r, f"{side}_team"),
                "opponent_id": oid,
                "opponent": getattr(r, f"{opp}_team"),
                "coach_id": getattr(r, f"{side}_manager_id"),
                "coach": getattr(r, f"{side}_manager"),
                "opp_coach": getattr(r, f"{opp}_manager"),
                "is_home": side == "home",
                "neutral": r.neutral_ground,
                "gf": gf,
                "ga": ga,
                "result": "W" if gf > ga else "L" if gf < ga else "D",
                "stadium": r.stadium,
            }
            # D-23 situación en la tabla (solo fase regular); en play-in/liguilla se usa la fase
            if r.phase_kind == "regular":
                s = st_idx.loc[(r.tournament, r.match_week, tid)]
                rules = era_rules(r.year, r.phase_name)
                row.update(
                    pos_before=int(s["pos"]),
                    pts_before=int(s["pts"]),
                    stakes=stakes_category(
                        int(s["pos"]),
                        int(s["pts"]),
                        pts_by[(r.tournament, r.match_week)],
                        r.match_week,
                        rules,
                    ),
                )
            else:
                row.update(
                    pos_before=fin_pos.get((r.tournament, tid)),
                    pts_before=None,
                    stakes=r.phase_kind,
                )
            # D-25 rival
            row["opp_final_pos"] = fin_pos.get((r.tournament, oid))
            row["opp_top6"] = bool(row["opp_final_pos"] and row["opp_final_pos"] <= TOP_N_RIVAL)
            row["team_final_pos"] = fin_pos.get((r.tournament, tid))
            # D-24 ida / vuelta
            row["leg"] = r.leg
            if r.leg == "2":
                mine = r.leg1_home_score if r.leg1_home_id == tid else r.leg1_away_score
                theirs = r.leg1_away_score if r.leg1_home_id == tid else r.leg1_home_score
                row["agg_before"] = (
                    "ganando" if mine > theirs else "perdiendo" if mine < theirs else "empatado"
                )
            else:
                row["agg_before"] = None
            rows.append(row)
    return pd.DataFrame(rows)
