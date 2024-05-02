export enum BuildingType {
    Stadt = 'Stadt',
    Burg = 'Burg',
    Rohstoff = 'Rohstoff',
    Einheitenproduktion = 'Einheitenproduktion'
}


export function parseBuildingType(value: string): BuildingType | null {
    if (Object.values(BuildingType).includes(value as BuildingType)) {
        return value as BuildingType;
    }
    return null;
}