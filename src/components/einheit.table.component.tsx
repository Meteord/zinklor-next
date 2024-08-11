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
import AddIcon from "@mui/icons-material/Add";
import EinheitReadonlyComponent from "./einheit.readonly.component";
import Kosten from "../types/kosten";
import Bewegung from "../types/bewergung";
import Transport from "../types/transport";
import Effekt from "../types/effekt";

export interface Rowprop {
  einheit: Einheit;
  onSelect?: (einheit: Einheit) => void;
  selectable: boolean;
}

const printKosten = (kosten: Kosten): string => {
  let transformed = [
    { name: `${kosten.gold}G`, value: kosten.gold },
    { name: `${kosten.holz}H`, value: kosten.holz },
    { name: `${kosten.stein}S`, value: kosten.stein },
    { name: `${kosten.magie}M`, value: kosten.magie },
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
const EinheitenCard: React.FC<Rowprop> = ({
  einheit,
  onSelect,
  selectable,
}: Rowprop) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Card>
        <CardActions>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {selectable && (
            <IconButton
              aria-label="select unit"
              size="small"
              onClick={() => onSelect(einheit)}
            >
              {<AddIcon />}
            </IconButton>
          )}
        </CardActions>
        <CardContent>
          <Typography variant="h6" component="div">
            {einheit.info.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {einheit.abkürzung}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {printKosten(einheit.kosten)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {einheit.kraft}K
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
  selectable?: boolean;
  onSelect?: (einheit: Einheit) => void;
}
const EinheitTable: React.FC<EinheitTableProps> = ({
  einheiten,
  onSelect,
  selectable,
}: EinheitTableProps) => {
  return (
    <Grid container spacing={2}>
      {einheiten.map((einheit) => (
        <Grid item xs={12} sm={6} md={4} key={einheit.info.name}>
          <EinheitenCard
            einheit={einheit}
            key={einheit.info.name}
            selectable={selectable ? selectable : false}
            onSelect={onSelect}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default EinheitTable;
