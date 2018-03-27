// Normal Word to a Palindrome
// Write a function that takes in a word and returns it as a palindrome
// Change a normal word to palindrome

// ES6
charOf = str => {
  let revString = '';
  for(let char of str) {
    revString = char + revString + char;
  }
  return revString;
}
charOf('Batman'); // "namtaBBatman"

// Concatenates the char on LEFT and RIGHT of variable
