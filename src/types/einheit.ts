import Bewegung from "./bewergung";
import Effekt from "./effekt";
import Kosten from "./kosten";
import { UnitTags } from "./tags";

export class Einheit {
    kosten: Kosten;
    name: string;
    abkürzung: string;
    bewegung: Bewegung;
    kraft: number;
    tags: UnitTags[];
    effekte: Effekt[];

    constructor(kosten: Kosten, name: string, abkürzung: string, bewegung: Bewegung, kraft: number, tags: UnitTags[], effekte: Effekt[]) {
        this.kosten = kosten;
        this.name = name;
        this.abkürzung = abkürzung;
        this.bewegung = bewegung;
        this.kraft = kraft;
        this.tags = tags;
        this.effekte = effekte;
    }
}