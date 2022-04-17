// Factorial exercise

function factorialize(num) {
  let result = 1;
  for (let i = 0; i < num; i++) {
    result += result * i;
  }
  return result;
}

console.log(factorialize(5));
