/**
 * Return an array with the largest number from each sub array
 * [ [100, 50], [50, 25], [10, 20] ] => [100, 50, 20]
 */

// with sort(ascending)
function largestNumFromNestedArr(arr) {
  let largestNumArr = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i].sort(function(a, b) {
      return a - b;
    });
    largestNumArr.push(arr[i][arr[i].length - 1]);
  }

  return largestNumArr;
}

largestNumFromNestedArr([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

// with nested loop
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}
