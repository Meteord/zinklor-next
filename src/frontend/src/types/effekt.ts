import Info from "./Info";

export enum EffektType{
    Schuss = "Schuss",
    Sonstiger = "Sonstiger"
}

export default class Effekt {
    info: Info;
    type: EffektType;
    radius?: number;

    constructor(info: Info, type: EffektType, radius?: number) {
        this.info = info;
        this.type = type;
        this.radius = radius;
    }
}