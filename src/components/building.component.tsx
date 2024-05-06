import React, { useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  Typography,
  Divider,
  Box,
  ImageListItem,
  TextField,
} from "@mui/material";
import { Erweiterung, parseErweiterung } from "../types/erweiterung";
import Kosten from "../types/kosten";
import KostenComponent from "./costen.component";
import Building from "../types/building";
import Info from "../types/Info";
import InfoComponent from "./info.component";
import BringtComponent from "./bringt.component";
import Bringt from "../types/bringt";
import { BuildingTags } from "../types/tags";
import BuildingtagsComponent from "./buildingtags.component";
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
  const [erweiterung, setErweiterung] = useState<Erweiterung>(
    building.erweiterung
  );
  const [info, setInfo] = useState<Info>(building.info);
  const [bringt, setBringt] = useState<Bringt>(building.bringt);
  const [kraft, setKraft] = useState<number>(building.kraft);
  const [abkürzung, setAbkürzung] = useState<string | null>(building.abkürzung);
  const [tags, setTags] = React.useState<BuildingTags[]>([]);

  const handleSubmit = () => {
    const building = new Building(
      kosten,
      erweiterung,
      bringt,
      kraft,
      info,
      tags,
      abkürzung
    );
    console.log("Submit: Building" + JSON.stringify(building));
    setBuilding(building);
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
        <Box
          display="flex"
          flexDirection="column"
          alignItems="space-between"
          gap={1}
          sx={{ width: "100%" }}
        >
          <InfoComponent
            info={info}
            labelBeschreibung="Beschreibung: Was würde ihr Makler sagen, was dieses Gebäude so besonders macht?"
            labelName="Name dieses unvergleichlichen Prachtstücks vong Gebäude"
            setInfo={(info) => {
              setInfo(info);
              handleSubmit();
            }}
          ></InfoComponent>
          <TextField
            label="Kraft"
            value={kraft}
            fullWidth
            onChange={(e) => {
              setKraft(Number(e.target.value));
              handleSubmit();
            }}
          />

          <TextField
            label="Abkürzung"
            value={abkürzung}
            fullWidth
            onChange={(e) => {
              setAbkürzung(e.target.value);
              handleSubmit();
            }}
          />
        </Box>
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
      <KostenComponent
        kosten={kosten}
        setKosten={(k) => {
          setKosten(k);
          handleSubmit();
        }}
      ></KostenComponent>
      <Divider></Divider>
      <Typography variant="h6" component="h1" gutterBottom>
        Wie ist die Nachbarschaft?
      </Typography>
      <InputLabel>Erweiterung</InputLabel>
      <Select
        value={erweiterung}
        onChange={(e) => {
          setErweiterung(parseErweiterung(e.target.value));
          handleSubmit();
        }}
        fullWidth
      >
        {Object.values(Erweiterung).map((erweiterung) => (
          <MenuItem key={erweiterung} value={erweiterung}>
            {erweiterung}
          </MenuItem>
        ))}
      </Select>

      <InputLabel>Welche Art von Gebäude (mehrfachauswahl möglich)?</InputLabel>
      <BuildingtagsComponent
        tags={tags}
        setTags={(t) => {
          setTags(t);
          handleSubmit();
        }}
      ></BuildingtagsComponent>
      <Divider></Divider>
      <Typography variant="h6" component="h1" gutterBottom>
        Für was der ganze Aufwand? Was bringt das?
      </Typography>
      <BringtComponent
        bringt={bringt}
        setBringt={(bringt) => {
          setBringt(bringt);
          handleSubmit();
        }}
      ></BringtComponent>
    </Box>
  );
};

export default BuildingComponent;
