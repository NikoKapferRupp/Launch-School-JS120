class Person {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  showAge() {
    console.log(this.#age);
  }

  set age(newAge) {
    
    if (typeof newAge === 'number' && newAge > 0 ) {
      this.#age = newAge;
    } else {
      throw new RangeError('Age must be')
    }
  }
    
}



let person = new Person('John', 30);
person.showAge(); // 30
person.age = 31;
person.showAge(); // 31

