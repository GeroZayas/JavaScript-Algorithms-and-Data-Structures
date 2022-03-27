function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

console.log(test(true));
console.log(test(false));

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(equalityTest(10));

console.log(equalityTest(5));

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}

console.log(bar(4));

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  }
  return "Change Me";
  // Only change code above this line
}

console.log(testSize(7));
