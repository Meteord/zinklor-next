import Kosten from "./kosten";

export default class Bringt {
    beschreibung: string;
    ertrag: Kosten;

    constructor(beschreibung: string, ertrag: Kosten) {
        this.beschreibung = beschreibung;
        this.ertrag = ertrag;
    }
}