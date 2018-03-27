

reverseInt = (int) => {
  const revInt = int.toString().split('').reverse().join('');
  return parseInt(revInt) * Math.sign(int);
}
