"""D-02 secuencia ofensiva: posesión con >= 3 eventos con balón o que termina en tiro."""

import pandas as pd

MIN_ON_BALL = 3


def sequences(poss: pd.DataFrame) -> pd.DataFrame:
    if poss.empty:
        return poss
    s = poss[(poss["n_on_ball"] >= MIN_ON_BALL) | poss["has_shot"]].copy()
    s["dangerous"] = s["reached_final_third"] | s["has_shot"]
    return s
