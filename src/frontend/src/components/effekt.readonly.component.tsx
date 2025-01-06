import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Effekt from "../types/effekt";
import InfoReadOnlyComponent from "./info.readonly.component";
import EffektTypeReadonlyComponent from "./effekttype.readonly.component";

export interface EffektReadonlyComponentProps {
  effekt: Effekt;
}

const EffektReadonlyComponent: React.FC<EffektReadonlyComponentProps> = ({
  effekt,
}) => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="start"
        gap={1}
        sx={{ width: "100%" }}
      >
        <EffektTypeReadonlyComponent type={effekt.type} />
        <InfoReadOnlyComponent info={effekt.info} />
      </Box>

      <Grid container spacing={2}>
        {effekt.radius && (
          <Grid item xs={12}>
            <Typography variant="h6">Radius: {effekt.radius} cm</Typography>
          </Grid>
        )}
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
};

export default EffektReadonlyComponent;
