"""Entrada: `isac build | metrics | coaches | export | publish | all`.

isac coaches                         técnicos con partidos suficientes (clave, nombre corto, equipos)
isac export --coach <clave|nombre>   exporta data/out/<clave>/ (y data/out/global/)
isac export --all                    todos los técnicos con >= MIN_MATCHES partidos
isac publish --coach <clave>         sube ese técnico a Mongo (+ globales)
isac publish --all [--clean]         sube todos los exportados; --clean borra claves viejas
"""

import sys
import time

from isac.config import PROCESSED


def log(msg: str) -> None:
    print(f"[{time.strftime('%H:%M:%S')}] {msg}", flush=True)


def _opt(args: list[str], name: str) -> str | None:
    if name in args:
        i = args.index(name)
        return args[i + 1] if i + 1 < len(args) else None
    return None


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
    if cmd == "coaches":
        from isac.export.run import list_coaches

        for _, r in list_coaches().iterrows():
            print(
                f"{r['key']:42s} {r['short']:18s} {r['n']:4d}  {r['teams']}  ({r['desde']:%Y-%m-%d} a {r['hasta']:%Y-%m-%d})"
            )
        return 0
    if cmd == "export":
        from isac.export.common import load_all
        from isac.export.run import export_globals, run_export, run_export_all

        if "--all" in args:
            export_globals(load_all()["mm"], log=log)
            run_export_all(log=log)
            return 0
        coach = _opt(args, "--coach")
        if not coach:
            print(__doc__)
            return 1
        d = load_all()
        export_globals(d["mm"], log=log)
        run_export(coach, log=log, d=d)
        return 0
    if cmd == "publish":
        from isac.config import slug
        from isac.export.mongo import (
            clean_legacy,
            counts,
            publish,
            publish_globals,
            published_coaches,
        )

        publish_globals(log=log)
        if "--all" in args:
            for key in published_coaches():
                publish(key, log=log)
        else:
            coach = _opt(args, "--coach")
            if not coach:
                print(__doc__)
                return 1
            publish(slug(coach) if slug(coach) in published_coaches() else coach, log=log)
        if "--clean" in args:
            clean_legacy(log=log)
        counts(log=log)
        return 0
    if cmd == "all":
        build()
        from isac.export.common import load_all
        from isac.export.run import export_globals, run_export_all
        from isac.metrics.run import run_metrics

        run_metrics(log=log)
        export_globals(load_all()["mm"], log=log)
        run_export_all(log=log)
        return 0
    print(__doc__)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
