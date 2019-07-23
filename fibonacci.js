// Every number is the sum of the previous two numbers
// Fibonacci sequence, whereby each element in the sequence is equal to the sum of the two previous elements: 1, 1, 2, 3, 5, 8, 13, 21...
// return all Fibonacci sequence under a given number

function fibonacci(num) {
  let s = []
  for (var i = 0; i < num; i++) {
    let start = 0, first = 1; sum = 0;

    sum = start + first

    start = first
    

    s.push(sum)



  }
}

// with recursion


// arr[i - 1] + arr[i - 2] = nextNumber;

0+1=1
  1+1=2
    1+2=3




function* fibonacci() {
  // a generator function
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // truncate the sequence at 1000
  if (n >= 1000) {
    break;
  }
}
