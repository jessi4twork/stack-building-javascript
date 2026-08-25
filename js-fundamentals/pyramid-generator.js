function pyramid(arg1, arg2, arg3) {
  let result = "\n";
  let vertexRow = 1;

  if(arg3 === false) {
    for(let i = 0; i < arg2; i++) {
      let space = " ".repeat(arg2 - 1 - i);
      result += space + arg1.repeat(vertexRow) + "\n";
      vertexRow +=2;
      }
  } else {
    let vertexRow = (arg2 * 2) - 1;
    for(let i = 0; i < arg2; i++) {
      let space = " ".repeat(i);
      result += space + arg1.repeat(vertexRow) + "\n";
      vertexRow -=2;
      }
  }
  return result;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
