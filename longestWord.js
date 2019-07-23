/**
 * Longest word in a string
 * splits string into array and iterates over each element declaring the longest word length to the variable and returns number of longest word.
 */

let longestWord = 0;

function findLongestWordLength(str) {
  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longestWord) {
      longestWord = strArr[i].length;
    }
  }

  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//
//

function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
