// HashTable
/**
 * Terms:
 *  collision: when two values have the same hashed value
 *  bucket: a single space, or number on spaces in the hashtable
 *
 */

const hash = (string, maxLimit) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % maxLimit;
};

const HashTable = function() {
  let storage = [];
  const storageLimit = 4;

  this.print = function() {
    console.log(storage);
  };

  this.add = function() {
    let index = hash(key, value);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function(key) {
    let index = has(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    }
  };

  this.lookup = function(key) {
    let index = hash(key, storageLimit)
    if(storage[index] === undefined) {
      return undefined
    } else {
      for(let i = 0; i<storage[index].length; i++) {
        if(storage[index][i][0] === key) {
          return storage[index][i][1]
        }
      }
    }
};


console.log(hash('Doug', 10))