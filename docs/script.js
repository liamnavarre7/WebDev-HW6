/*
    HW6 Starter code
     Modified from: https://codepen.io/cathydutton/pen/GBcvo
     NAME: Liam Navarre
     CLASS: CPSC 332
     ASSIGNMENT: HW6
     LAST MODIFIED: 11/17/2022
*/
$(document).ready(function () {
    var seconds = 00;
    var tens = 00;
    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds");
    var $buttonStart = $("#button-start");
    var $buttonStop = $("#button-stop");
    var $buttonReset = $("#button-reset");
    var $timer = $("#timer");
    var $continer = $("#container");
    var $title = $("#title");
    var $description = $("#description");
    var interval;
    var tempTime = 00;

    var contrainer_background ={
        "width": "500px",
        "height": "500px",
        "background-color": "lightblue",
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        "border-radius": "10px",
        "border": "5px solid blue",
    };

    $continer.css(contrainer_background);
    
    $title.css({
        "font-style": "italic",
        "font-size": "50px",
        "text-transform": "uppercase",
        "margin-bottom": "0px",
        "color": "blue",
        "text-shadow": "2px 2px 4px #000000"
    });

    $description.css({
        "font-family": "sans-serif",
        "font-size": "20px",
        "margin-top": "0px",
        "color": "cornflowerblue"
    });
    

    var timer_background = {
        "background-color": "grey",
    };

    var timer_background_start = {
        "background-color": "green",
    };

    var timer_background_pause = {
        "background-color": "red",
    };

    $timer.addClass("timer-background");
    $(".timer-background").css(timer_background);
    
    $buttonStart.addClass("button_style");
    $buttonStop.addClass("button_style");
    $buttonReset.addClass("button_style");

    $(".button_style").css({
        "background-color": "blue",
        "color": "white",
        "border": "none",
        "padding": "15px 32px",
        "text-align": "center",
        "display": "inline-block",
        "font-size": "16px",
        "margin": "4px 2px",
        "cursor": "pointer",
    });

    
    
    $buttonStart.click(function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        $(".timer-background").css(timer_background_start);
        
        animateInterval = setInterval(function (){
            $(".timer-background").animate({opacity: 0.7}, {duration: 500, complete: function() {
                $(".timer-background").animate({opacity: 1}, {duration: 500});
            }});
        }, 1000);
    });

    $buttonStop.click(function() {
        clearInterval(interval);
        clearInterval(animateInterval);
        $(".timer-background").css(timer_background_pause);
    });

    $buttonReset.click(function() {
        clearInterval(interval);
        clearInterval(animateInterval);
        tens = "00";
        seconds = "00";
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
        $timer.css(timer_background);
    });

    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.html("0" + tens);
        }

        if (tens > 9) {
            $appendTens.html(tens);

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.html("0" + seconds);
            tens = 0;
            $appendTens.html("0" + 0);
        }

        if (seconds > 9) {
            $appendSeconds.html(seconds);
        }
    }
});