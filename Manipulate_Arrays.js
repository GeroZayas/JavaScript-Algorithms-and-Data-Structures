// PUSH
const myArray = [
  ["John", 23],
  ["cat", 2],
];
myArray.push(["dog", 3]);

console.log(myArray);

// POP
const myArray2 = [
  ["John", 23],
  ["cat", 2],
];

var removedFromMyArray = myArray2.pop();

console.log(removedFromMyArray);

// SHIFT

const myArray3 = [
  ["John", 23],
  ["dog", 3],
];

var removedFromMyArray = myArray3.shift();

console.log(removedFromMyArray);

// UNSHIFT

const ourArray = ["Stimpson", "J", "cat"];
console.log(ourArray);

ourArray.shift(); // takes Stimson out
ourArray.unshift("Happy"); // Puts Happy in first position

console.log(ourArray);
