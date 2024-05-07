import React, { useState } from "react";
import { TextField } from "@mui/material";
import Kosten from "../types/kosten";

export interface KostenComponentProps {
  kosten: Kosten;
  setKosten: (kosten: Kosten) => void;
}

const KostenComponent : React.FC<KostenComponentProps>= ({ kosten, setKosten }: KostenComponentProps) => {
  const [holz, setHolz] = useState<number>(kosten.holz);
  const [gold, setGold] = useState<number>(kosten.gold);
  const [stein, setStein] = useState<number>(kosten.stein);
  const [magie, setMagie] = useState<number>(kosten.magie);

  const handleSubmit = (kosten: Kosten) => {
    console.log("Submit: Kosten" + JSON.stringify(kosten));
    setKosten(kosten);
  };

  return (
    <div>
      <TextField
        label="Holz"
        value={holz}
        onChange={(e) => {
          let h = parseInt(e.target.value)
          setHolz(h);
          handleSubmit(new Kosten(h, gold, stein, magie));
        }}
      />
      <TextField
        label="Gold"
        value={gold}
        onChange={(e) => {
          let g = parseInt(e.target.value)
          setGold(g);
          handleSubmit(new Kosten(holz, g, stein, magie));
        }}
      />
      <TextField
        label="Stein"
        value={stein}
        onChange={(e) => {
          let s = parseInt(e.target.value)
          setStein(s);
          handleSubmit(new Kosten(holz, gold, s, magie));
        }}
      />
      <TextField
        label="Magie"
        value={magie}
        onChange={(e) => {
          let m= parseInt(e.target.value)
          setMagie(m);
          handleSubmit(new Kosten(holz, gold, stein, m));
        }}
      />
    </div>
  );
};

export default KostenComponent;
