import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import Kosten from "../types/kosten";
import Bringt from "../types/bringt";
import KostenComponent from "./costen.component";
import Effekt from "../types/effekt";
import EffektListeComponent from "./effektliste.component";

export interface BringtComponentProps {
  bringt: Bringt;
  setBringt: (bringt: Bringt) => void;
}

const BringtComponent: React.FC<BringtComponentProps> = ({
  bringt,
  setBringt,
}: BringtComponentProps) => {
  const [effekte, setEffekte] = useState<Effekt[]>(bringt.effekte);
  const [ertrag, setErtrag] = useState<Kosten>(bringt.ertrag);

  return (
    <div>
      <KostenComponent
        kosten={ertrag}
        setKosten={(kosten) => {
          setErtrag(kosten);
          setBringt(new Bringt(effekte, kosten));
        }}
      />
      <Typography variant="h6" component="h1" gutterBottom>
        Effekte
      </Typography>
      <EffektListeComponent
        effekte={effekte}
        setEffekte={(effekte) => {
          setEffekte(effekte);
          setBringt(new Bringt(effekte, ertrag));
        }}
      />
    </div>
  );
};

export default BringtComponent;
