
$(function() {
    // variables
    let mode = false; // App mode
    let timeCounter = 0;  // time counter
    let lapCounter = 0;    // lap counter
    let action;    // variable for setInterval
    let lapNumber = 0;    // Number of laps
     // minutes, seconds, centiseconds for the time and lap
    let timeMinutes, timeSeconds, timeCentiseconds;  
    let lapMinutes, lapSeconds, lapCentiseconds;   

    // On App load show start and lap buttons
    hideShowButtons("#startButton", "#lapButton");

    // Click on start button
    $("#startButton").click(function() {
        // mode ON
        mode = true;
        // show stop and lap buttons
        hideShowButtons("#stopButton", "#lapButton");
        // start counter
        startAction();
    });
        

    // Click on stop button
    $("#stopButton").click(function() {
        // show resume and reset buttons
        hideShowButtons("#resumeButton", "#resetButton");
        // stop counter
        clearInterval(action);
    });
        

    // Click on resume button
        // show stop and lap buttons
        // start action

    // Click on reset button
        // reload the page

    // Click on lap button
        // if mode is ON
        // stop action
        // reset lap and print the lap details
        // start action


    // functions:
    // hideShowButtons function shows two buttons
    function hideShowButtons (x, y) {
        $(".control").hide();
        $(x).show();
        $(y).show();
    }

    // Starts the counter
    function startAction () {
        action = setInterval(() => {
            timeCounter++;
            if (timeCounter == 100*60*100) {
                timeCounter = 0;
            }
            lapCounter++;
            if (lapCounter == 100*60*100) {
                lapCounter = 0;
            }
            updateTime();
        }, 10);    
    }

    // updateTime function converts counters to min, sec and centiseconds
    function updateTime () {
        // 1 min = 60 x 100 centiseconds = 6000 centiseconds
        timeMinutes = Math.floor(timeCounter / 6000);
        // 1 sec = 100 centiseconds 
        timeSeconds = Math.floor((timeCounter % 6000) / 100);
        timeCentiseconds = (timeCounter % 6000) % 100;

        $("#timeminute").text(formatNumber(timeMinutes));
        $("#timesecond").text(formatNumber(timeSeconds));
        $("#timecentisecond").text(formatNumber(timeCentiseconds));

        // 1 min = 60 x 100 centiseconds = 6000 centiseconds
        lapMinutes = Math.floor(lapCounter / 6000);
        // 1 sec = 100 centiseconds 
        lapSeconds = Math.floor((lapCounter % 6000) / 100);
        lapCentiseconds = (lapCounter % 6000) % 100;

        $("#lapminute").text(formatNumber(lapMinutes));
        $("#lapsecond").text(formatNumber(lapSeconds));
        $("#lapcentisecond").text(formatNumber(lapCentiseconds));
    }

    // formatNumber function
    function formatNumber (number) {
        if (number < 10) {
            return "0" + number;
        }
        else {
            return number;
        }
    }

});