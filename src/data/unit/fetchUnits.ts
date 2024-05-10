import { plainToInstance } from "class-transformer";
import { Einheit } from "../../types/einheit";

let Engel = require('./Engel.json'); 
let König = require('./König.json'); 
export const fetchUnits = () => {
    
    return [plainToInstance(Einheit, Engel), plainToInstance(Einheit, König)];
};