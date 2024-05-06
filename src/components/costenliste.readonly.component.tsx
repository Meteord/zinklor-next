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
                {Array(calculateMultipla(kosten.holz))
                  .fill(null)
                  .map((_, index) => (
                    <NatureIcon key={index} />
                  ))}
                {kosten.holz}
              </TableCell>
              <TableCell>
                {Array(calculateMultipla(kosten.gold))
                  .fill(null)
                  .map((_, index) => (
                    <MonetizationOnIcon key={index} />
                  ))}
                {kosten.gold}
              </TableCell>
              <TableCell>
                {Array(calculateMultipla(kosten.stein))
                  .fill(null)
                  .map((_, index) => (
                    <ApartmentIcon key={index} />
                  ))}
                {kosten.stein}
              </TableCell>
              <TableCell>
                {Array(calculateMultipla(kosten.magie))
                  .fill(null)
                  .map((_, index) => (
                    <AutoFixHighIcon key={index} />
                  ))}
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
