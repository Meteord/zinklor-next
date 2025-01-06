import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Step,
  StepLabel,
  Stepper,
  TextField,
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
}

const GamePreperationComponent: React.FC<GamePreperationComponentProps> = ({
  state,
  setState,
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

      setState({ ...state, ...{ state: GamePageState.RUNNING } });
    } else setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      setState({ ...state, ...{ state: GamePageState.UNSTARTED } });
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
          {kings.length > 0 && (
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
          <TextField
            fullWidth
            type="number"
            label="Ziehen alle n Runden"
            inputProps={{ min: 1, step: 1 }}
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={5}
            onChange={(event) => {
              const value = parseInt(event.target.value);
              if (value > 1) {
                // handle valid input
              } else {
                // handle invalid input
              }
            }}
          />
          <TextField
            fullWidth
            type="number"
            label="Hacken für n Runden erlaubt"
            inputProps={{ min: 0, step: 1 }}
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={2}
            onChange={(event) => {
              const value = parseInt(event.target.value);
              if (value > 1) {
                // handle valid input
              } else {
                // handle invalid input
              }
            }}
          />
          <TextField
            type="number"
            label="Umweltfeindlich/Umweltfreundlich nach n Runden"
            inputProps={{ min: 0, step: 1 }}
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={30}
            fullWidth
            onChange={(event) => {
              const value = parseInt(event.target.value);
              if (value > 1) {
                // handle valid input
              } else {
                // handle invalid input
              }
            }}
          />
          <TextField
            fullWidth
            type="number"
            label="Rundenlimit in Minuten (-1 heißt unlimitiert)"
            inputProps={{ min: -1, step: 1 }}
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={-1}
            onChange={(event) => {
              const value = parseInt(event.target.value);
              if (value > 1) {
                // handle valid input
              } else {
                // handle invalid input
              }
            }}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Le Fläggle"
            defaultChecked
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Lehmgolems erlaubt? (Nur für Profis)"
          />
        </Box>
      )}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Zurück Diggi
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Fettig" : "Bruder muss los"}
        </Button>
      </Box>{" "}
    </div>
  );
};

export default GamePreperationComponent;
