/**
 * Function: Sieve of Eratosthenes
 *  is a simple, ancient algorithm for finding all prime numbers up to any given limit.
 *
 * First, using a for loop mark every numbers up to the given number as true for prime, and store in an array; primes[]
 *
 * Second, mark all the non prime numbers as false,
by using a nested for loops.
SInce index prime[0-1] is already marked as false, we start the outer loop at [2].
We increment i++.
Mathematically the loop breaks when i is greater than the sqaure root of parameter num because, Math !?
The inner loop [j] increments j++, marking the multiples of index prime[i * j] = false.
Refer to Step 2 Call stack table below
Thirdly, the remaining numbers are prime, loop through primes[] and push, primes[i] = true, to results array
 *
 * @params1 number
 *
 * @ returns an array of all the prime numbers upto a given number
 * @ magic
 *
 */

function sieveOfEratosthenes(num) {
  // Step 1 using a for loop mark every numbers up to the given number as true for prime, and store in an array; primes[]. Mark 0 and 1 as false.
  let primes = [];
  for (let i = 0; i <= num; i++) {
    primes[i] = true;
  }
  primes[0] = false;
  primes[1] = false;

  // Step 2 Mark all the non prime numbers as false
  for (let i = 2; i < Math.sqrt(num); i++) {
    for (let j = 2; j * i <= num; j++) {
      primes[i * j] = false;
    }
  }

  // Step 3 Loop through primes array and push primes[i] = true to results array
  let results = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
      results.push(i);
    }
  }

  // Step 4 Return prime number results
  return results;
}

sieveOfEratosthenes(20);

/* Step 2 Call stack
i 2
j  2 3 4 5  6  7  8  9  10
j*i 4 6 8 10 12 14 16 18 20

i 3
j  2 3 4  5  6
j*i 6 9 12 15 18

i 4
j  2 3  4  5
j*i 8 12 16 20
*/
