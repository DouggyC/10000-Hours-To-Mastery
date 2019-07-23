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



// Palindrome with regex
function palindrome(str) {
  var re;
  re = /\s|[\.,\-_()*#]/g;
  var nstr = str.toLowerCase().replace(re,'');
  if(nstr === nstr.split('').reverse().join('')){
    return true;
  } else {
    return false;
  }
}
palindrome("eye");
palindrome("eye");
palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
