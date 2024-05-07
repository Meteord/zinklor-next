import Kosten from "../types/kosten";
import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import NatureIcon from "@mui/icons-material/Nature";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export interface KostenListeReadOnlyComponentProps {
  kostenListe: Kosten[];
  labels: string[];
}

const KostenListeReadOnlyComponent: React.FC<
  KostenListeReadOnlyComponentProps
> = ({ kostenListe, labels }) => {
  const calculateMultipla = (x: number) => {
    if (x < 100) return 0;
    else if (x < 300) return 1;
    else return 2;
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Holz</TableCell>
            <TableCell>Gold</TableCell>
            <TableCell>Stein</TableCell>
            <TableCell>Magie</TableCell>
            {/* Add more table cells for other properties */}
          </TableRow>
        </TableHead>
        <TableBody>
          {kostenListe.map((kosten, index) => (
            <TableRow key={index}>
              <TableCell>{labels[index]}</TableCell>
              <TableCell>
                {kosten.holz}
              </TableCell>
              <TableCell>
                {kosten.gold}
              </TableCell>
              <TableCell>
                {kosten.stein}
              </TableCell>
              <TableCell>
                {kosten.magie}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default KostenListeReadOnlyComponent;
