// Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  numLegs: 4,
  eat: () => console.log('nom nom nom'),
  describe: () => console.log('My name is ' + this.name)
};
let begal = new Dog('Woof');
console.log(begal);
// > Dog{name: 'Woof', __proto__: }
