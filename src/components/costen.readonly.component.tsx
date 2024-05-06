import React from "react";
import { Typography, Grid } from "@mui/material";
import Kosten from "../types/kosten";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import NatureIcon from "@mui/icons-material/Nature";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

export interface KostenReadOnlyComponentProps {
  kosten: Kosten;
}

const KostenReadOnlyComponent: React.FC<KostenReadOnlyComponentProps> = ({
  kosten,
}) => {
  const calculateMultipla = (x: number) => {
    if (x < 100) return 1;
    else if (x < 300) return 2;
    else return 3;
  };
  return (
    <Grid container spacing={3}>
      <Grid item>
        {Array(calculateMultipla(kosten.holz))
          .fill(null)
          .map((_, index) => (
            <NatureIcon key={index} />
          ))}
        <Typography variant="h6">H: {kosten.holz}</Typography>
      </Grid>
      <Grid item>
        {Array(calculateMultipla(kosten.gold))
          .fill(null)
          .map((_, index) => (
            <MonetizationOnIcon key={index} />
          ))}
        <Typography variant="h6">G: {kosten.gold}</Typography>
      </Grid>
      <Grid item>
        {Array(calculateMultipla(kosten.stein))
          .fill(null)
          .map((_, index) => (
            <ApartmentIcon key={index} />
          ))}
        <Typography variant="h6">S: {kosten.stein}</Typography>
      </Grid>
      <Grid item>
        {Array(calculateMultipla(kosten.magie))
          .fill(null)
          .map((_, index) => (
            <AutoFixHighIcon key={index} />
          ))}
        <Typography variant="h6">M: {kosten.magie}</Typography>
      </Grid>
    </Grid>
  );
};

export default KostenReadOnlyComponent;
