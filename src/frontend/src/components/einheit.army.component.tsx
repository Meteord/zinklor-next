import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Chip,
  Typography,
} from "@mui/material";
import { Einheit } from "../types/einheit";
import { ExpandMore } from "@mui/icons-material";

export interface EinheitArmyComponentProps {
  einheiten: Einheit[];
  setEinheiten: (einheiten: Einheit[]) => void;
}

const EinheitArmyComponent: React.FC<EinheitArmyComponentProps> = ({
  einheiten,
  setEinheiten,
}: EinheitArmyComponentProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const aggregatedUnits = einheiten.reduce(
    (acc: { [abkürzung: string]: Einheit[] }, einheit: Einheit) => {
      if (acc[einheit.abkürzung]) {
        acc[einheit.abkürzung] = [...acc[einheit.abkürzung], einheit];
      } else {
        acc[einheit.abkürzung] = [einheit];
      }
      return acc;
    },
    {}
  );

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      gap={1}
      sx={{ width: "90%" }}
    >
      {Object.entries(aggregatedUnits).map(([abkürzung, einheiten]) => (
        <Accordion
          key={abkürzung}
          expanded={expanded === abkürzung}
          onChange={handleChange(abkürzung)}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>{abkürzung + ` (${einheiten.length})`}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {einheiten.length > 0 &&
              einheiten.map((einheit) => (
                <Chip
                  key={einheit.number}
                  label={"K: " + einheit.kraft}
                  variant="outlined"
                  color="info"
                  size="medium"
                  avatar={<Avatar>{einheit.number}</Avatar>}
                  onClick={() => {}}
                  onDelete={() => {
                    setEinheiten(einheiten.filter((e) => e !== einheit));
                  }}
                />
              ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default EinheitArmyComponent;
