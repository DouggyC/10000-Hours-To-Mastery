// Two Sum

function twoSumLinear(arr, sum) {
  let pairs = [];
  let ExpRTimeCounter = 0
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        // ExpRTimeCounter++;
      if (sum - arr[i] == arr[j]) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(ExpRTimeCounter);
  return pairs;
}
twoSumLinear([1, 2, 3, 4, 4, 5], 8);
// [ [3, 5], [4, 4], [4, 4], [4, 4], [4, 4], [5, 3] ]


function twoSumHashTable(numArr, sum) {
  let pairs = [];
  let hashtable = [];
  let counter = 0;
  console.time('Loop');
  for (var i = 0; i < numArr.length; i++) {
    counter++
    let currNum = numArr[i];
    let counterPart = sum - currNum;
    if (hashtable.indexOf(counterPart) !== -1) {
      pairs.push([ currNum, counterPart ]);
    }
    hashtable.push(currNum); // incremention loading fo the hashtable changes the results
    console.log(i, currNum, hashtable);
    // console.log(pairs);
  }
  console.log(counter);
  console.timeEnd('Loop');
  return pairs;
}
twoSumHashTable([1, 2, 3, 4, 4, 5, 10], 8);

// function twoSum(numArr, sum) {
//   let pairs = [];
//   let hashtable = numArr;
//
//   for (var i = 0; i < numArr.length; i++) {
//     let currNum = numArr[i];
//     let counterPart = sum - currNum;
//     if (hashtable.indexOf(counterPart) !== -1) {
//       pairs.push([ currNum, counterPart ]);
//     }
//     console.log(i, currNum);
//     console.log(hashtable);
//     console.log(pairs);
//   }
//   // return pairs;
// }
// twoSum([1, 2, 3, 4, 4, 5], 8);
