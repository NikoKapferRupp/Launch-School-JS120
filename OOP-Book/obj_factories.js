function createFruit(name, color) {
  return {
    name,
    color,

    isRipe() {
      return `This ${this.name} is ripe.`;
    },

    describe() {
      return `This ${this.name} is ${this.color}.`;
    },
  }
}

let apple = createFruit('Apple', 'Red');