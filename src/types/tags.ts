enum ProductionBuildingTags {
  Farm = "Farm",
  Feld = "Feld",
  Camp = "Camp",
}

enum BuildingTags {
  Stadt = "Stadt",
  Burg = "Burg",
  Einheitenproduktionsgebauede = "Einheitenproduktionsgebauede",
}

enum UnitTags {
    Fliegend = "fliegend",
    Zaubernd = "zaubernd",
    Böse    = "böse",
    Normal  = "normal",
    könig  = "könig",
    Held   = "held",
    Schwimmend = "schwimmend",
    Sandeinheit = "sandeinheit",
}


export type gebäudeTags = ProductionBuildingTags | BuildingTags;
export type einheitTags = UnitTags;