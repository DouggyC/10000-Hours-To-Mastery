let searchStart = 'A'.charCodeAt(); // 65
let searchEnd = 'z'.charCodeAt(); // 122
let searchableRange = searchEnd - searchStart; // 122 - 65 = 57

const match = []; // matched
let input = 'abc'; // 97, 98, 99
let i = 0;
let counter = 0;

let currentChar = input;
let currentCode = input.charCodeAt();


let j = searchStart;

for(let z=0; z<input.length; z++) {
  while (currentCode != j) {
    console.log('Start: ' + j)
    counter++;
    //if(currentCode == j) {
    //match.push(currentChar);
    //break; // break inner loop on if==true
    //}
    // if j is greater
    searchableRange = Math.floor(searchableRange / 2) + 1
    if (j < currentCode) {
      j = j + searchableRange;
    }
    // if j is less than
    else {
      j = j - searchableRange;
    }
  }
  console.log('j: ' + j)

  console.log('Steps: ' + counter, currentChar)
  match.push(currentChar);

  /*
  a   97
  ...
  g    103
  ...
  n    110
  ...
  z    122



  */
