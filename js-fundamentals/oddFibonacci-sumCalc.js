function sumFibs(num) {
  let before = 0;
  let now = 1;
  let sum = 0;

  while ( now <= num) {
    if (now % 2 !== 0) {
      sum += now;
    }

    let after = before + now;
    before = now;
    now = after;
  }

  return sum;
}

console.log(sumFibs(1000));
// to return 1785
console.log(sumFibs(4000000));
// to return 4613732
console.log(sumFibs(4));
// to return 5
console.log(sumFibs(75024));
// to return 60696
console.log(sumFibs(75025));
// to return 135721


