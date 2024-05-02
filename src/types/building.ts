import Info from "./Info";
import  Bringt  from "./bringt";
import { BuildingType } from "./buildingtype";
import { Erweiterung } from "./erweiterung";
import Kosten from "./kosten";

class Building {
    kosten: Kosten;
    type: BuildingType;
    erweiterung: Erweiterung;
    bringt: Bringt;
    kraft: number;
    info: Info;
    

    constructor(
        kosten: Kosten,
        type: BuildingType,
        erweiterung: Erweiterung,
        bringt: Bringt,
        kraft: number,
        info: Info
    ) {
        this.kosten = kosten;
        this.type = type;
        this.erweiterung = erweiterung;
        this.bringt = bringt;
        this.kraft = kraft;
        this.info = info;
    }

    getKosten(): Kosten {
        return this.kosten;
    }

    getType(): BuildingType {
        return this.type;
    }

    getErweiterung(): Erweiterung {
        return this.erweiterung;
    }
}

export default Building;