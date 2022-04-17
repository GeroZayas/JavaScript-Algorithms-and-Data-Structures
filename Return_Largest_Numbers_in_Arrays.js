//Return Largest Numbers in Arrays

function largestOfFour(arr) {
  largestNumbers = [];
  for (let array = 0; array < arr.length; array++) {
    largestNumbers.push(Math.max(...arr[array]));
  }
  return largestNumbers;
}

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

function largestOfFour(arr) {
  const largestNumbers = [];
  let numHolder = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > numHolder) {
        numHolder = arr[i][j];
      }
    }
    largestNumbers[i] = numHolder;
  }
  return largestNumbers;
}

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
