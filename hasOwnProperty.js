/**
 *
 *
 * How to use???
 * Why does hasOwnProperty still evaluate true even when prop names are mispelled, expect last prop name  
 * Note:
  hasOwnProperty returns true even if the value of the property is null or undefined ?????
 */

// EG
// This is straight wrong and incorrect usage of hasOwnProperty().
// Passing in 'Alan' as the first argument will always evaluate true.
//
// Consider example:
// obj.hasOwnProperty('Alan', 'user2' , 'user3' , 'user4')? true:false;
// => true
// obj(hasOwnProperty( 'user1', 'user2', 'user3', 'Alan') ? true:false;
// => false
//
// Without ternary operator
// obj(hasOwnProperty( 'Alan', 'user2', 'user3', 'user4');
// => true
// obj(hasOwnProperty( 'user1', 'user2', 'user3', 'Alan');
// => false
//
// &&
// return obj.hasOwnProperty('Alan' && 'Jeff' && 'Sarah' && 'Ryan');
// => true
// return obj.hasOwnProperty('Alan' && 'user2' && 'user3' && 'user4');
// => false

let users = {
  Alan: {},
  Jeff: {},
  Sarah: {},
  Ryan: {}
};

function isEveryoneHere(obj) {
  return obj.hasOwnProperty("Alan" && "Jeff" && "Sarah" && "Ryan");
  // return obj.hasOwnProperty(["Alan"] && ["Jeff"] && ["Sarah"] && ["Ryan"]);
  // return "Alan" in obj && "Jeff" in users;
  // return ["Alan"] in obj && ["Jeff"] in users;

  // Longhand
  // return (
  //   obj.hasOwnProperty("Alan") &&
  //   obj.hasOwnProperty(["Jeff"]) &&
  //   "Sarah" in obj &&
  //   ["Ryan"] in users
  // );

  // Incorrect use
  // return obj.hasOwnProperty("Alan", "Jeff", "Sarah", "user4");
  // evaluates true, but should be false
}

console.log(isEveryoneHere(users));
