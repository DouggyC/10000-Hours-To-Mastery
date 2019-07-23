// Two Sum

function twoSumLinear(arr, sum) {
  let pairs = [];
  let additionPairs = [];
  let ExpRTimeCounter = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      ExpRTimeCounter++;
      if (sum - arr[i] == arr[j]) {
        // if the difference of the sum minus the index[i], ie remainder is equalivent to index[j]
        pairs.push([arr[i], arr[j]]);
      }
      // if the total of index[i] plus index[j] is true
      if (arr[i] + arr[j] == sum) {
        additionPairs.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(ExpRTimeCounter);
  console.log(additionPairs);
  return pairs;
}
twoSumLinear([1, 2, 3, 4, 4, 5], 8);
// [ [3, 5], [4, 4], [4, 4], [4, 4], [4, 4], [5, 3] ]

/**
 * Function that calculates TWO SUM, with hashtable reference
 *
 * iterate through the array to find the number that matches the  remainder(ie. counterPart); of the sum number minus the currentNumber[i]
 ** To ensure we don't repeat add the same number at the same indexOf the numArr, we keep track by referencing the currentNumber using a hashtable record. Every loop iteration the currentNumber is pushed to the hashtable array.
 * The condition is If the indexOf the currentNumber[i] doesn't already exist in the hashtable array. Then push the new two sum pair to the pairs array.
 *
 * @params1 array of numbers, @params2 Target sum number
 *
 * @ returns pairs of numbers that add together to equal target sum number
 *
 *
 */
function twoSumHashTable(numArr, sum) {
  let pairs = [];
  let hashtable = [];
  // let counter = 0;
  console.time('Loop');
  for (var i = 0; i < numArr.length; i++) {
    // counter++;
    let currNum = numArr[i];
    let counterPart = sum - currNum;
    if (hashtable.indexOf(counterPart) !== -1) {
      if (pairs.indexOf(pairs[i] !== -1)) {
        pairs.push([currNum, counterPart]);
      }
    }
    hashtable.push(currNum); // incremention loading fo the hashtable changes the results
    console.log('Hashtable: ' + hashtable);
    console.log('Pairs: ' + pairs);
    console.log('Pairs i: ' + pairs[i]);
  }
  // console.log(counter);
  console.timeEnd('Loop');
}
twoSumHashTable([1, 2, 3, 4, 4, 5, 10, 4, 4], 8);

//
//
function twoSum(numArr, sum) {
  let pairs = [];
  let hashtable = numArr;

  for (var i = 0; i < numArr.length; i++) {
    let currNum = numArr[i];
    let counterPart = sum - currNum;
    if (hashtable.indexOf(counterPart) !== -1) {
      pairs.push([currNum, counterPart]);
    }
    console.log(i, currNum);
    console.log(hashtable);
    console.log(pairs);
  }
  // return pairs;
}
twoSum([1, 2, 3, 4, 4, 5], 8);
