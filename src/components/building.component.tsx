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
import { ErweiterungType, parseErweiterung } from "../types/erweiterung";
import Kosten from "../types/kosten";
import KostenComponent from "./costen.component";
import Building from "../types/building";
import Info from "../types/Info";
import InfoComponent from "./info.component";
import BringtComponent from "./bringt.component";
import Bringt from "../types/bringt";
import { BuildingTags } from "../types/tags";
import BuildingtagsComponent from "./buildingtags.component";
const building_jpg = require("../data/building/atlantis.jpg");

export interface BuildingComponentProps {
  building: Building;
  setBuilding: (building: Building) => void;
}

const BuildingComponent: React.FC<BuildingComponentProps> = ({
  building,
  setBuilding,
}: BuildingComponentProps) => {
  const [kosten, setKosten] = useState<Kosten>(building.kosten);
  const [braucht, setBraucht] = useState<Kosten>(building.braucht);
  const [erweiterung, setErweiterung] = useState<ErweiterungType>(
    building.erweiterung
  );
  const [info, setInfo] = useState<Info>(building.info);
  const [bringt, setBringt] = useState<Bringt>(building.bringt);
  const [kraft, setKraft] = useState<number>(building.kraft);
  const [abkürzung, setAbkürzung] = useState<string | null>(building.abkürzung);
  const [tags, setTags] = React.useState<BuildingTags[]>(building.tags);

  const handleSubmit = (nextState?: Building) => {
    const building = nextState
      ? nextState
      : new Building(
          kosten,
          erweiterung,
          bringt,
          kraft,
          info,
          tags,
          braucht,
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
      flexWrap={"wrap"}
      sx={{ width: "90%" }}
    >
      <Typography variant="h6" component="h1" gutterBottom>
        Allgemeine Infos
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="space-between"
        gap={1}
        flexWrap={"wrap"}
        sx={{ width: "90%" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="space-between"
          gap={1}
          sx={{ width: "50%" }}
        >
          <InfoComponent
            info={info}
            labelBeschreibung="Beschreibung: Was würde ihr Makler sagen, was dieses Gebäude so besonders macht?"
            labelName="Name dieses unvergleichlichen Prachtstücks vong Gebäude"
            setInfo={(info) => {
              setInfo(info);
              handleSubmit({ ...building, info: info });
            }}
          ></InfoComponent>
          <TextField
            label="Kraft"
            value={kraft}
            fullWidth
            onChange={(e) => {
              let kraft = parseInt(e.target.value);
              setKraft(kraft);
              handleSubmit({ ...building, kraft: kraft });
            }}
          />

          <TextField
            label="Abkürzung"
            value={abkürzung}
            fullWidth
            onChange={(e) => {
              setAbkürzung(e.target.value);
              handleSubmit({ ...building, abkürzung: e.target.value });
            }}
          />
        </Box>
        <Box sx={{ width: "45%" }}>
          <ImageListItem>
            <img
              srcSet={`${building_jpg}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${building_jpg}?w=164&h=164&fit=crop&auto=format`}
              alt="default_building"
              loading="lazy"
            />
          </ImageListItem>
        </Box>
      </Box>

      <Divider></Divider>
      <Typography variant="h6" component="h1" gutterBottom>
        Baukosten
      </Typography>
      <KostenComponent
        kosten={kosten}
        setKosten={(k) => {
          setKosten(k);
          handleSubmit({ ...building, kosten: k });
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
          handleSubmit({
            ...building,
            erweiterung: e.target.value as ErweiterungType,
          });
        }}
        fullWidth
      >
        {Object.values(ErweiterungType).map((erweiterung) => (
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
          handleSubmit({ ...building, tags: t });
        }}
      ></BuildingtagsComponent>
      <Divider></Divider>
      <Typography variant="h6" component="h1" gutterBottom>
        Lästige Betriebskosten, Peanuts!
      </Typography>
      <KostenComponent
        kosten={braucht}
        setKosten={(k) => {
          setBraucht(k);
          handleSubmit({ ...building, braucht: k });
        }}
      ></KostenComponent>
      <Divider></Divider>
      <Typography variant="h6" component="h1" gutterBottom>
        Für was der ganze Aufwand? Was bringt das?
      </Typography>
      <BringtComponent
        bringt={bringt}
        setBringt={(bringt) => {
          setBringt(bringt);
          handleSubmit({ ...building, bringt: bringt });
        }}
      ></BringtComponent>
    </Box>
  );
};

export default BuildingComponent;
