const quarter1Input = document.getElementById("quarter-1-input");
const quarter2Input = document.getElementById("quarter-2-input");
const examInput = document.getElementById("exam-input");
const semesterGradeOutput = document.getElementById("semester-grade");
const resetButton = document.getElementById("reset");

function calculateSemesterGrade() {
  const quarter1Grade = Number(quarter1Input.value);
  const quarter2Grade = Number(quarter2Input.value);
  const examGrade = Number(examInput.value);
  if (isNaN(quarter1Grade) || isNaN(quarter2Grade) || isNaN(examGrade) || 
      quarter1Grade < 0 || quarter1Grade > 101 || 
      quarter2Grade < 0 || quarter2Grade > 101 || 
      examGrade < 0 || examGrade > 100) {
    semesterGradeOutput.textContent = "Please enter valid grades between 0 and 101";
    return;
  }
  const currentGrades = (quarter1Grade ? .45 : 0) + (quarter2Grade ? .45 : 0) + (examGrade ? .10 : 0);
  if (isNaN(currentGrades) || currentGrades === 0) {
    semesterGradeOutput.textContent = "Please enter valid grades between 0 and 101";
    return;
  }
  const semesterGrade = ((quarter1Grade * 0.45) + (quarter2Grade * 0.45) + (examGrade * 0.1))/currentGrades;
  semesterGradeOutput.textContent = `Your semester grade is ${Math.round(semesterGrade)}`;
}

resetButton.addEventListener("click", () => {
  quarter1Input.value = "";
  quarter2Input.value = "";
  examInput.value = "";
  semesterGradeOutput.textContent = "Please enter your grades";
});

quarter1Input.addEventListener("input", calculateSemesterGrade);
quarter2Input.addEventListener("input", calculateSemesterGrade);
examInput.addEventListener("input", calculateSemesterGrade);
