function translatePigLatin(str) {
  let vowels = /[aeiou]/g;
  let plWord = "";
  console.log(str.length);
  for (let i = 0; i < str.length; i++) {
    if (vowels.test(str[i])) {
      console.log(i + "  is a vowel", str.charAt(i));
      if (!vowels.test(str[i + 1])) {
        console.log(i + 1 + " not vowel", str.charAt(i + 1));
        plWord = str.slice(0, i);
        console.log(plWord, " is the beginning letters");
        console.log(str.slice(i) + str.slice(0, i) + "ay");
        break;
      }
    } else if (!vowels.test(str[i])) {
      console.log(str + "way");
      break;
    }
  }
}

translatePigLatin("paragraph");
translatePigLatin("california");
translatePigLatin("algorithm");
translatePigLatin("eight");

//

function translatePigLatin(str) {
  let vowels = /[aeiou]/g;
  let ct = /[bcdfghjklmnpqrstvwxyz]/;
  let plWord = "";
  let endWord = "";

  if (!vowels.test(str[0])) {
    for (let i = 0; ct.test(str[i]); i++) {
      // console.log(str[i], i);
      if (!vowels.test(str[i])) {
        plWord += str.slice(0, i + 1);
      }
      return plWord;
      // console.log(i + " not a vowel", str.charAt(i));
      // plWord += str.slice(i, i + 1)
      // endWord = str.slice(i + 1)
      // console.log(endWord + plWord);
      // console.log(str.slice(i + " - " + i + 1) + str.slice(0, i) + "ay");
    }
    console.log(plWord);
    //console.log(str.slice([i + 1]) + plWord + "ay");
    // console.log(str);
  } else {
    console.log(str + "way");
  }
}

// translatePigLatin("paragraph");
translatePigLatin("glove");
// translatePigLatin("algorithm");
// translatePigLatin("eight");

//
function translatePigLatin(str) {
  let vowels = /[aeiou]/g;
  let ct = /[bcdfghjklmnpqrstvwxyz]/;
  let plWord = "";
  let endWord = "";
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (!vowels.test(str[i])) {
      if (!vowels.test(str[i + 1])) {
        console.log((plWord += str.slice(0, i)), counter++);
      }
    } else if (vowels.test(str[0])) {
      console.log(str + "way");
    }
  }
}

// translatePigLatin("paragraph");
translatePigLatin("psychology");
// translatePigLatin("algorithm");
// translatePigLatin("eight");


for(let i=0; i<word.length; i++) {
    while(!vow.test(word[i])){
		console.log(word[i]
    }
}
