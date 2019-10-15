//create variable for score and timer and if input=(".correct"){score++} else{timer-("15000ms")}
//USE SET INTERVAL TIMER
var displayedQuestion = 0;
var qContainer = document.getElementById("q");
var score = 0;
var seconds = 75;
window.onload = function() {
  function startTimer(duration, display) {
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


  console.log(qContainer);

  function displayQuestion() {
    var allButtons = document.getElementById("cardBody");
    qContainer.textContent = questions[displayedQuestion].title;
    // displayedQuestion++;
    qContainer.style.display = "block";

    // var answerBtn = document.getElementsByClassName("answer")
    var answerBtn = questions[displayedQuestion].choices;
    // function answerSelect(event){
    //   console.log(event)
    // }
    for (var i = 0; i < answerBtn.length; i++) {
      // answerBtn[i].addEventListener("click", answerSelect)
      var newBtn = document.createElement("button");
      newBtn.textContent = answerBtn[i];
      newBtn.className += "options";
      allButtons.appendChild(newBtn);

      newBtn.addEventListener("click", function(event){
        console.log(this.textContent);
        if( this.textContent == questions[displayedQuestion].answer){
          console.log("Correct!")
        }
        else{
          seconds -= 15;
        }
        var elements = document.getElementsByClassName("options");
        while(elements.length > 0){
          elements[0].parentNode.removeChild(elements[0]);
        }
        displayedQuestion++;
        displayQuestion();

      })
    }
  }

  console.log(questions);
};

// document.getElementById("answer").addEventListener("click", function(event){

//   console.log(event);
// })
