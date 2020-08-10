//-- Destructuring Assignment
let a, b;
[a, b] = [100, 200];
console.log(a, b); // 100, 200

//-- Spread Operator, returns array with rest objects
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest); // [300 , 400, 500]

//-- Spread operator can also return object
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(a, b, rest); // 100 200 { c: 300, d: 400, e: 500 }

//-- Array Destructuring
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3); // John Beth Mike


//-- Parse array returned from function
function getPeople() {
  return ["John", "Beth", "Mike"];
}
let person1, person2, person3;
[person1, person2, person3] = getPeople();
console.log(person1, person2, person3); // John Beth Mike


//-- Object Destructuring
const person = {
  name: "Hoe John",
  age: 32,
  city: "Miami",
  gender: "Male",
  sayHello: function() {
    console.log("Hello");
  }
};

//-- Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

//-- New ES6 Destructuring
const { name, age, city, sayHello } = person;
console.log(name, age, city); // Hoe John 32 Miami
sayHello(); // Hello


// ES6+ method
// Since ES6, you can also swap variables more elegantly. You can use destructuring assignment array matching. It’s simply.

[a, b] = [b, a];

// Array matching
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

// object destructure naming with variable alias
let { id: uuid } = { id: 12345678 }
console.log(uuid); // 12345678
