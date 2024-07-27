import React, {useState } from "react";
import { Typography, Box, Button, CardContent, Card } from "@mui/material";
import { GameState } from "../types/gamestate";
import Kosten from "../types/kosten";
import Info from "../types/Info";
import Staatsform, { Staatsformtype } from "../types/staatsform";
import GameRunningComponent from "../components/game.running.component";
import { GamePageState } from "../types/GamePageState";
import GamePreperationComponent from "../components/game.preparation.component";

const GamePage: React.FC = () => {
  const [started, setStarted] = useState<GamePageState>(
    GamePageState.UNSTARTED
  );
  const [state, setState] = useState<GameState>(
    new GameState(
      new Kosten(0, 500, 0, 0),
      new Kosten(0, 0, 0, 0),
      new Kosten(0, 0, 0, 0),
      0,
      new Info("", ""),
      new Staatsform(Staatsformtype.Demokratie, []),
      [],
      null,
      null,
      null
    )
  );

  return (
    <Box
      my={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      p={2}
      mx={10}
      sx={{ width: "80%" }}
    >
      <Card>
        <CardContent>
          {started === GamePageState.UNSTARTED ? (
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              alignItems="center"
            >
              Kontrolle über dein Leben verloren, kein existierendes Spiel
              gefunden!
              <Button onClick={() => setStarted(GamePageState.PREPARATION)}>
                <Typography variant="h5" component="h1" gutterBottom>
                  Neues Spiel erstellen
                </Typography>
              </Button>
            </Box>
          ) : started === GamePageState.PREPARATION ? (
            <GamePreperationComponent
              state={state}
              setState={setState}
              setStarted={setStarted}
            ></GamePreperationComponent>
          ) : (
            <GameRunningComponent
              state={state}
              setState={setState}
            ></GameRunningComponent>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default GamePage;
