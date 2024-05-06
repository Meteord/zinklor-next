import React from "react";
import BuildingComponent from "../components/building.component";
import {
  Box,
  Button,
  Card,
  CardContent,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Building from "../types/building";
import { Erweiterung } from "../types/erweiterung";
import Kosten from "../types/kosten";
import Bringt from "../types/bringt";
import Info from "../types/Info";
import BuildingReadonlyComponent from "../components/building.readonly.component";

const AdminPage: React.FC = () => {
  const [value, setValue] = React.useState("unit");
  const [preview, isPreview] = React.useState(false);
  const [building, setBuilding] = React.useState<Building>(
    new Building(
      new Kosten(0, 0, 0, 0),
      Erweiterung.Eis,
      new Bringt("", new Kosten(0, 0, 0, 0)),
      0,
      new Info("", ""),
      [],
      new Kosten(0,0,0,0),
      ""
    )
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
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
          {value === "building" ? (
            <div>
              {preview ? (
                <BuildingReadonlyComponent
                  building={building}
                ></BuildingReadonlyComponent>
              ) : (
                <BuildingComponent
                  building={building}
                  setBuilding={setBuilding}
                ></BuildingComponent>
              )}
              <Button
                onClick={() => {
                  isPreview(!preview);
                }}
              >
                {preview ?  <div>Zurück</div> : <div>Zur Vorschau</div> }
              </Button>
            </div>
          ) : (
            <div></div>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdminPage;
