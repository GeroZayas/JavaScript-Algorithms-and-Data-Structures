function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));

var myString = "Bastian";
var target = "n";
var newString = myString.slice(myString.length - target.length);

console.log(newString);
