let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

function assignProperty(obj, string, newValue) {
  let prototypeObj = obj
  while(prototypeObj !== null) {
      
    if (Object.hasOwn(prototypeObj, string)) {
      prototypeObj[string] = newValue;
      return;
    }
    prototypeObj = Object.getPrototypeOf(prototypeObj);
    
  }
}