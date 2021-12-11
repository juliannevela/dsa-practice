// Problem 4: Largest palindrome product

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(digits) {
  // get largest possible number
  let max = Math.pow(10, digits) - 1;

  // get min number
  let min = Math.pow(10, digits - 1);

  let palindromes = [];

  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      // get product of both
      let product = i * j;

      // check if product is a palindrome
      let num = product.toString();
      let reversedNum = num.split('').reverse().join('');

      if (num === reversedNum) {
        palindromes.push(num);
        break;
      }
    }
  }

  return Math.max(...palindromes);
}

console.log(largestPalindromeProduct(2));
console.log(largestPalindromeProduct(3));
