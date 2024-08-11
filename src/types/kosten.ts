class Kosten {
  holz: number;
  gold: number;
  stein: number;
  magie: number;

  constructor(holz: number, gold: number, stein: number, magie: number) {
    this.holz = holz;
    this.gold = gold;
    this.stein = stein;
    this.magie = magie;
  }

  diff(kosten: Kosten): Kosten {
    return new Kosten(
      this.holz - kosten.holz,
      this.gold - kosten.gold,
      this.stein - kosten.stein,
      this.magie - kosten.magie
    );
  }

  
  add(kosten: Kosten): Kosten {
    return new Kosten(
      this.holz + kosten.holz,
      this.gold + kosten.gold,
      this.stein + kosten.stein,
      this.magie + kosten.magie
    );
  }

  multiply(faktor: number): Kosten {
    return new Kosten(
      this.holz * faktor,
      this.gold * faktor,
      this.stein * faktor,
      this.magie * faktor
    );
  }

  isNegative(): boolean {
    return this.holz < 0 || this.gold < 0 || this.stein < 0 || this.magie < 0;
  }
}

export default Kosten;
