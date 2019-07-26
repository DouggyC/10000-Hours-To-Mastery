/** Sets - has no duplicate items, and not in any particular order, main usage is to check for presence of item */
// ES6 - has sets but are missing some functions that are common to sets.

function mySet() {
  // collection holds set
  let collection = [];
  // check for presence: boolean
  has = el => collection.indexOf(el) !== -1;
}
