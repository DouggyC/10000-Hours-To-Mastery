

let p = "level";

// function palin(p) {
//   let str = p.split('').reverse().join('');
//   console.log(str);
// }




// function palin(p) {
//   let str = p.split('').reverse().join('');
//   let opp = str.split('').reverse().join('');
//   if(str === opp) {
//       console.log(str);
//       console.log(opp);
//   }
// }

// palin(p);

palindrome = (str) => {
  let a = str, b = a;
  if (a.split('').reverse().join('') && b.split('').reverse().join('')) {
    console.log(a , b);
  }
}


palindrome(p);



// * Note browser runs synchronously, and does not function hoist



// Function that validates if string is palindrome, removing whitespace and grammar, toLowerCase.
isPalindrome = (stringToTest) => {
    let str = stringToTest.replace(/\s|,/g,'').toLowerCase();
    return str === str.split('').reverse().join('');
}



/* Removes format string -
      white space , comma, quote, exclimation, back tick = \s
      range of other special char [$-/:-?{-~!"^_`\[\]]
      search all string /g
      replace with nothing to lowerCase
      if str === null return false;
      return boolean ==  str split and reverse and joined is palindrome
*/

(typeof str !== 'string') 

isPalindrome = (str) => {
  if (str === null) {
    return false;
  } else {
    let a = str.replace(/\s|,|'|!|`|[$-/:-?{-~!"^_`\[\]]/g,'').toLowerCase();
    console.log(a);
    return a == a.split('').reverse().join('');
  }
}

isPalindrome = s => s === null ? false : (s = s.toLowerCase().replace(/\W/g, '')).split('').reverse().join('') == s;
