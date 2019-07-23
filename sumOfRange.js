/**
* Function: Sum All Numbers within the given range, inclusive
  eg. [1, 4]: 1 + 2 + 3 + 4 = 10
*/

// decrementing loop
function sumAll(arr) {
  let sum = 0;
  for (let i = Math.max(...arr); i >= Math.min(...arr); i--) {
    sum += i;
  }
  return sum;
}
console.log(sumAll([1, 4]));
// > 10

// accending loop
function sumAll(arr) {
  let sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}
console.log(sumAll([1, 4]));
// > 10

// sort() &  Arithmetic Progression summing formula

function sumAll(arr) {
  arr.sort((a, b) => a - b);
  // Arithmetic Progression summing formula
  let sum = ((arr[1] - arr[0] + 1) * (arr[1] + arr[0])) / 2;
  return sum;
}
console.log(sumAll([4, 1]));
// > 10

function sumAll(arr) {
  arr.sort((a, b) => a - b);
  return ((arr[1] - arr[0] + 1) * (arr[1] + arr[0])) / 2;
}
console.log(sumAll([4, 1]));
