// Write a function to check if a word is a Palindrome
//  A Palindrome is a word that is spelt the same, whether spelt forwards or backwards. ie 'Racecar' or 'level'
// The function should return true or false.
// This function will take in a single string argument
// Don't not use regular expressions


// ES6 Syntax
isPalindrome = str => {
  let revStr = str.toLowerCase().split('').reverse().join('');
  return revStr === str;
};
isPalindrome('racecar'); // True
isPalindrome('Level'); // True




// TODO: Add edge cases for integers

//
// function isPalindrome(str) {
//   str = str.toLowerCase();
//   let charsArr = str.split('');
//   let validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
//
//   let lettersArr = [];
//   charsArr.forEach(char => {
//     if (validChars.indexOf(char) > -1) {
//       lettersArr.push(char);
//     }
//   });
//
//   if (lettersArr.join('') === lettersArr.reverse().join('')) {
//     console.log(lettersArr);
//     return true;
//   } else {
//     return false;
//   }
// }
// isPalindrome(10);
