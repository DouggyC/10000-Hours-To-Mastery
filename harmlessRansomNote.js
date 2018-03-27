function harmlessRansomeNote(noteText, magazineText) {
  let noteArr = noteText.split(' ');
  let magazineArr = magazineText.split(' ');
  let magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }
      magazineObj[word]++;
  });

  let noteIsPossible = true;
  noteArr.forEach(word => {

  });

  console.log(magazineObj);
}


harmlessRansomeNote('', 'a a b b c');
