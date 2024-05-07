import Info from "./Info";

export enum ErweiterungType {
    Mitte = 'Mitte',
    Eis = 'Eis',
    Wasser = 'Wasser',
    Oben = 'Oben',
    Magie = 'Magie',
    Sand = 'Sand',
    Zwerge1 = 'Zwerge1',
    Zwerge2 = 'Zwerge2',
    Orks = 'Orks'
}

export class Erweiterung{
    type: ErweiterungType;
    info: Info;
    constructor(type: ErweiterungType, info: Info) {
        this.type = type;
        this.info = info;
    }
}

export function parseErweiterung(value: string): ErweiterungType | null {
    if (Object.values(ErweiterungType).includes(value as ErweiterungType)) {
        return value as ErweiterungType;
    }
    return null;
}