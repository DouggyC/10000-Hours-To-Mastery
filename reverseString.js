// CHALLENGE 1: REVERSE A STRING
// Retunr a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str.split('').reverse().join('');

///////////////////////////

    let revString = '';
    for(let i = str.length - 1; i >= 0; i--) {
      revString = revString + str[i];
    }
    return revString;

    ////////////////////////////////
    //
    // let revString = '';
    // for(let i = 0; i <= str.length - 1; i++) {
    //   revString = revString + str[i];
    // }
    // return revString;

    //[ ES6 ]////////////////////////////////


        let revString = '';
        for(let char of str) {
          revString = char + revString + char;
        }
        return revString;

        //////

        let revString = '';
        str.split('').forEach(function(char) {
            revString = char + revString;
        });

        let revString = '';
        str.split('').forEach(char => revString = char + revString);

        return revString;

        ////////

        return str.split('').reduce(function(revString, char) {
          return char + revString;
        }, '');

        return str.split('').reduce((revstring, char) => char + revString, '');
}
