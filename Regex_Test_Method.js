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
let petRegex = /dog|cat|bird|fish/; //
let result3 = petRegex.test(petString);

console.log(result3);

// Ignore Case While Matching
/*
You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
*/

let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Notice the i to ignore cases
let result4 = fccRegex.test(myString2);
