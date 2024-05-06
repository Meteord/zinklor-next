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

  const handleSubmit = () => {
    const kosten = new Kosten(holz, gold, stein, magie);
    console.log("Submit: Kosten" + JSON.stringify(kosten));
    setKosten(kosten);
  };

  return (
    <div>
      <TextField
        label="Holz"
        value={holz}
        onChange={(e) => {
          setHolz(Number(e.target.value));
          handleSubmit();
        }}
      />
      <TextField
        label="Gold"
        value={gold}
        onChange={(e) => {
          setGold(Number(e.target.value));
          handleSubmit();
        }}
      />
      <TextField
        label="Stein"
        value={stein}
        onChange={(e) => {
          setStein(Number(e.target.value));
          handleSubmit();
        }}
      />
      <TextField
        label="Magie"
        value={magie}
        onChange={(e) => {
          setMagie(Number(e.target.value));
          handleSubmit();
        }}
      />
    </div>
  );
};

export default KostenComponent;
