import React, { useState } from "react";
import {
  Typography,
  Divider,
  Box,
  ImageListItem,
  TextField,
} from "@mui/material";
import Kosten from "../types/kosten";
import KostenComponent from "./costen.component";
import Info from "../types/Info";
import InfoComponent from "./info.component";
import { Einheit } from "../types/einheit";
import Transport from "../types/transport";
import Bewegung from "../types/bewergung";
import EffektListeComponent from "./effektliste.component";
import Effekt from "../types/effekt";
import TransportComponent from "./transport.component";
import BewegungComponent from "./bewegung.component";
import UnittagsComponent from "./unittags.component";
import { UnitTags } from "../types/tags";
const einheit_jpg = require("../data/unit/engel.jpg");

export interface EinheitComponentProps {
  einheit: Einheit;
  setEinheit: (einheit: Einheit) => void;
}

const EinheitComponent: React.FC<EinheitComponentProps> = ({
  einheit,
  setEinheit,
}: EinheitComponentProps) => {
  const [kosten, setKosten] = useState<Kosten>(einheit.kosten);
  const [info, setInfo] = useState<Info>(einheit.info);
  const [kraft, setKraft] = useState<number>(einheit.kraft);
  const [abkürzung, setAbkürzung] = useState<string | null>(einheit.abkürzung);
  const [effekte, setEffekte] = useState<Effekt[]>(einheit.effekte);
  const [transport, setTransport] = useState<Transport>(einheit.transport);
  const [bewegung, setBewegung] = useState<Bewegung>(einheit.bewegung);
  const [tags, setTags] = React.useState<UnitTags[]>(einheit.tags);

  const handleSubmit = (nextState?: Einheit) => {
    const einheit = nextState
      ? nextState
      : new Einheit(
          new Kosten(0, 0, 0, 0),
          new Info("", ""),
          "",
          new Bewegung(0, 0),
          0,
          [],
          [],
          new Transport(0, 0)
        );
    console.log("Submit: Einheit" + JSON.stringify(einheit));
    setEinheit(einheit);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      gap={1}
      sx={{ width: "100%" }}
    >
      <Typography variant="h6" component="h1" gutterBottom>
        Allgemeine Infos
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="space-between"
        gap={1}
        sx={{ width: "100%" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="space-between"
          gap={1}
          sx={{ width: "100%" }}
        >
          <InfoComponent
            info={info}
            labelBeschreibung="Beschreibung: Was kann der Diggi?"
            labelName="Wie heißt die Einheit?"
            setInfo={(info) => {
              setInfo(info);
              handleSubmit({ ...einheit, info: info });
            }}
          ></InfoComponent>
          <TextField
            label="Kraft"
            value={kraft}
            fullWidth
            onChange={(e) => {
              let kraft = parseInt(e.target.value);
              setKraft(kraft);
              handleSubmit({ ...einheit, kraft: kraft });
            }}
          />

          <TextField
            label="Abkürzung"
            value={abkürzung}
            fullWidth
            onChange={(e) => {
              setAbkürzung(e.target.value);
              handleSubmit({ ...einheit, abkürzung: e.target.value });
            }}
          />
        </Box>
        <ImageListItem>
          <img
            srcSet={`${einheit_jpg}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${einheit_jpg}?w=164&h=164&fit=crop&auto=format`}
            alt="default_building"
            loading="lazy"
          />
        </ImageListItem>
      </Box>
      <Divider></Divider>
      <Typography variant="h6" component="h1" gutterBottom>
        Transport
      </Typography>
      <TransportComponent
        transport={transport}
        setTransport={(transport) => {
          setTransport(transport);
          handleSubmit({ ...einheit, transport: transport });
        }}
      ></TransportComponent>
      <Divider></Divider>
      <Typography variant="h6" component="h1" gutterBottom>
        Bewegung
      </Typography>
      <BewegungComponent
        bewegung={bewegung}
        setBewegung={(bewegung) => {
          setBewegung(bewegung);
          handleSubmit({ ...einheit, bewegung: bewegung });
        }}
      ></BewegungComponent>

      <UnittagsComponent
        tags={tags}
        setTags={(tags) => {
          setTags(tags);
          handleSubmit({ ...einheit, tags: tags });
        }}
      ></UnittagsComponent>

      <Divider></Divider>
      <Typography variant="h6" component="h1" gutterBottom>
        Ausbildungskosten
      </Typography>
      <KostenComponent
        kosten={kosten}
        setKosten={(k) => {
          setKosten(k);
          handleSubmit({ ...einheit, kosten: k });
        }}
      ></KostenComponent>
      <Divider></Divider>
      <Typography variant="h6" component="h1" gutterBottom>
        Effekte
      </Typography>
      <EffektListeComponent
        effekte={effekte}
        setEffekte={(effekte) => {
          setEffekte(effekte);
          handleSubmit({ ...einheit, effekte: effekte });
        }}
      />
    </Box>
  );
};

export default EinheitComponent;
