import Kosten from "./kosten";

export class Einheit {
    kosten: Kosten;
    name: string;
    kraft: number;

    constructor(kosten: Kosten, name: string, kraft: number) {
        this.kosten = kosten;
        this.name = name;
        this.kraft = kraft;
    }
}