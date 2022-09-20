//Using the every method

//For example, the following code would check if every element in the numbers array is less than 10:

const numbers = [1, 5, 8, 0, 10, 11];

let answer = numbers.every(function (currentValue) {
  return currentValue < 10;
});

console.log(answer); // false

const numbers2 = [1, 5, 8, 0, 9, 7];

let answer2 = numbers2.every(function (currentValue) {
  return currentValue < 10;
});

console.log(answer2); // true
