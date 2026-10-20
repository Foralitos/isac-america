"""Entrada: `isac build | metrics | export`."""

import sys


def main(argv: list[str] | None = None) -> int:
    args = argv if argv is not None else sys.argv[1:]
    cmd = args[0] if args else None
    if cmd == "build":
        raise NotImplementedError("io -> data/processed")
    if cmd == "metrics":
        raise NotImplementedError("metrics por bloque x escenario")
    if cmd == "export":
        raise NotImplementedError("JSON por celda a data/out")
    print("uso: isac build | metrics | export")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
