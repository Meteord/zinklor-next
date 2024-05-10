import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EinheitTable from "../components/einheit.table.component";
import { Einheit } from "../types/einheit";
import { fetchUnits } from "../data/unit/fetchUnits";

const UltimatePage: React.FC = () => {
  const [einheiten, setEinheiten] = useState<Einheit[]>([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    // Fetch data here
    const fetchData = async () => {
      try {
        setEinheiten(fetchUnits());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredEinheiten = einheiten.filter((einheit) =>
    einheit.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Box
      my={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ width: "100%" }}
    >
      <Card>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Ultimate Ultimate Next Level Einheitenregister
          </Typography>
          <TextField
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <EinheitTable einheiten={filteredEinheiten}></EinheitTable>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UltimatePage;
