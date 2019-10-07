//create variable for score and timer and if input=(".correct"){score++} else{timer-("15000ms")}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

//can't get this to work
document.getElementById("start").addEventListener(('click'),startTimer (duration, display)){
    var oneFifteen = 60 * 1.25,
        display = document.querySelector('#timer');
    startTimer(oneFifteen, display);
};

startTimer();


function scoreCount(){
    var score = 0;
    if document.getElementById('correct').onclick{
        console.log score++;
    }
    else timer = document.getElementById("timer").innerText = (oneFifteen - 15000ms)

};

scoreCount();

//create variable for questions and correct answers in questions.js

//show one card at a time

//if user selects an answer show the next card
function next(){
    var questions = ["#start", "#q1", "#q2", "#q3", "#q4", "#q5", "#end"]
    if document.getElementsByClassName("btn").onclick{
        append.nextQuestion[i]++;
    }
};



