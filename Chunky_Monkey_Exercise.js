/*Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/

function chunkArrayInGroups(arr, size) {
  let temp = [];
  let result = [];

  for (let a = 0; a < arr.length; a++) {
    // Inside our loop, we push to temp using temp.push(arr[a]);
    // if the remainder of a / size is not equal to size - 1.
    if (a % size !== size - 1) temp.push(arr[a]);
    // Otherwise, we push to temp, push temp to the result variable
    // and reset temp to an empty array.
    else {
      // Next, if temp isn’t an empty array, we push it to result.
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
