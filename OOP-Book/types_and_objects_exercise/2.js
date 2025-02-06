function Book(title, author, publishingYear) {
  this.title = title;
  this.author = author;
  this.publishingYear = publishingYear;
}

let neuromancer = new Book('Neuromancer', 'William Gibson', 1984);
let doomsdayBook = new Book('Doomsday Book', 'Connie Willis', 1992);

console.log(neuromancer);
console.log(doomsdayBook);

