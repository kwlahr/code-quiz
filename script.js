//create variable for score and timer and if input=(".correct"){score++} else{timer-("15000ms")}
//USE SET INTERVAL TIMER
window.onload = function() {
  function startTimer(duration, display) {
    var seconds = 75;
    document.getElementById("startCard").style.display = "none";
    displayQuestion();
    setInterval(function() {
      document.getElementById("timer").innerText = "Time Remaining: " + seconds;
      seconds--;
    }, 1000);
  }

  var start = document.getElementById("start");
  console.log(start);
  start.addEventListener("click", startTimer);

  var score = 0;

  
  var displayedQuestion = 1;
  
  function displayQuestion() {
      document.getElementById("q" + displayedQuestion).style.display = "block";
      displayQuestion++;
    }
};

var answerBtn = document.getElementsByClassName("answer")
function answerSelect(event){
    console.log(event)
}
    for(var i = 0; i < answerBtn.length; i++){
        answerBtn[i].addEventListener("click", answerSelect)
    }

// document.getElementById("answer").addEventListener("click", function(event){
//   console.log(event);
// })