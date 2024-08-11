import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
} from "@mui/material";
import Kosten from "../types/kosten";
import { Einheit } from "../types/einheit";
import { fetchUnits } from "../data/unit/fetchUnits";
import EinheitTable from "./einheit.table.component";
import KostenListeReadOnlyComponent from "./costenliste.readonly.component";

export interface AddunitDialogComponentProps {
  open: boolean;
  setOpen(open: boolean): void;
  kosten: Kosten;
  addUnits: (einheiten: Einheit[]) => void;
  setKosten: (kosten: Kosten) => void;
}

const AddunitDialogComponent: React.FC<AddunitDialogComponentProps> = ({
  open,
  setOpen,
  kosten,
  addUnits,
  setKosten,
}: AddunitDialogComponentProps) => {
  const [einheiten, setEinheiten] = useState<Einheit[]>([]);

  const [gekaufteEinheiten, setGekaufteEinheiten] = useState<Einheit[]>([]);

  interface EinheitenUebersicht {
    [abkürzung: string]: {
      anzahl: number;
      kosten: Kosten;
    };
  }

  const einheitenUebersicht: EinheitenUebersicht = gekaufteEinheiten.reduce(
    (acc: EinheitenUebersicht, einheit: Einheit) => {
      if (acc[einheit.abkürzung]) {
        acc[einheit.abkürzung].anzahl += 1;
      } else {
        acc[einheit.abkürzung] = {
          anzahl: 1,
          kosten: einheit.kosten,
        };
      }
      return acc;
    },
    {}
  );

  const [searchText, setSearchText] = useState("");
  const filteredEinheiten = einheiten.filter((einheit) =>
    einheit.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalCost: Kosten = gekaufteEinheiten.reduce((acc, einheit) => {
    return einheit.kosten.add(acc);
  }, new Kosten(0, 0, 0, 0));

  const diffKosten: Kosten = kosten.diff(totalCost);

  useEffect(() => {
    // Fetch data here
    const fetchData = async () => {
      try {
        let einheiten = fetchUnits();
        setEinheiten(einheiten);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClose = () => {
    setOpen(false);
    gekaufteEinheiten.splice(0, gekaufteEinheiten.length);
  };

  const handleSubmit = () => {
    setKosten(diffKosten);
    addUnits(gekaufteEinheiten);
    gekaufteEinheiten.splice(0, gekaufteEinheiten.length);
    setOpen(false);
  };

  const handleSubtractUnit = (abk: String) => {
    const einheit = einheiten.find((e) => e.abkürzung === abk);
    if (einheit) {
      const index = gekaufteEinheiten.indexOf(einheit);
      if (index > -1) {
        gekaufteEinheiten.splice(index, 1);
        setGekaufteEinheiten([...gekaufteEinheiten]);
      }
    }
  };
  const handleAddUnit = (abk: String) => {
    const einheit = einheiten.find((e) => e.abkürzung === abk);
    if (einheit) {
      setGekaufteEinheiten([...gekaufteEinheiten, einheit]);
    }

  }

  return (
    <Box
      my={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ width: "90%" }}
    >
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Einheiten hinzufügen</DialogTitle>
        <DialogContent>
          <TextField
            label="Suche Einheit"
            variant="outlined"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div style={{ maxHeight: "50%", overflow: "auto" }}>
            <EinheitTable
              einheiten={filteredEinheiten}
              selectable
              onSelect={(einheiten) => {
                setGekaufteEinheiten([...gekaufteEinheiten, einheiten]);
              }}
            ></EinheitTable>
          </div>

          <div>
            <h3>Einheiten</h3>
            {Object.entries(einheitenUebersicht).map(
              ([abkürzung, { anzahl, kosten }]) => (
                <div key={abkürzung}>
                  <p>
                    <KostenListeReadOnlyComponent
                      labels={[abkürzung + " : " + anzahl]}
                      kostenListe={[kosten.multiply(anzahl)]}
                      children={
                        <div>
                          <Button variant="outlined" onClick={() => handleSubtractUnit(abkürzung)}>-1</Button>
                          <Button variant="outlined" onClick={() => handleAddUnit(abkürzung)}>+1</Button>
                        </div>
                      }
                    ></KostenListeReadOnlyComponent>
                  </p>
                </div>
              )
            )}
          </div>
          <div>
            <h3>Übersicht</h3>
            <KostenListeReadOnlyComponent
              labels={["Kapital", "Kosten Einheiten", "Differenz"]}
              kostenListe={[kosten, totalCost, diffKosten]}
            ></KostenListeReadOnlyComponent>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>Abbrechen</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit} disabled={diffKosten.isNegative()}>Einheiten einkaufen</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default AddunitDialogComponent;
