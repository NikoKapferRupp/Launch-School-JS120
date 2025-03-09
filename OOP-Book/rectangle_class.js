class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  };

  get width() {
    return this.#width;
  };

  get height() {
    return this.#height;
  };

  get area() {
    return this.#height * this.#width;
  };

  set width(newWidth) {
    if (newWidth < 1) {
      throw new RangeError('width must be positive')
    } else {
      this.#width = newWidth;
    }; 
  };

  set height(newHeight) {
    if (newHeight < 1) {
      throw new RangeError('height must be positive')
    } else {
      this.#height = newHeight;
    };
  };
}

let rect = new Rectangle(10, 5);
console.log(rect.area); // 50

rect.width = 20;
console.log(rect.area); // 100

rect.height = 12;
console.log(rect.area); // 240

try {
  rect.width = 0;
} catch (e) {
  console.log(e); // RangeError: width must be positive
}

try {
  rect.height = -10;
} catch (e) {
  console.log(e); // RangeError: height must be positive
}