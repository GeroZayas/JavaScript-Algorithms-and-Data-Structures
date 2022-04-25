/*
Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

*/

function bouncer(arr) {
  // Declare he array to be returned
  let newArray = [];
  // We create a for loop to go over each element of arr (input)
  for (let i = 0; i < arr.length; i++) {
    // we create an if to check if its of type of boolean
    // we add to newArray if it is boolean
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9])); // [ 7, 'ate', 9 ]
console.log(bouncer([7, "true", "", false, 0])); // [ 7, 'true' ]
console.log(bouncer([1, "gero", "True", 89])); // [ 1, 'gero', 'True', 89 ]
