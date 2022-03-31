// function that converts kilos to pounds
const kToP = function convertKilosToPounds(kilos) {
  let result = kilos * 2.2046;
  // round result to 2 decimal places
  result = result.toFixed(2);
  return result;
};

console.log(kToP(71));
