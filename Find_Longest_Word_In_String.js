// Find longest word in string

function findLongestWordLength(str) {
  let longestWord = 0;
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord) {
      longestWord = words[i].length;
    }
  }
  return longestWord;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
