import React, { useState } from "react";
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import { BuildingType, parseBuildingType } from "../types/buildingtype";
import { Erweiterung, parseErweiterung } from "../types/erweiterung";
import Kosten from "../types/kosten";
import KostenComponent from "./costen.component";
import Building from "../types/building";
import Info from "../types/Info";

const BuildingComponent: React.FC = () => {
  const [kosten, setKosten] = useState<Kosten>(new Kosten(0, 0, 0, 0));
  const [type, setType] = useState<BuildingType>(BuildingType.Stadt);
  const [erweiterung, setErweiterung] = useState<Erweiterung>(Erweiterung.Eis);

  const handleSubmit = () => {
    const building = new Building(
      kosten,
      type,
      erweiterung,
      null,
      0,
      new Info("", "")
    );
    console.log(building);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" component="h1" gutterBottom>
        Neues Gebäude erstellen
      </Typography>
      <KostenComponent kosten={kosten} setKosten={setKosten}></KostenComponent>
      <FormControl>
        <InputLabel>Type</InputLabel>
        <Select
          value={type}
          onChange={(e) => setType(parseBuildingType(e.target.value))}
        >
          {Object.values(BuildingType).map((type: string | number) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Erweiterung</InputLabel>
        <Select
          value={erweiterung}
          onChange={(e) => setErweiterung(parseErweiterung(e.target.value))}
        >
          {Object.values(Erweiterung).map((erweiterung) => (
            <MenuItem key={erweiterung} value={erweiterung}>
              {erweiterung}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit">Erstellen</Button>
    </form>
  );
};

export default BuildingComponent;
