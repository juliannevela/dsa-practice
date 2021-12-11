# Spotlight: DS&A - Functions (recursion and higher order)

## Code Challenges, aka "White Boarding"

Time-boxed, live sessions with interviewers who give you coding challenges that you are expected to attempt to solve. (Distinct from take-home challenges)

Our goals are:

1. Make yourself a better JavaScript programmer and avoid giving off "red flags"
1. Improve your tech verbalization skills including "talking through" your thought process.
1. Familiarize yourself with common "code challenges" problem structures
1. Cover the import CS fundamentals behind DS&A and programming

## Process:

1. Practice to reduce stress/anxiety
1. Get More Information, aka Always Ask Questions ("Can I assume valid input?")
1. Come up with a plan/definition of done (pictures and test-cases)
1. Write code out loud
1. Be the human interpreter "run your code"
1. Evaluate alternatives, consider Big O

## Function are Objects

In JavaScript, functions are a special kind of Object.

1. Because they are objects, we can pass them around like objects.
1. Functions are defined (created) with:
   1. Defined parameters - values that could be passed in when the function is called
   1. A "body" - some code that will execute when the function is called
1. Call-site - the place the function is called. pass values as arguments
1. A function can call another function _or itself_ in its body.
1. Higher-order functions:
   1. Functions can define parameters that are functions
   1. Functions can return functions

## Recursive Problems

Process:

1. Start with the "exit", either the point at which you stop or "find" the answer you are looking for
1. Look for the minimal number of steps to call the function recursively
1. Be amazed that you are done

_Don't forget to **`return`** the value of your recursive call_

Three ways to handle "state":

1. Design it away (count backward to 0)
1. Add additional parameters to your function, make sure to give default values:
   ```js
   function doThing(max, n = 1) {
   ```
1. Use an internal recursive function:

   ```js
   function doThing(max) {
     const list = [];

     function recurse(n) {
       if (n === max) return list;
       list.push(x);
       return recurse(x + 1);
     }

     return recurse(max);
   }
   ```
