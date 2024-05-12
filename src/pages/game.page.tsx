import React, { useEffect, useState } from "react";
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
  Divider,
  CardContent,
  Card,
  ImageListItem,
} from "@mui/material";
import { GameState } from "../types/gamestate";
import Kosten from "../types/kosten";
import Info from "../types/Info";
import InfoComponent from "../components/info.component";
import StaatsformComponent from "../components/staatsform.component";
import SpellComponent from "../components/spell.component";
import Staatsform, { Staatsformtype } from "../types/staatsform";
import EinheitSelectComponent from "../components/einheit.select.component";
import { fetchUnits } from "../data/unit/fetchUnits";
import { Einheit } from "../types/einheit";
import { UnitTags } from "../types/tags";
import InfoReadOnlyComponent from "../components/info.readonly.component";

enum GamePageState {
  UNSTARTED = "UNSTARTED",
  PREPARATION = "PREPARATION",
  RUNNING = "RUNNING",
}

const GamePage: React.FC = () => {
  const [started, setStarted] = useState<GamePageState>(
    GamePageState.UNSTARTED
  );
  const [activeStep, setActiveStep] = useState(0);
  const [state, setState] = useState<GameState>(
    new GameState(
      new Kosten(0, 500, 0, 0),
      0,
      new Info("", ""),
      new Staatsform(Staatsformtype.Demokratie, []),
      [],
      null,
      null,
      null
    )
  );
  const steps = ["Wer bist du, Alter?", "Ganz normale Spieleinstellungen"];
  const [kings, setKings] = useState<Einheit[]>([]);
  useEffect(() => {
    // Fetch data here
    const fetchData = async () => {
      try {
        let einheiten = fetchUnits();
        let könige = einheiten.filter((einheit) => {
          return einheit.tags.includes(UnitTags.Königend);
        });
        console.log("Könige: " + JSON.stringify(könige));
        setKings(könige);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      console.log("Submit: GameState" + JSON.stringify(state));
      setStarted(GamePageState.RUNNING);
    } else setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      setStarted(GamePageState.UNSTARTED);
    } else setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      my={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ width: "100%" }}
    >
      <Card>
        <CardContent>
          {started === GamePageState.UNSTARTED ? (
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              alignItems="center"
              sx={{ width: "90%" }}
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
            <div>
              <Stepper activeStep={activeStep} alternativeLabel>
                <Step key={steps[0]}>
                  <StepLabel>{steps[0]}</StepLabel>
                </Step>
                <Step key={steps[1]}>
                  <StepLabel>{steps[1]}</StepLabel>
                </Step>
              </Stepper>
              {activeStep === 0 && (
                <Box
                  my={4}
                  display="flex"
                  flexDirection="column"
                  alignItems="start"
                  gap={1}
                  sx={{ width: "90%" }}
                >
                  <Typography variant="h6" component="h2" gutterBottom>
                    Persönliche Informationen
                  </Typography>
                  <InfoComponent
                    info={state.info}
                    labelBeschreibung="Erzähl was über dich! Kreditkarteninfos, Passwörter, alles was du hast!"
                    labelName="Wie heißt du?"
                    setInfo={(info) =>
                      setState({ ...state, ...{ info: info } })
                    }
                  ></InfoComponent>
                  <EinheitSelectComponent
                    einheiten={kings}
                    einheit={state.könig}
                    setEinheit={(koenig) =>
                      setState({ ...state, ...{ könig: koenig } })
                    }
                  ></EinheitSelectComponent>

                  <Divider></Divider>

                  <Divider></Divider>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Staatsform
                  </Typography>
                  <StaatsformComponent
                    staatsform={state.staatsform}
                    setStaatsform={(st) =>
                      setState({ ...state, ...{ staatsform: st } })
                    }
                  ></StaatsformComponent>

                  <Divider></Divider>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Zauber
                  </Typography>
                  <SpellComponent
                    spell={state.spell}
                    setSpell={(sp) => setState({ ...state, ...{ spell: sp } })}
                  ></SpellComponent>
                </Box>
              )}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                  Zurück Diggi
                </Button>
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1
                    ? "Fettig"
                    : "Bruder muss los"}
                </Button>
              </Box>{" "}
            </div>
          ) : (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              gap={1}
              flexWrap={"wrap"}
              sx={{ width: "90%" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="space-between"
                gap={1}
                sx={{ width: "100%" }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="space-between"
                  gap={1}
                  sx={{ width: "90%" }}
                >
                  <InfoReadOnlyComponent
                    info={state.info}
                  ></InfoReadOnlyComponent>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="space-between"
                  gap={1}
                  sx={{ width: "10%" }}
                >
                  {state.könig && (
                    <ImageListItem>
                      <img
                        srcSet={`${require("../data/unit/" +
                          state.könig.info.name +
                          ".jpg")}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${require("../data/unit/" +
                          state.könig.info.name +
                          ".jpg")}?w=164&h=164&fit=crop&auto=format`}
                        alt="default_building"
                        loading="lazy"
                      />
                    </ImageListItem>
                  )}
                </Box>
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default GamePage;
