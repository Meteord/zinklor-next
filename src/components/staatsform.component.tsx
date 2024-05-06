import React, { useState } from "react";
import { Select, MenuItem, ImageListItem } from "@mui/material";
import Staatsform from "../types/staatsform";
import { get } from "http";
const demokratie = require("../data/staatsform/demokratie.jpg");
const monarchie = require("../data/staatsform/monarchie.jpg");
const kalifat = require("../data/staatsform/kalifat.jpg");
const schreckensherrschaft = require("../data/staatsform/schreckensherrschaft.jpg");
const einsmitdernatur = require("../data/staatsform/einsmitdernatur.jpg");
const merkantilismus = require("../data/staatsform/merkantilismus.jpg");
const faschismus = require("../data/staatsform/faschismus.jpg");
const kommunismus = require("../data/staatsform/kommunismus.jpg");

interface StaatsformComponentProps {
  staatsform: Staatsform;
  setStaatsform: (staatsform: Staatsform) => void;
}

const StaatsformComponent: React.FC<StaatsformComponentProps> = ({
  staatsform,
  setStaatsform,
}) => {
  const [st, setSt] = useState<StaatsformObject>(
    getStaatsformObject(staatsform)
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let result = event.target.value as Staatsform;
    setSt(getStaatsformObject(result));
    setStaatsform(result);
  };

  return (
    <div>
      <Select value={staatsform} onChange={handleChange} fullWidth>
        {Object.values(Staatsform).map((form) => (
          <MenuItem key={form} value={form}>
            {form}
          </MenuItem>
        ))}
      </Select>

      <ImageListItem>
        <img
          srcSet={`${st.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={`${st.img}?w=164&h=164&fit=crop&auto=format`}
          alt={st.title}
          loading="lazy"
        />
      </ImageListItem>
    </div>
  );
};

interface StaatsformObject {
  img: string;
  title: string;
  staatsform: Staatsform;
}

const staatsformen: StaatsformObject[] = [
  {
    img: demokratie,
    title: "Demokratie",
    staatsform: Staatsform.Demokratie,
  },
  {
    img: monarchie,
    title: "Monarchie",
    staatsform: Staatsform.Monarchie,
  },
  {
    img: kalifat,
    title: "Kalifat",
    staatsform: Staatsform.Kalifat,
  },
  {
    img: schreckensherrschaft,
    title: "Schreckensherrschaft",
    staatsform: Staatsform.Schreckensherrschaft,
  },
  {
    img: merkantilismus,
    title: "Merkantilismus",
    staatsform: Staatsform.Merkantilismus,
  },
  {
    img: einsmitdernatur,
    title: "Eins mit der Natur",
    staatsform: Staatsform.EinsMitDerNatur,
  },
  {
    img: faschismus,
    title: "Faschismus",
    staatsform: Staatsform.Faschismus,
  },
  {
    img: kommunismus,
    title: "Kommunismus",
    staatsform: Staatsform.Kommunismus,
  },
];

const getStaatsformObject = (staatsform: Staatsform): StaatsformObject => {
  let result = staatsformen.find(
    (form) => form.staatsform === staatsform
  ) as StaatsformObject;
  if (result === undefined) {
    return staatsformen[0];
  } else {
    return result;
  }
};

export default StaatsformComponent;
