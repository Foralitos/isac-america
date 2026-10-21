"""Entrada: `isac build | metrics | export | all`."""

import sys
import time

from isac.config import PROCESSED


def log(msg: str) -> None:
    print(f"[{time.strftime('%H:%M:%S')}] {msg}", flush=True)


def build(workers: int = 8) -> None:
    from isac.context import build_match_context
    from isac.io import (
        build_all_events,
        load_lineups,
        load_matches,
        load_player_match_stats,
        load_team_match_stats,
    )

    PROCESSED.mkdir(parents=True, exist_ok=True)
    matches = load_matches()
    matches.to_parquet(PROCESSED / "matches.parquet", index=False)
    log(f"matches: {len(matches)}")
    ctx = build_match_context(matches)
    ctx.to_parquet(PROCESSED / "matches_context.parquet", index=False)
    log(f"matches_context: {len(ctx)} filas")
    stints, formations = load_lineups(matches["match_id"].tolist())
    stints.to_parquet(PROCESSED / "lineups.parquet", index=False)
    formations.to_parquet(PROCESSED / "formations.parquet", index=False)
    log(f"lineups: {len(stints)} tramos, {len(formations)} formaciones")
    load_team_match_stats().to_parquet(PROCESSED / "team_match_stats.parquet", index=False)
    load_player_match_stats().to_parquet(PROCESSED / "player_match_stats.parquet", index=False)
    log("stats OK")
    log("eventos -> parquet (tarda varios minutos)")
    build_all_events(matches, workers=workers, log=log)
    log("build listo")


def main(argv: list[str] | None = None) -> int:
    args = argv if argv is not None else sys.argv[1:]
    cmd = args[0] if args else None
    if cmd == "build":
        build()
        return 0
    if cmd == "metrics":
        from isac.metrics.run import run_metrics

        run_metrics(log=log)
        return 0
    if cmd == "export":
        from isac.export.run import run_export

        run_export(log=log)
        return 0
    if cmd == "publish":
        from isac.export.mongo import counts, publish

        publish(log=log)
        counts(log=log)
        return 0
    if cmd == "all":
        build()
        from isac.export.run import run_export
        from isac.metrics.run import run_metrics

        run_metrics(log=log)
        run_export(log=log)
        return 0
    print("uso: isac build | metrics | export | publish | all")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
