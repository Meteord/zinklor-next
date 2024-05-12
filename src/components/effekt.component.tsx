import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import Info from "../types/Info";
import Effekt, { EffektType } from "../types/effekt";
import InfoComponent from "./info.component";
import EffektTypeComponent from "./effekttype.component";

export interface EffektComponentProps {
  effekt: Effekt;
  setEffekt: (effekt: Effekt) => void;
}

const EffektComponent: React.FC<EffektComponentProps> = ({
  effekt,
  setEffekt,
}) => {
  const [radius, setRadius] = useState<number | undefined>(effekt.radius);
  const [type, setType] = useState<EffektType>(effekt.type);
  const [info, setInfo] = useState<Info>(effekt.info);
  return (
    <div>
      <Box display="flex" flexDirection="column">
        <EffektTypeComponent
          type={type}
          setEffektType={(type) => {
            setType(type);
            setEffekt(new Effekt(info, type, radius));
          }}
        ></EffektTypeComponent>
        <InfoComponent
          info={effekt.info}
          setInfo={(info: Info) => {
            setInfo(info);
            setEffekt(new Effekt(info, type, radius));
          }}
        />
        <TextField
          label="Radius"
          value={radius}
          size="small"
          onChange={(e) => {
            let r = parseInt(e.target.value);
            setRadius(r);
            setEffekt(new Effekt(info, type, r));
          }}
        />
      </Box>
    </div>
  );
};

export default EffektComponent;
