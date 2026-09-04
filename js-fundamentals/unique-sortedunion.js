function uniteUnique(...arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {
      const insideNum = arr[i][j];

      if (!result.includes(insideNum)) {
        result.push(insideNum);
      }
    }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2],
[5, 2, 1, 4],
[2, 1]
));
console.log(uniteUnique([1, 2, 3],
[5, 2, 1]
));
console.log(uniteUnique([1, 2, 3],
[5, 2, 1, 4],
[2, 1],
[6, 7, 8]
));
console.log(uniteUnique([1, 3, 2],
[5, 4],
[5, 6]
));
console.log(uniteUnique([1, 3, 2, 3],
[5, 2, 1, 4],
[2, 1]
));