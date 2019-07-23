/**
 * confirm last character of a string,
    substring(start, end),
 * W3: This method extracts the characters in a string between "start" and "ending" indicies, not including "end" itself.
 */
function confirmEndingOfString(str, target) {
  // single character
  return str.substring(str.length - 1, str.length) === target;
  // multiple characters
  return str.substring(str.length - target.length, str.length) === target;
  // refactor: ending can be omitted
  return str.substring(str.length - target.length) === target;
}
confirmEndingOfString("Hello World!", "World!");

// substr(indices, amount)
function confirmEnding(str, target) {
  // refactor: ending can be omitted
  return str.substr(-target.length) === target;
}
confirmEnding("Twitch", "ch");

// with endsWith()
function confirmEnding(string, target) {
  // We return the method with the target as a parameter
  // The result will be a boolean (true/false)
  return string.endsWith(target); // 'Bastian'.endsWith('n')
}
confirmEnding("Bastian", "n");
