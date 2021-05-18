let hour = 0;
let min = 0;
let sec = 0;
let milisec = 0;

var timer;

function timeCalculation(){
    milisec++;
    if(milisec >= 100){
        milisec = 0;
        sec++;
        if(sec >= 60){
            sec = 0;
            min++;
            if(min >= 60){
                min = 0;
                hour++;
            }
        }
    }
}
function at2Digits(num){
    if(num < 10) return "0" + num;
    return num;
}

function showElapsedTime(){
    $("#show-hour").text(at2Digits(hour));
    $("#show-min").text(at2Digits(min));
    $("#show-sec").text(at2Digits(sec));
    $("#show-milisec").text(at2Digits(milisec));
}

function setBtnDisable(str){
    if(str === "start"){
        $("#start-button").prop('disabled', true);
        $("#stop-button").prop('disabled', false);
    }
    else if(str === "stop"){
        $("#start-button").prop('disabled', false);
        $("#stop-button").prop('disabled', true);
    }
    
    if(hour === 0 && min === 0 && sec === 0 && milisec === 0) $("#reset-button").prop('disabled', true);
    else  $("#reset-button").prop('disabled', false);
}

function countUp(){
    timeCalculation();
    showElapsedTime();
}

function countStop(){
    clearInterval(timer);
}

function countReset(){
    hour = 0;
    min = 0;
    sec = 0;
    milisec = 0;
    showElapsedTime();
}

$(document).ready(function(){
    $("#start-button").click(function(){
        clearInterval(timer)
        timer = setInterval(countUp, 10);
        setTimeout(setBtnDisable, 10, "start");
    });
    $("#stop-button").click(function(){
        countStop();
        setBtnDisable("stop");
    });
    $("#reset-button").click(function(){
        countReset();
        setTimeout(setBtnDisable, 10, "reset");
    });
});