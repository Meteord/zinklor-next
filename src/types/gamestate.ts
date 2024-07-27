
import Info from "./Info";
import Building from "./building";
import { Einheit } from "./einheit";
import { ErweiterungType } from "./erweiterung";
import Kosten from "./kosten";
import Spell from "./spell";
import Staatsform from "./staatsform";


export class GameState {
    kosten: Kosten;
    einkommen: Kosten;
    ausgaben: Kosten;
    runde: number;
    info: Info;
    staatsform: Staatsform;
    spell: Spell;
    gebaude: Building[];
    könig: Einheit;
    started: boolean = false;
    erweiterung: ErweiterungType;

    constructor(kosten: Kosten, einkommen: Kosten, ausgaben: Kosten, runde: number, info: Info, staatsform: Staatsform, gebaude: Building[], könig: Einheit, spell: Spell,erweiterung: ErweiterungType) {
        this.kosten = kosten;
        this.einkommen = einkommen;
        this.ausgaben = ausgaben;
        this.runde = runde;
        this.info = info;
        this.staatsform = staatsform;
        this.gebaude = gebaude;
        this.könig = könig;
        this.erweiterung = erweiterung;
    }
}