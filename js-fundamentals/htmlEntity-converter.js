function convertHTML(str) {
  let result = "";

  for(let i = 0; i < str.length; i++) {
    if(str[i] ===   '&') {
      result += "&amp;";
    } else if(str[i] === '<') {
      result += "&lt;";
    } else if(str[i] === '>') {
      result += "&gt;";
    } else if(str[i] === `"`) {
      result += "&quot;";
    } else if(str[i] === "'") {
      result += "&apos;";
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML(`Stuff in "quotation marks"`));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));