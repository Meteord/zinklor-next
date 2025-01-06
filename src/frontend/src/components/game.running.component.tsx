import {
  Box,
  ImageListItem,
  ButtonGroup,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import KostenListeReadOnlyComponent from "./costenliste.readonly.component";
import InfoReadOnlyComponent from "./info.readonly.component";
import { GameState } from "../types/gamestate";
import AddIcon from "@mui/icons-material/Add";
import AddunitDialogComponent from "./addunit.dialog.component";
import { Einheit } from "../types/einheit";
import Kosten from "../types/kosten";
import EinheitArmyComponent from "./einheit.army.component";

interface GameRunningComponentProps {
  state: GameState;
  setState: React.Dispatch<React.SetStateAction<GameState>>;
}

const GameRunningComponent: React.FC<GameRunningComponentProps> = ({
  state,
  setState,
}: GameRunningComponentProps) => {
  const diffKosten = state.einkommen.diff(state.ausgaben);

  const [addUnitOpen, setAddUnitOpen] = useState(false);
  const [addBuildingOpen, setAddBuildingOpen] = useState(false);

  const allUnits: Einheit[] = [...state.einheiten, state.könig];
  function handleAddUnit(event: any): void {
    setAddUnitOpen(true);
  }

  function handleAddBuilding(event: any): void {
    setAddBuildingOpen(true);
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      gap={1}
      flexWrap={"wrap"}
      sx={{ width: "90%" }}
    >
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
          sx={{ width: "90%" }}
        >
          <InfoReadOnlyComponent info={state.info}></InfoReadOnlyComponent>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="space-between"
          gap={1}
          sx={{ width: "100%" }}
        >
          {state.könig && (
            <ImageListItem>
              <img
                srcSet={`${require("../data/unit/" +
                  state.könig.info.name +
                  ".jpg")}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${require("../data/unit/" +
                  state.könig.info.name +
                  ".jpg")}?w=164&h=164&fit=crop&auto=format`}
                alt="default_building"
                loading="lazy"
              />
            </ImageListItem>
          )}
        </Box>
      </Box>

      <KostenListeReadOnlyComponent
        labels={["Kapital", "Einkommen", "Ausgaben", "Differenz"]}
        kostenListe={[
          state.kosten,
          state.einkommen,
          state.ausgaben,
          diffKosten,
        ]}
      ></KostenListeReadOnlyComponent>

      <ButtonGroup variant="outlined" aria-label="Basic button group" fullWidth>
        <Button onClick={handleAddUnit} startIcon={<AddIcon />}>
          Einheit
        </Button>
        <Button onClick={handleAddBuilding} startIcon={<AddIcon />}>
          Gebäude
        </Button>
        <Button startIcon={<AddIcon />}>Zauber wirken</Button>
      </ButtonGroup>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h5">Einheiten</Typography>
      </Box>
      <EinheitArmyComponent
        einheiten={allUnits}
        setEinheiten={(einheiten: Einheit[]): void => {
          setState((st: GameState) => ({ ...st, einheiten: einheiten }));
        }}
      ></EinheitArmyComponent>

      <AddunitDialogComponent
        open={addUnitOpen}
        setOpen={setAddUnitOpen}
        kosten={state.kosten}
        setKostenAndUnits={(kosten: Kosten, einheiten: Einheit[]): void => {
          setState((st: GameState) => ({
            ...st,
            kosten: kosten,
            einheiten: [...st.einheiten, ...einheiten],
          }));
        }}
      ></AddunitDialogComponent>
    </Box>
  );
};

export default GameRunningComponent;
