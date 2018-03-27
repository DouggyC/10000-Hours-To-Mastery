// Reverse Order of Array in place
function reverseArrayInPlace(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
      let tempVar = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = tempVar;
      console.log(arr[i], arr.length/2, tempVar, i, arr);
    }
    return arr;
}
reverseArrayInPlace(['a','b','c','d','e','f']); // ["f", "e", "d", "c", "b", "a"]
reverseArrayInPlace([ 1,  2,  3,  4,  5,  6, 7]) // [6, 5, 4, 3, 2, 1];

// Loop through half the array and re-reference the iteration with it's complement iteration



// EXPERIMENTAL
// Parabolic Array # 1
function reverseParabolicArray(arr) {
    for (var i = 0; i < arr.length; i++) {
      let tempVar = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      tempVar = arr[arr.length - 1 - i];
      console.log(arr[i], arr.length, tempVar, i, arr);
    }
    return arr;
}
reverseParabolicArray(['a','b','c','d','e','f']); // ["f", "e", "d", "d", "e", "f"]

// Parabolic Array # 2
function reverseParabolicArray(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
      let tempVar = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      tempVar = arr[arr.length - 1 - i];
      console.log(arr[i], arr.length/2, tempVar, i, arr);
    }
    return arr;
}
reverseParabolicArray(['a','b','c','d','e','f']); // ["f", "e", "d", "d", "e", "f"]
