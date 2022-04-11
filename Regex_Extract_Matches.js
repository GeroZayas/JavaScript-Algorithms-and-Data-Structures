//Extract Matches
//You can also extract the actual matches you found with the .match() method.

//example

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

console.log(ourStr);
console.log(ourStr.match(ourRegex));

// Exercise
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

console.log(result);

/*
Find More Than the First Match
So far, you have only been able to extract or search a pattern once.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
Here match would return ["Repeat"].

To search or extract a pattern more than once, you can use the g flag.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
And here match returns the value ["Repeat", "Repeat", "Repeat"]
*/
