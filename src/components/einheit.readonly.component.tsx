import React from "react";
import {
  Typography,
  Divider,
  Box,
  ImageListItem,
  Chip,
  Grid,
} from "@mui/material";
import InfoReadOnlyComponent from "./info.readonly.component";
import KostenListeReadOnlyComponent from "./costenliste.readonly.component";
import EffektListeReadonlyComponent from "./effektliste.readonly.component";
import { Einheit } from "../types/einheit";
import Transport from "../types/transport";
import Bewegung from "../types/bewergung";
export interface EinheitReadonlyComponentProps {
  einheit: Einheit;
  useDefaultImage?: boolean;
}

const printBewegung = (bewegung: Bewegung): string => {
  return `${bewegung.wege} / ${bewegung.cm} cm`;
};

const printTransport = (transport: Transport): string => {
  return `${transport.einheiten}E / ${transport.rohstoffe} `;
};

const EinheitReadonlyComponent: React.FC<EinheitReadonlyComponentProps> = ({
  einheit,
  useDefaultImage = false,
}: EinheitReadonlyComponentProps) => {
  const einheit_jpg = useDefaultImage
    ? require(`../data/unit/default.jpg`)
    : require(`../data/unit/${einheit.info.name}.jpg`);
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
          <InfoReadOnlyComponent info={einheit.info}></InfoReadOnlyComponent>

          <div>
            {einheit.tags.map((option: string, index: number) => (
              <Chip variant="outlined" label={option} key={index} />
            ))}
          </div>
          <Grid container spacing={2}>
            {einheit.abkürzung && (
              <Grid item xs={12}>
                <Typography variant="h6">
                  Abkürzung: {einheit.abkürzung}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Typography variant="h6">Kraft: {einheit.kraft}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                Bewegung: {printBewegung(einheit.bewegung)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                Transport: {printTransport(einheit.transport)}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <ImageListItem>
          <img
            srcSet={`${einheit_jpg}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${einheit_jpg}?w=164&h=164&fit=crop&auto=format`}
            alt="default_building"
            loading="lazy"
          />
        </ImageListItem>
      </Box>

      <Divider></Divider>
      <KostenListeReadOnlyComponent
        labels={["Baukosten", "Braucht", "Bringt", "Differenz"]}
        kostenListe={[einheit.kosten]}
      ></KostenListeReadOnlyComponent>
      <EffektListeReadonlyComponent
        effekte={einheit.effekte}
      ></EffektListeReadonlyComponent>
    </Box>
  );
};

export default EinheitReadonlyComponent;
