class MathUtils {
  #firstNum;
  #secondNum;

  static add(firstNum, secondNum) {
    return firstNum + secondNum;
  }

  static subtract(firstNum, secondNum) {
    return firstNum - secondNum;
  }

  static multiply(firstNum, secondNum) {
    return firstNum * secondNum;
  }

  static divide(firstNum, secondNum) {
    if (secondNum === 0) {
      throw new RangeError('Division by zero');
    }
    return firstNum / secondNum;
  }
}

console.log(MathUtils.add(5, 3));       // 8
console.log(MathUtils.subtract(10, 4)); // 6
console.log(MathUtils.multiply(6, 7));  // 42
console.log(MathUtils.divide(20, 5));   // 4
console.log(MathUtils.divide(10, 0));   // RangeError: Division by zero
