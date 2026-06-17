function findLongestWordLength(string) {
  const modifiedString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  const words = modifiedString.split(" ");
  let longestWord = "";
  for(let word of words) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  }
  const wordLetterCount = longestWord.length;
  return wordLetterCount;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("Googling do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));