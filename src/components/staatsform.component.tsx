import React, { useState } from "react";
import {
  Select,
  MenuItem,
  ImageListItem,
  Box,
  Avatar,
  Chip,
} from "@mui/material";
import Staatsform, { Staatsformtype } from "../types/staatsform";
import Info from "../types/Info";
import InfoReadOnlyComponent from "./info.readonly.component";
const demokratie = require("../data/staatsform/demokratie.jpg");
const monarchie = require("../data/staatsform/monarchie.jpg");
const kalifat = require("../data/staatsform/kalifat.jpg");
const schreckensherrschaft = require("../data/staatsform/schreckensherrschaft.jpg");
const einsmitdernatur = require("../data/staatsform/einsmitdernatur.jpg");
const merkantilismus = require("../data/staatsform/merkantilismus.jpg");
const faschismus = require("../data/staatsform/faschismus.jpg");
const kommunismus = require("../data/staatsform/kommunismus.jpg");
const kolionalherrschaft = require("../data/staatsform/kolonialherrschaft.jpg");

interface StaatsformComponentProps {
  staatsform: Staatsform;
  setStaatsform: (staatsform: Staatsform) => void;
}

const StaatsformComponent: React.FC<StaatsformComponentProps> = ({
  staatsform,
  setStaatsform,
}) => {
  const [st, setSt] = useState<StaatsformObject>(
    getStaatsformObject(staatsform.type)
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let result = event.target.value as Staatsformtype;
    let int_result = getStaatsformObject(result);
    setSt(int_result);
    setStaatsform(int_result.staatsform);
  };

  return (
    <div>
      <Select value={staatsform.type} onChange={handleChange}>
        {staatsformen.map((form) => (
          <MenuItem key={form.type} value={form.type}>
            <Chip avatar={<Avatar src={form.img} />} label={form.title} />
          </MenuItem>
        ))}
      </Select>

      <Box
        my={4}
        display="flex"
        flexDirection="row"
        alignItems="start"
        gap={2}
        sx={{ width: "95%" }}
      >
        <ImageListItem>
          <img
            srcSet={`${st.img}?w=250&h=250&fit=crop&auto=format&dpr=2 2x`}
            src={`${st.img}?w=250&h=250&fit=crop&auto=format`}
            alt={st.title}
            loading="lazy"
          />
        </ImageListItem>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          gap={2}
          sx={{ width: "50%", maxWidth: "50%" }}
        >
          {st.staatsform.effects.map((info) => (
            <div key={info.name}>
              <InfoReadOnlyComponent info={info}></InfoReadOnlyComponent>
            </div>
          ))}
        </Box>
      </Box>
    </div>
  );
};

interface StaatsformObject {
  img: string;
  title: string;
  type: Staatsformtype;
  staatsform: Staatsform;
}

