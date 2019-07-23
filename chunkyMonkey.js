function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    // next iteration starts at 2
    newArr.push(arr.slice(i, i + size));
    // slice at iteration i=0; i=2;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// > [['a', 'b'], ['c', 'd']]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

/**
 * Function: divides up an array into sub nested arrays.
 * @params: array
 * @params: divisable number; size of sub chunkArrayInGroups
 *
 * Call stack i=0; i+=2 | i=2; i+=4
 */
