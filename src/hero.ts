class Hero {
  name: string;
  health: number;
  mana: number;

  constructor(name: string, health: number, mana: number) {
    this.name = name;
    this.health = health;
    this.mana = mana;
  }

  rest(): void {
    this.health += 10;
    this.mana += 10;
    console.log(`${this.name} rested. HP: ${this.health}, Mana: ${this.mana}`);
  }

  takeDamage(amount: number): void {
    this.health -= amount;
    console.log(`${this.name} took ${amount} damage. HP: ${this.health}`);
  }
}

const hero = new Hero("Arin", 100, 50);
hero.rest();
hero.takeDamage(20);
