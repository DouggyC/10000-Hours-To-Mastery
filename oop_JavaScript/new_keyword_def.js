// /** New Keyword definition */

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// var car1 = new Car('Eagle', 'Talon TSi', 1993);

// console.log(car1.make);
// // expected output: "Eagle"

// // new constructor[([argemtns])]
// // constructor
// // A class or function that specifies the type of the object instance.

// // constructor = class || function

// let newObj = new ObjectName()
// newObj inheriting from ObjectName.prototype

function Car() {}
car1 = new Car();
let car2 = Object.create(Car);

console.log(car1.color); // undefined

Car.prototype.color = 'original color';
console.log(car1.color); // original color

car1.color = 'black';
console.log(car1.color); // black

console.log('car1 proto color: ' + car1.__proto__.color); //original color
console.log('car2 proto color: ' + car2.__proto__.color); //original color
console.log('car2 proto color: ' + car2.__proto__);

console.log('car1 color: ' + car1.color); // black
console.log('car2 color: ' + car2.color); // original color
