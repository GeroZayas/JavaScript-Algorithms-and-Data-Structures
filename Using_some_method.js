// Using the some method

//For example, the following code would check if any element in the numbers array is less than 10:

const numbers = [10, 50, 8, 220, 110, 11];

let answer = numbers.some(function (currentValue) {
  return currentValue < 10;
});

// The some method would return true.

console.log(answer); // true
