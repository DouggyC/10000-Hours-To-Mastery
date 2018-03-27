// Basic Positive enc
// charCode num
const startNum = 'A'.charCodeAt();
// generate random num
const encKey = Math.floor(Math.random() * 10);
// Enc multiplication
const encMsg = eval(startNum * encKey);

console.log(`${startNum} * ${encKey} = ${encMsg}`);
// Dec division
dec = (encNum) => String.fromCharCode(`${encNum / encKey}`);
console.log(dec(encMsg));



// Basic Negative enc
const startNum = -Math.abs('A'.charCodeAt());
const encKey = Math.floor(Math.random() * -10);
const encMsg = eval(startNum * encKey);
console.log(`${startNum} * ${encKey} = ${encMsg}`);

dec = (encNum) => String.fromCharCode(`${encNum / encKey}`);
console.log(dec(-Math.abs(encMsg)));

// TODO
// dec#2 increment denominator with a modulus of zero


// Basic Pos enc and dec array
const startMsg = 'Salt';
const encKey = Math.floor(Math.random() * 10);
const encMsg = [];
const decMsg = [];

for(let i=0;i<startMsg.length;i++) {
  encMsg.push(startMsg[i].charCodeAt() * encKey);
};  console.log(encMsg);

dec = (encMsgArr) => {
  for(let j=0;j<encMsgArr.length;j++) {
    decMsg.push(String.fromCharCode(`${encMsgArr[j] / encKey}`));
  }
};
dec(encMsg);
console.log(encKey, encMsg, decMsg.join(''));
