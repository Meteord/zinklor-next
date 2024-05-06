import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Kosten from "../types/kosten";
import Bringt from "../types/bringt";
import KostenComponent from "./costen.component";

export interface BringtComponentProps {
  bringt: Bringt;
  setBringt: (bringt: Bringt) => void;
}

const BringtComponent : React.FC<BringtComponentProps>= ({ bringt, setBringt }: BringtComponentProps) => {
  const [beschreibung, setBeschreibung] = useState<string>(bringt.beschreibung);
  const [ertrag, setErtrag] = useState<Kosten>(bringt.ertrag);

  const handleSubmit = () => {
    let br = new Bringt(beschreibung, ertrag);
    console.log("Submit: Bringt" + JSON.stringify(br));
    setBringt(br);
  };

  return (
    <div>
      <KostenComponent kosten={ertrag} setKosten={(kosten) => {setErtrag(kosten); handleSubmit()}} />
      <TextField
        label="Bringt folgende Dinge:"
        value={beschreibung}
        fullWidth
        multiline
        minRows={6}
        onChange={(e) => {
          setBeschreibung(e.target.value);
          handleSubmit();
        }}
      />
    </div>
  );
};

export default BringtComponent;
