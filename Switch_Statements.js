function chooseFrom(ingredients) {
  switch (ingredients) {
    case "chocolate":
      console.log("There's nothing better than chocolate");
      break;
    case "orange":
      console.log("Sometimes I eat oranges");
      break;
    case "banana":
      console.log("I don't like bananas at all");
      break;
  }
}

chooseFrom("chocolate");
chooseFrom("orange");
chooseFrom("banana");

// Adding a Default Option in Switch Statements
/*In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.*/

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
      break;
  }

  // Only change code above this line
  return answer;
}

console.log(switchOfStuff(1)); // stuff
console.log(switchOfStuff("c")); // cat
console.log(switchOfStuff("a")); // apple
