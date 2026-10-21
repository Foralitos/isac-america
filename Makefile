# Flujo: download (TS) -> build (parquet) -> metrics -> export (JSON para web/)
.PHONY: setup download build metrics export test lint all

setup:            ## venv + deps
	uv sync --extra dev
	yarn install

download:         ## baja Liga MX completa a data/raw (reanudable)
	yarn download

build:            ## data/raw -> data/processed/*.parquet
	uv run isac build

metrics:          ## data/processed -> data/processed/metrics/*.parquet
	uv run isac metrics

export:           ## métricas -> data/out/*.json (lo que lee el Next)
	uv run isac export

publish:          ## sube data/out a MongoDB Atlas (MONGODB_URI en .env)
	uv run isac publish

all: build metrics export

test:
	uv run pytest -q

lint:
	uv run ruff check src tests
	uv run ruff format --check src tests
