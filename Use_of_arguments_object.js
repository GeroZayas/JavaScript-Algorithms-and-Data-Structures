// Use of *arguments* object
function destroyer(arr) {
  //
  const valsToRemove = Object.values(arguments).slice(1);
  return valsToRemove;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
