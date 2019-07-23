/**
 * Write a function that takes two strings, s1 and s2 and returns the logest common subsequence of s1 and s2
 *
 * @params1: String
 * @params2: String
 *
 * @return: longest common subsequence
 * @eg:

    'ABAZDC',
    'BACBAD' => 'ABAD'

    'AGGTAB',
    'GXTXAYB' => 'GTAB'

    'aaaa', 'aa' => 'aa'
  *
  * @edge_Cases: case, repeatitions
  *
  * @optimize
 */

function lcss(s1, s2) {
  // log run time
  s1.split("");
  s2.split("");

  let commonChars = [];

  for (var i = 0; i < s1.length; i++) {
    for (var j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        // repeatitions
        if (commonChars.indexOf(s2[j]) === -1) {
          commonChars.push(s2[j]);
        } else {
          continue;
        }
      }
    }
  }
  return commonChars;
}

console.log(lcss("ABAZDC", "BACBAD"));
console.log(lcss("AGGTAB", "GXTXAYB"));
console.log(lcss("aaaa", "aa"));
