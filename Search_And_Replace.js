function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after.replace(after[0], after[0].toUpperCase());
  } else if (before[0] === before[0].toLowerCase()) {
    after = after.replace(after[0], after[0].toLowerCase());
  }
  return str.replace(before, after);
}

result = myReplace("I think we should look up there", "up", "Down");

console.log(result);
