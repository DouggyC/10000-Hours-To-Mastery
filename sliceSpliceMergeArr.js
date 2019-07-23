/**
 * Create copy of second array and copy the contents of arr1 to a specified index in the copied array.
 Return a merged array
 */
// fix

function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice(0);
  arr3.splice(n, 0, ...arr1);
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= num) {
      arr.splice(i, 0, num);
      break;
    }
  }
  console.log(arr);
  return arr.indexOf(num);
}

getIndexToIns([10, 20, 30, 40, 50], 30);
