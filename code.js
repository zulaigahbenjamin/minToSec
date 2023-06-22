
function minToSec() {
    let minutes = document.getElementById("min").value;
    let seconds = minutes * 60;
    document.getElementById("answer").innerHTML = seconds + " seconds";
  }