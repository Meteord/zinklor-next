import React from "react";
import { Typography, Divider, Box, ImageListItem, Chip } from "@mui/material";
import Building from "../types/building";
import InfoReadOnlyComponent from "./info.readonly.component";
import KostenReadOnlyComponent from "./costen.readonly.component";
const building_jpg = require("../data/building/building.jpg");

export interface BuildingReadonlyComponentProps {
  building: Building;
}

const BuildingReadonlyComponent: React.FC<BuildingReadonlyComponentProps> = ({
  building,
}: BuildingReadonlyComponentProps) => {
  const diffKosten = building.bringt.ertrag.diff(building.braucht);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      gap={1}
      sx={{ width: "100%" }}
    >
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
          <InfoReadOnlyComponent info={building.info}></InfoReadOnlyComponent>

          <div>
            {building.tags.map((option: string, index: number) => (
              <Chip variant="outlined" label={option} key={index} />
            ))}
          </div>
          <div>Kraft: {building.kraft}</div>
          <div>Abkürzung: {building.abkürzung}</div>
          <div>Erweiterung: {building.erweiterung}</div>
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
      <KostenReadOnlyComponent
        kosten={building.kosten}
      ></KostenReadOnlyComponent>
      <Divider></Divider>

      <Typography variant="h6" component="h1" gutterBottom>
        Braucht
      </Typography>
      <KostenReadOnlyComponent
        kosten={building.braucht}
      ></KostenReadOnlyComponent>
      <Typography variant="h6" component="h1" gutterBottom>
        Bringt
      </Typography>
      <KostenReadOnlyComponent
        kosten={building.bringt.ertrag}
      ></KostenReadOnlyComponent>
            <Typography variant="h6" component="h1" gutterBottom>
        Differenz: Bringt- Braucht:
      </Typography>
      <KostenReadOnlyComponent
        kosten={diffKosten}
      ></KostenReadOnlyComponent>
      <div>Effekt: {building.bringt.beschreibung}</div>
    </Box>
  );
};

export default BuildingReadonlyComponent;
