enum ProdBuildingTags {
  Farm = "Farm",
  Feld = "Feld",
  Camp = "Camp",
}

enum CommonBuildingTags {
  Stadt = "Stadt",
  Burg = "Burg",
  Einheitenproduktionsgebauede = "Einheitenproduktionsgebauede",
}

export enum UnitTags {
  Fliegend = "fliegend",
  Zaubernd = "zaubernd",
  Böse = "böse",
  Normal = "normal",
  Königend = "königend",
  Heldend = "heldend",
  Schwimmend = "schwimmend",
  Sandeinheit = "sandeinheit",
}

export type BuildingTags = ProdBuildingTags | CommonBuildingTags;

const prodBuildingTagsStrings = Object.values(ProdBuildingTags);
const commonBuildingTagsStrings = Object.values(CommonBuildingTags);
export const buildingTagsStrings: string[] = [
  ...prodBuildingTagsStrings,
  ...commonBuildingTagsStrings,
];
export const unitTagsStrings: string[] = [...Object.values(UnitTags)];

export function parseBuildingTag(tag: string): BuildingTags | null {
  if (buildingTagsStrings.includes(tag)) {
    return tag as BuildingTags;
  }
  return null;
}

export function parseUnitTags(tag: string): UnitTags | null {
  if (unitTagsStrings.includes(tag)) {
    return tag as UnitTags;
  }
  return null;
}
