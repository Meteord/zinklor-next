
import { Type } from "class-transformer";
import { GamePageState } from "./GamePageState";
import Info from "./Info";
import Building from "./building";
import { Einheit } from "./einheit";
import { ErweiterungType } from "./erweiterung";
import Kosten from "./kosten";
import Spell from "./spell";
import Staatsform from "./staatsform";


export class GameState {
    state: GamePageState;
    @Type(() => Kosten)
    kosten: Kosten;
    @Type(() => Kosten)
    einkommen: Kosten;
    @Type(() => Kosten)
    ausgaben: Kosten;
    runde: number;
    info: Info;
    @Type(() => Staatsform)
    staatsform: Staatsform;
    spell: Spell;
    gebaude: Building[];
    könig: Einheit;
    erweiterung: ErweiterungType;
    einheiten: Einheit[] = [];

    constructor(state: GamePageState, kosten: Kosten, einkommen: Kosten, ausgaben: Kosten, runde: number, info: Info, staatsform: Staatsform, gebaude: Building[], könig: Einheit, spell: Spell,erweiterung: ErweiterungType) {
        this.state = state;
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