function confirmEnding(string1, string2) {
  if ( string1.slice(-string2.length) === string2 ) {
    return true
  }
  else {
    return false
  }
}

console.log(confirmEnding("chocolate", "late"));
console.log(confirmEnding("mandate", "ate"));
