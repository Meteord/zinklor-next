import React, { useState } from "react";
import {
  Select,
  MenuItem,
  ImageListItem,
  Typography,
  Box,
} from "@mui/material";
import Staatsform, { Staatsformtype } from "../types/staatsform";
import Info from "../types/Info";
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
      <Select value={staatsform.type} onChange={handleChange} fullWidth>
        {Object.values(Staatsformtype).map((form) => (
          <MenuItem key={form} value={form}>
            {form}
          </MenuItem>
        ))}
      </Select>

      <Box
        my={4}
        display="flex"
        flexDirection="row"
        alignItems="start"
        gap={2}
        sx={{ width: "100%" }}
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
          sx={{ width: "100%" }}
        >
          {st.staatsform.effects.map((info) => (
            <div key={info.name}>
              <Typography variant="h6">{info.name}</Typography>
              <Typography variant="body1">{info.beschreibung}</Typography>
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
      new Info("Wehrpflicht", "Einmal alle n Runden.."),
      new Info(
        "Toll ein anderer Machts",
        "König stirbt, andere Einheit wird es."
      ),
    ]),
  },
  {
    img: monarchie,
    title: "Monarchie",
    type: Staatsformtype.Monarchie,
    staatsform: new Staatsform(Staatsformtype.Monarchie, [
      new Info("Fetter Kine", "Fett am flexen"),
      new Info(
        "Krasse Ritter",
        "Yeah"
      ),
    ]),
  },
  {
    img: kalifat,
    title: "Kalifat",
    type: Staatsformtype.Kalifat,
    staatsform: new Staatsform(Staatsformtype.Kalifat, []),
  },
  {
    img: schreckensherrschaft,
    title: "Schreckensherrschaft",
    type: Staatsformtype.Schreckensherrschaft,
    staatsform: new Staatsform(Staatsformtype.Schreckensherrschaft, [
      new Info("Doppelte Produktion", "Doppelte Produktion.."),
      new Info(
        "Revolution",
        "Alle n Runden armee Platt"
      ),
      new Info(
        "Meuterei",
        "Wenn Gebäude zerstört, werden SW gespawnt."
      ),
    ]),
  },
  {
    img: merkantilismus,
    title: "Merkantilismus",
    type: Staatsformtype.Merkantilismus,
    staatsform: new Staatsform(Staatsformtype.Merkantilismus, []),
  },
  {
    img: einsmitdernatur,
    title: "Eins mit der Natur",
    type: Staatsformtype.EinsMitDerNatur,
    staatsform: new Staatsform(Staatsformtype.EinsMitDerNatur, []),
  },
  {
    img: faschismus,
    title: "Faschismus",
    type: Staatsformtype.Faschismus,
    staatsform: new Staatsform(Staatsformtype.Faschismus, []),
  },
  {
    img: kommunismus,
    title: "Kommunismus",
    type: Staatsformtype.Kommunismus,
    staatsform: new Staatsform(Staatsformtype.Kommunismus, []),
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
