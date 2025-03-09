class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }

  info() {
    return `a ${this.species} named ${this.name}`
  }
}

class Owner {  
  constructor(name) {
   this.name = name;
   this.animalArray = [];
  }
  
  addPet(pet) {
    this.animalArray.push(pet)
  }

  numberOfPets() {
    return this.animalArray.length;
  }

  printPets() {
    
  }
}

class Shelter {
  constructor() {
    this.owners = {};
  }

  adopt(owner, pet) {
    this.owners.push(owner);
    owner.animalArray.push(pet);
  };

  printAdoptions() {
    for (const name in this.owners) {
      
    }
  }
}





let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);

console.log();



//shelter.printAdoptions();
//console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
//console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);