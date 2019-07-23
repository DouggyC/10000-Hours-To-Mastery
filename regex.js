/**
 * Regex Cheat Sheet
 * 
 * let regexp = new RegExp(, 'flags')
 *
 * let shortHand = //flags
 */
| = divider

Flags;
i = ignorecase;
g = global;
. = wildcard
[abc] = character class
[a-z0-9] = character set
[^] = negated a character used in character set
^ = Starts with.
$ = match from the ending
/a+ /g = plus matches consecutive occurrences eg "aabaa" returns aa,aa
/a*/ = matches characters that occur zero or more times. eg "Aaaarrr" returns "aaa"

// Regular expressions are by default greedy, and will return the longest possible match.
// However you can use the ? character to change it to lazy matching.
//eg
/<.*>/ = <h1></h1>
/<.*?>/ = <h1>
// Shortcut
// A-Za-z0-9_
/\w/g = [A-Za-z0-9_]; Matches alphabet upper and lower case, numbers and underscore.
// Matches the opposite
/\W/g = [^A-Za-z0-9_]; negate this character set
// ? Optional
/colou?r/ = "color","colour";

// Digital character
/\d/g = [0-9]
// opposite
/\D/g = [^0-9]
// Specific, lower, upper range number
/At{2,}h/ = "Attth"; true
/At{2}h/ = "Att"; true

// Variable
+ liveHere +
var regexstring = "whatever";
var regexp = new RegExp(regexstring, "gi");
var str = "whateverTest";
var str2 = str.replace(regexp, "other");
document.write(str2);

var notChars = new RegExp('[^'+str+']','g');
// let string = 'a'
// let re = /^('+string+')/gi

// Whitespace
/\s/g = [ \r\t\f\n\v]; whitespace, carriage return, tab, form feed, and new line characters.
// Non whitespace
\/S\g = [^ \r\t\f\n\v]

// Username
1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
2) Username letters can be lowercase and uppercase.
3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.

let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i; // Change this line
let result = userCheck.test(username);

// Pattern checks that greater than 5 characters and have two consecutive numbers
let pwRegex = /(?=\w{5,})(?=\D*\d{2})

/***/

let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must starts with
re = / world$/i; // Must ends with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE Character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional Character
re = /gre?a?y\?/i; // Excape character


// Brackets [ ] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/; // Match anything except a G or F
re = /[A-Z]ray/; // Match anything uppercase letter
re = /[a-z]ray/; // Match anything lowercase letter
re = /[A-Za-z]ray/; // Match any letter case
re = /[0-9]ray/; // Match any digit range or first digit
re = /[0-9][0-9]ray/; // Match any digit range


// Braces { } - Quantifiers
re = /Hel{2}o/i; // Matches exact quantity of letter
re = /Hel{2,4}o/i; // Match range
re = /Hel{2,}o/i; // Must occur at least {m} times


// Paretheses ( ) - Grouping
re = /^([0-9]x){3}$/; //=> '3x3x3x'

// Shorthand character classes
re = /\w/; // Word character - punctuation - alphanumeric or _ (any letter or number)
re = /\w+/; // + = one or more Word character - alphanumeric or _ (any letter or number)
re = /\W/; // Non word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any Non digit
re = /\s/; // Match whitespace character
re = /\S/; // Match non whitespace char
re = /Hell\b/i; // Word bondary


// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// .replace(regexPattern, var);
The second parameter is the string to replace the match or a function to do something.


// String to match
const str = 'Hello';

// Log Results
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} : does NOT match ${re.source}`);
  }
}

reTest(re, str);


// Split a String into an Array, separating each word by whitespace and punctuation

function splitify(str) {
  return str.split(/\W/);
  // return str.replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, ' ').split(/\s/g);
}
console.log(splitify("Hello World,I-am code"));


// format array and join to make string into readable sentence
function sentensify(str) {
  return str.split(/\W/).join(' ');
}
sentensify("May-the-force-be-with-you");



// remove whitespace and add hyphen without using replace
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/g).join('-');
}
var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);
let wc = urlSlug(" Winter Is  Coming");
console.log(wc)
