import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import Info from "../types/Info";

export interface InfoReadOnlyComponentProps {
  info: Info;
}

const InfoReadOnlyComponent: React.FC<InfoReadOnlyComponentProps> = ({
  info
}) => {
  return (
    <div>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h4">{info.name}</Typography>
            <Typography variant="h6"> {info.beschreibung}
            </Typography>
          </Grid>
        </Grid>
    </div>
  );
};

export default InfoReadOnlyComponent;
