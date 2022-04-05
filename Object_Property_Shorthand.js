// ES6 adds some nice support for easily defining object literals.

const getMousePosition = (x, y) => ({
  x: x,
  y: y,
});

console.log(getMousePosition(1, 2)); // {x: 1, y: 2}

/*getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:*/

const getTheMousePosition = (x, y) => ({ x, y });

console.log(getMousePosition(1, 2)); // {x: 1, y: 2}

console.log("----- ----- Exercise ----- -----");
// Exercise

const createPerson = (name, age, gender) => ({ name, age, gender });
// Only change code above this line

console.log(createPerson("Gero", 30, "Male"));
