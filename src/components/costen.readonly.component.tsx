import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import Kosten from "../types/kosten";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NatureIcon from '@mui/icons-material/Nature';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

export interface KostenReadOnlyProps {
  kosten: Kosten;
}

const KostenReadOnly: React.FC<KostenReadOnlyProps> = ({ kosten }) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <NatureIcon />
            <Typography variant="h6">Holz: {kosten.holz}</Typography>
          </Grid>
          <Grid item>
            <MonetizationOnIcon />
            <Typography variant="h6">Gold: {kosten.gold}</Typography>
          </Grid>
          <Grid item>
            <ApartmentIcon />
            <Typography variant="h6">Stein: {kosten.stein}</Typography>
          </Grid>
          <Grid item>
            <AutoFixHighIcon />
            <Typography variant="h6">Magie: {kosten.magie}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default KostenReadOnly;