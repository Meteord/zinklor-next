import React from "react";
import { Einheit } from "../types/einheit";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Collapse,
  Box,
  IconButton,
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
}
const Row: React.FC<Rowprop> = ({ einheit }: Rowprop) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th">{einheit.info.name}</TableCell>
        <TableCell align="right">{einheit.abkürzung}</TableCell>
        <TableCell align="right" scope="row">
          {printKosten(einheit.kosten)}
        </TableCell>
        <TableCell align="right">{printBewegung(einheit.bewegung)}</TableCell>
        <TableCell align="right">{einheit.kraft}</TableCell>
        <TableCell align="right">{einheit.tags.join(", ")}</TableCell>
        <TableCell align="right">{printEffekte(einheit.effekte)}</TableCell>
        <TableCell align="right">{printTransport(einheit.transport)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <EinheitReadonlyComponent
                einheit={einheit}
              ></EinheitReadonlyComponent>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
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
    <div>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="ultimateTable">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Abkürzung</TableCell>
              <TableCell align="right">Kosten</TableCell>
              <TableCell align="right">Bewegung</TableCell>
              <TableCell align="right">Kraft</TableCell>
              <TableCell align="right">Tags</TableCell>
              <TableCell align="right">Effekte</TableCell>
              <TableCell align="right">Transport</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {einheiten.map((einheit) => (
              <Row key={einheit.info.name} einheit={einheit} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EinheitTable;
