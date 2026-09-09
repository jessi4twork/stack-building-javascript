function pairElement(str) {
  const result = [];

  for(let i = 0; i < str.length; i++) {
    if(str[i] === "A") {
      result.push(["A", "T"]);
    }

    if(str[i] === "T") {
      result.push(["T", "A"]);
    }

    if(str[i] === "C") {
      result.push(["C", "G"]);
    }

    if(str[i] === "G") {
      result.push(["G", "C"]);
    }        
  }
  return result;
}

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));