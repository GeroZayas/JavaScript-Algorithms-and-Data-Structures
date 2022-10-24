/*DNA Pairing
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.*/

function pairElement(str) {
  // we split the str to create pairs
  var arr = str.split("");
  // we create an empty array to store the pairs
  var newArr = [];
  // we loop through the array
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      newArr.push(["A", "T"]);
    } else if (arr[i] === "T") {
      newArr.push(["T", "A"]);
    } else if (arr[i] === "C") {
      newArr.push(["C", "G"]);
    } else if (arr[i] === "G") {
      newArr.push(["G", "C"]);
    }
  }
  // we return the new array
  return newArr;
}

console.log(pairElement("GCG"));
