// Caesar Cipher:
// write a function encodes a string with a given value number.

// How the CaesarCipher works:
// The caesarCipher works by shifting the index position of a letter to a different position in the alphabet. That letter now becomes represented by the new letter at the new position. The cipher uses a numeric equation to shift the positions.

function caesarCipher(str, num) {
  num = num % 26;
  let string = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let encMsg = '';

  for (var i = 0; i < string.length; i++) {
    let currentLetter = string[i];
    if (currentLetter === ' ') {
      encMsg += currentLetter;
      continue;
    }
    currentLetter = alphabet.indexOf(currentLetter);
    let newIndex = currentLetter + num;
    if (newIndex > 25) {
      newIndex -= 26;
    }
    if (newIndex < 0) {
      newIndex += 26;
    }
    if (str[i] === str[i].toUpperCase()) {
      encMsg += alphabet[newIndex].toUpperCase();
    } else {
      encMsg += alphabet[newIndex];
    }
  }
  return encMsg;
}
caesarCipher('abc', 3);







caesarCipher = (str, num) => {
  str = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let step1 = [];
  let newMsg = [];
  for (var i = 0; i < str.length; i++) {
    let encMsg = alphabet.indexOf(str[i]) + num;

#TODO if(encMsg > 26) {
      encMsg = 29 - encMsg;
    }
    step1.push(encMsg);
  }
  console.log(step1);
  step1.forEach(i => {
    newMsg.push(alphabet[i]);
  })
  console.log(newMsg.join(''));

}
caesarCipher('abc', 3);
