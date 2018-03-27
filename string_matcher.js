let passWord = "axyz";
let count = 0;

function bruteForce(input) {
  let match = [];
  let alaphabet = "abcdefghijklmnopqrstuvwxyz";

  input.split('');
  alaphabet.split('');

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < alaphabet.length; j++) {
      count++;
      if (input[i] == alaphabet[j]) {
        match.push(alaphabet[j]);
        break; // break inner loop on if==true
      }
    }
  }
  console.log(match, count);
};
bruteForce(passWord);




let abc = "axyz";
function check() {
  let res = [];
  let runs = 0;
  for (i = 0; i < abc.length; i++) {
    runs++;
    res.push(abc[i].match(/[a-zA-Z0-9]/));
  }
  console.log(res, runs);
}
check();
