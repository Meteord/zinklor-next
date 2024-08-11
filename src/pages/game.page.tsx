import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  CardContent,
  Card,
  CardActionArea,
} from "@mui/material";
import { GameState } from "../types/gamestate";
import Kosten from "../types/kosten";
import Info from "../types/Info";
import Staatsform, { Staatsformtype } from "../types/staatsform";
import GameRunningComponent from "../components/game.running.component";
import { GamePageState } from "../types/GamePageState";
import GamePreperationComponent from "../components/game.preparation.component";
import { plainToInstance } from "class-transformer";

const getStartState = (): GameState => {
  return new GameState(
    GamePageState.UNSTARTED,
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
  );
};

const GamePage: React.FC = () => {
  const [state, setState] = useState<GameState>(() => {
    const savedState = localStorage.getItem("gameState");
    if (savedState) {
      let instance = plainToInstance(GameState, JSON.parse(savedState));
      return instance;
    } else {
      return getStartState();
    }
  });
  React.useEffect(() => {
    localStorage.setItem("gameState", JSON.stringify(state));
  }, [state]);
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
          {state.state === GamePageState.UNSTARTED ? (
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              alignItems="center"
            >
              Kontrolle über dein Leben verloren, kein existierendes Spiel
              gefunden!
              <Button
                onClick={() =>
                  setState({
                    ...state,
                    ...{ state: GamePageState.PREPARATION },
                  })
                }
                variant="contained"
                color="primary"
              >
                <Typography variant="h5" component="h1" gutterBottom>
                  Neues Spiel erstellen
                </Typography>
              </Button>
            </Box>
          ) : state.state === GamePageState.PREPARATION ? (
            <GamePreperationComponent
              state={state}
              setState={setState}
            ></GamePreperationComponent>
          ) : (
            <>
              <GameRunningComponent
                state={state}
                setState={setState}
              ></GameRunningComponent>
            </>
          )}
        </CardContent>
        {state.state !== GamePageState.UNSTARTED && (
          <CardActionArea>
            <Button
              onClick={() => setState(getStartState())}
              variant="contained"
              color="secondary"
            >
              <Typography variant="h5" component="h1" gutterBottom>
                Spiel verlassen
              </Typography>
            </Button>
          </CardActionArea>
        )}
      </Card>
    </Box>
  );
};

export default GamePage;
