// missign letter

/*Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

fearNotLetter("abce") should return the string d.
*/

function fearNotLetter(str) {
  let missing = undefined;
  // loop through the string
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) !== str.charCodeAt(0) + i) {
      missing = String.fromCharCode(str.charCodeAt(i) - 1);
      break;
    }
  }
  return missing;
}

console.log(fearNotLetter("abce"));
