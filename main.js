// The Magical 8 Ball by Leon

// Answer Button

document.getElementById("answer1").addEventListener("click", answer1BtnClicked);

function answer1BtnClicked() {
  let randNum = Math.random();
  console.log(randNum);

  // Variables
  let qn1 = "Does the magic 8 ball actually work?";
  let qn2 = "Is JavaScript awesome?";
  let qn3 = "What kind of questions should I ask?";
  let questions = document.getElementById("questions").value;

  // Outup 
  if (questions.length === 0) {
    document.getElementById("answer").innerHTML = "Please ask a question";
  } else if (questions === qn1) {
    document.getElementById("answer").innerHTML = "How dare you doubt me!";
  } else if (questions === qn2) {
    document.getElementById("answer").innerHTML = "Of Course!";
  } else if (questions === qn3) {
    document.getElementById("answer").innerHTML = "Any question will do.";
  } else if (randNum < 0.2) {
    document.getElementById("answer").innerHTML = "Without a doubt.";
  } else if (randNum < 0.4) {
    document.getElementById("answer").innerHTML = "As I see it, yes.";
  } else if (randNum < 0.6) {
    document.getElementById("answer").innerHTML = "Concentrate and ask again.";
  } else if (randNum < 0.8) {
    document.getElementById("answer").innerHTML = "Don't count on it.";
  } else {
    document.getElementById("answer").innerHTML = "Outlook not so good.";
  }
}
