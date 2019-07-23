// Capitalize the 1st letter of: 'Every Word In A String'

// Function should take in a string of words and return the string with the first letter of each word capitalized.

// 'i love javaScript' => 'I Love Javascript'

function capLetters(str) {
  const strArr = str.toLowerCase().split(" ");

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(" ");
}
capLetters("captain america");
//=> Captain America

// Return first letter as captial
function capFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
capFirstLetter("spiderman");

// fix ??
function titleCase(str) {
  let strArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(" ");
}
titleCase("bREAK sOMe Eggs");

// fix titleCase with substr
function titleCaseWithReplace(str) {
  let newStr;
  let strArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strArr.length; i++) {
    newStr = strArr[i]
      .substr(0, 1)
      .replace(strArr[i].substr(0, 1).toUpperCase());
  }
  console.log(newStr);
}
titleCaseWithReplace("avengers assemble");
// ??

//
// Avengers Assemble
function cptReplace(str) {
  let newStr = [];
  let strArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strArr.length; i++) {
    newStr.push(
      strArr[i].replace(strArr[i].charAt(0), strArr[i].charAt(0).toUpperCase())
    );
  }
  console.log(newStr.join(" "));
}
cptReplace("avengers assemble");
