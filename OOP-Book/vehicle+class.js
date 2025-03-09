class Vehicle {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  };

  accelerate() {
    console.log('The vehicle accelerates.');    
  };

  decelerate() {
    console.log(('The vehicle deccelerates.'));    
  };
}

class Car extends Vehicle {
  constructor(color, weight, licenseNumber) {
    super(color, weight);
    this.licenseNumber = licenseNumber;
  };

  honk() {
    console.log('HOOOOOOONK!')
  };
}

class Boat extends Vehicle {
  constructor(color, weight, homePort) {
    super(color, weight);
    this.homePort = homePort;
  };

  dropAnchor() {
    console.log('The boat drops the anchor!')
  };  
}

class Plane extends Vehicle {
  constructor(color, weight, airline) {
    super(color, weight);
    this.airline = airline;
  };

  takeOff() {
    console.log('The plane takes off!')
  };

  land() {
    console.log('The plane lands.');    
  };
}

let car = new Car('red', 3300, 'BXY334');
car.accelerate();             // Accelerate
car.honk();                   // Honk
car.decelerate();             // Decelerate
console.log(car.color, car.weight, car.licenseNumber);
// red 3300 BXY334

let boat = new Boat('yellow', 12000, 'Bahamas');
boat.accelerate();            // Accelerate
boat.decelerate();            // Decelerate
boat.dropAnchor();            // Drop anchor
console.log(boat.color, boat.weight, boat.homePort);
// yellow 12000 Bahamas

let plane = new Plane('blue', 83000, 'Southwest');
plane.accelerate();           // Accelerate
plane.takeOff();              // Take off
plane.land();                 // Land
plane.decelerate();           // Decelerate
console.log(plane.color, plane.weight, plane.airline);
// blue 83000 Southwest

console.log(car instanceof Vehicle);
console.log(boat instanceof Car);

