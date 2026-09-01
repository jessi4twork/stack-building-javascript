function titleCase(str) {
  const editedStr = str.toLowerCase().split(" ");
  
  for (let i = 0; i < editedStr.length; i++) {
    let word = editedStr[i];
    editedStr[i] = word[0].toUpperCase() + word.slice(1);
  }
  return editedStr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));