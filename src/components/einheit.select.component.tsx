import React, { useState } from "react";
import { Select, MenuItem, Avatar, Chip, Box } from "@mui/material";
import { Einheit } from "../types/einheit";
import EinheitReadonlyComponent from "./einheit.readonly.component";

export interface EinheitSelectProps {
  einheiten: Einheit[];
  einheit?: Einheit;
  setEinheit: (einheit: Einheit) => void;
}

const EinheitSelect: React.FC<EinheitSelectProps> = ({
  einheiten,
  einheit,
  setEinheit,
}: EinheitSelectProps) => {
  const abk = einheit ? einheit.abkürzung : einheiten[0].abkürzung;
  const [selectedAbk, setSelectedAbk] = useState(abk);

  const handleSelectChange = (event: { target: { value: any } }) => {
    let found = einheiten.find((e) => e.abkürzung === event.target.value);
    setSelectedAbk(found.abkürzung);
    setEinheit(found);
  };

  return (
    <Box
      my={2}
      display="flex"
      flexDirection="column"
      alignItems="start"
      sx={{ width: "100%" }}
      gap={1}
    >
      <Select value={selectedAbk} onChange={handleSelectChange} fullWidth>
        {einheiten.map((einheit) => (
          <MenuItem key={einheit.abkürzung} value={einheit.abkürzung}>
            <Chip
              avatar={
                <Avatar
                  src={require(`../data/unit/${einheit.info.name}.jpg`)}
                />
              }
              label={einheit.info.name}
            />
          </MenuItem>
        ))}
      </Select>
      {einheit && (
        <EinheitReadonlyComponent einheit={einheit} useDefaultImage={false} />
      )}
    </Box>
  );
};

export default EinheitSelect;
