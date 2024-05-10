import React from "react";
import Effekt, { EffektType } from "../types/effekt";
import EffektComponent from "./effekt.component";
import Info from "../types/Info";
import { Box, Button } from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";

export interface EffektListeComponentProps {
  effekte: Effekt[];
  setEffekte: (effekte: Effekt[]) => void;
}

const EffektListeComponent: React.FC<EffektListeComponentProps> = ({
  effekte,
  setEffekte,
}) => {
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
          <EffektComponent
            effekt={effekt}
            setEffekt={(effekt: Effekt) => {
              let newEffekte = effekte.slice();
              newEffekte[index] = effekt;
              setEffekte(newEffekte);
            }}
          />

          <Button
            onClick={() => {
              let newEffekte = effekte.slice();
              newEffekte.splice(index, 1);
              setEffekte(newEffekte);
            }}
            startIcon={<RemoveCircle/>}
          >
            Entfernen
          </Button>
        </div>
      ))}
      <Button
        onClick={() => {
          let newEffekte = effekte.slice();
          newEffekte.push(new Effekt(new Info("", ""), EffektType.Sonstiger, undefined));
          setEffekte(newEffekte);
          
        }}
        
        startIcon={<AddCircle/>}
      >
        Neuen Effekt hinzufügen
      </Button>
    </Box>
  );
};

export default EffektListeComponent;
