// Resursion is a function take resursively calls itself again.

function factorial(n) {
  // This is our Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // Testing log:
  console.log(n);
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}
factorial(10);
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 3628800


function factorial(n) {
  // Termination condition to prevent infinite recursion
  if (n < 0) {
    console.log("Can't make a factorial from a negative number.");
    return;
  }
  // Base case
  if (n === 0) {
    return 1;
  }
  // Testing
  console.log(n);
  return n * factorial(n - 1);
}
factorial(6);
// 6
// 5
// 4
// 3
// 2
// 1
// 5
// 4
// 3
// 2
// 1
// 720



// Iterative recursion

function loopFactorial(n) {
  var result = n;
  while (n > 1) {
    result = result * (n-1);
    n--;
  }
  return result;
}

function recursiveFactorial(n) {
  if (n < 0) {
    return console.log("Must be a positive integer.");
  }
  else if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

var loopResult = loopFactorial(5)
var recursiveResult = recursiveFactorial(5)

console.log("The loop function returned: " + loopResult);
console.log("The recursive function returned: " + recursiveResult);



// Here is the function using a for loop
function countSheepWithLoop(number) {
  for (i = 1; i <= number; i++) {
    if (i === number) {

    }
    console.log("Another sheep jumps over the fence.");
  }
}

// And here is the recursive function
function countSheep(number) {
  if (number === 0) {
    console.log("Zzzzzz");
  } else {
	console.log("Another sheep jumps over the fence.");
	number--;
	// 1 less than the input variable number
	newNumber = number;
	// Recursively call the function
	// with newNumber as the parameter
	return countSheep(newNumber);
  }
}

// Call your new recursive function:
countSheep(9);

function guessNumber(number) {
  // Prompt the user for a number
  guess = prompt("Guess a number between 1 and 100");

  // Convert their guess to a number using +
  guess = +guess;

  // Define base case
  if (guess == number) {
	return console.log("You got it! The number was " + number);
  }
  // Define recursive case with a function call
  return guessNumber(number);
}

// Call the function guessNumber() with an integer for an argument
guessNumber(1);
