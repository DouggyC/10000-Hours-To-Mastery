// Reverse a string
// Write a function that takes in a string and returns the reverse order of each character in that string. Do not use .reverse() method.

function decrementingLoop(string) {
  let newString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i]
  }
  return newString;
}
decrementingLoop('Make it rain') //"niar ti ekaM"

// ES6 Syntax
revStr = str => str.split('').reverse().join('');
revStr('Bulletproof code') // "edoc foorptelluB"


// ReverseWords in a sentence
// Write a function that reverses the spelling of every word in a sentence, but does not reverse the order of the words in the sentence.
function reverseWords(string) {
  let wordsArr = string.split(' ');
  let reversedWordsArr = [];

  wordsArr.forEach(word => {
    let reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordsArr.push(reversedWord);
  });

  return reversedWordsArr.join(' ');
}
reverseWords('Superman saves the day'); // "namrepuS sevas eht yad"

let arr = [1,2,3,3,2,1];

for (var i = 0; i < arr.length; i++) {
  for (var j = arr.length; j = i; j--) {
    if (arr[i] == arr[j]) {
      console.log(i, j, arr.length);
      break;
    }
    console.log(i, j, arr.length);
  }
}
