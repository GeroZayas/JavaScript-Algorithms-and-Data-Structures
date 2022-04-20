// Title Case a Sentence

/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of. */

function titleCase(str) {
  // Create the string to be returned
  let finalStr = "";
  // Split the input string to be able to work with each individual word
  let splitStr = str.split(" ");
  // We make all the words lower case
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].toLowerCase();
  }
  // We select the first letter of each word -> .charAt() and capitalize it
  // -> toUpperCase()
  for (let i = 0; i < splitStr.length; i++) {
    finalStr +=
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1) + " ";
  }
  // NOTICE the .trim() -> to eliminate space at the end of string
  return finalStr.trim();
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
