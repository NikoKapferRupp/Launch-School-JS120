function Human() {};
Human.prototype.myName = function () { return this.name };
Human.prototype.myAge = function () { return this.age };

function Person() {};
Person.prototype = Object.create(Human.prototype);
Person.prototype.constructor = Person;
Person.prototype.toString = function () {
  return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
}

let will = new Person();
will.name = 'William'