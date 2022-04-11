/*JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.*/
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

console.log(result); // true

// Match a literal string

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);

console.log(result2);

// Match a Literal String with Different Possibilities
/*You can search for multiple patterns using the alternation or OR operator: |. */

/*
This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.

*/

// Exercise

/* Complete the regex petRegex to match the pets dog, cat, bird, or fish. */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);

console.log(result3);
