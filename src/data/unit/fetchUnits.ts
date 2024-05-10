import { plainToInstance } from "class-transformer";
import { Einheit } from "../../types/einheit";

let Engel = require("./Engel.json");
let König = require("./König.json");
let Drachenkönig = require("./Drachenkönig.json");
let Meeresjünger = require("./Meeresjünger.json");
let Meereskönig = require("./Meereskönig.json");
let Zauberer = require("./Zauberer.json");
let Orks = require("./Orks.json");
let Palastwache = require("./Palastwache des Zwergenkönigs.json");
let Kobolde = require("./Kobolde.json");
export const fetchUnits = () => {
  return [
    plainToInstance(Einheit, Engel),
    plainToInstance(Einheit, König),
    plainToInstance(Einheit, Drachenkönig),
    plainToInstance(Einheit, Meeresjünger),
    plainToInstance(Einheit, Meereskönig),
    plainToInstance(Einheit, Zauberer),
    plainToInstance(Einheit, Orks),
    plainToInstance(Einheit, Palastwache),
    plainToInstance(Einheit, Kobolde),
  ];
};
