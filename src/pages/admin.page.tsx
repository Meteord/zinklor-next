import React from "react";
import BuildingComponent from "../components/building.component";
import { Box, Button, Card, CardContent, Tab, Tabs } from "@mui/material";
import Building from "../types/building";
import { ErweiterungType } from "../types/erweiterung";
import Kosten from "../types/kosten";
import Bringt from "../types/bringt";
import Info from "../types/Info";
import BuildingReadonlyComponent from "../components/building.readonly.component";
import { instanceToPlain } from "class-transformer";
import { Einheit } from "../types/einheit";
import EinheitComponent from "../components/einheit.component";

const AdminPage: React.FC = () => {
  const [value, setValue] = React.useState("unit");
  const [preview, isPreview] = React.useState(false);
  const [building, setBuilding] = React.useState<Building>(
    new Building(
      new Kosten(0, 0, 0, 0),
      ErweiterungType.Eis,
      new Bringt([], new Kosten(0, 0, 0, 0)),
      0,
      new Info("", ""),
      [],
      new Kosten(0, 0, 0, 0),
      ""
    )
  );

  const [einheit, setEinheit] = React.useState<Einheit>(
    new Einheit(new Kosten(0, 0, 0, 0), new Info("", ""), "", null, 0, [], [])
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const exportData = () => {
    let exported = JSON.stringify(instanceToPlain(building));
    const blob = new Blob([exported], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = building.info.name + ".json";
    link.click();

    // Freigabe der Blob-URL
    URL.revokeObjectURL(url);
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
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            centered
          >
            <Tab value="unit" label="Einheit" />
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
                {preview ? <div>Zurück</div> : <div>Zur Vorschau</div>}
              </Button>
              {preview ? (
                <Button
                  onClick={() => {
                    exportData();
                  }}
                >
                  Export
                </Button>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <EinheitComponent
              einheit={einheit}
              setEinheit={setEinheit}></EinheitComponent>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdminPage;
