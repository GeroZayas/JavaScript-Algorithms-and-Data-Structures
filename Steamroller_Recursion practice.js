/*Steamroller
Flatten a nested array. You must account for varying levels of nesting.*/

// using recursion, .reduce() and .concat() methods
// works with arrays of any depth

function steamrollArray(arr) {
  return arr.reduce(
    (acc, cur) => acc.concat(Array.isArray(cur) ? steamrollArray(cur) : cur),
    []
  );
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
