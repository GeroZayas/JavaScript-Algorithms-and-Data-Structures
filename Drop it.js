//Drop it

/*Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

*/

// function dropElements(arr, func) {
//   let finalArr = arr.filter(func);
//   return finalArr;
// }

function dropElements(arr, func) {
  let finalArr = [];
  let slicingValue = 0;

  if (arr.every(func)) {
    return arr;
  }

  for (let i = arr[0]; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      slicingValue = i;
      finalArr = arr.slice(slicingValue);
      break;
    }
  }

  return finalArr;
}

console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  })
); // [1, 2, 3]
