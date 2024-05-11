import Info from "./Info";

export enum Staatsformtype {
    Monarchie = 'Monarchie',
    Demokratie = 'Demokratie',
    Schreckensherrschaft = 'Schreckensherrschaft',
    Kalifat = "Kalifat",
    EinsMitDerNatur = "Eins Mit der Natur",
    Faschismus = "Faschismus",
    Kommunismus = "Kommunismus",
    Merkantilismus = "Merkantilismus",
    Kolonialherrschaft = "Kolonialherrschaft",
}

class Staatsform{
    type: Staatsformtype;
    effects: Info[];
    constructor(type: Staatsformtype, effects: Info[]){
        this.type = type;
        this.effects = effects;
    }
}
export default Staatsform;