// Multiples of 3 and 5

// Natural numbers below 1000
// divisible by 3 or 5
// total sum of all multiples

function multiplesOf() {
  let multiples = [];
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  const sum = multiples.reduce((a, b) => a + b);
  console.log(sum, multiples);
  return sum;
}

multiplesOf();
