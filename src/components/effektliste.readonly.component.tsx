import React from "react";
import Effekt from "../types/effekt";
import { Box } from "@mui/material";
import EffektReadonlyComponent from "./effekt.readonly.component";

export interface EffektListeReadonlyComponentProps {
  effekte: Effekt[];
}

const EffektListeReadonlyComponent: React.FC<
  EffektListeReadonlyComponentProps
> = ({ effekte }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="space-between"
      gap={2}
      my={3}
      mx={3}
      sx={{ width: "100%" }}
    >
      {effekte.map((effekt, index) => (
        <div>
          <EffektReadonlyComponent effekt={effekt} />
        </div>
      ))}
    </Box>
  );
};

export default EffektListeReadonlyComponent;
