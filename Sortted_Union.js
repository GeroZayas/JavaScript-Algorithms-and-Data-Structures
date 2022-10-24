/*Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

*/

function uniteUnique(arr) {
  //The .call() and .apply() methods let you manually set the value of this in a function. So if we set the value of this in .slice() to an array-like object, .slice() will just assume it's working with an Array, and will do its thing.

  // the arguments, allows us to access all the arguments passed to the function. It's an array-like object, so we can use .slice() to convert it to a real array.
  var args = Array.prototype.slice.call(arguments);

  var result = [];
  // loop through the array of arguments
  for (var i = 0; i < args.length; i++) {
    // loop through each argument array
    for (var j = 0; j < args[i].length; j++) {
      // if the value is not already in the result array
      if (result.indexOf(args[i][j]) < 0) {
        // add it to the result array
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
