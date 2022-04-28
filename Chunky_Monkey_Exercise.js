/*Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/

function chunkArrayInGroups(arr, size) {
  return new Array(size)
    .fill("")
    .map((_, i) => arr.slice(i * size, (i + 1) * size));
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
