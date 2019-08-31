// Basic structure
 // iife =  immediately invoked function expression

// (function() {
//   // Declare private vars and functions
//
//   return {
//     // Declare public var and functions
//   }
// })();

// STANDARD MODULE PATTERN
// parentheses (); after to run it
const UIController = (function() {
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
  // can access private vars
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();


UIController.callChangeText();
// UIController.changeText(); // TypeError, changeText is not a function
console.log(UIController.text); // Undefined


// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
  let _data = []; // Private var

  function add(item) {
    _data.push(item);
    console.log(`Item Added..${_data}`);
  }

  function get(id) {
    return _data.find(item => {
      return item.id === id;
    });
  }

// returning object literal that directly reveals methods in the object
  return { // whitelisting
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(1));
