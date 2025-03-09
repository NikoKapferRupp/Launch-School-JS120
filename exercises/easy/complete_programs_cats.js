class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}



class Cat extends Pet {
  constructor(name, age, furColor) {
    super(name, age);
    this.furColor = furColor;
  }
}
Cat.prototype.info = function() {
  return `My cat ${this.name} is ${this.age} years old and has ${this.furColor} fur.`
}
let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());