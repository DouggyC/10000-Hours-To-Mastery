// SETS - Store unique values of any type
// sets or list of unique values, whether primitive or reference
// another Oject structure

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); // does not get repeated
console.log(set1);
// Set [ 100, 'A string', {...}, true]
/*
[
  <entries>
    0: 100,
    1: 'A string'
    2: Object { ... }
    3: true
]
*/

const set2 = new Set([1, true, 'string']);
console.log(set2);
// Set [ 1, true, 'string' ]
/*
[
  <entries>
    0: 1
    1: true
    2: 'string'
]
*/

// Get count / size

console.log(set1.size); // 4

// Check for values
console.log(set1.has(100)); // true
console.log(set1.has(50 + 50)); // true
console.log(set1.has( {name: 'John'} )); // false, reference not primitive type, pointing to a different location in memory
console.log(set1.has( {name: 'John'} === {name: 'John'} )); // false
console.log('string' === 'string'); // true, because primitive types

// Delete from the set
set1.delete(100);
console.log(set1); // deleted



// ITERATING THROUGH SETS

// For..of -- .values() .keys() ¿ .entries()
for(let item of set1) {
  console.log(item);
}
// A string
// {name: 'John'}
// true

// ForEach loop
set1.forEach((value) => {
  console.log(value);
});
// A string
// {name: 'John'}
// true

// CONVERT SETS TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
