// Slice and splice exercise

/*
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

*/
function frankenSplice(arr1, arr2, n) {
  // Since our goal is to return the new array with out altering arr1 or arr2
  // we create a localArr and add all the items from arr2 using the slice() function
  let localArr = arr2.slice();
  // here we use splice and n is the index, 0 is for no elements being cut out in this case
  // and then we ...arr1 to insert arr1
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