const staatsformen: StaatsformObject[] = [
  {
    img: demokratie,
    title: "Demokratie",
    type: Staatsformtype.Demokratie,
    staatsform: new Staatsform(Staatsformtype.Demokratie, [
      new Info(
        "Neuwahlen",
        "Wenn der König stirbt kann man eine andere E zum König bestimmen (egal welche, muss deine sein)"
      ),
      new Info(
        "Wehrpflicht",
        "Für 2R kann man alle 5R zwei Sw pro Gebäude an deine Seite rufen (in 5cm Umkreis zu einer E"
      ),
    ]),
  },
  {
    img: monarchie,
    title: "Monarchie",
    type: Staatsformtype.Monarchie,
    staatsform: new Staatsform(Staatsformtype.Monarchie, [
      new Info("Krasse Ritter", "Alle Reiter +100K"),
      new Info("Leibgarde", "König (Herrscher) hat doppelt so viel Kraft"),
    ]),
  },
  {
    img: kalifat,
    title: "Kalifat",
    type: Staatsformtype.Kalifat,
    staatsform: new Staatsform(Staatsformtype.Kalifat, [
      new Info("Guter Draht nach Oben", "50M pro Runde (Alle 5R +50M/R)"),
      new Info("Barrierenbruch", "Alle 5R, 1R Magie wirken, trotz Magietürmen"),
      new Info("Gesandter Gottes", "Start mit Hohenpriester statt König"),
    ]),
  },
  {
    img: schreckensherrschaft,
    title: "Schreckensherrschaft",
    type: Staatsformtype.Schreckensherrschaft,
    staatsform: new Staatsform(Staatsformtype.Schreckensherrschaft, [
      new Info("Schinderei", "alle Einnahmen verdoppeln sich"),
      new Info(
        "Rebellion",
        "alle 10R wird Armee halbiert, bei Ungerade wird Kraft halbiert"
      ),
      new Info(
        "Überläufer",
        "Für jedes vom Feind zerstörte Gebäude: -Rohstoffgebäude: Gegner bekommt pro Rohstoffgebäude 2 Sw -Militärgebäude: Gegner bekomm	"
      ),
    ]),
  },
  {
    img: merkantilismus,
    title: "Merkantilismus",
    type: Staatsformtype.Merkantilismus,
    staatsform: new Staatsform(Staatsformtype.Merkantilismus, [
      new Info(
        "Just-in-time",
        "Transport nicht mehr verfügbar, alles wird sofort geliefert (in 10cm Umkreis zu einer E)"
      ),
      new Info("Baukunst", "alle Gebäude +100K, +10K die R heilen"),
    ]),
  },
  {
    img: einsmitdernatur,
    title: "Eins mit der Natur",
    type: Staatsformtype.EinsMitDerNatur,
    staatsform: new Staatsform(Staatsformtype.EinsMitDerNatur, [
      new Info(
        "Guerrillakampf",
        "Jede E (außer König) ist unsichtbar, solange sie sich nicht bewegt. Bei Nahkampf +40K Überraschungsschaden (2cm)"
      ),
    ]),
  },
  {
    img: faschismus,
    title: "Faschismus",
    type: Staatsformtype.Faschismus,
    staatsform: new Staatsform(Staatsformtype.Faschismus, [
      new Info(
        "Rassismus",
        "keine E außerhalb der Starterweiterung können ausgebildet werden"
      ),
      new Info("Blitzkrieg", " Alle E +5 / 10cm Bewegung"),
      new Info(
        "Zwangsarbeit",
        "Pro 5 getötete E +100G (nur innerhalb einer Schlacht anwendbar"
      ),
    ]),
  },
  {
    img: kommunismus,
    title: "Kommunismus",
    type: Staatsformtype.Kommunismus,
    staatsform: new Staatsform(Staatsformtype.Kommunismus, [
      new Info("Solidarität", "Gebäude haben keine Betriebskosten"),
      new Info(
        "Ostalgie",
        "Alle 2R kostenloses Mauerstück in 5cm Umkreis zu E, eigene E können Mauer nicht passieren, verlieren jedoch auch keine Kraft beim zerstören"
      ),
      new Info("Sozialversicherung", "Alle E heilen +20K/R"),
    ]),
  },
  {
    img: kolionalherrschaft,
    title: "Kolonialherrschaft",
    type: Staatsformtype.Kolonialherrschaft,
    staatsform: new Staatsform(Staatsformtype.Kolonialherrschaft, [
      new Info("Handelskontor", "Man hat seit Anfang 2 HHS"),
      new Info(
        "Kolonialpolitik",
        "Für jedes neu aufgebaute Gebäude +100G; Gebäude +50K"
      ),
      new Info("Handelsautomatisierung", "Jede E doppelt soviel Transport"),
    ]),
  },
];

const getStaatsformObject = (staatsform: Staatsformtype): StaatsformObject => {
  let result = staatsformen.find(
    (form) => form.type === staatsform
  ) as StaatsformObject;
  if (result === undefined) {
    return staatsformen[0];
  } else {
    return result;
  }
};

export default StaatsformComponent;
