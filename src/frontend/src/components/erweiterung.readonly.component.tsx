import React from "react";
import {Typography, Box, Avatar, Chip } from "@mui/material";
import Info from "../types/Info";
import { Erweiterung, ErweiterungType } from "../types/erweiterung";
const wasser = require("../data/erweiterung/wasser.jpg");
const magie = require("../data/erweiterung/magie.jpg");
const eis = require("../data/erweiterung/eis.jpg");
const oben = require("../data/erweiterung/oben.jpg");

interface ErweiterungReadonlyComponentProps {
  erweiterung: ErweiterungType;
  onlyImage: boolean;
}

const ErweiterungReadonlyComponent: React.FC<
  ErweiterungReadonlyComponentProps
> = ({ erweiterung, onlyImage }) => {
  const er = getErweiterungsObject(erweiterung);
  return (
    <div>
      <Box
        my={4}
        display="flex"
        flexDirection="row"
        alignItems="start"
        gap={2}
        sx={{ width: "50%" }}
      >
        <Chip
          avatar={<Avatar src={er.img} alt={er.title}/>}
          label={er.title}
        />

        {!onlyImage && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            gap={2}
            sx={{ width: "100%" }}
          >
            <div>
              <Typography variant="h6">{er.erweiterung.info.name}</Typography>
              <Typography variant="body1">
                {er.erweiterung.info.beschreibung}
              </Typography>
            </div>
          </Box>
        )}
      </Box>
    </div>
  );
};

interface ErweiterungObject {
  img: string;
  title: string;
  type: ErweiterungType;
  erweiterung: Erweiterung;
}

const erweiterungen: ErweiterungObject[] = [
  {
    img: wasser,
    title: "Wasser",
    type: ErweiterungType.Wasser,
    erweiterung: new Erweiterung(
      ErweiterungType.Wasser,
      new Info("Wasser", "Wasser ist nass")
    ),
  },
  {
    img: magie,
    title: "Magie",
    type: ErweiterungType.Magie,
    erweiterung: new Erweiterung(
      ErweiterungType.Magie,
      new Info("Magie", "Magie ist magisch")
    ),
  },
  {
    img: eis,
    title: "Eis",
    type: ErweiterungType.Eis,
    erweiterung: new Erweiterung(
      ErweiterungType.Eis,
      new Info("Eis", "Eis ist glatt")
    ),
  },
  {
    img: oben,
    title: "Oben",
    type: ErweiterungType.Oben,
    erweiterung: new Erweiterung(
      ErweiterungType.Oben,
      new Info("Oben", "Oben ist maschinig")
    ),
  },
  {
    img: oben,
    title: "Sand",
    type: ErweiterungType.Sand,
    erweiterung: new Erweiterung(
      ErweiterungType.Sand,
      new Info("Sand", "Sand ist sandig")
    ),
  },
  {
    img: oben,
    title: "Orks",
    type: ErweiterungType.Orks,
    erweiterung: new Erweiterung(
      ErweiterungType.Oben,
      new Info("Orks", "Orks sind orkig")
    ),
  },
  {
    img: oben,
    title: "Mitte",
    type: ErweiterungType.Mitte,
    erweiterung: new Erweiterung(
      ErweiterungType.Mitte,
      new Info("Mitte", "Mitte ist mittig")
    ),
  },
  {
    img: oben,
    title: "Zwerg2",
    type: ErweiterungType.Zwerge1,
    erweiterung: new Erweiterung(
      ErweiterungType.Zwerge1,
      new Info("Zwerge1", "Zwerg1 sind zwergig")
    ),
  },
  {
    img: oben,
    title: "Zwerg1",
    type: ErweiterungType.Zwerge2,
    erweiterung: new Erweiterung(
      ErweiterungType.Zwerge2,
      new Info("Zwerge2", "Zwerge2 sind zwergig")
    ),
  },
];

const getErweiterungsObject = (
  erweiterung: ErweiterungType
): ErweiterungObject => {
  let result = erweiterungen.find(
    (form) => form.type === erweiterung
  ) as ErweiterungObject;
  if (result === undefined) {
    return erweiterungen[0];
  } else {
    return result;
  }
};

export default ErweiterungReadonlyComponent;
