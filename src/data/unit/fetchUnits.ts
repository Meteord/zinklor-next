import { plainToInstance } from "class-transformer";
import { Einheit } from "../../types/einheit";

let Engel = require("./Engel.json");
let König = require("./König.json");
let Drachenkönig = require("./Drachenkönig.json");
let Meeresjünger = require("./Meeresjünger.json");
let Meereskönig = require("./Meereskönig.json");
export const fetchUnits = () => {
  return [
    plainToInstance(Einheit, Engel),
    plainToInstance(Einheit, König),
    plainToInstance(Einheit, Drachenkönig),
    plainToInstance(Einheit, Meeresjünger),
    plainToInstance(Einheit, Meereskönig),
  ];
};
