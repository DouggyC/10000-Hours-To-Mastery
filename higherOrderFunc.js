/**
 * Function: Squares positive integers in an array
 * filters through array for numbers that are positive and whole numbers
 * then, maps the positive integers to num, and, the num to the power of 2
 */

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = arr => {
  const squaredIntegers = arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));
  return squaredIntegers;
};

// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
