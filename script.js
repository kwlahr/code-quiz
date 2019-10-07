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
document.getElementById("start").addEventListener('click',startTimer (duration, display) {
    var oneFifteen = 60 * 1.25,
        display = document.querySelector('#timer');
    startTimer(oneFifteen, display);
};


function scoreCount(){
    var score = x;
    if document.getElementById("correct").onclick{
        return score++;
    }
    else timer = document.getElementById("timer").innerText = (oneFifteen - 15000ms)

};



//create variable for questions and correct answers
//create array of questions to append to container sequentially
