import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import Info from "../types/Info";

export interface InfoReadOnlyProps {
  info: Info;
}

const InfoReadOnly: React.FC<InfoReadOnlyProps> = ({ info }) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <TitleIcon />
            <Typography variant="h6">Name: {info.name}</Typography>
          </Grid>
          <Grid item>
            <DescriptionIcon />
            <Typography variant="h6">Beschreibung: {info.beschreibung}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InfoReadOnly;