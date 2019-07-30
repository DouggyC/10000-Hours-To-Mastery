// Anonymous iife
(function(iife = 'iife') {
  alert(`Anonymous ${iife}`);
})();
// anonymous iife-ception
(function() {
  (function() {
    alert('First');
  })();
  alert('Second');
})();

// FAT ARROW FUNCTION
(global => {
  alert("I'm fat arrow iife");
})(window);

// WITHOUT referencing window/global object
((iife = 'iife') => {
  alert(`Arrow function ${iife}`);
})();
// ES6 iife-ception; with iife callback
(() => {
  (() => {
    alert('First');
  })();
  alert('Second');
})();

// IIFEs in ES6 uses new function context syntax
{
  alert('This is iife');
}
// Doesn't share scope
{
  {
    alert('First');
  }
  alert('Second');
}

// With new keyword
new (function() {
  alert('hi world');
})();

// References
// ES6 IIFE with fat arrow functions, example 2 forgot to add extra parenthesis
// https://jack.ofspades.com/es6-iife-with-fat-arrow-functions/
// By Jack Tarantino

// Assigning the IIFE to a variable stores the function's result, not the function itself.

var result = (function() {
  var name = 'Barry';
  return name;
})();
// Immediately creates the output:
result; // "Barry"

// OTHER
// There are other ways to enforce a function expression:

!(function() {
  /* ... */
})();
~(function() {
  /* ... */
})();
-(function() {
  /* ... */
})();
+(function() {
  /* ... */
})();
void (function() {
  /* ... */
})();

// In contexts where an expression is expected, wrapping in parentheses is not necessary:

var f = (function() {
  /* ... */
})();
true &&
  (function() {
    /* ... */
  })();
0,
  (function() {
    /* ... */
  })();

// Passing variables into the scope is done as follows:
(function(a, b) {
  /* ... */
})('hello', 'world');

// An initial parenthesis is one case where the automatic semicolon insertion (ASI) in JavaScript can cause problems; the expression is instead interpreted as a call to the last term on the preceding line. In some styles that omit optional semicolons, the semicolon is placed in front of the parenthesis, and is known as a defensive semicolon.[9][10] For example:

a = b + c;
(function() {
  // code
})();

/** 
Examples
The key to understanding design patterns such as immediately invoked function expressions is to realize that until recently JavaScript had only function scope (but not block scope) and passes values by reference inside a closure.[11] This is no longer entirely true, in the latest version of JavaScript block scoping is available and becomes evident when using the new let and const keywords.[12]

Evaluation context
A lack of block scope means that variables defined inside, for example, a for loop will have their definition "hoisted" to the top of the enclosing function. Evaluating a function that depends on variables modified by the outer function (including by iteration) can be difficult. We can see this without a loop if we update a value between defining and invoking the function.[13]
*/

var v, getValue;
v = 1;
getValue = function() {
  return v;
};
v = 2;

getValue(); // 2
// While the result may seem obvious when updating v manually, it can produce unintended results when getValue() is defined inside a loop.

// Hereafter the function passes v as an argument and is invoked immediately, preserving the inner function's execution context.[14]

var v, getValue;
v = 1;
getValue = (function(x) {
  return function() {
    return x;
  };
})(v);
v = 2;

getValue(); // 1
// This is equivalent to the following code:

var v, getValue;
v = 1;
function f(x) {
  return function() {
    return x;
  };
}
getValue = f(v);
v = 2;

getValue(); // 1
// David Herman's Effective JavaScript contains an example illustrating the problems of evaluation context inside loops.[15] While Herman's example is deliberately convoluted, it arises directly from the same lack of block scope.[16]

// Establishing private variables and accessors
// IIFEs are also useful for establishing private methods for accessible functions while still exposing some properties for later use.[17] The following example comes from Alman's post on IIFEs.[1]

// "counter" is a function that returns an object with properties, which in this case are functions.
var counter = (function() {
  var i = 0;

  return {
    get: function() {
      return i;
    },
    set: function(val) {
      i = val;
    },
    increment: function() {
      return ++i;
    }
  };
})();

// These calls access the function properties returned by "counter".
counter.get(); // 0
counter.set(3);
counter.increment(); // 4
counter.increment(); // 5
// If we attempt to access counter.i from the global environment, it will be undefined, as it is enclosed within the invoked function and is not a property of counter. Likewise, if we attempt to access i, it will result in an error, as we have not declared i in the global environment.

// Terminology
// "Immediately invoked function expression" as a term describes a design pattern that has also been referred to as a "self-executing anonymous function".[1][5] However, immediately invoked functions do not need to be anonymous, and ECMAScript 5's strict mode forbids arguments.callee,[18] making the latter term less accurate.[3][14]

// In lambda calculus, this construct was referred to as "redex", for reducible expression, see Reduction strategy.

//https://en.wikipedia.org/wiki/Immediately_invoked_function_expression
