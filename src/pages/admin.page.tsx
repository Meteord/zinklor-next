import React from "react";
import BuildingComponent from "../components/building.component";
import { Box, Tab, Tabs, Typography } from "@mui/material";

const AdminPage: React.FC = () => {
  const [value, setValue] = React.useState("unit");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Einheit, Gebäude oder Sonstiges hinzufügen
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
      >
        <Tab value="unit" label="Einheit"></Tab>
        <Tab value="building" label="Gebäude" />
        <Tab value="else" label="Sonstiges" />
      </Tabs>
      {value === "building" ? <BuildingComponent></BuildingComponent> : <div></div>}{" "}
    </Box>
  );
};

export default AdminPage;
