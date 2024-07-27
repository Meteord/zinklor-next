import React from "react";
import { Box, TextField } from "@mui/material";
import Bewegung from "../types/bewergung";

export interface BewegungComponentProps {
  bewegung: Bewegung;
  setBewegung: (bewegung: Bewegung) => void;
}

const BewegungComponent: React.FC<BewegungComponentProps> = ({
  bewegung,
  setBewegung,
}) => {
  const handleWegeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBewegung(new Bewegung(parseInt(event.target.value), bewegung.cm));
  };

  const handleCmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBewegung(new Bewegung(bewegung.wege, parseInt(event.target.value)));
  };

  return (
    <Box my={2} display="flex" flexDirection="row" alignItems="start" gap={1}>
      <TextField
        label="Wege"
        value={bewegung.wege}
        onChange={handleWegeChange}
        size="small"
      />
      <TextField
        label="cm"
        value={bewegung.cm}
        onChange={handleCmChange}
        size="small"
      />
    </Box>
  );
};

export default BewegungComponent;
