// FizzBuzz

// Write a function that take in a number as a parameter.
// Log to the screen in ascending order, all of the numbers before that nunber.
// Now, if any of those numbers are; divisable by 3 log the word 'Fizz', divisable by 5 log the word 'Buzz'. If the number is divisable by 3 and 5 log the 'FizzBuzz'

/* (5)
1
2
Fizz
4
Buzz
.
.
15 => FizzBuzz */

fizzBuzz = (num) => {
  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
     else if (i % 3 === 0) console.log('Fizz');
     else if (i % 5 === 0) console.log('Buzz');
     else console.log(i);
  }
}
fizzBuzz(30);
