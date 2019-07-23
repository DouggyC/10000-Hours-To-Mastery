/**
 * Function: Bubble Sort
 *
 */

function bubbleSort(arr) {
  let comparedElem = [];
  let ln = 0;
  let hn = 0;

  if (Math.max(...arr) !== arr[arr.length - 1] && Math.min(...arr) !== arr[0]) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        hn = arr[i];
        ln = arr[i + 1];
        arr[i] = ln;
        arr[i + 1] = hn;
        console.log(arr);
      } else {
        continue;
      }
    }
  }
}

console.log(bubbleSort([8, 5, 4, 3, 2, 1]));

// basic temporary variable index reassigning

// sort function

// array max and min - apply(), es6 spread

// splice
