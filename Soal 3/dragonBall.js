/*

Running : node uniqueName.js

*/

const Heroes = [];

function Random() {
  return Math.floor(Math.random() * 10) + 1;
}

class Race {
  constructor(race) {
    this._race = race;
  }

  get race(){
    return this._race;
  }

  set genki(power){
    this._genki = power;
  }

  get genki(){
    return this._genki;
  }
}

class Human extends Race{
  constructor(name) {
      super('Human');
      this.name = name;
      this.SharedPower();
      this.spawn();
  }

  spawn() {
    console.log(`${this.name} Genki is : ${super.genki} (${this.name} is ${super.race} race)`);
  }

  SharedPower() {
    super.genki = 10;
  }
}

class Namekian extends Race{
  constructor(name) {
      super('Namekian');
      this.name = name;
      this.Power();
      this.spawn();
  }

  spawn() {
    console.log(`${this.name} Genki is : ${super.genki} (${this.name} is ${super.race} race)`);
  }

  Power() {
    super.genki = Random() * 10 + 100;
  }
}

class Saiyan extends Race{
  constructor(name) {
      super('Saiyan');
      this.name = name;
      this.SaiyanPower();
      this.spawn();
  }

  spawn() {
    console.log(`${this.name} Genki is : ${super.genki} (${this.name} is ${super.race} race)`);
  }

  NormalPower() {
    super.genki = Random() * 10 + 10;
  }

  SaiyanPower() {
    super.genki = Random() * 10 + 500;
  }
}

// Example 
const heroRace = {
  'Gohan': 'Saiyan',
  'Picollo': 'Namekian',
  'Krilin': 'Human',
  'Vegeta': 'Saiyan'
}

for(const hero in heroRace) {
  switch(heroRace[hero]) {
    case 'Saiyan': {
      Heroes.push(new Saiyan(hero));
      break;
    }
    case 'Namekian': {
      Heroes.push(new Namekian(hero));
      break;
    }
    case 'Human': {
      Heroes.push(new Human(hero));
      break;
    }
  }
}

