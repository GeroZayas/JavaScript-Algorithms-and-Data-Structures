//  - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
  // Create list of  vowels to check the str
  let vowels = ["a", "e", "i", "o", "u"];
  // Check if the first letter is a vowel
  for (let i = 0; i < str.length; i++) {
    // If the first letter is a vowel, add way to the end of the word
    if (vowels.includes(str[i])) {
      if (i === 0) {
        return str + "way";
        // If the first letter is a consonant move it to the end of the word and add ay to it
      } else {
        return str.slice(i) + str.slice(0, i) + "ay";
      }
    }
  }
  // If the word doesn't have any vowels just add ay to the end
  return str + "ay";
}

console.log(translatePigLatin("rhythm"));
