function getAverage(arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

function getGrade(score) {
  if(score === 100) {
    return "A+";
  }
  if(score >= 90) {
    return "A";
  }
  if(score >= 80) {
    return "B";
  }
  if(score >= 70) {
    return "C";
  }
  if(score >= 60) {
    return "D";
  }
  return "F";
}

function hasPassingGrade(score) {
  let grade = getGrade(score);
  if(grade === "F") {
    return false;
  }
  return true;
}

function studentMsg(arr, score) {
  let average = getAverage(arr)
  let grade = getGrade(score);
  let passOrFail = hasPassingGrade(score);
  if(passOrFail === true) {
    return "Class average: " + average +". Your grade: " + grade + ". You passed the course."

  }
  return "Class average: " + average +". Your grade: " + grade + ". You failed the course."
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]));
console.log(getAverage([10, 20, 30 ,40, 55, 65, 75, 83]));
console.log(getAverage([10, 20, 30, 40, 50, 60, 70, 97]));

console.log(getGrade(100));
console.log(getGrade(91));
console.log(getGrade(89));
console.log(getGrade(75));
console.log(getGrade(63));
console.log(getGrade(40));

console.log(hasPassingGrade(90));
console.log(hasPassingGrade(55));

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));