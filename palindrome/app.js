//Using split()

//- defines a function that splits a string into an [array of "strings"] using the specified (separator).
// -After splitting the string, the function logs messages indicating the original string (before the split), the separator used, the number of elements in the array, and the individual array elements.

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' - '));
}

var tempestString = 'Oh brave new world that has such people in it.';
var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

var space = ' ';
var comma = ',';

// splitString(tempestString, space);
// splitString(tempestString);
splitString(monthString, comma);



//Removing spaces from a string

//- In the following example, split() looks for 0 or more spaces followed by a semicolon followed by 0 or more spaces and, when found, removes the spaces and the semicolon from the string. nameList is the array returned as a result of split().

var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

console.log(names);

var re = /\s*;\s*/;
var nameList = names.split(re);

console.log(nameList);

//This logs two lines; the first line logs the original string, and the second line logs the resulting array.

// => Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
// =>$ [ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand " ]


Returning a limited number of splits

In the following example, split() looks for spaces in a string and returns the first 3 splits that it finds.

var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3);

console.log(splits);

This script displays the following:

["Hello", "World.", "How"]


// Capturing parentheses

//- If separator contains capturing parentheses, matched results are returned in the array.

var myString = 'Hello 1 word. Sentence number 2.';
var splits = myString.split(/(\d)/);

console.log(splits);

// => This script displays the following:

// =>$ [ "Hello ", "1", " word. Sentence number ", "2", "." ]

Reversing a String using split()

var str = 'asdfghjkl';
var strReverse = str.split('').reverse().join(''); // 'lkjhgfdsa'
// split() returns an array on which reverse() and join() can be applied

Bonus: use === operator to test if the original string was palindrome.
