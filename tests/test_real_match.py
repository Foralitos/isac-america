"""Partido 3889690: Pachuca 0-2 Atlético San Luis, 29-ago-2023, Apertura 2023 J6."""

import pytest

from isac.config import RAW
from isac.context.score_state import exposure, goal_timeline

pytestmark = pytest.mark.skipif(
    not (RAW / "events" / "3889690.json.gz").exists(), reason="sin data/raw"
)

MID = 3889690
PACHUCA = None


def test_events_and_context():
    from isac.context import build_match_context
    from isac.io.events import load_events
    from isac.io.matches import load_matches

    ev = load_events(MID)
    assert ev["type"].value_counts()["Substitution"] == 9
    sx = ev[ev["type"] == "Starting XI"]
    pach = sx[sx["team"] == "Pachuca"].iloc[0]
    assert pach["formation"] == 4411
    ts = ev[(ev["type"] == "Tactical Shift") & (ev["team"] == "Pachuca")]
    assert ts.iloc[0]["minute"] == 62 and ts.iloc[0]["formation"] == 3412
    goals = goal_timeline(ev)
    assert len(goals) == 2 and (goals["team_id"] != pach["team_id"]).all()
    ex = exposure(ev, int(pach["team_id"]))
    assert (
        abs(
            ex["minutes"].sum()
            - (
                ev[ev["type"] == "Half End"]["t"].max()
                - 2700
                + ev[(ev["type"] == "Half End") & (ev["period"] == 1)]["t"].max()
            )
            / 60
        )
        < 0.01
    )

    ctx = build_match_context(load_matches())
    row = ctx[(ctx["match_id"] == MID) & (ctx["team"] == "Pachuca")].iloc[0]
    assert (
        row["tournament"] == "Apertura 2023" and row["phase_kind"] == "regular" and row["week"] == 6
    )
    assert row["is_home"] and row["result"] == "L" and row["coach"].endswith("Almada Álves")
    ap22 = ctx[ctx["tournament"] == "Apertura 2022"]
    assert ap22["phase_kind"].eq("regular").sum() == 306  # 153 partidos x 2
