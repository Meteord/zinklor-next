import {
  Box,
  Button,
  Divider,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GameState } from "../types/gamestate";
import EinheitSelectComponent from "./einheit.select.component";
import InfoComponent from "./info.component";
import SpellComponent from "./spell.component";
import StaatsformComponent from "./staatsform.component";
import { GamePageState } from "../types/GamePageState";
import { Einheit } from "../types/einheit";
import { UnitTags } from "../types/tags";
import { fetchUnits } from "../data/unit/fetchUnits";

interface GamePreperationComponentProps {
  state: GameState;
  setState: (gamestate: GameState) => void;
  setStarted: (gamepagestate: GamePageState) => void;
}

const GamePreperationComponent: React.FC<GamePreperationComponentProps> = ({
  state,
  setState,
  setStarted,
}: GamePreperationComponentProps) => {
  const [activeStep, setActiveStep] = useState(0);

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
          alignItems="center"
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
            setInfo={(info) => setState({ ...state, ...{ info: info } })}
          ></InfoComponent>
          { kings.length > 0 && (
          <EinheitSelectComponent
            einheiten={kings}
            einheit={state.könig}
            setEinheit={(koenig) =>
              setState({ ...state, ...{ könig: koenig } })
            }
          ></EinheitSelectComponent>
          )}
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
      {activeStep === 1 && (
        <Box
          my={4}
          display="flex"
          flexDirection="column"
          alignItems="start"
          gap={2}
          sx={{ width: "90%" }}
        >
          <div>Ziehen alle n Runden</div>
          <div>Hacken für n Runden erlaubt</div>
          <div>Spielen mit le Fläggle</div>
          <div>Erlaubte Erweiterungen</div>
          <div>Umweltfreundlich/Feindlich nach</div>
          <div>Lehmgolems erlaubt?</div>
        </Box>
      )}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
          Zurück Diggi
        </Button>
        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Fettig" : "Bruder muss los"}
        </Button>
      </Box>{" "}
    </div>
  );
};

export default GamePreperationComponent;


