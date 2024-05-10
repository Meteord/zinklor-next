export default class Info {
  name: string;
  beschreibung: string;

  constructor(name: string, beschreibung: string) {
    this.name = name;
    this.beschreibung = beschreibung;
  }

  toString() {
    return `${this.name}: ${this.beschreibung}`;
  }
}
