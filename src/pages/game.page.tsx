import React, { useState } from "react";
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
} from "@mui/material";
import { GameState } from "../types/gamestate";
import Kosten from "../types/kosten";
import Info from "../types/Info";
import InfoComponent from "../components/info.component";

const GamePage: React.FC = () => {
  const [started, setStarted] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState(0);
  const [state, setState] = useState<GameState>(
    new GameState(new Kosten(0, 500, 0, 0), 0, new Info("",""), null, [], null)
  );
  const steps = ["Basics", "Spieleinstellungen"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {!started ? (
        <div>
          Kein existierendes Spiel gefunden:
          <Button onClick={() => setStarted(true)}>
            <Typography variant="h5" component="h1" gutterBottom>
              Neues Spiel erstellen
            </Typography>
          </Button>
        </div>
      ) : (
        <div>
          <Stepper activeStep={activeStep} alternativeLabel>
              <Step key={steps[0]}>
                <StepLabel>{steps[0]}</StepLabel>
                {activeStep===0 &&
                <InfoComponent info={state.info} setInfo={(info) => setState({...state, ...{info: info}})}></InfoComponent>
                }
                </Step>
              <Step key={steps[1]}>
                <StepLabel>{steps[1]}</StepLabel>
              </Step>
          </Stepper>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>{" "}
        </div>
      )}
    </Box>
  );
};

export default GamePage;
