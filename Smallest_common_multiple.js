function smallestCommons(arr) {
  // declare 2 vars called max and min that have the value of Math.max operations
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);

  // The reason to have something declared twice like this is for functions where one of this will be changing as the function goes on:
  var mltple = max;

  // The value of i, which starts on max will decrease by one (i--) until is bigger or equal to min (i>=min)
  for (var i = max; i >= min; i--) {
    // If the remainder of the division is different to 0, add max to mltple
    // mltple += max is the same as mltple = mltple + max
    if (mltple % i !== 0) {
      mltple += max;
      i = max;
    }
  }

  // when the condition i >= min is met, return the mltple
  return mltple;
}

console.log(smallestCommons([1, 5]));
