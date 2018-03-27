// Capitalize the 1st letter of: 'Every Word In A String'

// Function should take in a string of words and return the string with the first letter of each word capitalized.

// 'i love javaScript' => 'I Love Javascript'

capLetters = str => {
  const strArr = str.toLowerCase().split(' ');

  for(let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(' ');
}
capLetters('captain america');
