/*What is a Callback?
Simply put: A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.

More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.
*/

function first() {
  // Simulate a code delay
  setTimeout(function() {
    console.log(1);
  }, 500);
}
function second() {
  console.log(2);
}
first();
second();

function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

doHomework("math", function() {
  alert("Finished my homework");
});

function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function alertFinished() {
  alert("Finished my homework");
}
doHomework("math", alertFinished);

/**
 *
 * @Call stack:
 */

var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  this.forEach(a => newArray.push(callback(a)));
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s);
// 46,130,196,10
