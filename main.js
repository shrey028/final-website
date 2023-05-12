// Final Website by Shrey Shah

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let percent = 0;

  let question1 = document.getElementById("q1").value.toLowerCase();
  let question2 = document.getElementById("q2").value.toLowerCase();
  let question3 = document.getElementById("q3").value.toLowerCase();
  let question4 = document.getElementById("q4").value.toLowerCase();
  let question5 = document.getElementById("q5").value.toLowerCase();

  let ques1 = 0;
  let ques2 = 0;
  let ques3 = 0;
  let ques4 = 0;
  let ques5 = 0;

  // PROCESS
  if (question1 === "lloyd" || question1 === "the green ninja") {
    document.getElementById("a1").innerHTML = "correct";
    ques1++;
  } else {
    document.getElementById("a1").innerHTML = "incorrect";
  }

  if (question2 === "master wu" || question2 === "wu") {
    document.getElementById("a2").innerHTML = "correct";
    ques2++;
  } else {
    document.getElementById("a2").innerHTML = "incorrect";
  }

  if (question3 === "zane" || question3 === "the white ninja") {
    document.getElementById("a3").innerHTML = "correct";
    ques3++;
  } else {
    document.getElementById("a3").innerHTML = "incorrect";
  }

  if (question4 === "the red ninja" || question4 === "kai") {
    document.getElementById("a4").innerHTML = "correct";
    ques4++;
  } else {
    document.getElementById("a4").innerHTML = "incorrect";
  }

  if (question5 === "four" || question5 === "4") {
    document.getElementById("a5").innerHTML = "correct";
    ques5++;
  } else {
    document.getElementById("a5").innerHTML = "incorrect";
  }

  // OUTPUT
  let grade = (ques1 + ques2 + ques3 + ques4 + ques5) * 20;
  let outOf = ques1 + ques2 + ques3 + ques4 + ques5;
  document.getElementById("char-info").innerHTML = `${grade} %`;
  document.getElementById("outOf-info").innerHTML = `${outOf} /5`;
}
