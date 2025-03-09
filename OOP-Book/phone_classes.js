class Phone {
  constructor(brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
  };

  displayInfo() {
    console.log(`This ${this.brand} phone is the ${this.model} model released in ${this.releaseYear}.`);
  };

  checkBatteryLevel() {
    console.log(`${this.brand} ${this.model} has 75% battery remaining.`);    
  }
}

let iPhone = new Phone('Apple', 'iPhone 12', '2020');