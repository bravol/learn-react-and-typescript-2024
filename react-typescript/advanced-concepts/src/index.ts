abstract class Spell {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
  abstract cast(): void;
}

enum FireSpellName {
  FireBolt = "Fire Bolt",
  FireWall = "Fire Wall",
  BigBang = "Big Bang",
}

enum FrostSpellName {
  FrostBolt = "Frost Bolt",
  Blizzard = "Blizzard",
}

class FireSpell extends Spell {
  readonly burningDamage = 20;
  constructor(name: FireSpellName) {
    super(name);
  }
  cast(): void {
    console.log(
      this.name,
      "Boom it took ",
      this.burningDamage,
      "to burn the enemy"
    );
  }
}

class FrostSpell extends Spell {
  readonly freezingDamage = 0.5;
  constructor(name: FrostSpellName) {
    super(name);
  }
  cast(): void {
    console.log(
      this.name,
      "Boom it took ",
      this.freezingDamage,
      "to freez the enemy"
    );
  }
}

class Wizzard<S extends Spell> {
  private spellBook: S[] = [];
  constructor(spellBook: S[]) {
    this.spellBook = spellBook;
  }
  castAllAtOnce() {
    this.spellBook.forEach((spell: S) => {
      spell.cast();
    });
  }

  castFromSpellBook(name: string) {
    const spell = this.spellBook.find((spell) => spell.name === name);
    if (spell) {
      spell.cast();
    } else {
      console.log("Spell not found in spell book");
    }
  }
}

const fireSpells: FireSpell[] = [
  new FireSpell(FireSpellName.FireBolt),
  new FireSpell(FireSpellName.FireWall),
  new FireSpell(FireSpellName.BigBang),
];
const wizzard = new Wizzard<FireSpell>(fireSpells);
wizzard.castAllAtOnce();
