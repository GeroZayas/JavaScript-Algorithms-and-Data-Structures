function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms")); // false
console.log(quickCheck(["squash", "onions", "shallots"], "onions")); // true
