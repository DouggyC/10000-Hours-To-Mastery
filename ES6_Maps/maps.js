// Maps is an object that hold key value pairs, and any value whether object, object reference type or primitive type; can be used as a KEY:  or VALUE;

// MAPS  = key-value pairs - can use ANY type as a key or value
// another Oject structure


const map1 = new Map();

// Set the KEYS
 const key1 = 'some string',
       key2 = {},
       key3 = function() {};

// MAP key: VALUES
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// .Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));
// Value of key1 Value of key2 Value of key3

// Count values
console.log(map1.size); // 3 - key value pairs

// ITERATING MAPS

// Loop using for...of to get keys and values
for(let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}
// some string = Value of key1
// [ object Object] = Value of key2
// function() {} = Value of key3

// Loop with forEach
map1.forEach(function(value, key){
  console.log(`${key} = ${value}`);
});

// Iterate KEYS only
for(let key of map1.keys()) {
  console.log(key);
}
// some string
// {}
// f () {}

// Iterate VALUES only
for(let value of map1.values()) {
  console.log(value);
}
// Value of key1
// Value of key2
// Value of key3


// CONVERT TO ARRAYS

// Create an array of the KEY: VALUE PAIRS
const keyValArr = Array.from(map1);
console.log(keyValArr);
/*
[
  [ [ 0: 'some string' ], [ 1: 'Value of key1'] ],
  [ [ 0: Object {} ], [ 1: 'Value of key2'] ],
  [ [ 0: function key3() ], [ 1: 'Value of key3'] ]
]
*/

// Create an array of the VALUES
const valArr = Array.from(map1.values());
console.log(valArr);
/*
[
   [ 0: 'Value of key1'],
   [ 1: 'Value of key2'],
   [ 2: 'Value of key3']
]
*/

// Create an array of the KEY: VALUE PAIRS
const keyArr = Array.from(map1.keys());
console.log(keyArr);
/*
[
  [ 0: 'some string' ],
  [ 1: {} ],
  [ 2: f () ]
]
*/
