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

class HashTable {
  constructor() {
    this.storage = storage;
  }
}
