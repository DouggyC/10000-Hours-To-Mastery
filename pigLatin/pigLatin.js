/**
 * Function: PigLatin translator, solution#1
 * description: Converts word into PigLatin
 *
 * @params: word string
 *
 * @magic: if / statments inside for loop
 *
 * Returns:
       paragraph => aragraphpay
       california   => aliforniacay      : starts with consanant
       algorithm  =>  algorithmway
       eight          =>  eightway          : starts with vowel
       psychology =>  ologypsychay
       glove          =>  oveglay
       xyz              =>  xyzay               : no vowel
 */

function translatePigLatin(str) {
  let vowels = /[aeiou]/gi;
  let cons = /[bcdfghjklmnpqrstvwyz]/gi;

  for (let i = 0; i < str.length; i++) {
    // if indices is consanant, true, continue loop to next letter
    if (cons.test(str[i])) {
      continue;
      // if 1st letter is a vowel
    } else if (vowels.test(str[0])) {
      return str + "way";
      // if indice is an a vowel
    } else if (vowels.test(str[i])) {
      return str.slice(i) + str.slice(0, i) + "ay";
      // if word does not have any
    } else if (vowels.test(str[i]) === false) {
      return str + "ay";
    }
  }
}

console.log(translatePigLatin("paragraph")); // > aragraphpay
console.log(translatePigLatin("california")); // > aliforniacay
console.log(translatePigLatin("algorithm")); // > algorithmway
console.log(translatePigLatin("eight")); // > eightway
console.log(translatePigLatin("psychology")); // > ologypsychay
console.log(translatorPigLatin("glove")); // > oveglay
console.log(translatePigLatin("xyz")); // > xyzay

/**
 * Function: PigLatin translator, solution#2
 * description: Converts word into PigLatin
 *
 * @params: word string
 *
 * @magic: if / statments inside for loop
 *
 * Returns:
       paragraph => aragraphpay
       california   => aliforniacay      : starts with consanant
       algorithm  =>  algorithmway
       eight          =>  eightway          : starts with vowel
       psychology =>  ologypsychay
       glove          =>  oveglay
       xyz              =>  xyzay               : no vowel
 */
