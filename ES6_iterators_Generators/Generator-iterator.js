// Iterator - iterator are like advance loops that can paused incrementing the return++
// Iterator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ?
      { value: names[nextIndex++], done: false } :
      { done: true }
    }
  }
}

// Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next()); // {value: "Jack", done: false}
console.log(names.next().value); // Jack
console.log(names.next().value); // Jill
console.log(names.next().value); // John
console.log(names.next());       // {done: true}


// Generator Example
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next().value); // Jack
console.log(name.next().value); // Jill
console.log(name.next().value); // John
console.log(name.next().value);


// ID Creator
function* createIds() {
  let index = 0;

  while(true) {
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
