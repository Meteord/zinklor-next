import Info from "./Info";
import Bringt from "./bringt";
import { Erweiterung } from "./erweiterung";
import Kosten from "./kosten";
import { BuildingTags } from "./tags";

class Building {
  kosten: Kosten;
  erweiterung: Erweiterung;
  bringt: Bringt;
  braucht: Kosten;
  kraft: number;
  info: Info;
  abkürzung?: string;
  tags: BuildingTags[];

  constructor(
    kosten: Kosten,
    erweiterung: Erweiterung,
    bringt: Bringt,
    kraft: number,
    info: Info,
    tags: BuildingTags[],
    braucht: Kosten,
    abkürzung?: string
  ) {
    this.kosten = kosten;
    this.erweiterung = erweiterung;
    this.bringt = bringt;
    this.kraft = kraft;
    this.info = info;
    this.tags = tags;
    this.braucht = braucht;
  }

  getKosten(): Kosten {
    return this.kosten;
  }

  getErweiterung(): Erweiterung {
    return this.erweiterung;
  }
}

export default Building;
