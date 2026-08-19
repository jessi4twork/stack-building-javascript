function truncateString(string, num) {
  if(string.length > num) {
    return string.slice(0, num) + "..."
  }
  else {
    return string
  }
}

let string = "hello";
let num = 3 ;
console.log(truncateString(string, num));
