/**
  * Function: Search and Destroy
  * A function that finds and removes all idendicial arguments elements from an initial given array.
  *
          function searchAndDestroy(args) {
            ...
          }
          searchAndDestroy([arr], x, y)
  *
  * @params: single param,
        made of ([array], element, elements....)
  *
  * @returns scrubbed array
  */


// Basic solution that uses a nested loop

function searchAndDestroy(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}


// Create an array of arguments using Array.prototype.slice.call() and store it in the variable args. We’ll use this to check against arr.
//
// Start a basic for loop to iterate through arr. Nest another for loop inside the first, changing the integer variable j and arr to args. This second loop will iterate through args .
//
// Within the second loop create an if statement, checking strictly === that the current val of arr[i] is equal to args[j].
//
// If the value at the current index is equal in both arrays, use delete to remove it from arr.
//
// Outside of the nested loops: return the modified array using the Boolean object as a filter for any null’s created by the delete operator.


// Intermediate solution using includes

function searchAndDestroy(arr) {
  var args = Array.from(arguments).slice(1);
   return arr.filter(val => !args.includes(val))
}

// Declare a variable named args and set it equal to a new Array object from() the arguments passed into the function. On the same or next line, use the slice() method on args starting from the second index, 1. This separates the arguments used for filtering into their own array of args.
//
// Return the filtered array, using includes() in the callback function to check if val is not in args; returning true to keep the value in the original array or false to remove it.

// Advance solution using spread operator

const searchAndDestroy = (arr, ...args) => arr.filter(i => !args.includes(i));

// Code using ES6 syntax to declare function using arrow functions.
// Using spread operator to retrieve the arguments.
// Return the filtered array, using includes()

searchAndDestroy([1, 2, 3, 5, 1, 2, 3], 2, 3) // > [1, 5, 1]
searchAndDestroy([3, 5, 1, 2, 2], 2, 3, 5)// > [1]
searchAndDestroy([2, 3, 2, 3], 2, 3)// > []
searchAndDestroy(["tree", "hamburger", 53], "tree", 53)// > ["hamburger"]
searchAndDestroy(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")// > [12,92,65]
