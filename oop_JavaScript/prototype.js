/**  Changing the Prototype to a New Object -
There is one crucial side effect of manually setting the prototype to a new object. It erased the constructor property!
// console.log(duck.constructor) 
// => undefined
 */
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog, // +
  numLegs: 4,
  eat: () => console.log('nom nom nom'),
  describe: () => console.log('My name is ' + this.name)
};
let beagle = new Dog('Woof');
console.log(beagle);
// => Dog{name: 'Woof', __proto__: constructor: f}

/** Show prototype inheritance - an object inherits its prototype directly from constructor function */
Dog.prototype.isPrototypeOf(beagle); // => True
// Dog is supertype of beagle

/** Prototype Chain */
typeof Dog.prototype; // => object
Object.prototype.isPrototypeOf(Dog.prototype); // => True

/** Set the Child's Prototype to an Instance of the Parent */
function Animal(name) {
  this.name = name;
}
Animal.prototype = {
  constructor: Animal,
  eat: () => console.log('nom nom nom')
};
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog('Woffie', 'Calv');
console.log(beagle.prototype); // => Animal {__proto__: constructor()}
beagle.eat();

// Without Object.create()
Dog.prototype = Animal.prototype;
console.log(beagle.prototype); // => { constructor() }

// Prototype chain
