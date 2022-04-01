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

// Use Destructuring Assignment to Extract Values from Objects

/*Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.*/

//example
const user = { name: "John Doe", age: 34 };

const theName = user.name;
const theAge = user.age;

// With destructuring assignment
const { name, age } = user;

// Exercise
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

console.log(today); // 77
console.log(tomorrow); // 80

console.log(HIGH_TEMPERATURES); // {yesterday: 75, today: 77, tomorrow: 80}

// print separator line
console.log("-------------------------------------------------- 4");

// Use Destructuring Assignment to Assign Variables from Objects

/*Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.*/

/*Using the same object from the last example:

const user = { name: 'John Doe', age: 34 };
Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;*/

// Use Destructuring Assignment to Assign Variables from Arrays

/* ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:*/

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1 2

// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
const [x, y, , , z] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z); // 1 2 5

let varA = 8,
  varB = 6;

// Swap the values of varA and varB with destructuring
[varA, varB] = [varB, varA];
console.log(varA, varB); // 6 8

console.log("-------------------------------------------------- 5");
