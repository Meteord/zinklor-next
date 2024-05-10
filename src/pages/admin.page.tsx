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
import Transport from "../types/transport";
import Bewegung from "../types/bewergung";
import EinheitReadonlyComponent from "../components/einheit.readonly.component";

enum AdminPageTabs {
  Unit = "unit",
  Building = "building",
  Else = "else",
}

const AdminPage: React.FC = () => {
  const [value, setValue] = React.useState("unit");
  const [buildingPreview, isBuildingPreview] = React.useState(false);
  const [unitPreview, isUnitPreview] = React.useState(false);
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
    new Einheit(
      new Kosten(0, 0, 0, 0),
      new Info("", ""),
      "",
      new Bewegung(0, 0),
      0,
      [],
      [],
      new Transport(0, 0)
    )
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const exportData = () => {
    let exported, name = null;
    if (value === AdminPageTabs.Unit) {
      exported = JSON.stringify(instanceToPlain(einheit));
      name = einheit.info.name;
    } else if (value === AdminPageTabs.Building) {
      exported = JSON.stringify(instanceToPlain(building));
      name = building.info.name;
    }
    const blob = new Blob([exported], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = name + ".json";
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
            <Tab value={AdminPageTabs.Unit} label="Einheit" />
            <Tab value={AdminPageTabs.Building} label="Gebäude" />
            <Tab value={AdminPageTabs.Else} label="Sonstiges" />
          </Tabs>
          {value === AdminPageTabs.Building ? (
            <div>
              {buildingPreview ? (
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
                  isBuildingPreview(!buildingPreview);
                }}
              >
                {buildingPreview ? <div>Zurück</div> : <div>Zur Vorschau</div>}
              </Button>
              {buildingPreview ? (
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
            <div>
              {!unitPreview ? (
                <EinheitComponent
                  einheit={einheit}
                  setEinheit={setEinheit}
                  useDefaultImage
                ></EinheitComponent>
              ) : (
                <EinheitReadonlyComponent
                  einheit={einheit}
                  useDefaultImage
                ></EinheitReadonlyComponent>
              )}
              <Button
                onClick={() => {
                  isUnitPreview(!unitPreview);
                }}
              >
                {unitPreview ? <div>Zurück</div> : <div>Zur Vorschau</div>}
              </Button>
              {unitPreview ? (
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
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdminPage;
