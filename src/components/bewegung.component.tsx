import React from "react";
import { TextField } from "@mui/material";
import Bewegung from "../types/bewergung";

export interface BewegungComponentProps {
  bewegung: Bewegung;
  setBewegung: (bewegung: Bewegung) => void;
}

const BewegungComponent: React.FC<BewegungComponentProps> = ({
  bewegung,
  setBewegung
}) => {
  const handleWegeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBewegung(new Bewegung(parseInt(event.target.value), bewegung.cm));
  };

  const handleCmChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBewegung(new Bewegung(bewegung.wege, parseInt(event.target.value)));
  };

  return (
    <div>
      <TextField
        label="Wege"
        value={bewegung.wege}
        onChange={handleWegeChange}
        fullWidth
      />
      <TextField
        label="cm"
        value={bewegung.cm}
        onChange={handleCmChange}
        fullWidth
      />
    </div>
  );
};

export default BewegungComponent;
