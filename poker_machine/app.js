let arr = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]];
let groupArr = [];

function shuffle(array) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  let index = -1;
  const lastIndex = length - 1;
  const result = array;
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  groupArr.push(result);
  console.log(groupArr);

  if (groupArr.length === 3) {
    for (var i = 0; i < groupArr[0].length; i++) {
      if (
        groupArr[0][i] === groupArr[1][i] &&
        groupArr[0][i] === groupArr[2][i]
      ) {
        console.log(groupArr[0][i], groupArr[1][i], groupArr[2][i]);
      } else {
        console.log("Lose");
      }
    }
  }
}

arr.forEach(a => shuffle(a));
