
function convertCtoF(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}

console.log(convertCtoF(0));


function convertFtoC(fahrenheit) {
  let celsius = 5/9 * (fahrenheit - 32);
  return celsius;
}

console.log(convertFtoC(32));
