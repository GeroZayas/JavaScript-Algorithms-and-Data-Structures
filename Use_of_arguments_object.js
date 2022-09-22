// Use of *arguments* object
function destroyer(arr) {
  //this slice here makes an array with the rest of the values, after the first one, which is the one we want to keep
  const valsToRemove = Object.values(arguments).slice(1);
  // we create the arr we want to return
  const filteredArray = [];

  return filteredArray;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
