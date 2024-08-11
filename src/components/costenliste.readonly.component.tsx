import Kosten from "../types/kosten";
import React from "react";
import { Paper, Grid } from "@mui/material";

export interface KostenListeReadOnlyComponentProps {
  kostenListe: Kosten[];
  labels: string[];
  children?: React.ReactNode;
}

const KostenListeReadOnlyComponent: React.FC<
  KostenListeReadOnlyComponentProps
> = ({ kostenListe, labels, children }) => {
  return (
    <Grid container spacing={2}>
      {kostenListe.map((kosten, index) => (
        <Grid item xs={12} key={index}>
          <Paper>
            <Grid container xs={12} spacing={0}>
              <Grid item xs={2}>
                {labels[index]}
              </Grid>
              <Grid item xs={2}>
                <span style={{ color: kosten.gold < 0 ? "red" : "inherit" }}>
                  {kosten.gold !== 0 ? kosten.gold + "G" : ""}
                </span>
              </Grid>
              <Grid item xs={2}>
                <span style={{ color: kosten.holz < 0 ? "red" : "inherit" }}>
                  {kosten.holz !== 0 ? kosten.holz + "H" : ""}
                </span>
              </Grid>
              <Grid item xs={2}>
                <span style={{ color: kosten.stein < 0 ? "red" : "inherit" }}>
                  {kosten.stein !== 0 ? kosten.stein + "S" : ""}
                </span>
              </Grid>
              <Grid item xs={2}>
                <span style={{ color: kosten.magie < 0 ? "red" : "inherit" }}>
                  {kosten.magie !== 0 ? kosten.magie + "M" : ""}
                </span>
              </Grid>

              {children && (
                <Grid item xs={1}>
                  {children}
                </Grid>
              )}
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KostenListeReadOnlyComponent;