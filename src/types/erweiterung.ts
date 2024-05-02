export enum Erweiterung {
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


export function parseErweiterung(value: string): Erweiterung | null {
    if (Object.values(Erweiterung).includes(value as Erweiterung)) {
        return value as Erweiterung;
    }
    return null;
}