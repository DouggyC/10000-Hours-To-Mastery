/** Stacks! - First In, First Out */

// functions: push, pop, peek, length

let arrStack = [];
let palindrome = 'racecar';
let reverse = '';

// put letters of word into stack
// for (let i = 0; i < palindrome.length; i++) {
//   arrStack.push(palindrome[i]);
// }
// pop of the stack in reverse order
// for (let i = 0; i < palindrome.length; i++) {
//   reverse += arrStack.pop();
// }
// validate palindrome
// if (reverse === palindrome) {
//   console.log(palindrome + ' is a palindrome.');
// } else {
//   console.log(palindrome + ' is not a palindrome.');
// }

/** Create a Stack - ES7 */
class Stack {
  count = 0;
  storage = [];

  push = value => {
    this.storage[this.count] = value;
    this.count++;
  };

  pop = () => {
    if (this.count === 0) undefined;

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  size = () => this.count;

  peek = () => this.storage[this.count - 1];
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek()); // 2
console.log(myStack.pop()); // 2
console.log(myStack.peek()); // 1
myStack.push('fcc');
console.log(myStack.size()); // 2
console.log(myStack.peek()); // fcc
console.log(myStack.pop()); // fcc
console.log(myStack.peek()); // 1
