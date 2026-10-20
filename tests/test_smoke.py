from isac import config


def test_config_paths():
    assert config.RAW.name == "raw"
    assert config.COMPETITION_ID == 73
