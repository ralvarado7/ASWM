

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        //they are making the number into 2 digits
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

//windown.addEventListener ('click', function)
window.addEventListener('load', function () {
    var input = document.querySelector('input');
    
    
    var display = document.querySelector('#time');
    //console.log(setMinutes, display); 
    document.querySelector('#boton').addEventListener('click', function(){
       var setMinutes = 60 * parseInt(input.value, 10);
       startTimer(setMinutes, display);
    });
});



    /*var btn = document.getElementById('boton');
    btn.addEventListener('click', function timerTrigger () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    });*/



