function alphabeticalOrder(arr) {
  return arr.sort((a, b) => a > b);
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
// > a, a, d, c, g, z

// Return a Sorted Array Without Changing the Original Array
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort((a, b) => a - b);
}
console.log(nonMutatingSort(globalArray));
// > [2,3,5,6,9]
