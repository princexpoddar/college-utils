function calculateAttendance() {
  let total = Number(document.getElementById("total").value);
  let attended = Number(document.getElementById("attended").value);
  let result = document.getElementById("result");

  if (isNaN(total) || isNaN(attended) || total <= 0 || attended < 0) {
    result.style.color = "red";
    result.innerText = "Please enter valid values!";
    return;
  }

  if (attended > total) {
    result.style.color = "red";
    result.innerText = "Attended classes cannot be more than total!";
    return;
  }

  let percentage = ((attended / total) * 100).toFixed(2);

  if (percentage >= 75) {
    result.style.color = "green";
    result.innerText = `Attendance: ${percentage}% ✅ Eligible`;
  } else {
    result.style.color = "red";
    result.innerText = `Attendance: ${percentage}% ❌ Not Eligible`;
  }
}
