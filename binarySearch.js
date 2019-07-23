/**
 * Function that performs binary search using recusion
 * The function searches an assorted array to find existence of value(key) array[]
 *
 * #Note array needs to be already sort ie alphabetically or numerically
 *
 * @ variable1 middleIndex of the array
 * @ variable2 element of the middleIndex
 *
 * @params1 array, @params2 key
 * @ Condition: base case,
 *     else if middleElement is less than the key and array length contains more than one element, search 2nd half of array,
 *     else if middleElement is greater than the key and array length contains more than one element, search 1nd half of array,
 *     else key is not found in array return false
 *
 * @magic Starting with an assorted array we're able to begin by comparing the value of the key, to the value of the middleElement. Identifying which half of the array the key is located, halving the search sample, repeated until key is found (base case).
 *
 * @ returns boolean;
 */

function binarySearch(numArray, key) {
  let middleIndex = Math.floor(numArray.length / 2);
  let middleElement = numArray[middleIndex];

  // base case
  if (middleElement === key) {
    return true;
  } else if (middleElement < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  } else if (middleElement > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIndex), key);
  } else {
    return false;
  }
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
