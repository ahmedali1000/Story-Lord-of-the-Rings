function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {

        seconds = parseInt(timer % 60, 10);


        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent =  seconds;

        if (--timer < 0) {
            timer = duration;
            document.getElementById('timer').style.visibility= "hidden";
        }}, 1000);

}

window.onload = function () {
    var tenscond = 10 ,
        display = document.querySelector('#time');
    startTimer(tenscond, display);
};
