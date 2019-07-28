/** Maps - data structures that store key - value pairs. Objects are maps, rapid look up using keys */

class myMap {
  collection = [];
  count = 0;
  size = () => this.count;

  // Set a new kvp; increment map count
  set = (key, value) => {
    this.collection[key] = value;
    this.count++;
  };

  // Returns boolean; checks existence
  has = key => key in this.collection;

  // Search param key, returns value
  get = key => (key in this.collection ? this.collection[key] : null);

  // Search param key and delete; decrement map count
  delete = key => {
    if (key in this.collection) {
      delete this.collection[key];
      this.count--;
    }
  };

  // Returns all key value pairs as a new array
  values = () => {
    let result = new Array();
    for (let key of Object.keys(this.collection)) {
      result.push(this.collection[key]);
    }
    return result.length > 0 ? result : null;
  };

  // Resets to empty Map
  clear = () => {
    this.collection = {};
    this.count = 0;
  };
}

let map = new myMap();
map.set('first', 1);
map.set('second', 2);
map.set('third', 3);

// console.log(map.get([3]));
// console.log(map.size());
// console.log(map.values());
// console.log(map);

// ES6+ Map
let es6map = new Map();

let keyObj = {};
let keyFunc = () => {};

es6map.set('hello', 'string');
es6map.set(keyObj, {});
es6map.set(keyFunc, () => {});
es6map.set(() => {}, () => {});
es6map.set(NaN, NaN);
es6map.set(null, null);
es6map.set(undefined, undefined);
es6map.set([], [1, 2, 3]);

console.log(es6map.has('first'));
console.log(es6map.entries());
console.log(es6map.get('hello'));
console.log(es6map.get(keyObj));
console.log(es6map.get(keyFunc));
console.log(es6map.size);
console.log(es6map.values());
console.log(es6map);
