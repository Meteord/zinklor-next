import Effekt from "./effekt";
import Kosten from "./kosten";

export default class Bringt {
    effekte: Effekt[];
    ertrag: Kosten;

    constructor(effekte: Effekt[], ertrag: Kosten) {
        this.effekte = effekte;
        this.ertrag = ertrag;
    }
}