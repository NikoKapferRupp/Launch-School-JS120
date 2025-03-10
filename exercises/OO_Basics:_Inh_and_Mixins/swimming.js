const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
    Object.assign(this, swimMixin);
  }
}

class Dog {
  constructor(name) {
    this.name = name;
    Object.assign(this, swimMixin);
  }
}

class Maltese extends Dog {}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());

console.log(fish1.swim());