function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms")); // false
console.log(quickCheck(["squash", "onions", "shallots"], "onions")); // true
