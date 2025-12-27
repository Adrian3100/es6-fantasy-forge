class Hero {
  constructor(name, health, mana) {
    this.name = name;
    this.health = health;
    this.mana = mana;
  }

  // Restores Health and Mana
  rest() {
    this.health += 10;
    this.mana += 10;
    console.log(`${this.name} rested. HP: ${this.health}, Mana: ${this.mana}`);
  }

  // Reduces Health
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} took ${amount} damage. HP: ${this.health}`);
  }
}

// Create a hero
const hero = new Hero("Arin", 100, 50);

// Call methods
hero.rest();
hero.takeDamage(20);
