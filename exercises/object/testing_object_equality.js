function objectsEqual(obj1, obj2) {
  
  for (const [key, value] of Object.entries(obj1)) {
    if (!Object.hasOwn(obj2, key)) {
      return false;
    }
    if (!obj1.key === obj2.key) {
      return false;
    }
  }  
  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false