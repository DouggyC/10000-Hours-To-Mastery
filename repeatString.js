/**
 * Repeat a string, repeat a string
 * Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 */

function repeatStringNumTimes(str, num) {
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);

//while
function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

//repeat
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

repeatStringNumTimes("abc", 3);

// intermediate code solution
function repeatStringNumTimes(str, num) {
  if (num < 0) return "";
  if (num === 1) return str;
  else return str + repeatStringNumTimes(str, num - 1);
}
