import React, { useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  Typography,
  Divider,
  Box,
  ImageListItem,
} from "@mui/material";
import { BuildingType, parseBuildingType } from "../types/buildingtype";
import { Erweiterung, parseErweiterung } from "../types/erweiterung";
import Kosten from "../types/kosten";
import KostenComponent from "./costen.component";
import Building from "../types/building";
import Info from "../types/Info";
import InfoComponent from "./info.component";
import BringtComponent from "./bringt.component";
import Bringt from "../types/bringt";
const building_jpg = require("../data/building/building.jpg");

export interface BuildingComponentProps {
  building: Building;
  setBuilding: (building: Building) => void;
}

const BuildingComponent: React.FC<BuildingComponentProps> = ({
  building,
  setBuilding,
}: BuildingComponentProps) => {
  const [kosten, setKosten] = useState<Kosten>(building.kosten);
  const [type, setType] = useState<BuildingType>(building.type);
  const [erweiterung, setErweiterung] = useState<Erweiterung>(
    building.erweiterung
  );
  const [info, setInfo] = useState<Info>(building.info);
  const [bringt, setBringt] = useState<Bringt>(building.bringt);

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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      gap={1}
      sx={{ width: "100%" }}
    >
      <Typography variant="h6" component="h1" gutterBottom>
        Allgemeine Infos
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="space-between"
        gap={1}
        sx={{ width: "100%" }}
      >
        <InfoComponent
          info={info}
          labelBeschreibung="Beschreibung: Was würde ihr Makler sagen, was dieses Gebäude so besonders macht?"
          labelName="Name dieses unvergleichlichen Prachtstücks vong Gebäude"
          setInfo={(info) => setInfo(info)}
        ></InfoComponent>
        <ImageListItem>
          <img
            srcSet={`${building_jpg}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${building_jpg}?w=164&h=164&fit=crop&auto=format`}
            alt="default_building"
            loading="lazy"
          />
        </ImageListItem>
      </Box>

      <Divider></Divider>
      <Typography variant="h6" component="h1" gutterBottom>
        Baukosten
      </Typography>
      <KostenComponent kosten={kosten} setKosten={setKosten}></KostenComponent>
      <Divider></Divider>
      <Typography variant="h6" component="h1" gutterBottom>
        Wie ist die Nachbarschaft?
      </Typography>
      <InputLabel>Erweiterung</InputLabel>
      <Select
        value={erweiterung}
        onChange={(e) => setErweiterung(parseErweiterung(e.target.value))}
        fullWidth
      >
        {Object.values(Erweiterung).map((erweiterung) => (
          <MenuItem key={erweiterung} value={erweiterung}>
            {erweiterung}
          </MenuItem>
        ))}
      </Select>

      <InputLabel>Welche Art von Gebäude</InputLabel>
      <Select
        value={type}
        onChange={(e) => setType(parseBuildingType(e.target.value))}
        fullWidth
      >
        {Object.values(BuildingType).map((type: string | number) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
      <Divider></Divider>
      <Typography variant="h6" component="h1" gutterBottom>
        Für was der ganze Aufwand? Was bringt das?
      </Typography>
      <BringtComponent bringt={bringt} setBringt={setBringt}></BringtComponent>
    </Box>
  );
};

export default BuildingComponent;
