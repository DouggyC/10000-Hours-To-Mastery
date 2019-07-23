/**
 * Function: ROT13 Encrypt
 *
 * @ params: string
 */

/**
 * Dev notes:
 * 'A' = 65, 'Z' = 90
 * 'a' = 97, 'z' = 122
 * Unix terminal application tr; translate or transliterate
 * https://en.wikipedia.org/wiki/ROT13
 * https://en.wikipedia.org/wiki/Tr_(Unix)
 *
 * Variants:
 * ROT5 applies numeric digits 0-9
 * ROT13.5 - ROT13 and ROT5 can be used together in the same message
 * ROT47 uses a larger set of characters from the common character encoding known as ASCII
 */
a  |b  |c  |d  |e  |f  |g  |h  |i  |j  |k  |l  |m
97 |98 |99 |100|101|102|103|104|105|106|107|108|109
n  |o  |p  |q  |r  |s  |t  |u  |v  |w  |x  |y  |z
110|111|112|113|114|115|116|117|118|119|120|121|122

// ROT13 logic

if''.charCodeAt() >= 110 {
  -13
} else {
  ''.charCodeAt() + 13
}


a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z
 *
 */

/**
 * Edge cases:
 * white space - trim(), sanitize with RegEx, replace
 * cases - format all to lowerCase
 * grammar - sanitize with grammar removing RegEx
 */

function rot13(str) {
  let cipher = '';
  str.split("").forEach(l => {
    if (l.charCodeAt() >= 110) {
      console.log(cipher += l.charCodeAt() - 13); // as num
      console.log(cipher += String.fromCharCode(l.charCodeAt() - 13)); // convert to letter
    } else {
      console.log(cipher += l.charCodeAt() + 13);
      console.log(cipher += String.fromCharCode(l.charCodeAt() + 13));
    }
    return cipher;
  });
}
console.log(rot13("hello"));


/**
  * Function: ROT13 Decrypt
  *
  * params: Encrypted typeOf ?? Array or String
  * easy solution: Array of letters
  * easy solution: Array of numbers
  * advan solution: string of letters that requires formating. eg. uryyb == 'hello'
  * advan solution: string of numbers that requires formating. eg. 11711412112198 == 'hello'
  *
  *
  * Extra Credit:
  */
