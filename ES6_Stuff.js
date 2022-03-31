// Default value for a variable if it is not defined
// Here we are doing that with value = 1
const increment = (number, value = 1) => number + value;

// Rest parameter
/* With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function. */
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], {})); // You have passed 4 arguments.

// print separator line
console.log("-------------------------------------------------- 1");

// Exercise
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

console.log(sum(1, 2, 3, 4, 5)); // 15

// print separator line
console.log("-------------------------------------------------- 2");

/*Use the Spread Operator to Evaluate Arrays In-Place

ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.*/

// Example
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus); // 89

// Exercise

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

// print separator line
console.log("-------------------------------------------------- 3");
