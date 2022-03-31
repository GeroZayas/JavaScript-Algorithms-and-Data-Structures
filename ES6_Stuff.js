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
