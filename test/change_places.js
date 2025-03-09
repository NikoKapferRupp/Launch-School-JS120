let obj = {
  name: 'Niko',
  favoriteColor: 'Red',

  speak() {
    console.log('Ally!');
  }
}


let newObj = Object.create(obj);



console.log(obj);
console.log(newObj.speak());

