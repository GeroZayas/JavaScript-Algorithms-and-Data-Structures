/*Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

The console would display the values 1, 2 and [3, 4, 5, 7].*/

const [a, b, ...arr1] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr1); // [3, 4, 5, 7]

// Exercise
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  // remove first two elements from list with destructuring assignment
  // omit first two elements
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);

// print separator line with number
console.log("------------------------------------------------ 1");

/*Use Destructuring Assignment to Pass an Object as a Function's Parameters*/
const profileUpdate = ({ name, age, nationality, location }) => {};
/*When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.*/
