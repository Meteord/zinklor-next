import Info from "./Info";
import Bewegung from "./bewergung";
import Effekt from "./effekt";
import Kosten from "./kosten";
import { UnitTags } from "./tags";

export class Einheit {
    kosten: Kosten;
    abkürzung: string;
    bewegung: Bewegung;
    kraft: number;
    tags: UnitTags[];
    effekte: Effekt[];
    info: Info;

    constructor(kosten: Kosten, info: Info, abkürzung: string, bewegung: Bewegung, kraft: number, tags: UnitTags[], effekte: Effekt[]) {
        this.kosten = kosten;
        this.abkürzung = abkürzung;
        this.bewegung = bewegung;
        this.kraft = kraft;
        this.tags = tags;
        this.effekte = effekte;
        this.info = info;
    }
}