function changePlaces(array){
  let resultArray = [];
  let leftEntry;
  let maxRightIndex = array.length - 1;

  for (let index = 0; index < Math.floor(array.length / 2); index++) {
    leftEntry = array[index];
    array[index] = array[maxRightIndex - index];
    array[maxRightIndex - index] = leftEntry;
    
  }
  return array;
}
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

console.log(eq(changePlaces([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]));
console.log(eq(changePlaces([1]), [1]));
console.log(eq(changePlaces([]), []));
console.log(eq(changePlaces([1, 2]), [2, 1]));



