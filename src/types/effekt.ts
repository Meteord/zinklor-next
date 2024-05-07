import Info from "./Info";

export enum EffektType{
    Schuss,
    Sonstiger
}

export default class Effekt {
    info: Info;
    type: EffektType;
}