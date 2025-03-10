let mixin = {
  walk() {
    return this.name + ' ' + this.gait() + ' forward'
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}


class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

Object.assign(Person.prototype, mixin);
Object.assign(Cat.prototype, mixin);
Object.assign(Cheetah.prototype, mixin)

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"