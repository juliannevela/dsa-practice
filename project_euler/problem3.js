// Largest Prime Factor

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
  let prime = 2;
  let largestFactor = 1;

  while (prime <= number) {
    if (number % prime === 0) {
      largestFactor = number;
      number /= prime;
    } else prime++;
  }
  return largestFactor;
}

largestPrimeFactor(13195);

// Test Cases
console.log(largestPrimeFactor(2)); // 2
console.log(largestPrimeFactor(3)); // 3
console.log(largestPrimeFactor(5)); // 5
console.log(largestPrimeFactor(7)); // 7
console.log(largestPrimeFactor(8)); // 2
console.log(largestPrimeFactor(13195)); // 29
console.log(largestPrimeFactor(600851475143)); // 6857
