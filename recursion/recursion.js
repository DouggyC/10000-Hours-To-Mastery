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
// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 = // 3628800

function factorialize(num) {
  if(num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}




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

for (var i = 0; i < array.length; i++) {
  array[i]
}

// Amortication table - is a data table that shows the process of aying off a loan, with details for every payment. For each month, an amortization table provides your loan balance, interest charges on your loan balance, interest charges on your loan, and the amount of principal that you pay off.

// Monthly payment, inteset expenses, principal repayment, cumulative interest, extra payments, fees beside interest

// the process of paying down a loan is called “amortization

// Progress Loan Repayment Calculator
//


function mlrc(repaymentAmount : amount , interestRate : interest) {
  let ca = amount * interest;
  let Namount = amount - ca;
  Math.round(Namount * 100) / 100;
  if (Namount < 1) {
    console.log(Namount);
  } else {
    console.log(Namount);
    return c(Namount, 0.25);
  }
}
mlrc(100, 0.25);


cal = (a, b) => {
  let a;
  let c = a * b;

  d = a - c;
  let d = Math.round(a * 100 ) / 100;
  if (a < 0) {
    console.log('repaid');
  } else {
    console.log(d, a);
    return cal(d, b);
  }
}


monthyRepaymentCal = (nsum) => {
  let interest = 0.04;
  let amountBorrow = nsum;

  if (amountBorrow < 0) {
    console.log('Repaid');
  } else {
     let repayment = amountBorrow * interest;
     let nsum = amountBorrow - repayment;
    console.log(nsum);
  return monthyRepaymentCal(nsum);
  }
}
monthyRepaymentCal(100000);


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
