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

// Exercise

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // notice the g for multiple extracts and i for case
let result2 = twinkleStar.match(starRegex);

console.log(result2);

// Match Anything with Wildcard Period

/*
The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
*/
