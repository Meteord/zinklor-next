import React from "react";
import {
  Typography,
  Divider,
  Box,
  ImageListItem,
  Chip,
  Grid,
} from "@mui/material";
import Building from "../types/building";
import InfoReadOnlyComponent from "./info.readonly.component";
import KostenListeReadOnlyComponent from "./costenliste.readonly.component";
import ErweiterungReadonlyComponent from "./erweiterung.readonly.component";
import EffektListeReadonlyComponent from "./effektliste.readonly.component";
const building_jpg = require("../data/building/atlantis.jpg");

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
      flexWrap={"wrap"}
      sx={{ width: "90%" }}
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
          sx={{ width: "45%" }}
        >
          <InfoReadOnlyComponent info={building.info}></InfoReadOnlyComponent>

          <div>
            {building.tags.map((option: string, index: number) => (
              <Chip variant="outlined" label={option} key={index} />
            ))}
            <ErweiterungReadonlyComponent
              onlyImage
              erweiterung={building.erweiterung}
            ></ErweiterungReadonlyComponent>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Kraft: {building.kraft}</Typography>
            </Grid>
            {building.abkürzung && (
              <Grid item xs={12}>
                <Typography variant="h6">
                  Abkürzung: {building.abkürzung}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}></Grid>
          </Grid>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="space-between"
          gap={1}
          sx={{ width: "20%" }}
        >
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
      <KostenListeReadOnlyComponent
        labels={["Baukosten", "Braucht", "Bringt", "Differenz"]}
        kostenListe={[
          building.kosten,
          building.braucht,
          building.bringt.ertrag,
          diffKosten,
        ]}
      ></KostenListeReadOnlyComponent>
      <EffektListeReadonlyComponent
        effekte={building.bringt.effekte}
      ></EffektListeReadonlyComponent>
    </Box>
  );
};

export default BuildingReadonlyComponent;
