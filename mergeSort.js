/**
 * MergeSort algorithm
 *
 * Function: mergeSort
 * @params: array
 * return: function(function(), function())
* magic: recursion, runs mergeSort halving the array until array contains (less than two) one element remaining

 **
 * Function: merge
 * @params1: array
 * @params2: array
 * return: sorted array
 * magic: compares the first element of each array and returns an assorted array.
 */

function mergeSort(arr) {
  // base condition, if array has 1 or no elements
  if (arr.length < 2) {
    return arr;
  }
  // split arrays
  let middleIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middleIndex);
  let secondHalf = arr.slice(middleIndex);
  // recursion
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2) {
  let results = [];
  // while arr1 and arr2 is not empty
  while (arr1.length && arr2.length) {
    let minElem;
    // Begin sorting, which ever arrays beginning index has a lower value, remove from array and push into results array.
    if (arr1[0] < arr2[0]) {
      minElem = arr1.shift();
    } else {
      minElem = arr2.shift();
    }
    results.push(minElem);
  }
  // then if either array is empty concatenate the sory array to the results, because the remainder will be greater
  if (arr1.length) {
    results = results.concat(arr1);
  } else {
    results = results.concat(arr2);
  }
  return results;
}

mergeSort([18, 51, 33, 48, 34, 200, 152, 12, 11, 885, 64, 727]);
