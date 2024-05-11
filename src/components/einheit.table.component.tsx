import React from "react";
import { Einheit } from "../types/einheit";
import {
  Collapse,
  IconButton,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EinheitReadonlyComponent from "./einheit.readonly.component";
import Kosten from "../types/kosten";
import Bewegung from "../types/bewergung";
import Transport from "../types/transport";
import Effekt from "../types/effekt";

export interface Rowprop {
  einheit: Einheit;
}

const printKosten = (kosten: Kosten): string => {
  let transformed = [
    { name: `H: ${kosten.holz}`, value: kosten.holz },
    { name: `G: ${kosten.gold}`, value: kosten.gold },
    { name: `S: ${kosten.stein}`, value: kosten.stein },
    { name: `M: ${kosten.magie}`, value: kosten.magie },
  ];
  return transformed
    .filter((x) => x.value !== 0)
    .map((x) => x.name)
    .join(", ");
};

const printBewegung = (bewegung: Bewegung): string => {
  return `${bewegung.wege} / ${bewegung.cm} cm`;
};

const printTransport = (transport: Transport): string => {
  return `${transport.einheiten}E / ${transport.rohstoffe} `;
};
const printEffekte = (effekte: Effekt[]): string => {
  return effekte.map((effekt) => effekt.info.name).join(", ");
};
const EinheitenCard: React.FC<Rowprop> = ({ einheit }: Rowprop) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>

          <Typography variant="h6" component="div">
            {einheit.info.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Abkürzung: {einheit.abkürzung}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Kosten: {printKosten(einheit.kosten)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Kraft: {einheit.kraft}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tags: {einheit.tags.join(", ")}
          </Typography>
        </CardContent>
        <CardActions>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <EinheitReadonlyComponent einheit={einheit} />
          </Collapse>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};
export interface EinheitTableProps {
  einheiten: Einheit[];
}
const EinheitTable: React.FC<EinheitTableProps> = ({
  einheiten,
}: EinheitTableProps) => {
  return (
    <Grid container spacing={2}>
      {einheiten.map((einheit) => (
        <Grid item xs={12} sm={6} md={4} key={einheit.info.name}>
          <EinheitenCard einheit={einheit} key={einheit.info.name}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default EinheitTable;
