//  - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      if (i === 0) {
        return str + "way";
      } else {
        return str.slice(i) + str.slice(0, i) + "ay";
      }
    }
  }
  return str + "ay";
}

console.log(translatePigLatin("rhythm"));
