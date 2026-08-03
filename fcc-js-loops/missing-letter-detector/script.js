function fearNotLetter(str) {
  const allLetters = "abcdefghijklmnopqrstuvwxyz";

  const startCheck = allLetters.indexOf(str[0].toLowerCase());

  for(let i = 0; i < str.length; i++) {
    if((str[i].toLowerCase()) !== (allLetters[startCheck + i])) {
      return allLetters[startCheck + i];
    } 
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmo"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));