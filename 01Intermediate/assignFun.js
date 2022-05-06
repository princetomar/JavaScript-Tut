let getMyGrade = function (currentMarks, totalMarks) {
  let myPercent = (currentMarks / totalMarks) * 100;

  let grade;
  if (myPercent >= 90) {
    grade = "A+";
  } else if (myPercent < 90 && myPercent >= 80) {
    grade = "A";
  } else if (myPercent < 80 && myPercent >= 70) {
    grade = "B+";
  } else if (myPercent < 70 && myPercent >= 60) {
    grade = "B";
  } else {
    grade = "C";
  }

  return `Your grade is ${grade} and percent is ${myPercent}`;
};

let yourResult = getMyGrade(82, 100);
console.log(yourResult);
