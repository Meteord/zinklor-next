
import Info from "./Info";
import Staatsform from "./staatsform";
import Building from "./building";
import { Einheit } from "./einheit";
import Kosten from "./kosten";


export class GameState {
    kosten: Kosten;
    runde: number;
    info: Info;
    staatsform: Staatsform;
    gebaude: Building[];
    könig: Einheit;
    started: boolean = false;

    constructor(kosten: Kosten, runde: number, info: Info, staatsform: Staatsform, gebaude: Building[], könig: Einheit) {
        this.kosten = kosten;
        this.runde = runde;
        this.info = info;
        this.staatsform = staatsform;
        this.gebaude = gebaude;
        this.könig = könig;
    }
}