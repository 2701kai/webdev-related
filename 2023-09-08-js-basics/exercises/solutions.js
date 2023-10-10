// Task 1 - Los or New?
/* Create a function named startsWithLosOrNew.

The function takes a string in input and returns:

true: if the string starts with "Los" or "New"
false: in every other case
The function must be case insensitive. */

function startsWithLosOrNew(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.startsWith("los") || lowerStr.startsWith("new");
}

// Task 2 isDivisibleBy100?
/*Create a function named isDivisibleBy100.

The function takes an integer in input and returns:

true: if the integer is divisible by 100
false: if the integer is not divisible by 100   */

function isDivisibleBy100(n) {
  return n % 100 === 0;
}

// Task 3 whatś the weather?
/*Use a ternary operator to complete this task.
Create a function named isRaining.
If passed true, return "wet day - you need an umbrella".
If passed false, return "dry day - leave your umbrella at home". */

function isRaining(rain) {
  return rain
    ? "wet day - you need an umbrella"
    : "dry day - leave your umbrella at home";
}

// Task 4 - you've got the power
/* Create a function named powerOf.

The function takes an integer in input and returns the integer to the power of itself. */
function powerOf(n) {
  return Math.pow(n, n);
}

// Task 5 - Range
/* Create a function named range.

The function takes 2 numbers in input:

start
end
It returns an array containing a list of numbers that go from start to end */
function range(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
