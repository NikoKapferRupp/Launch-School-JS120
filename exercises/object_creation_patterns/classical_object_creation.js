function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`
}

Person.prototype.communicate =  () => {
  console.log('Communicating');  
}

Person.prototype.eat = () => {
  console.log('Eating');
}

Person.prototype.sleep = () => {
  console.log('Sleeping');
}

function Doctor(firstName, lastName, age, gender, specialization) {
  Object.setPrototypeOf(this, Person.prototype);
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}
Doctor.create()
Doctor.prototype.diagnose = () => {
  console.log('Diagnosing');  
}



let person = new Doctor('Niko', 'Kapfer-Rupp', 34, 'male', 'HNO');

person.communicate()
console.log(person.fullName());
person.eat();
person.sleep();
person.diagnose();

