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

// Multiple Identical Options in Switch Statements

/*If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:*/

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }

  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(1)); // low
console.log(sequentialSizes(3)); // low
console.log(sequentialSizes(5)); // Mid
console.log(sequentialSizes(9)); // High

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      return "Marley";
      break;
    case 42:
      return "The Answer";
      break;
    case 1:
      return "There is no #1";
      break;
    case 99:
      return "Missed me by this much!";
      break;
    case 7:
      return "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

console.log(chainToSwitch("bob")); // Marley
