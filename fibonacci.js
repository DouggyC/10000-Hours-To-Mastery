// Every number is the sum of the previous two numbers
// Fibonacci sequence, whereby each element in the sequence is equal to the sum of the two previous elements: 1, 1, 2, 3, 5, 8, 13, 21... 

let num = [1,1,2,3]

function fibonacci(num) {
  let start = 1;
  let newNum = 0;
  for (var i = 0; i <= num; i++) {
    start += start
    start = newNum;
  }
}
fibonacci(num);


arr[i - 1] + arr[i - 2] = nextNumber;
