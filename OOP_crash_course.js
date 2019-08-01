// Almost everything is an object
// Primitives < Objects
// DOM Objects

// const primitive = 'Hello';
// console.log(typeof primitive);

// const object = new String('Hello');
// console.log(typeof object);

// console.log(window)
// alert(1)
// console.log(navigator.appCodeName); //
// console.log(navigator.appName); //
// console.log(navigator.appVersion); //

// Object Literal
// const book1 = {
//   title: 'Book One',
//   author: 'John Doe',
//   year: '2013',
//   getSummary: function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }
// };
// console.log(book1);
// console.log(book1.getSummary());

// console.log(Object.keys(book1));
// console.log(Object.values(book1));

// ES5______________________________________________________________
// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  // this.getSummary = function() {
  //   return `${this.title} was written by ${this.author} in ${this.year}`;
  // };
}

// Creating prototype method
// Move getSummary to become a prototype method
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book1);
console.log(book2.getSummary());
console.log(book2.getAge());
book2.revise('2018');
console.log(book2);

// Inheritance
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine Constructor
function magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}
