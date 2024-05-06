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
}

export default Kosten;