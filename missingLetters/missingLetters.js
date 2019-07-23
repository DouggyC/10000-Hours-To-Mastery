/**
 * Function: Find the missing letter in sequence of letters
 *
 * @params: string of letters with one missing letter
 * @Return: The one missing letter or return undefined if no letter is missing
 * @Example: "abce" // > "d"
 *
 * // Rewrite the magic
 * @magic: because the param string is provided as sorted in alphabetically order, we can assume an alpha numeric range using the letters character code. This means the number that represents the Letter. Because the character code numbers are in sequence, like alphabetically numbers. We can use the character code of the starting and ending letter as a comparsion range. We also can use it as the index.
 *
 * for loop:
 * @start: first letter in str param = "a" or str[0] = charCodeAt() = 97
 * @end: last letter in str param = "e" or str[str.length - 1] = charCodeAt() = 101
 * index range = 97...101 or "a", "b", "c", "d", "e"
 *
 * if statment
 * if the strings, index of, the letters character code is greater than 0
 * if the existence of the index is not present in string return that letter from its character code
 */

function missingLetter(str) {
  for (
    let i = str[0].charCodeAt();
    i <= str[str.length - 1].charCodeAt();
    i++
  ) {
    if (str.indexOf(String.fromCharCode(i)) < 0) {
      return String.fromCharCode(i);
    } else {
      return undefined;
    }
  }
}
console.log(missingLetter("abce")); // > "d"
console.log(missingLetter("abcdefghjklmno")); // > "i"
console.log(missingLetter("stvwx")); // > "u"
console.log(missingLetter("bcdf")); // > "e"
console.log(missingLetter("abcdefghijklmnopqrstuvwxyz")); // > undefined

/**
 * Same function for multiple missing letters
 *
 * @Return: array or string of missing letters
 */
function multipleMissingLetters(str) {
  let missingLetters = [];
  let range = str[str.length - 1].charCodeAt() - str[0].charCodeAt() + 1;

  for (
    let i = str[0].charCodeAt();
    i <= str[str.length - 1].charCodeAt();
    i++
  ) {
    // console.log(str.indexOf(String.fromCharCode(i)));
    if (str.indexOf(String.fromCharCode(i)) < 0) {
      missingLetters.push(String.fromCharCode(i)); // > + i to test
      if (missingLetters.length === range - str.length) {
        return missingLetters.join();
      }
    } else if (str.length === range) {
      return undefined;
    }
  }
}

console.log(multipleMissingLetters("ae")); // > "bcd"
console.log(multipleMissingLetters("az")); // > "bcdefghijklmnopqrstuvwxy"
console.log(multipleMissingLetters("Az")); // > "BCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxy"
console.log(multipleMissingLetters("abcdefghijklmnopqrstuvwxyz")); // > undefined

//rewrite a working solution using different
// splice and dice solution
function missingLetter(str) {
  let searchRange = "abcdefghijklmnopqrstuvwxyz";
  searchRange.substr(str.indexOf(str[0]), str.length);
}

// substr solution
function missingLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let matchPattern = alphabet.substr(str.indexOf(str[0]), str.length);
  let missingLetter = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(i) === matchPattern[i]) {
      console.log(alphabet.indexOf(matchPattern[i]));
      // missingLetter.push(matchPattern[i]);
      // str.splice(alphabet.indexOf(matchPattern[i]), );
    }
  }

  // return str;
}
console.log(fearNotLetter("abce"));

//
// Basic Code Solution:
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    // code of current character
    let code = str.charCodeAt(i);

    // if code of current character is not equal to first character + no of iteration hence character has been escaped
    if (code !== str.charCodeAt(0) + i) {
      // if current character has escaped one character find previous char and return
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce")); // > d

// Code Explanation:
// This solutions makes use of a for loop.
// Code of encountered character is stored in code.
// It is checked if code of current character is the expected one (no characters are skipped) by using the logic - code of current character = code of first character + number of iterations.
// If a character is missing, the missing character is found and the final string is returned.
// undefined is returned if there is no missing character in the string.

//
// Intermediate Code Solution:
// using map

function fearNotLetter(str) {
  var compare = str.charCodeAt(0),
    missing;

  str.split("").map(function(letter, index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

fearNotLetter("abce");

// Code Explanation:
// First we define variables to store the character code for the first letter in the string, and to store whatever missing letters we may find.
// We turn the string to an array in order to map through it instead of using for and while loops.
// As we map through our letters’ character codes, we go comparing with the one that should be in that position.
// If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
// If not, the missing letter will be assigned to the missing variable, which will be returned after the map is finished.
// If there are no missing characters, return undefined.

//
// Simplified Advanced Code Solution:
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
// Code Explanation:
// Loop over the string
// Check if the difference in char codes between adjacent characters in the string is more than 1 (chack ASCII table)
// Return the missing character ( +1 from where the gap was detected)

//
//Advanced Code Solution:
// loop breaks when last indices are not equal
function fearNotLetter(str) {
  // a range variable is created to negative match str, excluding
  var allChars = "";
  // negate str
  var notChars = new RegExp("[^" + str + "]", "g");

  for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  // return anything that does not match string
  return allChars.match(notChars)
    ? allChars.match(notChars).join("")
    : undefined;
}

fearNotLetter("abce");

// Code Explanation:
// A new string allChars is created.
// Create a regular expression notChars which selects everything except str.
// The for loop is used to add all the letters in the range to allChars.
// match() is used to strip off the str letters from the newly created string and it is returned.
// If there are no missing characters, return undefined.
