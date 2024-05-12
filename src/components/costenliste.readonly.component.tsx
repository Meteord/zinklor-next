import Kosten from "../types/kosten";
import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Grid,
} from "@mui/material";

export interface KostenListeReadOnlyComponentProps {
  kostenListe: Kosten[];
  labels: string[];
}

const KostenListeReadOnlyComponent: React.FC<
  KostenListeReadOnlyComponentProps
> = ({ kostenListe, labels }) => {

  return (
    <Grid container spacing={2}>
      {kostenListe.map((kosten, index) => (
        <Grid item xs={12} key={index}>
          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                {labels[index]}
              </Grid>
              <Grid item xs={3}>
                {kosten.gold !== 0 ? kosten.gold + "G" : ""}
              </Grid>
              <Grid item xs={3}>
                {kosten.holz !== 0 ? kosten.holz + "H" : ""}
              </Grid>
              <Grid item xs={3}>
                {kosten.stein !== 0 ? kosten.stein + "S" : ""}
              </Grid>
              <Grid item xs={3}>
                {kosten.magie !== 0 ? kosten.magie + "M" : ""}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KostenListeReadOnlyComponent;
