/** Sets - has no duplicate items, and values are not sorted in any  particular order, main usage is to check for presence of item */
// ES6 - has sets but are missing some functions that are common to sets.

/** ES6+ Syntax */

class mySet {
  // The collection holds set
  collection = [];
  // check for presence: boolean
  has = el => this.collection.indexOf(el) !== -1;
  // Return all values in the set
  values = () => this.collection;
  // Add an element to the set, check presence, return false if set already has element
  add = el => {
    if (!this.has(el)) {
      this.collection.push(el);
      return true;
    }
    return false;
  };
  // Remove element from set
  remove = el => {
    if (this.has(el)) {
      let i = this.collection.indexOf(el);
      this.collection.splice(i, 1);
      return true;
    }
    return false;
  };
  // Return Size of set
  size = () => this.collection.length;
  // Return the union of two sets as a new set
  union = otherSet => {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(el => unionSet.add(el));
    secondSet.forEach(el => unionSet.add(el));
    return unionSet;
  };
  // Returns intersection of two sets as a new set
  intersection = otherSet => {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(el => {
      if (otherSet.has(el)) {
        intersectionSet.add(el);
      }
    });
    return intersectionSet;
  };
  // Returns the difference of one sets as a new set
  difference = otherSet => {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(el => {
      if (!otherSet.has(el)) {
        differenceSet.add(el);
      }
    });
    // Symmetric Difference
    // let secondSet = otherSet.values();
    // secondSet.forEach(el => {
    //   if (firstSet.indexOf(el) === -1) {
    //     differenceSet.add(el);
    //   }
    // });
    return differenceSet;
  };
  // Returns Symmetric difference between two sets S and T is the union of S – T and T – S.
  symmetricDifference = setB => {
    let setA_B = this.difference(setB);
    let setB_A = setB.difference(this);
    return setA_B.union(setB_A);
  };
  // Returns boolean, test if the set is a subset of a different set, incase testing for presence
  subset = otherSet => {
    let firstSet = this.values();
    return firstSet.every(val => otherSet.has(val));
  };
}

let setA = new mySet();
setA.add(1);
setA.add(2);
// console.log(s.size());
// setA.remove(2);

let setB = new mySet();
setB.add(2);
setB.add(3);

console.log(setA.union(setB).values());
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());
console.log(setA.symmetricDifference(setB).values());
console.log(setA.subset(setB));

console.log(setA.values());
