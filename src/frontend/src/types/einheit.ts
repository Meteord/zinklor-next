import Info from "./Info";
import Bewegung from "./bewergung";
import Effekt from "./effekt";
import Kosten from "./kosten";
import Transport from "./transport";
import { UnitTags } from "./tags";
import { Type } from "class-transformer";

export class Einheit {
    @Type(() => Kosten)
    kosten: Kosten;
    abkürzung: string;
    bewegung: Bewegung;
    kraft: number;
    tags: UnitTags[];
    effekte: Effekt[];
    info: Info;
    transport: Transport
    number = 0;

    constructor(kosten: Kosten, info: Info, abkürzung: string, bewegung: Bewegung, kraft: number, tags: UnitTags[], effekte: Effekt[], transport: Transport, number = 0) {
        this.kosten = kosten;
        this.abkürzung = abkürzung;
        this.bewegung = bewegung;
        this.kraft = kraft;
        this.tags = tags;
        this.effekte = effekte;
        this.info = info;
        this.transport = transport;
        this.number = number;
    }
}